// if

// const isUserLoggedIn = true
// const temp = 41

// if(temp < 50){
//     console.log("Less than 50");
    
// }
// else{
//     console.log("Greater than 50");
// }
// // comparision operator
// // <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 1000

// inline single line code (can use multiline using ,(comma))
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// } 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2 == 23){
    console.log("Allow to buy course");   
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In"); 
}