var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var chunkData = '';

  https.get(requestOptions, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (data) => {
      chunkData += data;
    });

    response.on('end', (data) => {
      console.log('Data received: \n', chunkData);
    });

  });

}

getAndPrintHTML();