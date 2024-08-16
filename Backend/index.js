// Importing Express
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');
const cors = require('cors');

// Initializing Express
const app = express();

const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

// middleware
app.use(express.json());
app.use('/user', UserRouter);

// middleware
app.use(express.json());
app.use('/product', ProductRouter);

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