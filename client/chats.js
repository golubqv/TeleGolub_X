const chats = 

{
    id:2,
    name:"👤 Избранное",
    online:false
},

{
    id:3,
    name:"👥 Друзья",
    online:true
},

{
    id:4,
    name:"📢 Каналы",
    online:false
},

{
    id:5,
    name:"🎁 Подарки",
    online:false
},

{
    id:6,
    name:"👑 TeleGolub Pro",
    online:false
}

];

const chatList = document.querySelector(".chat-list");

const title = document.querySelector(".topbar h2");

const messages = document.querySelector(".messages");

chatList.innerHTML = "";

chats.forEach(chat=>{

    const div=document.createElement("div");

    div.className="chat";

    div.innerHTML=chat.name;

    div.onclick=()=>{

        document
        .querySelectorAll(".chat")
        .forEach(c=>c.classList.remove("active"));

        div.classList.add("active");

        title.innerHTML=chat.name;

        messages.innerHTML=`

        <div class="message ai">

        Это чат <b>${chat.name}</b>

        </div>

        <div class="message me">

        Скоро здесь появятся настоящие сообщения.

        </div>

        `;

    };

    chatList.appendChild(div);

});

document.getElementById("newChat").onclick=()=>{

alert("Создание нового чата скоро появится.");

}

document.getElementById("newGroup").onclick=()=>{

alert("Создание группы скоро появится.");

}

document.getElementById("newChannel").onclick=()=>{

alert("Создание канала скоро появится.");

}

document.getElementById("settings").onclick=()=>{

alert("Настройки скоро появятся.");

}

document.getElementById("settings").onclick = () => {

document.querySelector(".topbar h2").innerHTML = "⚙ Настройки";

document.querySelector(".messages").innerHTML = `

<div class="settings">

<h2>Настройки TeleGolub</h2>

<div class="setting">

<span>🌙 Темная тема</span>

<label class="switch">

<input id="themeToggle" type="checkbox" checked>

<span class="slider"></span>

</label>

</div>

<div class="setting">

<span>🔔 Уведомления</span>

<label class="switch">

<input type="checkbox" checked>

<span class="slider"></span>

</label>

</div>

<div class="setting">

<span>🔒 Защита аккаунта</span>

<button class="mini">

Открыть

</button>

</div>

<div class="setting">

<span>👑 TeleGolub Pro</span>

<button class="mini">

Управление

</button>

</div>

<div class="setting">

<span>🤖 TeleGolub AI</span>

<button class="mini">

Недоступно

</button>

</div>

</div>

`;

const toggle = document.getElementById("themeToggle");

toggle.onchange = () => {

document.body.classList.toggle("light");

};

};

document.getElementById("pro").onclick = () => {

    document.querySelector(".topbar h2").innerHTML = "👑 TeleGolub Pro";

    document.querySelector(".messages").innerHTML = `

<div class="pro-card">

<h2>TeleGolub Pro</h2>

<p>

Открой расширенные возможности TeleGolub.

</p>

<ul>

<li>🤖 TeleGolub AI</li>

<li>🎁 Коллекционные подарки</li>

<li>✨ Эксклюзивные темы</li>

<li>☁️ Больше облачного пространства</li>

<li>🚀 Ранний доступ к новым функциям</li>

</ul>

<button class="buy">

Оформить подписку

</button>

</div>

`;

};

document.getElementById("profile").onclick = () => {

document.querySelector(".topbar h2").innerHTML = "👤 Мой профиль";

document.querySelector(".messages").innerHTML = `

<div class="profile-page">

<div class="big-avatar">

TG

</div>

<h2>Пользователь</h2>

<p class="username">

@username

</p>

<div class="profile-buttons">

<button>

📷 Изменить фото

</button>

<button>

✏️ Изменить имя

</button>

<button>

📝 Описание

</button>

<button>

⭐ Статус

</button>

</div>

<div class="profile-info">

<div>

🎁 Подарков

<b>0</b>

</div>

<div>

👑 TeleGolub Pro

<b>Нет</b>

</div>

<div>

🤖 AI

<b>Недоступен</b>

</div>

<div>

🏆 Достижения

<b>0</b>

</div>

</div>

</div>

`;

};

const modal = document.getElementById("newChatModal");

document.getElementById("newChat").onclick = () => {

modal.classList.add("active");

};

document.getElementById("cancelChat").onclick = () => {

modal.classList.remove("active");

};

document.getElementById("createChat").onclick = () => {

const name = document
.getElementById("newChatName")
.value
.trim();

if(name===""){

alert("Введите имя.");

return;

}

const div=document.createElement("div");

div.className="chat";

div.innerHTML="👤 "+name;

document
.querySelector(".chat-list")
.appendChild(div);

modal.classList.remove("active");

document
.getElementById("newChatName")
.value="";

};
