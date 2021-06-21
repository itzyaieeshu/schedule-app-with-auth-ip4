const index = require('./index/index');

module.exports = (app) => {
    app.get('/', index.indexPage)
};