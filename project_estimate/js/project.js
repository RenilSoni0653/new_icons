

// Project
var header = document.querySelector("header");
var headerHeight = header.clientHeight;
var resultA = document.querySelector(".part1");
var resultB = document.querySelector(".part2");
var allInput = document.querySelectorAll(".input");
var form = document.getElementById("form");
var resultText = document.querySelector(".result-text");

resultText.style.display="none";
form.addEventListener("submit",submitReq)
function submitReq(event) {
    
    let checkOne = true;
    allInput.forEach((cur)=>{
        if(cur.value=="" && checkOne==true){
            alert("All fields are required...");
            checkOne =false;
        }
    });

    if(checkOne == true){
        alert("Form submitted successfully");
        resultText.style.display = "block";

        allInput.forEach((cur) => {
            resultA.innerHTML += "<p>" + cur.getAttribute("placeholder") + "</p>";
            resultB.innerHTML += "<p>" + cur.value + "</p>";
        });
    }

    event.preventDefault();
}




var project = document.querySelector("#project");
project.style.minHeight = `calc(100vh - ${headerHeight}px)`;

var allDiv = document.querySelectorAll(".part");
allDiv.forEach(function (curDiv) {
    curDiv.style.minHeight = "100vh";
})