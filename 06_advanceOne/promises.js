// 3 states of promise - pending, fulfilled, rejected
// 2 parts of promises - create & consume

// Promise1 with variable
//created
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()       // this connects to then
    }, 1000);
})

//consume
promiseOne.then(function(){
    console.log('Promise consumed');
})

// Promise2 without variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task2 is complete');
        resolve()       
    }, 1000);
}).then(function(){
    console.log('Promise2 consumed');
})

// Promise3 pass value in resolve & use in then
const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('Async task3 is complete');
        resolve({userName: 'Chai', email: 'chai@example.com'})       
    }, 1000);
})

promiseThree.then(function(user){
    console.log('Promise3 consumed',user,user.userName);
})

// Promise4 chaining then to return values
const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('Async task4 is complete');
        let error = true
        if(!error){
            resolve({userName: 'Pooja', password: '123'}) 
        }else{
            reject('ERROR: Something went wrong')
        }
              
    }, 1000);
})

promiseFour.then((user) => {
    console.log('Promise4 consumed',user,user.userName);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
})

// Promise5 async await
const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('Async task5 is complete');
        let error = true
        if(!error){
            resolve({language: 'Javascript', password: '123'}) 
        }else{
            reject('ERROR: JS went wrong')
        }
              
    }, 1000);
})

//async await cxannot directly handle the errors need to handle through try catch
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// Api data fetch using async await
// https://jsonplaceholder.typicode.com/users

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()      // this conversion also takes time so need to await 
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

//getAllUsers()


// Api data fetch using promise fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})

// here qn is why fetch run before as its code written in last?
// in JS Engine call stack fetch queue/priority queue is executed first