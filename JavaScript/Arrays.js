/* Arrays are another datatype which can hold multiple values. */
// Individual items can be accessed by their indext number which starts from 0.
let students = ["Yeaba","Aaron","Ronnie"]
let rebashList = [];
console.log(students)
rebashList.push(students[1]);
console.log(rebashList)
let index = rebashList.indexOf("Aaron")
if(index > -1){
    rebashList = rebashList.splice(index,1)
}
console.log(index)
console.log(students.splice(2,1))
console.log(students)