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
      username:"admin@gmail.com",
      password:"admin"
    }
  ];

  // check user entries for validity
  let isValid = true;
  if (username.value == '') {
    document.getElementById('err1').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('err1').innerHTML = '';
    isValid = true;
  }

  if (password.value == '') {
    document.getElementById('err2').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('err2').innerHTML = '';
    isValid = true;
  }


  // submit the form if all fields are valid
  let count=0;
  if (isValid == true) {
    for(let i=0;i<validLogin.length;i++){
      if(username.value == validLogin[i].username && password.value == validLogin[i].password) {
        count=1;
      } else {
        count=0;
      }
    }
    if(count == 1) {
      alert("login successfully");
      window.location="../tasks/lists/index.html";
    } else {
      alert("Invalid username or password");
    }
  }
};