var express = require('express');
// var path = require('path');
var app = express();

app.use(express.static('../client/dist'));

app.get('/', function(req, res){
    // console.log("Received Request");
    res.sendFile('../client/dist/index.html');
});

app.listen(3005, function(){
    console.log('Example app listening on port 3005');
});