const accountId = 124442
let accountName = "Raja"
var accountEmail = "raja@gmail.com"

accountCity = "Kendrapara"   //Try to avoid declaring this kind of variables

//accountId = 6876476    //You can't modify/change a constant variable once it is initialized

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);

let newVariable;

// console.log(accountId);
console.log(accountCity);

accountCity = "India";

console.table([accountId,accountName,accountEmail,newVariable,accountCity]);
