let [leftButton, rightButton] = document.querySelectorAll(".img-container button");
let sliderImages = document.querySelectorAll(".img-container img.slider-img");

console.log(sliderImages);
let numberOfImages = 5;

leftButton.addEventListener("click", function () {
  console.log("Left button click");
});

rightButton.addEventListener("click", function () {
  sliderImages[2].style.left = "100%";
  sliderImages[2].addEventListener("transitionend", function transfunc() {
    sliderImages[2].removeEventListener("transitionend", transfunc);
    sliderImages[2].style.zIndex = "1";
    sliderImages[2].src = changeSrc(-1);
    sliderImages[2].style.left = "0";
  });

});

function changeSrc(delta) {
  let src = sliderImages[2].src;
  let scrLeft = src.substring(0, src.length-5);
  let scrMid = src.substring(src.length-5, src.length-4);
  let srcRight = src.substring(src.length-4);

  srcMid = (parseInt(scrMid) + delta + numberOfImages)%numberOfImages;
  return scrLeft + srcMid + srcRight
}
