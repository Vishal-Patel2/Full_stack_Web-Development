// Part-2 oops and DOM in javascript

/* Object-oriented programming (OOP) concepts: 
   Classes, instances, inheritance, and encapsulation.

   javascipt have both own properties like  1. prototype based (object absed lang.)
                                            2. class-object based(object oriented lang.)
*/
let computers = { cpu: 12 }
let lenovo = {
    screen: "HD",
    __proto__: computers
}
let tomHardware = {}

// console.log(`computer`,computers.__proto__);
console.log(`Lenovo`, computers.__proto__);


//another roles
let genericCar = { tyres: 4 }
let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
// console.log(`tesla`, tesla);   //for printing tesla driver
// console.log(`tesla`, genericCar);   // for printing genericCar
console.log(`tesla`, Object.getPrototypeOf(tesla));

