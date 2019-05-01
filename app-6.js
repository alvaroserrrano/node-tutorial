//READABLE AND WRITABLE STREAMS-->ALLOWS TO READ AND WRITE DATA MORE EFFICIENTLY 
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt');
//listen for data event
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});
//benefits of reading in chunks instead of loading the file:
// you can immediately manipulate the File. you dont have to wait for the file to load.
//using readFile we could get rangeError ("file size is greater than possible buffer")