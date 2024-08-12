document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navDots = document.querySelectorAll("#dot-nav .dot");

  function onScroll() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 120) {
        // Ajusta el valor según sea necesario
        currentSection = section.getAttribute("id");
      }
    });

    navDots.forEach((dot) => {
      dot.classList.remove("bg-gray-800");
      if (dot.getAttribute("href") === `#${currentSection}`) {
        dot.classList.add("bg-gray-800");
      }
    });
  }

  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  }

  navDots.forEach((dot) => {
    dot.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

  window.addEventListener("scroll", onScroll);
});
