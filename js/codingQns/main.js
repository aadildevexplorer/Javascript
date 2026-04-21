// 🔥 1. Variables & Data Types (Coding – 5 Qns)
// Write a function that checks if a value is a primitive or non-primitive.

function checkPrimitiveOrNonPrimitve(){

    let value = ''

     if(value === Number){
        console.log('value is primitive')
     } else if(value === String){
        console.log('value is primitive')
     } else if(value === Boolean){
        console.log('value is primitive')
     } else if(value === null){
        console.log('value is primitive')
     } else if(value === undefined){
        console.log('value is primitive')
     }else{
        console.log('value is non-primitive')
     }

     return

}

const result = checkPrimitiveOrNonPrimitve('I am string')
console.log(result)

// Create a function that takes any input and returns its data type manually (without using typeof).

// function chechDataType (){

//     let input = 200
//     if(input.typeof === Number){
//         console.log('number')
//     }else{
//         console.log('other')
//     }

//         return input

// }

// chechDataType()

// Write a function to deep copy an object (no reference sharing). // no idea

// Create a function that converts:

// "123" → number
// true → string
// null → string

// str to number
// const str = '123'
// console.log(typeof str) // str
// console.log(typeof Number(str)) // number

// boolean to str
// const bool = true
// console.log(typeof bool)
// console.log(typeof String(bool))

// null to str
// const nll = null
// console.log(typeof nll)
// console.log(typeof String(nll))

// Write a function to compare two values and return:

// "loosely equal" ==
// "strictly equal" ===
// "not equal" !=

function comapreTwoValues (){

     let value1 = 2
     let value2 = '2'

     if(value1 != value2){
        console.log('not equal')
     }else if(value1 == value2){
        console.log('loosely equal')
     }else if(value1 === value2){
        console.log('strictly equal')
     }else{
        console.log('All are not equal')
     }

}

comapreTwoValues()

// console.log(2 == 2)

// 🔥 2. Functions (Coding – 5 Qns)
// Write a function that accepts another function as an argument and executes it (callback concept).

// function one(){
//     console.log('one')
//     function callback(){
//         console.log('call back')
//     }

// }

// one(callback())

// Create a function using closure that counts how many times it has been called. // no idea of closure

// Convert a normal function into an arrow function and explain difference in behavior (code demo).

// normal func
// function add(a , b){

//     return a + b

// }

// add(2 , 4)

// arrow func
// const add2 = (a , b) => {

//     return a+b

// }

// add2(2 , 2)

// diff func me this use kr sakte h arrow me nhi
// func me argument de sakte h arrow ne exist nhi krta
// func me cunstructor use hota h arrow me nhi banta

// Write a function that returns another function (function currying). // no idea

// Implement your own version of bind() method. // no idea

// 🔥 3. Arrays (Coding – 5 Qns)
// Implement your own version of map() function.

// function ownMapFunc (){

//     const ele = [1,2,3,4,5]
//     for (let i = 0; i < ele; i++) {
//         ele.map((i) => {
//             i * 2
//         })

//         console.log(ele)
//     }

//     return ele

// }

// ownMapFunc()

// Implement your own version of filter() function. // no idea

// Write a function to flatten a nested array:

// const flattenArr=  [1, [2, [3, 4]], 5] 
// const cleanArr = flattenArr.flat(2)
// console.log(cleanArr)

// Write a function to find the second largest number in an array.

// function secondLargestNumber(arr){

//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max

// }

// const result = secondLargestNumber([1,2,3,4,5])
// console.log(result)


// Rotate an array by k positions:
// [1,2,3,4,5], k=2 → [4,5,1,2,3] // no idea