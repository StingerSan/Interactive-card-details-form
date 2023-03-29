// Prepare required card elements //
const cardName = document.querySelector(".card__name");
const cardNumber = document.querySelector(".card__number");
const cardMonth = document.querySelector(".card__month");
const cardYear = document.querySelector(".card__year");
const cardCvc = document.querySelector(".card__cvc");

// Prepare required Card form elements//
const inputCardName = document.getElementById("card-name");
const inputCardNumber = document.getElementById("card-number");
const inputCardDate = document.querySelectorAll(
  "input.main-content__card-month, input.main-content__card-year"
);
const inputCardCvc = document.getElementById("card-cvc");
const confirmBtn = document.getElementById("confirm-btn");
const errorMessage = document.querySelectorAll(".error");

// Default values//
const defaultCardNumber = cardNumber.textContent;
const defaultCardName = cardName.textContent;
const defaultCardMonth = cardMonth.textContent;
const defaultCardYear = cardYear.textContent;
const defaultCardCvc = cardCvc.textContent;

//Prepare vent listeners//
inputCardNumber.addEventListener("input", addCardNumber);
inputCardName.addEventListener("change", addCardName);
inputCardName.addEventListener("keyup", addCardName);

//Functions//

function addCardName(e) {
  const regex = /[a-zA-Z]+/;
  const inputValue = e.target.value;
  if (regex.test(inputValue)) {
    inputCardName.classList.remove("user-data--active");
    errorMessage[0].classList.remove("error--active");
    cardName.textContent = inputValue;
  }
  if (inputValue === "") {
    inputCardName.classList.add("user-data--active");
    errorMessage[0].classList.add("error--active");
    cardName.textContent = defaultCardName;
  }
}

function addCardNumber(e) {
  const inputValue = e.target.value;
  cardNumber.textContent = inputValue.replace(/\d{4}(?=.)/g, "$& ");
  inputCardNumber.classList.remove("user-data--active");
  errorMessage[1].classList.remove("error--active");
  if (inputValue === "") {
    inputCardNumber.classList.add("user-data--active");
    errorMessage[1].classList.add("error--active");
    cardNumber.textContent = defaultCardNumber;
  }
}
