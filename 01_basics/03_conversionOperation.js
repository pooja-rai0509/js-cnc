let score = "33abc"
let temp = null
let undf 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN Not a number

let tempInNumber = Number(temp)
console.log(typeof tempInNumber);
console.log(tempInNumber); // 0

let undfInNumber = Number(undf)
console.log(typeof undfInNumber);
console.log(undfInNumber); // NaN Not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn);
console.log(boolIsLoggedIn); // NaN Not a number

// 1 => true; 0 => false
// "" => false
// "pooja" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

//********** Operations **********

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "pooja"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(2 + "1")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2");

console.log(3 + 4 * (5 % 3));

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
