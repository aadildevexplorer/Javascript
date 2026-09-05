// call , apply and bind

// call → function ko immediately call karta hai
// apply → function ko immediately call karta hai, arguments array me deta hai
// bind → function ko immediately call nahi karta, ek new function return karta hai

// call(), apply(), and bind() are methods 
// used to control or explicitly set the value of this inside a function.

const user = {
      name : 'John Doe',
}

function greet(city){
        console.log(this.name , city)
}

greet.call(user , 'Indore')
greet.apply(user , ['Indore'])
const newFunc = greet.bind(user)
newFunc('Indore')
