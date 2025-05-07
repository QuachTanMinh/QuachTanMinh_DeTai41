// auth.js

// ========== Helpers ==========
function getRegisteredUsers() {
    return JSON.parse(localStorage.getItem("registeredUsers") || "[]");
  }
  function saveRegisteredUsers(users) {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }
  
  // ========== Đăng ký ==========
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = this.username.value.trim();
      const password = this.password.value;
      const confirm  = this["confirm-password"].value;
  
      // 1) Kiểm tra độ dài username
      if (username.length < 3) {
        return alert("Tên người dùng phải ít nhất 3 ký tự.");
      }
      // 2) Kiểm tra password và confirm
      if (password.length < 6) {
        return alert("Mật khẩu phải ít nhất 6 ký tự.");
      }
      if (password !== confirm) {
        return alert("Mật khẩu và xác nhận không khớp.");
      }
  
      // 3) Lấy mảng user đã lưu
      const users = getRegisteredUsers();
      // 4) Check tồn tại
      if (users.some(u => u.username === username)) {
        return alert("Tên người dùng đã được sử dụng!");
      }
  
      // 5) Thêm mới và lưu
      users.push({ username, password });
      saveRegisteredUsers(users);
  
      alert("Đăng ký thành công! Mời bạn đăng nhập.");
      window.location.href = "login.html";
    });
  }
  
  // ========== Đăng nhập ==========
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = this["login-username"].value.trim();
      const password = this["login-password"].value;
  
      const users = getRegisteredUsers();
      const user = users.find(u => u.username === username);
  
      if (!user) {
        return alert("Tên người dùng không tồn tại.");
      }
      if (user.password !== password) {
        return alert("Mật khẩu không đúng.");
      }
  
      // Đăng nhập thành công
      localStorage.setItem("loggedInUser", username);
      alert("Đăng nhập thành công!");
      window.location.href = "../index.html";
    });
  }
  