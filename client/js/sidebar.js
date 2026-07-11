class Sidebar {

    constructor() {

        this.chats = [
            {
                id: 1,
                name: "TeleGolub AI",
                avatar: "🤖",
                last: "Добро пожаловать!",
                time: "12:35",
                unread: 2,
                online: true,
                pinned: true
            },
            {
                id: 2,
                name: "Избранное",
                avatar: "⭐",
                last: "Ваши сохранённые сообщения",
                time: "11:10",
                unread: 0,
                online: false,
                pinned: true
            }
        ];

    }

    render() {

        const list = document.querySelector(".chat-list");

        list.innerHTML = "";

        const sorted = [...this.chats].sort((a,b)=>{

            return Number(b.pinned)-Number(a.pinned);

        });

        sorted.forEach(chat=>{

            list.innerHTML += `

<div class="sidebar-chat" data-id="${chat.id}">

<div class="chat-avatar">

${chat.avatar}

${chat.online?'<span class="online-dot"></span>':''}

</div>

<div class="chat-main">

<div class="chat-header">

<h4>${chat.name}</h4>

<span>${chat.time}</span>

</div>

<div class="chat-last">

${chat.last}

</div>

</div>

${chat.unread>0?

`<div class="chat-unread">${chat.unread}</div>`

:""}

</div>

`;

        });

        this.events();

    }

    events(){

        document.querySelectorAll(".sidebar-chat").forEach(item=>{

            item.onclick=()=>{

                document
                .querySelectorAll(".sidebar-chat")
                .forEach(c=>c.classList.remove("selected"));

                item.classList.add("selected");

            };

        });

    }

}

const sidebar=new Sidebar();

window.addEventListener("load",()=>{

sidebar.render();

});
