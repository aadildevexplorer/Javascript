// Yeh JavaScript ka type coercion + operator associativity ka classic case hai. Step-by-step samajh:

// 🔹 1. console.log("1" + 2 + 2);

// 👉 JS left-to-right evaluate karta hai.

// Step-by-step:
// "1" + 2
// → string + number = string concatenation
// → "12"
// "12" + 2
// → again string + number
// → "122"

// ✅ Final Output: "122"

// 🔹 2. console.log(1 + 2 + "2");
// Step-by-step:
// 1 + 2
// → number + number = addition
// → 3
// 3 + "2"
// → number + string = string concatenation
// → "32"

// ✅ Final Output: "32"

// 🔥 Core Concept (Important for Interviews)

// 👉 + operator ka behavior depend karta hai:

// Case	Behavior
// number + number	addition
// string + anything	concatenation

// 👉 Aur JS left-to-right evaluate karta hai.

// ⚡ Shortcut Trick (Exam / Interview)
// Agar string pehle aa gayi → baaki sab string ban jayega
// Agar numbers pehle solve ho gaye → fir string lagegi
// 💡 Ek aur example:
// console.log("5" + 1 + 1); // "511"
// console.log(5 + 1 + "1"); // "61"

// 🔥 ** kya hota hai?

// 👉 Ye exponentiation operator hai
// 👉 Matlab: power nikalna

console.log(2 ** 3); // 8