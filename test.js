// let str = 'hello world'
// console.log(str.indexOf('d'))
// console.log('hello world'.length)

// const a = 90;
// function b() {
//   console.log(a);
// }

// b();

// const arr = [1,2,3,4,5]

// function removeElement(arr){
//     let ele = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(ele[i] === '3'){
//             ele.arr.shift([i])
//         }
//     }

//     return ele

// }

// const result = removeElement([1,2,3,4,5])
// console.log(result)

// function removeElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       arr.splice(i, 1);
//     }
//   }

//   return arr;
// }

// const result = removeElement([1, 2, 3, 4, 5]);
// console.log(result);

const ages = [10 , 19 , 5 , 7] 
console.log(ages.some((age => age < 20)))
console.log(ages.every((age => age < 20)))