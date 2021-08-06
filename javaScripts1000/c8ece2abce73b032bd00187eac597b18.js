var SETTING = {
    "SPEED": {
        "SLOW": 2.5,
        "NORMAL": 1.8,
        "FAST": 1.3,
        "VERYFAST": 0.9,
    },
    "BACKGROUND": {
        "NONE": "",
        "WHITE": "#FFFFFF",
        "BLACK": "#000",
        "LINEN": "#faf0e6",
    },
    "FONTFAMILY": {
        "0": "NotoSansThai",
        "1": "CSPraJad",
        "2": "MNPaethai",
        "3": "THMaliGrade6",
        "4": "ThaiSansNeue",
    },
    "SPEEDARR": [9, 8, 7, 5],
    "FONTSIZE": [1, 2, 3, 4, 5],
    "FONTSPAN": [1.2, 2, 3],
    "BRIGHTNESS":[1, 2, 3, 4]
};

Object.freeze(SETTING);

function getFontFamilyOption(font) {
    if (font == "NaN" || font == null || font == '' || font == SETTING.FONTFAMILY[0]) {
        return "0";
    } else if (font == SETTING.FONTFAMILY[1]) {
        return "1";
    }
    else if (font == SETTING.FONTFAMILY[2]) {
        return "2";
    }
    else if (font == SETTING.FONTFAMILY[3]) {
        return "3";
    }
    else if (font == SETTING.FONTFAMILY[4]) {
        return "4";
    }
    else if (font == SETTING.FONTFAMILY[5]) {
        return "5";
    }

}
function getNovelFontSize() {
    return verifyFontSize(localStorage.getItem('novel-font-size'));
}
// 


function setNovelBg(bg) {
    bg = verifyBg(bg);
    localStorage.setItem('novel-bg', bg);
}

function setNovelFontSize(fontSize) {
    fontSize = verifyFontSize(fontSize);
    localStorage.setItem('novel-font-size', fontSize);
}
// 


function getNovelFontSpan() {
    return verifyFontSpan(localStorage.getItem('novel-font-span'));
}

function setNovelFontFamily(fontFamily) {
    fontFamily = verifyFontFamily(fontFamily);
    localStorage.setItem('novel-font-family', fontFamily);
}

function setNovelFontSpan(fontSize) {
    fontSize = verifyFontSpan(fontSize);
    localStorage.setItem('novel-font-span', fontSize);
}
// 

//function getChapterIndex(chapterId)
//{
//    var idx = localStorage.getItem("index_" + chapterId); 
//    if (idx == "NaN" || idx == null) {
//        res = 0;
//    } else {
//        res = parseInt(idx);
//    }

//    return res;
//}

//function setChapterIndex(chapterId, orderIndex) {
//    localStorage.setItem("index_" + chapterId, orderIndex);
//}

function clearChapterIndex(chapterId) {
    //_process(chapterId);
    //_removejob(chapterId);
    //localStorage.removeItem("index_" + chapterId);
    _resetJoyChat();
}

function getChatReaderSpeed() {
    return verifyChatReadSpeed(localStorage.getItem('chat-read-speed'));
}

function setChatReaderSpeed(readSpeed) {
    readSpeed = readSpeed;
    localStorage.setItem('chat-read-speed', readSpeed);
}

function getChatReaderEnableSound() {
    return verifyEnableSound(localStorage.getItem('chat-enable-sound'));
}

function setChatReaderEnableSound(isEnable) {
    isEnable = verifyEnableSound(isEnable);
    localStorage.setItem('chat-enable-sound', isEnable);
}

function verifyEnableSound(isEnable) {
    if (typeof (isEnable) == typeof ('true')) {
        isEnable = ((isEnable === 'true'));
    } else if (typeof (isEnable) != typeof (true)) {
        isEnable = true;
    }

    return isEnable;
}
// 
function verifyChatReadSpeed(speed) {
    //console.log(speed);
    if (speed == "NaN" || speed == null) {
        speed = 99;
    } else {
        speed = parseFloat(speed);
    }

    var matchSpeed = false;
    for (var idx = 0; idx < SETTING.SPEEDARR.length; idx++) {
        var spd = SETTING.SPEEDARR[idx];
        if (speed === spd) {
            speed = spd;
            matchSpeed = true;
        }
    }

    if (!matchSpeed) {
        speed = SETTING.SPEED.SLOW;
    }

    return speed;
}

function verifyBg(bg) {
    if (bg === SETTING.BACKGROUND.WHITE) {
        bg = SETTING.BACKGROUND.WHITE;
    } else if (bg === SETTING.BACKGROUND.BLACK) {
        bg = SETTING.BACKGROUND.BLACK;
    } else if (bg === SETTING.BACKGROUND.LINEN) {
        bg = SETTING.BACKGROUND.LINEN;
    } else {
        bg = SETTING.BACKGROUND.NONE;
    }

    return bg;
}
function verifyFontSize(size) {
    if (size == "NaN" || size == null) {
        size = 99;
    } else {
        size = parseInt(size);
    }

    var isMatch = false;
    for (var idx = 0; idx < SETTING.FONTSIZE.length; idx++) {
        var validSize = SETTING.FONTSIZE[idx];
        if (size <= validSize) {
            size = validSize;
            isMatch = true;
            break;
        }
    }

    if (size > SETTING.FONTSIZE[4]) {
        size = SETTING.FONTSIZE[4];
        isMatch = true;
    }

    if (!isMatch) {
        size = SETTING.FONTSIZE[0];
    }

    return size;
}

function verifyFontFamily(font) {
    if (font == "NaN" || font == null || font == '') {
        return SETTING.FONTFAMILY[0];
    } else {
        return font;
    }
}

function verifyFontSpan(span) {
    if (span == "NaN" || span == null) {
        span = 99;
    } else {
        span = parseInt(span);
    }

    var isMatch = false;
    for (var idx = 0; idx < SETTING.FONTSPAN.length; idx++) {
        var validSpan = SETTING.FONTSPAN[idx];
        if (span == validSpan) {
            span = validSpan;
            isMatch = true;
        }
    }

    if (!isMatch) {
        span = SETTING.FONTSPAN[0];
    }

    return span;
}