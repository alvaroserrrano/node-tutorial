//SERVE STATIC FILES USING HTTP AND FS
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/index.html');
    //'application/json', 'image/png'
    res.writeHead(200, {'content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);


//TEACH HOW TO CREATE PACKAGE.JSON USING 'NPM INIT'


//INSTALLING PACKAGES USING NPM