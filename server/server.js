const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {

        res.end(JSON.stringify({
            app: "TeleGolub",
            status: "online",
            version: "0.1.0"
        }));

        return;
    }

    res.statusCode = 404;

    res.end(JSON.stringify({
        error: "Not Found"
    }));

});

server.listen(PORT, () => {

    console.log("TeleGolub Server запущен.");

});
