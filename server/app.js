var express = require('express');
// var path = require('path');
var app = express();

// app.use(express.static('node_modules'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../client/public'));
app.use(express.static('../client/src'));

app.get('/', function(req, res){
    // console.log("Received Request");
    res.sendFile('../client/src/index.html');
});

app.listen(3005, function(){
    console.log('Example app listening on port 3005');
});