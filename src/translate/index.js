if (!window.Intl) {
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

var IntlRelativeFormat = window.IntlRelativeFormat =require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');


require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es;
var en;
es = require('./es.js');
en = require('./en-US');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

var locale = es;


  module.exports = {
  message: function (text, opts) {
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale);
    return msg.format(opts);
  },
  date: new IntlRelativeFormat('locale')
}
