// console.log(this); // Global this (or window, in browsers)

// console.log(globalThis);

const myObj = {
    a: "Hello",
    myFunc: function() {
        console.log(this);
    },

    // Functions can also be defined like this
    myFunc2() {
        console.log(this);
    },

    // Arrow functions do not have access to the 'this' keyword and will return (parent) global this
    myIncorrectFunction: () => {
        console.log(this);
    },

    // Running a function not attached to an object will not have access to this
    myIncorrectFunction2: function() {
        function test() {
            console.log(this);
        }
        test();
    },

    // However, arrow functions can access the parent this
    myFunc3: function() {
        const test = () => {
            console.log(this); // 'this' will be myObj;
        }
        test();
    },
}

// myObj.myFunc(); // myObj
// myObj.myFunc2(); // myObj

// myObj.myIncorrectFunction(); // Global this
// myObj.myIncorrectFunction2(); // Global this
// myObj.myFunc3(); // myObj


// Using call()
// allows us to call functions using a specified context

function test(arg1, arg2) {
    console.log(this, arg1, arg2);
}

// test("hello", "world") // Global context
// test.call(myObj, "hello", "world"); // myObj context

// Use apply() to call functions using specified context and args as an array
// test.apply(myObj, ["hello", "world"]); // myObj context

// Use bind() to create a new function with a specified context
const boundTest = test.bind(myObj);
// boundTest("hello", "world") // myObj context