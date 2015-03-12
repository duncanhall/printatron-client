'use strict';

var io;
var printer = require('printer');

/**
 *
 * @param http
 */
function init (http) {

  io = require('socket.io')(http);
  io.on('connection', connectHandler);
}

/**
 *
 * @param socket
 */
function connectHandler (socket) {

  console.log('Socket connected');
  socket.on('print-request', printRequestHandler);
  socket.on('disconnect', disconnectHandler);
}

/**
 *
 * @param printRequest
 */
function printRequestHandler (printRequest) {

  console.log('Got print request: ' + printRequest);

  printer.printDirect({data:printRequest // or simple String: "some text"
    , printer:'Brother HL-1430' // printer name, if missing then will print to default printer
    , type: 'TEXT' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
    , success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    }
    , error:function(err){console.log(err);}
  });
}

/**
 *
 */
function disconnectHandler () {

  console.log('Socket disconnected');
}

exports.init = init;
