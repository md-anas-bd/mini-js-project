
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const reasonInput = document.getElementById('reason');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const submitBtn = document.getElementById('submitBtn');
  const checkBtn = document.getElementById('checkBtn');
  const availabilityMsg = document.getElementById('availabilityMsg');

  const successMsg = document.createElement('div');
  successMsg.style.marginTop = '20px';
  successMsg.style.color = 'green';
  successMsg.style.fontWeight = 'bold';
  document.getElementById('bookingForm').appendChild(successMsg);

  function validName() {
    return nameInput.value.trim().length > 2;
  }

  function validEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  }

  function validReason() {
    return reasonInput.value.trim().length > 5;
  }

  function validDate() {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    return dateInput.value && selectedDate >= new Date(today.toDateString());
  }

  function validTime() {
    return !!timeInput.value;
  }

  function checkFormValidity() {
    const isFormValid = validName() && validEmail() && validReason() && validDate() && validTime();
    submitBtn.disabled = !isFormValid;
  }

  checkBtn.addEventListener('click', () => {
    if (validDate() && validTime()) {
      availabilityMsg.style.display = 'block';
      availabilityMsg.textContent = '✅ Doctor is available at selected time!';
    } else {
      availabilityMsg.style.display = 'block';
      availabilityMsg.textContent = '❌ Please select valid date and time.';
    }
  });

  [nameInput, emailInput, reasonInput, dateInput, timeInput].forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

  document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Show success message
    successMsg.textContent = '✅ Appointment booked successfully!';
  
    // Hide availability message
    availabilityMsg.style.display = 'none';
  
    // Clear form values
    nameInput.value = '';
    emailInput.value = '';
    reasonInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  
    // Re-check form validity (resets button properly)
    checkFormValidity();
  });
  
  