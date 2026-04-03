// Immediately Invoked Function Expression (IIFE)
// IFE is a function that is executed immediately after it is defined, mainly used to avoid global scope pollution and create private scope.

(function chai(){
    console.log("DB Connected");
})();

// IIFE dont knows where to stop context, so need to add semicolon end

// ()() - first parenthethis contains function, second is execution

// Arrow function in IIFE
( () => { 
    console.log("DB Connected2");
})();

// Prameterized IIFE
( (name) => {
    console.log("UserName is ", name);
})("pooja")