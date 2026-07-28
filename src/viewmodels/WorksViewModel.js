import { auth, db, storage } from '../firebase/config.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export class WorksViewModel {
  constructor(works = []) {
    // 從 localStorage 獲取已刪除的硬編碼 ID
    this.deletedIds = JSON.parse(localStorage.getItem('dtw_deleted_ids') || '[]');

    // 保存原始硬編碼作品副本，供同步使用
    this.originalHardcodedWorks = [...works];

    // 過濾掉已刪除的作品
    this.works = works.filter(w => !this.deletedIds.includes(w.id.toString()));
    this.filteredWorks = this.works;
    this.currentCategory = 'all';
    this.mainType = 'all'; // Default to 'all'
    this.viewMode = 'grid'; // 'grid' or 'list'
    this.currentPage = 'home'; // 'home', 'works', 'about', 'services', 'admin'
    this.listeners = [];

    // Auth State
    this.user = null;
    this.initAuth();
  }

  fixPath(path) {
    if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
    const base = (import.meta.env.BASE_URL || './').replace(/\/$/, '');
    let cleanPath = path.replace(/^\/+/, '');
    cleanPath = cleanPath.replace(/^public\//, '');
    if (base === '.' || base === './') return './' + cleanPath;
    return base + '/' + cleanPath;
  }

  checkFirebaseConfig() {
    // A simple heuristic to check if the user has replaced the placeholders
    // Accessing the imported 'auth' object's config directly isn't straightforward in modular SDK
    // so we check if the operations fail or we can add a manual check if we had access to the config string.
    // Better yet, let's just let the UI call this.
    return true;
  }

  // Helper to check if config is still default
  isConfigured() {
    // This is hard to check beautifully without importing the config object content directly, 
    // but we can try to infer or just rely on the UI layer to show the "Update Config" message
    // if auth fails immediately.
    // For now, let's assume if the app acts up, it's config. 
    // Actually, let's try to see if we can perform a dummy operatoin or just let the view handle it.
    return true;
  }


  setCurrentPage(page) {
    this.currentPage = page;
    this.notify();
  }

  setMainType(type) {
    this.mainType = type;
    this.currentCategory = 'all';
    this.updateFilteredWorks();
    this.notify();
  }

  setCategory(category) {
    this.currentCategory = category;
    this.updateFilteredWorks();
    this.notify();
  }

  updateFilteredWorks() {
    let results = this.mainType === 'all'
      ? this.works
      : this.works.filter(work => work.mainType === this.mainType);

    if (this.currentCategory !== 'all') {
      results = results.filter(work => (work.category || '其他') === this.currentCategory);
    }

    // 統一排序邏輯：按精選優先，其次按年份排序 (最新在前)
    this.sortWorks(results);

    this.filteredWorks = results;
  }

  // 新增統一排序方法
  sortWorks(worksArray) {
    worksArray.sort((a, b) => {
      const pinnedA = a.pinned === true || a.pinned === 'true';
      const pinnedB = b.pinned === true || b.pinned === 'true';
      if (pinnedA !== pinnedB) return pinnedA ? -1 : 1;

      const featuredA = a.featured === true || a.featured === 'true';
      const featuredB = b.featured === true || b.featured === 'true';
      if (featuredA !== featuredB) return featuredA ? -1 : 1;

      return (b.year || 0) - (a.year || 0);
    });
  }

  getCategories() {
    const worksToScan = this.mainType === 'all'
      ? this.works
      : this.works.filter(work => work.mainType === this.mainType);

    const rawCategories = worksToScan.map(work => work.category || 'other');
    const uniqueCategories = [...new Set(rawCategories)];

    // 'all' 永遠喺最前，'other' 永遠喺最後
    let final = ['all'];
    const middle = uniqueCategories.filter(c => c !== 'all' && c !== 'other');
    middle.sort(); // 字母排序中間嘅標籤
    final.push(...middle);

    if (!final.includes('other')) {
      final.push('other');
    }

    return final;
  }

  subscribe(listener) {
    if (!this.listeners.includes(listener)) {
      this.listeners.push(listener);
    }
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
    this.notify();
  }

  initAuth() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      if (user) {
        // If on admin page or login page, stay/redirect
        if (this.currentPage === 'admin') {
          this.notify();
        }
      } else {
        // If logged out and on admin page, show login
        if (this.currentPage === 'admin') {
          this.notify();
        }
      }
    });
  }

  async login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async logout() {
    await signOut(auth);
  }

  async addWork(workData) {
    try {
      const docRef = await addDoc(collection(db, "works"), workData);
      const newWork = { ...workData, id: docRef.id };
      this.works = [newWork, ...this.works]; // Add to local state

      // 重新對總體列表排序
      this.sortWorks(this.works);

      this.updateFilteredWorks();
      this.notify();
      return { success: true };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { success: false, error: e.message };
    }
  }

  async deleteWork(workId) {
    console.log('[VM] deleteWork called with ID:', workId, 'Type:', typeof workId);
    try {
      // 嘗試從 Firestore 刪除
      try {
        await deleteDoc(doc(db, "works", workId.toString()));
        console.log('[VM] Firestore delete attempt finished for:', workId);
      } catch (fsErr) {
        console.warn("[VM] Firestore delete failed (likely hardcoded):", fsErr);
      }

      // 更新本地狀態
      const initialCount = this.works.length;
      this.works = this.works.filter(w => {
        const match = w.id.toString() === workId.toString();
        // if (match) console.log('[VM] Match found for deletion:', w.id);
        return !match;
      });
      console.log('[VM] Local works filtered. Before:', initialCount, 'After:', this.works.length);

      // 持久化刪除記錄
      if (!this.deletedIds.includes(workId.toString())) {
        this.deletedIds.push(workId.toString());
        localStorage.setItem('dtw_deleted_ids', JSON.stringify(this.deletedIds));
        console.log('[VM] ID saved to localStorage:', workId);
      }

      this.updateFilteredWorks();
      this.notify();
    } catch (e) {
      console.error("[VM] Error in deleteWork process:", e);
    }
  }

  async updateWork(workId, workData) {
    try {
      const docRef = doc(db, "works", workId.toString());
      // Use setDoc with merge:true to support upsert for hardcoded works
      await setDoc(docRef, workData, { merge: true });

      const index = this.works.findIndex(w => w.id.toString() === workId.toString());
      if (index !== -1) {
        this.works[index] = { ...this.works[index], ...workData };

        // 重新對總體列表排序
        this.sortWorks(this.works);

        this.updateFilteredWorks();
        this.notify();
      }
      return { success: true };
    } catch (e) {
      console.error("Error updating document: ", e);
      return { success: false, error: e.message };
    }
  }

  async compressImage(file, maxWidth = 1920, quality = 0.8) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              const compressedFile = new File([blob], file.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            },
            "image/jpeg",
            quality
          );
        };
      };
    });
  }

  async uploadFile(file) {
    if (!file) return null;

    let fileToUpload = file;
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    // 自動壓縮圖片 (如果超過 2MB)
    if (isImage && file.size > 2 * 1024 * 1024) {
      console.log(`[VM] Image too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Compressing...`);
      fileToUpload = await this.compressImage(file);
      console.log(`[VM] Compression complete. New size: ${(fileToUpload.size / 1024 / 1024).toFixed(2)}MB`);
    }

    // 影片大檔案檢查 (Canvas 唔支援影片壓縮，所以依然顯示提示)
    const MAX_VIDEO_SIZE = 10 * 1024 * 1024; // 10MB
    if (isVideo && file.size > MAX_VIDEO_SIZE) {
      const proceed = confirm(`呢個影片 File 有 ${(file.size / (1024 * 1024)).toFixed(2)}MB，對網頁背景嚟講可能太重。建議你先跟隨流程進行壓縮。仲要繼續上傳嗎？`);
      if (!proceed) return null;
    }

    const storageRef = ref(storage, 'uploads/' + new Date().getTime() + '_' + fileToUpload.name);
    await uploadBytes(storageRef, fileToUpload);
    return await getDownloadURL(storageRef);
  }

  // Method to fetch initial data if we were fully migrating (optional for now as we mix hardcoded + dynamic)
  async fetchWorks() {
    console.log('[VM] Starting fetchWorks...');
    try {
      const querySnapshot = await getDocs(collection(db, "works"));
      const fetchedWorks = [];
      querySnapshot.forEach((doc) => {
        fetchedWorks.push({ ...doc.data(), id: doc.id });
      });

      // 1. 過濾掉已刪除的作品
      const visibleFetched = fetchedWorks.filter(fw => !this.deletedIds.includes(fw.id.toString()));

      // 2. 獲取硬編碼作品並與 Firestore 數據合併
      const hardcoded = this.originalHardcodedWorks || [];

      const mergedVisibleFetched = visibleFetched.map(fw => {
        // 如果標題匹配，嘗試合併屬性（例如優先使用硬編碼嘅 featured 標誌，直到數據完全遷移）
        const hwMatch = hardcoded.find(hw => hw.title === fw.title);
        if (hwMatch) {
          return { ...hwMatch, ...fw, featured: fw.featured || hwMatch.featured };
        }
        return fw;
      });

      const filteredHardcoded = hardcoded.filter(hw => {
        const isDeleted = this.deletedIds.includes(hw.id.toString());
        // 如果 Firestore 中已經存在相同標題的作品，則視為已遷移，唔再重複顯示硬編碼版本
        const isDuplicate = mergedVisibleFetched.some(fw => fw.title === hw.title);
        return !isDeleted && !isDuplicate;
      });

      this.works = [...mergedVisibleFetched, ...filteredHardcoded];

      // 確保所有 work.featured 轉化為正確嘅 type (如果來自 Firestore 可能是 string)
      this.works.forEach(w => {
        w.featured = w.featured === true || w.featured === 'true';
        w.pinned = w.pinned === true || w.pinned === 'true';
      });

      // 統一排序
      this.sortWorks(this.works);
      this.updateFilteredWorks();
      this.notify();
      console.log('[VM] Sync complete. Firestore(Merged):', mergedVisibleFetched.length, 'Hardcoded(New):', filteredHardcoded.length);
    } catch (e) {
      console.error("[VM] Error fetching works: ", e);
    }
  }

  getYears() {
    const years = [...new Set(this.works.map(work => work.year))];
    return years.sort((a, b) => b - a);
  }
}
