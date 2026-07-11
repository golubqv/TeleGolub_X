class Session {

    static check() {

        const current = auth.currentUser();

        if (!current) {

            window.location.href = "login.html";

            return;

        }

        currentUser.data = current;

        currentUser.save();

        currentUser.render();

    }

    static logout() {

        auth.logout();

        window.location.href = "login.html";

    }

}
