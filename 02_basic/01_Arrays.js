// Arrays

const arr1 = [1, 2, 3, 4, 5];

const arr2 = ["Bruce", "Conor"];

const arr3 = new Array(10, 20, 30);

// console.log(arr2[0]);
// console.log(arr1[1]);


// Array methods

// arr1.push(10);   // Add one element at the last
// arr1.pop()       // Remove one element from the last
// arr1.unshift(0);    // Add one element at the first and shift rest of the element by 1 position forward
// arr1.shift();       // It remove one element from the first position
// console.log(arr1);  

// console.log(arr1.includes(5));  //returns true if value is present inside the array
// console.log(arr1.includes(7));  //returns flase if value is not present inside the array

// console.log(arr1.indexOf(4));  //returns the index value of the passed value (if present)
// console.log(arr1.indexOf(9));  //returns -1 if the passed value is not present

// const arr4 = arr1.join();   
// console.log(arr1);
// console.log(arr4);  // returns in a string format

// .slice()  .splice()

console.log(arr1);
console.log(arr1.slice(1,4));  // It returns same like sub-array
console.log("A ", arr1);

console.log(arr1.splice(0,2));  // This one return like sub-array but also it removes that part from the original array
console.log("B ", arr1); 





