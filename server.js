/**
 * Created by vic on 6/9/2016.
 */

var app = require ('express')();
var http = require('http').Server(app);
var io =require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chatWindow.html')
});

io.on('connection',function (soc) {
    console.log('a user connected')
})

http.listen(3000, function () {
    console.log('Listening on 3000')
});