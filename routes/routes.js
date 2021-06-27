const index = require('./handlers/index');
const login = require('./handlers/login');
const signup = require('./handlers/signup');
const auth = require('../middleware/auth');

module.exports = (app) => {
    app.get('/', auth.redirectToLogin, index.indexPage),
    app.get('/login', auth.redirectToHome, login.loginPage),
    app.post('/login', login.login),
    app.get('/signup', signup.signupPage),
    app.post('/signup', signup.signup)
};