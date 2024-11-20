var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

// Function to move to the previous slide
function prevSlide(n) {
  index += n;
  changeSlide();
}

// Function to move to the next slide
function nextSlide(n) {
  index += n;
  changeSlide();
}

// Function to change the current slide
function changeSlide() {
  if (index > slides.length - 1) index = 0; // Loop back to the first slide
  if (index < 0) index = slides.length - 1; // Loop back to the last slide

  // Hide all slides and remove the 'active' class from all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show the current slide and add the 'active' class to the corresponding dot
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

// Initialize the slider by showing the first slide
changeSlide();

// Set up automatic slide change every 2 seconds
setInterval(() => nextSlide(1), 5000); // Change slide every 2000 milliseconds (2 seconds)
