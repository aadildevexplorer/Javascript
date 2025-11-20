console.log(Date.now())
// // Ye koi Date object nahi banata.
// // Ye sirf 1970 se abhi tak ka total milliseconds return karta hai.

console.log(new Date());
// // ye pura object return karta h
// // Ye poore date + time ka object deta hai jisme kuch properties and methods hoti h
console.log(new Date().toString()); // isse date and time readable ho jata
console.log(new Date().toLocaleString()); // ye date and time dono batata h local string se local country ka time show hota like abhi india ka
console.log(new Date().toLocaleDateString()); // sirf date deta h
console.log(new Date().toLocaleTimeString())

const now = new Date();
const hrs = now.getHours();

if (hrs >= 12) {
  console.log("PM");
} else {
  console.log("AM");
}
