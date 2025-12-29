function otgen(num) {
  let otp = "";
  for (let i = 0; i < num; i++) {
    otp += Math.floor(Math.random() *10);
  }

  return otp;
}

console.log(otgen(5));

console.log('*');
console.log('**');
console.log('***');
console.log('****');
console.log('*****');