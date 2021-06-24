const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

require('dotenv').config();
const app = express();
const db = require('./config/database');

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 10,
    },
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
}))
require('./routes/routes')(app);


app.listen(port, () => {
    console.log(`Mr.coffee app listening at http://localhost:${port}`);
});
