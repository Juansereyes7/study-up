var yo = require('yo-yo');
var landing = require('../landing');
var signinForm = yo`
  <a href="signup">Regístrate</a>`

module.exports= landing(signinForm);
