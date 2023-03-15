"use strict";

const app = () => {
  const iconBurgerMenu = document.querySelector(".nav__menuicon--burger");
  const iconCloseMenu = document.querySelector(".nav__menuicon--close");
  const navLinks = document.querySelector(".nav__links");
  const heroBGColor = document.querySelector(".hero__backgroundcolor");

  // Body //
  // disable scroll on body
  const disableScroll = () => {
    document.body.classList.add("stopscroll");
    return;
  };
  // enable scroll on body
  const enableScroll = () => {
    document.body.classList.remove("stopscroll");
    return;
  };

  // Hero //
  // add hero bg color
  const addHeroBgColor = () => {
    heroBGColor.classList.add("hero__backgroundcolor-active");
    return;
  };
  // remove hero bg color
  const removeHeroBgColor = () => {
    heroBGColor.classList.remove("hero__backgroundcolor-active");
    return;
  };
  // Nav //
  // nav burger icon
  const showBurgerMenu = () => {
    if (iconBurgerMenu.classList.contains("nav__menuicon--hidden")) {
      iconBurgerMenu.classList.remove("nav__menuicon--hidden");
    }
    return;
  };
  const hideBurgerMenu = () => {
    iconBurgerMenu.classList.add("nav__menuicon--hidden");
    return;
  };

  // nav close icon
  const showCloseMenu = () => {
    if (iconCloseMenu.classList.contains("nav__menuicon--hidden")) {
      iconCloseMenu.classList.remove("nav__menuicon--hidden");
    }
    return;
  };
  const hideCloseMenu = () => {
    iconCloseMenu.classList.add("nav__menuicon--hidden");
    return;
  };

  // nav links
  const showNavLinks = () => {
    navLinks.classList.add("nav__links--active");
    addHeroBgColor();
    disableScroll();
    return;
  };
  const hideNavLinks = () => {
    if (navLinks.classList.contains("nav__links--active")) {
      navLinks.classList.remove("nav__links--active");
      removeHeroBgColor();
      enableScroll();
    }
    return;
  };

  // nav click functions
  const handleBurgerClick = () => {
    showNavLinks();
    hideBurgerMenu();
    showCloseMenu();
  };
  const handleCloseClick = () => {
    hideNavLinks();
    hideCloseMenu();
    showBurgerMenu();
  };

  // nav event listeners
  iconBurgerMenu.addEventListener("click", handleBurgerClick);
  iconCloseMenu.addEventListener("click", handleCloseClick);
};

app();
