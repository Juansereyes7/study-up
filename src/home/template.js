var yo = require('yo-yo');
var layout = require('../layout');

var contenido = yo`
<div class="row">
  <div class="col s12 l8 offset-l2">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title grey-text text-darken-4">Card Title<i class=" right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
    </div>
  </div>
  </div>`;

module.exports = layout(contenido);
