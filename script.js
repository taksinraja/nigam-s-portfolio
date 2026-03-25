const container = document.querySelector(".gallery-container");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const currentSlideSpan = document.querySelector(".current-slide");
const progressFill = document.querySelector(".progress-fill");
const galleryItems = document.querySelectorAll(".gallery-item");
const totalSlides = galleryItems.length;

// Calculate item width (400px min-width + 24px gap for 1.5rem)
const itemWidth = 424;

function updateSlideIndicators() {
  // Calculate current slide based on scroll position
  const scrolled = container.scrollLeft;
  const currentSlide = Math.round(scrolled / itemWidth) + 1;
  const clampedSlide = Math.min(Math.max(currentSlide, 1), totalSlides);

  // Update current slide number
  currentSlideSpan.textContent = String(clampedSlide).padStart(2, "0");

  // Update progress bar width
  const progress = (clampedSlide / totalSlides) * 100;
  progressFill.style.width = progress + "%";
}

nextBtn.addEventListener("click", () => {
  container.scrollBy({
    left: itemWidth,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({
    left: -itemWidth,
    behavior: "smooth",
  });
});

// Update indicators on scroll
container.addEventListener("scroll", updateSlideIndicators);

// Initialize on page load
window.addEventListener("load", updateSlideIndicators);
