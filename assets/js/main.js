document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".nav-links");

  if (!button || !menu) {
    alert("NAV ELEMENT NOT FOUND");
    return;
  }

  button.addEventListener("click", function () {

    menu.classList.toggle("mobile-menu-open");

    if (menu.classList.contains("mobile-menu-open")) {
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("aria-expanded", "false");
    }

  });

});
