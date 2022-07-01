const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = 8000;
mongoose
    .connect(process.env.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Run it.");
    })
    .catch((e) => console.log(e));


app.get("/", (req, res) => {
    res.json(123);
})

app.listen(process.env.port, () => {
    console.log("The server is running")
})