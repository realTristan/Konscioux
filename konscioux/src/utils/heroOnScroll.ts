export function heroOnScroll() {
  // Get the scroll position
  const scrollPosition = window.pageYOffset;

  // Get the elements
  const heroImageBox1 = document.getElementById("hero-image-box-1");
  const heroImageBox2 = document.getElementById("hero-image-box-2");
  if (!heroImageBox1 || !heroImageBox2) return;

  // Move the hero-image-box-1 to the left
  heroImageBox1.style.transform = `translateX(-${scrollPosition * 1.6}px)`;

  // Move the hero-image-box-2 to the right
  heroImageBox2.style.transform = `translateX(${scrollPosition}px)`;
}
