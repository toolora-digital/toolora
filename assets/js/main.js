```javascript
/* =====================================================
   TOOLORA — GLOBAL JAVASCRIPT
   Mobile Navigation & Global UI
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MOBILE NAVIGATION
     ===================================================== */

  const mobileMenuToggle =
    document.querySelector(".mobile-menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  const navActions =
    document.querySelector(".nav-actions");


  /* Stop if this page doesn't have mobile navigation */

  if (!mobileMenuToggle || !navLinks) {
    return;
  }


  /* =====================================================
     OPEN / CLOSE MENU
     ===================================================== */

  mobileMenuToggle.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("mobile-menu-open");


    /* Keep CTA in sync with menu */

    if (navActions) {
      navActions.classList.toggle(
        "mobile-menu-open",
        isOpen
      );
    }


    /* Accessibility */

    mobileMenuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  /* =====================================================
     CLOSE MENU WHEN NAV LINK IS CLICKED
     ===================================================== */

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove(
        "mobile-menu-open"
      );


      if (navActions) {
        navActions.classList.remove(
          "mobile-menu-open"
        );
      }


      mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  /* =====================================================
     CLOSE MENU WITH ESCAPE KEY
     ===================================================== */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      navLinks.classList.remove(
        "mobile-menu-open"
      );


      if (navActions) {
        navActions.classList.remove(
          "mobile-menu-open"
        );
      }


      mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  /* =====================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
     ===================================================== */

  document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
      event.target.closest(".navbar");


    if (!clickedInsideNavbar) {

      navLinks.classList.remove(
        "mobile-menu-open"
      );


      if (navActions) {
        navActions.classList.remove(
          "mobile-menu-open"
        );
      }


      mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

});
```
