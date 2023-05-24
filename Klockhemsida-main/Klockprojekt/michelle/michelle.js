const progressBar1 = document.getElementsByClassName("m-progress-bar-1")[0];
const progressBar2 = document.getElementsByClassName("m-progress-bar-2")[0];
const progressBar3 = document.getElementsByClassName("m-progress-bar-3")[0];
const progressBar4 = document.getElementsByClassName("m-progress-bar-4")[0];
const aboutText = document.getElementsByClassName("m-about-text-box")[0];

// Create the observer
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      /* SET AN INTERVAL ON PROGRESSBAR WHEN IN VIEW*/

      progressBar1.classList.add("animation1");
      progressBar2.classList.add("animation2");
      progressBar3.classList.add("animation3");
      progressBar4.classList.add("animation4");
    }
  });
});
// Create the second observer
const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      /* SET AN INTERVAL ON PROGRESSBAR WHEN IN VIEW*/

      aboutText.classList.add("m-slide-in");
    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector(".m-skills"));
observer2.observe(document.querySelector(".m-about"));
