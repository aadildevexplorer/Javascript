const API = "https://fakestoreapi.com";

const fetchData = async () => {
  const res = await fetch(`${API}/products`);
  const data = await res.json();
  console.log("Data", data);
};

fetchData();

async function name() {
  const res = await fetch(`${API}/products`);
  const data = await res.json();
  console.log("Data", data);
}

name();
