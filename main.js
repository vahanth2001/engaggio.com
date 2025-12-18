// Mobile menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");
const searchWrapper = document.querySelector(".header-search");

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

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("show");
  });

  // Close when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      hamburgerBtn.classList.remove("active");
    });
  });
}

// Footer year (for pages that have #year)
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
