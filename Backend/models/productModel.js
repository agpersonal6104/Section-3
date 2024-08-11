const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    brand : {type : String},
    model : {type : String},
    price : {type : Number, required : true},
    image : String,
    createdAt :  {type :  Date, default : Date.now}
})

module.exports = model('products', mySchema); // user is collecting name