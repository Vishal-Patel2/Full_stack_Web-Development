// oops concepts
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};
console.log(car.start());

//using constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new Person("John doe", 20);
console.log(john.name);


// prototype chain

function Animal(type) {
    this.type = type
}
Animal.prototype.speak = function () {
    return `${this.type} make a sound`
}
Array.prototype.vishal = function () {
    return `Custom method ${this}`
}
let myArray = [1, 2, 3];
console.log(myArray.vishal());
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.vishal());


//Inheritance 
/*  Prototypal Inheritance: In JavaScript, objects inherit directly from other objects (prototypes).
Constructor Functions: These functions act like classes, creating new objects with shared properties and methods.

*/
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.make} is car from ${this.make}`;
    }
}
class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;

    }
}
let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start());
console.log(myCar.drive());


