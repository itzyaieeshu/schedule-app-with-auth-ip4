const logout = (req, res) => {
    res.clearCookie('mrcoffee_sid');
    res.redirect('/login');
}

module.exports = {
    logout,
}