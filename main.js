import { Work } from './src/models/Work.js';
import { WorksViewModel } from './src/viewmodels/WorksViewModel.js';
import { Header } from './src/views/Header.js';
import { WorksGrid } from './src/views/WorksGrid.js';
import { Home } from './src/views/Home.js';
import { About } from './src/views/About.js';
import { Services } from './src/views/Services.js';
import { Loading } from './src/views/Loading.js';
import { AdminLogin } from './src/views/AdminLogin.js';
import { AdminDashboard } from './src/views/AdminDashboard.js';
import { WorkDetailModal } from './src/views/WorkDetailModal.js';

// State for loading
let isLoading = true;
let lastPage = null;
let lastUser = null;

// 資源路徑修復工具
const fixPath = (path) => {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && path.startsWith(base)) return path;
  let cleanPath = path.replace(/^\/public\//, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  return base + cleanPath;
};

// 初始化數據 - 所有作品將從 Firebase 加載
// 示範數據已移除，請通過 Admin 後台上傳作品
const photographyWorks = [];
const photography = [];
const designWorks = [];
const videoWorks = [];

// 背景视频列表
const backgroundVideos = [
  fixPath('/Videos/Background_Video/網站主頁_1.mp4'),
  fixPath('/Videos/Background_Video/網站主頁_2.mp4'),
  fixPath('/Videos/Background_Video/網站主頁_3.mp4'),
  fixPath('/Videos/Background_Video/網站主頁_4.mp4'),
  fixPath('/Videos/Background_Video/網站主頁_5.mp4'),
  fixPath('/Videos/Background_Video/網站主頁_6.mp4')
];

// 主題素材庫 (支持混合視頻與圖片)
const themeVideoLibraries = {
  'events': [
    fixPath('/Videos/Theme_Clip/活動花䋈/A.mp4'),
    fixPath('/Videos/Theme_Clip/活動花䋈/B.mp4'),
    fixPath('/Videos/Theme_Clip/活動花䋈/C.mp4')
  ],
  'exhibition': [
    fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00001.jpg'),
    fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00002.jpg'),
    fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00003.jpg'),
    fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00004.jpg'),
    fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00005.jpg')
  ],
  'stories': [
    fixPath('/Videos/Theme_Clip/人物故事/A.mp4'),
    fixPath('/Videos/Theme_Clip/人物故事/B.mp4')
  ],
  'special': [
    fixPath('/Videos/Theme_Clip/特別主題/A.mp4'),
    fixPath('/Videos/Theme_Clip/特別主題/B.mp4')
  ],
  'brand': [
    fixPath('/Videos/Background_Video/bg_video00002.mp4'),
    fixPath('/Videos/Background_Video/bg_video00003.mp4'),
    fixPath('/Videos/Background_Video/bg_video00004.mp4'),
    fixPath('/Videos/Background_Video/bg_video00005.mp4')
  ],
  'printing': [
    fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00001.jpeg'),
    fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00002.png'),
    fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00003.png'),
    fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00004.png'),
    fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00005.png')
  ],
  'multimedia': [
    fixPath('/images/Design_portfolio/Multimedia/Multimedia00001.png'),
    fixPath('/images/Design_portfolio/Multimedia/Multimedia00002.png'),
    fixPath('/images/Design_portfolio/Multimedia/Multimedia00003.png')
  ],
  'souvenir': [
    fixPath('/images/Design_portfolio/Souvenir/Souvenir00001.jpg'),
    fixPath('/images/Design_portfolio/Souvenir/Souvenir00002.jpeg'),
    fixPath('/images/Design_portfolio/Souvenir/Souvenir00003.png'),
    fixPath('/images/Design_portfolio/Souvenir/Souvenir00004.jpg'),
    fixPath('/images/Design_portfolio/Souvenir/Souvenir00005.jpg')
  ]
};

let currentVideoIndex = 0;
let carouselInterval = null;
let currentLibrary = backgroundVideos;

const isImage = (path) => {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(path);
};

const startCarousel = (theme = null) => {
  if (carouselInterval) clearInterval(carouselInterval);

  if (theme && themeVideoLibraries[theme]) {
    currentLibrary = themeVideoLibraries[theme];
    currentVideoIndex = 0;
  } else {
    currentLibrary = backgroundVideos;
  }

  const nextSlide = () => {
    currentVideoIndex = (currentVideoIndex + 1) % currentLibrary.length;
    const media = currentLibrary[currentVideoIndex];
    if (isImage(media)) {
      updateHomeBackground(media, null, nextSlide);
    } else {
      updateHomeBackground(null, media, nextSlide);
    }
  };

  // 初始播放
  const firstMedia = currentLibrary[currentVideoIndex];
  if (isImage(firstMedia)) {
    updateHomeBackground(firstMedia, null, nextSlide);
  } else {
    updateHomeBackground(null, firstMedia, nextSlide);
  }
};

const stopCarousel = () => {
  if (carouselInterval) clearInterval(carouselInterval);
};

const vm = new WorksViewModel([]);

// Preload resources function
const preloadResources = async () => {
  // 由於示範數據已移除，只預加載背景視頻
  const images = [];

  const loadImage = (src) => {
    return new Promise((resolve) => {
      if (!src) resolve();
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = resolve; // Continue even if error
    });
  };

  const loadVideo = (src, timeout = 10000) => {
    return new Promise((resolve) => {
      if (!src) {
        resolve();
        return;
      }

      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';

      let resolved = false;
      const done = () => {
        if (!resolved) {
          resolved = true;
          // Clean up to avoid memory leaks if not used immediately
          video.oncanplaythrough = null;
          video.onerror = null;
          resolve();
        }
      };

      video.oncanplaythrough = done;
      video.onerror = done;

      // Force load
      video.load();

      // Timeout fallback
      setTimeout(done, timeout);
    });
  };

  try {
    // 1. Start loading images in parallel
    const imagePromises = images.map(img => loadImage(img));

    // 2. Prioritize the first background video for the immediate "Wow" factor
    // We wait for it to be playable through to avoid choppiness ("斷斷續續")
    const firstVideo = backgroundVideos[0];
    if (firstVideo) {
      await loadVideo(firstVideo);
    }

    // 3. Wait for images (usually faster than video anyway)
    await Promise.all(imagePromises);

    // Artificial delay for smooth UX if loading is too fast (min 1 sec)
    await new Promise(resolve => setTimeout(resolve, 1000));

  } catch (e) {
    console.warn("Preloading error:", e);
  } finally {
    isLoading = false;
    render();
  }
};

const render = () => {
  let headerRoot = document.getElementById('header-root');
  let appRoot = document.getElementById('app-root');

  if (isLoading) {
    document.body.innerHTML = Loading();
    lastPage = null; // Reset on loading
    return;
  } else {
    // Restore body structure if it was replaced by Loading
    if (!document.getElementById('header-root')) {
      document.body.innerHTML = `
            <div id="header-root"></div>
            <main id="app-root" class="container"></main>
            <div id="footer-root"></div>
            <div id="modal-root"></div>
         `;
      headerRoot = document.getElementById('header-root');
      appRoot = document.getElementById('app-root');
    }
  }

  // 始終渲染 Header
  headerRoot.innerHTML = Header(vm);

  const isPageChanged = lastPage !== vm.currentPage;

  // 更新 Body Class 以適配透明 Header
  if (vm.currentPage === 'home') {
    document.body.classList.add('is-home');
    appRoot.innerHTML = '';
    const existingHome = document.querySelector('.home-container');
    if (!existingHome) {
      const homeContainer = document.createElement('div');
      homeContainer.innerHTML = Home(vm);
      document.body.appendChild(homeContainer.firstElementChild);
    }
    startCarousel();
  } else {
    document.body.classList.remove('is-home');
    stopCarousel();
    document.body.style.backgroundColor = '#ffffff';
    document.querySelector('.home-container')?.remove();

    if (vm.currentPage === 'admin') {
      const isAuthChanged = lastUser !== vm.user;

      if (vm.user) {
        // 如果頁面或登入狀態切換，我哋需要渲染 Dashboard
        if (isPageChanged || isAuthChanged) {
          appRoot.innerHTML = AdminDashboard(vm);
          setupAdminListeners(vm);
        } else {
          updateAdminTableOnly(vm);
        }
      } else {
        if (isPageChanged || isAuthChanged) {
          appRoot.innerHTML = AdminLogin(vm);
          setupLoginListeners(vm);
        }
      }
      lastUser = vm.user;
    } else {
      // 標準頁面
      if (isPageChanged) {
        if (vm.currentPage === 'works') {
          appRoot.innerHTML = WorksGrid(vm);
        } else if (vm.currentPage === 'services') {
          appRoot.innerHTML = Services(vm);
        } else if (vm.currentPage === 'about') {
          appRoot.innerHTML = About(vm);
        }
      } else if (vm.currentPage === 'works') {
        // Works 頁面如果有數據更新，亦可以做增量更新
        appRoot.innerHTML = WorksGrid(vm);
      }
    }
  }

  // 始終保持 Listener 同步 (除咗 Admin Login 之外)
  // 如果係 Admin Login，setupLoginListeners 會自己搞掂內容 listener
  // 但 Header listener 仍然需要 re-attach
  if (vm.currentPage !== 'admin' || vm.user) {
    setupEventListeners();
  }

  lastPage = vm.currentPage;
};

// 專為 Admin 頁面設計嘅增量更新
const updateAdminTableOnly = (vm) => {
  const tbody = document.getElementById('admin-works-table-body');
  if (!tbody) return;

  console.log('[View] Incremental update for Admin Table');
  tbody.innerHTML = vm.works.map(work => `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px; font-size: 11px; opacity: 0.6;">${work.id}</td>
                <td style="padding: 10px;">
                    <img src="${fixPath(work.thumbnail)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 10px; font-weight: 500;">${work.title}</td>
                <td style="padding: 10px;">${work.category}</td>
                <td style="padding: 10px;">
                    <div style="display: flex; gap: 8px;">
                      <button type="button" class="edit-btn" data-id="${work.id}" style="padding: 5px 12px; background: #eee; border: none; cursor: pointer; border-radius: 4px;">編輯</button>
                      <button type="button" class="delete-btn" data-id="${work.id}" style="padding: 5px 12px; background: #ffebeb; color: #d00; border: none; cursor: pointer; border-radius: 4px;">刪除</button>
                    </div>
                </td>
            </tr>
        `).join('');
};

const setupLoginListeners = (vm) => {
  // Show warning if config seems default (we'll just toggle it based on a simple check)
  // Since we can't easily check the config values from here without importing, 
  // we will leave it hidden by default. The user will see auth errors if it fails.
  const warning = document.getElementById('login-config-warning');
  if (warning) {
    // If we could check, we would. For now, rely on docs.
    // warning.style.display = 'block'; 
  }

  const form = document.getElementById('admin-login-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const errorP = document.getElementById('login-error');

    const result = await vm.login(email, password);
    if (!result.success) {
      errorP.textContent = "登入失敗: " + result.error;
      errorP.style.display = 'block';
    }
  });
};

const setupAdminListeners = (vm) => {
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    vm.logout();
  });

  // Form handling
  const form = document.getElementById('work-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '保存中...';

    // Heuristically check for default config
    // In a real app we might want to expose this on the VM more cleanly
    const isConfigured = vm.checkFirebaseConfig();
    if (!isConfigured) {
      // This likely won't be hit because checkFirebaseConfig currently returns true
      // But we added the warning DIV in the UI already.
    }

    try {
      const workId = document.getElementById('work-id').value;
      const title = document.getElementById('work-title').value;
      const year = parseInt(document.getElementById('work-year').value);
      const mainType = document.getElementById('work-mainType').value;
      const category = document.getElementById('work-category').value;
      const description = document.getElementById('work-description').value;

      let thumbnail = document.getElementById('work-thumbnail-url').value;
      const thumbFile = document.getElementById('work-thumbnail-file').files[0];

      if (thumbFile) {
        thumbnail = await vm.uploadFile(thumbFile);
      }

      let mediaUrl = document.getElementById('work-media-url').value;
      const mediaFile = document.getElementById('work-media-file').files[0];

      if (mediaFile) {
        mediaUrl = await vm.uploadFile(mediaFile);
      }

      // Handle multiple images
      const imagesFiles = document.getElementById('work-images-files').files;
      let extraImages = [];
      if (imagesFiles.length > 0) {
        const uploadPromises = Array.from(imagesFiles).map(file => vm.uploadFile(file));
        extraImages = await Promise.all(uploadPromises);
        extraImages = extraImages.filter(url => url !== null);
      }

      const workData = {
        title, year, mainType, category, description,
        thumbnail, mediaUrl,
        updatedAt: new Date()
      };

      if (workId) {
        // Append new images to existing ones instead of replacing
        const existingWork = vm.works.find(w => w.id.toString() === workId.toString());
        let currentImages = (existingWork && existingWork.images) ? [...existingWork.images] : [];

        if (extraImages.length > 0) {
          workData.images = [...currentImages, ...extraImages];
        } else {
          workData.images = currentImages;
        }

        await vm.updateWork(workId, workData);
        alert('作品已更新!');
      } else {
        workData.images = extraImages;
        await vm.addWork({ ...workData, createdAt: new Date() });
        alert('作品已保存!');
      }

      form.reset();
      document.getElementById('work-id').value = '';
      submitBtn.textContent = '保存作品';
    } catch (err) {
      alert('保存失敗: ' + err.message);
    } finally {
      submitBtn.disabled = false;
    }
  });

  document.getElementById('reset-form-btn')?.addEventListener('click', () => {
    form.reset();
    document.getElementById('work-id').value = '';
    document.querySelector('#work-form button[type="submit"]').textContent = '保存作品';
    const preview = document.getElementById('existing-images-preview');
    if (preview) preview.innerHTML = '';
  });

  document.getElementById('clear-images-btn')?.addEventListener('click', async () => {
    const workId = document.getElementById('work-id').value;
    if (!workId) {
      alert('請先選擇一個現有作品進行編輯。');
      return;
    }

    if (confirm('確定要清空呢個作品嘅所有額外相片嗎？')) {
      try {
        await vm.updateWork(workId, { images: [] });
        const preview = document.getElementById('existing-images-preview');
        if (preview) preview.innerHTML = '';
        alert('額外相片已清空！');
      } catch (err) {
        alert('清空失敗: ' + err.message);
      }
    }
  });

  // Populate table
  const tbody = document.getElementById('admin-works-table-body');

  // Check config and show warning
  // Note: We use a heuristic since we can't easily import the config here 
  // without potentially breaking the build if it's missing entirely.
  // We'll trust the user sees the yellow box if they haven't edited the file.
  // Ideally, we'd check `auth.app.options.apiKey === "YOUR_API_KEY"` but imports are module scoped.
  // Let's just blindly show it if the user hasn't logged in successfully? 
  // No, let's assume if they are on AdminDashboard they are logged in.
  // But wait, if they are logged in, config MUST be correct.
  // So the warning is mostly useful on the LOGIN screen or if they manually bypassed auth.

  // However, for the Upload functionality, we want to fail gracefully.

  if (tbody) {
    tbody.innerHTML = vm.works.map(work => `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px; font-size: 11px; opacity: 0.6;">${work.id}</td>
                <td style="padding: 10px;">
                    <img src="${fixPath(work.thumbnail)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 10px; font-weight: 500;">${work.title}</td>
                <td style="padding: 10px;">${work.category}</td>
                <td style="padding: 10px;">
                    <div style="display: flex; gap: 8px;">
                      <button type="button" class="edit-btn" data-id="${work.id}" style="padding: 5px 12px; background: #eee; border: none; cursor: pointer; border-radius: 4px;">編輯</button>
                      <button type="button" class="delete-btn" data-id="${work.id}" style="padding: 5px 12px; background: #ffebeb; color: #d00; border: none; cursor: pointer; border-radius: 4px;">刪除</button>
                    </div>
                </td>
            </tr>
        `).join('');

    // Event Delegation for Table Buttons
    tbody.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('.delete-btn');
      const editBtn = e.target.closest('.edit-btn');

      if (deleteBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = deleteBtn.dataset.id;
        console.log('[View] Delete clicked for ID:', id);

        if (confirm('確定要永久刪除呢個作品嗎？')) {
          console.log('[View] User confirmed delete for:', id);
          vm.deleteWork(id);
        } else {
          console.log('[View] User cancelled delete for:', id);
        }
      }

      if (editBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = editBtn.dataset.id;
        console.log('[View] Edit clicked for ID:', id);
        const work = vm.works.find(w => w.id.toString() === id.toString());
        if (work) {
          document.getElementById('work-id').value = work.id;
          document.getElementById('work-title').value = work.title;
          document.getElementById('work-year').value = work.year;
          document.getElementById('work-mainType').value = work.mainType;
          document.getElementById('work-category').value = work.category;
          document.getElementById('work-description').value = work.description || '';
          document.getElementById('work-thumbnail-url').value = work.thumbnail;
          document.getElementById('work-media-url').value = work.mediaUrl || '';

          // 顯示現有額外相片 (加入個別刪除功能)
          const previewContainer = document.getElementById('existing-images-preview');
          if (previewContainer && work.images) {
            previewContainer.innerHTML = work.images.map((img, index) => `
              <div style="position: relative;" class="preview-img-wrapper" data-index="${index}">
                <img src="${vm.fixPath(img)}" style="width: 60px; height: 60px; object-fit: cover; border: 1px solid #ddd; border-radius: 4px;" />
                <button type="button" class="remove-single-img" data-url="${img}" style="position: absolute; top: -5px; right: -5px; width: 18px; height: 18px; background: #ff4d4d; color: white; border: none; border-radius: 50%; cursor: pointer; font-size: 12px; line-height: 18px; padding: 0;">&times;</button>
              </div>
            `).join('');

            // 個別刪除事件 (Delegate to container)
            previewContainer.onclick = async (e) => {
              const removeBtn = e.target.closest('.remove-single-img');
              if (removeBtn) {
                const urlToRemove = removeBtn.dataset.url;
                const workId = document.getElementById('work-id').value;
                if (!workId) return;

                if (confirm('確定要移除呢張相片嗎？')) {
                  try {
                    const currentWork = vm.works.find(w => w.id.toString() === workId.toString());
                    const updatedImages = currentWork.images.filter(img => img !== urlToRemove);
                    await vm.updateWork(workId, { images: updatedImages });
                    // 重新觸發編輯按鈕嘅邏輯來更新預覽圖列
                    removeBtn.closest('.preview-img-wrapper').remove();
                    alert('相片已移除！');
                  } catch (err) {
                    alert('移除失敗: ' + err.message);
                  }
                }
              }
            };
          } else if (previewContainer) {
            previewContainer.innerHTML = '';
          }

          document.querySelector('#work-form button[type="submit"]').textContent = '更新作品';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
};

const setupEventListeners = () => {
  // About 頁面事件
  document.getElementById('view-works-from-about')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('works');
  });

  document.getElementById('contact-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('感謝您的關注！請通過社交媒體或郵件與我們聯繫。');
  });

  // 導航件
  document.getElementById('go-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('home');
  });

  document.getElementById('nav-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('home');
  });

  document.getElementById('nav-works')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('works');
  });

  document.getElementById('nav-services')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('services');
  });

  document.getElementById('nav-about')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('about');
  });

  // 切換攝影/設計 (如果有的話)
  document.querySelectorAll('.main-type-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      vm.setMainType(e.target.dataset.type);
      vm.setCurrentPage('works');
    });
  });

  // 分类过滤
  document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      vm.setCategory(e.target.dataset.category);
    });
  });

  // 主頁「More」或作品點擊
  document.getElementById('view-more-works')?.addEventListener('click', (e) => {
    e.preventDefault();
    vm.setCurrentPage('works');
  });

  // 主頁主題點選/懸停交互
  document.querySelectorAll('.home-theme-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      const theme = e.currentTarget.dataset.theme;
      startCarousel(theme); // 開啟特定主題的 5s 子輪播
    });

    link.addEventListener('click', (e) => {
      e.preventDefault();
      vm.setCurrentPage('works');
    });
  });

  // 鼠標離開列表恢復默認視頻
  document.querySelector('.home-recent-works')?.addEventListener('mouseleave', () => {
    resetHomeBackground();
    startCarousel(); // 離開時恢復輪播
  });

  // 模式切換邏輯
  document.getElementById('grid-mode')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (vm.viewMode !== 'grid') {
      vm.toggleViewMode();
    }
  });

  document.getElementById('list-mode')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (vm.viewMode !== 'list') {
      vm.toggleViewMode();
    }
  });

  // 作品點選彈窗
  document.querySelectorAll('.work-item, .list-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const workId = item.dataset.id;
      console.log('[Popup] Clicked item ID:', workId);

      const work = vm.works.find(w => w.id.toString() === workId?.toString());
      console.log('[Popup] Found work:', work);

      if (work) {
        openWorkDetail(work);
      }
    });
  });
};

const openWorkDetail = (work) => {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    modalRoot.innerHTML = WorkDetailModal(work, vm);

    // Attach close listeners
    document.getElementById('modal-close')?.addEventListener('click', closeModal);
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') closeModal();
    });
  }
};

const closeModal = () => {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) modalRoot.innerHTML = '';
};

const updateHomeBackground = (imageUrl, videoUrl, onEnd = null) => {
  const container = document.getElementById('home-bg-layer');
  if (!container) return;

  if (carouselInterval) clearInterval(carouselInterval);

  const existingDynamic = document.getElementById('dynamic-bg');
  const baseVideo = document.getElementById('base-video');

  if (videoUrl || imageUrl) {
    const nextMedia = videoUrl ? document.createElement('video') : document.createElement('img');
    nextMedia.id = 'dynamic-bg';
    nextMedia.className = 'home-bg-media';

    if (videoUrl) {
      nextMedia.src = videoUrl;
      nextMedia.autoplay = true;
      nextMedia.muted = true;
      nextMedia.playsinline = true;
      // 用戶要求播放到 End Time，所以不 loop
      nextMedia.loop = false;

      if (onEnd) {
        nextMedia.addEventListener('ended', onEnd, { once: true });
      }
    } else {
      nextMedia.src = imageUrl;
      // 圖片則使用 4s 輪換
      if (onEnd) {
        carouselInterval = setTimeout(onEnd, 4000);
      }
    }

    container.appendChild(nextMedia);

    setTimeout(() => {
      nextMedia.classList.add('active');
      if (existingDynamic) existingDynamic.classList.remove('active');
      if (baseVideo) baseVideo.classList.remove('active');

      setTimeout(() => {
        if (existingDynamic && existingDynamic.parentNode === container) {
          existingDynamic.remove();
        }
      }, 800);
    }, 50);
  }
};

const resetHomeBackground = () => {
  const existingDynamic = document.getElementById('dynamic-bg');
  existingDynamic?.remove();

  const baseVideo = document.getElementById('base-video');
  if (baseVideo) baseVideo.classList.add('active');
};

// 訂閱 ViewModel
vm.subscribe(render);

// 初始渲染
document.addEventListener('DOMContentLoaded', () => {
  render(); // Show loading initially
  preloadResources(); // Start loading
  vm.fetchWorks(); // Sync data from Firebase

  // Backdoor for admin
  window.goToAdmin = () => vm.setCurrentPage('admin');
  // Check URL hash for admin
  if (window.location.hash === '#admin') {
    vm.setCurrentPage('admin');
  }
});
