var fork = require('child_process').fork;

var mochaPhantomJsPath = require.resolve('mocha-phantomjs-core/mocha-phantomjs-core');
var phantomJsPath = require.resolve('phantomjs/bin/phantomjs');

function runMochaPhantomJS(url, options, callback) {

  if (!options) {
    options = {};
  }
  if (!options.config) {
    options.config = {};
  }

  if (typeof callback !== 'function') {
    callback = function () {};
  }

  var args = [
    mochaPhantomJsPath,
    url,
    options.config.reporter || 'spec',
    JSON.stringify(options.config)
  ];

  var child = fork(
    phantomJsPath,
    args, {
      stdio: [
        'ignore',
        options.out || process.stdout,
        options.err || process.stderr,
        'ipc'
      ]
    });

  child.on('error', callback);
  child.on('exit', function (code) {
    if (code === 0) {
      callback();
    } else {
      callback(new Error(code));
    }
  });

};

module.exports = runMochaPhantomJS;
