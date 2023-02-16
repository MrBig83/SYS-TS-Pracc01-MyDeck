//import express from "express";
const mongoose = require("mongoose");
const { app } = require("./app")
//const app: express.Application = express();



const port:number = 3000;

// app.get("/", (_req, res) => {
//     res.send("TypeScript With Express");
// });

main().catch((err) => console.log(err))

async function main() {
console.log("Connected to DB & WebServer");
mongoose.set('strictQuery', true);
await mongoose.connect("mongodb://127.0.0.1:27017/MyDeck")

app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}`);
});

}