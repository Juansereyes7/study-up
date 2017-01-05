var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures) {
  var el = yo`
  <div>
      ${pictures.map(function (pic) {
        return picture;
      })}
  </div>`;
  return layout(el);
}
