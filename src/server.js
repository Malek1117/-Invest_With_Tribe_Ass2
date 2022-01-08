const express = require('express');
const connect = require('./config/db');
const app = express();
const path = require('path');
const signup = require('./controllers/auth.controller');
const sendmail = require("./middleware/mail");

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.json());

app.post("/signup",sendmail, signup);

const PORT = process.env.PORT || 3000;

const start = async () =>{
    await connect();
    app.listen(PORT, ()=>{
        console.log(`Port listening at ${PORT}`);
    });
}

start();