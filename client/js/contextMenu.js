class ContextMenu {

    constructor() {

        this.menu = document.createElement("div");

        this.menu.className = "context-menu";

        this.menu.innerHTML = `

<div data-action="pin">📌 Закрепить чат</div>

<div data-action="archive">📂 Архивировать</div>

<div data-action="mute">🔕 Отключить уведомления</div>

<div data-action="favorite">⭐ В избранное</div>

<div data-action="delete">🗑 Удалить чат</div>

`;

        document.body.appendChild(this.menu);

        document.addEventListener("click", () => {

            this.hide();

        });

    }

    show(x, y, chatId) {
                this.chatId = chatId;

        this.menu.style.left = x + "px";
        this.menu.style.top = y + "px";
        this.menu.classList.add("show");

    }

    hide() {

        this.menu.classList.remove("show");

    }

    init() {

        document.addEventListener("contextmenu", (e) => {

            const chat = e.target.closest(".sidebar-chat");

            if (!chat) return;

            e.preventDefault();

            this.show(

                e.pageX,

                e.pageY,

                Number(chat.dataset.id)

            );

        });

        this.menu.querySelectorAll("div").forEach(item => {

            item.onclick = () => {

                this.action(item.dataset.action);

            };

        });

    }

    action(type) {

        const chat = sidebar.chats.find(c => c.id === this.chatId);

        if (!chat) return;

        switch(type){

            case "pin":

                chat.pinned = !chat.pinned;
                break;

         case "archive":

    archive.archive(chat);

    return;

            case "favorite":

                chat.favorite = !chat.favorite;
                break;

            case "mute":

                chat.muted = !chat.muted;
                break;

            case "delete":

                sidebar.chats =
                    sidebar.chats.filter(c=>c.id!==chat.id);
                break;

        }

        sidebar.render();

        this.hide();

    }

}

const contextMenu = new ContextMenu();

window.addEventListener("load",()=>{

    contextMenu.init();

});
