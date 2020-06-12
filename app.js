// Form Blur Events

document.getElementById('name').addEventListener('blur', validateName );
document.getElementById('postcode').addEventListener('blur', validatePostcode );
document.getElementById('email').addEventListener('blur', validateEmail );
document.getElementById('phone').addEventListener('blur', validateNumber );


function validateName(){
  const name = document.getElementById('name');// we get the value in the if section because of add class later
  const re = /^[a-zA-z]{2,10}$/;
 
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validatePostcode(){
  const postcode = document.getElementById('postcode');// we get the value in the if section because of add class later
  const re = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
  if(!re.test(postcode.value)){
    postcode.classList.add('is-invalid');
  } else {
    postcode.classList.remove('is-invalid');
  }
}

function validateEmail(){

  const email = document.getElementById('email');// we get the value in the if section because of add class later
  const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validateNumber(){
   const phone = document.getElementById('phone');// we get the value in the if section because of add class later
  const re = /(\s*\(?0\d{4}\)?\s*\d{6}\s*)|(\s*\(?0\d{3}\)?\s*\d{3}\s*\d{4}\s*)/;
 
  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
  
}