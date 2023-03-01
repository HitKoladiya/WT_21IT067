var userid = document.getElementById("userid");
var password = document.getElementById("password");
var name = document.getElementById("name");
var email = document.getElementById("email");
var english = document.getElementById("english");
var hindi = document.getElementById("hindi");
var gujarati = document.getElementById("gujarati");
var french = document.getElementById("french");
var useridError = document.getElementById("useridError");
var passwordError = document.getElementById("passwordError");
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var genderError = document.getElementById("genderError");
var zipcodeError = document.getElementById("zipcodeError");

function validateForm() {
    // userid validation
    if (userid.value == "") {
        useridError.innerHTML = "User ID is required";
        useridError.style.color = "red";
        userid.focus();
        return false;
    }
    else if (userid.value.length < 5) {
        useridError.innerHTML = "User ID must be at least 5 characters long";
        useridError.style.color = "red";
        userid.focus();
        return false;
    }
    else if (userid.value.length > 10) {
        useridError.innerHTML = "User ID must be at most 10 characters long";
        useridError.style.color = "red";
        userid.focus();
        return false;
    }
    else {
        useridError.innerHTML = "";
    }
    //Email validation
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Invalid Email";
        emailError.style.color = "red";
        email.focus();
        return false;
    }
    else {
        emailError.innerHTML = "";
    }
    //Atleast one language should be selected
    if (!english.checked && !hindi.checked && !gujarati.checked && !french.checked) {
        languagesError.innerHTML = "Atleast one language should be selected";
        languagesError.style.color = "red";
        return false;
    }
    else {
        genderError.innerHTML = "";
    }
    // password validation
    if (password.value == "") {
        passwordError.innerHTML = "Password is required";
        passwordError.style.color = "red";
        password.focus();
        return false;
    }
    else if (password.value.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        passwordError.style.color = "red";
        password.focus();
        return false;
    }
    else if (password.value.length > 15) {
        passwordError.innerHTML = "Password must be at most 15 characters long";
        passwordError.style.color = "red";
        password.focus();
        return false;
    }
    else {
        passwordError.innerHTML = "";
    }
    // name validation
    if (!name.value.match(/^[a-zA-Z]+$/)) {
        nameError.innerHTML = "Name should contain only alphabets";
        nameError.style.color = "red";
        name.focus();
        return false;
    }
    else {
        nameError.innerHTML = "";
    }
}