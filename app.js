var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (chunk) => {
      console.log('Chunk received. Length: \n', chunk.length);
    });

    response.on('end', function() {
      console.log('Response stream complete');
    });

  });
}

getAndPrintHTMLChunks();