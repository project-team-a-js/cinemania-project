// Mobile Menu
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
// Dark-Light Mode
const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode === "light") {
  body.classList.add("light");
  toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    return localStorage.setItem("mode", "light");
  } else {
    return localStorage.setItem("mode", "dark");
  }
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
