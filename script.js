document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("new-password");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");
  
    // Password validation
    passwordInput.addEventListener("input", function () {
      const pattern = /^[a-z0-5]{8,}$/;
      if (!pattern.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Password must be at least 8 characters long and contain only lowercase letters and numbers.");
      } else {
        passwordInput.setCustomValidity("");
      }
    });
  
    // Age validation
    ageInput.addEventListener("input", function () {
      if (ageInput.value < 13 || ageInput.value > 120) {
        ageInput.setCustomValidity("Age must be between 13 and 120.");
      } else {
        ageInput.setCustomValidity("");
      }
    });
  
    // Email validation
    emailInput.addEventListener("input", function () {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity("Please enter a valid email address.");
      } else {
        emailInput.setCustomValidity("");
      }
    });
  
    // Form submission
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fill out the form correctly before submitting.");
      }
    });
  });