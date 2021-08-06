// Kills the highlight and girobox skeletons
// should the libraries scripts fail and not hide them before
setTimeout(function () {
  // Not creativities
  var campaignSkeleton = document.querySelector('.campaign__skeleton');
  var highlightSkeleton = document.querySelector('.highlight__skeleton');
  var cardsHighlights = document.querySelectorAll('.card--highlight');
  // Creativities
  var creativitiesSkeleton = document.querySelectorAll('.girobox-skeleton,.highlight-skeleton');
  var highlightSkeletons = document.querySelectorAll('.highlight-skeleton-item.highlight-skeleton-item--node');

  if (campaignSkeleton) {
    campaignSkeleton.style.display = 'none';
  }
  if (cardsHighlights) {
    for ( var i = 0; i < cardsHighlights.length; i++) {
      cardsHighlights[i].style.pointerEvents = 'initial';
    }
  }
  if (highlightSkeleton) {
    highlightSkeleton.classList.remove('highlight__skeleton');
  }
  for (var i = 0; i < highlightSkeletons.length; i++) {
    highlightSkeletons[i].style.display = 'none';
  }
  for (var i = 0; i < creativitiesSkeleton.length; i++) {
    creativitiesSkeleton[i].style.display = 'none';
  }
}, 25000);
