const modalWindowShadow = document.querySelector(".modalShadow");
const btnOpenModal = document.querySelector(".main_text_btn_order");
const modalWindowContent = document.querySelector(".modalContent");
const closeModelBtn = document.querySelector(".modalCloseBtn");

const openMenuBtn = document.querySelector(".menuBtn");
const navMenuPhoneModal = document.querySelector(".navMenuPhone");
const navMenuPhoneCloseBtn = document.querySelector(".mavMenuPhone_CloseBtn");

const navMenuPhoneBtnOpenModal = document.querySelector(
  ".navMenuPhone_btnOpenModal"
);

btnOpenModal.addEventListener("click", openModal);
modalWindowShadow.addEventListener("click", closeModal);
modalWindowContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
closeModelBtn.addEventListener("click", closeModal);

openMenuBtn.addEventListener("click", openModalPhoneNav);
navMenuPhoneCloseBtn.addEventListener("click", closeModalPhoneNav);
function openModal() {
  modalWindowShadow.classList.remove("modelClose");
}

function closeModal() {
  modalWindowShadow.classList.add("modelClose");
}

function openModalPhoneNav() {
  navMenuPhoneModal.classList.remove("modelClose");
}
function closeModalPhoneNav() {
  navMenuPhoneModal.classList.add("modelClose");
}
navMenuPhoneBtnOpenModal.addEventListener("click", () => {
  closeModalPhoneNav();
  openModal();
});
