const btn = document?.getElementById("btn");

btn?.addEventListener("click", function () {
  document.getElementById("title").textContent = "Content Changed!";
});

document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.backgroundColor = "black";

// for all
document.querySelectorAll("li").forEach((item) => (item.style.color = "green"));
document
  .querySelectorAll("li")
  .forEach((item) => (item.style.backgroundColor = "black"));
document
  .querySelectorAll("li")
  .forEach((item) => (item.style.listStyle = "none"));

// for first
// document.querySelector("li").style.backgroundColor = "red";

document.querySelectorAll("li").forEach((ele) => (ele.style.fontSize = "40px"));
