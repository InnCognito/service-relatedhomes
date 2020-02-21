// const compression = require('compression');
const express = require('express');
// const bodyParser = require('body-parser');
const dbModels = require('./db/models.js');
// const mountRoutes = require('./routes');

const createApp = (dbConnection) => {
  const app = express();

  // app.use(compression());
  // app.use(bodyParser.json());
  app.use(express.static(`${__dirname}/../public/dist`));

  // mountRoutes(app);


  // maybe change to /api/morehomes/:id
  // pull model query into this file, re-do SQL query string with id parameter
  app.get('/MoreHomes', (req, res) => {
    // console.log('Got request for ', req.params);
    dbModels.getAll(dbConnection, (err, data) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).send(data.rows);
      }
    });
  });

  return app;
};

module.exports = {
  createApp,
};
