var countPictures = 4,
    miniaturePath = "img/small/",
    picturePath = "img/big/",
    contMiniatureClass = ".miniature",
    contMiniature = document.querySelector(contMiniatureClass);
function createMiniature (name) {
  var miniature = document.createElement("div");
  miniature.id = name;
  miniature.classList.add("miniature__item");
  miniature.style.backgroundImage = "url(" + miniaturePath + name + ".jpg)";
  return miniature;
}


for (var i = 0; i <= countPictures; i++) {
  contMiniature.appendChild(createMiniature(i));
}