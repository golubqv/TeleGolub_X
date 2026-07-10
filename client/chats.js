const chats = [

{
    id:1,
    avatar:"🤖",
    name:"TeleGolub AI",
    message:"Подпишитесь на TeleGolub Pro",
    time:"11:42",
    unread:2,
    online:true
},

{
    id:2,
    avatar:"👤",
    name:"Избранное",
    message:"Добро пожаловать!",
    time:"10:30",
    unread:0,
    online:false
},

{
    id:3,
    avatar:"👨",
    name:"Алексей",
    message:"Как дела?",
    time:"09:58",
    unread:5,
    online:true
},

{
    id:4,
    avatar:"👩",
    name:"Мария",
    message:"До встречи!",
    time:"Вчера",
    unread:1,
    online:false
}

];

const chatList=document.querySelector(".chat-list");
const title=document.querySelector(".topbar h2");
const messages=document.querySelector(".messages");

drawChats();

function drawChats(){

chatList.innerHTML="";

chats.forEach(chat=>{

const div=document.createElement("div");

div.className="chat";

div.innerHTML=`

<div class="chat-avatar">

${chat.avatar}

${chat.online?'<span class="online"></span>':''}

</div>

<div class="chat-info">

<div class="chat-name">

${chat.name}

</div>

<div class="chat-last">

${chat.message}

</div>

</div>

<div class="chat-right">

<div class="chat-time">

${chat.time}

</div>

${chat.unread>0?

`<div class="badge">${chat.unread}</div>`

:""}

</div>

`;

div.onclick=()=>{

title.innerHTML=chat.avatar+" "+chat.name;

messages.innerHTML=`

<div class="message ai">

История сообщений скоро появится.

</div>

`;

};

chatList.appendChild(div);

});

}
