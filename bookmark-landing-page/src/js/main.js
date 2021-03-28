const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");
const featureButtons = document.querySelectorAll(
  ".features .row button:not(.btn)"
);
const featureContent = document.querySelectorAll(".tab-container .row");
const question = document.querySelectorAll(".question");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
});

question.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      question.forEach((question) => question.classList.remove("active"));
      this.classList.toggle("active");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
  });
});

featureButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const index = +this.dataset.index;
    featureButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    featureContent.forEach((content) => content.classList.remove("active"));
    featureContent[index].classList.add("active");
  });
});
