//SERVING STATIC FILES WITH EXPRESS
const express = require('express');
const path = require('path');
const app = express();
//TO GIVE an ALIAS
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    // res.send('Hello world');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.listen(3000);