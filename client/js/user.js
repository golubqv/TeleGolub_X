class User {

    constructor() {

        this.data = JSON.parse(localStorage.getItem("telegolub_user")) || {

            id: crypto.randomUUID(),

            username: "Новый пользователь",

            login: "@user",

            bio: "Привет! Я использую TeleGolub.",

            pro: false,

            avatar: "🕊",

            gifts: 0,

            achievements: 0,

            ai: false,

            theme: "dark"

        };

    }

    save() {

        localStorage.setItem(
            "telegolub_user",
            JSON.stringify(this.data)
        );

    }

    render() {

        const avatar = document.querySelector(".avatar");
        if (avatar) avatar.textContent = this.data.avatar;

        const profileName = document.querySelector(".profile h3");
        if (profileName) profileName.textContent = this.data.username;

        const profileStatus = document.querySelector(".profile p");
        if (profileStatus) {
            profileStatus.textContent = this.data.pro ? "👑 TeleGolub Pro" : "В сети";
        }

    }

}

const currentUser = new User();

window.addEventListener("load", () => {

    currentUser.render();

});
