var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var twitter = require('ntwitter');
var nconf = require('nconf');
nconf.file('config.json');

server.listen(3030);
app.use(express.static('public'));

var t = new twitter({
    consumer_key: nconf.get("consumer_key"),
    consumer_secret: nconf.get("consumer_secret"),
    access_token_key: nconf.get("access_token_key"),
    access_token_secret: nconf.get("access_token_secret")
});

t.stream('statuses/filter', {'locations':'-74,40,-73,41'} , function( stream, err ) {
      io.on('connection', function (socket) {
        stream.on('error', function(err){
            console.log("failed stream", err);
        });

        stream.on('data', function ( data ) {
          if( data.geo !== null ) {
            socket.emit( 'mapTweet', data );
          }
        });
      });
})
