class ChatService {

    constructor() {

        this.chats = db.load(db.keys.chats, []);

    }

    getAll() {

        return this.chats;

    }

    create(name) {

        const chat = {

            id: crypto.randomUUID(),

            name,

            avatar: "👤",

            last: "Новый чат",

            unread: 0,

            pinned: false,

            archived: false,

            favorite: false,

            online: false,

            created: Date.now()

        };

        this.chats.unshift(chat);

        this.save();

        return chat;

    }

        delete(id) {

        this.chats = this.chats.filter(chat => chat.id !== id);

        this.save();

    }

    update(id, data) {

        const chat = this.chats.find(chat => chat.id === id);

        if (!chat) return;

        Object.assign(chat, data);

        this.save();

    }

    get(id) {

        return this.chats.find(chat => chat.id === id);

    }

    save() {

        db.save(db.keys.chats, this.chats);

    }

}

const chatService = new ChatService();

   
