// Dates

let myDate = new Date();   //Creating a date object

// console.log(myDate);
// console.log(myDate.toString());   //Here we are converting that date to a string represented format
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// let newDate = new Date(2001, 11, 23);
// console.log(newDate.toDateString());

// let newDate = new Date("03-01-2006");
// console.log(newDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));  //Convert that millisecond to second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());  // returns the day by number by index
console.log(newDate.getDate());
console.log(newDate.getMonth());  // returns the month by number by index





