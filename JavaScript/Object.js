/* Objects present real world item */
let student = {
    firstName:'John',
    lastName:'Wick',
    age:45
}
console.log(student.firstName)
console.log(student["firstName"])
console.log(student["lastName"])
console.log(student.lastName)
let obj = student;
console.log(obj.age)
// The following creates an empty object.
let student1 = new Object();
student1.firstName = "Yeabsira";
student1.lastName = "Mesfin";
student1.age = 24;
console.log(student1);
let student2 = {};
student2.firstName = "Abby";
student2.lastName = "Green";
student2.age = 29;

let students = [];
students.push(student)
students.push(student1)
students.push(student2)

let dog = {
    name:'Ricky',
    bark:function(){
        return "My name is and " +this.name+" I always bark and ask for treats."
    }
}
console.log(dog.bark());

// A constructor is a function which will be called every time the object is created.
function studentf(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
        return "Hi my name is " + first + "\n" + "My fathers's name is " + this.lastName + "\n" + "And I am " + this.age + "years old.";
    }
}
let s1 = new studentf("Yeabsira","Mesfin",24);
console.log(s1.greeting())
students.push(new studentf("Selam","Amen",26))
for(let index = 0; index<students.length;index++){
    console.log(students[index].firstName,students[index].lastName,students[index].age)
}

for(let key in student){
    console.log(student[key])
}