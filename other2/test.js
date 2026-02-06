let data = [10, 20, 30, 40, 50, "ok", "okk"];

const sumofall = data.reduce((acc, curr) => acc + curr);
console.log(sumofall);

const obj = {};
obj.name = "ALPHA02";
obj.email = "alpha02@gmail.com";
obj.profession = "Dark web profession";

Object.seal(obj);
obj.isLoggedIn = true
obj.name = 'daDa'

console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));