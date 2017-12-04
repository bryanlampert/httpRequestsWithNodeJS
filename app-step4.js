var https = require('https');

function getHTML (options, callback) {
  var chunkData = '';

  https.get(options, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (data) => {
      chunkData += data;
      console.log("Data received")
    });

    response.on('end', (data) => {
      callback(chunkData);
    });

  });


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
