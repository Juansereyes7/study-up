var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res){
  res.send('hola mundo');
})

app.listen(port, function (err) {
  if (err) {
    console.log(`hubo un error ${err}`);
  }
  else {
    console.log(`Escuchando en el puerto ${port}`);
  }
})
