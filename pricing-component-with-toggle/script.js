const toggle = document.getElementById("price-toggle");
const cardPrice = document.querySelectorAll(
	".cards .card .card-container h1:first-of-type"
);

toggle.addEventListener("change", () => {
	if (toggle.checked) {
		cardPrice.forEach((price) => {
			price.classList.remove("show");
			price.nextElementSibling.classList.add("show");
		});
	} else {
		cardPrice.forEach((price) => {
			price.classList.add("show");
			price.nextElementSibling.classList.remove("show");
		});
	}
});
