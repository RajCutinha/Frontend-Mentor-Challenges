const sliderButtons = document.querySelectorAll(".slider-buttons button");
const quotes = document.querySelectorAll(".silder-quote div");
const imgs = document.querySelectorAll(".slider-img .slider-container img");

let index = 0;

sliderButtons.forEach((button) =>
	button.addEventListener("click", handleSlider)
);

function handleSlider(e) {
	if (e.srcElement.dataset.direction === "next") {
		index++;
		if (index === quotes.length) {
			index = 0;
		}
		quotes.forEach((quote) => {
			quote.classList.remove("active");
		});
		imgs.forEach((img) => {
			img.classList.remove("active");
		});
		quotes[index].classList.add("active");
		imgs[index].classList.add("active");
	} else {
		index--;
		if (index === -1) {
			index = quotes.length - 1;
		}
		quotes.forEach((quote) => {
			quote.classList.remove("active");
		});
		imgs.forEach((img) => {
			img.classList.remove("active");
		});
		quotes[index].classList.add("active");
		imgs[index].classList.add("active");
	}
	console.dir(e.srcElement.dataset.direction);
}

console.log(imgs);
