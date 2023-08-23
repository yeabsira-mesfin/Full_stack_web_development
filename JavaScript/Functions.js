/* Functions are statments that allow us to use that statment 
multiple time by just calling them from different part of the code. */
function area(length, width){
    let area = length * width
    return area;
}
// It's easier to call the function and pass a value instead of multiplying two number multiple times.
let area1 = area(20,40);
console.log("Youre are is",area1);

let area2 = area(55,13);
console.log("Your are is", area2);
// We can set out values into an array.
let rectangleAreas = [];
rectangleAreas.push(area(23,45))
rectangleAreas.push(area1)
rectangleAreas.push(area2)
console.log(rectangleAreas)

let bankbalance = 500;
function makeTransaction(pirceOfProduct){
    if(pirceOfProduct <= bankbalance){
        bankbalance -= pirceOfProduct;
        console.log("Purchase Successful");
    }
    else {
        console.log("Insufficient balance")
    }
}
makeTransaction(67);
makeTransaction(400);
makeTransaction(100)
makeTransaction(600)

// We can assign a function to a variable.
let printCustomer = function(firstName,lastName,id){
    console.log('Your first name is ' + firstName + "\n" + "your last name is \n" + lastName + " and your ID is " + id);
}
console.log(printCustomer('Yeabsira','Mesfin','029'));