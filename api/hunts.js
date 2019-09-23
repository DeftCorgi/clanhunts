const hunts = require('../data/hunts.json');

module.exports = app => {
  app.get('/api/hunts/', (req, res) => {
    res.send(hunts);
  });
};
