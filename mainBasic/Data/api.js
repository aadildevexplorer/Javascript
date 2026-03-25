// const API = "https://fakestoreapi.com";
const API = 'https://zylomart-3bzq.onrender.com/api/admin/products'

const fetchData = async () => {
  const res = await fetch(`${API}/get`);
  const data = await res.json();
  console.log("Data", data);
};

fetchData();

// async function name() {
//   const res = await fetch(`${API}/products`);
//   const data = await res.json();
//   console.log("Data", data);
// }

// name();

// const arrow = () => {
//   const api = "https://fakestoreapi.com/users";
//   return api
// };

// arrow();
