const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://shahnawaz:twitter123@cluster0.qvcok.mongodb.net/Assignment?retryWrites=true&w=majority");
}

module.exports = connect;