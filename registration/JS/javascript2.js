const RegisterForm = document.querySelector('#RegisterForm');
if(document.querySelector('#RegisterForm') != null){
    RegisterForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  processEntries();
})
}
const processEntries = () => {
  // get form controls to check for validity
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const email = document.querySelector('#email');


  // check user entries for validity
  let isValid = true;
  if (username.value == '') {
    document.getElementById('err1').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('err1').innerHTML = '';
  }

  if (password.value == '') {
    document.getElementById('err2').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('err2').innerHTML = '';
  }

  if (email.value == '') {
    document.getElementById('err3').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('err3').innerHTML = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    alert("Register Successfully");
  }
};