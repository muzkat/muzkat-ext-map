/**
 * Created by bnz on 7/25/17.
 */
var express = require('express');

// create express app and start serving files from public folder
var app = express();
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('BPC Frame - express app listening on port 3000!');
});