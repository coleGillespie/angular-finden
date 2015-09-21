var socket = io.connect('http://localhost:3030');
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
socket.on('mapTweet', function (data) {
  console.log(data.text);
  console.log(data.geo.coordinates);
  var marker = new google.maps.Marker({
      position:  {
        lat: data.geo.coordinates[0],
        lng: data.geo.coordinates[1]
      },
      map: map
  });
});