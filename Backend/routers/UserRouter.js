const express = require('express');

const router = express.Router();

router.get('/add', (req,res) => {
    res.send('Response from user add');
});

// getall
// getbyid
// update
// delete

// npm init -y
// npm i express
// npm i nodemon
// add dev script

module.exports = router;