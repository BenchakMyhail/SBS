
//--------------Burger menu--------------------
const mainWrapper = document.querySelector(".header-section");
const burgerBtn = mainWrapper.querySelector('.menu-burger');
const btnContactUs = mainWrapper.querySelector(".header-section__btn");
const burgerBtnTitle = mainWrapper.querySelector(".menu-burger__title");
const navList = mainWrapper.querySelector(".header-section__nav");

burgerBtn.addEventListener('click',(e) =>  {
  burgerBtn.classList.toggle("active");
  btnContactUs.classList.toggle("active");
  burgerBtnTitle.classList.toggle("active");
  navList.classList.toggle("active");
});
