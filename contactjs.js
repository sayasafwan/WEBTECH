document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.querySelector('input[name="subject"]:checked');

    // Validation checks
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !message ||
      !subject
    ) {
      alert("Please fill out all fields and select a subject.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Simulate form submission success
    alert(`Thank you, ${firstName}! Your message has been sent successfully.`);

    // Reset the form
    form.reset();
  });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Phone number validation function
  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,15}$/; // Allows 10-15 digit numbers
    return phoneRegex.test(phoneNumber);
  }
});


    // Select the div
    const brandName = document.querySelector('.brand-name-1');

    // Add a click event listener
    brandName.addEventListener('click', () => {
        window.location.href = 'index.html';
    });