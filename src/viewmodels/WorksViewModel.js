import { auth, db, storage } from '../firebase/config.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export class WorksViewModel {
  constructor(works = []) {
    this.works = works;
    this.filteredWorks = works;
    this.currentCategory = 'all';
    this.mainType = 'photography'; // 'photography' or 'design'
    this.viewMode = 'grid'; // 'grid' or 'list'
    this.currentPage = 'home'; // 'home', 'works', 'about', 'services', 'admin'
    this.listeners = [];

    // Auth State
    this.user = null;
    this.initAuth();
  }

  fixPath(path) {
    if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    if (base && path.startsWith(base)) return path;
    let cleanPath = path.replace(/^\/public\//, '/');
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
    return base + cleanPath;
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
    let results = this.works.filter(work => work.mainType === this.mainType);
    if (this.currentCategory !== 'all') {
      results = results.filter(work => work.category === this.currentCategory);
    }
    this.filteredWorks = results;
  }

  subscribe(listener) {
    this.listeners.push(listener);
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
      this.updateFilteredWorks();
      this.notify();
      return { success: true };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { success: false, error: e.message };
    }
  }

  async deleteWork(workId) {
    if (!confirm('確定要刪除呢個作品嗎？')) return;
    try {
      // 嘗試從 Firestore 刪除 (如果是 Firestore 項目)
      await deleteDoc(doc(db, "works", workId.toString()));

      // 更新本地狀態，確保 ID 類型不匹配時也能正確 Filter (統一轉 String 比較)
      this.works = this.works.filter(w => w.id.toString() !== workId.toString());
      this.updateFilteredWorks();
      this.notify();
    } catch (e) {
      console.error("Error deleting work:", e);
    }
  }

  async updateWork(workId, workData) {
    try {
      const docRef = doc(db, "works", workId.toString());
      await updateDoc(docRef, workData);

      const index = this.works.findIndex(w => w.id.toString() === workId.toString());
      if (index !== -1) {
        this.works[index] = { ...this.works[index], ...workData };
        this.updateFilteredWorks();
        this.notify();
      }
      return { success: true };
    } catch (e) {
      console.error("Error updating document: ", e);
      return { success: false, error: e.message };
    }
  }

  async uploadFile(file) {
    if (!file) return null;

    // 檔案大小檢查 (例如建議唔好超過 5MB)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      const proceed = confirm(`呢個 File 有 ${(file.size / (1024 * 1024)).toFixed(2)}MB，對網頁背景嚟講可能太重。建議你先用 Workflow 進行壓縮。仲要繼續上傳嗎？`);
      if (!proceed) return null;
    }

    const storageRef = ref(storage, 'uploads/' + new Date().getTime() + '_' + file.name);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  }

  // Method to fetch initial data if we were fully migrating (optional for now as we mix hardcoded + dynamic)
  async fetchWorks() {
    try {
      const querySnapshot = await getDocs(collection(db, "works"));
      const fetchedWorks = [];
      querySnapshot.forEach((doc) => {
        fetchedWorks.push({ ...doc.data(), id: doc.id });
      });
      // 將 Firebase 數據與硬編碼數據合併
      // 我們按時間倒序排列，新加的在前面
      this.works = [...fetchedWorks, ...this.works];
      this.updateFilteredWorks();
      this.notify();
    } catch (e) {
      console.error("Error fetching works: ", e);
    }
  }

  getYears() {
    const years = [...new Set(this.works.map(work => work.year))];
    return years.sort((a, b) => b - a);
  }
}
