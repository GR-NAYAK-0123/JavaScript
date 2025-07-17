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
console.log(stringNumber);
console.log(typeof stringNumber);

// Here is the conversion from any datatype to String
// 12 -> 12
// null -> null
// undefined -> undefined

