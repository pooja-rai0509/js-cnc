const myNums = [1,2,3]

// using normal Function
const myTotal = myNums.reduce(function (acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)

// using arrow function
const total = myNums.reduce( (acc, curr) => acc + curr,0)

console.log(myTotal);
console.log(total);

const shgoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'py course',
        price : 999
    },
    {
        itemName : 'mobile dev course',
        price : 5999
    },
    {
        itemName : 'data science course',
        price : 12999
    },
]

// add shoppingCart price
const totalPrice = shgoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice);
