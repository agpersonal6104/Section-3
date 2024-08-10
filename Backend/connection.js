const mongoose = require('mongoose');

const url = "mongodb+srv://agpersonal0614:AGcluster0@cluster0.tgj9ddq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function  promise
mongoose.connect(url)
.then((result) => {
    console.log('DataBase connected');   
}).catch((err) => {
    console.log(err);
});