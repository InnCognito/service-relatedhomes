// const compression = require('compression');
const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const dbModels = require('./db/models.js');
// const mountRoutes = require('./routes');

const createApp = (dbConnection) => {
  const app = express();

  // app.use(compression());
  // app.use(bodyParser.json());
  // app.use(morgan('dev'));
  app.use(express.static(`${__dirname}/../public/dist/`));

  // mountRoutes(app); // TODO: implement promise-based routes

  app.get('/api/morehomes/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(id);
    const query = `WITH locations AS (
      SELECT *
      FROM homes
      WHERE location = (
        SELECT location
          FROM homes
          WHERE id = ${id}
      )
      LIMIT 100
    )
    SELECT * FROM locations
      ORDER BY RANDOM()
      LIMIT 12`;
    dbConnection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send(result.rows);
      }
    });
  });

  // app.get('/:id', (req, res) => {
  //   const { id } = req.params;
  //   res.redirect('/'+id);
  // });
  // app.get('/:id', (req, res, next) => express.static(require('path').join('.', 'public', 'dist', req.params.id)).apply(this, arguments));

  // app.get('/MoreHomes/', (req, res) => {
  //   // console.log('Got request for ', req.params);
  //   dbModels.getAll(dbConnection, (err, data) => {
  //     if (err) {
  //       res.status(500).send();
  //     } else {
  //       res.status(200).send(data.rows);
  //     }
  //   });
  // });

  return app;
};

module.exports = {
  createApp,
};
