const mongoose = require('mongoose');

const url = "";

// asynchronous function  promise
mongoose.connect(url)
.then((result) => {
    console.log('DataBase connected');   
}).catch((err) => {
    console.log(err);
});