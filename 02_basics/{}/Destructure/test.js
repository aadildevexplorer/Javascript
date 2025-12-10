// Destructure - Destructuring is a JavaScript feature that allows you to extract values from objects or arrays and
// assign them to variables in a clean, concise, and structured way.

// Destructure matlab array ya object me se value nikal lena

// Dot (.) Notation vs Destructure agar ek value get karni ho to use dot notation ok laikin agar multiple value acess karna ho to using Destructure

const course = {
  courseName: "BCA",
  fees: 999,
  clas: "5 Sem",
};

console.log(course.courseName); // one value
const { courseName, fees } = course; // multiple values
console.log(courseName);
