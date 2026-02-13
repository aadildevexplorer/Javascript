const obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};

const obj2 = obj1;
obj2.b.c = 30;

console.log(obj1.b.c);
