function validateEmail() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("DOB").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var emailInput = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var rePass = document.getElementById("repassword").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput == "" || rePass == "" || pass == "" || username == "" || state == "" ||
        address == "" || passWord == "" || phone == "" || age == "" || dob == "" || lname == "" || fname == "") {
        alert("Fill All The Field");
    }
    if (emailPattern.test(emailInput) === false) {
        alert("In-Valid email address");
    }

}
function focusFunction() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "") {
        document.getElementById("email").style.background = "red";
    } else {
        document.getElementById("email").style.background = "";
    }
    if (password === "") {
        document.getElementById("password").style.background = "red";
    } else {
        document.getElementById("password").style.background = "";
    }
}
function onBlurEmail() {
    document.getElementById("email").style.background = "";
}
function onBlurPass() {
    document.getElementById("password").style.background = "";
}
function cityFunction() {
    var state = document.getElementById("state").value;
    var stringList;
    console.log(state);
    if (state === "Andaman and Nicobar Islands") {
        var stringList = ["Option 1", "Option 2", "Option 3", "Option 4"];
    }
    else if (state == "Tamil Nadu") {
        var stringList =["Chennai", "Coimbatore", "Madurai", "Salem"]
    }
    else if (state == "Telangana") {
        var stringList = ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"]
    }
    else if (state == "Andhra Pradesh") {
        var stringList= ["Hyderabad", "Visakhapatnam", "Vijayawada"]
    }
    else {
        var stringList = ["Option 1", "Option 2", "Option 3", "Option 4"];
    }
    console.log(stringList);
    const city = document.getElementById("city");
    city.innerHTML="";
    for (let i = 0; i < stringList.length; i++) {
        const option = document.createElement("option");
        // option.innerHTML = "";
        option.text = stringList[i];
        option.value = stringList[i]; // You can set the value if needed
        city.add(option);
    }

}
function cityClear(){
    const option=document.createElement("option");
}