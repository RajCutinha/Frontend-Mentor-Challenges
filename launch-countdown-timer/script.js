const countdownDaysFront = document.querySelectorAll(".countdown-d .front");
const countdownDaysBack = document.querySelectorAll(".countdown-d .back");
const countdownHoursFront = document.querySelectorAll(".countdown-h .front");
const countdownHoursBack = document.querySelectorAll(".countdown-h .back");
const countdownMinsFront = document.querySelectorAll(".countdown-m .front");
const countdownMinsBack = document.querySelectorAll(".countdown-m .back");
const countdownSecFront = document.querySelectorAll(".countdown-s .front");
const countdownSecBack = document.querySelectorAll(".countdown-s .back");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const diffTime = {
		d: Math.floor(diff / 1000 / 60 / 60 / 24),
		h: Math.floor(diff / 1000 / 60 / 60) % 24,
		m: Math.floor(diff / 1000 / 60) % 60,
		s: Math.floor(diff / 1000) % 60,
	};

	const hour0 = countdownHoursFront[0]
		.getAttribute("data-digit-before")
		.startsWith("0")
		? countdownHoursFront[0].getAttribute("data-digit-before").charAt(1)
		: countdownHoursFront[0].getAttribute("data-digit-before");

	const min0 = countdownMinsFront[0]
		.getAttribute("data-digit-before")
		.startsWith("0")
		? countdownMinsFront[0].getAttribute("data-digit-before").charAt(1)
		: countdownMinsFront[0].getAttribute("data-digit-before");

	if (
		!(
			countdownDaysFront[0].getAttribute("data-digit-before") === diffTime.d
		) ||
		!(countdownDaysFront[1].innerText === diffTime.d)
	) {
		countdownSecFront[1].parentElement.addEventListener(
			"transitionend",
			function () {
				countdownDaysBack[0].setAttribute(
					"data-digit-after",
					diffTime.d < 10 ? "0" + diffTime.d : diffTime.d
				);
				countdownDaysBack[1].innerText =
					diffTime.d < 10 ? "0" + diffTime.d : diffTime.d;

				countdownDaysFront[0].setAttribute(
					"data-digit-before",
					diffTime.d < 10 ? "0" + diffTime.d : diffTime.d
				);
				countdownDaysFront[1].innerText =
					diffTime.d < 10 ? "0" + diffTime.d : diffTime.d;

				this.classList.remove("flipped");
			},
			{ once: true }
		);
		countdownDaysFront[1].parentElement.classList.add("flipped");
	}

	if (!(+hour0 === diffTime.h)) {
		countdownHoursFront[1].parentElement.addEventListener(
			"transitionend",
			function () {
				countdownHoursBack[0].setAttribute(
					"data-digit-after",
					diffTime.h < 10 ? "0" + diffTime.h : diffTime.h
				);
				countdownHoursBack[1].innerText =
					diffTime.h < 10 ? "0" + diffTime.h : diffTime.h;

				countdownHoursFront[0].setAttribute(
					"data-digit-before",
					diffTime.h < 10 ? "0" + diffTime.h : diffTime.h
				);
				countdownHoursFront[1].innerText =
					diffTime.h < 10 ? "0" + diffTime.h : diffTime.h;

				this.classList.remove("flipped");
			},
			{ once: true }
		);
		countdownHoursFront[1].parentElement.classList.add("flipped");
	}

	if (!(+min0 === diffTime.m)) {
		countdownMinsFront[1].parentElement.addEventListener(
			"transitionend",
			function () {
				countdownMinsBack[0].setAttribute(
					"data-digit-after",
					diffTime.m < 10 ? "0" + diffTime.m : diffTime.m
				);
				countdownMinsBack[1].innerText =
					diffTime.m < 10 ? "0" + diffTime.m : diffTime.m;

				countdownMinsFront[0].setAttribute(
					"data-digit-before",
					diffTime.m < 10 ? "0" + diffTime.m : diffTime.m
				);
				countdownMinsFront[1].innerText =
					diffTime.m < 10 ? "0" + diffTime.m : diffTime.m;

				this.classList.remove("flipped");
			},
			{ once: true }
		);
		countdownMinsFront[1].parentElement.classList.add("flipped");
	}

	if (
		!(
			countdownSecFront[0].getAttribute("data-digit-before") === diffTime.s
		) ||
		!(countdownSecFront[1].innerText === diffTime.s)
	) {
		countdownSecFront[1].parentElement.addEventListener(
			"transitionend",
			function () {
				countdownSecBack[0].setAttribute(
					"data-digit-after",
					diffTime.s < 10 ? "0" + diffTime.s : diffTime.s
				);
				countdownSecBack[1].innerText =
					diffTime.s < 10 ? "0" + diffTime.s : diffTime.s;

				countdownSecFront[0].setAttribute(
					"data-digit-before",
					diffTime.s < 10 ? "0" + diffTime.s : diffTime.s
				);
				countdownSecFront[1].innerText =
					diffTime.s < 10 ? "0" + diffTime.s : diffTime.s;

				this.classList.remove("flipped");
			},
			{ once: true }
		);
		countdownSecFront[1].parentElement.classList.add("flipped");
	}
}

setInterval(updateCountdown, 1000);
