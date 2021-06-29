const usersValidation = require('../validations/usersValidation')
const bcrypt = require('bcrypt');
const db = require('../../config/database');
const saltRounds = 10;

const signupPage = (req, res) => {
    res.render('pages/signup', {
        layout: 'layouts/main'
    });
}
const signup = (req, res) => {
    const user = req.body;
    const addUser = (data) => {
        db.any(
            'INSERT INTO users(firstname, lastname, email, password) Values ($1,$2,$3,$4);',
            [data.firstname, data.lastname, data.email, bcrypt.hashSync(data.password, saltRounds)],
          ).then(() => {
            res.redirect('/signup');
          })
          .catch((err) => {
            res.send(err);
          });
    };
    if (usersValidation.signupUserValidation(user) === true) {
        console.log('actual place test')
        db.oneOrNone('SELECT * FROM users WHERE email = $1', 
        [user.email])
        .then((existingUser) => {
            if (existingUser) {
                res.send('User already exist')
                return true
            } else {
                addUser(user)
                return false
            }
        })
    } else if (usersValidation.signupUserValidation(user) === false) {
        res.send('Enter valid details')
    }
};

module.exports = {
    signupPage,
    signup
}