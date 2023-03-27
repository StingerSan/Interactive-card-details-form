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
inputCardName.addEventListener("input", addCardName);

//Functions//

function addCardName(e) {
  cardName.textContent = e.target.value;
  if (e.target.value === "") {
    cardName.textContent = defaultCardName;
  }
}

function addCardNumber(e) {
  cardNumber.textContent = e.target.value;
}
