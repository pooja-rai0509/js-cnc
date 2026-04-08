const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.map((num)=> num + 10)

// chaoning
const newNums = myNums
                .map((num) => num * 10)     // this value than passed to next map
                .map((num) => num + 1)      // here num comes previous map returned value
                //.map((num) => num >= 15)    // return true false
                .filter((num) => num >= 41)

console.log(newNums);
