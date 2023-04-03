// Prepare required card elements //
const cardName = document.querySelector(".card__name");
const cardNumber = document.querySelector(".card__number");
const cardMonth = document.querySelector(".card__month");
const cardYear = document.querySelector(".card__year");
const cardCvc = document.querySelector(".card__cvc");

// Prepare required Card form elements //
const cardInputDetails = document.getElementById("card-details");
const inputCardName = document.getElementById("card-name");
const inputCardNumber = document.getElementById("card-number");
const inputCardDate = document.querySelectorAll(
  "input.main-content__card-month, input.main-content__card-year"
);
const inputCardCvc = document.getElementById("card-cvc");
const confirmBtn = document.getElementById("confirm-btn");
const errorMessage = document.querySelectorAll(".error");

// Submited component //
const submitedPage = document.getElementById("submited-component");
const resetBtn = document.getElementById("reset-btn");

// Default card values //
const defaultCardNumber = cardNumber.textContent;
const defaultCardName = cardName.textContent;
const defaultCardMonth = cardMonth.textContent;
const defaultCardYear = cardYear.textContent;
const defaultCardCvc = cardCvc.textContent;

//Prepare vent listeners//
confirmBtn.addEventListener("click", submitCardInfo);
resetBtn.addEventListener("click", reset);
inputCardNumber.addEventListener("input", addCardNumber);
inputCardName.addEventListener("change", addCardName);
inputCardName.addEventListener("keyup", addCardName);
inputCardDate.forEach((input) => input.addEventListener("input", setExpDate));
inputCardCvc.addEventListener("input", setCvcNumber);

//Functions//

function addCardName(e) {
  const regex = /^[a-zA-Z ]+$/;
  const inputValue = e.target.value;
  if (regex.test(inputValue)) {
    cardName.textContent = inputValue;
  }
  if (inputValue === "") {
    cardName.textContent = defaultCardName;
  }
}

function addCardNumber(e) {
  const inputValue = e.target.value;
  cardNumber.textContent = inputValue.replace(/\d{4}(?=.)/g, "$& ");
  if (inputValue === "") {
    cardNumber.textContent = defaultCardNumber;
  }
}

function setExpDate(e) {
  const inputValue = e.target.value;
  const targetElement = e.target;
  if (targetElement === inputCardDate[0]) {
    cardMonth.textContent = inputValue;
  }
  if (targetElement === inputCardDate[1]) {
    cardYear.textContent = inputValue;
  }
  if (inputValue === "" && targetElement === inputCardDate[0]) {
    cardMonth.textContent = defaultCardMonth;
  }
  if (inputValue === "" && targetElement === inputCardDate[1]) {
    cardYear.textContent = defaultCardYear;
  }
}

function setCvcNumber(e) {
  const inputValue = e.target.value;
  cardCvc.textContent = inputValue.replace(/\d(?=\d)/g, "$& ");
  if (inputValue === "") {
    cardCvc.textContent = defaultCardCvc;
  }
}

function submitCardInfo(e) {
  e.preventDefault();
  if (inputCardName.value !== "") {
    inputCardName.classList.remove("user-data--active");
    errorMessage[0].classList.remove("error--active");
  } else {
    inputCardName.classList.add("user-data--active");
    errorMessage[0].classList.add("error--active");
  }

  if (inputCardNumber.value !== "") {
    inputCardNumber.classList.remove("user-data--active");
    errorMessage[1].classList.remove("error--active");
  } else {
    inputCardNumber.classList.add("user-data--active");
    errorMessage[1].classList.add("error--active");
  }

  if (inputCardDate[0].value !== "") {
    inputCardDate[0].classList.remove("user-data--active");
    errorMessage[2].classList.remove("error--active");
  } else {
    inputCardDate[0].classList.add("user-data--active");
    errorMessage[2].classList.add("error--active");
  }

  if (inputCardDate[1].value !== "") {
    inputCardDate[1].classList.remove("user-data--active");
    errorMessage[2].classList.remove("error--active");
  } else {
    inputCardDate[1].classList.add("user-data--active");
    errorMessage[2].classList.add("error--active");
  }

  if (inputCardCvc.value !== "") {
    inputCardCvc.classList.remove("user-data--active");
    errorMessage[3].classList.remove("error--active");
  } else {
    inputCardCvc.classList.add("user-data--active");
    errorMessage[3].classList.add("error--active");
  }

  if (
    inputCardName.value &&
    inputCardNumber.value &&
    inputCardNumber.value.length === 16 &&
    inputCardDate[0].value &&
    inputCardDate[1].value &&
    inputCardCvc.value
  ) {
    cardInputDetails.classList.add("main-content__form--active");
    submitedPage.classList.add("submited--active");
  }
}

function reset(e) {
  e.preventDefault();
  cardName.textContent = defaultCardName;
  cardNumber.textContent = defaultCardNumber;
  cardMonth.textContent = defaultCardMonth;
  cardYear.textContent = defaultCardYear;
  cardCvc.textContent = defaultCardCvc;
  inputCardName.value = "";
  inputCardNumber.value = "";
  inputCardNumber.value = "";
  inputCardDate[0].value = "";
  inputCardDate[1].value = "";
  inputCardCvc.value = "";
  cardInputDetails.classList.remove("main-content__form--active");
  submitedPage.classList.remove("submited--active");
}
