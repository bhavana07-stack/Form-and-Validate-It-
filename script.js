document.getElementById("jobForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");

    error.className = "";
    error.innerHTML = "";

    if(name === "" || email === "" || phone === "" || message === ""){

        error.style.color = "red";
        error.innerHTML = "❌ All fields are required!";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        error.style.color = "red";
        error.innerHTML = "📧 Enter a valid email address!";
        return;
    }

    if(phone.length < 10){

        error.style.color = "red";
        error.innerHTML = "📱 Enter a valid phone number!";
        return;
    }

    error.style.color = "green";
    error.className = "success-animation";

    error.innerHTML =
    "🎉✨ Thank You! 😊 Your Application Has Been Submitted Successfully 🚀💖";

    document.getElementById("jobForm").reset();
});