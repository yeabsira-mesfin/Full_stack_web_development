/* Comparision and Conditional Operators. */
// Comparision operators compare and return values. (<, > , ==, ===, <=,>=,!=)
// Whereas the conditional operators execute based on certain criterias.(if ...,else if ... ,if ... else)
let myAccountBalance = 300;
let expensiveShoe = 694.93;
let coupon = 400;

if(expensiveShoe <= myAccountBalance){
    myAccountBalance -= expensiveShoe
    console.log("You bought a shoe.");
    console.log('Your account balance is ',myAccountBalance)
}
else if(expensiveShoe - coupon <= expensiveShoe){
    myAccountBalance -= expensiveShoe - coupon
    console.log("You bought a shoe.");
    console.log('Your account balance is ',myAccountBalance)
}
else{
    console.log('Your acount balance is insufficient')
}

let age = 23;
let yourage = '23';

// if(age == yourage){
//     console.log("We have the same age.")
// }
if(age === yourage){
    console.log("we have same data types.")
}
else {
    console.log("We have different data types.")
}

let num1 = 5;
let num2 = 8;
if(num1 != num2){
    console.log('The numbers are not equal.')
}