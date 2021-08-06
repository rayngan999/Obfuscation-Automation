((document) => {
  // See the core.location.middleware.CountryCodeMiddleware for correct values
  const SHOW_CHOOSER_COOKIE = "show_country_chooser";
  const COUNTRY_CHOICE_PARAM = "country-chooser-choice";
  const COUNTRY_REDIRECT_PARAM = "country-redirect";
  const countryChangeMask = document.getElementById("country_change_mask");
  const countryChangeModal = document.getElementById("country_change_modal");
  const countryChooserMask = document.getElementById("country_chooser_mask");
  const countryChooserModal = document.getElementById("country_chooser_modal");
  const buttonClass = "jsCountryChooserButton";

  const showCountryChangeModal = () => {
    // Reveals the country chooser by removing the 'hidden' class
    if (countryChangeMask) {
      countryChangeMask.classList.remove("hidden");
    }
  };

  const showCountryChooserModal = () => {
    // Reveals the country chooser by removing the 'hidden' class
    if (countryChooserMask) {
      countryChooserMask.classList.remove("hidden");
      const scrollY = document.documentElement.style.getPropertyValue(
        "--scroll-y"
      );
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}`;
    }
  };

  const hideCountryChangeModal = () => {
    // Hides the country change modal by adding the 'hidden' class
    if (countryChangeMask) {
      countryChangeMask.classList.add("hidden");
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };

  const hideCountryChooserModal = () => {
    // Hides the country chooser by adding the 'hidden' class
    if (countryChooserMask) {
      countryChooserMask.classList.add("hidden");
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };

  const toggleContinentDropdown = (continentDropdownButton) => {
    const dropdownElements = continentDropdownButton.nextElementSibling;
    $(dropdownElements).slideToggle();

    const arrowIcons = continentDropdownButton.querySelectorAll(".fa");
    arrowIcons.forEach((arrowIcon) => arrowIcon.classList.toggle("hidden"));
  };

  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });

  const continentDropdownMobileHandler = (evt) => {
    console.error("toggling mobile menus...");
    const continentDropdownButton = evt.target.closest(
      ".mobile-continent-dropdown-button"
    );
    if (continentDropdownButton) {
      evt.preventDefault();
      toggleContinentDropdown(continentDropdownButton);
    }
  };

  const countryChangeModalHandler = (evt) => {
    if (evt.target.matches(".js-close-btn")) {
      evt.preventDefault();
      hideCountryChangeModal();
    }
  };

  const countryChooserModalHandler = (evt) => {
    // Handles a country/locale choice click
    if (evt.target.matches(".js-close-btn")) {
      evt.preventDefault();
      hideCountryChooserModal();
    } else if (evt.target.matches("a")) {
      evt.preventDefault();
      window.location = evt.target.href;
    }
  };

  const countryChooserButtonHandler = (evt) => {
    // Handles the country chooser button click
    const parent = evt.target.parentElement;
    if (parent && parent.classList.contains(buttonClass)) {
      evt.preventDefault();
      showCountryChooserModal();
    }
  };

  // NOTE: This was originally in a DOMContentReady event handler. However
  // SDC would prefer this run as soon as it is able, so, this MUST be loaded
  // AFTER the template tags `country_chooser_modal`, `country_change_modal`
  // and `country_chooser_button` (which is in the footer of the page).
  document.addEventListener("click", countryChooserButtonHandler);

  if (countryChooserModal) {
    countryChooserModal.addEventListener("click", countryChooserModalHandler);
    countryChooserModal.addEventListener(
      "click",
      continentDropdownMobileHandler
    );
  }

  if (countryChangeModal) {
    countryChangeModal.addEventListener("click", countryChangeModalHandler);
  }

  // If we have a cookie: show_country_chooser, show the chooser, and
  // delete the cookie. Note: The value of the cookie, if it exists at all,
  // is the domain it was set upon.
  const getCookie = (cname) => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const cookieDomain = getCookie(SHOW_CHOOSER_COOKIE);
  if (cookieDomain) {
    showCountryChooserModal();
    document.cookie = `${SHOW_CHOOSER_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${cookieDomain}`;
  }

  // If we have the COUNTRY_REDIRECT_PARAM on the URL, just display the
  // country_change_modal. NOTE: IT HAS ALREADY BEEN POPULATED WITH A
  // DJANGO TEMPLATETAG we just display it.
  const currentUrl = new URL(window.location.href);
  if (countryChangeModal && currentUrl.searchParams.has(COUNTRY_REDIRECT_PARAM)) {
    // Hide as requested by UX
    //showCountryChangeModal();
  }

  // Visually cleans up the URL if it has the 'country-chooser-choice=...',
  // or 'country-change=...' remove it from the URL and replace state.
  if (
    currentUrl.searchParams.has(COUNTRY_CHOICE_PARAM) ||
    currentUrl.searchParams.has(COUNTRY_REDIRECT_PARAM)
  ) {
    currentUrl.searchParams.delete(COUNTRY_CHOICE_PARAM);
    currentUrl.searchParams.delete(COUNTRY_REDIRECT_PARAM);
    window.history.replaceState(null, null, currentUrl.toString());
  }
})(document);
