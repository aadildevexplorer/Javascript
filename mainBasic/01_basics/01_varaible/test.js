const accountId = 1212121;
let accountEmail = "aadil@gmail.com";
var accountPassword = "123456";
accountCity = "Indore";

accountId = 43535;

accountEmail = "user@gmail.com";
accountPassword = "09090909";
accountCity = "ujjain";

// console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity]);

let accountPassword;
accountPassword = "12345";
console.log(accountPassword);

const age = "20";
console.log(age);

let a = "name";
a = true;
console.log(a);

function test() {
  var a = "9898";
  console.log(a);
}
test();

var x = 5;
var x = 10; // koi error nahi, overwrite ho jayega

var x = 1;
let y = 2;
const z = 3;
console.log(x, y, z);

{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x, y, z);
}

var b = "aadil";
a = "khan";
