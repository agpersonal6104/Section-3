const express = require('express');
const Model = require('../models/userModel');
const { model } = require('mongoose');

const router = express.Router();

router.post('/add', (req,res) => {
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) => {

        res.status(200).json(result);

    }).catch((err) => {

        console.log(err);
        res.status(500).json(err);

    });
});

// getall
router.get('/getall', (req,res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

// Get by city
router.get('/getbycity/:city', (req,res) => {

    Model.find({city : req.params.city})
    .then((result) => {

        res.status(200).json(result);

    })
    .catch((err) => {

        console.log(err);
        res.status(500).json(err);

    });
});

// Get by Email
router.get('/getbyemail/:email', (req,res) => {

    Model.findOne({email : req.params.email})
    .then((result) => {

        res.status(200).json(result);

    })
    .catch((err) => {

        console.log(err);
        res.status(500).json(err);

    });

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