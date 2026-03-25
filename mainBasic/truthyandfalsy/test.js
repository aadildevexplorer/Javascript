// Falsy values vo hoti h jo false treat hote h
// false;
// 0 - 0;
// 0n;
// "";
// null;
// undefined;
// NaN;

if (NaN) {
  console.log("Execution passed");
} else {
  console.log("Execution failed");
}

// Truthy values vo hoti h jo true treat hote h
// "hello"
// 1
// -5
// []
// {}
// true
// "0"
// "false"

if ([]) {
  console.log("Run");
} else {
  console.log("Fail");
}

console.log(2 != 2);
