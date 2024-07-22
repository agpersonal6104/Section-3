// Importing Express
const express = require('express');
const UserRouter = require('./routers/UserRouter')

// Initializing Express
const app = express();

const port = 5000;

// middleware
app.use('/user', UserRouter);

// endpoint or route
app.get('/', (req,res) => {
    res.send('Response from Express');
});

app.get('/add',(req,res) => {
    res.send('Addition of two numbers')
});

// getall
app.get('/getall', (req,res) => {
    res.send('Get All');
});

// Update
app.get('/update', (req,res) => {
    res.send('Updated');
});

//  starting the express server
app.listen(port, () => {
    console.log('Server Started');
});