const arr1 = ["COnor", "Illia", "Khamzat"];

const arr2 = ["Bruce", "Thor", "Thanos"];

// arr1.push(arr2);

// console.log(arr1);
// console.log(arr1[3][2]);

//console.log(arr1.concat(arr2));   // If you concat a array with another array then this concat methods return a new array

//const new_arr = [...arr1, ...arr2];   // spread method
//console.log(new_arr);  

const arr3 = [1, 2, 3, [4, 5], 6, 7, [10, 4, [2, 3]]];

const total_arr = arr3.flat(Infinity);

//console.log(total_arr);

// console.log(Array.isArray("Raja"));
// console.log(Array.from("Raja"));

let value1 = 10;
let value2 = 20;
let value3 = 30;

console.log(Array.of(value1, value2, value3));
