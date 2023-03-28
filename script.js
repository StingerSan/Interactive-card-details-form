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
inputCardNumber.addEventListener("keyup", addCardNumber);
inputCardName.addEventListener("change", addCardName);
inputCardName.addEventListener("keyup", addCardName);

//Functions//

function addCardName(e) {
  const regex = /^[A-Za-z]{0,30}(\s[A-Za-z]{0,30})?$/;
  const inputValue = e.target.value;
  if (regex.test(inputValue)) {
    cardName.textContent = inputValue;
  }
  if (inputValue === "") {
    cardName.textContent = defaultCardName;
  }
}

function addCardNumber(e) {
  cardNumber.textContent = e.target.value;
}
