var yo = require('yo-yo');

module.exports = function pictureCard(pic){
  var el;
  function render(picture){
  return  yo`
  <div class="row">
    <div class="col s12 l8 offset-l2">
      <div class="card ${picture.liked ? 'liked' : ''}">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${pic.url}">
        </div>
        <div class="card-content">
          <a href="${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
          </a>
          <small class=" right time">Hace 1 día</small>
          <p>
          <a class="left" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#" onclick=${dislike}><i class="fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${picture.likes} Me gusta</span>
          </p>
        </div>
      </div>
    </div>
    </div>`
  }
function like(){
  pic.like = true;
  pic.likes++;
  var newEl = render(pic);
  yo.update(el, newEl);
  return false;
}
function dislike(){
  pic.like = false;
  pic.likes--;
  var newEl = render(pic);
  yo.update(el, newEl);
  return false;
}
el = render(pic);
return el;
}
