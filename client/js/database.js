class Database {

    constructor() {

        this.keys = {

            user: "tg_user",

            chats: "tg_chats",

            messages: "tg_messages",

            groups: "tg_groups",

            channels: "tg_channels",

            settings: "tg_settings",

            gifts: "tg_gifts"

        };

    }

    load(key, defaultValue = []) {

        const value = localStorage.getItem(key);

        if (!value) return defaultValue;

        try {

            return JSON.parse(value);

        } catch {

            return defaultValue;

        }

    }

    save(key, value) {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    }

    clear() {

        Object.values(this.keys).forEach(key => {

            localStorage.removeItem(key);

        });

    }

}

const db = new Database();
