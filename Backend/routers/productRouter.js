const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();
router.post('/add', (req,res) =>{
    console.log(req.body);
    
    new ProductModel(req.body).save()
    .then((result) => {

        res.status(200).json(result);

    }).catch((err) => {

        console.log(err);
        res.status(500).json(err);

    });
});

router.get('/getall', (req,res) => {
    res.send('Response from user getall');
});

// getbyid
// ':' denotes URL parameter
router.get('/getbyid/:id', (req,res) => {
    console.log(req.params.id);
    
    res.send('Reponse from User ID');
});

router.get('/update',(req,res) => {
    res.send('Server Updated')
});

router.get('/delete',(req, res) => {
    res.get('deleted')
});

module.exports = router;