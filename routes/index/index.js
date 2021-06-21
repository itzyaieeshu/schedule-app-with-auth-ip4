const indexPage = (req, res) => {
    res.render('pages/index', {
        layout: 'layouts/main'
    });
}

module.exports = {
    indexPage,
}