//name validation
const name = document.querySelector('#name');
const name_er = document.querySelector('#name_er')

name.addEventListener("input", () => {
    const value = name.value.trim();
    if (value === "") {
        name_er.innerHTML = "Name is required";
    } else if (!/^[A-Z][a-z]+$/.test(value)) {
        name_er.innerHTML = "First letter must be capital, rest lowercase";
    }
    else {
        name_er.innerHTML = "";
    }
})

// Age validation
const age = document.querySelector('#age');
const age_er=document.querySelector('#age_er');

age.addEventListener("input", function () {
    if (isNaN(age.value)) {
       age_er.innerHTML = "Enter a number";
    } else if (age.value < 18 || age.value > 70) {
       age_er.innerHTML= "Age must be between 18 and 70";
    } else {
       age_er.innerHTML = "";
    }
})

//Email valitation here
const email = document.querySelector('#mail');
const mail_er = document.querySelector('#mail_er');

email.addEventListener("input",()=>{
     const value = email.value.trim();

    if (value === "") {
        mail_er.innerHTML = "Email is required";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        mail_er.innerHTML = "Enter a valid email address";
    }
    else {
        mail_er.innerHTML = "";
    }
})

//Password valitaion
const password = document.querySelector('#password');
const password_err = document.querySelector('#password_er');

password.addEventListener("input",()=>{
     const value = password.value;

    if (value === "") {
        password_err.innerHTML = "Password is required";
    }
    else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])/.test(value)) {
        password_err.innerHTML =
            "Must contain 1 capital letter, 1 number, and 1 special character";
    }
    else {
        password_err.innerHTML = "";
    }
})


const printValue = () => {
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const mail = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;
    console.log(name, age, mail, password);
}