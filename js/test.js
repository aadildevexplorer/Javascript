// Class = A class is a blueprint or template used to create objects with predefined properties and methods.
// class User {
//   constructor(name, age) {
//     ((this.name = name), (this.age = age));
//   }
// }

// const u1 = new User("saif", 40);
// console.log(u1);

// Constructur = A constructor is a special method in a class that is automatically called
//  when an object is created, used to initialize object properties.
// console.log(Object.keys(u1));

// JSON format
// {
//     "id": "fae147e5-06d3-44a7-b115-260533fc5842",
//     "title": "vfdf",
//     "technology": "CSS",
//     "status": "In Progress",
//     "range": "Medium",
//     "social_media_platform": "Chat GPT",
//     "date": "2026-03-04",
//     "description": "vd"
// }

// console.log("Start");

// for (let i = 0; i < 1e9; i++) {
// heavy task
// }

// console.log("End");

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// console.log(this);

// (() => {
//   console.log("hello world");
// })();

// (function name() {
//   console.log("hello world");
// })();

// const num = [6, 3, 6, 7, 2,8, 4, 3, 6, 7, 3, 1];

// const sortedNum = num.sort((a, b) => a - b);
// console.log(sortedNum);

// loop is control structure used to execute block of code that repeatedly a given condition

for (let i = 0; i <= 50; i++) {
  if (i === 40) {
    continue;
  }

  console.log(i);
}
  const [count , setCount] = useState(0)
  function increaseCount(){
    setCount(count + 1)
  }

   function decreaseCount(){
    setCount(count - 1)
  }
  
