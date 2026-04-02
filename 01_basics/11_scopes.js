// Global & local scope
//{} - curly braces is a scope

var c = 50

let a = 60

if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner: ", a); // here its a local varible //10
}

//console.log(a);   //a is not defined - can be accesssed only under scope
//console.log(b);   //b is not defined - can be accesssed only under scope
//console.log(c);     //c is returned - can be accessed ouytside the scope
// var is overriden to the latest value whether in scope or not

//console.log(a); // here its a global variable //60

//what global scope in node & windows?
// global scopes are different
// Browsers inspect console has different globalm scope
// Code environment node here in terminal which we run examples has different globalm scope

// Nestet scope

function one() {
    const userName = "Pooja"

    function two(){
        const website = "toutube"
        console.log(userName);
    }

    //console.log(website);   //not defined as its a local scode 

    two()
}

//one()

if(true){
    const userName = "pooja"
    if(userName === "pooja"){
        const website = " youtube"

        console.log(userName + website);
    }
    //console.log(website);   //not defined
}

//************  Interesting ************/

console.log(addOne(5)) // can be accessible before declaration

function addOne(num){
    return num + 1
}

addOne(5)

console.log(addTwo(6)); // cannot be accessible before declaration as its holding in a variable

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(6));

// This access is called as hoisting more about this in further
