var NavCtrl;
var $window = $(window);
var $authPopover = $('.popover.auth-popover');
var $navUser = $('a.nav-user');
var $stickyDesktopNav = $('.desktop-navbar.sticky');

var stickyBreakpoint = $stickyDesktopNav.outerHeight();

// could use timeouts here if this creates performance issues
$window.on('scroll', handleScroll);
// $window.on('resize', measureFirstSection);

var $stickyNavs = $('.v3-navbar.sticky, .MobileNavbar.is-sticky');

// handle "collapsing" of navbar
function handleScroll() {
  // console.log('handleScroll > navbar-debug.js --------------------');
  var currentScroll = window.scrollY || window.pageYOffset; // IE fix
  if (currentScroll > stickyBreakpoint) {
    // console.log('scroll BELOW breakpoint - show sticky');
    $stickyNavs.addClass('stuck');
  }
  else {
    // console.log('scroll ABOVE breakpoint - hide sticky');
    if ($stickyNavs.hasClass('stuck')) {
      $('.patient-portal-nav-desktop .dropdown').removeClass('open');
    }
    $stickyNavs.removeClass('stuck');
  }
}

// return necessary function for use in template onclick= attributes
var ctrl = {};
ctrl.toggleShowAuthPopup = function () {
  $authPopover.toggleClass('in');
  $navUser.toggleClass('selected');
};

// dismiss popover when user clicks outside of it
$('body').on('click', function (e) {
  var $target = $(e.target);

  var userRequestedThePopover = $navUser.toArray().reduce(function (acc, elem) {
    var $elem = $(elem);
    var userClickedTheNavUserIcon = $elem[0] === $target[0];
    var userClickedChildOfNavUserIcon = $.contains($elem[0], $target[0]);
    return acc || userClickedTheNavUserIcon || userClickedChildOfNavUserIcon;
  }, false);

  var userClickedWithinPopover = $target.hasClass('.popover.in') || $target.parents('.popover.in').length;

  if (!(userRequestedThePopover || userClickedWithinPopover)) {
    $('.popover.auth-popover').removeClass('in');
    $navUser.removeClass('selected');
  }
});

NavCtrl = ctrl;
