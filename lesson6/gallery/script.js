var countPictures = 4,
    miniaturePath = "img/small",
    picturePath = "img/big",
    contMiniature = ".container";
function createMiniature (name) {
  var miniature = document.createElement("div");
  miniature.id = name;
  miniature.classList.add("miniature__item");
  miniature.style.backgroundColor.uri = miniaturePath + name + ".jpg";
  return miniature;
}

