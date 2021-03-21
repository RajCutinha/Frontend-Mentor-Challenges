const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const parentLinks = document.querySelectorAll("nav > ul > li > a");
const subLinks = document.querySelectorAll("ul li ul li a");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

parentLinks.forEach((link) => {
  link.addEventListener("click", function () {
    parentLinks.forEach((link) =>
      link.parentElement.classList.remove("active")
    );
    this.parentElement.classList.add("active");
  });
});

subLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    parentLinks.forEach((link) =>
      link.parentElement.classList.remove("active")
    );
  });
});
