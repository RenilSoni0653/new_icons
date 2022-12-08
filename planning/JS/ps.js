function showDetails(curr){
    let detailsSection = document.getElementsByClassName("details");
    let detailDate = document.getElementById("date");

    let dateTask1 = "17-11-2022";
    let dateTask2 = "18-11-2022";
    
    if(detailsSection[0].style.display == "block"){
        detailsSection[0].style.display="none";
        curr.innerHTML = "More";
        curr.style.backgroundColor = "rgb(0, 128, 98)";
    }
    else{
        if(curr.value == 1){
            detailDate.innerHTML = dateTask1;
        }
        else{
            detailDate.innerHTML = dateTask2;
        }
        
        detailsSection[0].style.display="block";
        curr.innerHTML = "Less";
        curr.style.backgroundColor = "rgb(128, 66, 0)";
    }
}
// function showDetails(curr){
//     let detailsSection = document.getElementsByClassName("details2");
//     let detailDate = document.getElementById("date");

//     let dateTask1 = "17-11-2022";
//     let dateTask2 = "18-11-2022";
    
//     if(detailsSection[0].style.display == "block"){
//         detailsSection[0].style.display="none";
//         curr.innerHTML = "More";
//         curr.style.backgroundColor = "rgb(0, 128, 98)";
//     }
//     else{
//         if(curr.value == 1){
//             detailDate.innerHTML = dateTask1;
//         }
//         else{
//             detailDate.innerHTML = dateTask2;
//         }
        
//         detailsSection[0].style.display="block";
//         curr.innerHTML = "Less";
//         curr.style.backgroundColor = "rgb(128, 66, 0)";
//     }
// }