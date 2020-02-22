const morehomes = require('./morehomes');

module.exports = app => {
  app.use('/MoreHomes', morehomes);
}