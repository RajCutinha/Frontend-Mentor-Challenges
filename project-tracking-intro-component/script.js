const burger = document.querySelector(".burger");
const menu = document.querySelector("ul");
const links = document.querySelectorAll("ul li a");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		burger.classList.remove("active");
		menu.classList.remove("active");
	});
});
