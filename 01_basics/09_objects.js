// Two ways to create objects
//1. object literals
//2. singleton object

//1. object literals
const mySym = Symbol("key1")
// console.log(mySym);
// console.log(typeof mySym);


const jsUser = {
    name : "pooja",  //key:value pair
    "full Name": "Pooja Rai",
    //mySym: "Key1",  //interview-add a symbol in an object , so this is not a sysmbol its just a string
    [mySym]: "Key2", //now its a symbol
    location: "Bhilai",
    email: "pooja@gmail.com",
    isloggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]); //when a key defined with space then onlty by square brackets it can be acccessed
// //console.log(jsUser.mySym); //its a string
// console.log(jsUser[mySym]); //a symbol now injected in an object
// console.log(typeof(jsUser[mySym])); // but type will be string

// [mySym] makes the key a Symbol
// jsUser[mySym] accesses the value
// typeof(jsUser[mySym]) → checks the value type, not the key

jsUser.email = "pooja@chatgpt.com" //can override the value
// console.log(jsUser);
//Object.freeze(jsUser)   // to freeze the value
jsUser.email = "pooja@microsoft.com"
// console.log(jsUser);    // also by this tells key that its a symnbol key

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this["full Name"]}`);
}

// console.log(jsUser.greeting);   //undefined
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

//2. singleton object
const tinderUser = new Object() //singleton object
const tinderUser1 = {} //object literal

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "somne@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Pooja",
            lastName: "Rai"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser.fullname?.userFullName.firstName); //when any object access from api then need to add ? that if anty that key exist ort not

// to merge objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1, obj2} // this will be nested object
//const obj3 = Object.assign({},obj1, obj2)   // {} can be used as a target to merge source in this
const obj3 = {...obj1, ...obj2} // can use spread operator
console.log(obj3); 


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));   // used to convert in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));
