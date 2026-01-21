
export const AdminLogin = (vm) => {
  return `
    <div class="admin-login-container" style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
    ">
      <form id="admin-login-form" style="
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 400px;
      ">
        <h2 style="margin-bottom: 1.5rem; text-align: center;">Admin Login</h2>
        
        <!-- Config Warning -->
        <div id="login-config-warning" style="background: #fff3cd; color: #856404; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ffeeba; font-size: 0.9rem; display: none;">
             Please set up your Firebase keys in <code>src/firebase/config.js</code>.
        </div>

        <div style="margin-bottom: 1rem;">
          <input type="email" id="admin-email" placeholder="管理員郵箱" required style="
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          ">
        </div>
        <div style="margin-bottom: 1.5rem;">
          <input type="password" id="admin-password" placeholder="密碼" required style="
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          ">
        </div>
        <button type="submit" style="
          width: 100%;
          padding: 12px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        ">登入</button>
      </form>
      <p id="login-error" style="color: red; margin-top: 1rem; display: none;"></p>
    </div>
  `;
};
