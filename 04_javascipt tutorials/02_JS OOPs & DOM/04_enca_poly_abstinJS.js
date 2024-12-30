/*Encapulation: 
 bundling data and methods into a single unit
 */
class BankAccount {
    #balance = 200;
    deposit(amount) {
        this.#balance += amount
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }

}
let account = new BankAccount()
console.log(account.getBalance());

/* Abstraction:
   the process of hiding an application's internal details from the outside world
 */

class CoffeeMachine {
    start() {
        //call DB
        // filter value
        return `starting the machine...`
    }
    brewCoffee() {
        // complex calculation
        return `Brewing coffee`
    }
    pressStartBitton() {
        let msgOne = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgOne} + ${msgtwo}`
    }
}

let mymachine = new CoffeeMachine
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
console.log(mymachine.pressStartBitton());



/* polymorphism:
   allows objects of different classes to be treated as instances of
    a common interface or superclass.
*/

class Bird {
    fly() {
        return `Flying....`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly`
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static method
class calculator {
    static add(a, b) {
        return a + b;
    }
}
// let miniCalc= new calculator();
// console.log(miniCalc.add(2,3));
console.log(calculator.add(2, 3));







