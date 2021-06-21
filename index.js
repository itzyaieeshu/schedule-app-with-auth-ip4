const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index', {
        layout: 'layouts/main'
    });
})

app.listen(port, () => {
    console.log(`Mr.coffee app listening at http://localhost:${port}`);
});
