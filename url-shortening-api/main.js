const form = document.getElementById("url-shorter");
const urlInput = form.querySelector("input[type='text']");
const linksBox = document.getElementById("links-box");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const navLinks = nav.querySelectorAll("a");

linksBox.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn")) {
		const textEl = document.createElement("textarea");
		textEl.value = e.target.previousElementSibling.innerText;
		document.body.appendChild(textEl);
		textEl.select();
		document.execCommand("copy");
		document.body.removeChild(textEl);
		e.target.innerText = "Copied!";
		e.target.classList.add("btn-active");
		setTimeout(() => {
			e.target.innerText = "Copy";
			e.target.classList.remove("btn-active");
		}, 2000);
	}
});

navLinks.forEach((link) => link.addEventListener("click", handleNavClick));

form.addEventListener("submit", (e) => {
	e.preventDefault();
	handleRequest(urlInput.value);
});

burger.addEventListener("click", (e) => {
	handleNavClick();
});

function handleNavClick() {
	burger.classList.toggle("active");
	nav.classList.toggle("active");
}

async function handleRequest(url) {
	const req = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
	const data = await req.json();
	outputLink(url, data);
}

function outputLink(url, { result: { full_short_link2: shortLink } }) {
	const linkBox = document.createElement("div");
	linkBox.innerHTML = `
      <p>${url}</p>
      <a href="${shortLink}" target="_blank">${shortLink}</a>
      <button class="btn">Copy</button>`;
	linksBox.appendChild(linkBox);
}
