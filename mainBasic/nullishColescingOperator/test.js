// The nullish coalescing operator (??) is a logical operator in JavaScript and TypeScript
// that returns its right-hand side operand when the left-hand side is null or undefined

// 🔹 Basic Syntax
// let result = value ?? defaultValue;

// 👉 example
// Agar value null ya undefined hai → defaultValue use hoga
// Agar value me koi bhi valid value hai → wahi use hogi

const users = {
  student: {
    name: undefined,
    age: 0,
  },
};

console.log(users.student.name ?? "dummy user");
console.log(users.student.age ?? "53");
