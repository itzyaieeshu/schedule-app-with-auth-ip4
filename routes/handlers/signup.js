const signupPage = (req, res) => {
    res.render('pages/signup', {
        layout: 'layouts/main'
    });
}

module.exports = {
    signupPage,
}