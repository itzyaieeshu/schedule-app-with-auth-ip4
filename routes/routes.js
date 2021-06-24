const index = require('./handlers/index');
const login = require('./handlers/login');
const signup = require('./handlers/signup');

module.exports = (app) => {
    app.get('/', index.indexPage),
    app.get('/login', login.loginPage),
    app.post('/login', login.login),
    app.get('/signup', signup.signupPage),
    app.post('/signup', signup.signup)
};