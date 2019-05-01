//JSON DATA, EXPRESS AND BODY PARSER

//Add ID to index.html
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
//TO GIVE an ALIAS
//use middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
//parse url encoded forms
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // res.send('Hello world');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.post('/', (req, res) => {
    //return object with properties of email and password
    console.log(req.body);
    //database work here
    res.json({success: true});
});
app.listen(3000);