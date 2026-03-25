// 1 HTML me id="title" wale element ka text change karke "Hello DOM" kar do.
document.getElementById("title").innerText = "Hello DOM";

// 2. Page ke sabhi <li> elements ka color green kar do.
document.querySelectorAll("li").forEach((li) => {
  li.style.color = "red";
});

// for single element
const l = document.querySelector("li");
l.style.color = "red";

// 3. class="box" wale sabhi elements ka background yellow kar do.
document.querySelectorAll(".box").forEach((bx) => {
  bx.style.backgroundColor = "yellow";
});

// 4. JavaScript se ek new <p> element create karo jiska text "New paragraph" ho aur usko body ke end me add karo..
const p = document.createElement("p");
p.innerText = "New paragraph";

// 5. Button click hone par <h1> ka text "Button Clicked" ho jana chahiye.
document.getElementById("btn").addEventListener("click", function () {
  document.querySelector("h2").innerText = "Button Clicked";
});

// 6. Input field se value lekar console me print karo jab button click ho.
function clickAble() {
  let value = document.getElementById("inpt").value;
  console.log(value);
}

// 7. id="remove" wale element ko DOM se delete karo.
document.getElementById("remove").remove();

// 8. class="card" wale element me ek new class "active" add karo.
document.querySelector(".card").classList.add("active");

// 9. <ul> ke andar JavaScript se ek new <li> add karo jiska text "Item 4" ho
const li = document.createElement("li");
li.innerText = "Item 4";
li.style.color = "green";
document.querySelector("ul").appendChild(li);

// 10. How can you select an element with the id title using DOM?.
document.getElementById("btn").innerText = "Click please";

// 11. Write JavaScript to change the text of a <p> element to "Hello DOM".
document.querySelector("p").innerText = "Hello DOM";

// 12. How do you select all <li> elements from the document?
const lists = document.querySelectorAll("li");
lists.forEach((li) => {
  li.style.color = "black";
});

// 13. Write code to change the background color of a <div> to yellow.
const clr = document.querySelector(".dv");
// const clr = document.getElementsByClassName("dv") asa kiyu nhi
clr.style.backgroundColor = "yellow";

// 14. How can you create a new <li> element and add the text "New Item" inside it?
const createLi = document.createElement("li");
createLi.innerText = "New Item";
createLi.style.color = "red";
console.log(createLi);
document.querySelector("ul").appendChild(createLi);

// 15. Write JavaScript to append the newly created <li> into an existing <ul> element.
const createLis = document.createElement("li");
createLis.innerText = "New Item 2";
createLis.style.color = "red";
console.log(createLis);
document.querySelector("ul").appendChild(createLis);

// 16. How do you remove an element with the id box from the DOM?
document.querySelector("#bx").remove();

// 17. Write code to add a class "active" to a <button> element.
document.querySelector(".cls").classList.add("active");
console.log(document.querySelector(".cls").classList);

// 18. How can you add a click event to a button that logs "Button clicked" in the console?
const clickedBtn = document
  .querySelector(".cbnt")
  .addEventListener("click", function () {
    console.log("Button Clicked");
  });

// 19. How do you get the value of an <input> field when a button is clicked?
function getInputValue() {
  let inputValue = document.getElementById("inpts").value;
  console.log(inputValue);
}
