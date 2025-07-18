const name = "Raja";
let age = 23;

// console.log("My name is "+ name + " and my age is "+age);   //String concat

// console.log(`My name is ${name} and my age is ${age}`);  //String concat by using string interpolation [`` -> Backtick]

const village = new String("Ayaba");  //Another way to declare a string
console.log(village);
// console.log(village[0]);   //key - 0  :  value - A  [key value pair]

console.log(village.substring(0,3));
// console.log(village.includes("yab"));


const newName = "  Bruce   ";
// console.log(newName);
// console.log(newName.trimEnd());

const url = "https://raja$$nayak-20";
const newUrl = url.replace('$$', '-');
console.log(newUrl);

const newString = "raja_nayak_20";
console.log(newString.split('_'));
const arr = newString.split('_');
console.log(arr[1]);

