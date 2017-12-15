const express = require('express') 
const app = express() 
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require("errorhandler");


app.use(bodyParser.text());
app.use(logger('dev')); 
app.use(errorHandler()); 

app.all('*', (req, res) => {
    res.status(404).send('Not found')
  })

app.get('/:name', (req, res) => {
  console.log("Get request recieved");
  console.log(req.params);
  console.log(req.query);
  res.send('hello world');
});


app.listen(3000)