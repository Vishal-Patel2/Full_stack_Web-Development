//  Closures in javascript
function outer() {
    let counter = 10;
    return function () {
        counter++;
        return counter;
    };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());


/*
In JavaScript, a closure is a function that has access to the
variables in its outer (enclosing) function, even after the outer
function has finished executing. 
This allows the inner function to "remember" the environment in which it was created. 

Here's a breakdown of the key concepts:
1. Lexical Scoping: JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the source code. 
2. Function within a Function: Closures are created when a function is defined inside another function. 
3. Access to Outer Scope: The inner function has access to the variables and parameters of its outer function, even after the outer function has returned. 


*/
function makeCounter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = makeCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2

  //Benefits of Closures:
/*
Data Encapsulation: Closures provide a way to create private variables and functions within a function's scope.
Maintaining State: Closures allow functions to retain state across multiple invocations.
Higher-Order Functions: Closures are essential for writing powerful higher-order functions that take functions as arguments or return functions.
*/
