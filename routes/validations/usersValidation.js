const nameValid = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i;
const emailValid = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
const signupUserValidation = (data) => {
    if (nameValid.test(data.firstname) === true && 
    nameValid.test(data.lastname) === true &&
    emailValid.test(data.email) === true &&
    mediumPassword.test(data.password) === true) {
        return true
    } else {
        return false
    }
}

module.exports = {
    signupUserValidation,
}