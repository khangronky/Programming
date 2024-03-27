document.querySelector('form').addEventListener('submit', function (event) {

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var course = document.getElementById('course');

    // Enter your code here
    var message = "";

    if (fname.value == "") {
        message += "First Name is required\n";
        event.preventDefault();
    }

    if (lname.value == "") {
        message += "Last Name is required\n";
        event.preventDefault();
    }

    if (address.value == "") {
        message += "Address is required\n";
        event.preventDefault();
    }

    if (email.value == "") {
        message += "Email is required\n";
        event.preventDefault();
    }
    else {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!pattern.test(email.value)) {
            message += "Email is not valid\n";
            event.preventDefault();
        }
    }

    if (mobile.value == "") {
        message += "Mobile is required\n";
        event.preventDefault();
    }

    if (course.value == "select course") {
        message += "Course is required\n";
        event.preventDefault();
    }

    if (message != "") alert(message);
});

/*

    missing  validations
     - phone is a number
     - email in proper fortmat

    look at day 10- additional examples and try these on your own

*/