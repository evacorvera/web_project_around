//Tarjetas iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const gallery = document.querySelector(".gallery");

//Crear tarjeta nueva
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("gallery__card");
  card.innerHTML = `
    <button type="button" class="gallery__button-delete">
      <img src="./images/trash.png" alt="trash icon" class="gallery__icon-trash"/>
    </button>
    <img src="${data.link}" alt="${data.name}" class="gallery__image">
    <div class="gallery__content">
      <p class="gallery__paragraph">${data.name}</p>
      <button type="button" class="gallery__button-like">❤</button>
    </div>
  `;
  return card;
}

//Renderizar tarjetas iniciales
initialCards.forEach((item) => {
  const card = createCard(item);
  gallery.append(card);
});

//Popup editar perfil
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


//Popup añadir lugar
const openBtnAdd = document.querySelector(".main__button_add");
const popupAdd = document.querySelector(".popup-add");
const closeBtnAdd = document.querySelector(".popup-add__button_close");
const formAdd = document.querySelector(".popup-add__container");
const inputTitleAdd = document.querySelector(".popup-add__input_name");
const inputLinkAdd = document.querySelector(".popup-add__input_about");

openBtnAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup-add_opened");
});

closeBtnAdd.addEventListener("click", () => {
  popupAdd.classList.remove("popup-add_opened");
});

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCard = createCard({
    name: inputTitleAdd.value,
    link: inputLinkAdd.value
  });

  gallery.prepend(newCard);

  formAdd.reset();
  popupAdd.classList.remove("popup-add_opened");
});


//Like buttons
gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__button-like")) {
    e.target.classList.toggle("active");
  }
});


//Delete buttons
gallery.addEventListener("click", (e) => {
  if (e.target.closest(".gallery__button-delete")) {
    const card = e.target.closest(".gallery__card");
    card.remove();
  }
});


//Popup vista previa de imagen
const popupImage = document.querySelector(".popup__image");
const popupImagePhoto = popupImage.querySelector(".popup__image-photo");
const popupImageCaption = popupImage.querySelector(".popup__image-caption");
const popupImageClose = popupImage.querySelector(".popup__image-close");

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__image")) {
    popupImage.classList.add("popup__image_opened");
    popupImagePhoto.src = e.target.src;
    popupImagePhoto.alt = e.target.alt;
    popupImageCaption.textContent = e.target.alt;
  }
});

popupImageClose.addEventListener("click", () => {
  popupImage.classList.remove("popup__image_opened");
});