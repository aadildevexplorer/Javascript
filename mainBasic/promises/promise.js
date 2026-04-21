// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Mean - Promise = ek object jo future me aane wali value ko represent karta hai
// Abhi value available nahi hai, lekin future me ya to mil jayegi ya error aa jayega

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Get The Data");
    } else reject("Error");
  }, 2000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise Completed");
  });
