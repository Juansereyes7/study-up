var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.set('view engine', 'pug');
app.use(express.static('public'));



app.get('/', function (req, res){
  res.render('index');
})

app.get('/signup', function (req, res){
  res.render('index');
})








app.listen(port, function (err) {
  if (err) {
    console.log(`hubo un error ${err}`);
  }
  else {
    console.log(`Escuchando en el puerto ${port}`);
  }
})
