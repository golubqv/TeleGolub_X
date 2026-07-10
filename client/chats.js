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
