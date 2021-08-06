(function () {
  const $body = $("body");

  const closeMobileNav = () => {
    $(".MobileNav").removeClass("is-open");
    $body.removeClass("nav-open");
    $(".MobileNav-overlay").remove();
  };

  const openMobileNav = () => {
    $(".MobileNav").addClass("is-open");
    $body.addClass("nav-open");

    const $overlay = $('<div class="MobileNav-overlay" />');
    $body.append($overlay);

    $overlay.on("click", (event) => {
      event.stopPropagation();
      closeMobileNav();
    });

    $(document).keyup((event) => {
      if (event.key === "Escape") {
        closeMobileNav();
      }
    });
  };

  // Open the mobile nav
  $body.on("click", ".js-mobileNavToggle", openMobileNav);

  // Close the mobile nav
  $body.on("click", ".js-mobileNavClose", closeMobileNav);
})();
