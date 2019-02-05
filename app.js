const path = require('path');
const os = require('os');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const URL = require('url');
const jsonScanner = require('./server/resources/json-scanner.js');
const server = require('./server/express_webserver.js');

var app = new server.EXPRESS().listen();

app.get('/',function(req,res){
  let response = res;
  response.sendFile(__dirname+'/index.html');
});
