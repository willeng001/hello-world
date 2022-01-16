
const HTTP_PORT = 3000;

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(HTTP_PORT, function() {
    console.log('Server listening on PORT ' + HTTP_PORT);
}); 