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
      // {string} Only run tests matching this pattern. Default to null
      grep: '',
      // {string} Invert grep option, don't run tests matching the pattern. Default to false
      invert: false,
      // {boolean} Display colors to output stream. Default to false
      useColors: false,
      // {boolean} Stop the test run at first error. Default to false
      bail: false,
      // {string} 
      hooks: null,
      // {number} Global test timeout in milliseconds. Default to 2000 ms
      timeout: 2000,

      // PhantomJS configuration :

      // {number} Resource loading timeout in milliseconds. Default to 10000 ms
      loadTimeout: 10000,
      // {boolean} Don't output resources errors. Default to false
      ignoreResourceErrors: false,
      // {Object} See http://phantomjs.org/api/webpage/property/settings.html
      settings: {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
      },
      // {Object} See http://phantomjs.org/api/webpage/property/custom-headers.html
      headers: {
        "X-Test": "foo",
        "DNT": "1"
      },
      // {Array} See http://phantomjs.org/api/webpage/method/add-cookie.html
      cookies: [
        {
          'name'     : 'Valid-Cookie-Name',   /* required property */
          'value'    : 'Valid-Cookie-Value',  /* required property */
          'domain'   : 'localhost',
          'path'     : '/foo',                /* required property */
          'httponly' : true,
          'secure'   : false,
          'expires'  : (new Date()).getTime() + (1000 * 60 * 60)   /* <-- expires in 1 hour */
        }
      ],
      // {Object} See http://phantomjs.org/api/webpage/property/viewport-size.html
      viewportSize: {
        width: 480,
        height: 800
      }
    },
    // Output and error stream. By default, process.std(out|err). 
    // Set to 'ignore' to mute.
    out: null,
    err: null
  }, function(err) {
    // Done ! Or error ?
  });

````
