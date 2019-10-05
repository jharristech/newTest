function contactForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + " " + lastName;
    console.log(fullName);
    document.getElementById('pushFullName').innerHTML = "You're Full Name Is - " + fullName;
    let age = document.getElementById('age').value;
    document.getElementById('pushAge').innerHTML = "You are " + age + " Years old";
}