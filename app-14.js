//HTTP POST REQUEST WITH EXPRESSS AND BODY PARSER MODULE
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
//TO GIVE an ALIAS
//use middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
//parse url encoded forms
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    // res.send('Hello world');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.post('/', (req, res) => {
    //return object with properties of email and password
    console.log(req.body);
    //database work here
    res.send('Successfully posted data');
});
app.listen(3000);