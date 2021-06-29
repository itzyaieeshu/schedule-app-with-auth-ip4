const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('passsword');
const password1 = document.getElementById('cofirm-password');
// console.log('1');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('2');
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password1Value = password1.value.trim();
    // console.log('3');
    //regex
    const regnames = /^[A-Za-zÀ-ÖØ-öø-ÿ \-‘]+$/;             // /^[a-zA-Z]+[^0-9@!#%^&*()+{}]$/;
    const regemail =  /^[a-z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/     ///[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+/;


    if (firstnameValue === ""){
        setErrorFor(firstName , 'firstname cannot be empty!');
        
    }else if(!regnames.test(firstnameValue)){
        setErrorFor(firstName , 'firstname can only be letters.');
        
        
    }else {
        setSuccessFor(firstName);
    }

    if (lastnameValue === ""){
        setErrorFor(lastName , 'Lastname cannot be empty!');
        
    }else if(!regnames.test(lastnameValue)){
        setErrorFor(lastName , 'Lastname can only be letters.');
        
        
    }else {
        setSuccessFor(lastName);
    }

    if ((emailValue === '')||(!regemail.test(emailValue))){
        setErrorFor(email , 'email is invalid.');
    }else {
        setSuccessFor(email);
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
