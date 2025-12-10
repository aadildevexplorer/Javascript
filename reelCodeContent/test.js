// const prices = [100, 200, 300, 400];
// const doubled = [];

// for (let i = 0; i < prices.length; i++) {
//   {
//     doubled.push(prices[i] * 2);
//   }
// }

// console.log(doubled);

// const doubled = [100, 200, 300];
// const arr = doubled.map((item) => item * 2);
// console.log(arr);

// let name = "aadil";
// name = "hamza";
// console.log(name); // 'hamza' because we chaned just a variable name not change str or str value

// const str = "lala";
// str[0] = "ala"; // connot change because string is a prmtv dtype or orimitife data type is immutable
// console.log(str);

// const msg = `this is the end`;
// const str = "JavaScript";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[str.length - 1]);

// const text = "Learn JavaScript fast!";
// console.log(text.indexOf("script"));

// // operator value ko merge karta h
// const test1 = [1, 2, 3, 4, 5, 6];
// const test2 = [7, 8, 9, 10];

// const finalYear = [...test1, ...test2];
// console.log(finalYear);

// rest opearator multiples value ko dingle array me collect karta h
// function rest(...numbers) {
//   console.log(numbers);
// }
// rest(1, 2);

// const obj = {
//   name: "Aadil",
//   fields: {
//     f1: "IT",
//     f2: "Data Science",
//   },
// };

// const copyFields = { ...obj.fields, ...obj.fields };
// console.log(copyFields);

// console.log(obj.fields);
// obj[0]?.fields = { ...obj[0].fields };
// console.log(obj?.fields?.f1);
// console.log(obj.fields);
// console.log(obj);

// const arr = [{ name: "aadil" }];
// console.log(arr[0].name[0]);
// console.log(arr.name);

const obj = [
  {
    Name: [
      {
        name: "Aadil",
      },
    ],
    data: [
      {
        users1: "khan",
        user2: "Ali",
      },
    ],
  },
];

obj[0].data = [...obj[0].data, ...obj[0].data, ...obj[0].data];
console.log(obj);