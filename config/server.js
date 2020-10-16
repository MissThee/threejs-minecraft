const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'../dist')))
app.listen(3000, function () {
    console.log('listening on port 3000!\nview http://localhost:3000');
});
