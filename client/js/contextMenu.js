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
