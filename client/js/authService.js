class AuthService {

    constructor() {

        this.users = db.load("tg_users", []);

        this.current = db.load("tg_current_user", null);

    }

    register(username, login, password) {

        if (this.users.find(user => user.login === login)) {

            throw new Error("Пользователь уже существует");

        }

        const user = {

            id: crypto.randomUUID(),

            username,

            login,

            password,

            avatar: "🕊️",

            bio: "Привет! Я использую TeleGolub.",

            pro: false,

            ai: false,

            gifts: 0,

            achievements: 0,

            created: Date.now()

        };

        this.users.push(user);

        db.save("tg_users", this.users);

        return user;

    }

    login(login, password) {

        const user = this.users.find(

            u => u.login === login && u.password === password

        );

        if (!user) {

            throw new Error("Неверный логин или пароль");

        }

        this.current = user.id;

        db.save("tg_current_user", user.id);

        return user;

    }

    logout() {

        this.current = null;

        db.save("tg_current_user", null);

    }

    currentUser() {

        return this.users.find(

            u => u.id === this.current

        );

    }

}

const auth = new AuthService();
