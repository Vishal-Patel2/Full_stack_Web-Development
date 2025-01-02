// this and bling context
/* In JavaScript, “context” refers to an object
   Within an object, the keyword “this”
    refers to that object (i.e. “self”),
    
 */
const person = {
    name: "Vishal",
    greet() {
      console.log(`Hi, I am ${this.name}`);
    },
  };
  
  person.greet();
  
  const greetFunction = person.greet;
  greetFunction();
  
  const boundGreet = person.greet.bind({ name: "John" });
  boundGreet();
  
  //bind, call and apply
  