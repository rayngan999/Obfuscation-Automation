(function() {
  var positions = [3, 6, 9];
  var infeedArticleElements = document.querySelectorAll('.infeed-article');
  var infeedMap = {};
  positions.forEach(function(pos) {
    infeedMap[pos]        = [];
    infeedMap[pos+'-all'] = [];
  });
  infeedArticleElements.forEach(function(element) {
    var pos = element.getAttribute('data-pos');
    if (infeedMap[pos]) {
      var rate  = element.getAttribute('data-rate');
      infeedMap[pos].push({
        element: element,
        rate: rate,
      });
    }
  });
  positions.forEach(function(pos) {
    var infeedArticles = infeedMap[pos];
    if (!(infeedArticles && infeedArticles.length > 0)) {
      return;
    }

    var rateSum = infeedArticles.reduce(function(acc, current) {
      return Number.parseInt(acc) + Number.parseInt(current.rate);
    }, 0);
    var rand = Math.floor(Math.random() * rateSum);
    var rate = 0;
    var element;
    for (var i = 0; i < infeedArticles.length; i++) {
      var infeedArticle = infeedArticles[i];
      rate += Number.parseInt(infeedArticle.rate);
      if (rate >= rand) {
        element = infeedArticle.element;
        break;
      }
    }
    var insertPosNodes = document.getElementsByClassName('infeed-article-pos-'+pos);
    for (var node of insertPosNodes) {
      for (var childNode of element.childNodes) {
        node.parentNode.insertBefore(childNode.cloneNode(true), node);
      }
      node.remove();
    };
  });

  infeedArticleElements = document.querySelectorAll('.infeed-article');
  infeedArticleElements.forEach(function(element) {
    element.remove();
  });
})();
