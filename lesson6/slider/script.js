var images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"],
    currentIndex = 1,
    slider = document.querySelector(".slider");

function previousImage () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length-1;
  }
  slider.style.backgroundImage = "url(img/" + images[currentIndex] + ")";
}
function nextImage () {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  slider.style.backgroundImage = "url(img/" + images[currentIndex] + ")";
}

document.querySelector(".prev").addEventListener("click", previousImage);
document.querySelector(".next").addEventListener("click", nextImage);

var timer = setInterval(nextImage, 2000);