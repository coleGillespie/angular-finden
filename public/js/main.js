var socket = io.connect('http://localhost:3030');
socket.on('news', function (data) {
    console.log("incoming data data");
    socket.emit('my other event', {
        my: 'dat'
    });
});