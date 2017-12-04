var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  function reverse(rev){
    return rev.split("").reverse().join("");
  }
  console.log(reverse(html));
}

getHTML(requestOptions, printReverse);