const express = require('express');

const router = express.Router();

router.post('/add', (req,res) => {
    console.log(req.body);
    
    res.send('Response from user add');
});

// getall
router.get('/getall', (req,res) => {
    res.send('Response from user getall');
});

// getbyid
// ':' denotes URL parameter
router.get('/getbyid/:id', (req,res) => {
    console.log(req.params.id);
    
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