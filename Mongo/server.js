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

app.listen(3000, function () {
    console.log("Swag Shop API running on port 3000...")
});