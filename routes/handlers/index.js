const db = require("../../config/database");

const indexPage = (req, res) => {
    db.any('SELECT * FROM schedules').then((schedules) => {
        res.render('pages/index', {
            layout: 'layouts/main',
            schedules,
        });
      })
      .catch((err) => {
        res.send(err);
      }); 
}

module.exports = {
    indexPage,
}