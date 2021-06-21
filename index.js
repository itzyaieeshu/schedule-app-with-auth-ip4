const express = require('express');
require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');

const app = express();
const db = require('./config/database');

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/routes')(app);


app.listen(port, () => {
    console.log(`Mr.coffee app listening at http://localhost:${port}`);
});
