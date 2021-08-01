const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('passsword');
const password1 = document.getElementById('cofirm-password');
// console.log('1');
form.addEventListener('submit', (e) => {
    if (firstNameValidation() && lastNameValidation() && emailValidation()) {
        document.getElementById("form").submit();
    } else {
        e.preventDefault();
    }
});

function firstNameValidation() {
    const firstnameValue = firstName.value.trim();
    const regnames = /^[A-Za-zÀ-ÖØ-öø-ÿ \-‘]+$/;             // /^[a-zA-Z]+[^0-9@!#%^&*()+{}]$/;
    if (firstnameValue === ""){
        setErrorFor(firstName , 'firstname cannot be empty!');
        return false
    } else if(!regnames.test(firstnameValue)){
        setErrorFor(firstName , 'firstname can only be letters.');
        return false
    } else {
        setSuccessFor(firstName);
        return true
    }
}
function lastNameValidation() {
    const lastnameValue = lastName.value.trim();
    const regnames = /^[A-Za-zÀ-ÖØ-öø-ÿ \-‘]+$/;             // /^[a-zA-Z]+[^0-9@!#%^&*()+{}]$/;
    if (lastnameValue === ""){
        setErrorFor(lastName , 'Lastname cannot be empty!');
        return false
    } else if(!regnames.test(lastnameValue)){
        setErrorFor(lastName , 'Lastname can only be letters.');
        return false 
    } else {
        setSuccessFor(lastName);
        return true
    }
}
function emailValidation() {
    const emailValue = email.value.trim();
    const regemail =  /^[a-z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/     ///[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+/;
    if ((emailValue === '')||(!regemail.test(emailValue))){
        setErrorFor(email , 'email is invalid.');
        return false
    }else {
        setSuccessFor(email);
        return true
    }
}

// setSuccessFor(firstName);
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
