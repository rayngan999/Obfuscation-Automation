let postalCodePlaceholder;

// @BHRIV
function updateUI() {
  const postalCodeInput = document.querySelector(".buy-now-postal-code");
  const postalCodeInputLabel = document.querySelector(
    "#buy-now-postal-code-label"
  );
  const buyNowWelcomeText = document.querySelector("#buy-now-welcome-text");

  postalCodeInput.setAttribute("placeholder", postalCodePlaceholder);
  postalCodeInputLabel.innerText = postalCodePlaceholder;

  buyNowWelcomeText.innerText = (window.gettext && window.interpolate) ?
    interpolate(gettext('Enter your %s to see if we serve your area.'), [postalCodePlaceholder]) : 
    "Enter your " + postalCodePlaceholder + " to see if we serve your area.";
}

// @BHRIV
function setUpPostalCodeLabels() {
  axios
    .get(`${window.endpoints.api.locationsAddressLabels}?fields=postal_code`)
    .then(({ data: { postal_code } }) => {
      postalCodePlaceholder = postal_code.toLowerCase();
    })
    .catch((e) => {
      postalCodePlaceholder = "zip code";
      console.error(`${e} happened in the calling of setUpPostalCodeLabels`);
      return e;
    })
    .finally(updateUI);
}
// original
// export const setUpPostalCodeLabels = () => axios
//   .get(`${window.endpoints.api.locationsAddressLabels}?fields=postal_code`)
//   .then(({ data: { postal_code } }) => {
//     postalCodePlaceholder = postal_code.toLowerCase();
//   })
//   .catch(e => {
//     postalCodePlaceholder = 'zip code';
//     console.error(`${e} happened in the calling of setUpPostalCodeLabels`);
//     return e;
//   })
//   .finally(updateUI);

// This now fires after readyState = complete. No need for the extra listener
setUpPostalCodeLabels();
// document.addEventListener("DOMContentLoaded", setUpPostalCodeLabels);
