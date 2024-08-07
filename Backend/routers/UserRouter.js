const express = require('express');

const router = express.Router();

router.get('/add', (req,res) => {
    res.send('Response from user add');
});

// getall
router.get('/getall', (req,res) => {
    res.send('Response from user getall');
});

// getbyid
router.get('/getbyid', (req,res) => {
    res.send('Reponse from User ID');
});

// update
router.get('/update',(req,res) => {
    res.send('Server Updated')
});

// delete

router.get('/delete',(req, res) => {
    res.get('deleted')
});

// npm init -y
// npm i express
// npm i nodemon
// add dev script

module.exports = router;