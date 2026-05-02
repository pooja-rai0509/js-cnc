const user = {
    userName : "pooja",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from db");
        //console.log(`UserName: ${this.userName}`);
        console.log(this);
    }
}

// this - refers to current context

//console.log(user.userName);
//console.log(user.getUserDetails());

//console.log(this);
// when this console.log in browser, then current context object is Windows browser, so returns windows objects & when run in file then returns empty object as no current coontext exist

// if want to make another user then in this case used constructor function
const user2 = {
    userName : "pooja",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from db");
        //console.log(`UserName: ${this.userName}`);
        console.log(this);
    }
}

// constructor functions
// new keyword - is a constructor to create a new instance
// const promiseOne = new Promise()
// const date = new Date()

function User(userName, loginCount, isLoggedIn){
    // variable = param value
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Ẁelcome ${this.userName}`);
        
    }

    // returned object & its properties
    return this
}

//const userOne = User("pooja", 12, true)
//const userTwo = User("Chai", 11, false) // by this value gets override even if called userOne
// so for this need to wride new keyword to create new instance/object
// even in function id return is not there then by default it has implicitly rerturn defined

const userOne = new User("pooja", 12, true)
const userTwo = new User("Chai", 11, false)

console.log(userOne.constructor);
console.log(userTwo);

// about new keyword
// 1. creates an emty instance
// 2. calls cunstructor function - packs all arguments
// 3. injects in 'this' keyword
// 4. gets in return all values in object