 // Elements
 const form = document.getElementById('signupForm');
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const passwordInput = document.getElementById('password');
 const confirmPasswordInput = document.getElementById('confirmPassword');
 const submitBtn = document.getElementById('submitBtn');

 // Groups for styling and messages
 const nameGroup = document.getElementById('nameGroup');
 const emailGroup = document.getElementById('emailGroup');
 const passwordGroup = document.getElementById('passwordGroup');
 const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');

 // Validation functions

 function validName() {
     
    const isValid = nameInput.value.length>=4;
    updateField(nameGroup,isValid);
    return isValid;
 }


 function validEmail () {
    const valueEmail = emailInput.value.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isValid = emailRegex.test(valueEmail);
    updateField(emailGroup,isValid);
    return isValid;

 }


 function validPassword() {
    const valuePassword = passwordInput.value ;
    const isValid= valuePassword.length>=6;
    updateField(passwordGroup,isValid);
    return isValid;
   }

   function validConfirmP() {
      const isValid = passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value.length >= 6;
      updateField(confirmPasswordGroup, isValid);
      return isValid;
   }


 //update function 
 function updateField(group, isValid) {
    if (isValid) {
      group.classList.add('valid');     // add green styling
      group.classList.remove('invalid'); // remove red styling
    } else {
      group.classList.add('invalid');   // add red styling and show error
      group.classList.remove('valid');   // remove green styling
    }
  }

  function checkFormValidity() {
   const isFormValid = validName() && validEmail() && validPassword() && validConfirmP();
   submitBtn.disabled = !isFormValid;
 }
 function togglePassword() {
   const type = passwordInput.type === 'password' ? 'text' : 'password';
   passwordInput.type = type;
   confirmPasswordInput.type = type;
 }

 // Event listeners for real-time validation
 nameInput.addEventListener('input', checkFormValidity);
 emailInput.addEventListener('input', checkFormValidity);
 passwordInput.addEventListener('input', checkFormValidity);
 confirmPasswordInput.addEventListener('input', checkFormValidity);

 // Final form submission
 form.addEventListener('submit', function (e) {
   e.preventDefault(); // Stop page reload
   alert('Form submitted successfully!');
 });
