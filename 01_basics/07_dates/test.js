const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(typeof myDate);

const dt = new Date();
console.log(dt);
console.log(dt.toLocaleDateString());

let dateCreate = new Date(2025, 10, 19, 4, 45); // with time like 19/11/2025, 4:45:00 am
let dateCreates = new Date(2025, 10, 19); // only Date 19/11/2025

console.log(dateCreate.toLocaleString());
console.log(dateCreate);

let dateCreateS = new Date("11-19-2025");
console.log(dateCreate.toLocaleString());

console.log(dateCreate.getTime());
console.log(Date.now() / 1000);
console.log(Math.round(Date.now() / 1000));
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getTime());
