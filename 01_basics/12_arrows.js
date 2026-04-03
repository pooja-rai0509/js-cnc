const user = {
    userName: "pooja",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.userName}, welcome to website`); //this - current context
        console.log(this);
    }
}

//user.welcomeMsg()
//user.userName = "sam"   // here context is changed
//user.welcomeMsg()

//console.log(this);
// in browser global object is window object
// here in node is empty object

// Normal function - this cannot be used
// function chai(){
//     let userName = "pooja"
//     console.log(this.userName);
// }

// Arrow function
// const chai = () => {
//     let userName = "pooja"
//     console.log(this);       // empty object
// }

//chai()  

// () => {}

// Explicit Function - in which return used in curly braces
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit function - one single line without return & curly braces
//const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

const userName = () => ({a: 1})

//console.log(addTwo(3,4));
//console.log(userName());
