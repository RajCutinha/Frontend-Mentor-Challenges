const notifyForm = document.querySelector(".notify form");
const notifyInput = document.querySelector(".notify div input");

notifyForm.addEventListener("submit", (e) => {
  if (validateEmail(notifyInput.value)) {
    notifyInput.className = "success";
    notifyInput.nextElementSibling.className = "";
  } else {
    notifyInput.className = "failed";
    notifyInput.nextElementSibling.className = "failed";
  }

  e.preventDefault();
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
