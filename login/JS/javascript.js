// const inputs = document.querySelectorAll('.input');

// function focusFunc(){
//     let parent = this.parentNode.parentNode;
//     parent.classList.add('focus');
// }

// function blurFunc(){
//     let parent = this.parentNode.parentNode;
//     if(this.value == ""){
//         parent.classList.remove('focus');
//     }
// }

// inputs.forEach(input => {
//     input.addEventListener('focus', focusFunc);
//     input.addEventListener('blur', blurFunc);
// });


const loginForm = document.querySelector('#loginForm');
if(document.querySelector('#loginForm') != null){
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  processEntries();
})
}
const processEntries = () => {
  // get form controls to check for validity
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  let validLogin = [
    {
        username:"nishasoni123@gmail.com",
      password:"nisha123"
    },
    {
        username:"dharitpatel99@gmail.com",
      password:"dharit99"
    },
    {
        username:"aditi420@gmail.com",
      password:"aditi420"
    }
  ];


  // check user entries for validity
  let isValid = true;
  if (username.value == '') {
    username.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    username.nextElementSibling.textContent = '';
  }

  if (password.value == '') {
    password.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    password.nextElementSibling.textContent = '';
  }




  // submit the form if all fields are valid
  if (isValid == true) {
    // $('form').submit();
    // alert("Login Successfully");

    for(let i=0;i<validLogin.length;i++){
      if(username.value == validLogin[i].username && password.value == validLogin[i].password){
        // location.href = 'homepage.html';
        alert("login successfully");
      }else{
        alert("Invalid username");
      }
    }
  }
};