ï»¿function initializeBookMarkStories(ookbeeNumericId, requestNumber, isLasted) {
    var data = getBookmarkStoryIds(ookbeeNumericId);
    if (data.length > 0) {
        $.ajax({
            type: "GET",
            url: "/story/bookmark/stories",
            data: { storyIds: data },
            success: function (response) {
                if (response) {
                    var limit = requestNumber == 0 ? response.result.length : requestNumber;
                    generateBookmarkStories(response.result, limit, isLasted);
                }
            }
        });
    } else {
        generateNoDataBookmarkStories();
    }
}

function generateNoDataBookmarkStories() {
    var html = '<div class="sixteen wide column text-center"><h2>No Data</h2></div>';
    appendBookmarkStoriesDiv(html);
}

function generateBookmarkStories(stories, limit, isLasted) {
    var html = '';
    var countItem = 0;
    for (var i = 0; i < stories.length && i < limit; i++) {
        var imageUrl = stories[i].imageUrl == '' ? "/images/default_cover@3x.png" : stories[i].imageUrl;
        var linkUrl = countItem == 3 && isLasted ? "/myBookmark" : "/story/" + stories[i].id;
        var bgClass = countItem == 3 && isLasted ? "last" : "";
        var bgStyle = countItem < 3 || !isLasted ? "background: linear-gradient(to bottom, rgba(0,0,0,0.8) -20%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.8) 120%), url('" + imageUrl + "');" : "background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('" + imageUrl + "');";
        html += '<div class="four wide computer eight wide mobile column thumb-height">';
        html += '<div class="container" style="height:100%;">';
        html += '<a href="' + linkUrl + '">';
        html += '<div class="bg-cover lazy ' + bgClass + '" data-background="' + imageUrl + '" style="color:#fff; position:relative; height:100%;border:solid 1px;' + bgStyle + '">';
        if (countItem == 3 && isLasted) {
            html += '<span class="text-bold text-readmore line-readmore">Read More</span>';
        }
        html += '</div>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        countItem++;
    }

    appendBookmarkStoriesDiv(html);
}

function appendBookmarkStoriesDiv(html) {
    $('#bookmarkStories').empty().append(html);
}

function getBookmarkChapterIndex(storyId) {
    var chapterIndex = 0;
    var bookmark = getBookmark();
    if (bookmark != null) {
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].storyId == storyId) {
                chapterIndex = parseInt(bookmark[i].chapterIndex);
                break;
            }
        }
    }
    return chapterIndex;
}

function getBookmarkChapterId(storyId) {
    var chapterId = '';
    var bookmark = getBookmark();
    if (bookmark != null) {
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].storyId == storyId) {
                chapterId = bookmark[i].chapterId;
                break;
            }
        }
    }
    return chapterId;
}

function getBookmarkChapterNumber(storyId) {
    var chapterNumber = 0;
    var bookmark = getBookmark();
    if (bookmark != null) {
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].storyId == storyId) {
                chapterNumber = parseInt(bookmark[i].chapterNumber);
                break;
            }
        }
    }
    return chapterNumber;
}

function getBookmarkStoryIds(ookbeenumericId) {
    var storyIds = '';
    var bookmark = getBookmark();
    if (bookmark != null) {
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].ookbeenumericId == ookbeenumericId) {
                storyIds = storyIds == '' ? bookmark[i].storyId : storyIds + ',' + bookmark[i].storyId;
            }
        }
    }
    return storyIds;
}

function initializeBookmark() {
    var bookmark = getBookmark();
    if (bookmark != null) {
        var isSetBookmark = false;
        for (var i = 0; i < bookmark.length; i++) {
            if (invalidExpireBookmark(bookmark[i].expiredate)) {
                bookmark.splice(i, 1);
                isSetBookmark = true;
            }
        }
        if (isSetBookmark) {
            setBookmark(bookmark);
        }
    }
}
function invalidExpireBookmark(expiredate) {
    var isExpire = true;
    if (expiredate != '') {
        var expiredate_split = expiredate.split('-');
        var currentdate = formatBookmarkDate(Date.now());
        var currentdate_split = currentdate.split('-');
        if (parseInt(expiredate_split[0]) <= parseInt(currentdate_split[0])) {
            if (parseInt(expiredate_split[1]) == parseInt(currentdate_split[1])) {
                if (parseInt(expiredate_split[2]) == parseInt(currentdate_split[2])) {
                    isExpire = false;
                } else if (parseInt(expiredate_split[2]) < parseInt(currentdate_split[2])) {
                    var calculatedate = parseInt(currentdate_split[2]) - parseInt(expiredate_split[2]);
                    if (calculatedate <= 3) {
                        isExpire = false;
                    }
                }
            }
        }
    }
    return isExpire;
}
//function addBookmarkServer(storyId, chapterId, chapterIndex) {
//    var param = {
//        currentIndexBubble: chapterIndex,
//        currentPercent: 0
//    };
//    localStorage.setItem('test', param);
//    $.ajax({
//        type: "PUT",
//        url: "/story/bookmark/chapter",
//        data: { storyId: storyId, chaperId: chapterId, data: param },
//        success: function (response) {

//        }
//    });
//}
function addBookmark(storyId, chapterId, chapterNumber, chapterIndex, ookbeenumericId) {
    if (validBookmarkParam(storyId, chapterId)) {
        var bookmark = getBookmark();
        if (bookmark == null) {
            bookmark = [setItemBookmark(storyId, chapterId, chapterNumber, chapterIndex, ookbeenumericId)];
        } else {
            var isUpdate = false;
            for (var i = 0; i < bookmark.length; i++) {
                if (bookmark[i].storyId == storyId && bookmark[i].ookbeenumericId == ookbeenumericId) {
                    var index = bookmark[i].chapterId != chapterId ? 0 : chapterIndex;
                    bookmark[i] = setItemBookmark(storyId, chapterId, chapterNumber, index, ookbeenumericId);
                    isUpdate = true;
                    break;
                }
            }
            if (!isUpdate) {
                bookmark.push(setItemBookmark(storyId, chapterId, chapterNumber, chapterIndex, ookbeenumericId));
            }
        }
        setBookmark(bookmark);
    }
}

function validBookmarkParam(storyId, chapterId) {
    return storyId != '' && chapterId != '' ? true : false;
}

function getBookmark() {
    var bookmark = localStorage.getItem('bookmark');
    return (bookmark == null || bookmark == "") ? null : JSON.parse(b64DecodeUnicode(bookmark));
}

function setItemBookmark(storyId, chapterId, chapterNumber, chapterIndex, ookbeenumericId) {
    var item = {
        storyId: storyId,
        chapterId: chapterId,
        chapterNumber: chapterNumber,
        chapterIndex: chapterIndex,
        ookbeenumericId: ookbeenumericId,
        expiredate: formatBookmarkDate(Date.now())
    };
    return item;
}

function setBookmark(bookmark) {
    var result = b64EncodeUnicode(JSON.stringify(bookmark));
    localStorage.setItem('bookmark', result);
}

function removeBookmarkStory(storyId) {
    var bookmark = getBookmark();
    if (bookmark != null) {
        var isSetBookmark = false;
        for (var i = 0; i < bookmark.length; i++) {
            if (bookmark[i].storyId == storyId) {
                bookmark.splice(i, 1);
                isSetBookmark = true;
                break;
            }
        }
        if (isSetBookmark) {
            setBookmark(bookmark);
        }
    }
}

function removeBookmark() {
    localStorage.setItem('bookmark', []);
}

function formatBookmarkDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
}