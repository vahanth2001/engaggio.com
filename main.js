// ===============================
// HEADER: SEARCH + MOBILE MENU
// ===============================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");
const searchWrapper = document.querySelector(".header-search");

// Search toggle
if (searchToggle && searchInput && searchWrapper) {
  searchToggle.addEventListener("click", () => {
    const isOpen = searchWrapper.classList.toggle("active");
    searchToggle.setAttribute("aria-expanded", isOpen);
    if (isOpen) setTimeout(() => searchInput.focus(), 120);
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchWrapper.classList.remove("active");
      searchToggle.setAttribute("aria-expanded", "false");
      searchToggle.focus();
    }
  });

  searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      searchWrapper.classList.remove("active");
      searchToggle.setAttribute("aria-expanded", "false");
    }, 120);
  });
}

// Mobile menu
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("show");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      hamburgerBtn.classList.remove("active");
    });
  });
}

// ===============================
// SLIDER (HOME PAGE ONLY)
// ===============================

window.initSlider = function () {
  const sliderItems = document.getElementById("sliderItems");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const dots = document.querySelectorAll(".dot");

  // Exit if slider not on page
  if (!sliderItems || !prevBtn || !nextBtn || !dots.length) return;

  const cards = Array.from(sliderItems.children);
  let currentSlide = 0;
  const totalSlides = dots.length;

  function showSlide(index) {
    currentSlide = index;

    cards.forEach(card => {
      const slideIndex = Number(card.dataset.slideIndex);
      card.style.display = slideIndex === index ? "block" : "none";
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  prevBtn.onclick = () => {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  nextBtn.onclick = () => {
    showSlide((currentSlide + 1) % totalSlides);
  };

  dots.forEach((dot, index) => {
    dot.onclick = () => showSlide(index);
  });

  // Init
  showSlide(0);
};

// ===============================
// FOOTER YEAR
// ===============================

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
