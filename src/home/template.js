var yo = require('yo-yo');
var layout= require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures){
  var element = yo`
  <div class="pictures">
    ${pictures.map(function(pic){
      return picture(pic);
    })}
  </div>`
  return layout(element);
}
