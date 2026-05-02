// Interview Qn - pi value is 3.141592..., want to convert it to 3 or 4, if possible, how? , if not then why?
// cannot

// descriptor used to know any functions property defined
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
// in this case is not writable
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// so we can acces its flag/properties & can change it


// can appply on our own object also to make static values 

const chai = {
    name: "ginger chai",
    price: 250,
    isavailable: true,

    orderChai: function(){
        console.log("Chai ni bani");
        
    }
}

// in object chai which property want so chai , name 
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// define property
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

}

// so we cannot redefine property which is already defined by js 
Object.defineProperty(Math, "PI",{
    writable: true
})

Math.PI = 5
console.log(Math.PI);
