const allTypesOfData = [
  "Jerry",
  22,
  true,
  null,
  undefined,
  [1, 2],
  { name: "programmer" },
  function greet() {
    console.log("Hello world");
  },
];

function seprateData(inputValue) {
  let strArr = [];
  let numArr = [];
  let boolArr = [];
  let nullArr = [];
  let undfArr = [];
  let arr = [];
  let objArr = [];
  let funcArr = [];

  for (const item of inputValue) {
    if (typeof item === "string") {
      strArr.push(item);
    } else if (typeof item === "number") {
      numArr.push(item);
    } else if (item === null) {
      nullArr.push(item);
    } else if (typeof item === "boolean") {
      boolArr.push(item);
    } else if (typeof item === "undefined") {
      undfArr.push(item);
    } else if (Array.isArray(item)) {
      arr.push(item);
    } else if (typeof item === "object") {
      objArr.push(item);
    } else if (typeof item === "function") {
      funcArr.push(item);
    }
  }

  return {
    str: strArr,
    num: numArr,
    bool: boolArr,
    nul: nullArr,
    undf: undfArr,
    ar: arr,
    obj: objArr,
    func: funcArr,
  };
}

const result = seprateData(allTypesOfData);
console.log(result);
