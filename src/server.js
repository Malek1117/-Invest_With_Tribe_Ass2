const express = require('express');
const connect = require('./config/db');
const app = express();



const PORT = process.env.PORT || 3000;

const start = async () =>{
    await connect();
    app.listen(PORT, ()=>{
        console.log(`Port listening at ${PORT}`);
    });
}

start();