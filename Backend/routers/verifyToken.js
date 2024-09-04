const jwt = require('jasonwebtoken');
const router = require('./UserRouter');
require('dotenv').config();

const verifyToken = (req,res,next) => {

    const token = req.headers['x-auth-token'];
    
}