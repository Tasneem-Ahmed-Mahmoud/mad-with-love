


window.addEventListener("load", function () {
  // Hide the loader when the page finishes loading
  document.getElementById("loader").style.display = "none";
});

var sliderContent = document.getElementsByClassName('slider-content');
var prevBtn = document.getElementsByClassName('prev-btn')[0];
var nextBtn = document.getElementsByClassName('next-btn')[0];
var currentIndex = 0;

function showSlider(index) {
  for (var i = 0; i < sliderContent.length; i++) {
    sliderContent[i].classList.remove('active');
  }
  sliderContent[index].classList.add('active');
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderContent.length - 1;
  }
  showSlider(currentIndex);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= sliderContent.length) {
    currentIndex = 0;
  }
  showSlider(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

setInterval(nextImage, 6000); // Change image every 5 seconds

showSlider(currentIndex);





