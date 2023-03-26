// Preparw required card elements //
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
