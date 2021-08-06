/*
 =================================
 img-touch-canvas - v0.1
 http://github.com/rombdn/img-touch-canvas
 (c) 2013 Romain BEAUDON
 This code may be freely distributed under the MIT License
 This library has been heavily modified so do not upgrade
 =================================
 */


(function() {
    var root = this; //global object

    var ImgTouchCanvas = function(options) {
        if( !options || !options.canvas || !options.path) {
            throw 'ImgZoom constructor: missing arguments canvas or path';
        }

        this.options = options;
        this.canvas         = options.canvas;
        this.canvas.width   = this.canvas.clientWidth;
        this.canvas.height  = this.canvas.clientHeight;
        this.context        = this.canvas.getContext('2d');
        this.desktop = options.desktop || false; //non touch events
        this.doAnimation = true;
        this.position = options.position || {
                x: 0,
                y: 0
            };

        this.imgTexture = new Image();
        this.imgTexture.onload = this.init.bind(this);
        this.imgTexture.src = options.path;
        this.lastZoomScale = null;
        this.lastX = null;
        this.lastY = null;

        this.mdown = false; //desktop drag
        $('.sk-circle').css("display", "block")

    };

    ImgTouchCanvas.prototype = {
        init: function() {
            this.scale = this.options.scale || {
                    x: this.minScale(),
                    y: this.minScale()
                };
            this.init = true;
            this.checkRequestAnimationFrame();
            requestAnimationFrame(this.animate.bind(this));

            this.setEventListeners();

            window.addEventListener('resize', this.orientationChange.bind(this));

            this.centerImage();
            this.doZoom(1);

        },

        animate: function() {
            //set scale such as image cover all the canvas
            if(!this.init) {
                if(this.imgTexture.width) {
                    var scaleRatio = null;
                    if(this.canvas.clientWidth > this.canvas.clientHeight) {
                        scaleRatio = this.canvas.clientWidth / this.imgTexture.width
                    }
                    else {
                        scaleRatio = this.canvas.clientHeight / this.imgTexture.height;
                    }

                    this.scale.x = scaleRatio;
                    this.scale.y = scaleRatio;
                    this.init = true;
                }
            }

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.drawImage(
                this.imgTexture,
                this.position.x, this.position.y,
                this.scale.x * this.imgTexture.width,
                this.scale.y * this.imgTexture.height);
                $('.sk-circle').css("display", "none");

            if(this.doAnimation) {
                requestAnimationFrame(this.animate.bind(this));
            }
        },

        orientationChange : function(e) {
            var height = screen.height,
                width = screen.width;
            if(window.innerHeight > window.innerWidth) {
                height = Math.max(screen.height, screen.width);
                width = Math.min(screen.height, screen.width);
            } else {
                height = Math.min(screen.height, screen.width);
                width = Math.max(screen.height, screen.width);
            }
            this.canvas.height = height;
            this.canvas.width = width;

            this.centerImage();
        },

        centerImage: function(){
            var x = (this.canvas.width/2)-((this.imgTexture.width * this.scale.x)/2);
            var y = (this.canvas.height/2)-((this.imgTexture.height * this.scale.y)/2);

            this.position = {
                x: x,
                y: y
            };
        },

        clear: function() {
            this.doAnimation = false;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        /*
         *   Minimum scale
         *   No smaller than canvas
         */
        minScale: function() {
            var imgHeight = this.imgTexture.height,
                imgWidth = this.imgTexture.width;

            return Math.min(
                this.canvas.clientHeight / imgHeight,
                this.canvas.clientWidth / imgWidth
            );
        },

        gesturePinchZoom: function(event) {
            var zoom = false;

            if( event.targetTouches.length >= 2 ) {
                var p1 = event.targetTouches[0];
                var p2 = event.targetTouches[1];
                console.log(this.imgTexture.width);
                if(this.imgTexture.width > 800) {
                    var zoomScale = (Math.sqrt(Math.pow(p2.pageX - p1.pageX, 2) + Math.pow(p2.pageY - p1.pageY, 2))) * .2;
                }else{
                    var zoomScale = (Math.sqrt(Math.pow(p2.pageX - p1.pageX, 2) + Math.pow(p2.pageY - p1.pageY, 2))) * .4;
                }

                if( this.lastZoomScale ) {
                    zoom = zoomScale - this.lastZoomScale;
                }

                this.lastZoomScale = zoomScale;
            }

            return zoom;
        },

        doZoom: function(zoom) {
            if(!zoom) return;

            //new scale
            var currentScale = this.scale.x;
            var newScale = this.scale.x + zoom/100;

            var imgHeight = this.imgTexture.height,
                imgWidth = this.imgTexture.width;


            // Min scale is size of canvas
            if(imgWidth * newScale <= this.canvas.clientWidth
                && imgHeight * newScale <= this.canvas.clientHeight) {
                newScale = this.minScale();
            }
            if(newScale > 1) {
                newScale = 1;
            }

            //some helpers
            var deltaScale = newScale - currentScale;
            var currentWidth    = (this.imgTexture.width * this.scale.x);
            var currentHeight   = (this.imgTexture.height * this.scale.y);
            var deltaWidth  = this.imgTexture.width*deltaScale;
            var deltaHeight = this.imgTexture.height*deltaScale;

            //by default scale doesnt change position and only add/remove pixel to right and bottom
            //so we must move the image to the left to keep the image centered
            //ex: coefX and coefY = 0.5 when image is centered <=> move image to the left 0.5x pixels added to the right
            var canvasmiddleX = this.canvas.clientWidth / 2;
            var canvasmiddleY = this.canvas.clientHeight / 2;
            var xonmap = (-this.position.x) + canvasmiddleX;
            var yonmap = (-this.position.y) + canvasmiddleY;
            var coefX = -xonmap / (currentWidth);
            var coefY = -yonmap / (currentHeight);
            var newPosX = this.position.x + deltaWidth*coefX;
            var newPosY = this.position.y + deltaHeight*coefY;
            //finally affectations
            this.scale.x    = newScale;
            this.scale.y    = newScale;
            this.position.x = newPosX;
            this.position.y = newPosY;
        },

        doMove: function(relativeX, relativeY) {
            if(this.lastX && this.lastY) {
                var deltaX = relativeX - this.lastX;
                var deltaY = relativeY - this.lastY;
                this.position.x += deltaX;
                this.position.y += deltaY;
            }

            this.lastX = relativeX;
            this.lastY = relativeY;
        },

        setEventListeners: function() {
            // touch
            this.canvas.addEventListener('touchstart', function(e) {
                this.lastX          = null;
                this.lastY          = null;
                this.lastZoomScale  = null;
            }.bind(this));

            this.canvas.addEventListener('touchmove', function(e) {
                e.preventDefault();

                if(e.targetTouches.length == 2) { //pinch
                    this.doZoom(this.gesturePinchZoom(e));
                }
                else if(e.targetTouches.length == 1) {
                    var relativeX = e.targetTouches[0].pageX - this.canvas.getBoundingClientRect().left;
                    var relativeY = e.targetTouches[0].pageY - this.canvas.getBoundingClientRect().top;
                    this.doMove(relativeX, relativeY);
                }
            }.bind(this));

            if(this.desktop) {
                // keyboard+mouse
                window.addEventListener('keyup', function(e) {
                    if(e.keyCode == 187 || e.keyCode == 61) { //+
                        this.doZoom(5);
                    }
                    else if(e.keyCode == 54) {//-
                        this.doZoom(-5);
                    }
                }.bind(this));

                window.addEventListener('mousedown', function(e) {
                    this.mdown = true;
                    this.lastX = null;
                    this.lastY = null;
                }.bind(this));

                window.addEventListener('mouseup', function(e) {
                    this.mdown = false;
                }.bind(this));

                window.addEventListener('mousemove', function(e) {
                    var relativeX = e.pageX - this.canvas.getBoundingClientRect().left;
                    var relativeY = e.pageY - this.canvas.getBoundingClientRect().top;

                    if(e.target == this.canvas && this.mdown) {
                        this.doMove(relativeX, relativeY);
                    }

                    if(relativeX <= 0 || relativeX >= this.canvas.clientWidth || relativeY <= 0 || relativeY >= this.canvas.clientHeight) {
                        this.mdown = false;
                    }
                }.bind(this));
            }
        },

        checkRequestAnimationFrame: function() {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                    window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            }

            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
            }
        }
    };

    root.ImgTouchCanvas = ImgTouchCanvas;
}).call(this);