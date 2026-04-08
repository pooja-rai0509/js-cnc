// callback(without name function) function is used in foreach loop
const coding = ["js","ruby","java","python","cpp"]

// using normal function
coding.forEach(function (item){
    console.log(item);
    
})

// arrow function
coding.forEach( (item) => {
    console.log(item);
    
});

// using outer function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// 1st param contains value, 2nd - index, 3rd - array, 4th -
coding.forEach( (item, index, array) => {
    console.log(item,index,array);
} )

// objects in array
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "pythgon",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})