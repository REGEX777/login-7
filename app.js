// express init here 
const express = require('express');
// ejs init here
const ejs = require('ejs');
// body-parser init here
const bodyParser = require('body-parser');
// mongoose init here
const mongoose = require('mongoose');

const app = express();
app.use('static', express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000 || process.env.PORT;


app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(port, function(Req,res){
    console.log('Server is running on port: ' + port);
})