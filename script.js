// Simple scroll animation effect
window.addEventListener("scroll", () => {
  document.querySelectorAll(".service-card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});

const slides = document.querySelectorAll(".hero-carousel .slide");
const dots = document.querySelectorAll(".carousel-dots .dot");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

/* Auto slide */
setInterval(nextSlide, 5000);

/* Dot click */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
