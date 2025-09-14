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


// === POPUP NUEVO LUGAR ===
const openBtnAdd = document.querySelector(".main__button_add");
const popupAdd = document.querySelector(".popup-add");
const closeBtnAdd = document.querySelector(".popup-add__button_close");
const formAdd = document.querySelector(".popup-add__container");
const inputTitleAdd = document.querySelector(".popup-add__input_name");
const inputLinkAdd = document.querySelector(".popup-add__input_about");

const gallery = document.querySelector(".gallery");

openBtnAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup-add_opened");
});

closeBtnAdd.addEventListener("click", () => {
  popupAdd.classList.remove("popup-add_opened");
});

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  // crear nueva tarjeta
  const newCard = document.createElement("div");
  newCard.classList.add("gallery__card");
  newCard.innerHTML = `
    <img src="${inputLinkAdd.value}" alt="${inputTitleAdd.value}" class="gallery__image">
    <div class="gallery__content">
    <button type="button" class="gallery__button-delete">
    <img src="./images/trash.png" alt="trash icon" class="gallery__icon-trash"/></button>
      <p class="gallery__paragraph">${inputTitleAdd.value}</p>
      <button type="button" class="gallery__button-like">❤
      </button>
    </div>
  `;

  // agregar al inicio de la galería
  gallery.prepend(newCard);

  // limpiar inputs y cerrar popup
  formAdd.reset();
  popupAdd.classList.remove("popup-add_opened");
});

//like button
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__button-like")) {
    e.target.classList.toggle("active");
  }
});

//delete buttons
gallery.addEventListener("click", (e) => {
  if (e.target.closest(".gallery__button-delete")) {
    const card = e.target.closest(".gallery__card");
    card.remove();
  }
});