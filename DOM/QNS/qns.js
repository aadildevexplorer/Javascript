// HTML me id="title" wale element ka text change karke "Hello DOM" kar do.
const text = (document.getElementById("title").innerText = "Hello DOM");

// Page ke sabhi <li> elements ka color green kar do.
document.querySelectorAll("li").forEach((li) => {
  li.style.color = "green";
});

// class="box" wale sabhi elements ka background yellow kar do.
document.querySelectorAll(".box").forEach((li) => {
  li.style.backgroundColor = "yellow";
});

// Button click hone par <h1> ka text "Button Clicked" ho jana chahiye.
document.getElementById("btn").addEventListener("click", function () {
  document.querySelector("h2").innerText = "Button Clicked";
});

// Input field se value lekar console me print karo jab button click ho.
function clickAble() {
  let value = document.getElementById("inpt").value;
  console.log(value);
}

// id="remove" wale element ko DOM se delete karo.
document.getElementById("remove").remove();

// class="card" wale element me ek new class "active" add karo.
document.querySelector(".card").classList.add("active");
console.log(document.querySelector(".card").classList);

// Image ka src attribute change karo "image2.jpg" me.
document.getElementById("img").src = "image2.jpg";
console.log(document.getElementById("img").src);

// <ul> ke andar JavaScript se ek new <li> add karo jiska text "Item 4" ho.
const li = document.createElement("li");
li.innerText = "Item 4";
document.querySelector("ul").appendChild(li);
