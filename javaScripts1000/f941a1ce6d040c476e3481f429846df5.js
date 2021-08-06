/* eslint-disable */
(function () {
  function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // Cors issue with setting fixed BaseURI for request
  // let navigationContextRequestURL = "https://smiledirectclub.com";
  let navigationContextRequestURL = window.location.origin;

  if (ENVIRONMENT === "local") {
    navigationContextRequestURL = "http://www.localsdc.com:8000";
  }


  function load_personalized_navbar() {
    // console.log('load_personalized_navbar !!---------------');
    const nav = document.getElementById("nav-container");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) {
      // console.log(e);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);
        nav.innerHTML = xhr.responseText;
        // response text can remove the "stuck" class after the response, check again here
        handleScroll();
      }
    };
    const pageId = nav.getAttribute("data-page-id") || 0;
    const localePrefix =
      window.language.code === "en-us" ? "" : `/${window.language.code}`;
    const navbarUrl = `${navigationContextRequestURL}${localePrefix}/sdc_cms/personalized-navbar/?page_id=${pageId}`;
    console.log(`navbarUrl: ${navbarUrl}`);
    console.log("#### LANGUAGE CODE ####");
    console.log(window.language.code);
    console.log("#### DJANGO LANGUAGE COOKIE ####");
    console.log(getCookie("django_language"));
    console.log("#### COUNTRY CODE COOKIE ####");
    console.log(getCookie("country_code"));
    xhr.open("GET", navbarUrl, true);
    xhr.setRequestHeader("Content-type", "text/html");
    xhr.send();
  }

  load_personalized_navbar();

  // duplicate local function here from navbar.js to fix race condition between the class adding "stuck" being removed by the response
  const $window = $(window);
  // could use timeouts here if this creates performance issues
  $window.on("scroll", handleScroll);
  // $window.on('resize', measureFirstSection);
  // handle "collapsing" of navbar
  function handleScroll() {
    const $stickyNavs = $(".v3-navbar.sticky, .MobileNavbar.is-sticky");
    const stickyBreakpoint = $stickyDesktopNav.outerHeight();
    const currentScroll = window.scrollY || window.pageYOffset; // IE fix

    if (currentScroll > stickyBreakpoint) {
      $stickyNavs.addClass("stuck");
    } else {
      if ($stickyNavs.hasClass("stuck")) {
        $(".patient-portal-nav-desktop .dropdown").removeClass("open");
      }
      $stickyNavs.removeClass("stuck");
    }
  }
})();
