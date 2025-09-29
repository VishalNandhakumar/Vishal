const car = document.getElementById("car");
let carPosition = 180;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && carPosition > 20) {
    carPosition -= 20;
  } else if (event.key === "ArrowRight" && carPosition < 340) {
    carPosition += 20;
  }
  car.style.left = carPosition + "px";
});
