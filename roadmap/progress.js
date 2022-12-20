// const upload = () => {
//     const progressBar = document.querySelector('.progress-bar')
//     progressBar.setAttribute('id', 'play-animation')
// }


// let val =  document.querySelector("#inputnum");

// val.addEventListener('keyup',(e)=>{
//     alert(val.value);
// });



const progress1 = document.querySelector(".progress-done1");
const input1 = document.querySelector(".input1");
let finalValue1 = 0;
const max1 = 100;

function changeWidth1(){
    if(finalValue1 >= 0 )
    {
        progress1.style.width = `${(finalValue1 / max1)*100}%`;
        progress1.innerText = `${Math.ceil((finalValue1 / max1) * 100)}%`;
    }
    else{
        alert("You cannot enter a value less than 0")
    }
}

input1.addEventListener('keyup', function () {
    finalValue1 = parseInt(input1.value, 10);
    changeWidth1();
    //alert(finalValue);
});

const progress2 = document.querySelector(".progress-done2");
const input2 = document.querySelector(".input2");
let finalValue2 = 0;
const max2 = 100;

function changeWidth2(){
    if(finalValue2 >= 0 )
    {
        progress2.style.width = `${(finalValue2 / max2)*100}%`;
        progress2.innerText = `${Math.ceil((finalValue2 / max2) * 100)}%`;
    }
    else{
        alert("You cannot enter a value less than 0")
    }
}

input2.addEventListener('keyup', function () {
    finalValue2 = parseInt(input2.value, 10);
    changeWidth2();
    //alert(finalValue);
});