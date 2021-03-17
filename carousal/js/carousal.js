var leftButton = document.getElementsByClassName('left-button')[0];
var rightButton = document.getElementsByClassName('right-button')[0];
// var buttons = document.querySelectorAll(".img-container button");
// var leftButton = buttons[0];
// var rightButton = buttons[1];
var carousalImg = document.getElementById("carousal-img");
// var carousalImg = document.querySelectorAll("");
//#carousal-img
//.container img
//img
// console.log(carousalImg);
var numberOfIamges = 5;

leftButton.addEventListener("click", function () {
  var imgSrc = carousalImg.src;
  var imgSrcStart = imgSrc.substring(0,imgSrc.length-5);
  var imgSrcMid = imgSrc.substring(imgSrc.length-5,imgSrc.length-4);
  var imgSrcEnd = imgSrc.substring(imgSrc.length-4);
  imgSrcMid = (parseInt(imgSrcMid) + 1)%numberOfIamges;
  carousalImg.src = imgSrcStart + imgSrcMid + imgSrcEnd;
  // console.log(imgSrc);
});

rightButton.addEventListener("click", function () {
  console.log("rightButton clicked");
});
