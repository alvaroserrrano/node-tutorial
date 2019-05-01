//USER INPUT VALIDATION WITH EXPRESS AND JOY

//npm install joi 

const express = require('express');
const path = require('path');//dirs and files paths
const Joi = require('joi');//ensure validation of key information
const bodyParser = require('body-parser'); //for validation 
const app = express();
//TO GIVE an ALIAS
//use middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
//parse url encoded forms
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Serve form to the user
app.get('/', (req, res) => {
    // res.send('Hello world');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
//get data entered by the user
app.post('/', (req, res) => {
    //return object with properties of email and password
    console.log(req.body);
    //Validation ->create a schema
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    // arg1: object we want to validate; arg2: schema; arg3: callback
    Joi.validate(req.body, schema, (error, result) => {
        if(error){
            console.log(error);
            res.send('an error has occurred');
        }else{
            console.log(result);
            res.send('Successfully posted data');
        }
    })
});
app.listen(3000);