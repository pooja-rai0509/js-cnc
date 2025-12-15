// Primitive Datatypes(call by value)
// 7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof id);


const bigNumber = 2134446445488545n
console.log(typeof bigNumber);


// Non-Primitive Datatypes(Reference, call by reference)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Pooja",
    age: 23
}
const myFunction = function(){
    console.log("My Function");
}

console.log(heroes);
console.log(myObj);
console.log(typeof myFunction); // function object


//************* Stack & Heap memory *************
// Stack(Primitive), Heap(Non-Primitive)

let myName = "pooja"

let anotherName = myName
anotherName = "cnc"

console.log(anotherName);
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    upi: "user1@ybl"
}

let user2 = user1
user2.email = "pooja@gmail.com"

console.log(user1.email);
console.log(user2.email);
