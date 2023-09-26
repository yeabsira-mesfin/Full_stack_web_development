let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let objectId = mongoose.Schema.Types.ObjectId;

let wishList = new Schema({
    title: {type: String,default:"Cool Wish List"},
    products: [{type:objectId, ref:'Product'}]
})

module.exports = mongoose.model('WishList',wishList);