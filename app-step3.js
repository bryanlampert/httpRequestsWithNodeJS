var https = require('https');

function getAndPrintHTML (options) {
  var chunkData = '';

  https.get(options, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (data) => {
      chunkData += data;
    });

    response.on('end', (data) => {
      console.log('Data received: \n', chunkData);
    });
  });

};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);