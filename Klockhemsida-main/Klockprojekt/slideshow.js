// SLIDESHOW

let imageIndex = 1;
let timer = null;
showSlides(imageIndex);

// Next/previous button navigation
function nextSlide(n) {
    clearTimeout(timer);
    showSlides(imageIndex += n);
  }
  
  // Shows correct image
  function showSlides(n) {
    let i;
    let image = document.getElementsByClassName("slide-image");
  
      if (n===undefined){n= ++imageIndex;}
      //When the user inpus is next from the last image, the first image is showing.
      if (n > image.length) {imageIndex = 1};
      //When the user input is 'previously' from the the first image, the last image is showing.
      if (n < 1) {imageIndex = image.length};
  
      //Hides all images
      for (i = 0; i < image.length; i++) {
      
      image[i].style.display = "none";
      image[i].style.opacity = "0";
      }
   
      //Displays the correct image
      
      image[imageIndex-1].style.display = "block";
      image[imageIndex-1].style.opacity="1";
  
      clearTimeout(timer);
      timer = setTimeout(showSlides, 3000);
  
  }