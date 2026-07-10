class Chat {

    constructor() {

        this.messages = [
            {
                author: "TeleGolub AI",
                text: "Добро пожаловать в TeleGolub!",
                me: false
            }
        ];

        this.container = document.querySelector(".messages");
        this.input = document.querySelector(".send input");
        this.button = document.querySelector(".send button:last-child");

        this.render();

        this.button.onclick = () => this.send();

        this.input.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                this.send();

            }

        });

    }

    render() {

        this.container.innerHTML = "";

        this.messages.forEach(message => {

            const div = document.createElement("div");

            div.className = message.me ? "message me" : "message ai";

            div.innerHTML = `
                <div class="message-author">${message.author}</div>
                <div>${message.text}</div>
            `;

            this.container.appendChild(div);

        });

        this.container.scrollTop = this.container.scrollHeight;

    }

    send() {

        const text = this.input.value.trim();

        if (!text) return;

        this.messages.push({

            author: "Вы",

            text,

            me: true

        });

        this.input.value = "";

        this.render();

        setTimeout(() => {

            this.messages.push({

                author: "TeleGolub AI",

                text: "Это тестовый ответ. Позже здесь будет настоящий сервер.",

                me: false

            });

            this.render();

        }, 700);

    }

}

window.addEventListener("load", () => {

    new Chat();

});
