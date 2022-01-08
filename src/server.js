const express = require('express');
const connect = require('./config/db');
const app = express();

const signup = require('./controllers/auth.controller');

app.use(express.json());

app.use("/signup", signup);


const PORT = process.env.PORT || 3000;

const start = async () =>{
    await connect();
    app.listen(PORT, ()=>{
        console.log(`Port listening at ${PORT}`);
    });
}

start();