// console.log(this); // Global this (or window, in browsers)

console.log(globalThis);

const myObj = {
    a: "Hello",
    myFunc: function() {
        console.log(this);
    },

    // Functions can also be defined like this
    myFunc2() {
        console.log(this);
    },

    // Arrow functions do not have access to the 'this' keyword and will return global this
    myIncorrectFunction: () => {
        console.log(this);
    },

    // Running a function not attached to an object will not have access to this
    myIncorrectFunction2: function() {
        function test() {
            console.log(this);
        }
        test();
    }
}

// myObj.myFunc(); // myObj
// myObj.myFunc2(); // myObj

// myObj.myIncorrectFunction(); // Global this
// myObj.myIncorrectFunction2(); // Global this

