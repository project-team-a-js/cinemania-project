const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", myFunction);

function myFunction() {
  if (mobileMenu.style.display != "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
  console.log(mobileMenu.style.display);
}
