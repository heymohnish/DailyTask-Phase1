function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var nameInput = document.getElementById("name").value;
    var validationMessage = document.getElementById("message").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput == "" && nameInput == ""&&validationMessage=="") {
        alert("Fill All The Field");
    }
    if (emailPattern.test(emailInput)===false) {
        alert("in-Valid email address");
    } 
}
function focusFunction() {
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value
    var message=document.getElementById("message").value;
    if (name === "") {
        document.getElementById("name").style.background = "red";
    }else{
        document.getElementById("name").style.background = "";
    }
    if (email === "") {
        document.getElementById("email").style.background = "red";
    }else{
        document.getElementById("email").style.background = "";
    }
    if (message === "") {
        document.getElementById("message").style.background = "red";
    }else{
        document.getElementById("message").style.background = "";
    }

}
function onBlurName(){
    document.getElementById("name").style.background = "";
}
function onBlurEmail(){
    document.getElementById("email").style.background = "";
}
function onBlurMessage(){
    document.getElementById("message").style.background = "";
}