const nav = document.querySelector("header");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 450) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
