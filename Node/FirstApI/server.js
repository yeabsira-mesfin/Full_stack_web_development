let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let ingredients = [
  {
    id: "232kAK",
    text: "Egg",
  },
  {
    id: "dkP345",
    text: "Chicken",
  },
  {
    id: "dkcuu7",
    text: "Beef",
  },
  {
    id: "73hdy",
    text: "Cheese",
  },
];
app.get("/ingredients", function (request, response) {
  response.send(ingredients);
});

app.post("/ingredients", function (request, response) {
  let ingredient = request.body;
  if (!ingredient || ingredient.text === "") {
    response
      .status(500)
      .send({ error: "Your ingredient must have at least one" });
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
});
// app.get('/yeabyy',function(request,response){
//     response.send("Yeabby you're progressing")
// })
app.put("/ingredients/:ingredientID", function (request, response) {
  let ingredientID = request.params.ingredientID;
  let newText = request.body.text;
  if (!newText || newText === "") {
    response.status(500).send({ error: "You must provide ingredient text" });
  } else {
    let objectFound = false;
    for (let x = 0; x < ingredients.length; x++) {
        let ing = ingredients[x];
        if(ing.id == request.params.ingredientID){
            ingredients[x].text = newText;
            objectFound = true;
            break;
        }
    }
    if(!objectFound){
        response.status(500).send({error:"Ingredient id not found"})
    } else{
        response.send(ingredients)
    }
  }
});

app.listen(3000, function () {
  console.log("First API running on port 3000!");
});
