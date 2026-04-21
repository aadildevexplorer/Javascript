async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();

  const container = document.getElementById("userList");

  data.map((user) => {
    const div = document.createElement("div");
    div.innerHTML = `

        <p>${user.name}</p>
        <p>${user.email}</p>
        <p>${user.username}</p>
        <p>${user.address.street}</p>
        <p>${user.phone}</p>
        <p>${user.website}</p>
        `;
    container.appendChild(div);
  });
}

getData();
