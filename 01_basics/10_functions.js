//Functions

function sayMyName(){
    console.log("P");
    console.log("o");
    console.log("o");
    console.log("j");
    console.log("a");
}

sayMyName   //reference
//sayMyName() //execute

function add(n1,n2){        //parameterized function here in parenthesis is called parameter
    console.log(n1+n2);
}

//add(3,5)  // here in parenthesis is called arguments

function add(n1,n2){        //parameterized function here in parenthesis is called parameter
    //let result = n1 + n2
    //return result
    //console.log("Test");    // will not work any thing after return

    //or

    return n1+n2
}

const result = add(3,5) // we cannot store without functions output in a variable untill its returning anything

//console.log("Result :", result);    //undefined if not return from function


function loiginUser(userName = "Sam"){  //default value if null provided
    //if(userName===undefined){
    if(!userName){
        console.log("Please enter a userName");
        return
    }else{
        return `${userName} just Logged In`
    }
}
loiginUser("Pooja") // only return will not print in ther output

//console.log(loiginUser("Pooja"));
//console.log(loiginUser());  // undefined if not handled null values

function calcCartPrice(val1,val2,...num1){    // Rest/spread operator - returns in array
    return num1
}

//console.log(calcCartPrice(200,400,500,100,800));

// object in functions
const user = {
    userName: "Pooja",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    userName: "Sam",
    price: 250
})

//Array in functions
const myNewArr = [200,400,600]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArr));
