class NewChatModal {

    constructor() {

        this.create();

    }

    create() {

        const modal = document.createElement("div");

        modal.className = "modal hidden";

        modal.id = "newChatModal";

        modal.innerHTML = `

<div class="modal-window">

<h2>💬 Новый чат</h2>

<input
id="newChatName"
type="text"
placeholder="Введите имя пользователя">

<div class="modal-buttons">

<button id="createChatBtn">

Создать

</button>

<button id="closeChatModal">

Отмена

</button>

</div>

</div>

`;

        document.body.appendChild(modal);

        this.events();

    }

    open() {

        document
            .getElementById("newChatModal")
            .classList.remove("hidden");

        document
            .getElementById("newChatName")
            .focus();

    }

    close() {

        document
            .getElementById("newChatModal")
            .classList.add("hidden");

        document
            .getElementById("newChatName")
            .value = "";

    }

    events() {

        document.getElementById("closeChatModal").onclick = () => {

            this.close();

        };

        document.getElementById("createChatBtn").onclick = () => {

            const name = document
                .getElementById("newChatName")
                .value
                .trim();

            if (!name) {

                alert("Введите имя.");

                return;

            }

            chatManager.create(name);

            this.close();

        };

    }

}

const newChatModal = new NewChatModal();
