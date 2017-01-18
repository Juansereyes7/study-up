var page = require('page');
var empty = require('empty-element');
var template = require('./template');
page('/', function (ctx, next) {
  $('title').html('Study - Home');
  var main = document.getElementById('main-container');
  var pictures =[
    {
      users:{
          username:'sbsreyes',
          avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xtf1/v/t1.0-9/14064101_10209902057526015_155760393346624290_n.jpg?oh=7c2683e4658fefc6e29b0c3df9ed7d59&oe=58DB1F18&__gda__=1494993831_4256b0f1658b97d228dc78794f3633dc'
      },
        url:'office.jpg',
        likes: 1024,
        liked: true
    },
    {
      users:{
          username:'sbsreyes',
          avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xtf1/v/t1.0-9/14064101_10209902057526015_155760393346624290_n.jpg?oh=7c2683e4658fefc6e29b0c3df9ed7d59&oe=58DB1F18&__gda__=1494993831_4256b0f1658b97d228dc78794f3633dc'
      },
        url:'office.jpg',
        likes: 1024,
        liked: true
    }
  ]
  empty(main).appendChild(template(pictures));
});
