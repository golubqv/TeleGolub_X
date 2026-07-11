class Guard {

    check() {

        const currentUserId = db.load("tg_current_user", null);

        if (!currentUserId) {

            window.location.href = "login.html";

            return false;

        }

        return true;

    }

    getUser() {

        const currentUserId = db.load("tg_current_user", null);

        const users = db.load("tg_users", []);

        return users.find(user => user.id === currentUserId);

    }

}

const guard = new Guard();

guard.check();
