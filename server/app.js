const express = require('express');

const createApp = (dbConnection) => {
  const app = express();

  app.use(express.static(`${__dirname}/../public/dist/`));

  app.get('/api/morehomes/:id', (req, res) => {
    const { id } = req.params;
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
  return app;
};

module.exports = {
  createApp,
};
