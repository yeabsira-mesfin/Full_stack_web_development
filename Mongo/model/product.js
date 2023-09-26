let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let product = new Schema({
    title: String,
    price: Number,
    likes: Number
});

module.exports = mongoose.model('Product',product);