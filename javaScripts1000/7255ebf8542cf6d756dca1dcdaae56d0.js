var IMAGE_CACHE = new Array;
IMAGE_CACHE['emoji_palette'] = new Image;
IMAGE_CACHE['emoji_palette'].src = "https://parts.blog.livedoor.jp/img/emoji/palette.gif";

function insertStr(e, str) {
    var isGecko = false;
    if(navigator){
       if(navigator.userAgent){
          if(navigator.userAgent.indexOf("Gecko/") != -1){
             isGecko = true;
          }
       }
    }
    if(document.selection) {
        e.focus();
        var r = document.selection.createRange();
        r.text = str;
        e.focus();
    }
    else if(isGecko){
        var start = e.selectionStart;
    var head = e.value.substring(0, start);
        var foot = e.value.substring(start, e.textLength);
        e.value = head + str + foot;
    }
    else {
        e.value = e.value + str;
    }
}

function setEmojiTag(targetId, emoji) {
    var e = document.getElementById(targetId);
    var str = "<emoji:" + emoji + ">";
    insertStr(e, str);
    hideEmojiPanel(targetId);
}

function showEmojiPanel(callerID, targetID) {
    var panel = getEmojiPanelElement(targetID);
    if(panel.style.display == "") {
	    return hideEmojiPanel(targetID);
    }
    var pos = getElementPosition(callerID);
    panel.style.left = pos[0] + 10 + "px";
    panel.style.top = pos[1] + 20 + "px";
    panel.style.zIndex = 9999;
    panel.style.display = "";
}

function hideEmojiPanel(id) {
    var panel = getEmojiPanelElement(id);
    panel.style.display = "none";
}

function getElementPosition(id) {
    var element = document.getElementById(id);
    var offsetLeft = 0;
    var offsetTop = 0;
    while(element) {
        offsetLeft += element.offsetLeft;
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return [offsetLeft, offsetTop];
}

function getEmojiPanelElement(target_id){
    var panel_prefix = "emoji";
    var map_prefix = "emoji_map";
    var panel_id = [panel_prefix,target_id].join("_");
    var map_id = [map_prefix,target_id].join("_");
    var emoji_panel = document.getElementById(panel_id);
    if (emoji_panel) return emoji_panel;
    var iframe = document.createElement("iframe");
    iframe.id = panel_id;
    iframe.scrolling = "no";
    iframe.frameBorder = 0;
    iframe.style.cssText = "position:absolute;display:none;border:1px solid #000000;height:300px;width:230px;background:#ffffff;";
    document.body.appendChild(iframe);
    var iframedoc = (document.all)? iframe.contentWindow.document : iframe.contentDocument;
    iframedoc.open();
    iframedoc.writeln("<body></body>");
    var img = iframedoc.createElement("img");
    img.src = IMAGE_CACHE['emoji_palette'].src;
    img.isMap = true;
    img.useMap = "#" + map_id;
    img.style.border = "0";
    var map = iframedoc.createElement("map");
    map.id = map_id;
    map.name = map_id;
    for (var i=0;i<emoji_list.length;i++){
        var area = iframedoc.createElement("area");
        area.shape = emoji_list[i].shape;
        area.coords = emoji_list[i].coords;
        area.alt = emoji_list[i].alt;
        area.title = emoji_list[i].title;
        area.id = emoji_list[i].id;
        area.onclick = (function(target_id){
             return function(){ setEmojiTag(target_id, emoji_map[this.id]) }
        })(target_id);
        map.appendChild( area );
    }
    iframedoc.body.style.cssText = "margin:0;padding:0";
    iframedoc.body.appendChild(img);
    iframedoc.body.appendChild(map);
    iframedoc.close();
    return iframe;
}

//  kaomoji extension

var kaomojiPanelCache = new Object();

function showKaomojiPanel(callerID, targetID) {

    //var newInstance = new ClassKaomoji( callerID, targetID );
    
    kaomojiPanelCache.callerID = callerID;
    kaomojiPanelCache.targetID = targetID;
    kaomojiPanelCache.categoryID = "Aisatsu";
    
    var panel = getKaomojiPanelElement();
    if(panel.style.display == "") {
        return hideKaomojiPanel();
    }
    var html = loadKaomojiPanelHTML(targetID);
    var pos = getElementPosition(callerID);
    panel.style.left = pos[0] + 10 + "px";
    panel.style.top = pos[1] + 20 + "px";
    panel.innerHTML = html;
    panel.style.display = "";
}

function reloadKaomojiPanelHTML(targetID, categoryId) {
    var html = loadKaomojiPanelHTML(targetID, categoryId);
    var pos = getElementPosition( kaomojiPanelCache.callerID );
    var panel = getKaomojiPanelElement();
    panel.style.left = pos[0] + 10 + "px";
    panel.style.top = pos[1] + 20 + "px";
    panel.innerHTML = html;
}

function hideKaomojiPanel() {
    var panel = getKaomojiPanelElement();
    panel.style.display = "none";
}

function loadKaomojiPanelHTML(targetID, categoryId) {
    //if(html = kaomojiPanelCache[targetID])
	//return html;
	var categoryId = ( typeof(categoryId) != "undefined" )? categoryId : kaomojiPanelCache.categoryID;
    var html = '<table><tr>';
    html += loadKaomojiPanelLeft(targetID, categoryId);
    html += loadKaomojiPanelRight(targetID, categoryId);
    html += '</tr></table>';
    //kaomojiPanelCache[targetID] = html;
    return html;
}

function loadKaomojiPanelRight(targetID, categoryId) {
    var html = '';
    //var div = document.createElement( "div" );
    html += '<td class=\"kaomojibox\">';
    var selectedKaomojiList = kaomojiList[categoryId];
    for(i = 0; i < selectedKaomojiList.length; i++) {
       if (selectedKaomojiList[i].length == 0) {
          html += "<br>";
       } else {
          html += 
	          '<span><a href="javascript:void(0)" onClick="setKaomoji(\'' + targetID + '\', \'' + categoryId + '\', \'' + i + '\')">' + selectedKaomojiList[i] + '</a></span>';
       }
    }
    html += '</td>';
    return html;
}

function loadKaomojiPanelLeft(targetID, categoryId) {
    var html = '';
    html += '<td class=\"category\">';
    
    for ( var cid in kaomojiCategoryList ) {
        if (kaomojiCategoryList.hasOwnProperty(cid) ) {
            var atag =  '<a href="javascript:void(0)" onClick="reloadKaomojiPanelHTML(\'' + targetID + '\',\'' + cid + '\')">' + kaomojiCategoryList[cid] + '</a><br>';
            html += (cid == categoryId)? '<strong>' + atag + '</strong>' : atag;
        }
    }
    
    html += '</td>';
    return html;
}

var kaomojiPanel;
function getKaomojiPanelElement() {
   return document.getElementById("kaomoji");
/*
   if (kaomojiPanel) { return kaomojiPanel }

   kaomojiPanel = document.createElement('div'); 
   // kaomojiPanel.style.position = 'absolute';   
   // kaomojiPanel.style.display = 'none';
   // kaomojiPanel.style.cssText += ";background-color:#FFFFFF; left: 30px; border:1 solid #000000; margin:0 0 0 0; padding:0 0 0 0;";
   kaomojiPanel.style.cssText += ";position: absolute; background: #fff; left: 30px; margin: 0; display: none; text-align: center; white-space: nowrap;";
   document.body.appendChild(kaomojiPanel);
   return kaomojiPanel;
*/
}

function setKaomoji(targetId, categoryId, i ) {
    var km = getKaomoji( categoryId, i );
    var e = document.getElementById(targetId);
    var str = km;
    insertStr(e, str);
    hideKaomojiPanel();
}

function getKaomoji( cid, i ) {
    return kaomojiList[cid][i];
}

var kaomojiCategoryList = {
    'Aisatsu' : '\u6328\u62F6',
    'Warai'   : '\u7B11\u3044',
    'Ikari'   : '\u6012\u308A',
    'Naki'    : '\u6CE3\u304D',
    'Odoroki' : '\u9A5A\u304D',
    'Sonota'  : '\u305D\u306E\u4ED6',
    'Line'    : '\u30E9\u30A4\u30F3'
}

var kaomojiList = {
    'Aisatsu' : [
        '(*\uFF65\u03C9\uFF65)\u30CE', '\uFF08\u3000\u00B4\u2200\uFF40\uFF09\u3064', '\uFF08\uFF65\u2200\uFF65)\u3064', '',
        '( -\u0434-)\uFF89', '\uFF08\u30FB\u25C7\u30FB\uFF09\u309E', '(\u3000\u00B4_\u309D`)\u30CE', '',
        '(\uFF61\uFF65\u03C9\uFF65)\uFF89\uFF9E', '(\uFF0A\uFF9F\u2200\uFF9F)\u3063', '(=\uFF9F\u03C9\uFF9F)\u4EBA(\uFF9F\u03C9\uFF9F=)\u3043\u3087\u3045\uFF01', '',
        '\u30FE(\u00B4\u03C9\uFF40\uFF1D\u00B4\u03C9\uFF40)\uFF89', '(*^\uFF65\uFF6A\uFF65)\uFF89', 'v(\uFFE3\u2207\uFFE3)v', '',
        '\u5DDD\uFFE3_\u309D\uFFE3)\uFF89', '\u5DDD\u30FB\u30E0\u30FB\u5DDD\u30CE', '(\uFFE3\u2220 \uFFE3 )\uFF89', ''
    ],
    'Warai' : [
        '.\uFF61\uFF9F+.(\uFF65\u2200\uFF65)\uFF9F+.\uFF9F', '\uFF08\u00B4\u2200\uFF40*)', '(\u2606\uFF9F\u2200\uFF9F)', '',
        '(*\u00B4\u0414\uFF40*)', '(\u00B4\u2200\uFF40)', '(\uFF9F\u2200\uFF9F)\uFF71\uFF8B\uFF6C\uFF8B\uFF6C', '',
        '\uFF08\u30FB\u2200\u30FB\uFF09', '\uFF08\uFF3E\u2200\uFF3E\uFF09', ' (\u00B4\u25BD\uFF40)', '',
        '\uFF08\u2032\u2200\uFF40\uFF09', '(\uFF65\u2200\uFF65)', '( \uFF9F\u2200\uFF9F)\uFF71\uFF8A\uFF8A\u516B\u516B\uFF89\u30FD\uFF89\u30FD\uFF89\u30FD\uFF89 \uFF3C / \uFF3C/ \uFF3C', '',
        '(\u2312-\u2312)', '(o^\u2207^o)\uFF89', '(^_^)\uFF86\uFF7A\uFF86\uFF7A', '\u30FE(=^\u25BD^=)\u30CE', '',
        '(*\u00B4\u2207\uFF40*)', '(*\uFFE3\u2207\uFFE3*)\uFF74\uFF8D\uFF8D', '(*\'-\'*)', '(\'\u25BD\'*)\uFF86\uFF8A\uFF9F\uFF6F\u266A', '',
        '(\u2312\u301C\u2312)', '(*\uFF9F\u25BD\uFF9F*)', '(\uFFE3\u30FC\uFFE3)\uFF86\uFF94\uFF98\uFF6F', '(\u2312\u2207\u2312)', ''
    ],
    'Ikari' : [
        '(\uFF40\uFF65\u0434\uFF65\u00B4)', '(\u30CE\uFF40\u0414\u00B4)\u30CE', '(\uFF9F\u76BF\uFF9F\uFF92)', '(\uFF03\uFF40\u76BF\u00B4)\u3000\uFF91\uFF77\uFF70\uFF70\uFF70\uFF70!', '',
        '(*`\u0414\')', '(\uFF9F\u0414\uFF9F)\uFF7A\uFF9E\uFF99\uFF67!!', '(\uFF9F\u0414\uFF9F\u2261\uFF9F\u0414\uFF9F)\uFF7A\uFF9E\uFF99\uFF6F\uFF8E\uFF70!!!', '(\uFF40\u25A1\u00B4)\uFF7A\uFF97\uFF6F!', '',
        '\u30FD(#`\u0414\u00B4)\uFF89', '(\u5C6E\uFF9F\u0414\uFF9F)\u5C6E \uFF76\uFF93\uFF70\uFF9D', '(\uFF40\u03B5\u00B4)\uFF91\uFF76\uFF70', '(\uFF40\uFF8D\u00B4) \uFF8C\uFF9D\uFF80\uFF9E!!!', '',
        '\uFF7A\uFF9E\u2501\u2501\u2501(#\uFF9F\u0414\uFF9F)=\u25CB)\uFF40\u0414)\uFF64\;\'.\uFF65\u2501\u2501\u2501\uFF99\uFF67!!', '',
        '(\u2267\u30D8\u2266) \uFF91\uFF69', '( \uFFE3\u3063\uFFE3)\uFF91\uFF69', '(\u30FB\u03B5\u30FB)\uFF91\uFF70', '(*\uFF65\u03B5\uFF65*)\uFF91\uFF70', '',
        '(-\u03B5-)\uFF8C\uFF9E\uFF70\uFF8C\uFF9E\uFF70', '(\uFF40\u03B5\u00B4)\u3076\u30FC\u3076\u30FC', '(\uFFE3\u2025\uFFE3)=3 \uFF8C\uFF9D', '',
        '(\uFF40\u0414\u00B4) \u30E0\u30AD\u30FC!', '(\uFF40-\u00B4\u30E1) \u30D7\u30F3\u30C3', '\u30FE(\u25BC\uFF8D\u25BC\uFF1B)\uFF75\uFF72\uFF7A\uFF97!', ''
    ],
    'Naki' : [
        '(\u00B4\u2212\u0434\u2212\uFF1B`)', '(\u00B4\uFF1B\u03C9\uFF1B`)', '\uFF61\uFF65\uFF9F\uFF65(\uFF89\u0414`)', '(\u30CE\u25C7\u2266\u3002) \uFF8B\uFF9E\uFF6A\uFF70\uFF9D!!', '',
        '\uFF61\uFF65\uFF9F(\uFF9F`\u0414)\uFF9E', '\u3002\u309C\uFF08\u00B4\u0414\uFF40\uFF09\u309C\u3002', '\uFF08\'A`|||\uFF09', '(\u30CE\u0434\u30FB\u3002) \uFF78\uFF9E\uFF7D\uFF9D', '',
        '(\uFF1B\u00B4\u0414\uFF40)', '(\u00B4\u0414\u2282)', '\uFF08\uFF34\u0414\uFF34\uFF09', '( p_q)\uFF74-\uFF9D', '(p_q*)\uFF7C\uFF78\uFF7C\uFF78', '',
        '\uFF61\uFF9F(\uFF9F\u00B4\u0414\uFF40\uFF9F)\u309C\uFF61\uFF73\uFF67\uFF67\uFF67\uFF9D', '\uFF08\uFF34\uFF3F\uFF34\uFF09', '(\u03C1\uFF9F\u2229\uFF9F) \uFF78\uFF9E\uFF7D\uFF9D', '\uFF08/T\u0414T)/', '',
        '\u3002\u309C\u309C(\u00B4\u25A1\uFF40\uFF61)\u00B0\u309C\u3002', '\uFF65\uFF9F\uFF65(\uFF89\u0414`;)\uFF65\uFF9F\uFF65', '\u30FD(T\u0434T)\u30CE', ''
    ],
    'Odoroki' : [
        '\u03B5=\u03B5=\uFF08\;\u00B4\u0414\uFF40\uFF09', '(((( \;\uFF9F\u0434\uFF9F)))', '(\uFF9F\u0414\uFF9F\u2261\uFF9F\u0434\uFF9F)\uFF74\uFF6F!?', '',
        '\u03A3(\uFF65\u03C9\uFF65\uFF89)\uFF89', '(\u3064\u0434\u2282)\uFF7A\uFF9E\uFF7C\uFF7A\uFF9E\uFF7C', '\u03A3(\u00B4\u0434\uFF40\;)', 'w(\uFF9Fo\uFF9F)w \uFF75\uFF75\uFF70!', '',
        '\uFF75\uFF75\uFF70w(*\uFF9Fo\uFF9F*)w', '\u03A3q|\uFF9F\u0414\uFF9F|p', '\u03A3(\uFF9F\u0434\uFF9F;)', '',
        '\uFF89(\uFFE3\uFF10\uFFE3;)\uFF3C\uFF75\uFF70!!\uFF89\uFF70!!!!',  '\u03A3\u30FE(\uFFE30\uFFE3;\uFF89', '(;\uFFE3\u0414\uFFE3)', '',
        '\u03A3(\uFF40\u25A1\u00B4/)/', '\u03A3(=\uFF9F\u03C9\uFF9F=;)', '\u03A3(\uFFE3\uFF9B\uFFE3|||)', '',
        '(\uFF9F\uFF9B\uFF9F;)\uFF74\uFF6A\uFF6F!?', '(\uFF9F\u2207\uFF9F ;)\uFF74\uFF6F!?', '\u03A3(\'\u25C7\'*)\uFF74\uFF6A\uFF6F!?', ''
    ],
    'Sonota' : [
        '( \u00B4_\u309D\uFF40)', '\uFF08 \u00B4,_\u309D\uFF40\uFF09', '( \u30FB\u0414\u30FB)', '(*\u00B4\uFF6A`*)', '',
        '(\'A`)', '(\'\u0434` \uFF1B)', '(\uFF9F\u0434\uFF9F)\uFF64\uFF8D\uFF9F\uFF6F', '(*\u00B4 -`)(\u00B4- `*)', '',
        '(\u25CF\u00B4\u03C9\uFF40\u25CF)', '\u03C6(\uFF0E\uFF0E )', '\u30FD(\uFF65\u03B5\uFF65)\u4EBA(\uFF65\u03B5\uFF65)\uFF89 \uFF85\uFF76\uFF8F', '',
        '(\uFF40\uFF65\u03C9\uFF65\u00B4)', '(\u00B4\uFF65\u03C9\uFF65\uFF40)', '(\uFFE3\u25BD\uFFE3;)!!\uFF76\uFF9E\uFF70\uFF9D', '',
        '(\u2261\u03C9\u2261\uFF0E)', '||:3\u30DF', '\uFF08\uFF08=\u309C\u30A8\u309C=\uFF09\uFF09', '(\uFF3F\u00B4\u0414\uFF40) \uFF71\uFF72\uFF70\uFF9D', ''
    ],
    'Line' : [
        '\u25A1\u25A0\u25A1\u25A0\u25A1\u25A0\u25A1\u25A0\u25A1', '\u2606\u2605\u2606\u2605\u2606\u2605\u2606\u2605', '',
        '\u2606*\uFF9F \u309C\uFF9F*\u2606*\u2606*\uFF9F', '\u309C\uFF9F*\u2606*\u2606*\uFF9F \u309C\uFF9F*\u2606', '',
        '\u25CB\u25CF\u25CB\u25CF\u25CB\u25CF\u25CB\u25CF\u25CB', '\u2501\u2500\u2501\u2500\u2501\u2500\u2501\u2500\u2501\u2500', '',
        '*\uFF65\u309C\uFF9F\uFF65*:.\uFF61..\uFF61.:*\uFF65\u309C', '\u2606\uFF9F+.\u2606\uFF9F+.\u2606\uFF9F+.\u2606\uFF9F+.', '',
        '.\u3002o\u25CBo\u3002.\u2605.\u3002o\u25CBo\u3002.\u2606', '\u30FB\u2025\u2026\u2501\u2501\u2501\u2606\u30FB\u2025\u2026\u2501\u2501\u2501\u2606', '',
        '\u25A1\u25A0*:;;;:*\u25A1\u25A0*:;;;:*\u25A0', '*:--\u2606--:*:--\u2606--:', '',
        '\u2606;+;\uFF61\uFF65\uFF9F\uFF65\uFF61;+;\u2606;+;\uFF61\uFF65\uFF9F\uFF65\uFF61;+;', '.\u3002o\u25CB.\uFF61o\u25CB.\uFF61o\u25CB.\uFF61o\u25CB', ''
    ]
}

var emoji_map={
  E63E:"sun",
  E63F:"cloudy",
  E640:"rain",
  E641:"snow",
  E642:"thunder",
  E643:"typhoon",
  E644:"fog",
  E645:"spit",
  E646:"aries",
  E647:"taurus",
  E648:"gemini",
  E649:"cancer",
  E64A:"leo",
  E64B:"virgo",
  E64C:"libra",
  E64D:"scorpion",
  E64E:"saggitarius",
  E64F:"goat",
  E650:"aquarius",
  E651:"fish",
  E652:"sports",
  E653:"baseball",
  E654:"golf",
  E655:"tennis",
  E656:"soccer",
  E657:"ski",
  E658:"basketball",
  E659:"motor_sports",
  E65A:"pocketbell",
  E65B:"train",
  E65C:"metro",
  E65D:"shinkansen",
  E65E:"car",
  E65F:"wagon",
  E660:"bus",
  E661:"ship",
  E662:"air_plane",
  E663:"house",
  E664:"building",
  E665:"post_office",
  E666:"hospital",
  E667:"bank",
  E668:"atm",
  E669:"hotel",
  E66A:"convenience",
  E66B:"gas_station",
  E66C:"parking",
  E66D:"signal",
  E66E:"wc",
  E66F:"restrant",
  E670:"cafe",
  E671:"bar",
  E672:"beer",
  E673:"fast_food",
  E674:"boutique",
  E675:"salon",
  E676:"karaoke",
  E677:"movie",
  E678:"ya_ru",
  E679:"themepark",
  E67A:"music",
  E67B:"art",
  E67C:"theater",
  E67D:"event",
  E67E:"ticket",
  E67F:"smoking",
  E680:"no_smoking",
  E681:"camera",
  E682:"bag",
  E683:"book",
  E684:"ribbon",
  E685:"present",
  E686:"birthday",
  E687:"telephone",
  E688:"mobile",
  E689:"memo",
  E68A:"tv",
  E68B:"game",
  E68C:"cd",
  E68D:"heart",
  E68E:"spade",
  E68F:"dia",
  E690:"clover",
  E691:"eye",
  E692:"ear",
  E693:"g_hand",
  E694:"c_hand",
  E695:"p_hand",
  E696:"ya_rd",
  E697:"ya_lu",
  E698:"leg",
  E699:"shoe",
  E69A:"eyeglass",
  E69B:"wheelchair",
  E69C:"new_moon",
  E69D:"lack_moon",
  E69E:"half_moon",
  E69F:"crescent",
  E6A0:"full_moon",
  E6A1:"dog",
  E6A2:"cat",
  E6A3:"resort",
  E6A4:"xmas",
  E6A5:"ya_ld",
  E6CE:"phone_to",
  E6CF:"mail_to",
  E6D0:"fax_to",
  E6D1:"imode",
  E6D2:"imode02",
  E6D3:"mail",
  E6D4:"by_docomo",
  E6D5:"docomo_point",
  E6D6:"pay",
  E6D7:"free",
  E6D8:"id",
  E6D9:"password",
  E6DA:"next",
  E6DB:"clear",
  E6DC:"search",
  E6DD:"new",
  E6DE:"where",
  E6DF:"free_dial",
  E6E0:"sharp_dial",
  E6E1:"mobq",
  E6E2:"01",
  E6E3:"02",
  E6E4:"03",
  E6E5:"04",
  E6E6:"05",
  E6E7:"06",
  E6E8:"07",
  E6E9:"08",
  E6EA:"09",
  E6EB:"00",
  E70B:"ok",
  E6EC:"b_heart",
  E6ED:"m_heart",
  E6EE:"break_heart",
  E6EF:"hearts",
  E6F0:"smile",
  E6F1:"anger",
  E6F2:"feel_down",
  E6F3:"feel_down02",
  E6F4:"swirl",
  E6F5:"good",
  E6F6:"note",
  E6F7:"hot_bath",
  E6F8:"cute",
  E6F9:"kiss_mark",
  E6FA:"pikapika",
  E6FB:"idea",
  E6FC:"muka",
  E6FD:"punch",
  E6FE:"bomb",
  E6FF:"mood",
  E700:"bad",
  E701:"sleepy",
  E702:"biccuri",
  E703:"question",
  E704:"biccuri02",
  E705:"shock",
  E706:"asease",
  E707:"taraaa",
  E708:"dash",
  E709:"bou1",
  E70A:"bou2",
  E6AC:"cachinko",
  E6AD:"pbag",
  E6AE:"pen",
  E6B1:"pshade",
  E6B2:"chair",
  E6B3:"night",
  E6B7:"soon",
  E6B8:"on",
  E6B9:"end",
  E6BA:"watch",
  E70C:"apri",
  E70D:"apri02",
  E70E:"tshirt",
  E70F:"wallet",
  E710:"makeup",
  E711:"jeans",
  E712:"snowboard",
  E713:"chapel",
  E714:"door",
  E715:"dollar",
  E716:"computer",
  E717:"loveletter",
  E718:"wrench",
  E719:"pencil",
  E71A:"crown",
  E71B:"ring",
  E71C:"sandglass",
  E71D:"bicycle",
  E71E:"jap_cup",
  E71F:"wristwatch",
  E720:"face_think",
  E721:"face_relief",
  E722:"face_csweat",
  E723:"face_csweat02",
  E724:"face_angry",
  E725:"face_nothing",
  E726:"face_hearteye",
  E727:"finger_ok",
  E728:"face_imp",
  E729:"face_wink",
  E72A:"face_happy",
  E72B:"face_endure",
  E72C:"cat02",
  E72D:"face_cry",
  E72E:"face_tear",
  E72F:"ng",
  E730:"clip",
  E731:"copyright",
  E732:"trademark",
  E733:"runner",
  E734:"secret",
  E735:"recycl",
  E736:"r_trademark",
  E737:"danger",
  E738:"prohibition",
  E739:"vacancy",
  E73A:"passmark",
  E73B:"full",
  E73C:"arrow_rl",
  E73D:"arrow_bt",
  E73E:"school",
  E73F:"wave",
  E740:"mtfuji",
  E741:"f_clover",
  E742:"cherry",
  E743:"tulip",
  E744:"banana",
  E745:"apple",
  E746:"bud",
  E747:"maple",
  E748:"cherry_blossom",
  E749:"onigiri",
  E74A:"shortcake",
  E74B:"sake_bottle",
  E74C:"rice_bowl",
  E74D:"bread",
  E74E:"snail",
  E74F:"chick",
  E750:"penguin",
  E751:"s_fish",
  E752:"face_delicious",
  E753:"face_foppish",
  E754:"horse",
  E755:"pig",
  E756:"wineglass",
  E757:"face_pinch"
};

var emoji_list = [
  {shape: 'rect', coords: '0,0,16,16', alt: '\u6674\u308C', title: '\u6674\u308C', id: 'E63E'},
  {shape: 'rect', coords: '16,0,32,16', alt: '\u66C7\u308A', title: '\u66C7\u308A', id: 'E63F'},
  {shape: 'rect', coords: '32,0,48,16', alt: '\u96E8', title: '\u96E8', id: 'E640'},
  {shape: 'rect', coords: '48,0,64,16', alt: '\u96EA', title: '\u96EA', id: 'E641'},
  {shape: 'rect', coords: '64,0,80,16', alt: '\u96F7', title: '\u96F7', id: 'E642'},
  {shape: 'rect', coords: '80,0,96,16', alt: '\u53F0\u98A8', title: '\u53F0\u98A8', id: 'E643'},
  {shape: 'rect', coords: '96,0,112,16', alt: '\u9727', title: '\u9727', id: 'E644'},
  {shape: 'rect', coords: '112,0,128,16', alt: '\u5C0F\u96E8', title: '\u5C0F\u96E8', id: 'E645'},
  {shape: 'rect', coords: '128,0,144,16', alt: '\u7261\u7F8A\u5EA7', title: '\u7261\u7F8A\u5EA7', id: 'E646'},
  {shape: 'rect', coords: '144,0,160,16', alt: '\u7261\u725B\u5EA7', title: '\u7261\u725B\u5EA7', id: 'E647'},
  {shape: 'rect', coords: '160,0,176,16', alt: '\u53CC\u5B50\u5EA7', title: '\u53CC\u5B50\u5EA7', id: 'E648'},
  {shape: 'rect', coords: '176,0,192,16', alt: '\u87F9\u5EA7', title: '\u87F9\u5EA7', id: 'E649'},
  {shape: 'rect', coords: '192,0,208,16', alt: '\u7345\u5B50\u5EA7', title: '\u7345\u5B50\u5EA7', id: 'E64A'},
  {shape: 'rect', coords: '208,0,224,16', alt: '\u4E59\u5973\u5EA7', title: '\u4E59\u5973\u5EA7', id: 'E64B'},
  {shape: 'rect', coords: '0,16,16,32', alt: '\u5929\u79E4\u5EA7', title: '\u5929\u79E4\u5EA7', id: 'E64C'},
  {shape: 'rect', coords: '16,16,32,32', alt: '\u880D\u5EA7', title: '\u880D\u5EA7', id: 'E64D'},
  {shape: 'rect', coords: '32,16,48,32', alt: '\u5C04\u624B\u5EA7', title: '\u5C04\u624B\u5EA7', id: 'E64E'},
  {shape: 'rect', coords: '48,16,64,32', alt: '\u5C71\u7F8A\u5EA7', title: '\u5C71\u7F8A\u5EA7', id: 'E64F'},
  {shape: 'rect', coords: '64,16,80,32', alt: '\u6C34\u74F6\u5EA7', title: '\u6C34\u74F6\u5EA7', id: 'E650'},
  {shape: 'rect', coords: '80,16,96,32', alt: '\u9B5A\u5EA7', title: '\u9B5A\u5EA7', id: 'E651'},
  {shape: 'rect', coords: '96,16,112,32', alt: '\u30B9\u30DD\u30FC\u30C4', title: '\u30B9\u30DD\u30FC\u30C4', id: 'E652'},
  {shape: 'rect', coords: '112,16,128,32', alt: '\u91CE\u7403', title: '\u91CE\u7403', id: 'E653'},
  {shape: 'rect', coords: '128,16,144,32', alt: '\u30B4\u30EB\u30D5', title: '\u30B4\u30EB\u30D5', id: 'E654'},
  {shape: 'rect', coords: '144,16,160,32', alt: '\u30C6\u30CB\u30B9', title: '\u30C6\u30CB\u30B9', id: 'E655'},
  {shape: 'rect', coords: '160,16,176,32', alt: '\u30B5\u30C3\u30AB\u30FC', title: '\u30B5\u30C3\u30AB\u30FC', id: 'E656'},
  {shape: 'rect', coords: '176,16,192,32', alt: '\u30B9\u30AD\u30FC', title: '\u30B9\u30AD\u30FC', id: 'E657'},
  {shape: 'rect', coords: '192,16,208,32', alt: '\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB', title: '\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB', id: 'E658'},
  {shape: 'rect', coords: '208,16,224,32', alt: '\u30E2\u30FC\u30BF\u30FC\u30B9\u30DD\u30FC\u30C4', title: '\u30E2\u30FC\u30BF\u30FC\u30B9\u30DD\u30FC\u30C4', id: 'E659'},
  {shape: 'rect', coords: '0,32,16,48', alt: '\u30DD\u30B1\u30C3\u30C8\u30D9\u30EB', title: '\u30DD\u30B1\u30C3\u30C8\u30D9\u30EB', id: 'E65A'},
  {shape: 'rect', coords: '16,32,32,48', alt: '\u96FB\u8ECA', title: '\u96FB\u8ECA', id: 'E65B'},
  {shape: 'rect', coords: '32,32,48,48', alt: '\u5730\u4E0B\u9244', title: '\u5730\u4E0B\u9244', id: 'E65C'},
  {shape: 'rect', coords: '48,32,64,48', alt: '\u65B0\u5E79\u7DDA', title: '\u65B0\u5E79\u7DDA', id: 'E65D'},
  {shape: 'rect', coords: '64,32,80,48', alt: '\u8ECA\uFF08\u30BB\u30C0\u30F3\uFF09', title: '\u8ECA\uFF08\u30BB\u30C0\u30F3\uFF09', id: 'E65E'},
  {shape: 'rect', coords: '80,32,96,48', alt: '\u8ECA\uFF08\uFF32\uFF36\uFF09', title: '\u8ECA\uFF08\uFF32\uFF36\uFF09', id: 'E65F'},
  {shape: 'rect', coords: '96,32,112,48', alt: '\u30D0\u30B9', title: '\u30D0\u30B9', id: 'E660'},
  {shape: 'rect', coords: '112,32,128,48', alt: '\u8239', title: '\u8239', id: 'E661'},
  {shape: 'rect', coords: '128,32,144,48', alt: '\u98DB\u884C\u6A5F', title: '\u98DB\u884C\u6A5F', id: 'E662'},
  {shape: 'rect', coords: '144,32,160,48', alt: '\u5BB6', title: '\u5BB6', id: 'E663'},
  {shape: 'rect', coords: '160,32,176,48', alt: '\u30D3\u30EB', title: '\u30D3\u30EB', id: 'E664'},
  {shape: 'rect', coords: '176,32,192,48', alt: '\u90F5\u4FBF\u5C40', title: '\u90F5\u4FBF\u5C40', id: 'E665'},
  {shape: 'rect', coords: '192,32,208,48', alt: '\u75C5\u9662', title: '\u75C5\u9662', id: 'E666'},
  {shape: 'rect', coords: '208,32,224,48', alt: '\u9280\u884C', title: '\u9280\u884C', id: 'E667'},
  {shape: 'rect', coords: '0,48,16,64', alt: '\uFF21\uFF34\uFF2D', title: '\uFF21\uFF34\uFF2D', id: 'E668'},
  {shape: 'rect', coords: '16,48,32,64', alt: '\u30DB\u30C6\u30EB', title: '\u30DB\u30C6\u30EB', id: 'E669'},
  {shape: 'rect', coords: '32,48,48,64', alt: '\u30B3\u30F3\u30D3\u30CB', title: '\u30B3\u30F3\u30D3\u30CB', id: 'E66A'},
  {shape: 'rect', coords: '48,48,64,64', alt: '\u30AC\u30BD\u30EA\u30F3\u30B9\u30BF\u30F3\u30C9', title: '\u30AC\u30BD\u30EA\u30F3\u30B9\u30BF\u30F3\u30C9', id: 'E66B'},
  {shape: 'rect', coords: '64,48,80,64', alt: '\u99D0\u8ECA\u5834', title: '\u99D0\u8ECA\u5834', id: 'E66C'},
  {shape: 'rect', coords: '80,48,96,64', alt: '\u4FE1\u53F7', title: '\u4FE1\u53F7', id: 'E66D'},
  {shape: 'rect', coords: '96,48,112,64', alt: '\u30C8\u30A4\u30EC', title: '\u30C8\u30A4\u30EC', id: 'E66E'},
  {shape: 'rect', coords: '112,48,128,64', alt: '\u30EC\u30B9\u30C8\u30E9\u30F3', title: '\u30EC\u30B9\u30C8\u30E9\u30F3', id: 'E66F'},
  {shape: 'rect', coords: '128,48,144,64', alt: '\u55AB\u8336\u5E97', title: '\u55AB\u8336\u5E97', id: 'E670'},
  {shape: 'rect', coords: '144,48,160,64', alt: '\u30D0\u30FC', title: '\u30D0\u30FC', id: 'E671'},
  {shape: 'rect', coords: '160,48,176,64', alt: '\u30D3\u30FC\u30EB', title: '\u30D3\u30FC\u30EB', id: 'E672'},
  {shape: 'rect', coords: '176,48,192,64', alt: '\u30D5\u30A1\u30FC\u30B9\u30C8\u30D5\u30FC\u30C9', title: '\u30D5\u30A1\u30FC\u30B9\u30C8\u30D5\u30FC\u30C9', id: 'E673'},
  {shape: 'rect', coords: '192,48,208,64', alt: '\u30D6\u30C6\u30A3\u30C3\u30AF', title: '\u30D6\u30C6\u30A3\u30C3\u30AF', id: 'E674'},
  {shape: 'rect', coords: '208,48,224,64', alt: '\u7F8E\u5BB9\u9662', title: '\u7F8E\u5BB9\u9662', id: 'E675'},
  {shape: 'rect', coords: '0,64,16,80', alt: '\u30AB\u30E9\u30AA\u30B1', title: '\u30AB\u30E9\u30AA\u30B1', id: 'E676'},
  {shape: 'rect', coords: '16,64,32,80', alt: '\u6620\u753B', title: '\u6620\u753B', id: 'E677'},
  {shape: 'rect', coords: '32,64,48,80', alt: '\u53F3\u659C\u3081\u4E0A', title: '\u53F3\u659C\u3081\u4E0A', id: 'E678'},
  {shape: 'rect', coords: '48,64,64,80', alt: '\u904A\u5712\u5730', title: '\u904A\u5712\u5730', id: 'E679'},
  {shape: 'rect', coords: '64,64,80,80', alt: '\u97F3\u697D', title: '\u97F3\u697D', id: 'E67A'},
  {shape: 'rect', coords: '80,64,96,80', alt: '\u30A2\u30FC\u30C8', title: '\u30A2\u30FC\u30C8', id: 'E67B'},
  {shape: 'rect', coords: '96,64,112,80', alt: '\u6F14\u5287', title: '\u6F14\u5287', id: 'E67C'},
  {shape: 'rect', coords: '112,64,128,80', alt: '\u30A4\u30D9\u30F3\u30C8', title: '\u30A4\u30D9\u30F3\u30C8', id: 'E67D'},
  {shape: 'rect', coords: '128,64,144,80', alt: '\u30C1\u30B1\u30C3\u30C8', title: '\u30C1\u30B1\u30C3\u30C8', id: 'E67E'},
  {shape: 'rect', coords: '144,64,160,80', alt: '\u55AB\u7159', title: '\u55AB\u7159', id: 'E67F'},
  {shape: 'rect', coords: '160,64,176,80', alt: '\u7981\u7159', title: '\u7981\u7159', id: 'E680'},
  {shape: 'rect', coords: '176,64,192,80', alt: '\u30AB\u30E1\u30E9', title: '\u30AB\u30E1\u30E9', id: 'E681'},
  {shape: 'rect', coords: '192,64,208,80', alt: '\u30AB\u30D0\u30F3', title: '\u30AB\u30D0\u30F3', id: 'E682'},
  {shape: 'rect', coords: '208,64,224,80', alt: '\u672C', title: '\u672C', id: 'E683'},
  {shape: 'rect', coords: '0,80,16,96', alt: '\u30EA\u30DC\u30F3', title: '\u30EA\u30DC\u30F3', id: 'E684'},
  {shape: 'rect', coords: '16,80,32,96', alt: '\u30D7\u30EC\u30BC\u30F3\u30C8', title: '\u30D7\u30EC\u30BC\u30F3\u30C8', id: 'E685'},
  {shape: 'rect', coords: '32,80,48,96', alt: '\u30D0\u30FC\u30B9\u30C7\u30FC', title: '\u30D0\u30FC\u30B9\u30C7\u30FC', id: 'E686'},
  {shape: 'rect', coords: '48,80,64,96', alt: '\u96FB\u8A71', title: '\u96FB\u8A71', id: 'E687'},
  {shape: 'rect', coords: '64,80,80,96', alt: '\u643A\u5E2F\u96FB\u8A71', title: '\u643A\u5E2F\u96FB\u8A71', id: 'E688'},
  {shape: 'rect', coords: '80,80,96,96', alt: '\u30E1\u30E2', title: '\u30E1\u30E2', id: 'E689'},
  {shape: 'rect', coords: '96,80,112,96', alt: '\uFF34\uFF36', title: '\uFF34\uFF36', id: 'E68A'},
  {shape: 'rect', coords: '112,80,128,96', alt: '\u30B2\u30FC\u30E0', title: '\u30B2\u30FC\u30E0', id: 'E68B'},
  {shape: 'rect', coords: '128,80,144,96', alt: '\uFF23\uFF24', title: '\uFF23\uFF24', id: 'E68C'},
  {shape: 'rect', coords: '144,80,160,96', alt: '\u30CF\u30FC\u30C8', title: '\u30CF\u30FC\u30C8', id: 'E68D'},
  {shape: 'rect', coords: '160,80,176,96', alt: '\u30B9\u30DA\u30FC\u30C9', title: '\u30B9\u30DA\u30FC\u30C9', id: 'E68E'},
  {shape: 'rect', coords: '176,80,192,96', alt: '\u30C0\u30A4\u30E4', title: '\u30C0\u30A4\u30E4', id: 'E68F'},
  {shape: 'rect', coords: '192,80,208,96', alt: '\u30AF\u30E9\u30D6', title: '\u30AF\u30E9\u30D6', id: 'E690'},
  {shape: 'rect', coords: '208,80,224,96', alt: '\u76EE', title: '\u76EE', id: 'E691'},
  {shape: 'rect', coords: '0,96,16,112', alt: '\u8033', title: '\u8033', id: 'E692'},
  {shape: 'rect', coords: '16,96,32,112', alt: '\u624B\uFF08\u30B0\u30FC\uFF09', title: '\u624B\uFF08\u30B0\u30FC\uFF09', id: 'E693'},
  {shape: 'rect', coords: '32,96,48,112', alt: '\u624B\uFF08\u30C1\u30E7\u30AD\uFF09', title: '\u624B\uFF08\u30C1\u30E7\u30AD\uFF09', id: 'E694'},
  {shape: 'rect', coords: '48,96,64,112', alt: '\u624B\uFF08\u30D1\u30FC\uFF09', title: '\u624B\uFF08\u30D1\u30FC\uFF09', id: 'E695'},
  {shape: 'rect', coords: '64,96,80,112', alt: '\u53F3\u659C\u3081\u4E0B', title: '\u53F3\u659C\u3081\u4E0B', id: 'E696'},
  {shape: 'rect', coords: '80,96,96,112', alt: '\u5DE6\u659C\u3081\u4E0A', title: '\u5DE6\u659C\u3081\u4E0A', id: 'E697'},
  {shape: 'rect', coords: '96,96,112,112', alt: '\u8DB3', title: '\u8DB3', id: 'E698'},
  {shape: 'rect', coords: '112,96,128,112', alt: '\u304F\u3064', title: '\u304F\u3064', id: 'E699'},
  {shape: 'rect', coords: '128,96,144,112', alt: '\u773C\u93E1', title: '\u773C\u93E1', id: 'E69A'},
  {shape: 'rect', coords: '144,96,160,112', alt: '\u8ECA\u6905\u5B50', title: '\u8ECA\u6905\u5B50', id: 'E69B'},
  {shape: 'rect', coords: '160,96,176,112', alt: '\u65B0\u6708', title: '\u65B0\u6708', id: 'E69C'},
  {shape: 'rect', coords: '176,96,192,112', alt: '\u3084\u3084\u6B20\u3051\u6708', title: '\u3084\u3084\u6B20\u3051\u6708', id: 'E69D'},
  {shape: 'rect', coords: '192,96,208,112', alt: '\u534A\u6708', title: '\u534A\u6708', id: 'E69E'},
  {shape: 'rect', coords: '208,96,224,112', alt: '\u4E09\u65E5\u6708', title: '\u4E09\u65E5\u6708', id: 'E69F'},
  {shape: 'rect', coords: '0,112,16,128', alt: '\u6E80\u6708', title: '\u6E80\u6708', id: 'E6A0'},
  {shape: 'rect', coords: '16,112,32,128', alt: '\u72AC', title: '\u72AC', id: 'E6A1'},
  {shape: 'rect', coords: '32,112,48,128', alt: '\u732B', title: '\u732B', id: 'E6A2'},
  {shape: 'rect', coords: '48,112,64,128', alt: '\u30EA\u30BE\u30FC\u30C8', title: '\u30EA\u30BE\u30FC\u30C8', id: 'E6A3'},
  {shape: 'rect', coords: '64,112,80,128', alt: '\u30AF\u30EA\u30B9\u30DE\u30B9', title: '\u30AF\u30EA\u30B9\u30DE\u30B9', id: 'E6A4'},
  {shape: 'rect', coords: '80,112,96,128', alt: '\u5DE6\u659C\u3081\u4E0B', title: '\u5DE6\u659C\u3081\u4E0B', id: 'E6A5'},
  {shape: 'rect', coords: '96,112,112,128', alt: '\u30AB\u30C1\u30F3\u30B3', title: '\u30AB\u30C1\u30F3\u30B3', id: 'E6AC'},
  {shape: 'rect', coords: '112,112,128,128', alt: '\u3075\u304F\u308D', title: '\u3075\u304F\u308D', id: 'E6AD'},
  {shape: 'rect', coords: '128,112,144,128', alt: '\u30DA\u30F3', title: '\u30DA\u30F3', id: 'E6AE'},
  {shape: 'rect', coords: '144,112,160,128', alt: '\u4EBA\u5F71', title: '\u4EBA\u5F71', id: 'E6B1'},
  {shape: 'rect', coords: '160,112,176,128', alt: '\u3044\u3059', title: '\u3044\u3059', id: 'E6B2'},
  {shape: 'rect', coords: '176,112,192,128', alt: '\u591C', title: '\u591C', id: 'E6B3'},
  {shape: 'rect', coords: '192,112,208,128', alt: 'soon', title: 'soon', id: 'E6B7'},
  {shape: 'rect', coords: '208,112,224,128', alt: 'on', title: 'on', id: 'E6B8'},
  {shape: 'rect', coords: '0,128,16,144', alt: 'end', title: 'end', id: 'E6B9'},
  {shape: 'rect', coords: '16,128,32,144', alt: '\u6642\u8A08', title: '\u6642\u8A08', id: 'E6BA'},
  {shape: 'rect', coords: '32,128,48,144', alt: 'phone', title: 'phone', id: 'E6CE'},
  {shape: 'rect', coords: '48,128,64,144', alt: 'mail', title: 'mail', id: 'E6CF'},
  {shape: 'rect', coords: '64,128,80,144', alt: 'fax', title: 'fax', id: 'E6D0'},
  {shape: 'rect', coords: '80,128,96,144', alt: 'i\u30E2\u30FC\u30C9', title: 'i\u30E2\u30FC\u30C9', id: 'E6D1'},
  {shape: 'rect', coords: '96,128,112,144', alt: 'i\u30E2\u30FC\u30C9\uFF08\u67A0\u4ED8\u304D\uFF09', title: 'i\u30E2\u30FC\u30C9\uFF08\u67A0\u4ED8\u304D\uFF09', id: 'E6D2'},
  {shape: 'rect', coords: '112,128,128,144', alt: '\u30E1\u30FC\u30EB', title: '\u30E1\u30FC\u30EB', id: 'E6D3'},
  {shape: 'rect', coords: '128,128,144,144', alt: '\u30C9\u30B3\u30E2\u63D0\u4F9B', title: '\u30C9\u30B3\u30E2\u63D0\u4F9B', id: 'E6D4'},
  {shape: 'rect', coords: '144,128,160,144', alt: '\u30C9\u30B3\u30E2\u30DD\u30A4\u30F3\u30C8', title: '\u30C9\u30B3\u30E2\u30DD\u30A4\u30F3\u30C8', id: 'E6D5'},
  {shape: 'rect', coords: '160,128,176,144', alt: '\u6709\u6599', title: '\u6709\u6599', id: 'E6D6'},
  {shape: 'rect', coords: '176,128,192,144', alt: '\u7121\u6599', title: '\u7121\u6599', id: 'E6D7'},
  {shape: 'rect', coords: '192,128,208,144', alt: 'ID', title: 'ID', id: 'E6D8'},
  {shape: 'rect', coords: '208,128,224,144', alt: '\u30D1\u30B9\u30EF\u30FC\u30C9', title: '\u30D1\u30B9\u30EF\u30FC\u30C9', id: 'E6D9'},
  {shape: 'rect', coords: '0,144,16,160', alt: '\u6B21\u9805\u6709', title: '\u6B21\u9805\u6709', id: 'E6DA'},
  {shape: 'rect', coords: '16,144,32,160', alt: '\u30AF\u30EA\u30A2', title: '\u30AF\u30EA\u30A2', id: 'E6DB'},
  {shape: 'rect', coords: '32,144,48,160', alt: '\u30B5\u30FC\u30C1\uFF08\u8ABF\u3079\u308B\uFF09', title: '\u30B5\u30FC\u30C1\uFF08\u8ABF\u3079\u308B\uFF09', id: 'E6DC'},
  {shape: 'rect', coords: '48,144,64,160', alt: '\uFF2E\uFF25\uFF37', title: '\uFF2E\uFF25\uFF37', id: 'E6DD'},
  {shape: 'rect', coords: '64,144,80,160', alt: '\u4F4D\u7F6E\u60C5\u5831', title: '\u4F4D\u7F6E\u60C5\u5831', id: 'E6DE'},
  {shape: 'rect', coords: '80,144,96,160', alt: '\u30D5\u30EA\u30FC\u30C0\u30A4\u30E4\u30EB', title: '\u30D5\u30EA\u30FC\u30C0\u30A4\u30E4\u30EB', id: 'E6DF'},
  {shape: 'rect', coords: '96,144,112,160', alt: '\u30B7\u30E3\u30FC\u30D7\u30C0\u30A4\u30E4\u30EB', title: '\u30B7\u30E3\u30FC\u30D7\u30C0\u30A4\u30E4\u30EB', id: 'E6E0'},
  {shape: 'rect', coords: '112,144,128,160', alt: '\u30E2\u30D0\uFF31', title: '\u30E2\u30D0\uFF31', id: 'E6E1'},
  {shape: 'rect', coords: '128,144,144,160', alt: '1', title: '1', id: 'E6E2'},
  {shape: 'rect', coords: '144,144,160,160', alt: '2', title: '2', id: 'E6E3'},
  {shape: 'rect', coords: '160,144,176,160', alt: '3', title: '3', id: 'E6E4'},
  {shape: 'rect', coords: '176,144,192,160', alt: '4', title: '4', id: 'E6E5'},
  {shape: 'rect', coords: '192,144,208,160', alt: '5', title: '5', id: 'E6E6'},
  {shape: 'rect', coords: '208,144,224,160', alt: '6', title: '6', id: 'E6E7'},
  {shape: 'rect', coords: '0,160,16,176', alt: '7', title: '7', id: 'E6E8'},
  {shape: 'rect', coords: '16,160,32,176', alt: '8', title: '8', id: 'E6E9'},
  {shape: 'rect', coords: '32,160,48,176', alt: '9', title: '9', id: 'E6EA'},
  {shape: 'rect', coords: '48,160,64,176', alt: '0', title: '0', id: 'E6EB'},
  {shape: 'rect', coords: '64,160,80,176', alt: '\u9ED2\u30CF\u30FC\u30C8', title: '\u9ED2\u30CF\u30FC\u30C8', id: 'E6EC'},
  {shape: 'rect', coords: '80,160,96,176', alt: '\u63FA\u308C\u308B\u30CF\u30FC\u30C8', title: '\u63FA\u308C\u308B\u30CF\u30FC\u30C8', id: 'E6ED'},
  {shape: 'rect', coords: '96,160,112,176', alt: '\u5931\u604B', title: '\u5931\u604B', id: 'E6EE'},
  {shape: 'rect', coords: '112,160,128,176', alt: '\u30CF\u30FC\u30C8\u305F\u3061\uFF08\u8907\u6570\u30CF\u30FC\u30C8\uFF09', title: '\u30CF\u30FC\u30C8\u305F\u3061\uFF08\u8907\u6570\u30CF\u30FC\u30C8\uFF09', id: 'E6EF'},
  {shape: 'rect', coords: '128,160,144,176', alt: '\u308F\u30FC\u3044\uFF08\u5B09\u3057\u3044\u9854\uFF09', title: '\u308F\u30FC\u3044\uFF08\u5B09\u3057\u3044\u9854\uFF09', id: 'E6F0'},
  {shape: 'rect', coords: '144,160,160,176', alt: '\u3061\u3063\uFF08\u6012\u3063\u305F\u9854\uFF09', title: '\u3061\u3063\uFF08\u6012\u3063\u305F\u9854\uFF09', id: 'E6F1'},
  {shape: 'rect', coords: '160,160,176,176', alt: '\u304C\u304F\u301C\uFF08\u843D\u80C6\u3057\u305F\u9854\uFF09', title: '\u304C\u304F\u301C\uFF08\u843D\u80C6\u3057\u305F\u9854\uFF09', id: 'E6F2'},
  {shape: 'rect', coords: '176,160,192,176', alt: '\u3082\u3046\u3084\u3060\u301C\uFF08\u60B2\u3057\u3044\u9854\uFF09', title: '\u3082\u3046\u3084\u3060\u301C\uFF08\u60B2\u3057\u3044\u9854\uFF09', id: 'E6F3'},
  {shape: 'rect', coords: '192,160,208,176', alt: '\u3075\u3089\u3075\u3089', title: '\u3075\u3089\u3075\u3089', id: 'E6F4'},
  {shape: 'rect', coords: '208,160,224,176', alt: '\u30B0\u30C3\u30C9\uFF08\u4E0A\u5411\u304D\u77E2\u5370\uFF09', title: '\u30B0\u30C3\u30C9\uFF08\u4E0A\u5411\u304D\u77E2\u5370\uFF09', id: 'E6F5'},
  {shape: 'rect', coords: '0,176,16,192', alt: '\u308B\u3093\u308B\u3093', title: '\u308B\u3093\u308B\u3093', id: 'E6F6'},
  {shape: 'rect', coords: '16,176,32,192', alt: '\u3044\u3044\u6C17\u5206\uFF08\u6E29\u6CC9\uFF09', title: '\u3044\u3044\u6C17\u5206\uFF08\u6E29\u6CC9\uFF09', id: 'E6F7'},
  {shape: 'rect', coords: '32,176,48,192', alt: '\u304B\u308F\u3044\u3044', title: '\u304B\u308F\u3044\u3044', id: 'E6F8'},
  {shape: 'rect', coords: '48,176,64,192', alt: '\u30AD\u30B9\u30DE\u30FC\u30AF', title: '\u30AD\u30B9\u30DE\u30FC\u30AF', id: 'E6F9'},
  {shape: 'rect', coords: '64,176,80,192', alt: '\u3074\u304B\u3074\u304B\uFF08\u65B0\u3057\u3044\uFF09', title: '\u3074\u304B\u3074\u304B\uFF08\u65B0\u3057\u3044\uFF09', id: 'E6FA'},
  {shape: 'rect', coords: '80,176,96,192', alt: '\u3072\u3089\u3081\u304D', title: '\u3072\u3089\u3081\u304D', id: 'E6FB'},
  {shape: 'rect', coords: '96,176,112,192', alt: '\u3080\u304B\u3063\uFF08\u6012\u308A\uFF09', title: '\u3080\u304B\u3063\uFF08\u6012\u308A\uFF09', id: 'E6FC'},
  {shape: 'rect', coords: '112,176,128,192', alt: '\u30D1\u30F3\u30C1', title: '\u30D1\u30F3\u30C1', id: 'E6FD'},
  {shape: 'rect', coords: '128,176,144,192', alt: '\u7206\u5F3E', title: '\u7206\u5F3E', id: 'E6FE'},
  {shape: 'rect', coords: '144,176,160,192', alt: '\u30E0\u30FC\u30C9', title: '\u30E0\u30FC\u30C9', id: 'E6FF'},
  {shape: 'rect', coords: '160,176,176,192', alt: '\u30D0\u30C3\u30C9\uFF08\u4E0B\u5411\u304D\u77E2\u5370\uFF09', title: '\u30D0\u30C3\u30C9\uFF08\u4E0B\u5411\u304D\u77E2\u5370\uFF09', id: 'E700'},
  {shape: 'rect', coords: '176,176,192,192', alt: '\u7720\u3044(\u7761\u7720)', title: '\u7720\u3044(\u7761\u7720)', id: 'E701'},
  {shape: 'rect', coords: '192,176,208,192', alt: 'exclamation', title: 'exclamation', id: 'E702'},
  {shape: 'rect', coords: '208,176,224,192', alt: 'exclamation&amp;question', title: 'exclamation&amp;question', id: 'E703'},
  {shape: 'rect', coords: '0,192,16,208', alt: 'exclamation\u00D72', title: 'exclamation\u00D72', id: 'E704'},
  {shape: 'rect', coords: '16,192,32,208', alt: '\u3069\u3093\u3063\uFF08\u885D\u6483\uFF09', title: '\u3069\u3093\u3063\uFF08\u885D\u6483\uFF09', id: 'E705'},
  {shape: 'rect', coords: '32,192,48,208', alt: '\u3042\u305B\u3042\u305B\uFF08\u98DB\u3073\u6563\u308B\u6C57\uFF09', title: '\u3042\u305B\u3042\u305B\uFF08\u98DB\u3073\u6563\u308B\u6C57\uFF09', id: 'E706'},
  {shape: 'rect', coords: '48,192,64,208', alt: '\u305F\u3089\u30FC\u3063\uFF08\u6C57\uFF09', title: '\u305F\u3089\u30FC\u3063\uFF08\u6C57\uFF09', id: 'E707'},
  {shape: 'rect', coords: '64,192,80,208', alt: '\u30C0\u30C3\u30B7\u30E5\uFF08\u8D70\u308A\u51FA\u3059\u3055\u307E\uFF09', title: '\u30C0\u30C3\u30B7\u30E5\uFF08\u8D70\u308A\u51FA\u3059\u3055\u307E\uFF09', id: 'E708'},
  {shape: 'rect', coords: '80,192,96,208', alt: '\u30FC\uFF08\u9577\u97F3\u8A18\u53F7\uFF11\uFF09', title: '\u30FC\uFF08\u9577\u97F3\u8A18\u53F7\uFF11\uFF09', id: 'E709'},
  {shape: 'rect', coords: '96,192,112,208', alt: '\u30FC\uFF08\u9577\u97F3\u8A18\u53F7\uFF12\uFF09', title: '\u30FC\uFF08\u9577\u97F3\u8A18\u53F7\uFF12\uFF09', id: 'E70A'},
  {shape: 'rect', coords: '112,192,128,208', alt: '\u6C7A\u5B9A', title: '\u6C7A\u5B9A', id: 'E70B'},
  {shape: 'rect', coords: '128,192,144,208', alt: 'i\u30A2\u30D7\u30EA', title: 'i\u30A2\u30D7\u30EA', id: 'E70C'},
  {shape: 'rect', coords: '144,192,160,208', alt: 'i\u30A2\u30D7\u30EA\uFF08\u67A0\u4ED8\u304D\uFF09', title: 'i\u30A2\u30D7\u30EA\uFF08\u67A0\u4ED8\u304D\uFF09', id: 'E70D'},
  {shape: 'rect', coords: '160,192,176,208', alt: 'T\u30B7\u30E3\u30C4\uFF08\u30DC\u30FC\u30C0\u30FC\uFF09', title: 'T\u30B7\u30E3\u30C4\uFF08\u30DC\u30FC\u30C0\u30FC\uFF09', id: 'E70E'},
  {shape: 'rect', coords: '176,192,192,208', alt: '\u304C\u307E\u53E3\u8CA1\u5E03', title: '\u304C\u307E\u53E3\u8CA1\u5E03', id: 'E70F'},
  {shape: 'rect', coords: '192,192,208,208', alt: '\u5316\u7CA7', title: '\u5316\u7CA7', id: 'E710'},
  {shape: 'rect', coords: '208,192,224,208', alt: '\u30B8\u30FC\u30F3\u30BA', title: '\u30B8\u30FC\u30F3\u30BA', id: 'E711'},
  {shape: 'rect', coords: '0,208,16,224', alt: '\u30B9\u30CE\u30DC', title: '\u30B9\u30CE\u30DC', id: 'E712'},
  {shape: 'rect', coords: '16,208,32,224', alt: '\u30C1\u30E3\u30DA\u30EB', title: '\u30C1\u30E3\u30DA\u30EB', id: 'E713'},
  {shape: 'rect', coords: '32,208,48,224', alt: '\u30C9\u30A2', title: '\u30C9\u30A2', id: 'E714'},
  {shape: 'rect', coords: '48,208,64,224', alt: '\u30C9\u30EB\u888B', title: '\u30C9\u30EB\u888B', id: 'E715'},
  {shape: 'rect', coords: '64,208,80,224', alt: '\u30D1\u30BD\u30B3\u30F3', title: '\u30D1\u30BD\u30B3\u30F3', id: 'E716'},
  {shape: 'rect', coords: '80,208,96,224', alt: '\u30E9\u30D6\u30EC\u30BF\u30FC', title: '\u30E9\u30D6\u30EC\u30BF\u30FC', id: 'E717'},
  {shape: 'rect', coords: '96,208,112,224', alt: '\u30EC\u30F3\u30C1', title: '\u30EC\u30F3\u30C1', id: 'E718'},
  {shape: 'rect', coords: '112,208,128,224', alt: '\u925B\u7B46', title: '\u925B\u7B46', id: 'E719'},
  {shape: 'rect', coords: '128,208,144,224', alt: '\u738B\u51A0', title: '\u738B\u51A0', id: 'E71A'},
  {shape: 'rect', coords: '144,208,160,224', alt: '\u6307\u8F2A', title: '\u6307\u8F2A', id: 'E71B'},
  {shape: 'rect', coords: '160,208,176,224', alt: '\u7802\u6642\u8A08', title: '\u7802\u6642\u8A08', id: 'E71C'},
  {shape: 'rect', coords: '176,208,192,224', alt: '\u81EA\u8EE2\u8ECA', title: '\u81EA\u8EE2\u8ECA', id: 'E71D'},
  {shape: 'rect', coords: '192,208,208,224', alt: '\u6E6F\u306E\u307F', title: '\u6E6F\u306E\u307F', id: 'E71E'},
  {shape: 'rect', coords: '208,208,224,224', alt: '\u8155\u6642\u8A08', title: '\u8155\u6642\u8A08', id: 'E71F'},
  {shape: 'rect', coords: '0,224,16,240', alt: '\u8003\u3048\u3066\u308B\u9854', title: '\u8003\u3048\u3066\u308B\u9854', id: 'E720'},
  {shape: 'rect', coords: '16,224,32,240', alt: '\u307B\u3063\u3068\u3057\u305F\u9854', title: '\u307B\u3063\u3068\u3057\u305F\u9854', id: 'E721'},
  {shape: 'rect', coords: '32,224,48,240', alt: '\u51B7\u3084\u6C57', title: '\u51B7\u3084\u6C57', id: 'E722'},
  {shape: 'rect', coords: '48,224,64,240', alt: '\u51B7\u3084\u6C572', title: '\u51B7\u3084\u6C572', id: 'E723'},
  {shape: 'rect', coords: '64,224,80,240', alt: '\u3077\u3063\u304F\u3063\u304F\u306A\u9854', title: '\u3077\u3063\u304F\u3063\u304F\u306A\u9854', id: 'E724'},
  {shape: 'rect', coords: '80,224,96,240', alt: '\u30DC\u30B1\u30FC\u3063\u3068\u3057\u305F\u9854', title: '\u30DC\u30B1\u30FC\u3063\u3068\u3057\u305F\u9854', id: 'E725'},
  {shape: 'rect', coords: '96,224,112,240', alt: '\u76EE\u304C\u30CF\u30FC\u30C8', title: '\u76EE\u304C\u30CF\u30FC\u30C8', id: 'E726'},
  {shape: 'rect', coords: '112,224,128,240', alt: '\u6307\u3067OK', title: '\u6307\u3067OK', id: 'E727'},
  {shape: 'rect', coords: '128,224,144,240', alt: '\u3042\u3063\u304B\u3093\u3079\u30FC', title: '\u3042\u3063\u304B\u3093\u3079\u30FC', id: 'E728'},
  {shape: 'rect', coords: '144,224,160,240', alt: '\u30A6\u30A3\u30F3\u30AF', title: '\u30A6\u30A3\u30F3\u30AF', id: 'E729'},
  {shape: 'rect', coords: '160,224,176,240', alt: '\u3046\u308C\u3057\u3044\u9854', title: '\u3046\u308C\u3057\u3044\u9854', id: 'E72A'},
  {shape: 'rect', coords: '176,224,192,240', alt: '\u304C\u307E\u3093\u9854', title: '\u304C\u307E\u3093\u9854', id: 'E72B'},
  {shape: 'rect', coords: '192,224,208,240', alt: '\u732B2', title: '\u732B2', id: 'E72C'},
  {shape: 'rect', coords: '208,224,224,240', alt: '\u6CE3\u304D\u9854', title: '\u6CE3\u304D\u9854', id: 'E72D'},
  {shape: 'rect', coords: '0,240,16,256', alt: '\u6D99', title: '\u6D99', id: 'E72E'},
  {shape: 'rect', coords: '16,240,32,256', alt: 'NG', title: 'NG', id: 'E72F'},
  {shape: 'rect', coords: '32,240,48,256', alt: '\u30AF\u30EA\u30C3\u30D7', title: '\u30AF\u30EA\u30C3\u30D7', id: 'E730'},
  {shape: 'rect', coords: '48,240,64,256', alt: '\u30B3\u30D4\u30FC\u30E9\u30A4\u30C8', title: '\u30B3\u30D4\u30FC\u30E9\u30A4\u30C8', id: 'E731'},
  {shape: 'rect', coords: '64,240,80,256', alt: '\u30C8\u30EC\u30FC\u30C9\u30DE\u30FC\u30AF', title: '\u30C8\u30EC\u30FC\u30C9\u30DE\u30FC\u30AF', id: 'E732'},
  {shape: 'rect', coords: '80,240,96,256', alt: '\u8D70\u308B\u4EBA', title: '\u8D70\u308B\u4EBA', id: 'E733'},
  {shape: 'rect', coords: '96,240,112,256', alt: '\u30DE\u30EB\u79D8', title: '\u30DE\u30EB\u79D8', id: 'E734'},
  {shape: 'rect', coords: '112,240,128,256', alt: '\u30EA\u30B5\u30A4\u30AF\u30EB', title: '\u30EA\u30B5\u30A4\u30AF\u30EB', id: 'E735'},
  {shape: 'rect', coords: '128,240,144,256', alt: '\u30EC\u30B8\u30B9\u30BF\u30FC\u30C9\u30C8\u30EC\u30FC\u30C9\u30DE\u30FC\u30AF', title: '\u30EC\u30B8\u30B9\u30BF\u30FC\u30C9\u30C8\u30EC\u30FC\u30C9\u30DE\u30FC\u30AF', id: 'E736'},
  {shape: 'rect', coords: '144,240,160,256', alt: '\u5371\u967A\u30FB\u8B66\u544A', title: '\u5371\u967A\u30FB\u8B66\u544A', id: 'E737'},
  {shape: 'rect', coords: '160,240,176,256', alt: '\u7981\u6B62', title: '\u7981\u6B62', id: 'E738'},
  {shape: 'rect', coords: '176,240,192,256', alt: '\u7A7A\u5BA4\u30FB\u7A7A\u5E2D\u30FB\u7A7A\u8ECA', title: '\u7A7A\u5BA4\u30FB\u7A7A\u5E2D\u30FB\u7A7A\u8ECA', id: 'E739'},
  {shape: 'rect', coords: '192,240,208,256', alt: '\u5408\u683C\u30DE\u30FC\u30AF', title: '\u5408\u683C\u30DE\u30FC\u30AF', id: 'E73A'},
  {shape: 'rect', coords: '208,240,224,256', alt: '\u6E80\u5BA4\u30FB\u6E80\u5E2D\u30FB\u6E80\u8ECA', title: '\u6E80\u5BA4\u30FB\u6E80\u5E2D\u30FB\u6E80\u8ECA', id: 'E73B'},
  {shape: 'rect', coords: '0,256,16,272', alt: '\u77E2\u5370\u5DE6\u53F3', title: '\u77E2\u5370\u5DE6\u53F3', id: 'E73C'},
  {shape: 'rect', coords: '16,256,32,272', alt: '\u77E2\u5370\u4E0A\u4E0B', title: '\u77E2\u5370\u4E0A\u4E0B', id: 'E73D'},
  {shape: 'rect', coords: '32,256,48,272', alt: '\u5B66\u6821', title: '\u5B66\u6821', id: 'E73E'},
  {shape: 'rect', coords: '48,256,64,272', alt: '\u6CE2', title: '\u6CE2', id: 'E73F'},
  {shape: 'rect', coords: '64,256,80,272', alt: '\u5BCC\u58EB\u5C71', title: '\u5BCC\u58EB\u5C71', id: 'E740'},
  {shape: 'rect', coords: '80,256,96,272', alt: '\u30AF\u30ED\u30FC\u30D0\u30FC', title: '\u30AF\u30ED\u30FC\u30D0\u30FC', id: 'E741'},
  {shape: 'rect', coords: '96,256,112,272', alt: '\u3055\u304F\u3089\u3093\u307C', title: '\u3055\u304F\u3089\u3093\u307C', id: 'E742'},
  {shape: 'rect', coords: '112,256,128,272', alt: '\u30C1\u30E5\u30FC\u30EA\u30C3\u30D7', title: '\u30C1\u30E5\u30FC\u30EA\u30C3\u30D7', id: 'E743'},
  {shape: 'rect', coords: '128,256,144,272', alt: '\u30D0\u30CA\u30CA', title: '\u30D0\u30CA\u30CA', id: 'E744'},
  {shape: 'rect', coords: '144,256,160,272', alt: '\u308A\u3093\u3054', title: '\u308A\u3093\u3054', id: 'E745'},
  {shape: 'rect', coords: '160,256,176,272', alt: '\u82BD', title: '\u82BD', id: 'E746'},
  {shape: 'rect', coords: '176,256,192,272', alt: '\u3082\u307F\u3058', title: '\u3082\u307F\u3058', id: 'E747'},
  {shape: 'rect', coords: '192,256,208,272', alt: '\u685C', title: '\u685C', id: 'E748'},
  {shape: 'rect', coords: '208,256,224,272', alt: '\u304A\u306B\u304E\u308A', title: '\u304A\u306B\u304E\u308A', id: 'E749'},
  {shape: 'rect', coords: '0,272,16,288', alt: '\u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD', title: '\u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD', id: 'E74A'},
  {shape: 'rect', coords: '16,272,32,288', alt: '\u3068\u3063\u304F\u308A\uFF08\u304A\u3061\u3087\u3053\u4ED8\u304D\uFF09', title: '\u3068\u3063\u304F\u308A\uFF08\u304A\u3061\u3087\u3053\u4ED8\u304D\uFF09', id: 'E74B'},
  {shape: 'rect', coords: '32,272,48,288', alt: '\u3069\u3093\u3076\u308A', title: '\u3069\u3093\u3076\u308A', id: 'E74C'},
  {shape: 'rect', coords: '48,272,64,288', alt: '\u30D1\u30F3', title: '\u30D1\u30F3', id: 'E74D'},
  {shape: 'rect', coords: '64,272,80,288', alt: '\u304B\u305F\u3064\u3080\u308A', title: '\u304B\u305F\u3064\u3080\u308A', id: 'E74E'},
  {shape: 'rect', coords: '80,272,96,288', alt: '\u3072\u3088\u3053', title: '\u3072\u3088\u3053', id: 'E74F'},
  {shape: 'rect', coords: '96,272,112,288', alt: '\u30DA\u30F3\u30AE\u30F3', title: '\u30DA\u30F3\u30AE\u30F3', id: 'E750'},
  {shape: 'rect', coords: '112,272,128,288', alt: '\u9B5A', title: '\u9B5A', id: 'E751'},
  {shape: 'rect', coords: '128,272,144,288', alt: '\u3046\u307E\u3044\uFF01', title: '\u3046\u307E\u3044\uFF01', id: 'E752'},
  {shape: 'rect', coords: '144,272,160,288', alt: '\u30A6\u30C3\u30B7\u30C3\u30B7', title: '\u30A6\u30C3\u30B7\u30C3\u30B7', id: 'E753'},
  {shape: 'rect', coords: '160,272,176,288', alt: '\u30A6\u30DE', title: '\u30A6\u30DE', id: 'E754'},
  {shape: 'rect', coords: '176,272,192,288', alt: '\u30D6\u30BF', title: '\u30D6\u30BF', id: 'E755'},
  {shape: 'rect', coords: '192,272,208,288', alt: '\u30EF\u30A4\u30F3\u30B0\u30E9\u30B9', title: '\u30EF\u30A4\u30F3\u30B0\u30E9\u30B9', id: 'E756'},
  {shape: 'rect', coords: '208,272,224,288', alt: '\u3052\u3063\u305D\u308A', title: '\u3052\u3063\u305D\u308A', id: 'E757'},
  {shape: 'default', nohref: 'nohref'}
];

/** END **/
