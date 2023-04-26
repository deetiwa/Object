// JavaScript Closures =>

// nested function example


function greet(name) {            // outer function

   
    function displayName() {            // inner function
        console.log('Hi' + ' ' + name);
    }
 
    displayName();                   // calling inner function
}


greet('John');         // calling outer function

//Returning a Function

function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1();              // calling the function