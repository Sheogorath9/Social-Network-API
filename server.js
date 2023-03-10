const express = require("express");
const db = require('./Connection/connection');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;
app.use(routes)

db.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });