// Đăng ký
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (localStorage.getItem(username)) {
            alert("Tên người dùng đã tồn tại!");
        } else {
            localStorage.setItem(username, password);
            alert("Đăng ký thành công! Mời bạn đăng nhập.");
            window.location.href = "login.html";
        }
    });
}

// Đăng nhập
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value;

        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("loggedInUser", username);
            window.location.href = "index.html";
        } else {
            alert("!");
        }
    });
}