//CREATE A WEB SERVER
const http = require('http');
// const server = http.createServer((req, res) => {
//     //write response
//     res.write('hello world from nodejs');
//     //send response
//     res.end();
// });
const server = http.createServer((req, res) => {
    //only send respone from root dir
    if(req.url === '/'){
        res.write('hello world from Node');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
});

server.listen('3000');