alert('funciona el JavaScript');
var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');


page('/', function (ctx, next) {
    main.innerHTML = '<a href ="/signup">SignUp</a>'
});

page('/signup', function (ctx, next) {
    main.innerHTML = '<a href ="/">Home</a>'
});

page();
