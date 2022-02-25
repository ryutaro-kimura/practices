"use strict";

var fs = require('fs');
var fileName = '100.ldjson';

var fileReaderStream = fs.createReadStream(fileName, {bufferSize: 10});
fileReaderStream.setEncoding('utf8');

var count = 0;
fileReaderStream.on('data', function(data) {
  count++;
  console.log(count + ': ' + data);
});

fileReaderStream.resume();