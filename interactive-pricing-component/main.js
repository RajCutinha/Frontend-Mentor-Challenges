const rangeValue = document.getElementById("price");
const amount = document.getElementById("amount");

amount.innerText = "$" + rangeValue.value + ".00";

function setRangeBackground() {
  rangeValue.style.background =
    "linear-gradient(90deg, var(--strong-cyan) " +
    (((rangeValue.value / 30) * 100).toFixed() - 1) +
    "%" +
    ", var(--light-grayish-blue) " +
    (((100 % (rangeValue.value / 30)) * 100).toFixed() - 1) +
    "%" +
    ")";
}

rangeValue.addEventListener("input", () => {
  amount.innerText = "$" + rangeValue.value + ".00";
  setRangeBackground();
});

setRangeBackground();
