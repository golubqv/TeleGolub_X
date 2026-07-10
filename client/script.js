const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.onclick = () => {

        location.href = "pages/login.html";

    };

}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.onclick = () => {

        alert("Авторизация скоро будет подключена.");

    };

}
