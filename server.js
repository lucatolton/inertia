const https = require('https');
const fs = require('fs');
const path = require('path');
const config = require('./config.json')
const server = https.createServer();
const Corrosion = require('corrosion');
const proxy = new Corrosion({
    codec: 'xor',
});

proxy.bundleScripts();

server.on('request', (request, response) => {
    if (request.url.startsWith(proxy.prefix)) return proxy.request(request, response);
    response.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}).on('upgrade', (clientRequest, clientSocket, clientHead) => proxy.upgrade(clientRequest, clientSocket, clientHead)).listen(8080);
