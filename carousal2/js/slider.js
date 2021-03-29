let [leftButton, rightButton] = document.querySelectorAll(".img-container button");
let sliderImages = document.querySelectorAll(".img-container img.slider-img");

console.log(sliderImages);

leftButton.addEventListener("click", function () {
  console.log("Left button click");
});

rightButton.addEventListener("click", function () {
  console.log("right button click");
});
