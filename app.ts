import express from "express";

const app: express.Application = express();





app.get("/", (_req, res) => {
    res.send("TypeScript With Express");
});

module.exports = { app };