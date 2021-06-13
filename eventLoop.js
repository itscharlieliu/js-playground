// console.log("Started");
// setTimeout(() => console.log("Done"), 5000) // Print "Done" after 5 seconds


function myFunc() {
    console.log("a");
    setTimeout(() => console.log("b"), 0) // Add to the event queue immediately
    console.log("c");
}

myFunc() // Because the event queue is only processed once the call stack is empty, this will print a -> c -> b



