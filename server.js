'use strict';

var socket = require('socket.io-client')('http://localhost:1985');

socket.on('connect', function(){
  console.log('socket connected...');

  socket.emit('printatron-client-id');

});

socket.on('event', function(data){
  console.log('socket event: ' + data);
});

socket.on('relay-print', function(msg){
  console.log('socket print request: ' + msg);
});

socket.on('disconnect', function(){
  console.log('socket disconnected...');
});