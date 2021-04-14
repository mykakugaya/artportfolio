const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var compression = require("compression");
app.use(compression());

const routes = require("./routes");

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/public"));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', './client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
})