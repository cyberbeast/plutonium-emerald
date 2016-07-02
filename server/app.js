var express = require('express');
var app = express();

// app.use(express.static('node_modules'));
app.use(express.static('../client/'));

app.get('/', function(req, res){
    // console.log("Received Request");
    res.sendFile('../client/index.html');
});

app.listen(3005, function(){
    console.log('Example app listening on port 3005');
});