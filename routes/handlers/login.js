const loginPage = (req, res) => {
    res.render('pages/login', {
        layout: 'layouts/main'
    });
}

module.exports = {
    loginPage,
}