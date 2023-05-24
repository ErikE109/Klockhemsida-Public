//dropdown meny

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navAboutUs = document.querySelector("#nav-about-us");

hamburger.addEventListener("click", mobileMenu);
navAboutUs.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

let elements;
let windowHeight;
// Function to check if class is hidden or in view on screen.
function hiddenClass() {
  elements = document.querySelectorAll(".hidden");
  windowHeight = window.innerHeight;
}
//Change class name from "hidden" to "start" to start the animation
function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let position = elements[i].getBoundingClientRect().top;

    if (position - windowHeight <= 0) {
      element.classList.add("start");
      element.classList.remove("hidden");
    }
  }
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", hiddenClass);

hiddenClass();
checkPosition();
