function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput == "" && passWord == "") {
        alert("Fill All The Field");
    }
    if (emailPattern.test(emailInput)===false) {
        alert("In-Valid email address");
    } 

}
function focusFunction() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (email === "") {
        document.getElementById("email").style.background = "red";
    }else{
        document.getElementById("email").style.background = "";
    }
    if (password === "") {
        document.getElementById("password").style.background = "red";
    }else{
        document.getElementById("password").style.background = "";
    }
}
function onBlurEmail(){
    document.getElementById("email").style.background = "";
}
function onBlurPass(){
    document.getElementById("password").style.background = "";
}
//password
// password
function isStrongPassword(password) {
    console.log(password);
    if (password.length < 8) {
        errorPassword.innerHTML = "Password should have at least 8 characters";
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        errorPassword.innerHTML = "Password should have at least one uppercase letter";
        return false;
    }

    if (!/[a-z]/.test(password)) {
        errorPassword.innerHTML = "Password should have at least one lowercase letter";
        return false;
    }

    if (!/[0-9]/.test(password)) {
        errorPassword.innerHTML = "Password should have at least one digit";
        return false;
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        errorPassword.innerHTML = "Password should have at least one special character (e.g., !, @, #, $, etc.)";
        return false;
    } else {
        errorPassword.innerHTML = "";
    }

    return true;
}

function validatePassword() {
    var pass = document.getElementById("password");
    var passin = document.getElementById("password").value;
    var outString = isStrongPassword(passin);
    if (outString) {
        errorPassword.innerHTML = ""
        pass.style.borderColor = "green";

    } else {
        pass.style.borderColor = "red";
        console.log("Password is not strong.");
    }
    pass.style.borderWidth = "3px";
}
//mail
function onBlurEmail() {
    var emailInput = document.getElementById("email").value;
    var inputFieldEmail = document.getElementById("email");
    var trimmedStr = emailInput.trim();
    console.log(emailInput + " " + trimmedStr);
    var bool = true;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (trimmedStr != emailInput) {
        errorMail.innerHTML = "Email contain space ";
        bool = false;
    } else {
        errorMail.innerHTML = "";
    }
    if (emailInput === '') {
        errorMail.innerHTML = "Email should be filled ";
        inputFieldEmail.style.borderColor = "red";
    } else {
        if (bool == true) {
            checkValidMail(emailPattern, emailInput);
        }
        else {
            if (bool == false) {
                inputFieldEmail.style.borderColor = "red";
            } else {
                inputFieldEmail.style.borderColor = "green";
            }
        }
    }
    inputFieldEmail.style.borderWidth = "3px";
}
function checkValidMail(emailPattern, emailInput) {
    var inputFieldEmail = document.getElementById("email");
    if (!emailPattern.test(emailInput)) {
        errorMail.innerHTML = "Enter valid email";
        inputFieldEmail.style.borderColor = "red";
    } else {
        inputFieldEmail.style.borderColor = "green";
        errorMail.innerHTML = "";
    }
}