// ❓ Q: "JavaScript".length ka output kya hoga? 10
// ❓ Q: "developer".charAt(4) kya return karega? l
// ❓ Q: "hello world".indexOf("world") ka result kya hoga? 678910
// ❓ Q: "programming".slice(3, 7) kya return karega?  ram or progming
// ❓ Q: "coding".substring(1, 4) ka output kya hai? cding
// ❓ Q: "dev".toUpperCase() result?  DEV
// ❓ Q: "HELLO".toLowerCase() kya return karega? // hello
// ❓ Q: " hi bro ".trim() ka output kya hoga? // hi bro
// ❓ Q: " react".trimStart() kya return karega? react
// ❓ Q: "Good".concat(" Morning") ka output kya hai? // Good Morning
// ❓ Q: "I love JS".replace("JS", "JavaScript") kya return karega? I love JavaScript
// ❓ Q: "banana".replaceAll("a", "o") ka output kya? bonono
// ❓ Q: "red,green,blue".split(",") kya return karega? ['red' , 'green' , 'blue']
// ❓ Q: "frontend".startsWith("front") true hoga ya false? true
// ❓ Q: "developer".endsWith("per") result? true
// ❓ Q: "hello js".includes("js") kya return karega? true
// ❓ Q: "ha".repeat(3) ka output kya hoga? hahaha
// ❓ Q: "world ".trimEnd() ka result kya hoga? world
// ❓ Q: (100).toString() ka output type kya hoga? '100'
// ❓ Q: Template literals me variable insert karne ka syntax kya hota hai?
// let name = "Aadil";
// console.log(`my name is ${name}`); // my name is Aadil
// ❓ Q: new Date().toLocaleString() kya return karta hai? today's date 16-11-2025

// ---------------------------------------------- Hard ---------------------------------------------

// console.log("Aadil Khan".length)
// console.log("javascript".charAt(100));
// console.log("hello".includes("H"));
console.log("frontend developer".slice(-8))
// console.log(typeof ("123".toString())) // 123
// console.log("mango".replace("m", "k")) // kango
// console.log("mango".replaceAll("m", "k")) // kango
// console.log("hello world".split("")) // Har character ko array me tod deta hai.
// console.log("test".repeat(0)) // empty
// console.log(" hi ".trim().length) // hi 2
// console.log("hello".toUpperCase().toLowerCase()) // HELLO ,

// 1️⃣6️⃣ Email se username nikaalo → "dev@gmail.com" se "dev"

// const email = "john@yahoo.com";
// if (email[0].startsWith("dev")) {
//   console.log("dev");
// } else {
//   console.log("not dev");
// }

// 1️⃣7️⃣ Domain nikaalo → "john@yahoo.com" → "yahoo"

// const domain = "john@yahoo.com";

// if (domain[2].endsWith("yahoo")) {
//   console.log("i am yaaho");
// } else {
//   console.log("not yaaho");
// }

// 1️⃣8️⃣ File extension nikaalo → "image.png" → "png"
// const fileExtension = "image.png";

// if (fileExtension.endsWith("png")) {
//   console.log("im png");
// } else {
//   console.log("not png");
// }

// 1️⃣6️⃣ Email se username nikaalo → "dev@gmail.com" → "dev"
// const email = "dev@gmail.com";
// const username = email.split("@")[0];
// console.log(username);

// 1️⃣7️⃣ Domain nikaalo → "john@yahoo.com" → "yahoo"
// const domain = "john@yahoo.com";
// const domainName = domain.split("@")[1].split('.')[0]
// console.log(domainName);

// khan nikana h
// const user = "Aadil khan";
// const surname = user.split(" ")[1]; // asa isiliye kiya kiyunki
// console.log(surname);

// Aadil nikalna h
const user = "Mohammad Aadil Khan";
const name = user.split(" ")[0];
console.log(name);