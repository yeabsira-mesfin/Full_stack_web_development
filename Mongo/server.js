let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://127.0.0.1:27017/learnmongo');

let Product = require('./model/product');
let WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/product', (req, res) => {
    let newProduct = new Product(); // Use a different variable name here
    newProduct.title = req.body.title;
    newProduct.price = req.body.price;
    newProduct.likes = req.body.likes;
    newProduct.save(function (err, savedProduct) {
        if (err) {
            res.status(500).send({ error: "Could not save product" });
        } else {
            res.status(200).send(savedProduct);
        }
    });
});
app.get('/product',(request,response)=>{
    Product.find({},function(err,products){
    if(err){
        response.status(500).send({error: "Could not fetch products"});
    } else {
        response.send(products);
    }
    });
})
app.get('/wishlist', (req, res) => {
    WishList.find({}).populate({path:'products', model: 'Products'}).exec((err,wishList)=>{
       if(err){
        res.status(500).send({error: "Could not fetch whishlist"})
       } else{
        res.status(200).send(wishList)
       }
    })
});

app.post('/wishlist', (req, res) => {
    const newWishList = new WishList({
        title: req.body.title
    });

    newWishList.save((err, newWishList) => {
        if (err) {
            res.status(500).send({ error: "Could not create wishlist" });
        } else {
            res.send(newWishList);
        }
    });
});

app.put('/wishlist/prodcut/add',(req,res)=>{
    Product.findOne({_id: req.body.produtID}, (err,prodcut)=>{
        if(err){
            res.status(500).send({error:"Could not add item to wishlist"})
        } else{
            WishList.updateOne({_id: req.body.wishListID}, {$addToSet:{prdocuts: product._id}}, (err,wishlist)=>{
                if(err){
                    res.status(500).send({error:"Could not add item to wishlist"})
                }
                else{
                    res.send('Successfully added to wishlist')
                }
            })
        }
    })
})
app.listen(3000, function () {
    console.log("Swag Shop API running on port 3000...")
});