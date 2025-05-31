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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const dishCards = document.querySelectorAll(".dish-card");
  const noResultsMessage = document.getElementById("noResultsMessage");
  const menuCategories = document.querySelectorAll(".menu-category");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    let anyMatch = false;

    menuCategories.forEach((category) => {
      const cards = category.querySelectorAll(".dish-card");
      let hasVisible = false;

      cards.forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(keyword)) {
          card.style.display = "block";
          hasVisible = true;
          anyMatch = true;
        } else {
          card.style.display = "none";
        }
      });

      category.style.display = hasVisible ? "block" : "none";
    });

    noResultsMessage.style.display = anyMatch ? "none" : "block";
  });
});
