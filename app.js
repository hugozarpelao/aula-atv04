const express = require("express");
const os = require("os");
const app = express();

app.get("/", (request, response) => {
    return response
    .status(200)
    .json({
        message: "olá"
    });
});

app.get("/liveness", (request, response) => {
    return response
    .status(200)
    .json({
        message: "Meu app está vivo!",
        path: process.cwd(),
        gid: process.getegid(),
        uid: process.getuid()
    });
});

app.get("/readiness", (request, response) => {
    return response
    .status(200)
    .json({
        message: "Meu app está pronto!",
        platform: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir(),
        date: new Date().getTime()
    });
});

module.exports = app;