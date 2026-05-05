// function based get_set

function User(email,password) {

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password
        },
        set: function(value){
            this._password = value
        }
    })

    this.email = email
    this.password = password
}

const abc = new User("pr@pooja.ai","abc3")
console.log(abc.email);