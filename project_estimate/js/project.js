

// Project
var header = document.querySelector("header");
var headerHeight = header.clientHeight;

var project = document.querySelector("#project");
project.style.minHeight = `calc(100vh - ${headerHeight}px)`;

var allDiv = document.querySelectorAll(".part");
allDiv.forEach(function (curDiv) {
    curDiv.style.minHeight = "100vh";
})