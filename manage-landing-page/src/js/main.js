// Variables
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonialsSlides = testimonialsContainer.querySelectorAll("div");
const pagination = document.querySelectorAll(".pagination div");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = nav.querySelectorAll("a");
const hero = document.querySelector(".hero");

let start = 0,
  drag = false,
  idx = 1,
  previousTrans = 0,
  transformValue = idx * testimonialsContainer.offsetWidth,
  ani;

// Functions
function touchStart(e) {
  testimonialsContainer.classList.add("grab");
  drag = true;
  start = getXvalues(e);
  ani = requestAnimationFrame(slideAni);
  e.preventDefault();
}

function touchMove(e) {
  if (drag) {
    transformValue = previousTrans + (start - getXvalues(e));
  }
}

function touchEnd() {
  testimonialsContainer.classList.remove("grab");
  drag = false;
  cancelAnimationFrame(slideAni);

  if (
    transformValue > previousTrans + 100 &&
    !(idx === testimonialsSlides.length - 1)
  )
    idx++;
  if (transformValue < previousTrans - 100 && !(idx === 0)) idx--;

  setValues();
}

function slide() {
  testimonialsSlides.forEach((slide) => {
    slide.style.transform = `translateX(-${transformValue}px)`;
  });
  pagination.forEach((page) => page.classList.remove("active"));
  pagination[idx].classList.add("active");
}

function getXvalues(e) {
  return e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
}

function setValues() {
  transformValue = idx * testimonialsContainer.clientWidth;
  previousTrans = transformValue;
  slide();
}

function slideAni() {
  slide();
  if (drag) requestAnimationFrame(slideAni);
}

function toggle() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("active");
  hero.classList.toggle("active");
}

links.forEach((link) => link.addEventListener("click", toggle));
burger.addEventListener("click", toggle);

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1050) {
    testimonialsContainer.addEventListener("touchstart", touchStart);
    testimonialsContainer.addEventListener("touchend", touchEnd);
    testimonialsContainer.addEventListener("touchmove", touchMove);

    testimonialsContainer.addEventListener("mousedown", touchStart);
    testimonialsContainer.addEventListener("mouseup", touchEnd);
    testimonialsContainer.addEventListener("mouseleave", touchEnd);
    testimonialsContainer.addEventListener("mousemove", touchMove);
    slide();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1050) {
    testimonialsContainer.addEventListener("touchstart", touchStart);
    testimonialsContainer.addEventListener("touchend", touchEnd);
    testimonialsContainer.addEventListener("touchmove", touchMove);

    testimonialsContainer.addEventListener("mousedown", touchStart);
    testimonialsContainer.addEventListener("mouseup", touchEnd);
    testimonialsContainer.addEventListener("mouseleave", touchEnd);
    testimonialsContainer.addEventListener("mousemove", touchMove);

    slide();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1050) {
    testimonialsSlides.forEach((slide) => {
      slide.style.transform = `unset`;
    });

    testimonialsContainer.removeEventListener("touchstart", touchStart);
    testimonialsContainer.removeEventListener("touchend", touchEnd);
    testimonialsContainer.removeEventListener("touchmove", touchMove);

    testimonialsContainer.removeEventListener("mousedown", touchStart);
    testimonialsContainer.removeEventListener("mouseup", touchEnd);
    testimonialsContainer.removeEventListener("mouseleave", touchEnd);
    testimonialsContainer.removeEventListener("mousemove", touchMove);
  }
});
