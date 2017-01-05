var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports= function(pictures){
  var element = yo ` <div class= "template-home">
    ${pictures.map(function(pic){
      return picture;
    })}
    </div>
  `;
  return layout(element)
}
