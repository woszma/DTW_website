import { Work } from './src/models/Work.js';
import { WorksViewModel } from './src/viewmodels/WorksViewModel.js';
import { Header } from './src/views/Header.js';
import { WorksGrid } from './src/views/WorksGrid.js';
import { Home } from './src/views/Home.js';
import { About } from './src/views/About.js';
import { Services } from './src/views/Services.js';

// 資源路徑修復工具
const fixPath = (path) => {
  if (!path || path.startsWith('http')) return path;
  let cleanPath = path.replace(/^\/public\//, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
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
  new Work(201, 'Multimedia 01', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00001.png'), '', 'design'),
  new Work(202, 'Multimedia 02', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00002.png'), '', 'design'),
  new Work(203, 'Multimedia 03', 'Multimedia', 2024, fixPath('/images/Design_portfolio/Multimedia/Multimedia00003.png'), '', 'design'),
  
  // Printing Materials
  new Work(301, 'Print 01', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00001.jpeg'), '', 'design'),
  new Work(302, 'Print 02', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00002.png'), '', 'design'),
  new Work(303, 'Print 03', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00003.png'), '', 'design'),
  new Work(304, 'Print 04', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00004.png'), '', 'design'),
  new Work(305, 'Print 05', 'Printing Materials', 2024, fixPath('/images/Design_portfolio/Printing Materials/Printing Materials00005.png'), '', 'design'),
  
  // Souvenir
  new Work(401, 'Souvenir 01', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00001.jpg'), '', 'design'),
  new Work(402, 'Souvenir 02', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00002.jpeg'), '', 'design'),
  new Work(403, 'Souvenir 03', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00003.png'), '', 'design'),
  new Work(404, 'Souvenir 04', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00004.jpg'), '', 'design'),
  new Work(405, 'Souvenir 05', 'Souvenir', 2024, fixPath('/images/Design_portfolio/Souvenir/Souvenir00005.jpg'), '', 'design')
];

// 實讀取用戶錄像作品
const videoWorks = [
  new Work(501, 'Commercial 01', 'Commercial', 2025, 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80', 'High-end commercial video.', 'video', fixPath('/Videos/Theme_Clip/活動花䋈/A.mp4')),
  new Work(502, 'Short Film 01', 'Short Film', 2024, 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80', 'Artistic short film.', 'video', fixPath('/Videos/Theme_Clip/人物故事/A.mp4')),
  new Work(503, 'Documentary 01', 'Documentary', 2024, 'https://images.unsplash.com/photo-1449156006071-8219323f462a?auto=format&fit=crop&w=1200&q=80', 'Nature documentary.', 'video', fixPath('/Videos/Theme_Clip/特別主題/A.mp4'))
];

// 背景视频列表 (移除燈泡視頻 bg_video00001.mp4)
const backgroundVideos = [
  fixPath('/Videos/Background_Video/bg_video00002.mp4'),
  fixPath('/Videos/Background_Video/bg_video00003.mp4'),
  fixPath('/Videos/Background_Video/bg_video00004.mp4'),
  fixPath('/Videos/Background_Video/bg_video00005.mp4')
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

const render = () => {
  const headerRoot = document.getElementById('header-root');
  const appRoot = document.getElementById('app-root');
  
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
    }
  }
  
  setupEventListeners();
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
document.addEventListener('DOMContentLoaded', render);
