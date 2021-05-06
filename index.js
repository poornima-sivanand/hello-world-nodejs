'use strict';
const express = require('express');
var app = express();

const host = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const port = 8080;

app.get('/', function (req, res) {
    res.send('<html><body style="background-color:powderblue"><h1 align=center style="color:teal;"> Hello World! </h1></body></html>');
  });
  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
    console.log(`Running on http://${host}:${port}`);
  });