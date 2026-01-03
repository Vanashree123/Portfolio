document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});
