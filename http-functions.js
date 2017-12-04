var https = require('https');

module.exports = function getHTML (options, callback) {
  var chunkData = '';

  https.get(options, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (data) => {
      chunkData += data;
    });

    response.on('end', (data) => {
      callback(chunkData);
    });
  });
};