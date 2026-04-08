// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) { // here object means in which variable to loop
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log("Each char is ", greet);
}

// Maps - an object holds key-value pair

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

console.log(map);   // unique values return

for (const [key,value] of map) {
    console.log(key, ":",value); 
}

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key, ":",value);    // object is not iterable
}
// maps are iterable throgh for of loop