(function ($, Drupal) {

  // Function to remove class enabled to allows data load when is customer.
  const removeDisableState = function (classElements) {
    (classElements).forEach( classElement => {
      const classToRemove = `.${classElement}`;
      document.querySelectorAll(classToRemove).forEach(elem => {
        elem.classList.remove(classElement);
      });
    });
  }

  // funrction to hide spinner
  const removeSpinner = function () {
    document.querySelectorAll('.spinner').forEach(elem => {
      elem.style.display = "none";
    });
  }

  /**
  * Behavior to change data-attributes to content if the user is a customer
  * This bejavior only change data-attributes of lins using parapgrah--ok-link and paragraph--ok-button
  */
  Drupal.behaviors.openbankContentSegmentationElementsCheck = {
    attach: function (context, settings) {
      // Function to change content for customer user using data-attributes
      function checkAttribute(elem, attributes) {
        (attributes).forEach(attr => {
          const dataAttribute = `data-button-customer-${attr}`;
          if (elem.getAttribute(dataAttribute)) {
            const elemAttr = elem.getAttribute(dataAttribute);
            elem[attr] = ''
            switch (attr) {
              case 'classList':
                elem.classList.add("button", "ok-paragraph-button", elemAttr)
                break;
              case 'href':
                elem.href = elemAttr;
              case 'innerText':
                elem.innerText = elemAttr;
              default:
                break;
            }
          }
        })
      }
      // Segmentation to change attributes button
      function contentButtonCheck(elemScope) {
        document.querySelectorAll('.ok-paragraph-button', elemScope).forEach(button => {
          checkAttribute(button, ['classList', 'href', 'innerText']);
        });
      }
      // Segmentation to change attributes link
      function contentLinkCheck(elemScope) {
        document.querySelectorAll('.ok-paragraph-link', elemScope).forEach(link => {
          checkAttribute(link, ['href', 'innerText']);
        });
      }

      if (okApp.isCustomer()) {
        contentButtonCheck();
        contentLinkCheck();
        removeSpinner();
        removeDisableState(['ok-paragraph-link--disabled','ok-paragraph-button--disabled']);
      }
      else { // When is NOT a customer we remove immediately all styles about spinners.
        removeSpinner();
        removeDisableState(['ok-paragraph-link--disabled','ok-paragraph-button--disabled']);
      }
    }
  }


  /**
* Behavior to display components that depends if the flag "visible para clientes" is on
* and always shows the component for prospects.
*/
  Drupal.behaviors.openbankUserVisibilityContent = {
    attach: function (context, settings) {
      // Segmentation to show content
      function contentVisibilityCheck(elemScope) {
        $('[data-segment-only-prospect]', elemScope).each(function () {
          var userSegment = okApp.isCustomer();
          var contentVisibility = parseInt($(this).attr('data-segment-only-prospect'));
          if (userSegment && contentVisibility === 1) {
            $(this).addClass('show');
          }
          else if (!userSegment) {
            $(this).addClass('show');
          }
        });
      }
      contentVisibilityCheck();
    }
  };


})(jQuery, Drupal);
