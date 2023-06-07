const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close");
const btnOpenModal = document.querySelectorAll(".btn--active");
const cancel = document.querySelector(".cancel");

// MODAL WINDOW
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((open) => {
  open.addEventListener("click", openModal);
});
btnCloseModal.forEach((close) => {
  close.addEventListener("click", closeModal);
});
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

///////////////////////////
