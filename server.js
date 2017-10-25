const express= require('express');
const MongoClient= require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const db= require('./config/db');
const mongodbUri = require('mongodb-uri');
const app= express();
app.use(bodyParser.urlencoded({extened:true}));
//require('./app/routes')(app,{});
const port=8080;
//console.log(JSON.stringify(mongodbUri.parse(db.url), null, 2));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})