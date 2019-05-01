//WORKING WITH THE EXPRESS ROUTER       
const express = require('express');
const path = require ('path');
const app = express();



app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

//require the people route
const people = require('./routes/people');
//tell app that we want to use the people route
app.use('/people', people);

app.listen(3000);