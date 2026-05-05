class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    // with get, set should also be defined
    // _(underscore) used for private/internal property
    // modern use #
    get password(){
        return `${this._password.toUpperCase()}poo`
    }

    set password(value){
        // here is override & set in new variable as same will cause stack size exceed
        this._password = value.toUpperCase()
    }

    get email(){
        return this._email
    }

    set email(value){
        this._email = value
    }
}

const pooja = new User("pr@pooja.ai","abc3")
console.log(pooja.password);
console.log(pooja.email);