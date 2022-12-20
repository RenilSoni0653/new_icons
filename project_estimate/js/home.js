
// Home
var header = document.querySelector("header");
var headerHeight = header.clientHeight;

var home = document.querySelector("#home");
var homeImg = document.querySelector(".home-img");
home.style.height = `calc(100vh - ${headerHeight}px)`;
homeImg.style.height = `calc(100vh - ${headerHeight}px)`;

var allDiv = document.querySelectorAll(".part");
allDiv.forEach(function(curDiv){
    curDiv.style.minHeight = "100vh";
})