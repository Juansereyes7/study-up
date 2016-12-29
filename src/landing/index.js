var yo = require('yo-yo');

module.exports = function landing(box) {
  return yo`<div class="container">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col s12 m6 hide-on-small-only">
            <img src="landing2.png" alt="Study" class="logo">
          </div>
        ${box}
        </div>
      </div>
    </div>
  </div>`

}
