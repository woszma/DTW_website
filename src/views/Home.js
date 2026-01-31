export const Home = (vm) => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

  // 優先顯示精選作品，如果冇就顯示最近 5 個
  const featuredWorks = vm.works.filter(w => w.featured);
  const displayWorks = featuredWorks.length > 0
    ? featuredWorks.slice(0, 5)
    : vm.works.slice(0, 5);

  return `
    <div class="home-container">
      <div class="home-bg-layer" id="home-bg-layer">
        <video 
          class="home-bg-media active" 
          id="base-video"
          autoplay 
          muted 
          playsinline
          webkit-playsinline
        >
          <source src="${base}/Videos/Background_Video/main_hero_bg.mp4" type="video/mp4">
        </video>
      </div>
      <div class="home-bg-overlay"></div>
      <div class="home-content">
        <div class="home-hero-text">
          <span class="home-subtitle">精選作品 / PORTFOLIO</span>
          <h2 class="home-main-title">用心記錄每個<br><span class="hero-accent">珍貴時刻的價值</span></h2>
        </div>
        <nav class="home-recent-works">
          <ul>
            <!-- 由 JS 填充精選作品 -->
            ${displayWorks.map((work, index) => `
              <li style="--delay: ${0.1 + index * 0.05}s">
                <a href="#" class="home-work-link" data-id="${work.id}">
                  <span class="work-index">${(index + 1).toString().padStart(2, '0')}</span>
                  <span class="work-title">${work.title}</span>
                </a>
              </li>
            `).join('')}
            <li style="--delay: 0.6s">
              <a href="#" id="view-more-works" class="home-more-link">查看全部作品 VIEW ALL PROJECTS —</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="home-footer-info">
        <p>© 2026 DIPTOWHITE PRODUCTION</p>
      </div>
    </div>
  `;
};
