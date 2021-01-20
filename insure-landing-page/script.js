const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const navLinks = nav.querySelectorAll("a");

burger.addEventListener("click", handleBurger);
navLinks.forEach((link) => {
	link.addEventListener("click", handleBurger);
});

function handleBurger() {
	burger.classList.toggle("active");
	nav.classList.toggle("active");
	if (nav.classList.contains("active")) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "unset";
	}
}
