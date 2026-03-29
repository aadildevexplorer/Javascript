const allBtn = document.querySelectorAll(".button");
const body = document.querySelector("body");

const colors = {
  grey: { bg: "grey", text: "white" },
  white: { bg: "white", text: "black" },
  blue: { bg: "blue", text: "white" },
  yellow: { bg: "yellow", text: "black" },
  byDefault: { bg: "black", text: "white" },
};

allBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const select = colors[e.target.id];
    if (select) {
      body.style.backgroundColor = select.bg;
      body.style.color = select.text;
    }
  });
});
