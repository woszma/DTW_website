export const Home = (vm) => {
  // 獲取最近的幾個作品作為清單
  const recentWorks = vm.works.slice(0, 5);
  
  return `
    <div class="home-container">
      <div class="home-bg-layer" id="home-bg-layer">
        <video 
          class="home-bg-media active" 
          id="base-video"
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source src="/Videos/Background_Video/bg_video00002.mp4" type="video/mp4">
        </video>
      </div>
      <div class="home-bg-overlay"></div>
      <div class="home-content">
        <div class="home-hero-text">
          <span class="home-subtitle">PORTFOLIO</span>
          <h2 class="home-main-title">用心記錄每個<br><span class="hero-accent">珍貴時刻的價值</span></h2>
        </div>
        <nav class="home-recent-works">
          <ul>
            <li style="--delay: 0.1s">
              <a href="#" class="home-theme-link" data-theme="events">
                <span class="work-index">01</span>
                <span class="work-title">活動花絮</span>
              </a>
            </li>
            <li style="--delay: 0.15s">
              <a href="#" class="home-theme-link" data-theme="exhibition">
                <span class="work-index">02</span>
                <span class="work-title">活動展覽</span>
              </a>
            </li>
            <li style="--delay: 0.2s">
              <a href="#" class="home-theme-link" data-theme="brand">
                <span class="work-index">03</span>
                <span class="work-title">品牌形象</span>
              </a>
            </li>
            <li style="--delay: 0.25s">
              <a href="#" class="home-theme-link" data-theme="stories">
                <span class="work-index">04</span>
                <span class="work-title">人物故事</span>
              </a>
            </li>
            <li style="--delay: 0.3s">
              <a href="#" class="home-theme-link" data-theme="special">
                <span class="work-index">05</span>
                <span class="work-title">特別主題</span>
              </a>
            </li>
            <li style="--delay: 0.35s">
              <a href="#" class="home-theme-link" data-theme="printing">
                <span class="work-index">06</span>
                <span class="work-title">印刷品</span>
              </a>
            </li>
            <li style="--delay: 0.4s">
              <a href="#" class="home-theme-link" data-theme="multimedia">
                <span class="work-index">07</span>
                <span class="work-title">多媒體</span>
              </a>
            </li>
            <li style="--delay: 0.45s">
              <a href="#" class="home-theme-link" data-theme="souvenir">
                <span class="work-index">08</span>
                <span class="work-title">紀念品</span>
              </a>
            </li>
            <li style="--delay: 0.6s">
              <a href="#" id="view-more-works" class="home-more-link">VIEW ALL PROJECTS —</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="home-footer-info">
        <p>© 2026 HIDEAKI HAMADA inspired by DTW</p>
      </div>
    </div>
  `;
};
