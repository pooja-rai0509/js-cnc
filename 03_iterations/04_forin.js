// object & array are iterable in for in loop but not in for of loop
const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);    
}

// map is bnot iterable in for in loop
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
}