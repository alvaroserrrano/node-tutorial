//WORKING WITH EXPRESS GET REQUESTS
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/example', (req, res) => {
    res.send('Hitting example route');
});

//route with parameters
app.get('/example/:name/:age', (req, res) => {
    console.log((req.params));
    //We get an empty object because we have not passsed anything to it as a query -->http://localhost:3000/example/alvaro/00
    //Now we get an object with properties from the query -->http://localhost:3000/example/alvaro/00?tutorial-1=param&tutorial-2=param-2
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);

});

app.listen(3000);

//When should I use a route param vs query string?
//Route--> We MUST have that data
//Query --> Optional settings