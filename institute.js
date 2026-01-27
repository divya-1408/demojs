let slides = document.querySelectorAll(".slide");
let ind = 0;
setInterval(() => {
  slides[ind].classList.remove("active");
  ind = (ind + 1) % slides.length;
  slides[ind].classList.add("active");
}, 2000); // change every 4 seconds

const slide = document.querySelectorAll(".slide");
let inde = 0;

function showNextSlide() {
  slide[inde].classList.remove("active");

  inde = (inde + 1) % slide.length;

  slide[inde].classList.add("active");
}

setInterval(showNextSlide, 4000); // change every 4s
const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

const visibleCards = 3;
const totalSlides = cards.length - visibleCards + 1;

let index = 0;

/* create dots */
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

/* next */
next.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

/* prev */
prev.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

/* auto */
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 3500);
