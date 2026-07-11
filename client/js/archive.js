class Archive {

    constructor() {

        this.chats = [];

    }

    archive(chat) {

        this.chats.push(chat);

        sidebar.chats = sidebar.chats.filter(c => c.id !== chat.id);

        sidebar.render();

        notify.add(

            "Архив",

            `"${chat.name}" перемещён в архив`

        );

    }

    restore(id) {

        const chat = this.chats.find(c => c.id === id);

        if (!chat) return;

        sidebar.chats.unshift(chat);

        this.chats = this.chats.filter(c => c.id !== id);

        sidebar.render();

    }

    open() {

        const messages = document.querySelector(".messages");

        let html = `

<div class="archive-page">

<h1>📂 Архив</h1>

`;

        if (this.chats.length === 0) {

            html += `

<div class="empty">

Архив пуст.

</div>

`;

        }

        this.chats.forEach(chat => {

            html += `

<div class="archive-chat">

<div>

<b>${chat.avatar} ${chat.name}</b>

<p>${chat.last}</p>

</div>

<button

data-id="${chat.id}"

class="restoreBtn">

Вернуть

</button>

</div>

`;

        });

        html += "</div>";

        messages.innerHTML = html;

        document.querySelectorAll(".restoreBtn").forEach(btn => {

            btn.onclick = () => {

                this.restore(Number(btn.dataset.id));

                this.open();

            };

        });

    }

}

const archive = new Archive();
