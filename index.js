const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          idx / 7 + 0.3
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
