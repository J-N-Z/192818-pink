(function() {
  var menu = document.querySelector(".main-menu"),
      menuSwitcher = document.querySelector(".main-menu__switcher");

  menu.classList.remove("main-menu--active");

  menuSwitcher.addEventListener("click", function() {
    menu.classList.toggle("main-menu--active");
  });
})();
