let a = 10;
let b = 10;
b = 20;

console.log(a);
console.log(b);

const obj1 = {
  name: "aadil",
};

const obj2 = obj1; // obj1 ka  refference copy hua 
obj2.name = "user";

console.log(obj1.name);
console.log(obj2.name);
