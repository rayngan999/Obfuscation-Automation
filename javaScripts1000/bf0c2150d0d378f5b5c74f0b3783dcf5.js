var socialDataMap;

tassApp.controller('socialController', function($scope) {
    $scope.opened = false;

    $scope.showMore = function(e) {
        e.preventDefault();
        e.stopPropagation();
        $scope.opened = true;

    }
});

tassApp.directive('openMoreSocials', function() {
    return {
        restrict: 'A',
        link: function($scope, $element) {
            $element[0].addEventListener('click', function() {
                $scope.opened = true;
            });
        }
    };
});

tassApp.directive('share', function() {
    //for pug
    return {
        restrict: 'A',
        scope:{
            pageurl:'@pageurl',
            social:'@social',
            title:'@title',
            description:'@description',
            imageurl:'@imageurl',
            result:'@result',
            changeParam:'@changeparam'
        },
        controller: 'shareController'
    };
});

tassApp.directive('shareDynamic', function(){
    //for angular
    return {
        restrict: 'A',
        scope:{
            pageurl:'=pageurl',
            social:'@social',
            title:'=title',
            description:'=description',
            imageurl:'=imageurl',
        },
        controller: 'shareController'
    };
});

tassApp.controller('shareController', function($scope, $element, $attrs) {

    if (!socialDataMap) {
        socialDataMap = {
            title: document.querySelector('meta[property="og:title"]').getAttribute('content'),
            description: document.querySelector('meta[property="og:description"]').getAttribute('content'),
            imageFB: document.querySelector('meta[property="og:image"]').getAttribute('content'),
            imageVK: document.querySelector('meta[property="vk:image"]').getAttribute('content'),
            url: document.querySelector('meta[property="og:url"]').getAttribute('content')
        };
    }

    var destinationURL = document.createElement('a');
    destinationURL.href = $scope.pageurl;

    var curButton = $element[0],
        curSocialData = {
            social: $scope.social,
            pageUrl: $scope.pageurl ? destinationURL.href : location.href,
            title: $scope.title || socialDataMap.title,
            description: $scope.description || socialDataMap.description,
            image: ''
        },
        im = curSocialData.social == 'vk' ? socialDataMap.imageVK : socialDataMap.imageFB;

    curSocialData.image = $scope.imageurl || im;

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', curSocialData.image);

    curSocialData.image = linkElement.href; // check protocol

    var openPopup = function(url, link) {
        if (url.length) {
            window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
        } else {
            link.click();
        }
    }
    var url = '';
    var link;
    if (!!$scope.changeParam){
        if (curSocialData.pageUrl.indexOf('?')!==-1) {
            curSocialData.pageUrl = curSocialData.pageUrl.substring(0, curSocialData.pageUrl.indexOf('?'));
        }
        if($scope.result){
            curSocialData.pageUrl += '?result=' + $scope.result;
        }
    }

    switch (curSocialData.social) {
        case 'fb':
            url = '//www.facebook.com/dialog/feed?app_id=145834367435982&display=popup&name=' + encodeURIComponent(curSocialData.title) +
                '&link=' + encodeURIComponent(curSocialData.pageUrl) +
                '&redirect_uri=#close_window';
            break;
        case 'vk':
            url = 'https://vk.com/share.php?' +
                'url=' + encodeURIComponent(curSocialData.pageUrl) +
                '&title=' + encodeURIComponent(curSocialData.title) +
                '&image=' + encodeURIComponent(curSocialData.image);
            break;
        case 'tw':
            url = 'http://twitter.com/share?' +
                'url=' + encodeURIComponent(curSocialData.pageUrl) +
                '&text=' + encodeURIComponent(curSocialData.title) +
                '&counturl=' + encodeURIComponent(curSocialData.pageUrl);
            break;
        case 'ok':
            url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
            url += '&st.comments=' + encodeURIComponent(curSocialData.description);
            url += '&st._surl=' + encodeURIComponent(curSocialData.pageUrl);
            break;
        case 'lj':
            url = '//www.livejournal.com/update.bml?';
            url += 'subject=' + encodeURIComponent(curSocialData.title);
            url += '&event=' + encodeURIComponent('<img src="' + curSocialData.image + '" /><br clear="all" /><br />' + 'ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ Ð·Ð´ÐµÑÑ: ' + curSocialData.pageUrl);
            break;
        case 'vb':
            link = document.createElement('a');
            link.setAttribute("href", 'viber://forward?text=' + encodeURIComponent(curSocialData.pageUrl));
            break;
        case 'tg':
            url = 'http://t.me/share/url?url=' + encodeURIComponent(curSocialData.pageUrl);
            break;
        case 'wt':
            link = document.createElement('a');
            link.setAttribute("href", 'whatsapp://send?text=' + encodeURIComponent(curSocialData.pageUrl));
            break;
        default:
            break;
    }

    if (url.length || link) {
        curButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openPopup(url, link)
        });
    }
})
