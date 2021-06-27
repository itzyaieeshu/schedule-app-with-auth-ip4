const db = require("../../config/database");
const bcrypt = require('bcrypt');

const loginPage = (req, res) => {
    res.render('pages/login', {
        layout: 'layouts/main'
    });
}
const login = (req, res) => {
    const data = req.body;
    if (data.email === '' || data.password === '') {
        return res.redirect('/login?error=' + encodeURIComponent('Please insert both email and password'))
    } else {
        db.oneOrNone('SELECT * FROM users WHERE email = $1',
        [data.email.toLowerCase()])
        .then((existingUser) => {
            if (!existingUser) {
                return res.redirect('/login?error=' + encodeURIComponent('Email or password incorrect'))
            } else {
                bcrypt.compare(data.password, existingUser.password, (err, result) => {
                    if (result == true) {
                        req.session.userId = existingUser.id;
                        res.redirect('/');
                    } else {
                        console.log(err);
                        res.redirect('/login?error=' + encodeURIComponent('Email or password incorrect'))
                    }
                });
            }
        })
    }
}
module.exports = {
    loginPage,
    login,
}