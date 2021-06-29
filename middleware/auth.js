const redirectToLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.clearCookie('mrcoffee_sid');
        res.redirect('/login');
    } else {
        next();
    }
}

const redirectToHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = {
    redirectToLogin,
    redirectToHome,
}