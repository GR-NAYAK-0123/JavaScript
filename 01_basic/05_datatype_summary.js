/*
      Primitive dataType                                  Reference (Non-primitive Data type)
  ----------------------------                    -------------------------------------------------
  1)String                                               1) Array
  2)Number                                               2) Object
  3)Boolean                                              3) Functions
  4)Null
  5)Undefined
  6)BigInt
  7)Symbol    
*/

/* JavaScript is a dynamic language because in this programmer does not explicitely provide the data 
   type it automatically consider their type
*/

let value = 100;
// console.log(value);

const id1 = Symbol('234');
const id2 = Symbol('234');

// console.log(id1);
// console.log(id2);

// console.log(id1 === id2); //false   
// // Symbol provides a unique id to every variable even if the value inside the variable is same or not

const hero = ["Bruce", "Jack", "Conor"]; //Array
console.log(hero);



let myObj = {
    name : "Raja",        //Object
    age : 23
}
console.log(myObj.age);


let myFunction = function () {
    console.log("Hello World");          //Function
    
}
console.log(typeof hero);

