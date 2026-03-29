const form = document.querySelector("form");
const wID = document.querySelector("#weight-guide");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === 0) {
    results.innerHTML = `<span>Please give a valid height ${height}</span>`;
  } else if (weight === 0) {
    results.innerHTML = `<span>Please give a valid weight ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}<span>`;

    if (bmi < 18.6) {
      wID.innerHTML = "<p>Under Weight = Less than 18.6</p>";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      wID.innerHTML = "<p>Normal Range = 18.6 and 24.9</p>";
    } else {
      wID.innerHTML = "<p>Overweight = Greater than 24.9</p>";
    }
  }
});
