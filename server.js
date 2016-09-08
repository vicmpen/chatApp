/**
 * Created by vic on 6/9/2016.
 */

var app = require ('express')();
var http = require('http').Server(app);
var io =require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/chatWindow.html')
});

io.on('connection', function(socket){
    socket.on('newMessage', function(msg){
        io.emit('newMessage', msg);
    });
    socket.on('disconnect', function (socket) {
        io.emit('dc','smn has dced' )
    })
});


http.listen(3000, function () {
    console.log('Listening on 3000')
});