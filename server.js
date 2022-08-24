const express = require('express');
const compression = require('compression') //gzip
const path = require('path');

const app = express();
const port = 8081
app.use(compression())
app.use(express.static(path.resolve(__dirname, 'docs')))
app.listen(port, function () {
    console.log(`listening on port ${port}!`);
    console.log(`view http://localhost:${port}`);
});
