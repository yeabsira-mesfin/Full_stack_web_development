let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/learnmongo');

let Product = require('./model/product');
let WishList = require('./model/wishList');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000,function(){
    console.log("Swag Shop API running on port 3000...")
});