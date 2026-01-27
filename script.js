// Simple scroll animation effect
const slides = document.querySelectorAll(".hero-carousel .slide");
const dots = document.querySelectorAll(".carousel-dots .dot");

let current = 0;
let interval;

// Show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

// Auto play
function startAuto() {
  interval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000); // 4 sec
}

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(i);
    startAuto();
  });
});

startAuto();

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const slide = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);

  document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(".page-section");
  const progressList = document.getElementById("progressList");
  const sidebar = document.querySelector(".side-progress");

  // create lines
  sections.forEach((section) => {

    const li = document.createElement("li");

    const label = document.createElement("div");
    label.className = "progress-label";
    label.innerText = section.dataset.title;

    li.appendChild(label);

    li.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth" });
    });

    progressList.appendChild(li);
  });

  const items = document.querySelectorAll(".side-progress li");


  // observer
  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const index = [...sections].indexOf(entry.target);

        // highlight active line
        items.forEach(i => i.classList.remove("active"));
        if(items[index]) items[index].classList.add("active");

        entry.target.classList.add("show");


        // ⭐ COLOR SWITCH LOGIC (THIS IS THE KEY)
        if (entry.target.classList.contains("light-section")) {
          sidebar.classList.add("dark-mode");   // black lines
        } else {
          sidebar.classList.remove("dark-mode"); // white lines
        }

      }

    });

  }, { threshold: 0.5 });


  sections.forEach(section => observer.observe(section));

});
