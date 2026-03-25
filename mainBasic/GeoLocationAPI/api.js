if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log("Latitude", pos.coords.latitude);
      console.log("Longitude", pos.coords.longitude);
    },
    (err) => {
      console.log(err.message, "Error");
    }
  );
} else {
  console.log("Geolocation not supported");
}

const lat = 22.708224;
const lng = 75.8775808;
const apiKey = "9f05f218ded640adb90c34f816939a2b";

fetch(
  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    console.log("Full Address:", data.results[0].formatted);
    console.log("Detailed:", data.results[0].components);
  })
  .catch((err) => console.error(err));
