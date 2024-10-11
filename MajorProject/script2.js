const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//Error Elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

//Event-listener for form submission
form.addEventListener('submit', function (e) 
{
    e.preventDefault(); //Prevent form from submitting without validation
    validateForm();
});

//Function to validate the entire form
function validateForm() 
{
    //Reset all errors
    resetErrors();

    let isValid = true;

    //Validate Name
    if (fullName.value.trim().length < 5) 
    {
        nameError.textContent = "Name must be at least 5 characters long.";
        isValid = false;
    }

    //Name value must not be empty
    if (fullName.value.trim().length === 0) 
    {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    //Validate Email
    if (!validateEmail(email.value)) 
    {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    //Validate Phone Number
    if (!validatePhone(phone.value)) 
    {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    //Validate Password
    if (!validatePassword(password.value)) 
    {
        passwordError.textContent = "Password must be at least 8 characters and must not be 'password' or your name.";
        isValid = false;
    }

    //Validate Confirm Password
    if (password.value !== confirmPassword.value)
    {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    //If the form is valid, alert success or can proceed with submission
    if (isValid) 
    {
        alert('Form submitted successfully!!');
    }
}

//Email validation function
function validateEmail(email) 
{
    return /\S+@\S+\.\S+/.test(email);
}

//Phone validation function
function validatePhone(phone) 
{
    return /^\d{10}$/.test(phone) && phone !== '1234567890';
}

//Password validation function
function validatePassword(password) 
{
    return password.length >= 8 && password.toLowerCase() !== 'password' && !password.toLowerCase().includes(fullName.value.toLowerCase());
}

//Reset all error messages
function resetErrors() 
{
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
}
