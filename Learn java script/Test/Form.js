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

age.addEventListener("input", function () {
    if (isNaN(age.value)) {
        document.querySelector('#age_er').innerHTML = "Enter a number";
    } else if (age.value < 18 || age.value > 70) {
        document.querySelector('#age_er').innerHTML = "Age must be between 18 and 70";
    } else {
        document.querySelector('#age_er').innerHTML = "";
    }
})

const printValue = () => {
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const mail = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;
    console.log(name, age, mail, password);
}