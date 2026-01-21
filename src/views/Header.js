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
           <a href="#" class="nav-link ${vm.currentPage === 'home' ? 'active' : ''}" id="nav-home">HOME</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'works' ? 'active' : ''}" id="nav-works">WORKS</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'services' ? 'active' : ''}" id="nav-services">SERVICES</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${vm.currentPage === 'about' ? 'active' : ''}" id="nav-about">ABOUT</a>
        </div>
        <button class="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
        </button>
      </div>
      
      ${!isHome ? `
      <nav class="category-nav" id="category-nav">
        <div class="filter-group">
          <div class="type-switch">
            <a href="#" class="main-type-link ${vm.mainType === 'photography' ? 'active' : ''}" data-type="photography">PHOTOGRAPHY</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'design' ? 'active' : ''}" data-type="design">DESIGN</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'video' ? 'active' : ''}" data-type="video">VIDEO</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${vm.mainType === 'all' ? 'active' : ''}" data-type="all">ALL</a>
          </div>
          
          <ul class="cat-list">
            ${categories.map(cat => `
              <li><a href="#" class="filter-link ${vm.currentCategory === cat ? 'active' : ''}" data-category="${cat}">${cat}</a></li>
            `).join('')}
          </ul>
        </div>
        
        <div class="view-controls">
          <span class="view-count">${vm.filteredWorks.length} items</span>
          <div class="mode-switch">
             <a href="#" id="grid-mode" class="${vm.viewMode === 'grid' ? 'active' : ''}">GRID</a>
             <span class="nav-divider">/</span>
             <a href="#" id="list-mode" class="${vm.viewMode === 'list' ? 'active' : ''}">LIST</a>
          </div>
        </div>
      </nav>
      ` : ''}
    </header>
  `;
};
