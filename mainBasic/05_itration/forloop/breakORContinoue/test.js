// break
// break current loop ka execution immedietly stop kar deta hai
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(`Value : ${i}`);
}

// continoue
// continue sirf us iteration (round) ko skip karta hai, loop chalta rehta hai.
for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    continue;
  }

  console.log(i);
}
