// Kills the topbar placeholder
// should the libraries scripts fail and not hide it before
setTimeout(function () {
  var topbarPlaceholder = document.querySelector('.topbar-placeholder');
  if (topbarPlaceholder) {
    topbarPlaceholder.style.display = 'none';
  }
}, 25000);
