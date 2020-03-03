const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const telNumber = document.getElementById('tel-number');
const text = document.getElementById('text');


const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

const capitalize = str => str[0].toUpperCase() + str.substring(1);

const checkRequired = (inputsArr) => {
    inputsArr.forEach(input => {
        input.value.trim() === '' ? showError(input, `${capitalize(input.id)} is required`) : showSuccess(input);
    });
};

const checkEmail = input => {
    const regExp = /[a-z0-9]+[-.]?[a-z0-9]+@[a-z]+\.[a-z]+/;
    regExp.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Email is not valid');
};

const checkUserName = input => {
    const regExp = /[a-z]{3,15}/i;
    regExp.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Username is not valid');
};

const checkTelNumber = input => {
    const regExp = /\+\d\(\d{3}\)\d{3}\-\d{4}/g;
    regExp.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Tel. Number is not valid');
};

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${capitalize(input.id)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${capitalize(input.id)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
};



form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired([username, email, telNumber, text]);
    checkLength(text, 5, 1500);
    checkEmail(email);
    checkUserName(username);
    checkTelNumber(telNumber);


    if (document.querySelectorAll('.success').length === 4) {
        console.log('Register success', {
        username: username.value,
        email: email.value,
        telNumber: telNumber.value,
        })
    }
});





