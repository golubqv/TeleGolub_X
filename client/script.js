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

    registerBtn.onclick = async () => {

        const username = document.getElementById("username").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        if (!username || !email || !password) {

            alert("Заполните все поля");

            return;

        }

        try {

            const response = await fetch("http://localhost:3000/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    username,
                    email,
                    password

                })

            });

            const result = await response.json();

            alert(result.message);

            if (result.success) {

                location.href = "login.html";

            }

        } catch (error) {

            alert("Не удалось подключиться к серверу.");

        }

    };

}
