var SERVER_CONFIG = require('./config').server;

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 40000,


  specs: [
    'examples/**/scenario.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function () {
    browser.manage().timeouts().implicitlyWait(5000);
  },

  baseUrl: 'http://' + SERVER_CONFIG.host + ':' + SERVER_CONFIG.port + '/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
