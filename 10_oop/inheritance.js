class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("chai","chai@gmail.com","123")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof teacher);
console.log(chai instanceof User);