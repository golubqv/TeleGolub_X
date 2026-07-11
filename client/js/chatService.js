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

   
