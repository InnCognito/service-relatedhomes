require('newrelic');
const appCreator = require('./app.js');
const dbConnection = require('./db');
const PORT = 3005;

// eslint-disable-next-line no-console
const app = appCreator.createApp(dbConnection);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
