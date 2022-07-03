const fs = require('fs');
const http = require('http');
const serve = http.createServer();

serve.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // })
    // 2nd Way
    // Create a readable stream
    // Handle Stream Events -> Data,End And Err
    const reStream = fs.createReadStream('input.txt')
    // reStream.on("data",(chunkData)=>{
    //     res.write(chunkData);
    // });
    // reStream.on("end",()=>{
    //     res.end();
    // });
    // reStream.on('error',(err)=>{
    //     res.end("File Not Found");
    //     console.log(err);
    // })
    reStream.pipe(res);
})

serve.listen(8000, "127.0.0.1")