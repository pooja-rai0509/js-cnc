const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// ********************** Maths **********************

// console.log(Math);
// console.log(Math.abs(-354.215));
// console.log(Math.round(4.874));
// console.log(Math.ceil(7.1));
// console.log(Math.floor(2.156));
// console.log(Math.min(5, 1, 6));
// console.log(Math.max(54, 85, 98));

console.log(Math.random()); // gives random no. b/w 0-1
console.log((Math.random() * 10) + 1); // to avoid 0 used + 1 & by multiply by 10 gives random no. b/w 1-9
console.log(Math.floor(Math.random() * 10) + 1); // to avoid decimal no.s used floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) // gives random no.s b/w 10-20