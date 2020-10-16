const express = require('express');
const http = require('http');
const app = express();

let port = 8080;

if (process.env.PORT) {

	port = process.env.PORT;
}

app.use('/', express.static('dist'));

const server = http.createServer(app);

server.listen(port, () => {
	console.log('http://localhost:' + port);
});
