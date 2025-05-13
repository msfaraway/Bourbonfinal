let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}