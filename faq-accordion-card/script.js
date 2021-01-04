const faq = document.querySelector(".faq-container");
const questions = document.querySelectorAll(".question");

function setFAQ(e) {
	if (e.target.classList.contains("active")) {
		e.target.classList.remove("active");
	} else {
		questions.forEach((question) => question.classList.remove("active"));
		e.target.classList.add("active");
	}
}

faq.addEventListener("click", setFAQ);
