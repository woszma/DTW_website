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

// State for loading
let isLoading = true;

// 資源路徑修復工具
const fixPath = (path) => {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && path.startsWith(base)) return path;
  let cleanPath = path.replace(/^\/public\//, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  return base + cleanPath;
};

// 初始化數據
const photographyWorks = [
  new Work(1, 'Family Moments', 'editorial', 2024, 'https://images.unsplash.com/photo-1549417229-aa67d3263c91?auto=format&fit=crop&w=1200&q=80', 'A serene family moment in nature.', 'photography', 'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-playing-in-a-field-of-flowers-34281-large.mp4'),
  new Work(2, 'Urban Lines', 'advertising', 2025, 'https://images.unsplash.com/photo-1449156006071-8219323f462a?auto=format&fit=crop&w=1200&q=80', 'Geometric urban architecture.', 'photography', 'https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-busy-city-street-4252-large.mp4'),
  new Work(3, 'Portrait Study', 'portrait', 2023, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80', 'Intimate film portrait.', 'photography', 'https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-woman-smiling-in-a-field-34286-large.mp4')
];

// 重複一些數據以填滿網格
const photography = [...photographyWorks, ...photographyWorks, ...photographyWorks, ...photographyWorks];

// 實際讀取用戶設計作品
const designWorks = [
  // Event_Exhibition_Installation
  new Work(101, 'Installation 01', 'Event_Exhibition_Installation', 2025, 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80', '', 'design', 'https://assets.mixkit.co/videos/preview/mixkit-blue-and-red-lights-on-a-concert-4017-large.mp4'),
  new Work(102, 'Installation 02', 'Event_Exhibition_Installation', 2025, fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00002.jpg'), '', 'design'),
  new Work(103, 'Installation 03', 'Event_Exhibition_Installation', 2025, fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00003.jpg'), '', 'design'),
  new Work(104, 'Installation 04', 'Event_Exhibition_Installation', 2025, fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00004.jpg'), '', 'design'),
  new Work(105, 'Installation 05', 'Event_Exhibition_Installation', 2025, fixPath('/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00005.jpg'), '', 'design'),

  // Multimedia
  new Work(201, 'Multimedia 01', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00001.jpg'), '', 'design'),
  new Work(202, 'Multimedia 02', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00002.jpg'), '', 'design'),
  new Work(203, 'Multimedia 03', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00003.png'), '', 'design'),

  // Printing Materials
  new Work(301, 'Print 01', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00001.jpeg'), '', 'design'),
  new Work(302, 'Print 02', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00002.jpg'), '', 'design'),
  new Work(303, 'Print 03', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00003.png'), '', 'design'),
  new Work(304, 'Print 04', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00004.jpg'), '', 'design'),
  new Work(305, 'Print 05', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00005.jpg'), '', 'design'),

  // Souvenir
  new Work(401, 'Souvenir 01', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00001.jpg'), '', 'design'),
  new Work(402, 'Souvenir 02', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00002.jpeg'), '', 'design'),
  new Work(403, 'Souvenir 03', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00003.jpg'), '', 'design'),
  new Work(404, 'Souvenir 04', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00004.jpg'), '', 'design'),
  new Work(405, 'Souvenir 05', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00005.jpg'), '', 'design')
];

// 實讀取用戶錄像作品
const videoWorks = [
  new Work(501, 'Commercial 01', 'Commercial', 2025, 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80', 'High-end commercial video.', 'video', fixPath('/Videos/Theme_Clip/活動花䋈/A.mp4')),
  new Work(502, 'Short Film 01', 'Short Film', 2024, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80', 'Artistic short film.', 'video', fixPath('/Videos/Theme_Clip/人物故事/A.mp4')),
  new Work(503, 'Documentary 01', 'Documentary', 2024, 'https://images.unsplash.com/photo-1449156006071-8219323f462a?auto=format&fit=crop&w=1200&q=80', 'Nature documentary.', 'video', fixPath('/Videos/Theme_Clip/特別主題/A.mp4'))
];

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
    const media = currentLibrary[currentVideoIndex];
    if (isImage(media)) {
      updateHomeBackground(media, null);
    } else {
      updateHomeBackground(null, media);
    }
  } else {
    currentLibrary = backgroundVideos;
  }

  carouselInterval = setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % currentLibrary.length;
    const media = currentLibrary[currentVideoIndex];
    if (isImage(media)) {
      updateHomeBackground(media, null);
    } else {
      updateHomeBackground(null, media);
    }
  }, 4000);
};

const stopCarousel = () => {
  if (carouselInterval) clearInterval(carouselInterval);
};

const vm = new WorksViewModel([...photography, ...designWorks, ...videoWorks]);

// Preload resources function
const preloadResources = async () => {
  const images = [
    // Add critical images to preload here
    ...photographyWorks.map(w => w.thumbnail),
    ...designWorks.slice(0, 5).map(w => w.thumbnail),
    ...videoWorks.map(w => w.thumbnail)
  ];

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
    return;
  } else {
    // Restore body structure if it was replaced by Loading
    if (!document.getElementById('header-root')) {
      document.body.innerHTML = `
            <div id="header-root"></div>
            <main id="app-root" class="container"></main>
            <div id="footer-root"></div>
         `;
      // Re-get references
      headerRoot = document.getElementById('header-root');
      appRoot = document.getElementById('app-root');
    }
  }

  // 始終渲染 Header
  headerRoot.innerHTML = Header(vm);

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
    // 重要：確保背景顏色恢復
    document.body.style.backgroundColor = '#ffffff';
    document.querySelector('.home-container')?.remove();

    if (vm.currentPage === 'works') {
      appRoot.innerHTML = WorksGrid(vm);
    } else if (vm.currentPage === 'services') {
      appRoot.innerHTML = Services(vm);
    } else if (vm.currentPage === 'about') {
      appRoot.innerHTML = About(vm);
    } else if (vm.currentPage === 'admin') {
      if (vm.user) {
        appRoot.innerHTML = AdminDashboard(vm);
        setupAdminListeners(vm);
      } else {
        appRoot.innerHTML = AdminLogin(vm);
        setupLoginListeners(vm);
      }
    }
  }

  // Setup listeners for standard pages
  if (vm.currentPage !== 'admin') {
    setupEventListeners();
  }
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

      const workData = {
        title, year, mainType, category, description,
        thumbnail, mediaUrl,
        updatedAt: new Date()
      };

      if (workId) {
        await vm.updateWork(workId, workData);
        alert('作品已更新!');
      } else {
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

    // Attach delegated listeners or direct ones
    tbody.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.dataset.id;
        console.log('Editing ID:', id);
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

          document.querySelector('#work-form button[type="submit"]').textContent = '更新作品';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    tbody.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        console.log('View request delete for ID:', id);

        if (confirm('確定要永久刪除呢個作品嗎？')) {
          console.log('User confirmed delete for:', id);
          vm.deleteWork(id);
        } else {
          console.log('User cancelled delete for:', id);
        }
      });
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
};

const updateHomeBackground = (imageUrl, videoUrl) => {
  const container = document.getElementById('home-bg-layer');
  if (!container) return;

  // 清除舊的動態背景
  const existingDynamic = document.getElementById('dynamic-bg');
  const baseVideo = document.getElementById('base-video');

  // 如果是背景輪播切換，我們希望平滑一點
  if (videoUrl || imageUrl) {
    const nextMedia = videoUrl ? document.createElement('video') : document.createElement('img');
    nextMedia.id = 'dynamic-bg';
    nextMedia.className = 'home-bg-media';

    if (videoUrl) {
      nextMedia.src = videoUrl;
      nextMedia.autoplay = true;
      nextMedia.muted = true;
      nextMedia.loop = true;
      nextMedia.playsinline = true;
    } else {
      nextMedia.src = imageUrl;
    }

    container.appendChild(nextMedia);

    // 強制回流再加 active 類觸發淡入
    setTimeout(() => {
      nextMedia.classList.add('active');
      if (existingDynamic) existingDynamic.classList.remove('active');
      if (baseVideo) baseVideo.classList.remove('active');

      // 清理舊的
      setTimeout(() => {
        existingDynamic?.remove();
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
