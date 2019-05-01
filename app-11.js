//CREATE EXPRESS SERVER
const express = require('express');
//object containing all the modules
const app = express();
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.listen(3000);