const http = require('http');
const fs = require('fs');
var request = require('requests');

const homefile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace('{%tempval%}', orgVal.main.temp);
    temperature = temperature.replace('{%tempmin%}', orgVal.main.temp_min);
    temperature = temperature.replace('{%tempmax%}', orgVal.main.temp_max);
    temperature = temperature.replace('{%location%}', orgVal.name);
    temperature = temperature.replace('{%country%}', orgVal.sys.country);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        request('https://api.openweathermap.org/data/2.5/weather?lat=24.9056&lon=67.0822&appid=b50a08958322248afb87b3d7a240b153').on(
            'data', (chunk) => {
                const objData = JSON.parse(chunk)
                const arrData = [objData]
                // console.log(arrData);
                const realTimeData = arrData.map((val) =>
                    replaceVal(homefile, val)
                ).join("");
                res.write(realTimeData);
                // console.log(realTimeData)
            }
        ).on('end', (err) => {
            if (err) {
                return console.log('Connection Closed')
            }
            console.log('end');
        })
    }
});

server.listen(8000, '127.0.0.1')