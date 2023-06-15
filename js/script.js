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
    btnOpenNav.classList.add("fa-bars");
    btnOpenNav.classList.remove("fa-xmark");
  });
});

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (
      e.target.classList.contains("main-nav-link") &&
      !e.target.classList.contains("btn")
    ) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

///Slider

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const maxSlide = slides.length;
  let curSlide = 0;
  let time = 5000;
  let intervalId;

  // Changing slide
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  //Previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  //Time slide
  function slideIntervalStart() {
    intervalId = setInterval(() => {
      nextSlide();
    }, time);
  }
  function slideIntervalStop() {
    clearInterval(intervalId);
  }
  document
    .querySelector(".slider")
    .addEventListener("mouseover", slideIntervalStop);
  document
    .querySelector(".slider")
    .addEventListener("mouseout", slideIntervalStart);

  const init = function () {
    goToSlide(0);
    slideIntervalStart();
  };
  init();
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};
slider();
