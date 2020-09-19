const https = require('https')
const fs = require('fs')
const express = require('express')

const app = express()

//配置证书位置
const options = {
    key: fs.readFileSync(__dirname + '/4522015.key'),
    cert: fs.readFileSync(__dirname + '/4522015.pem')
}

https.createServer(options, app).listen(443)


app.get('/', (request, response) => {
    response.writeHead(200)
    fs.createReadStream(__dirname + "/index.html")
      .pipe(response)
})