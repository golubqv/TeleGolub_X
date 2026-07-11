class ChatManager {

    constructor() {

        this.currentChat = null;

        this.chats = chatService.getAll();

    }

    create(name) {

        const chat = chatService.create(name);

        this.chats = chatService.getAll();

        sidebar.chats = this.chats;

        sidebar.render();

        this.open(chat.id);

    }

    open(chatId) {

        this.currentChat = chatId;

        this.renderMessages();

    }

    send(text) {

        if (!this.currentChat) return;

        const user = auth.currentUser();

        messageService.send(

            this.currentChat,

            user.username,

            text

        );

        this.renderMessages();

    }

    renderMessages() {

        if (!this.currentChat) return;

        const messages = messageService.get(this.currentChat);

        const container = document.querySelector(".messages");

        let html = "";

        messages.forEach(message => {

            html += `

<div class="message">

<div class="message-author">

${message.author}

</div>

<div class="message-text">

${message.text}

</div>

<div class="message-date">

${new Date(message.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
})}

</div>

</div>

`;

        });

        container.innerHTML = html;

        container.scrollTop = container.scrollHeight;

    }

}

const chatManager = new ChatManager();
