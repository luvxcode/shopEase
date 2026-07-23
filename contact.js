const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event){

    event.preventDefault();


    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();



    // Empty field validation

    if(name === "" || email === "" || phone === "" || message === ""){

        formMessage.innerHTML = 
        "❌ Please fill all fields.";

        formMessage.style.color = "red";

        return;

    }



    // Email validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailPattern.test(email)){

        formMessage.innerHTML =
        "❌ Enter a valid email address.";

        formMessage.style.color = "red";

        return;

    }



    // Phone validation

    if(phone.length !== 10 || isNaN(phone)){

        formMessage.innerHTML =
        "❌ Enter a valid 10 digit phone number.";

        formMessage.style.color = "red";

        return;

    }



    // Success message

    formMessage.innerHTML =
    "✅ Message sent successfully!";

    formMessage.style.color = "green";



    // Clear form

    contactForm.reset();


});