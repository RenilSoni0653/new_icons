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

  if (email.value == '') {
    email.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    email.nextElementSibling.textContent = '';
  }




  // submit the form if all fields are valid
  if (isValid == true) {
    // $('form').submit();
    alert("Register Successfully");

  }
};