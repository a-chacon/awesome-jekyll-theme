let userScrolled = false;

// Function to detect user scrolling
window.addEventListener("scroll", function () {
  userScrolled = true; // Set to true if the user scrolls
});

// Function to trigger the scroll hint
function scrollDownHint(times = 1, distance = 150, interval = 1000) {
  let count = 0;
  let scrollPosition = window.scrollY;

  function animateScroll() {
    if (count < times && !userScrolled) {
      window.scrollTo({
        top: scrollPosition + distance,
        behavior: "smooth",
      });

      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }, interval / 2);

      count++;
      setTimeout(animateScroll, interval);
    }
  }

  animateScroll();
}

// Trigger the scroll hint only if the user hasn't scrolled within 3 seconds
window.onload = function () {
  setTimeout(() => {
    if (!userScrolled) {
      scrollDownHint();
    }
  }, 3000); // Wait for 3 seconds before triggering the scroll hint
};
