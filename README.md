Run client-side Mocha tests in PhantomJS from node

# Install #

````
npm install mocha-phantomjs-api
````

# Example of use #

````js
var mochaPhantom = require('mocha-phantomjs-api');

mochaPhantom(
  'http://localhost:3000/test/index.html', {
    config: {

      // Mocha configuration : 

      // {string} Mocha reporter. Default to 'spec'
      reporter: 'spec',
      // {string} filter on the test to run. Default to null
      grep: '',
      // {string} invert the previous options. Default to false
      invert: false,
      // {boolean} Display colors to output stream. Default to false
      useColors: false,
      // {boolean} Stop the test run at first error. Default to false
      bail: false,
      // {string} 
      hooks: null,
      // {number} Global test timeout
      timeout: 10000,

      // PhantomJS configuration :

      // {number} Resource loading timeout. Default to 10000 ms
      loadTimeout: 10000,
      // {boolean} Don't output resources errors. Default to false
      ignoreResourceErrors: false,
      // {Object} See http://phantomjs.org/api/webpage/property/settings.html
      settings: null,
      // {Object} See http://phantomjs.org/api/webpage/property/custom-headers.html
      headers: null,
      // {Array} See http://phantomjs.org/api/webpage/method/add-cookie.html
      cookies: null,
      // {Object} See http://phantomjs.org/api/webpage/property/viewport-size.html
      viewportSize: null
    },
    // Output and error stream. By default, process.std(out|err). 
    // Set to 'ignore' to mute.
    out: null,
    err: null
  }, function(err) {
    // Done ! Or error ?
  });

````
