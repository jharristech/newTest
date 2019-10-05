function contactForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + " " + lastName;
    document.getElementById('pushFullName').innerHTML = "You're Full Name Is - " + fullName;
    const age = parseInt(document.getElementById('age').value);
    //document.getElementById('pushAge').innerHTML = "You are - " + age + " Years old";
    const phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    //document.getElementById('pushPhoneNumber').innerHTML = "You \'re phone number is - " + phoneNumber;
    const numberArray = [];
    numberArray.push(age, phoneNumber);
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById('pushAge').innerHTML = "You are - " + age + " years old.";
        }else if (numberArray[i] > 100) {
            document.getElementById('pushPhoneNumber').innerHTML = "You\'re phone number is - " + phoneNumber;            
        }
        
    }
}