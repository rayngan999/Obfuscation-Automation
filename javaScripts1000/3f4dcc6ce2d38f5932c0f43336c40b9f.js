class ArrayUtils {
  static includes(array, key) {
    return array.indexOf(key) !== -1;
  }
}

/**
 * Set event for dynamically added elements (Analog to jQuery event delegation)
 * @param parentSelector {Object}
 * @param event {String}
 * @param selector {String}
 * @param handler {Function}
 */
const delegate = (parentSelector, event, selector, handler) => {
  const parentElement = document.querySelector(parentSelector);
  parentElement.addEventListener(event, e => {
    const possibleTargets = parentElement.querySelectorAll(selector);
    const { target } = e;
    for (let i = 0; i < possibleTargets.length; i += 1) {
      let element = target;
      const possibleTarget = possibleTargets[i];
      while (element && element !== parentElement) {
        if (element === possibleTarget) {
          return handler.call(possibleTarget, e);
        }
        element = element.parentNode;
      }
    }
  });
};

class PersistingAttributesDataManager {
  constructor() {
    this._allowedAttributes = ['email', 'firstName', 'lastName', 'phone', 'postalCode'];
    this._dataAtrribute = 'data-pa';
    this._dataForm = 'data-pa-form';
    this._dataNoSetAtrribute = 'data-pa-no-set';
    this._dataNoStoreAtrribute = 'data-pa-no-store';
    this._forms = [];
    this._localStorageKey = 'PersistingAttributes';
    // Initiate data retrieval process to make sure it is in sync with server
    this._data = this._getData();
  }

  /**
   * Throw error if attribute is not among allowed attributes
   * @param name {String}
   * @private
   */
  _checkAttribute(name) {
    if (! ArrayUtils.includes(this._allowedAttributes, name)) {
      throw new Error(`Attribute with name "${name}" is not allowed.`);
    }
  }

  /**
   * Get attribute value from data object by name
   * @param name {String}
   * @returns {Promise<*>}
   * @private
   */
  _getAttribute(name) {
    return (async () => {
      this._checkAttribute(name);
      const data = await this._data;
      return data[name];
    })();
  }

  /**
   * Get data object from localStorage or sync with server data if it's unsynced
   * @returns {Promise<Object>}
   * @private
   */
  async _getData() {
    let data = this._getLocalStorageData();
    if (! data._synced) {
      const response = await fetch(window.endpoints.api.persistingAttributes);
      if (response.ok) {
        const serverData = await response.json();
        this._syncData(serverData);
        data = this._getLocalStorageData();
      } else {
        throw new Error('Failed to retrieve data from server.');
      }
    }
    return data;
  }

  /**
   * Get data object from localStorage or generate empty unsynced data object if it's empty
   * @returns {Object}
   * @private
   */
  _getLocalStorageData() {
    const stringifiedData = window.localStorage.getItem(this._localStorageKey);
    let data = JSON.parse(stringifiedData);
    if (! data) {
      data = {};
      this._allowedAttributes.forEach(attribute => {
        data[attribute] = null;
      });
      data._synced = false;
    }
    return data;
  }

  /**
   * Set attribute value to data object and update localStorage
   * @param name {String}
   * @param value {Any}
   * @private
   */
  _setAttribute(name, value) {
    this._checkAttribute(name);
    const data = this._getLocalStorageData();
    data[name] = value;
    this._setLocalStorageData(data);
  }

  /**
   * Set data object to localStorage
   * @param data {Object}
   * @private
   */
  _setLocalStorageData(data) {
    const stringifiedData = JSON.stringify(data);
    return window.localStorage.setItem(this._localStorageKey, stringifiedData);
  }

  /**
   * Fill empty attributes of localStorage data with relevant data attributes from the server
   * @param serverData {Object}
   * @private
   */
  _syncData(serverData) {
    const storageData = this._getLocalStorageData();
    this._allowedAttributes.forEach(attribute => {
      if (storageData[attribute] === null) {
        storageData[attribute] = serverData[attribute];
      }
    });
    storageData._synced = true;
    this._setLocalStorageData(storageData);
  }

  /**
   * Add "data-pa-no-set" attribute to field
   * @param field {Object}
   */
  addNoSet(field) {
    field.setAttribute(this._dataNoSetAtrribute, '');
  }

  /**
   * Add "data-pa-no-store" attribute to field
   * @param field {Object}
   */
  addNoStore(field) {
    field.setAttribute(this._dataNoStoreAtrribute, '');
  }

  /**
   * Assign persisting attribute fields for specific form
   * @param form {Object} - Node of specific form with persisting attribute fields
   * @param options {Object} - objects with a options (callbacks)
   */
  assign(form, options = {}) {
    this._forms.push(form);
    this.setAttributes(form, options);
    form.onsubmit = () => {
      this.storeAttributes(form, options);
    };
  }

  /**
   * Remove data from localStorage
   * Next class object initialization will fetch data from the server
   */
  clear() {
    window.localStorage.removeItem(this._localStorageKey);
  }

  /**
   * Assign all persisting attribute fields for the forms with "data-pa-form" attribute.
   * Multiple calls of this function won't cause any problems. Double assignments are prevented
   */
  init() {
    const forms = document.querySelectorAll(`form[${this._dataForm}]`);
    for (let i = 0; i < forms.length; i += 1) {
      const form = forms[i];
      if (! ArrayUtils.includes(this._forms, form)) {
        this.assign(form);
      }
    }
  }

  /**
   * Remove "data-pa-no-set" attribute from field
   * @param field {Object}
   */
  removeNoSet(field) {
    field.removeAttribute(this._dataNoSetAtrribute);
  }

  /**
   * Remove "data-pa-no-store" attribute from field
   * @param field {Object}
   */
  removeNoStore(field) {
    field.removeAttribute(this._dataNoStoreAtrribute);
  }

  /**
   * Invalidate data in the localStorage so it will sync with the server on the first attempt
   * Next class object initialization will fetch data from the server
   */
  resync() {
    const data = this._getLocalStorageData();
    data._synced = false;
    this._setLocalStorageData(data);
  }

  /**
   * Set values to all persisting attribute fields of the form.
   * Fields with "data-pa-no-set" attribute are excluded
   * @param form {Object}
   * @param options {Object} - objects with a options (callbacks)
   */
  setAttributes(form, options = {}) {
    (async () => {
      if (options.beforeSet) {
        options.beforeSet(form, options);
      }
      const fields = form.querySelectorAll(`[${this._dataAtrribute}]:not([${this._dataNoSetAtrribute}])`);
      for (let i = 0; i < fields.length; i += 1) {
        const field = fields[i];
        const attribute = field.getAttribute(this._dataAtrribute);
        const initialValue = field.value;
        // Set value to persisting attribute field if initial value is empty
        if (initialValue === '') {
          try {
            field.value = await this._getAttribute(attribute);
          } catch (e) {
            console.error(e);
          }
        }
      }
      if (options.afterSet) {
        options.afterSet(form, options);
      }
    })();
  }

  /**
   * Set values to all persisting attributes from related form fields.
   * Fields with "data-pa-no-store" attribute are excluded
   * @param form {Object}
   * @param options {Object} - objects with a options (callbacks)
   */
  storeAttributes(form, options = {}) {
    if (options.beforeStore) {
      options.beforeStore(form, options);
    }
    const fields = form.querySelectorAll(`[${this._dataAtrribute}]:not([${this._dataNoStoreAtrribute}])`);
    for (let i = 0; i < fields.length; i += 1) {
      const field = fields[i];
      const attribute = field.getAttribute(this._dataAtrribute);
      const { value } = field;
      // Set value to persisting attribute if field value is not empty
      if (value !== '') {
        this._setAttribute(attribute, value);
      }
    }
    if (options.afterStore) {
      options.afterStore(form, options);
    }
  }
}
// Assign PersistingAttributesDataManager to window object to control use it from outside
window.PersistingAttributesDataManager = new PersistingAttributesDataManager();
// Delegate click event on logout to clear localStorage
delegate('body', 'click', '.menu-item-logout', () => {
  window.PersistingAttributesDataManager.clear();
});
// Delegate submit event on login to resync localStorage
delegate('body', 'submit', '.login-form', () => {
  window.PersistingAttributesDataManager.resync();
});
