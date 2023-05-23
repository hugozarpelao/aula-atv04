const http = require("http");
const app = require("./app");

const port = 4500;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Servidor executado na porta " + port)
});