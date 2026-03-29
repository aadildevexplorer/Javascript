const allBtns = document.querySelectorAll(".button");
const body = document.querySelector("body");

const colors = {
  grey: { bg: "grey", text: "white" },
  white: { bg: "white", text: "black" },
  blue: { bg: "blue", text: "white" },
  yellow: { bg: "yellow", text: "black" },
  byDefault: { bg: "black", text: "white" },
};

const savedColor = localStorage.getItem("color");

if (savedColor && colors[savedColor]) {
  body.style.backgroundColor = colors[savedColor].bg;
  body.style.color = colors[savedColor].text;
}

allBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const select = colors[e.target.id];

    localStorage.setItem("color", e.target.id);
    if (select) {
      body.style.backgroundColor = select.bg;
      body.style.color = select.text;
    }
  });
});
