// Javascript Execution Context (JEC)
// JS IS A SINGLE THREADED 

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// Two phases 
// 1. Memory creation phase
// 2. Execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let resule2 = addNum(10,2)

// Steps of Execution of above code
// 1. Runs with GEC - allocates in 'this'
// 2. Memory phase - 
//      val1 undefined, val2 undefined, addnum undefined, result1 undefined, result2 undefined
// 3. Execution phase -
//      val1 <- 10, vaL2 <- 5,
//      addnum -> New variable environment + Execution thread in a box
//      Memory phase - val1 -> undefined, val2 -> undefined, total -> undefined
//      Execution phase - num1 <- 10, num2 <- 5, total <- 15
//      total returns to 1. GEC
//      then New variable environment + Execution thread in a box deletes
//      retult1 <- 15
// Then again for Result2 New variable environment + Execution thread in a box
//      Memory phase - val1 -> undefined, val2 -> undefined, total -> undefined
//      Execution phase - num1 <- 10, num2 <- 2, total <- 12
//      total returns to 1. GEC
//      then New variable environment + Execution thread in a box deletes
//      retult2 <- 12


// CALL STACK

// here one by one execution & removed from stack
function one(){
    console.log("one");
}

function two(){
    console.log("two");
}

function three(){
    console.log("three");
}

one() 
two()
three()

// here one inside onother execution & removed as LIFO instead of one by one
function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}

one() 
two()
three()