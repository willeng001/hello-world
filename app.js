const HTTP_PORT = process.env.HTTP_PORT || 3000;

const express = require('express');
const app = express();

const routes = require('./api/routes');

routes(app);

app.listen(HTTP_PORT, function() {
    console.log('Server listening on PORT ' + HTTP_PORT);
}); 