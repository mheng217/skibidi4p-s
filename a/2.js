let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
}

function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  setInterval(() => {
    plusSlides(1);
  }, 5000);
});

document.querySelectorAll(".dish-carousel").forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("active");
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

const searchInput = document.getElementById("searchInput");
const menuCategories = document.querySelectorAll(".menu-category");

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const dishCards = document.querySelectorAll(".dish-card");
  const noResults = document.getElementById("no-results");

  let found = false;

  dishCards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(keyword) || description.includes(keyword)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = found ? "none" : "block";
});
