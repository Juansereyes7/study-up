var yo = require('yo-yo');
var landing = require('../landing');
var signupForm = yo`
    <div class="col m6">
    <div class="signup-box">
      <h1 class="study-up">Study-Up</h1>
      <div class="section">
        <h2>Regístrate para compartir todos tus trabajos con toda la Comunidad</h2>
        <a href="/"class="waves-effect waves-light btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
        <a class="waves-effect waves-light btn btn-fb hide-on-med-and-up">Iniciar Sesión</a>
      </div>
      <div class="signup-form">
        <input type="text" name="email" placeholder="Correo Electrónico">
        <input type="text" name="name" placeholder="Nombre Completo">
        <input type="text" name="user" placeholder="Nombre de Usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button type="submit" name="button" class="btn waves-light btn-form">Regístrate</button>
      </div>
    </div>
    <div class="section call-to">
      ¿Tienes una Cuenta? <a href="signin">Entrar</a>
    </div>
    </div>`

module.exports= landing(signupForm);
