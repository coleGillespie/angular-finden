var socket = io.connect('http://localhost:3030');
socket.on('mapTweet', function (data) {
  console.log(data.text);
  console.log(data.geo.coordinates);
});