class Profile {

    open() {

        const messages = document.querySelector(".messages");

        messages.innerHTML = `

<div class="profile-page">

<div class="big-avatar">

${currentUser.data.avatar}

</div>

<h2 id="profileName">

${currentUser.data.username}

</h2>

<p class="username">

${currentUser.data.login}

</p>

<p id="profileBio">

${currentUser.data.bio}

</p>

<div class="profile-grid">

<div class="card-item">

🎁

<h3>${currentUser.data.gifts}</h3>

<span>Подарков</span>

</div>

<div class="card-item">

🏆

<h3>${currentUser.data.achievements}</h3>

<span>Достижения</span>

</div>

<div class="card-item">

👑

<h3>

${currentUser.data.pro ? "PRO" : "FREE"}

</h3>

<span>Подписка</span>

</div>

<div class="card-item">

🤖

<h3>

${currentUser.data.ai ? "Есть" : "Нет"}

</h3>

<span>TeleGolub AI</span>

</div>

</div>

<div class="profile-buttons">

<button id="editName">

✏ Изменить имя

</button>

<button id="editBio">

📝 Изменить описание

</button>

<button id="changeAvatar">

🖼 Сменить аватар

</button>

</div>

</div>

`;

        this.events();

    }

    events() {

        document.getElementById("editName").onclick = () => {

            const value = prompt(

                "Новое имя",

                currentUser.data.username

            );

            if (!value) return;

            currentUser.data.username = value;

            currentUser.save();

            currentUser.render();

            this.open();

        };

        document.getElementById("editBio").onclick = () => {

            const value = prompt(

                "Описание",

                currentUser.data.bio

            );

            if (!value) return;

            currentUser.data.bio = value;

            currentUser.save();

            this.open();

        };

        document.getElementById("changeAvatar").onclick = () => {

            const value = prompt(

                "Введите эмодзи",

                currentUser.data.avatar

            );

            if (!value) return;

            currentUser.data.avatar = value;

            currentUser.save();

            currentUser.render();

            this
