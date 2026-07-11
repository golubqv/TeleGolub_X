class MessageService {

    constructor() {

        this.messages = db.load(db.keys.messages, {});

    }

    get(chatId) {

        if (!this.messages[chatId]) {

            this.messages[chatId] = [];

        }

        return this.messages[chatId];

    }

    send(chatId, author, text) {

        if (!this.messages[chatId]) {

            this.messages[chatId] = [];

        }

        this.messages[chatId].push({

            id: crypto.randomUUID(),

            author,

            text,

            date: Date.now(),

            edited: false,

            reactions: {}

        });

        this.save();

    }

    delete(chatId, messageId) {

        if (!this.messages[chatId]) return;

        this.messages[chatId] =

            this.messages[chatId].filter(

                message => message.id !== messageId

            );

        this.save();

    }

    edit(chatId, messageId, text) {

        const message =

            this.messages[chatId]?.find(

                message => message.id === messageId

            );

        if (!message) return;

        message.text = text;

        message.edited = true;

        this.save();

    }

    save() {

        db.save(

            db.keys.messages,

            this.messages

        );

    }

}

const messageService = new MessageService();
