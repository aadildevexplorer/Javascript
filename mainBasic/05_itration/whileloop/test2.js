// while loop ek entry-controlled loop hai.
// Isme pehle condition check hoti hai, phir code execute hota hai.
// 👉 Agar condition pehli baar hi false ho jaye, to loop ek baar bhi execute nahi hoga.

let i = 10;

while (i <= 50) {
  console.log(i);
  i++;
}

// do...while loop ek exit-controlled loop hai.
// Isme pehle code execute hota hai, phir condition check hoti hai.
// 👉 Chahe condition false ho, loop kam se kam ek baar zaroor chalega

let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 20);

let ii = 10;

do {
  console.log(i); // 10 👉 Yaha condition false thi
  // Lekin phir bhi 1 baar execute hua.
  i++;
} while (ii < 5);
