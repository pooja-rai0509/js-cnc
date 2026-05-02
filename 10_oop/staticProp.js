class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    static createId(){      // to not give acccess to the function
        return `123`
    }
}

class teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const pooja = new user("pooja")
// console.log(pooja.createId())

const iphone = new teacher("iphone","iphone@gmail.com")
iphone.logMe()
console.log(iphone.createId());
