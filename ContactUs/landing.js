'use strict';
// for fullname
let elInputFullname = document.getElementById('fullname');
let elValidationCorrect = document.querySelector('.validation__correct');
let elValidationError = document.querySelector('.validation__error');
// for email
let elInputEmail = document.querySelector('#email');
let elValidationCorrectEmail = document.querySelector('.validation__correct--email');
let elValidationErrorEmail = document.querySelector('.validation__error--email');
// add event

let formatForFullname = /^[a-z\s]+$/i;
let formatForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate(validateItem,error,correct,regExp) {

    validateItem.addEventListener('keydown', ()=> {
        let elInputValue = validateItem.value;
        let format = regExp;

        if(elInputValue.match(format)) {
            correct.style.display = 'block';
            error.style.display = 'none';
        } else {
            correct.style.display = 'none';
            error.style.display = 'block';
        }
    })

}
validate(elInputFullname,elValidationError,elValidationCorrect,formatForFullname);
validate(elInputEmail,elValidationErrorEmail,elValidationCorrectEmail,formatForEmail);