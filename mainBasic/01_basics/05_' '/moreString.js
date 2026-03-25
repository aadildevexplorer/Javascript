let a = "Hello";
a[0] = "A";
console.log(a);
// output 'Hello' because string is immutalbe
// ✔ String ka data change nahi hota
// ✔ Jab bhi modify karte ho new string return hoti hai

// (A) String Literal (normal way)
let name = "Aadil";
console.log(name);
// ✔ Fast
// ✔ Sabse zyada use hota

// (B) String Object (rare — avoid karte)
let name2 = new String("Aadil");

// ❌ Avoid isliye karte kyunki ye actual object hota hai
// ❌ Comparison me problems deta hai

// 👉 Interview point:
// “String literal === string object? → No”

let str = "world".charCodeAt();
console.log(str);

// spread 