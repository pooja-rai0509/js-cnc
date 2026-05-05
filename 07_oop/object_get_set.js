const user = {
    _email : "pooja@gmail.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set (value){
        this._email = value
    }
}

const tea = Object.create(user)

console.log(tea._email);
