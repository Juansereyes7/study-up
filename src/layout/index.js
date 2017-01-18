var yo = require('yo-yo');

module.exports = function layout(content) {
  return yo` <div>
  <header id="header">
    <nav>
      <div class="container">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo"><img src="logo.png" alt="logo de study-up" width="110px"></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <span class="lista">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </span>
          </ul>
        </div>
      </div>
   </nav>
  </header>
  <section>
    <div class="container">
      ${content}
    </div>
  </section>
  </div>`;
}
