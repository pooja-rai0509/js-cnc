//array

const arr = [1,2,3,true,'Hello'];

// console.log(arr);
// console.log(typeof arr);    //object
// console.log(arr[1]);

const newArr = new Array(1,'now',3,4)
//console.log(newArr[1]);

//Array methods

// newArr.push(6)  //adds an element to the last index
// newArr.push(7)
// newArr.pop()    //removes the last index element
//newArr.unshift(9)   //adds an element to the 1st index
//newArr.shift()  //removes the 1st index element

// console.log(newArr.includes(3));
// console.log(newArr.indexOf(3));

const newArr1 = newArr.join()   //converts the array to string
// console.log(newArr);
// console.log(newArr1);
// console.log(typeof newArr1);

//slice,splice

//console.log("A ", newArr);
const myN1 = newArr.slice(1,3)  //index, position (not includes)
// console.log(myN1);
// console.log("B ", newArr);

const myN2 = newArr.splice(1,3)  //index, position (includes)
// console.log("C ", newArr);
// console.log(myN2);

//Difference
//Slice - original array remains same
//Splice - original array not remains same as this manipulates the original array 


const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros) //pushes aerray under array as a single element
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros)  //concats in single array
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]  //spread operator is used mostly instead of concat
//console.log(allNewHeros);
// multiple arrays can be used in spread operator at once to make a single array

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const realAnotherArr = anotherArr.flat(Infinity) // spreads out all nested depth array, can give depth no. also instead of infinity
console.log(realAnotherArr);

console.log(Array.isArray("Pooja")) // returns true or false 
console.log(Array.from("Pooja"))    // makes the string to an array
console.log(Array.from({name: "Pooja"}));   //return a blank array need to provide key or value to make an array
console.log(Array.from({name: "Pooja"}.name));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // works same like from
