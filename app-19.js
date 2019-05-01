//MIDDLEWARE
//MIDDLEWARE IS THE CODE THAT GETS EXECUTED BETWEEN THE CLIENT´S REQUEST AND THE SERVER´S RESPONSE
//E.G BODYPARSER => bodyparser.json() {check if json data and attach to the body}
//MIDDLEWARE-->code that gets executed btw req and re
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json()); //this is a middleware function to process the user´s request (attach to req.body)
app.use('/example', (req, res, next) => {
    console.log(req.url, req.method);   
    next();
});//our own middleware function; next must be invoqued whenever we create our own middleware method
app.get('/', (req, res) => {
    res.send('Middleware');
});
app.listen(3000);