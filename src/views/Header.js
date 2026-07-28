export const Header = (vm) => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const categories = vm.getCategories();

  const isHome = vm.currentPage === 'home';

  return `
    <header class="main-header ${isHome ? 'is-home' : ''}">
      <div class="header-content">
        <h1 class="logo">
          <a href="#" id="go-home">
            <img src="${base}/images/DTW Logo/DTW logo_WHITE.png" alt="DTW Logo" class="logo-img">
          </a>
        </h1>
        <div class="main-nav-links">
           <a href="#" class="nav-link ${vm.currentPage === 'home' ? 'active' : ''}" id="nav-home">主頁</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'works' ? 'active' : ''}" id="nav-works">作品</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'services' ? 'active' : ''}" id="nav-services">服務範圍</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'about' ? 'active' : ''}" id="nav-about">關於我們</a>
        </div>
        <button class="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu-overlay" class="mobile-menu-overlay">
        <div class="mobile-menu-content">
          <div class="mobile-nav-links">
            <a href="#" class="mobile-nav-link" data-page="home">主頁</a>
            <a href="#" class="mobile-nav-link" data-page="works">作品</a>
            <a href="#" class="mobile-nav-link" data-page="services">服務範圍</a>
            <a href="#" class="mobile-nav-link" data-page="about">關於我們</a>
          </div>
          
          <div class="mobile-contact-info">
            <p class="contact-label">聯絡我們</p>
            <a href="https://wa.me/85260931637" target="_blank" class="contact-item">WHATSAPP</a>
            <a href="mailto:diptowhiteproduction@gmail.com" class="contact-item">EMAIL</a>
            <a href="https://www.instagram.com/diptowhiteproduction?igsh=ZHBhaWkwcDZ6OHNi&utm_source=qr" target="_blank" class="contact-item">INSTAGRAM</a>
          </div>
        </div>
      </div>
      
      ${vm.currentPage === 'works' ? `
      <nav class="category-nav" id="category-nav">
        <div class="filter-group">
          <div class="type-switch">
            <a href="#" class="main-type-link ${vm.mainType === 'all' ? 'active' : ''}" data-type="all">全部</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'video' ? 'active' : ''}" data-type="video">影片製作服務</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'photography' ? 'active' : ''}" data-type="photography">攝影服務</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'design' ? 'active' : ''}" data-type="design">設計服務</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'workshop' ? 'active' : ''}" data-type="workshop">工作坊</a>
          </div>
          
          <ul class="cat-list">
            ${categories.map(cat => `
              <li><a href="#" class="filter-link ${vm.currentCategory === cat ? 'active' : ''}" data-category="${cat}">${cat === 'all' ? '全部' : (cat === 'other' ? '其他' : cat)}</a></li>
            `).join('')}
          </ul>
        </div>
        
        <div class="view-controls">
          <span class="view-count">${vm.filteredWorks.length} 個作品</span>
          <div class="mode-switch">
             <a href="#" id="grid-mode" class="${vm.viewMode === 'grid' ? 'active' : ''}">網格</a>
             <span class="nav-divider">/</span>
             <a href="#" id="list-mode" class="${vm.viewMode === 'list' ? 'active' : ''}">列表</a>
          </div>
        </div>
      </nav>
      ` : ''}
    </header>
  `;
};
