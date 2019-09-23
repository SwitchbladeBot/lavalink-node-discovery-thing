const express = require('express');
const dns = require('dns');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    dns.lookup('tasks.lavalink', {all: true}, (err, addresses) => {
        res.json(addresses);
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);