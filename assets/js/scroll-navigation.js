// scroll-navigation.js

document.addEventListener("DOMContentLoaded", function () {
  let scrollThreshold = 200; // Pixels scrolled before triggering scroll to the next section
  let scrollTimeout;
  let lastScrollTop = 0;

  // Get all section elements
  const sections = Array.from(document.querySelectorAll("section"));

  // Function to scroll smoothly to a specific section
  function scrollToSection(section) {
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Function to handle scrolling behavior
  function onScroll() {
    const scrollTop = window.scrollY;

    if (scrollTop - lastScrollTop > scrollThreshold) {
      // User has scrolled down past the threshold
      let currentIndex = sections.findIndex((section) => {
        return section.getBoundingClientRect().top + window.scrollY > scrollTop;
      });

      if (currentIndex > 0) {
        // Scroll to the next section
        scrollToSection(sections[currentIndex]);
      }
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > scrollThreshold) {
      // User has scrolled up past the threshold
      let currentIndex = sections.findIndex((section) => {
        return (
          section.getBoundingClientRect().top + window.scrollY <= scrollTop
        );
      });

      if (currentIndex > 0) {
        // Scroll to the previous section
        scrollToSection(sections[currentIndex - 1]);
      }
      lastScrollTop = scrollTop;
    }

    // Reset timeout to prevent excessive function calls
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      lastScrollTop = window.scrollY;
    }, 100);
  }

  window.addEventListener("scroll", onScroll);
});
