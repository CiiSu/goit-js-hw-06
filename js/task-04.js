
let counterValue = 0;


const valueElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");


const increment = () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
};


incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
