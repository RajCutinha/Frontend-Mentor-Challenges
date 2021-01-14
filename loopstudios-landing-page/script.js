const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", (e) => {
	e.target.classList.toggle("active");
	nav.classList.toggle("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		burger.classList.toggle("active");
		nav.classList.toggle("active");
	});
});
