function setUserName(userName){
    // complex db calls
    this.userName = userName
    console.log("called");
    
}

function createUser(username, email, password){
    //setUserName(username)   // called but reference vanished & 
    setUserName.call(this, username)      // to hold reference
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);
