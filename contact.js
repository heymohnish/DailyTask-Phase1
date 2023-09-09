function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var nameInput = document.getElementById("name").value;
    var validationMessage = document.getElementById("validation-message");

    // Regular expression for a simple email pattern
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Get the value entered in the email input
    if (emailInput == "" && nameInput == "") {
        alert("Valid email address");
    }
    // Check if the email matches the pattern
    if (emailPattern.test(email)) {

    } else {
        alert("Valid email address");
    }
}
function focusFunction() {
    // alert("Valid email address");
    // var oo = name.value;
    var pp = document.getElementById("name").value;
    console.log(pp + "11");
    if (pp === "") {
        document.getElementById("name").style.background = "yellow";
        document.getElementById("name").style.border= rgb(0, 225, 53);
    }else{
        document.getElementById("name").style.background = "";
    }
}
function onBlur(){
    document.getElementById("name").style.background = "";
}