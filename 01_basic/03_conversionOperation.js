let score = null;


//console.log(typeof score);

let value = Number(score);

//console.log(value);

// Here is the conversion from any datatype to Number
// "33" -> 33
// "33jvd" -> NaN (Not a Number)
// null -> 0
// undefined -> NaN
// false -> 0    true -> 1

let price = "";
let priceIntoBoolean = Boolean(price);
//console.log(priceIntoBoolean);

// Here is the conversion from any datatype to Boolean
// 1 -> true
// 0 -> false
// "" -> false
// "Raja" -> true

let anyNumber = undefined;
let stringNumber = String(anyNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Here is the conversion from any datatype to String
// 12 -> 12
// null -> null
// undefined -> undefined

//####################################### Operations ####################################################

let number =7;
let negativeNumber = -number;

// console.log(negativeNumber);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);   // It gives power value 
// console.log(2/2);
// console.log(2%2);

let str1 = "Hii "
let str2 = "Raja"
let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "8");
// console.log("1" + 8);
// console.log(1 + 4 + "8");
// console.log("3" + 2);

/*
    1) Whenever you want to convert this above types if you write number first then upto the number it convert to number then it can add with string

    2) If you are write string first then after the string all are converted into string by default
*/

// console.log(+true);

let num1, num2, num3;
num1 = num2 = num3 = 9 + 7;
// console.log(num1);

let a = 20;
console.log(a++);  //Post-increment  First access then increase
console.log(++a);  //pre-increment  First increase then access
console.log(a);


