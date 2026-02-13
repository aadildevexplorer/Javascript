// Loop programming ka control structure hai jo kisi block of code ko
// baar-baar repeat karne ke liye use hota hai jab tak koi condition true ho.

const myHeros = ["SRK", "Salman bhai", "Aamir khan"];

for (let i = 0; i < myHeros.length; i++) {
  const element = myHeros[i];
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is detected");
    // break;
    continue
  }
  console.log(i);
}
