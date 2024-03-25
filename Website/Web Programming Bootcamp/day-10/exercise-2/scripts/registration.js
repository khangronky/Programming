//this is the main function 
function checkForm() {
    //collecting user inputs 
    firstname = document.getElementById("firstname").value;
    surname = document.getElementById("surname").value;
    age = document.getElementById("age").value;
    //calls another function IsNumeric 
    ageNumeric = IsNumeric(age);
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    //calls another function IsNumeric 
    phoneNumeric = IsNumeric(phone);
    email = document.getElementById("email").value;
    //calls another function checkEmail
    emailResult = checkEmail(email);
    password = document.getElementById("password").value;
    customer = document.getElementById("customer").value;

    //Enter your code here: checking for empty inputs and displaying error 
    if (firstname == "") {
        document.querySelector("#firstnameError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#firstnameError").classList.remove("show");
    }

    if (surname == "") {
        document.querySelector("#surnameError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#surnameError").classList.remove("show");
    }

    if (!ageNumeric || age < 16 || age > 90) {
        document.querySelector("#ageError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#ageError").classList.remove("show");
    }

    if (address == "") {
        document.querySelector("#addressError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#addressError").classList.remove("show");
    }

    if (!phoneNumeric) {
        document.querySelector("#phoneError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#phoneError").classList.remove("show");
    }

    if (!emailResult) {
        document.querySelector("#emailError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#emailError").classList.remove("show");
    }

    if (password == "") {
        document.querySelector("#passwordError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#passwordError").classList.remove("show");
    }

    if (customer == "choose your customer type") {
        document.querySelector("#customerError").classList.add("show");
        return false;
    }
    else {
        document.querySelector("#customerError").classList.remove("show");
    }
}


//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr) {
    mystring = numstr;
    if (mystring.match(/^\d+$/)) {

        return true;
    } else {
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if (pattern.test(inputvalue)) {
        return true;
    } else {
        return false;
    }

}



