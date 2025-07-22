const accountId=11621
let accountEmail="xyz@gmail.com"
var accountPassword="xyzabc"
accountCity="Kolkata"
let accountState

/* let and var use for all other 
    but avoid var use only let
    because of issue in block scope and functional scope
*/
accountEmail="abc@xyz.com"
accountPassword="abc123456"
accountCity="Delhi"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

