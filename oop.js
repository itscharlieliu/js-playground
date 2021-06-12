// Classes in js are functions under the hood
// class keyword is syntactic sugar
// calling 'new' on this function creates an empty object and runs the function in that scope

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Equivalent to 
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// console.log(new Person("Charlie", 24));
// console.log(new Person2("Charlie", 24));

// Methods are defined in the function's prototype

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
}

// new Person("Charlie", 24).greet()


// You can use call() to call another function, but using the current context
// Equivalent to the super() call when using classes

function Student(name, age, major) {
    Person.call(this, name, age);

    this.major = major;
}

// Equivalent to 
class Student2 extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

// console.log(new Student("Kevin", 20, "CS"));
// console.log(new Student2("Kevin", 20, "CS"));