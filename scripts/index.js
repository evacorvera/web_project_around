const openBtn = document.querySelector(".main__button_edit");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__button_close");
const form = document.querySelector(".popup__container");
const inputName = document.querySelector(".popup__input_name");
const inputAbout = document.querySelector(".popup__input_about");

const profileName = document.querySelector(".main__paragraph_name");
const profileAbout = document.querySelector(".main__paragraph_about");

openBtn.addEventListener("click", () => {
  popup.classList.add("popup_opened");

inputName.value = profileName.textContent;
inputAbout.value = profileAbout.textContent;
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  popup.classList.remove("popup_opened");
});