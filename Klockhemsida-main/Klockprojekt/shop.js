//Read more, Read Less - Shop page

const readMoreButton = document.querySelector(".readMore2");
const paragraf = document.querySelector(".shop-para");

readMoreButton.addEventListener("click", readMore);

function readMore() {
  if (readMoreButton.innerText === "Read More") {
    paragraf.style.height = "auto";
    readMoreButton.innerText = "Read Less";
  } else {
    paragraf.style.height = "220px";
    readMoreButton.innerText = "Read More";
  }
}

// Show shopping cart dialog


const addToCartBtn = document.querySelector(".addToCartBtn");
const addedToCartMsgBtn = document.querySelector("#addItemMsg");

addToCartBtn.addEventListener("click", addItembtnMsg);

function addItembtnMsg() {
  addedToCartMsgBtn.style.display = "block"
  setTimeout(function () {
    addedToCartMsgBtn.style.display = "none"
  }, 2000);
}
