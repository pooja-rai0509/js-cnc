let myName = "pooja      "
let myChannel = "chai      "

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength) // repeatedly dont want to use trim so will create a method to get true length

let heros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// custom property added in an object & then accessed in all types string, object, array
Object.prototype.pooja = function(){
    console.log(`pooja is present in all objects`);
    
}

Array.prototype.arrPooja = function(){
    console.log(`pooja is present in array`);
    
}

//heroPower.pooja()
//heros.pooja()

//heroPower.arrPooja()      // given prototype in array not object but object shares to all
//heros.arrPooja()

// inheritance
// __proto__ - used to inherit others object data
// now outdated

const user = {
    name : "chai",
    email : "chai@goolge.com"
}

const Teacher = {
    maleVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,

}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Chai New            "

String.prototype.truelength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trimEnd().length}`);
    
}

anotherUserName.truelength()
"pooja".truelength()
"helloji".truelength()


// window - this = window (Global Execution Context)
// node - this = {} (empty object)