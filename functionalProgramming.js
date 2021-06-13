// A closure is when a function has access to the outer scope at time of declaration

const outerFunction = () => {
    const value = "Test";
    return () => {
        console.log(value);
    }
}

const functionWithoutClosure = () => {
    console.log(value);
}

const functionWithClosure = outerFunction();

// functionWithClosure() // Will print value declared inside outerFunction
// functionWithoutClosure() // Will error out because value is not defined



// Compositions are when we combine two or more functions into one
// For example, this is a function composition

const add1 = (num) => num + 1;
const square = (num) => num * num;

// console.log(square(add1(1))) // should return 4 because first we add 1 + 1, then we square the result;

// We can also have a 'compose' function that will reduce all functions from left to right for readability
const compose = (...functions) => {
    // Return a function that will run all the functions passed in as an arg
    return (...args) => {
        // Running this function will programmatically do the same behavior as above, such as (square(add1(1)))
        return functions.reduce((accumulator, fn) => fn(accumulator), ...args)
    }
}

// Pass in the functions that we want to compose with
const composedFunction = compose(add1, square); // This allows us to read the function order from left to right

// Due to closure, composedFunction still has access to the functions that we used to create it.
// console.log(composedFunction(1)) // should return 4. First we add 1, then we square the result;



// Currying transforms a function so that we call each argument in distinct steps

// Non-curried
const multiply = (x, y) => {
    return x * y;
}

// Curried
const curriedMultiply = (x) => {
    return (y) => {
        return x * y;
    }
}

// console.log(multiply(2, 3)) // Should return 6 for obvious reasons
// console.log(curriedMultiply(2)) // Should return a function, because we only passed in one arg
// console.log(curriedMultiply(2)(3)) // Should also return 6
