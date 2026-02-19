const arr = ["Cherry", 22, "Ayan", 90];

function seprateArray(inputValue) {
  const stringArray = [];
  const numberArray = [];

  for (let item of inputValue) {
    if (typeof item === "string") {
      stringArray.push(item);
    } else {
      if (typeof item === "number") {
        numberArray.push(item);
      }
    }
  }

  return { number: numberArray, string: stringArray };
}

console.log(seprateArray(arr));
