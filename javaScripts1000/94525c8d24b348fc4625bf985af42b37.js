Ss = window.Ss || {};
Ss.mosaic = Ss.mosaic || {};

Ss.mosaic.Grid =  function(options) {
        this.setOptions(options || {});
};

Ss.mosaic.Grid.prototype = {

    getOptions: function() {
        return this.options;
    },
    
    getOption: function(option) {
        return this.options[option];
    },
         
    setOptions: function(options) {
        if(!options || !options.width || typeof options.width != 'number' || options.width <= 0) {
            throw 'option width[Number] required';
        }
        var _options = {
            margin: options.margin || 3,
            border: options.border || 1,
            constraints: options.constraints || {},
            width: options.width
        };
        this.options = _options;
    },
    
    setOption: function(option, value) {
        this.options[option] = value;
    },
    
    layout: function(images) {
        var instance = this;
        var rows = [ new Ss.mosaic.Row(instance) ];
        images.forEach( 
            function(image) {
                if(!instance._isValidImage(image)) {
                    throw 'image objects must contain width[Number] and height[Number]';
                }
                var fits = rows[rows.length-1].addImage(image);
                if(!fits) {
                    rows.push(new Ss.mosaic.Row(instance));
                    rows[rows.length-1].addImage(image);
                }
            }
        );
        return rows.map(
            function(row) {
                return row.getCells();
            }
        );
    },
    
    _isValidImage: function(image) {
	    return (
	        image.width && image.height &&
	        typeof image.width == 'number' && typeof image.height && 'number' &&
	        image.width > 0 && image.height > 0
	    );
    }
    
};

Ss = window.Ss || {};
Ss.mosaic = Ss.mosaic || {};

Ss.mosaic.Row = function(grid){
    this._grid = grid;
    this._cells = [];
    this._height = null;
    this._writable = true;
};

Ss.mosaic.Row.prototype = {

    getCells: function() {
        return this._cells.map(function(cell) {
            return cell.toObject();
        });
    },

    addImage: function(image) {

        // bail if the row is finished
        if(!this._writable) {
            return false;
        }
        
        // finish the row if the image doesn't fit
        if(!this.hasRemainingPixels()) {
            this._setWidth(this.numUsablePixels()); 
            return false;
        }
        
        // add the image if it fits
        this._cells.push(new Ss.mosaic.Cell(this._grid, image));

        // adjust the images, a new row height.. including the new image
        this._setHeight(this._calculateHeight());

        // adjust for constraints
        this._handleMinorConstraintViolations();

        // finish the row if it is full
        if(!this.hasRemainingPixels()) {
            this._setWidth(this.numUsablePixels());    
        }
        return true;
    },                           

    numUsedPixels: function() {
        var containerWidths = this._cells.map(function(cell) {
            return cell.getContainerWidth();
        });
        return this._sum(containerWidths);
    },

    numUsablePixels: function() {
        return this._grid.getOption('width') - this.numUnusablePixels();
    },

    numUnusablePixels: function() {
        return (this._grid.getOption('margin') * 2 + this._grid.getOption('border') * 2) * this._cells.length;
    },
    
    numRemainingPixels: function() {
        return this.numUsablePixels() - this.numUsedPixels();
    },
    
    hasRemainingPixels: function() {
        return this.numRemainingPixels() > 0;
    },

    _getCellsByType: function() {
        return this._cells.reduce(function(types, cell) {
            var type = cell.getType();
            types[type] = types[type] || [];
            types[type].push(cell);
            return types;
        }, {});
    },
    
    _getImagesFromCells: function(cells) {
        return cells.map(function(cell){
            return cell.getImage();
        });
    },
    
    _setWidth: function(width) {
        
        //  use the percentage of pixels that we are over to calculate
        //  the row height needed to fit all images into "width" pixels
        var rowHeight = width/this.numUsedPixels() * this._height;
        this._setHeight(rowHeight, true);
        this._fixRoundingError(width);
        this._writable = false;
    },
    
    _setHeight: function(height, setContainers) {
        this._height = height;
        var instance = this;
        this._cells.forEach(function(cell) {
            cell.resize(height, setContainers);
        });
    },
    
    _propertyAverage: function(objects, property) {
        var values = objects.map(function(object) {
            return parseInt(object[property]);
        });
        return this._sum(values) / objects.length;
    },
    
    _sum: function(values) {
        return values.reduce(function(total, num) {
            return total + num;
        }, 0);
    },
    
    _calculateHeight: function() {
        // start with the average height of all images in the row
        var rowHeight = this._getAverageImageHeight();
        
        // examine the types of images in the row
        var cellsByType = this._getCellsByType();
        
        // exclude images that are too wide
        if(cellsByType.maxWidth) {
            var candidateCells = [];
            
            Object.keys(cellsByType).forEach(function(type) {
                if(type != 'maxWidth') {
                    candidateCells = candidateCells.concat(cellsByType[type]);
                }
            });
            
            if(candidateCells.length) {
                rowHeight = this._getAverageImageHeight(candidateCells);
            }
        }

        // honor the optional minHeight constraint
        if(this._grid.options.constraints.minHeight) {
            rowHeight = Math.max(rowHeight, this._grid.options.constraints.minHeight);
        }

        // honor the optional maxHeight constraint
        if(this._grid.options.constraints.maxHeight) {
            rowHeight = Math.min(rowHeight, this._grid.options.constraints.minHeight);
        }

        return rowHeight;
    },

    // detect and correct minor violations
    _handleMinorConstraintViolations: function() {
        var cellsByType = this._getCellsByType();
        
        // these portrait images -almost- fill the cell width
        // a slightly taller cell would cause them to fit evenly
        if(cellsByType.minWidthMinor) {
            // find the optimal height for the image that needs the most adjustment
            var optimalHeights = cellsByType.minWidthMinor.map(function(cell) {
                    return cell.getOptimalHeight();
            });
            var maxOptimalHeight = Math.max.apply(null, optimalHeights);
            log(maxOptimalHeight);
            log("------")
            // set the row to that height
            this._setHeight(maxOptimalHeight);

            // keep this adjustment if it didn't cause any images to be too wide
            // roll it back if it didn't
            var newCellsByType = this._getCellsByType();
            if((newCellsByType.maxWidth || []).length <= (cellsByType.maxWidth || []).length) {
                cellsByType = newCellsByType;
            } else {
                this._setHeight(this._height);
            }
        }

        // these landscape images -almost- fill the cell height
        // just making them slightly wider will cause them to fit evenly
        if(cellsByType.maxWidthMinor) {
            cellsByType.maxWidthMinor.forEach(
                function(cell){
                    var optimalWidth = cell.getOptimalWidth();
                    var optimalHeight = cell.getOptimalHeight();
                    cell.setImageWidth(optimalWidth);
                    cell.setContainerWidth(optimalWidth);
                    cell.setContainerHeight(optimalHeight);
                }
            );
        }
        
    },

    _fixRoundingError: function(width) {
        var error = this.numUsedPixels() - width;
        var errorPerImage = error/this._cells.length;
        var accumulatedError = 0;
        var rounded;
        if(!error) {
            return;
        }
        this._cells.forEach(
            function(cell) {
                var containerWidth = cell.getContainerWidth();
                var containerHeight = cell.getContainerHeight();
 
                accumulatedError += errorPerImage;
                rounded = Math.round(accumulatedError);
                cell.setContainerWidth(containerWidth - rounded);
                cell.setContainerHeight(containerHeight - rounded);
                if(cell.getImageWidth() > cell.getContainerWidth()) {
                    cell.setImageWidth(cell.getContainerWidth());
                }
                accumulatedError -= rounded;
            }
        );
    },
    
    _getAverageImageHeight: function(cells) {
        var images = this._getImagesFromCells(cells || this._cells);
        return this._propertyAverage(images, 'height');
    }

};

Ss = window.Ss || {};
Ss.mosaic = Ss.mosaic || {};

Ss.mosaic.Cell = function(grid, image) {
	    this._grid = grid;
		this._image = image;
		this._imageAspect = this._image.aspect || this._image.width/this._image.height;
		
		this._type = null;
		this._imageWidth = null;
		this._imageHeight = null;
		this._containerWidth = null;
		this._containerHeight = null;
		this._optimalWidth = null;
		this._optimalHeight = null;
};

Ss.mosaic.Cell.prototype = {

	getType: function() {
	    return this._type;
	},
	
	getImage: function() {
	    return this._image;
	},

	getImageWidth: function() {
	    return this._imageWidth;
	},
	
	getImageHeight: function() {
	    return this._imageHeight;
	},
	
	getContainerWidth: function() {
	    return this._containerWidth;
	},
	
	getContainerHeight: function() {
	    return this._containerHeight;
	},
	
	getOptimalWidth: function() {
	    return this._optimalWidth;
	},
	
	getOptimalHeight: function() {
	    return this._optimalHeight;
	},
	
	setImageWidth: function(width) {
	    this._imageWidth = width;
	    this._imageHeight = width * 1 / this._imageAspect;
	},
	
	setImageHeight: function(height) {
	    this._imageHeight = height;
	    this._imageWidth = height * this._imageAspect;
	},
	
	setContainerWidth: function(width) {
	    this._containerWidth = width;
	},
	
	setContainerHeight: function(height) {
	    this._containerHeight = height;
	},
	
	setOptimalWidth: function(width) {
	    this._optimalWidth = width;
	},
	
	setOptimalHeight: function(height) {
	    this._optimalHeight = height;
	},
	
	toObject: function() {
	    return {
	        //type: this._type,
	        dimensions: {
                imageWidth: Math.floor(this._imageWidth),
                imageHeight: Math.floor(this._imageHeight),
                containerWidth: Math.floor(this._containerWidth),
                containerHeight: Math.floor(this._containerHeight)
	        },
	        image: this._image
	    };
	},
	
	resize: function(height, setContainers) {
        var width = height * this._imageAspect;
        var constraints = this._grid.getOption('constraints');
        
        if(constraints.maxWidth && width > constraints.maxWidth) { // too wide
            this._resizeMaxWidth(height, setContainers);
        } else if(constraints.minWidth && width < constraints.minWidth) { // too narrow
            this._resizeMinWidth(height);
        } else { // normal case
            this._resizeNormal(width, height);
        }
        return this._image;
	},
	
	_resizeNormal: function(width, height) {
	    this._type = 'normal';
	    this.setImageWidth(width);
	    this.setContainerWidth(width);
	    this.setContainerHeight(height);
	},
	
	_resizeMaxWidth: function(height, setContainers) {
	    var image = this._image;
        var constraints = this._grid.getOption('constraints');
        
        if(setContainers) {
            var containerAspect = (this._containerWidth/this._containerHeight);
            var newContainerWidth = height * containerAspect;
            this._type = 'maxWidth';
            this.setImageWidth(newContainerWidth);
            this.setContainerWidth(newContainerWidth);
            this.setContainerHeight(height);
        } else {
            var newImageWidth = constraints.maxWidth;
            var newImageHeight = newImageWidth * 1 / this._imageAspect;
            var optimalHeight = height;
            var optimalWidth = optimalHeight * this._imageAspect;
            var error = (height - newImageHeight) / height;
            this._type = (error < constraints.tolerance ? 'maxWidthMinor' : 'maxWidth');
            this.setImageWidth(newImageWidth);
            this.setContainerWidth(newImageWidth);
            this.setContainerHeight(height);
            this.setOptimalWidth(optimalWidth);
            this.setOptimalHeight(optimalHeight);
        }
	},
	
	_resizeMinWidth: function(height) {
	    var constraints = this._grid.getOption('constraints');
	    var newImageWidth = height * this._imageAspect;
        var error = (constraints.minWidth - newImageWidth) / constraints.minWidth;
        var optimalWidth = constraints.minWidth + constraints.minWidth * error;
        var optimalHeight = optimalWidth * 1 / this._imageAspect;
        this._type = (error < constraints.tolerance ? 'minWidthMinor' : 'minWidth');
        this.setImageHeight(height);
        this.setContainerWidth(constraints.minWidth);
        this.setContainerHeight(height);
        this.setOptimalWidth(optimalWidth);
        this.setOptimalHeight(optimalHeight);
	}

};