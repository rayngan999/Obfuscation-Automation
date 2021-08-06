/*
* jQuery Catfish Plugin - Version 1.3
*
* Copyright (c) 2007 Matt Oakes (http://www.gizone.co.uk)
* Licensed under the MIT (LICENSE.txt)
* @link http://www.matto1990.com/jquery/catfish/
*/
jQuery.fn.catfish = function(options) {
this.settings = {
closeLink: 'none',
animation: animacion,
}
if(options)
jQuery.extend(this.settings, options);
if ( this.settings.animation != 'slide' && this.settings.animation != 'none' && this.settings.animation != 'fade' ) {
alert('animation can only be set to \'slide\', \'none\' or \'fade\'');
}
var id = this.attr('id');
settings = this.settings;
jQuery(this).css('padding', '0').css('height', this.settings.height + 'px').css('margin', '0').css('width', this.settings.width).css('z-index', 10);
//jQuery('html').css('padding', '0 0 ' + ( this.settings.height * 1 + 50 ) + 'px 0');
if ( typeof document.body.style.maxHeight != "undefined" ) {
if(this.settings.left != -1) jQuery(this).css('position', 'fixed').css('bottom', '0').css('left', this.settings.left);
if(this.settings.right != -1) jQuery(this).css('position', 'fixed').css('bottom', '0').css('right', this.settings.right);
}
if ( this.settings.animation == 'slide' ) {
jQuery(this).slideDown(3000);
}
else if ( this.settings.animation == 'fade' ) {
jQuery(this).fadeIn(3000);
}
else {
jQuery(this).show();
}
if ( this.settings.closeLink != 'none' ) {
jQuery(this.settings.closeLink).click(function(){
jQuery.closeCatfish(id);
return false;
});
}
// Return jQuery to complete the chain
return this;
};
jQuery.closeCatfish = function(id) {
this.catfish = jQuery('#' + id);
jQuery(this.catfish).hide();
jQuery('html').css('padding', '0');
jQuery('body').css('overflow', 'visible'); // Change IE6 hack back
};

// begin loading the ad
$(window).load(function(){
$('#catfish').catfish({
closeLink: '#catfish-close',
left: 0,
right: -1,
height: catfishAlto,
width:'160px'
});
});
// begin loading the ad
$(window).load(function(){
$('#catfish1').catfish({
closeLink: '#catfish-close1',
left: -1,
right: 0,
height: catfishAlto,
width:'160px'
});
});
// begin loading the ad
$(window).load(function(){
$('#catfish2').catfish({
closeLink: '#catfish-close2',
left:0,
height: '112',
width:'100%'
});
});