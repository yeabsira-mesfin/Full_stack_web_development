/* Logical operators work based on the values true and false. (&&,||) */

if(1===1 && 2===2){
    console.log("These both are true,and returns true.")
} 
if(1===4 && 2===2){
    console.log("One of them is false and returns false.")
}
if(1===4 && 2===5){
    console.log("These both are false and returns false.")
}
if(1 ===1 || 2===2){
    console.log("These both are true, and returns true.")
}
if(1===4 || 2===2){
    console.log("One of them is false and returns true.")
}
if(1===4 || 2===5){
    console.log("These both are false and returns false.")
}

let dog1 = 5;
let dog2 = 10;
let dog3 = 1;
let ddog = 2;
if(dog1 > dog2 && dog1 > dog3){
    console.log('Dog 1 is the cutest!')
}
else if(dog2 > dog1 && dog2 > ddog)[
    console.log("Dog 2 is the cutest! ")
]
else if(ddog > dog1 && ddog >dog2){
    console.log('Dog 3 is the cutest')
}