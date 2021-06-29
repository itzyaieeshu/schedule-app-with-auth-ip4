const db = require("../../config/database");

const deleteSchedule = (req, res) => {
    db.any('DELETE FROM schedules WHERE id = $1', [req.params.id]).then((schedules) => {
        res.redirect('/')
      })
      .catch((err) => {
        res.send(err);
      }); 
}
const addSchedule = (req, res) => {
    const timestamp = (str) => {
      let result;
      if (str.includes('AM')) {
        const resultTime = str.match(/(\d+)/);
        result = `${resultTime[0]}:00:00`;
      } else if (str.includes('PM')) {
        const resultTime = str.match(/(\d+)/);
        result = `${Number(resultTime[0]) + 12}:00:00`;
      }
      return result;
    };
    const schedule = {
      user_id: Number(req.body.user_id),
      day: Number(req.body.day),
      start_at: timestamp(req.body.start_at),
      end_at: timestamp(req.body.end_at),
    };
    db.any(
        'INSERT INTO schedules(user_id, day, start_at, end_at) Values ($1,$2,$3,$4);',
        [schedule.user_id, schedule.day, schedule.start_at, schedule.end_at],
      ).then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        res.send(err);
      });
  };

module.exports = {
    deleteSchedule,
    addSchedule
}