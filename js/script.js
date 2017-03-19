(function() {
  var menuList = document.querySelector(".main-menu__list"),
      menuSwitcher = document.querySelector(".main-menu__switcher");

  menuList.classList.remove("main-menu__list--active");
  menuSwitcher.classList.remove("main-menu__switcher--active");

  menuSwitcher.addEventListener("click", function() {
    menuList.classList.toggle("main-menu__list--active");
    menuSwitcher.classList.toggle("main-menu__switcher--active");
  });
})();
