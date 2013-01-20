var fs = require('fs');

//Open a file as a readable stream
var readStream = fs.ReadStream("e10-copy.js");
readStream.setEncoding('ascii'); // This is key; otherwise we'd be using buffers

var writeStream = fs.createWriteStream("out.txt");

// every time "data" is read, this event fires
readStream.on('data', function(textData) {
  console.log("Found some text!");
  writeStream.write(textData);
});

// the reading is finished...
readStream.on('close', function () {
  writeStream.end(); // ...close up the write, too!
  console.log("I finished.");
});
