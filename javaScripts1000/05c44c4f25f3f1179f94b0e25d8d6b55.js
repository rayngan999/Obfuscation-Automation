var currentBootstrapBreakpoint = {
  sizes: ['xs', 'ms', 'sm', 'md', 'lg'],
  is: function(size) {
    return $('.bootstrap-breakpoint-' + size).is(':visible');
  },
  get: function() {
    return this.sizes.reduce(function(acc, size) {
      if (this.is(size)) {
        acc += size;
      }
      return acc;
    }.bind(this), '')
  },
  isInOrAbove: function(size) {
    if (this._inputIsOk(size)) {
      return this.sizes.indexOf(this.get()) >= this.sizes.indexOf(size);
    }
  },
  isBelow: function(size) {
    if (this._inputIsOk(size)) {
      return this.sizes.indexOf(this.get()) < this.sizes.indexOf(size);
    }
  },
  thisIsInOrAboveThat: function(sizeA, sizeB) {
    if (this._inputIsOk(sizeA) && this._inputIsOk(sizeB)) {
      var indexOfA = this.sizes.indexOf(sizeA);
      var indexOfB = this.sizes.indexOf(sizeB);
      return indexOfA >= indexOfB;
    }
  },
  thisIsBelowThat: function(sizeA, sizeB) {
    if (this._inputIsOk(sizeA) && this._inputIsOk(sizeB)) {
      var indexOfA = this.sizes.indexOf(sizeA);
      var indexOfB = this.sizes.indexOf(sizeB);
      return indexOfA < indexOfB;
    }
  },
  isMobile: function() {
    return this.isBelow('sm');
  },
  _inputIsOk: function(size) {
    if (this.sizes.indexOf(size) === -1) {
      this._error(size);
      return false;
    }
    return true;
  },
  _error: function(size) {
    console.warn('"' + size + '" is not a recognized bootstrap breakpoint size.');
  }
}