const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn--close");
const btnOpenModal = document.querySelectorAll(".btn--active");
const cancel = document.querySelector(".cancel");
const btnOpenNav = document.querySelector(".nav-open-btn");
const mainNavLink = document.querySelectorAll(".main-nav-link");

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
// Navigation

btnOpenNav.addEventListener("click", function (e) {
  document.querySelector(".main-nav").classList.toggle("nav-open");
  if (btnOpenNav.classList.contains("fa-bars")) {
    btnOpenNav.classList.remove("fa-bars");
    btnOpenNav.classList.add("fa-xmark");
  } else {
    btnOpenNav.classList.add("fa-bars");
    btnOpenNav.classList.remove("fa-xmark");
  }
});
mainNavLink.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".main-nav").classList.remove("nav-open");
  });
});
