var countPictures = 4,
    miniaturePath = "img/small/",
    picturePath = "img/big/",
    miniatureClass = ".miniature",
    contMiniature = document.querySelector(miniatureClass);
    pictureClass = ".picture";
    contPicture = document.querySelector(pictureClass);

function createMiniature (name) {
  var miniature = document.createElement("div");
  miniature.id = name;
  miniature.classList.add("miniature__item");
  miniature.style.backgroundImage = setBackgroundImage(miniaturePath, name);
  miniature.addEventListener("click", setPicture)
  return miniature;
}

function setBackgroundImage (path, namePic) {
  return "url(" + path + namePic + ".jpg)"
}
function setPicture (event) {
  var id = event.target.id;
  contPicture.style.backgroundImage = setBackgroundImage(picturePath, id);
}
for (var i = 0; i <= countPictures; i++) {
  contMiniature.appendChild(createMiniature(i));
  if (i === 0) {
    contPicture.style.backgroundImage = setBackgroundImage(picturePath, 0);
  }
}