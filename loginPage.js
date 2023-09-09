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