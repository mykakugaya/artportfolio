const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var compression = require("compression");
app.use(compression());

// API calls
const routes = require("./routes");
app.use("/api", routes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.use("/api", routes);
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
