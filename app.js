var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);

app.use(express.static(__dirname + '/'))
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});