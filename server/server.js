const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const USERS_FILE = path.join(__dirname, "users.json");

function loadUsers() {

    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, "[]");
    }

    return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));

}

function saveUsers(users) {

    fs.writeFileSync(
        USERS_FILE,
        JSON.stringify(users, null, 4)
    );

}

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    if (req.method === "POST" && req.url === "/register") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const data = JSON.parse(body);

            const users = loadUsers();

            const exists = users.find(
                u => u.username === data.username
            );

            if (exists) {

                res.end(JSON.stringify({
                    success:false,
                    message:"Пользователь уже существует"
                }));

                return;

            }

            users.push({

                username:data.username,
                email:data.email,
                password:data.password

            });

            saveUsers(users);

            res.end(JSON.stringify({

                success:true,
                message:"Регистрация успешна"

            }));

        });

        return;

    }

    res.statusCode = 404;

    res.end(JSON.stringify({

        error:"Not Found"

    }));

});

server.listen(PORT, () => {

    console.log("TeleGolub Server работает на http://localhost:3000");

});
