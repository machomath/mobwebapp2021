var leftButton = document.getElementsByClassName('left-button')[0];
var rightButton = document.getElementsByClassName('right-button')[0];
// var buttons = document.querySelectorAll(".img-container button");
// var leftButton = buttons[0];
// var rightButton = buttons[1];
var carousalImg = document.getElementById("carousal-img");
var imgContainer = document.querySelector(".img-container");
// var carousalImg = document.querySelectorAll("");
//#carousal-img
//.container img
//img
// console.log(carousalImg);
var numberOfIamges = 5;

leftButton.addEventListener("click", function () {
  changeWithTransition(1);
});

rightButton.addEventListener("click", function () {
  changeWithTransition(-1);
});

var carInt;
var carousalDirection = 1;
startCarousal();

function startCarousal() {
  carInt = setInterval(function () {
    changeWithTransition(carousalDirection);
  }, 2000);
}

imgContainer.addEventListener("mouseover", function () {
  console.log("Mouseover");
  clearInterval(carInt);
});

imgContainer.addEventListener("mouseout", function () {
  startCarousal();
});

carousalImg.addEventListener("click",function () {
  carousalDirection = -1*carousalDirection
  // console.log("Click");
});

function changeWithTransition(delta){
  carousalImg.style.opacity = "0";
  carousalImg.addEventListener("transitionend", function transFuns() {
    carousalImg.removeEventListener("transitionend", transFuns);
    changeImg(delta);
    carousalImg.style.opacity = "1";
  });
}

function changeImg(delta){//delta is either +1 or -1
  var imgSrc = carousalImg.src;
  var imgSrcStart = imgSrc.substring(0,imgSrc.length-5);
  var imgSrcMid = imgSrc.substring(imgSrc.length-5,imgSrc.length-4);
  var imgSrcEnd = imgSrc.substring(imgSrc.length-4);
  imgSrcMid = (parseInt(imgSrcMid) + delta + numberOfIamges)%numberOfIamges;
  carousalImg.src = imgSrcStart + imgSrcMid + imgSrcEnd;
}



rightButton.addEventListener("click", function () {
  console.log("rightButton clicked");
});
