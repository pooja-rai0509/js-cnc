// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 2, 23, 15, 3) // year, month , date month comes like index 0 - Jan, 1 - Feb....
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-02-14")
let myCreatedDate = new Date("02-14-2025")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

console.log(`Todays date is ${newDate.getDate()} and month is ${newDate.getMonth() + 1} and year is ${newDate.getFullYear()}`)

// click control + space to get intellisence
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))