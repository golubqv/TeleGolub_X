// Главная страница

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.onclick = () => {

        location.href = "pages/login.html";

    };

}

// Регистрация

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.onclick = () => {

        const username = document.getElementById("username").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        if (
            username === "" ||
            email === "" ||
            password === ""
        ) {

            alert("Заполните все поля.");

            return;

        }

        localStorage.setItem("tg_username", username);

        localStorage.setItem("tg_email", email);

        localStorage.setItem("tg_password", password);

        alert("Аккаунт создан!");

        location.href = "login.html";

    };

}

// Вход

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.onclick = () => {

        alert("Сервер скоро будет подключён.");

    };

}
