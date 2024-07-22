const mongoose = require('mongoose');

const url = "mongodb+srv://agpersonal0614:AGcluster0@cluster0.gjcbjde.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function  promise
mongoose.connect(url);