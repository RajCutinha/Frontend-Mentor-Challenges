const switchBtn = document.querySelector(".darkmode input");

switchBtn.addEventListener("change", () => {
  if (document.documentElement.hasAttribute("data-theme")) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkmode") === null) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

function setDarkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("darkmode", true);
  switchBtn.checked = true;
}

function setLightMode() {
  document.documentElement.removeAttribute("data-theme");
  localStorage.removeItem("darkmode");
  switchBtn.checked = false;
}
