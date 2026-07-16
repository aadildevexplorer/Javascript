function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const input = document.getElementById("search");

function search(value) {
  console.log("Input Value:", value);
}

const debounceSearch = debounce(search, 1000);

input.addEventListener("input", (e) => {
  debounceSearch(e.target.value);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.value = "";
  }
});

// Debounce ek JavaScript technique hai jisme function tabhi 
// execute hota hai jab user kuch time tak action karna band kar de. 
// Agar user us time ke andar dobara action karta hai, to purana timer 
// cancel ho jata hai aur naya timer start ho jata hai.

// Debouncing is a JavaScript technique that delays the execution of a
// function until a specified amount of time has passed since the last event occurred. 
// If another event occurs before the delay ends, the previous timer is canceled and a new timer starts.