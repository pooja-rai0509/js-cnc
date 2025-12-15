const name = "pooja"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pinu-Ninu')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
console.log(gameName.charAt(2));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-4,10)
console.log(anotherString);

const newStringOne = "   Pinu      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pinu.com/pinu%20rai"

console.log(url.replace('%20', '-'));
console.log(url.includes('rai'));

console.log(gameName.split('-', 1));
