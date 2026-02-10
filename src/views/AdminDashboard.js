
export const AdminDashboard = (vm) => {
  return `
    <div class="admin-dashboard-container" style="padding: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>作品管理後台</h2>
        <div style="display: flex; gap: 1rem;">
          <a href="#" id="go-home" style="padding: 8px 16px; background: #eee; color: #000; text-decoration: none; border: 1px solid #ddd; border-radius: 4px;">返回主頁</a>
          <button id="logout-btn" style="padding: 8px 16px; background: #666; color: #fff; border: none; cursor: pointer; border-radius: 4px;">登出</button>
        </div>
      </div>

      <div class="admin-controls" style="margin-bottom: 2rem; padding: 1rem; background: #fff; border: 1px solid #ddd;">
        <h3>新增/編輯作品</h3>
        <form id="work-form" style="display: grid; gap: 1rem; margin-top: 1rem;">
          <input type="hidden" id="work-id">

          <!-- Config Warning -->
          <div id="firebase-config-warning" style="background: #fff3cd; color: #856404; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ffeeba; display: none;">
            <strong>Configuration Needed:</strong> Please update <code>src/firebase/config.js</code> with your actual Firebase project keys to enable Upload and Login features.
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <label>標題 / Title</label>
              <input type="text" id="work-title" required style="width: 100%; padding: 8px;">
            </div>
            <div>
              <label>年份 / Year</label>
              <input type="number" id="work-year" value="${new Date().getFullYear()}" style="width: 100%; padding: 8px;">
            </div>
          </div>
          
          <div>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="work-featured" style="width: 18px; height: 18px;">
              <span>設定為精選作品 (顯示喺主頁) / Featured on Home Page</span>
            </label>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
             <div>
              <label>主分類 / Service Type</label>
              <select id="work-mainType" style="width: 100%; padding: 8px;">
                <option value="video">影片製作服務</option>
                <option value="photography">攝影服務</option>
                <option value="design">設計服務</option>
                <option value="workshop">工作坊</option>
              </select>
            </div>
            <div>
              <label>子分類 / Category</label>
              <input type="text" id="work-category" placeholder="例如: 品牌形象, 活動花絮, 人訪故事" list="category-list" style="width: 100%; padding: 8px;">
              <datalist id="category-list">
                <!-- 影片製作服務 -->
                <option value="品牌形象影片">
                <option value="活動花絮">
                <option value="人訪故事">
                <option value="動畫製作">
                <!-- 攝影服務 -->
                <option value="人像攝影">
                <option value="客製化">
                <!-- 其他 -->
                <option value="其他">
              </datalist>
            </div>
          </div>

          <div>
            <label>縮圖 (主要展示圖)</label>
            <input type="file" id="work-thumbnail-file" accept="image/*">
            <input type="text" id="work-thumbnail-url" placeholder="或輸入圖片 URL" style="width: 100%; padding: 8px; margin-top: 5px;">
          </div>

          <div>
            <label>額外相片 (可多選)</label>
            <div style="display: flex; gap: 10px; align-items: center;">
              <input type="file" id="work-images-files" multiple accept="image/*">
              <button type="button" id="clear-images-btn" style="padding: 4px 8px; font-size: 10px; background: #ffebeb; color: #d00; border: 1px solid #ffcccc; cursor: pointer;">清空現有相片</button>
            </div>
            <p style="font-size: 10px; opacity: 0.6; margin-top: 5px;">(呢度上傳嘅相會自動追加，點擊「清空」可重設)</p>
            <div id="existing-images-preview" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;"></div>
          </div>

          <div>
             <label>作品詳情連結/視頻 (可選)</label>
             <input type="file" id="work-media-file" accept="video/*,image/*">
             <input type="text" id="work-media-url" placeholder="輸入視頻/詳情圖 URL" style="width: 100%; padding: 8px; margin-top: 5px;">
          </div>

          <div>
            <label>描述</label>
            <textarea id="work-description" rows="3" style="width: 100%; padding: 8px;"></textarea>
          </div>

          <div style="display: flex; gap: 10px;">
            <button type="submit" style="padding: 10px 20px; background: #000; color: #fff; border: none; cursor: pointer;">保存作品</button>
            <button type="button" id="reset-form-btn" style="padding: 10px 20px; background: #eee; border: none; cursor: pointer;">重置</button>
          </div>
        </form>
      </div>

      <div class="works-list">
        <h3>現有作品列表</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: #fff;">
          <thead>
            <tr style="background: #f0f0f0; text-align: left;">
              <th style="padding: 10px;">序列</th>
              <th style="padding: 10px;">縮圖</th>
              <th style="padding: 10px;">標題</th>
              <th style="padding: 10px;">精選</th>
              <th style="padding: 10px;">分類</th>
              <th style="padding: 10px;">操作</th>
            </tr>
          </thead>
          <tbody id="admin-works-table-body">
            <!-- 由 JS 填充 -->
          </tbody>
        </table>
      </div>
    </div>
  `;
};
