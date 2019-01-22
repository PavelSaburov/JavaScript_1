var countPictures = 4,
    miniaturePath = "img/small/",
    picturePath = "img/big/",
    contMiniature = ".miniature";
function createMiniature (name) {
  var miniature = document.createElement("div");
  miniature.id = name;
  miniature.classList.add("miniature__item");
  miniature.style.backgroundImage = "url(" + miniaturePath + name + ".jpg)";
  console.log(miniature.style);
  return miniature;
}
document.querySelector(contMiniature).appendChild(createMiniature(0));
