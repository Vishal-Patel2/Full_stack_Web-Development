//prototype in inheritance
//Each object has an internal link to another object called its prototype.
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  let hitesh = new Person("Vishal Patel");
  hitesh.greet();
  