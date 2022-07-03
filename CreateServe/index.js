//Require HTTP for server
const fs = require('fs');
const http = require('http');

// Crate serve with callback
const serve = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('hello from the other side')
    } else if (req.url == '/AboutUs') {
        res.end('hello from the this side')
    } else if (req.url == '/userApi') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        fs.readFile(`G:/NodeJS/UserAPI/UserApi.json`, 'utf-8', (err, Data) => {
             res.end(Data)
        })
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end('404 Page Not Found')

    }
})
// console.log(__dirname);
// console.log('ga');

serve.listen(8000, '127.0.0.1') 