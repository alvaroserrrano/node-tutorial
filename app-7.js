//PIPES AND PIPE CHAINING
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt');

//to use pipe we need an origin and a destination
readStream.pipe(gzip).pipe(writeStream);