const accountId = 24835
let accountEmail = "pooja@gmail.com"
//both type is var
var accountPassword = "1234"
accountCity = "Jaipur" // not a good practice to use this

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

let accountState;

//accountId = 25 //not allowed
console.log(accountId);

accountEmail = "pr@gmail.com"
console.log(accountEmail);

accountPassword = "8975"

accountCity = "Odisha"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
