
export const AdminDashboard = (vm) => {
  return `
    <div class="admin-dashboard-container" style="padding: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>作品管理後台</h2>
        <button id="logout-btn" style="padding: 8px 16px; background: #666; color: #fff; border: none; cursor: pointer;">登出</button>
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
              <label>標題</label>
              <input type="text" id="work-title" required style="width: 100%; padding: 8px;">
            </div>
            <div>
              <label>年份</label>
              <input type="number" id="work-year" value="${new Date().getFullYear()}" style="width: 100%; padding: 8px;">
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
             <div>
              <label>主分類 (Main Type)</label>
              <select id="work-mainType" style="width: 100%; padding: 8px;">
                <option value="photography">Photography</option>
                <option value="design">Design</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div>
              <label>子分類 (Category)</label>
              <!-- 這裡可以通过 JS 動態更新選項，暫時列出所有可能 -->
              <input type="text" id="work-category" placeholder="例如: portrait, editorial, Short Film" list="category-list" style="width: 100%; padding: 8px;">
              <datalist id="category-list">
                <option value="editorial">
                <option value="advertising">
                <option value="portrait">
                <option value="Event_Exhibition_Installation">
                <option value="Multimedia">
                <option value="Printing Materials">
                <option value="Souvenir">
                <option value="Commercial">
                <option value="Short Film">
                <option value="Documentary">
              </datalist>
            </div>
          </div>

          <div>
            <label>縮圖 (主要展示圖)</label>
            <input type="file" id="work-thumbnail-file" accept="image/*">
            <input type="text" id="work-thumbnail-url" placeholder="或輸入圖片 URL" style="width: 100%; padding: 8px; margin-top: 5px;">
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
              <th style="padding: 10px;">ID</th>
              <th style="padding: 10px;">縮圖</th>
              <th style="padding: 10px;">標題</th>
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
