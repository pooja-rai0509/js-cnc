// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changUsername());

// behind the scene

function userBts(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

userBts.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

userBts.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new userBts("chai","chai@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());