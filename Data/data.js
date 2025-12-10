const API = "https://products-1-pcwn.onrender.com";

async function load() {
  const res = await fetch(`${API}/allproducts`);
  const data = await res.json();
  console.log(data);
  console.log("Data Done");
}

load();
console.log("Outside Data");