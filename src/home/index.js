var page = require('page');
var empty = require('empty-element');
var template = require('./template');
page('/', function (ctx, next) {
  $('title').html('Study - Home');
  var main = document.getElementById('main-container');
  var pictures =[
    1,2,3,4
  ];
  empty(main).appendChild(template(pictures));
});
