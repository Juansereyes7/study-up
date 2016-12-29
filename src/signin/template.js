var yo = require('yo-yo');
var landing = require('../landing');
var signinForm = yo`
    <div class="col m6">
    <div class="signup-box">
      <h1 class="study-up">Study-Up</h1>
      <div class="section">
        <h2>Regístrate para compartir todos tus trabajos con toda la Comunidad</h2>
        <a class="waves-effect waves-light btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
        <a class="waves-effect waves-light btn btn-fb hide-on-med-and-up">Iniciar Sesión</a>
      </div>
      <div class="signup-form">
        <input type="text" name="user" placeholder="Nombre de Usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button type="submit" name="button" class="btn waves-light btn-form">Iniciar Sesión</button>
      </div>
    </div>
    <div class="section call-to">
      ¿No Tienes una Cuenta? <a href="signup">Regístrate</a>
    </div>
    </div>`

module.exports= landing(signinForm);
