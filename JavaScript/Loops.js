/* Loops are used when you want to do something multiple times. () */
let value1 = 10;
for(let i = 0; i<=value1; i++){
    console.log(i)
}
console.log('##############')
for(let i = 0; i<=value1; i+=3){
    console.log(i)
}
console.log('##############')

let students = ['Yeab','Jacob','Ronnie','Jessica']
for(let i = 0; i<students.length; i++){
    console.log(students[i])
}
for(let x in students){
    console.log(x)
}