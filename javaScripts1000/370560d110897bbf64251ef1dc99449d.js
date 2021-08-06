 /**
 * @type : intro
 * @desc : g4f_common.jsë íë¡ì í¸ ì ë°ì ê±¸ì³ ì  ìì¤íìì ê³µíµì¼ë¡ ì¬ì©íë ìë° ì¤í¬ë¦½í¸ë¥¼ ê¸°ì í
 * ìë°ì¤í¬ë¦½í¸ íì¼ì´ë¤. ë¹ë²í ì¬ì©ëë ìë°ì¤í¬ë¦½í¸ë¤ì´ íë©´ë§ë¤ ë°ë³µì ì¼ë¡ ê°ë°ëì§
 * ìëë¡ ë¯¸ë¦¬ ì ìëì´ ìì´ì g4f_common.jsë¥¼ ìë¬´íë©´ì importìí¤ê¸°ë§ íë©´ g4f_common.jsì ì ìëì´
 * ìë ì¤í¬ë¦½í¸ë¤ì ëí´ìë ê° ê°ë°ìê° ë³ëë¡ ê°ë°í  íìê° ìë¤.<br><br>
 *
 * í¨ì Naming Ruleì ë¤ìê³¼ ê°ë¤.
 * <pre>
 *     - cf  : common function
 *     - co  : common object
 *     - cov : common object for validation
 * </pre>
 * @version : 1.0
 * @change  :
 * <pre>
 *     <font color="blue">V1.0</font>
 *     - ìµì´ë²ì .
 * </pre>
 */

 /** ì´ ë¶ë¶ì documentë¡ generateëì§ ììµëë¤.
 * @JScript ì°¸ê³ ìë£
 * - isNaN : ë¤ìì ëª¨ë ì«ìë¡ ë³¸ë¤. - "001", "0", "", null
 * - substr(index[, length]) -> indexë¶í° ëê¹ì§ í¹ì lengthê°¯ìë§í¼.
 * - substring(start, end)  -> start indexë¶í° end indexì ê¹ì§ì string
 * Date ì¤ë¸ì í¸ ìì±ìë¤ - dateObj = new Date()
 *                        - dateObj = new Date(dateVal)
 *                        - dateObj = new Date(year, month, date[, hours[, minutes[, seconds[,ms]]]])
 */

/**
 * @type   : function
 * @access : public
 * @desc   : ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ alert boxë¡ ë³´ì¬ì¤ í ë¦¬í´íë¤. cfGetMsg ì°¸ì¡°.
 * <pre>
 *     // ê³µíµë©ì¸ì§
 *     var MSG_COM_ERR_002   = "@ì(ë) íì ìë ¥ í­ëª©ìëë¤.";
 *     ...
 *     cfAlertMsg(MSG_COM_ERR_002,['ì¬ë²']);
 * </pre>
 * @sig    : msgId[, paramArray]
 * @param  : msgId - required g4f_message.jsì ê³µíµ ë©ì¸ì§ ìì­ì ì ì¸ë ë©ì¸ì§ ID
 * @param  : paramArray - optional ë©ì¸ì§ìì '@' ë¬¸ìì ì¹íë  ë°ì´í° Array. Arrayì indexì ë©ì¸ì§ ë´ì '@' ë¬¸ìì ììê° ì¼ì¹íë¤.
 *           ì¹íë  ë°ì´í°ë [] ì¬ì´ì ì½¤ë§ë¥¼ êµ¬ë¶ìë¡ íì¬ ê¸°ì íë©´ Array ë¡ ì¸ìëë¤.
 * @return : ì¹íë ë©ì¸ì§ ì¤í¸ë§
 * @author : ìì¬í
 */

//var gvContextPath = "/"+document.location.pathname.split("/")[1];
var gvContextPath = "";

function cfAlertMsg(msgId, paramArray) {
    if (cfIsNull(msgId)) {
        alert("ì¡´ì¬íì§ ìë ë©ìì§ìëë¤.");
        return null;
    }
/*
    var msg;
    var code;
    if ( msgId.indexOf("MSG_")>=0)
        code = eval(msgId.cut(0,msgId.indexOf("MSG_")).trim());
    else if(msgId.indexOf("[DSET")>=0){
        code = msgId.substring(msgId.lastIndexOf("]")+1,msgId.length);
    }
    else if(msgId.indexOf("[TRNS")>=0){
        code = msgId.substring(msgId.lastIndexOf("]")+1,msgId.length);
    }
    else
        code = msgId;

    msg = new coMessage().getMsg(code, paramArray);
    alert(msg);
    return msg;
*/

    msg = new coMessage().getMsg(msgId, paramArray);
    alert(msg);
    return msg;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ confirm boxë¡ ë³´ì¬ì¤ í  ì¬ì©ìê° ì íí confirm ê°ì ë¦¬í´íë¤. cfGetMsg ì°¸ì¡°.
 * <pre>
 *     // ê³µíµë©ì¸ì§
 *     var MSG_COM_CRM_001   = "ì ì¥íìê² ìµëê¹?";
 *     ...
 *     cfConfirmMsg(MSG_COM_CRM_001);
 * </pre>
 * @sig    : msgId[, paramArray]
 * @param  : msgId      - required g4f_message.jsì ê³µíµ ë©ì¸ì§ ìì­ì ì ì¸ë ë©ì¸ì§ ID
 * @param  : paramArray - optional ë©ì¸ì§ìì '@' ë¬¸ìì ì¹íë  ì¤í¸ë§ Array. (Arrayì indexì
 *           ë©ì¸ì§ ë´ì '@' ë¬¸ìì ììê° ì¼ì¹íë¤.)
 * @return : ì¬ì©ìê° ì íí confirm ê° (true/false)
 * @author : ìì¬í
 */
function cfConfirmMsg(msgId, paramArray) {


    if (cfIsNull(msgId)) {
        alert("ì¡´ì¬íì§ ìë ë©ìì§ìëë¤.");
        return null;
    }

    return confirm(new coMessage().getMsg(msgId, paramArray));
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ prompt box ë¡ ë³´ì¬ì£¼ê³  promptì°½ì ìë ¥ë ê°ì ë¦¬í´íë¤.
 *           ë§ì½ í¨ì¤ìëë¥¼ ìë ¥ë°ë prompt boxë¥¼  ëì°ë©´ì ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ ë³´ì¬ì£¼ê³  ì¶ë¤ë©´
 *           ë¤ìê³¼ ê°ì´ íë©´ ëë¤.
 * <pre>
 *     // ê³µíµë©ì¸ì§
 *     var MSG_INPUT_PASSWORD = "@ë, í¨ì¤ìëë¥¼ ìë ¥íì­ìì¤.";
 *     ...
 *     cfPromptMsg(MSG_INPUT_PASSWORD, ["íê¸¸ë"], "ìë ¥íì¸ì.");
 * </pre>
 * @sig    : msgId[, paramArray[, defaultVal]]
 * @param  : msgId      - required g4f_message.jsì ê³µíµ ë©ì¸ì§ ìì­ì ì ì¸ë ë©ì¸ì§ ID
 * @param  : paramArray - optional ë©ì¸ì§ìì '@' ë¬¸ìì ì¹íë  ì¤í¸ë§ Array. (Arrayì indexì
 *           ë©ì¸ì§ ë´ì '@' ë¬¸ìì ììê° ì¼ì¹íë¤.)
 * @param  : defaultVal - optional prompt box ì ìë ¥íëì ë³´ì¬ì¤ ê¸°ë³¸ê°.
 * @return : ìë ¥ë°ì String í¹ì Integer íìì í¨ì¤ìë ë°ì´í°
 * @author : ìì¬í
 */
function cfPromptMsg(msgId, paramArray, defaultVal) {
    if (cfIsNull(msgId)) {
        alert("ì¡´ì¬íì§ ìë ë©ìì§ìëë¤.");
        return null;
    }

    if ( cfIsNull( defaultVal) ) {
        defaultVal = "";
    }

    return prompt(new coMessage().getMsg(msgId, paramArray), defaultVal);
}


/**
 * @type   : function
 * @access : public
 * @desc   : ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ ë¦¬í´íë¤.
 * <pre>
 * // ê³µíµ ë©ì¸ì§ ìì­
 * var MSG_NO_CHANGED        = "ë³ê²½ë ì¬í­ì´ ììµëë¤.";
 * var MSG_SUCCESS_LOGIN     = "@ë ìëíì¸ì?";
 * ...
 * var message1 = cfGetMsg(MSG_NO_CHANGED);
 * var message2 = cfGetMsg(MSG_SUCCESS_LOGIN, ["íê¸¸ë"]);
 *
 * ìì ììì message2 ì ê°ì "íê¸¸ëë ìëíì¸ì?" ê° ëë¤.
 * </pre>
 * @sig    : msgId[, paramArray]
 * @param  : msgId      - required common.jsì ê³µíµ ë©ì¸ì§ ìì­ì ì ì¸ë ë©ì¸ì§ ID
 * @param  : paramArray - optional ë©ì¸ì§ìì '@' ë¬¸ìì ì¹íë  ë°ì´í° Array. Arrayì indexì
 *           ë©ì¸ì§ ë´ì '@' ë¬¸ìì ììê° ì¼ì¹íë¤. ì¹íë  ë°ì´í°ë [] ì¬ì´ì ì½¤ë§ë¥¼ êµ¬ë¶ìë¡ íì¬ ê¸°ì íë©´ Array ë¡ ì¸ìëë¤.
 * @return : ì¹íë ë©ì¸ì§ ì¤í¸ë§
 * @author : ìì¬í
 */


function cfGetMsg(msgId, paramArray) {
    return new coMessage().getMsg(msgId, paramArray);
}


/**
 * @type   : function
 * @access : public
 * @desc   : ê°ì´ null ì´ê±°ë white space ë¬¸ìë¡ë§ ì´ë£¨ì´ì§ ê²½ì° trueë¥¼ ë¦¬í´íë¤.
 * <pre>
 *     cfIsNull("  ");
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° trueë¥¼ ë¦¬í´íë¤.
 * @sig    : value
 * @param  : value - required ìë ¥ê°
 * @return : boolean. null(í¹ì white space) ì¬ë¶
 * @author : ìì¬í
 */
function cfIsNull(value) {
    if (value == null ||
        (typeof(value) == "string" && value.trim() == "")
       ) {
        return true;
    }

    return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : Elementì typeì ìë ¤ì¤ë¤. ë¦¬í´ëë element type stringì ë¤ìê³¼ ê°ë¤.
 * <pre>
 *     BUTTON   : html button input tag
 *     CHECKBOX : html checkbox input tag
 *     FILE     : html file input tag
 *     HIDDEN   : html hidden input tag
 *     IMAGE    : html image input tag
 *     PASSWORD : html password input tag
 *     RADIO    : html radio input tag
 *     RESET    : html reset input tag
 *     SUBMIT   : html submit input tag
 *     TEXT     : html text input tag
 *     SELECT   : html select tag
 *     TEXTAREA : html textarea tag
 *     null     : ê¸°í
 * </pre>
 * @sig    : oElement
 * @param  : oElement - required element
 * @return : elementì typeì íííë string
 * @author : ìì¬í
 */
function cfGetElementType(oElement) {
    if (oElement == null) {
        return null;
    }

    switch (oElement.tagName) {
        case "INPUT":
            switch (oElement.type) {
                case "button" :
                    return "BUTTON";
                case "checkbox" :
                    return "CHECKBOX";
                case "file" :
                    return "FILE";
                case "hidden" :
                    return "HIDDEN";
                case "image" :
                    return "IMAGE";
                case "password" :
                    return "PASSWORD";
                case "radio" :
                    return "RADIO";
                case "reset" :
                    return "RESET";
                case "submit" :
                    return "SUBMIT";
                case "text" :
                    return "TEXT";
                default :
                    return null;
            }
        case "SELECT":
            return "SELECT"
        case "TEXTAREA":
            return "TEXTAREA"
        case "IMG":
            return "IMG";   //2004-12-22 ì íê·ì¶ê°
        default :
            return null;
    }
}


/**
 * @type   : function
 * @access : private
 * @desc   : htmlììì parent elementì ëí child element ë¤ì ëí´ ì¼ê´ì ì¼ë¡ ëì¼í í¨ìë¥¼ ìíìí¨ë¤.
 * @sig    : parentObj, fnc[, argArr]
 * @param  : parentObj - required parent object
 * @param  : fnc - required ê° input element ë§ë¤ ìíìí¬ í¨ì í¬ì¸í°
 * @param  : argArr - optional í¨ìì ì ë¬í  íë¼ë¯¸í°. ì´ ë©ìëë¥¼ íµí´ í¸ì¶ëë í¨ìë ë¬´ì¡°ê±´ ë ê°ì íë¼ë¯¸í°ë¡ë§
 *           êµ¬ì±ëì´ì¼ íë¤. íëë ì²ë¦¬íë ¤ë element, ëë¨¸ì§ íëë ì²ë¦¬ì íìí íë¼ë¯¸í°ë¤ì array ê°ì²´ì´ë¤.
 * @author : ìì¬í
 */
function cfProcessChildElement(parentObj, fnc, argArr) {
    if( fnc(parentObj, argArr) == false ) {
        return false;
    }

    var childObj;
    childObj = parentObj.getElementsByTagName("*");
    for (var i = 0; i < childObj.length; i++) {
        switch (childObj[i].tagName) {
            case "INPUT" :
            case "TEXTAREA" :
            case "SELECT" :
                if( fnc(childObj[i], argArr) == false ) {
                    return false;
                }
                break;

            default :
                break;
        }
    }
    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : objectë¥¼ disable ìí¨ë¤.
 * <pre>
 *     cfDisable( obj );
 *     cfDisable( [obj1, obj2, obj3] );
 * ì)
 * cfDisable([document.detailForm]);
 * cfDisable([document.getElementById("oSaveBtn"), document.getElementById("oDeleteBtn")]);
 * cfDisable([form.oEmpno]);
 * cfDisable([document.getElementById("oEmpno")]);
 * </pre>
 * @sig    : oElement
 * @param  : oElement - required disable íê³ ì íë element
 * @author : ìì¬í
 */
function cfDisable(obj) {

    if (cfIsNull(obj)) {
        return;
    }

    if (obj.length != null) {
        for (var i = 0; i < obj.length; i++) {
            cfProcessChildElement(obj[i], cfDisableElement);
        }
    } else {
        cfProcessChildElement(obj, cfDisableElement);
    }
}

/*
    - <input type=text> ì ê²½ì° disableìì ê¸ììì ì§ì í  ì ìë¤. ë°ë¼ì disable ëì  readOnlyë¡ ë°ê¾¼ë¤.
    - <input type=checkbox> ì ê²½ì° ReadOnlyê° ìì¼ë©° disabledë¥¼ trueë¡ í  ê²½ì° boxë´ë¶ ìê¹ì ë°ê¿ ìê° ìë¤. box ìë°ê¿ í¬ê¸°.
*/
function cfDisableElement(oElement, argArr) {
    switch (cfGetElementType(oElement)) {
        case "BUTTON" :
            oElement.disabled = true;
/*
            if (oElement.className != null &&
                (oElement.className.substr(0, 7) == "btnGrid" ||
                 oElement.className.substr(0, 7) == "btnIcon" ) &&
                oElement.currentStyle.backgroundImage.substr(oElement.currentStyle.backgroundImage.length - 15, 9) != "_disabled"
               ) {
                oElement.style.backgroundImage =
                    oElement.currentStyle.backgroundImage.substr(0, oElement.currentStyle.backgroundImage.length - 6) + "_disabled" +
                    oElement.currentStyle.backgroundImage.substr(oElement.currentStyle.backgroundImage.length - 6);
            }
*/
            break;

        case "CHECKBOX" :
        case "RADIO" :
        case "IMG":
        case "IMAGE":
        case "RESET" :
        case "SELECT" :
        case "SUBMIT" :
            oElement.disabled = true;
            break;

        case "FILE" :
        case "PASSWORD" :
        case "TEXT" :
        case "TEXTAREA" :
            oElement.readOnly = true;
            oElement.style.color = "#808080";            // EMEdit Disableì ììê³¼ ëì¼.
            oElement.style.backgroundColor = "#DEDFDE";  // Textë backgroundê° íììì¼ë¡ ë¨ëë¤. ë°ë¼ì ì¤íì¼ë¡ ììë¡ ì§ì íìì.
            break;

        default :
            break;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : objectë¥¼ enable ìí¨ë¤.
 * <pre>
 *     cfEnable( obj );
 *     cfEnable( [obj1, obj2, obj3] );
 *  ì)
 * cfEnable([document.detailForm]);
 * cfEnable([document.getElementById("oSaveBtn"), document.getElementById("oDeleteBtn")]);
 * cfEnable([form.oEmpno]);
 * cfEnable([document.getElementById("oEmpno")]);
 * </pre>
 * @sig    : oElement
 * @param  : oElement - required enable íê³ ì íë element í¹ì element array
 * @author : ìì¬í
 */
function cfEnable(obj) {
    if (cfIsNull(obj)) {
        return;
    }

    if (obj.length != null) {
        for (var i = 0; i < obj.length; i++) {
            cfProcessChildElement(obj[i], cfEnableElement);
        }
    } else {
        cfProcessChildElement(obj, cfEnableElement);
    }
}

function cfEnableElement(oElement, argArr) {
    switch (cfGetElementType(oElement)) {
        case "BUTTON" :
            oElement.disabled = false;
/*
            if (oElement.className != null &&
                (oElement.className.substr(0, 7) == "btnGrid" ||
                 oElement.className.substr(0, 7) == "btnIcon"
                )
               ) {
                if (oElement.currentStyle.backgroundImage.substr(oElement.currentStyle.backgroundImage.length - 15, 9) == "_disabled") {
                    oElement.style.backgroundImage =
                        oElement.currentStyle.backgroundImage.cut(oElement.currentStyle.backgroundImage.length - 15, 9);
                }
            }
*/
            break;

        case "CHECKBOX" :
        case "RADIO" :
        case "RESET" :
        case "SELECT" :
        case "SUBMIT" :
        case "IMG" :
        case "IMAGE" :
            oElement.disabled = false;
            break;

        case "FILE" :
        case "PASSWORD" :
        case "TEXT" :
        case "TEXTAREA" :
            oElement.readOnly = false;
            oElement.style.color = "black";
            oElement.style.backgroundColor = "#F9F9F9";
            break;

        default :
            break;
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ë°ì ì¤ë¸ì í¸ë¤ì hide íë í¨ì <br>
 *           ê°ì²´ì style ìì display ìì±ì noneì¼ë¡ ì¹ííì¬ êµ¬ííë¤.<br>
 * <pre>
 *     cfHideObject( obj );
 *     cfHideObject( [obj1, obj2, obj3] );
 * ex)
 * cfHideObject( [form.oDeptno] );
 * cfHideObject( form.oDeptno );
 * cfHideObject( document.getElementById("oDeleteBtn") );
 * </pre>
 * @sig    : objArr
 * @param  : objectArr - required íë©´ìì ì¨ê¸°ê³ ì íë ì¤ë¸ì í¸ Array.
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfHideObject( obj ) {
    if (cfIsNull(obj)) {
        return;
    }
    var objArr;
    var oElement;

    if (obj.length == null) {
        objArr = new Array(1);
        objArr[0] = obj;
    } else {
        objArr = obj;
    }

    for (var objArrIdx = 0; objArrIdx < objArr.length; objArrIdx++) {
        if( objArr[objArrIdx].nodeType != undefined ){
            oElement = objArr[objArrIdx];
        } else {
            oElement = document.getElementById( objArr[objArrIdx] );
        }
        oElement.style.display = "none";
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¨ê²¨ì§ ì¤ë¸ì í¸ë¤ì ë³´ì¬ì£¼ë í¨ì <br>
 *           ê°ì²´ì style ìì display ìì±ì inline(default)ì¼ë¡ ì¹ííì¬ êµ¬ííë¤.<br>
 * <pre>
 *     cfShowObject( obj );
 *     cfShowObject( [obj1, obj2, obj3] );
 * ex)
 * cfShowObject( [form.oDeptno] );
 * cfShowObject( form.oDeptno );
 * cfShowObject( document.getElementById("oDeleteBtn") );
 * </pre>
 * @sig    : objArr
 * @param  : objectArr - required íë©´ìì ë³´ì¬ì£¼ê³ ì íë ì¤ë¸ì í¸ id Array. ì¤ë¸ì í¸ Array.
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfShowObject( obj ) {
    if (cfIsNull(obj)) {
        return;
    }

    var objArr;
    var oElement;

    if (obj.length == null) {
        objArr = new Array(1);
        objArr[0] = obj;
    } else {
        objArr = obj;
    }

    for (var objArrIdx = 0; objArrIdx < objArr.length; objArrIdx++) {
        if( objArr[objArrIdx].nodeType != undefined ){
            oElement = objArr[objArrIdx];
        } else {
            oElement = document.getElementById( objArr[objArrIdx] );
        }
        //oElement.style.display = "inline";
        oElement.style.display = "";
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : íë©´ìì ìë ¥ê³¼ ê´ë ¨ë ì¤ë¸ì í¸ì ëí ì í¨ì± ê²ì¬ë¥¼ ì¤ìíë¤. ì í¨ì± ê²ì¬ë¥¼ ë°ë ì¤ë¸ì í¸ë¤ì "validExp" ë¼ë
 *           ìì±ê°ì ì¤ì í´ì¼ íë¤. "validExp" ë¼ë ìì±ì ìë html ê°ì²´ìë ì ìëì´ ìì§ ìì ìì±ì´ì§ë§ ë¤ë¥¸ ìì±ë¤ì
 *           ì¤ì íë ê²ê³¼ ê°ì ë°©ë²ì¼ë¡ ì¤ì íë©´ ìëì¼ë¡ í´ë¹ ì¤ë¸ì í¸ì ìì±ì¼ë¡ ì¸ìëë¤.<br>
 *           í¹ì setAttribute í¨ìë¥¼ ì´ì©í´ì ë³ëë¡ ìì±í´ì¤ ì ìë¤. ex) document.getElementById("oSal").setAttribute("validExp", "ê¸ì¬:yes" );
 *           <br>
 *           - í´ë¹ ì¤ë¸ì í¸ì ëí child ì¤ë¸ì í¸ë¤ê¹ì§ë ê²ì¬íë¤. ìë¥¼ë¤ì´, ê²ì¬ë°ì ì¤ë¸ì í¸ë¤ì &lt;div&gt; íê·¸ë¡ ê°ì¸ê³ 
 *             &lt;div&gt; íê·¸ì idë¥¼ íë¼ë¯¸í°ë¡ ì¤ë¤ë©´ &lt;div&gt; íê·¸ë´ì ëª¨ë  ì¤ë¸ì í¸ë¤ì´ ìëì¼ë¡ ê²ì¬ë°ê² ëë¤. ë,
 *             &lt;table&gt;ìì ìë ¥íëë¤ì &lt;table&gt;ì idë¥¼ íë¼ë¯¸í°ë¡ ì£¼ë©´ ëë¤.<br><br>
 *           - ìë ¥ê°ì ìê³¼ ë¤ì ê³µë°±ì ì í¨ì± ê²ì¬ë¥¼ íë©´ì ìëì¼ë¡ trimëë¤.
 * <pre>
 *    ì1)
 *    ...
 *    document.getElementById("oSal").setAttribute("validExp", "ê¸ì¬:yes" );
 *    function fncSave() {
 *        if (<b>cfValidate([oInputTable])</b>) {
 *            form.submit();
 *        }
 *    }
 *    ...
 *
 *    &lt;table <b>id="oInputTable"</b> ....&gt;
 *        ...
 *        &lt;input id="oSal" width="50" <b>validExp="ê¸ì¬:no:minByteLength=2&maxByteLength=6&number"</b>&gt;
 *        ...
 *    &lt;/table&gt;
 *    ...
 * </pre>
 * <pre>
 *    ì2) cfValidate([form.oEmpno, form.ename])
 * </pre>
 * validExp ìì±ê°ì ì í´ì§ íìì ë§ê² ìì±ëì´ì¼ íë¤.<br>
 * <pre>
 *        "item_name:íìì¬ë¶:valid_expression"
 *
 *        - "item_name"ìë í´ë¹ í­ëª©ì ëí ì´ë¦ì ê¸°ì íë¤.
 *        - "íìì¬ë¶"ìë í´ë¹ ì¤ë¸ì í¸ê° íì í­ëª©ì¸ì§ ì¬ë¶ë¥¼ yes|true|1 í¹ì no|false|0 íìì¼ë¡ ê¸°ì íë¤.
 *        - "valid_expression" ì  cfValidateValue í¨ìì ì¤ëªì ì°¸ì¡°íê¸° ë°ëë¤.
 *        - íìí­ëª©ì¸ì§ë§ ì²´í¬íë ¤ë©´ "valid_expression" ì íê¸°íì§ ìì¼ë©´ ëë¤.
 *          ì)
 *          &lt;object id="oDelivYmd" classid="CLSID:E6876E99-7C28-43AD-9088-315DC302C05F" width="80" <b>validExp="ë°°ë¬ì¼ì:yes"</b>&gt;
 *              ...
 *          &lt;/object&gt;
 *        - validExp ë´ì ììë¡ ",", ":", "=", "&", ë¬¸ìë¥¼ ì¬ì©íê³ ì íë¤ë©´ "\\,", "\\:", "\\=", "\\&" ë¼ê³  íê¸°í´ì¼ íë¤.<br>
 * </pre>
 * @sig    : objArr
 * @param  : objectArr - required ì í¨ì±ê²ì¬ë¥¼ íê³ ì íë ì¤ë¸ì í¸ë¤ì Array.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 * @author : ìì¬í
 */
function cfValidate(obj) {
    if (cfIsNull(obj)) {
        return;
    }
    var objArr;
    var oElement;
    var validYN = false;

    if (obj.tagName == "SELECT" || obj.length == null) {
        objArr = new Array(1);
        objArr[0] = obj;
    } else {
        objArr = obj;
    }
    var checkObjName = "";		//ì²´í¬í ì¤ë¸ì í¸ ë¤ì
    for (var objArrIdx = 0; objArrIdx < objArr.length; objArrIdx++) {
        oElement = objArr[objArrIdx];

        switch (oElement.tagName) {
            case "TABLE":
            case "DIV":
            case "FIELDSET":
                if( !cfProcessChildElement(oElement, cfValidateElement) ){
                    return false;
                }
                break;

            default:
				//ì²´í¬ë°ì¤ì ë¼ëì¤ë²í¼ì íë²ë§ ì²´í¬
            	if(cfGetElementType(oElement) == "RADIO" || cfGetElementType(oElement) == "CHECKBOX"){

					if(checkObjName != oElement.name){
						if (!cfValidateElement(oElement)) {
	                    	return false;
	                	}
	                	checkObjName = oElement.name;
					}
            	}else{
	                if (!cfValidateElement(oElement)) {
	                    return false;
	                }
            	}
        }
    }

    return true;

}

/**
 * @type   : function
 * @access : private
 * @desc   : ëª¨ë  ì¤ë¸ì í¸ì ëí´ ì í¨ì± ê²ì¬ë¥¼ íë¤.
 * @sig    : oElement
 * @param  : oElement - required ê²ì¬ ëì Element.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 * @author : ìì¬í
 */
function cfValidateElement(oElement) {
    var validExp = oElement.getAttribute("validExp");
    if (cfIsNull(validExp)) {
        return true;
    }

    var value;
    var itemValidExp = new covItemValidExp(validExp);

    switch (oElement.tagName) {
        case "INPUT":
        case "SELECT":
        case "TEXTAREA":

			if(cfGetElementType(oElement) == "RADIO" || cfGetElementType(oElement) == "CHECKBOX"){
				var objVal = "";
				var obj = document.getElementsByName(oElement.name);
				for(var i=0; i < obj.length; i++ ){
					if(!obj[i].disabled){
						if(obj[i].checked)	objVal += obj[i].value.trim() + ",";
					}
				}
				if(objVal.length > 0)	objVal = objVal.substring(0, objVal.length-1);
				value = objVal;
			}else{
	            oElement.setAttribute("value", oElement.value.trim());  // elementì ê°ì trim ìì¼ì¤ë¤.
	            value = oElement.value;
			}
            break;

        default:
            return true;
    }

    if (!itemValidExp.validate(value)) {
        cfAlertMsg( itemValidExp.errMsg, [itemValidExp.itemName] );
		//í¬ì»¤ì¤
        if(oElement.enable != false && oElement.disabled!=true) {
            oElement.focus();
        }

        return false;
    }

    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : í¹ì  ê°ì ëí ì í¨ì±ê²ì¬ë¥¼ ìííë¤.
 * <pre>
 *     cfValidateValue(50, "minNumber=100");
 * </pre>
 * ìì ê²½ì° 50ì ìµìê° 100ì ëì§ ìì¼ë¯ë¡ falseê° ë¦¬í´ëë¤.<br>
 * ì í¨ì± ê²ì¬ë¥¼ ìííê¸° ìí´ìë ê²ì¬ì¡°ê±´ì ëªìí´ì¼ íëë°
 * ê²ì¬ì¡°ê±´ì 'valid expression' ì´ë¼ê³  ë¶ë¦¬ì°ë String ê°ì¼ë¡ ííëë¤. valid expressionì ëí íê¸°íìì
 * ë¤ìê³¼ ê°ë¤.
 * <pre>
 *      validator_name=valid_value[&validator_name=valid_value]..
 *
 *      ì) "minNumber=100"
 * </pre>
 * - validator_nameì ê²ì¬ì íì ìë¯¸íë©° valid_valueë ê¸°ì¤ ê°ì´ ëë¤. <br>
 * - ê²ì¬í­ëª©ì íë ì´ìì¼ ì ìì¼ë©° ê²ì¬í­ëª©ê°ìë "&" ë¬¸ìë¡ êµ¬ë¶íì¬ íìí ë§í¼ ëì´íë©´ ëë¤. <br>
 * - valid_valueì ",", ":", "=", "&", ë¬¸ìë¥¼ ì¬ì©íê³ ì íë¤ë©´ "\\,", "\\:", "\\=", "\\&" ë¼ê³  íê¸°í´ì¼ íë¤.<br>
 * - ìì ìììë "minNumber" (ìµìê°)ë¼ë ì í¨ì± ê²ì¬í­ëª©ì ëªìíìê³  minNumber ìëí ê¸°ì¤ê°ì¼ë¡ "100" ì´ ì¤ì ëì´ ìë¤.
 * ë§ì¼ 100ë³´ë¤ ìì ê°ì ìë ¥íì ëë 100 ì´ìì ê°ì ìë ¥íë¼ë alert boxê° ë¨ê² ëë¤.
 * - validator_nameì ë¯¸ë¦¬ ì ìëì´ ìë ê²ë§ ì¬ì©í  ì ìê³  ê° ê²ì¬ì íë§ë¤ valid_valueì ííë ë¤ë¥´ë¤.(valid_valueê° ìë ê²ë ìë¤.)
 * íì¬ ì ìë ê²ì¬ì íì ë¤ìê³¼ ê°ë¤.
 * <br><br>
 * <table border=1 style="border-collapse:collapse; border-width:1pt; border-style:solid; border-color:000000;">
 *      <tr>
 *          <td align="center" bgcolor="#CCCCFFF">ê²ì¬ì í</td>
 *          <td align="center" bgcolor="#CCCCFFF">ê¸°ì¤ê° íí</td>
 *          <td align="center" bgcolor="#CCCCFFF">ì¤ëª</td>
 *          <td align="center" bgcolor="#CCCCFFF">ì</td>
 *      </tr>
 *      <tr>
 *          <td>length</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>ìë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìê° ê¸°ì¤ê°ê³¼ ì¼ì¹íëì§ë¥¼ ê²ì¬íë¤. ì¼ë°ì ì¼ë¡ HTMLììë íê¸, ìë¬¸, ì«ì ëª¨ë 1ìë¦¬ì© ì¸ìëë¤.</td>
 *          <td>length=6</td>
 *      </tr>
 *      <tr>
 *          <td>byteLength</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>Byteë¡ íì°ë ìë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìë¥¼ byteë¡ íì°íì¬ ìë¦¿ìê° ê¸°ì¤ê°ê³¼ ì¼ì¹íëì§ë¥¼ ê²ì¬íë¤.(ì«ì ë° ìë¬¸ì 1byte, íê¸ì 2byteì´ë¤.)</td>
 *          <td>byteLength=6</td>
 *      </tr>
 *      <tr>
 *          <td>minLength</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>ìµììë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìê° ê¸°ì¤ê° ì´ìì´ ëëì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>minLength=6</td>
 *      </tr>
 *      <tr>
 *          <td>minByteLength</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>Byteë¡ íì°ë ìµììë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìë¥¼ byteë¡ íì°íì¬ ìë¦¿ìê° ê¸°ì¤ê° ì´ìì´ ëëì§ë¥¼ ê²ì¬íë¤.(ì«ì ë° ìë¬¸ì 1byte, íê¸ì 2byteì´ë¤.)</td>
 *          <td>minByteLength=6</td>
 *      </tr>
 *      <tr>
 *          <td>maxLength</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>ìµëìë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìê° ê¸°ì¤ê° ì´íê° ëëì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>maxLength=6</td>
 *      </tr>
 *      <tr>
 *          <td>maxByteLength</td>
 *          <td>0ë³´ë¤ í° ì ì</td>
 *          <td>Byteë¡ íì°ë ìµëìë¦¿ì ê²ì¬. ìë ¥ê°ì ìë¦¿ìë¥¼ byteë¡ íì°íì¬ ìë¦¿ìê° ê¸°ì¤ê° ì´íê° ëëì§ë¥¼ ê²ì¬íë¤.(ì«ì ë° ìë¬¸ì 1byte, íê¸ì 2byteì´ë¤.)</td>
 *          <td>maxByteLength=6</td>
 *      </tr>
 *      <tr>
 *          <td>number</td>
 *          <td>None or decimal format string. decimal format string íìì "(ì ììë¦¿ì.ìììë¦¿ì)" ì´ë¤.</td>
 *          <td>ì«ìê²ì¬. ìë ¥ê°ì´ ì«ìì¸ì§ë¥¼ ê²ì¬íë¤. ë§ì¼ ìë ¥ê°ì ëí decimal formatì ì§ì íìì ëë formatì ë§ëì§ë ê²ì¬íë¤.</td>
 *          <td>number, number=(5.2)</td>
 *      </tr>
 *      <tr>
 *          <td>minNumber</td>
 *          <td>ì«ì</td>
 *          <td>ìµìì ê²ì¬. ìë ¥ê°ì´ ìµìí ê¸°ì¤ê° ì´ìì´ ëëì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>minNumber=100</td>
 *      </tr>
 *      <tr>
 *          <td>maxNumber</td>
 *          <td>ì«ì</td>
 *          <td>ìµëì ê²ì¬. ìë ¥ê°ì´ ê¸°ì¤ê° ì´íì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>maxNumber=300</td>
 *      </tr>
 *      <tr>
 *          <td>inNumber</td>
 *          <td>"ì«ì~ì«ì" íìì¼ë¡ íê¸°.</td>
 *          <td>ë²ìê° ê²ì¬. ìë ¥ê°ì´ ê¸°ì¤ì´ ëë ë ìì ê°ê±°ë í¹ì ë ì ì¬ì´ì ì¡´ì¬íë ê°ì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>inNumber=100~300</td>
 *      </tr>
 *      <tr>
 *          <td>minDate</td>
 *          <td>YYYYMMDD íìì ë ì§ ì¤í¸ë§.</td>
 *          <td>ìµìë ì§ ê²ì¬. ìë ¥ë ë ì§ê° ê¸°ì¤ë ì§ì´ê±°ë ê¸°ì¤ë ì§ ì´íì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>minDate=20020305</td>
 *      </tr>
 *      <tr>
 *          <td>maxDate</td>
 *          <td>YYYYMMDD íìì ë ì§ ì¤í¸ë§. ì) maxDate=20020305</td>
 *          <td>ìµëë ì§ ê²ì¬. ìë ¥ë ë ì§ê° ê¸°ì¤ë ì§ì´ê±°ë ê¸°ì¤ë ì§ ì´ì ì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>maxDate=20020305</td>
 *      </tr>
 *      <tr>
 *          <td>minDateYM</td>
 *          <td>YYYYMM íìì ë ì§ ì¤í¸ë§.</td>
 *          <td>ìµìë ì§ ê²ì¬. ìë ¥ë ë ì§ê° ê¸°ì¤ë ì§ì´ê±°ë ê¸°ì¤ë ì§ ì´íì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>minDate=200203</td>
 *      </tr>
 *      <tr>
 *          <td>maxDateYM</td>
 *          <td>YYYYMM íìì ë ì§ ì¤í¸ë§. ì) maxDateYM=200203</td>
 *          <td>ìµëë ì§ ê²ì¬. ìë ¥ë ë ì§ê° ê¸°ì¤ë ì§ì´ê±°ë ê¸°ì¤ë ì§ ì´ì ì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>maxDate=200203</td>
 *      </tr>
 *      <tr>
 *          <td>format</td>
 *          <td>format characterë¤ê³¼ ë¤ë¥¸ ë¬¸ìë¤ì ì¡°í©í ì¤í¸ë§.<br>
 *              <table>
 *                  <tr>
 *                      <td><b>format character</b></td>
 *                      <td><b>desc</b></td>
 *                  </tr>
 *                  <tr>
 *                      <td>#</td>
 *                      <td>ë¬¸ìì ì«ì</td>
 *                  </tr>
 *                  <tr>
 *                      <td>h, H</td>
 *                      <td>íê¸(Hë ê³µë°±í¬í¨)</td>
 *                  </tr>
 *                  <tr>
 *                      <td>A, Z</td>
 *                      <td>ë¬¸ì(Zë ê³µë°±í¬í¨)</td>
 *                  </tr>
 *                  <tr>
 *                      <td>0, 9</td>
 *                      <td>ì«ì (9ë ê³µë°±í¬í¨)</td>
 *                  </tr>
 *              </table>
 *          </td>
 *          <td>íì ê²ì¬. ìë ¥ë ê°ì´ ì§ì ë íìì ë§ëì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>format=000-000</td>
 *      </tr>
 *      <tr>
 *          <td>ssn</td>
 *          <td>ì£¼ë¯¼ë±ë¡ë²í¸ 13ìë¦¬</td>
 *          <td>ì£¼ë¯¼ë±ë¡ë²í¸ ê²ì¬. ìë ¥í ì£¼ë¯¼ë±ë¡ë²í¸ê° ì í¨íì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>ssn</td>
 *      </tr>
 *      <tr>
 *          <td>fsn</td>
 *          <td>ì¸êµ­ì¸ë±ë¡ë²í¸ 13ìë¦¬</td>
 *          <td>ì¸êµ­ì¸ë±ë¡ë²í¸ ê²ì¬. ìë ¥í ì¸êµ­ì¸ë±ë¡ë²í¸ê° ì í¨íì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>fsn</td>
 *      </tr>
 *      <tr>
 *          <td>csn</td>
 *          <td>ì¬ììë±ë¡ë²í¸ 10ìë¦¬</td>
 *          <td>ì¬ììë±ë¡ë²í¸ ê²ì¬. ìë ¥í ì¬ììë±ë¡ë²í¸ê° ì í¨íì§ë¥¼ ê²ì¬íë¤.
 *              (ì, 2019009930)
 *          </td>
 *          <td>csn</td>
 *      </tr>
 *      <tr>
 *          <td>filterIn</td>
 *          <td>íí°ë§íì¬ ì»ê³ ì íë ì¤í¸ë§ì ";"ë¬¸ìë¥¼ êµ¬ë¶ìë¡ ì¬ì©íì¬ ëì´íë¤.(ë¨ ";" ë¬¸ìë¥¼ íí°ë§íê³  ì¶ì ë "\;"ë¼ê³  íê¸°íë¤.
 *          </td>
 *          <td>ìë ¥ê°ì ì§ì ë ë¬¸ìë ì¤í¸ë§ ì´ì¸ì ë¤ë¥¸ ê°ì´ ìëì§ë¥¼ ê²ì¬íë¤. íëë ìë¤ë©´ ì í¨íë¤.</td>
 *          <td>filter=%;<;ìì¬í;\\;;haha<br>(ìë ¥ê° ë´ì "%","<","ìì¬í",";","haha" ì¤ì íëë¼ë ìëì§ ê²ì¬íë¤.)
 *          </td>
 *      </tr>
 *      <tr>
 *          <td>filterOut</td>
 *          <td>íí°ë§íì¬ ê±¸ë¬ë´ê³  ì¶ì ì¤í¸ë§ì ";"ë¬¸ìë¥¼ êµ¬ë¶ìë¡ ì¬ì©íì¬ ëì´íë¤.(ë¨ ";" ë¬¸ìë¥¼ íí°ë§íê³  ì¶ì ë "\;"ë¼ê³  íê¸°íë¤.
 *          </td>
 *          <td>ìë ¥ê°ì ì§ì ë ë¬¸ìë ì¤í¸ë§ì´ ìëì§ë¥¼ ê²ì¬íë¤. íëë ìë¤ë©´ ì í¨íë¤.</td>
 *          <td>filter=%;<;ìì¬í;\\;;haha<br>(ìë ¥ê° ë´ì "%","<","ìì¬í",";","haha" ì¤ì íëë¼ë ìëì§ ê²ì¬íë¤.)
 *          </td>
 *      </tr>
 *      <tr>
 *          <td>email</td>
 *          <td>ì´ë©ì¼ ì£¼ì</td>
 *          <td>ìë ¥í ë©ì¼ì£¼ìê° ì í¨í ì´ë©ì¼ íìì¸ì§ë¥¼ ê²ì¬íë¤.</td>
 *          <td>email</td>
 *      </tr>
 *      <tr>
 *          <td>date</td>
 *          <td>format characterì ì¡°í©ì¼ë¡ ì´ë£¨ì´ì§ ë ìì ëí í¨í´ ì¤í¸ë§.<br>
 *              <table>
 *                  <tr>
 *                      <td><b>format character</b></td>
 *                      <td><b>desc</b></td>
 *                  </tr>
 *                  <tr>
 *                      <td>YYYY</td>
 *                      <td>4ìë¦¬ ëë</td>
 *                  </tr>
 *                  <tr>
 *                      <td>YY</td>
 *                      <td>2ìë¦¬ ëë. 2000ë ì´í</td>
 *                  </tr>
 *                  <tr>
 *                      <td>MM</td>
 *                      <td>2ìë¦¬ ì«ìì ë¬</td>
 *                  </tr>
 *                  <tr>
 *                      <td>DD</td>
 *                      <td>2ìë¦¬ ì«ìì ì¼</td>
 *                  </tr>
 *                  <tr>
 *                      <td>hh</td>
 *                      <td>2ìë¦¬ ì«ìì ìê°. 12ì ê¸°ì¤</td>
 *                  </tr>
 *                  <tr>
 *                      <td>HH</td>
 *                      <td>2ìë¦¬ ì«ìì ìê°. 24ì ê¸°ì¤ </td>
 *                  </tr>
 *                  <tr>
 *                      <td>mm</td>
 *                      <td>2ìë¦¬ ì«ìì ë¶</td>
 *                  </tr>
 *                  <tr>
 *                      <td>ss</td>
 *                      <td>2ìë¦¬ ì«ìì ì´</td>
 *                  </tr>
 *              </table>
 *          </td>
 *          <td>ë ì§ ê²ì¬. ìë ¥ë ì¤í¸ë§ê°ì ë ì§ë¡ íì°íì¬ ì í¨í ë ì§ì¸ì§ë¥¼ ê²sì¬íë¤.</td>
 *          <td>date=YYYYMMDD  ì¼ ë ìë ¥ê°ì´ '20020328' ì¼ ê²½ì° -> ì í¨<br>
 *              date=YYYYMMDD  ì¼ ë ìë ¥ê°ì´ '20020230' ì¼ ê²½ì° -> ì¤ë¥<br>
 *              date=Today is YY-MM-DD' ì¼ ë ìë ¥ê°ì´ 'Today is 02-03-28' ì¼ ê²½ì° -> ì í¨<br><br>
 *              ì°¸ê³ ) formatë¬¸ìê° ì¤ë³µí´ì ëì¤ëë¼ë ì²ì ëì¨ ë¬¸ìì ëí´ìë§ formatë¬¸ìë¡ ì¸ìëë¤.
 *                    YYYYì YY, hhì HH ë ì¤ë³µì¼ë¡ ë³¸ë¤. ë ì§ë ë,ìì´ ì¡´ì¬í  ëë§ ì íí ì²´í¬íê³ 
 *                    ë§ì¼ ë, ìì´ ìë¤ë©´ 1 ~ 31 ì¬ì´ì¸ì§ë§ ì²´í¬íë¤.
 *          </td>
 *      </tr>
 *      <tr>
 *          <td>inNumberAlpha</td>
 *          <td>ê²ì¬í  ë¬¸ìì´</td>
 *          <td>ì«ìì ë¬¸ìë¡ ì¡°í©ë ë¬¸ìì´ì¸ì§ ê²ì¬íë¤.</td>
 *          <td>inNumberAlpha</td>
 *      </tr>
 *      <tr>
 *          <td>inAlpha</td>
 *          <td>ê²ì¬í  ë¬¸ìì´</td>
 *          <td>ìë¬¸ìë¡ ë ë¬¸ìì´ì¸ì§ ê²ì¬íë¤.</td>
 *          <td>inAlpha</td>
 *      </tr>
 * </table>
 * @sig    : value, validExp
 * @param  : value    - required ê²ì¬ ëìì´ ëë ê°.
 * @param  : validExp - required ì¬ì©ìê° ì§ì í Valid Expression String.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 * @author : ìì¬í
 */
function cfValidateValue(value, validExp) {
    var valueValidExp = new covValueValidExp(validExp);

    if (!valueValidExp.validate(value)) {
        return false;
    }

    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë ì§ê°ì ê°ì§ê³  ìë input textì ê°ì ë¹êµí´ì ììì¼ì´ ë§ê°ì¼ë³´ë¤ í¬ë©´ falseë¥¼ ë¦¬í´íë¤.
 *           ëê°ì´ ëª¨ë ììëìë§ ë¹êµë¥¼ íê³  ëì¤íëìë§ ê°ì´ ë¤ì´ ììê²½ì° trueë¥¼ ë¦¬í´íë¤.
 * <pre>
 *     cfCheckFromTo(form.fromDt,form.toDt, "ììì¼ì", "ì¢ë£ì¼ì");
 * </pre>
 * @sig    : fromDt,toDt, msg1, msg2
 * @param  : fromDt - required ììì¼ì ë´ì input text ê°ì²´
 * @param  : toDt   - required ë§ê°ì¼ ë´ì  input ê°ì²´
 * @param  : msg1   - required ììì¼ê³¼ ë§¤ì¹­ëë ë©ìì§
 * @param  : msg2   - required ë§ê°ì¼ê³¼ ë§¤ì¹­ëë ë©ìì§
 * @return : true(ììì¼ì´ ì¢ë£ì¼ë³´ë¤ ìì ë)/false
 * @author : ì ì°ì£¼
 */

function cfCheckFromTo(fromDt,toDt, msg1, msg2){

    var sFrom = eval(fromDt).value.trim();
    var sTo   = eval(toDt).value.trim();

    if( cfIsNull(sFrom) || cfIsNull(sTo) ) {
        return true;
    }

    if( !cfValidateValue(sFrom, "date=YYYY-MM-DD") ){
        cfAlertMsg( MSG_COM_ERR_018, [msg1] );
        eval(fromDt).focus();
        return false;
    }

    if( !cfValidateValue(sTo, "date=YYYY-MM-DD") ){
        cfAlertMsg( MSG_COM_ERR_018, [msg2] );
        eval(toDt).focus();
        return false;
    }

	sFrom = sFrom.replaceAll("-", "");
	sTo = sTo.replaceAll("-", "");

	if(sFrom>sTo){
        cfAlertMsg(MSG_COM_ERR_048,[msg1,msg2]);
        eval(fromDt).focus();
        return false;
	}

	/*
    if(!cfValidateValue(sFrom, "maxDate=" + sTo) ){
        cfAlertMsg(MSG_COM_ERR_048,[msg1,msg2]);
        eval(fromDt).focus();
        return false;
    }
	*/

    return true;
}

 /**
  * @type   : function
  * @access : public
  * @desc   : ë ì§ê°ì ê°ì§ê³  ìë input textì ê°ì ì í¨ì±ì ì²´í¬íì¬ true/false ë¥¼ ë¦¬í´íë¤.
  * <pre>
  *     cfCheckFrom(form.fromDt, "ììì¼ì");
  * </pre>
  * @sig    : fromDt, msg1
  * @param  : fromDt - required ììì¼ì ë´ì input text ê°ì²´
  * @param  : msg1   - required ììì¼ê³¼ ë§¤ì¹­ëë ë©ìì§
  * @return : true(ììì¼ì´ ì¢ë£ì¼ë³´ë¤ ìì ë)/false
  * @author : í©ì¤í
  */

 function cfCheckFrom(fromDt, msg1){

     var sFrom = eval(fromDt).value.trim();

     if( cfIsNull(sFrom) ) {
         return true;
     }

     if( !cfValidateValue(sFrom, "date=YYYY-MM-DD") ){
         cfAlertMsg( MSG_COM_ERR_018, [msg1] );
         eval(fromDt).focus();
         return false;
     }

 	sFrom = sFrom.replaceAll("-", "");

     return true;
 }

//replaceAll í¨ì êµ¬í
String.prototype.replaceAll = replaceAll;
function replaceAll(strValue1, strValue2){
    var strTemp = this;
    while(1){
        if(strTemp.indexOf(strValue1) != -1) strTemp = strTemp.replace(strValue1, strValue2);
        else break;
    }
    return strTemp;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë ì§ê°ì ê°ì§ê³  ìë input textì ê°ì ë¹êµí´ì ììì¼ì´ ë§ê°ì¼ë³´ë¤ í¬ë©´ falseë¥¼ ë¦¬í´íë¤.
 *           ëê°ì´ ëª¨ë ììëìë§ ë¹êµë¥¼ íê³  ëì¤íëìë§ ê°ì´ ë¤ì´ ììê²½ì° trueë¥¼ ë¦¬í´íë¤.
 * <pre>
 *     cfCheckFromToYM(form.fromDt,form.toDt, "ììì¼ì", "ì¢ë£ì¼ì");
 * </pre>
 * @sig    : fromDt,toDt, msg1, msg2
 * @param  : fromDt - required ììì¼ì ë´ì input text ê°ì²´
 * @param  : toDt   - required ë§ê°ì¼ ë´ì  input ê°ì²´
 * @param  : msg1   - required ììì¼ê³¼ ë§¤ì¹­ëë ë©ìì§
 * @param  : msg2   - required ë§ê°ì¼ê³¼ ë§¤ì¹­ëë ë©ìì§
 * @return : true(ììì¼ì´ ì¢ë£ì¼ë³´ë¤ ìì ë)/false
 * @author : ííì£¼
 */
function cfCheckFromToYM(fromDt,toDt, msg1, msg2){

    var sFrom = eval(fromDt).value.trim();
    var sTo   = eval(toDt).value.trim();

    if( cfIsNull(sFrom) || cfIsNull(sTo) ) return true;

    if( !cfValidateValue(sFrom, "date=YYYY-MM") ){
        cfAlertMsg( MSG_COM_ERR_018, [msg1] );
        eval(fromDt).focus();
        return false;
    }

    if( !cfValidateValue(sTo, "date=YYYY-MM") ){
        cfAlertMsg( MSG_COM_ERR_018, [msg2] );
        eval(toDt).focus();
        return false;
    }

    if(!cfValidateValue(sFrom, "maxDateYM=" + sTo) ){
        cfAlertMsg(MSG_COM_ERR_048,[msg1,msg2]);
        eval(fromDt).focus();
        return false;
    }

    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê°ì´ ì§ì ë ê·¸ë£¹ë´ì ì¡´ì¬íëì§ë¥¼ ìë ¤ì¤ë¤.
 * <pre>
 *     cfIsIn(3, [1, 2, 3]);                     // -> true
 *     cfIsIn(3, [4, 5, 6]);                     // -> false
 *     cfIsIn('F', ['A', 'B', 'F']);             // -> true
 *     cfIsIn('F', ['A', 'B', 'C']);             // -> false
 *     cfIsIn("lim", ["lim", "kim", "park"]);    // -> true
 *     cfIsIn("lim", ["lee", "kim", "park"]);    // -> false
 * </pre>
 * @sig    : value, valueArray
 * @param  : value      - required ë¹êµíê³  ì¶ì ê°
 * @param  : valueArray - required ë¹êµíê³  ì¶ì ê°ì ëí ë¹êµ ëìì´ ëë ê°ë¤ì ì§í©. array íìì´ë©° array
 *           ë´ì ê° elementì ë°ì´í° íìì value íë¼ë¯¸í°ì íìê³¼ ì¼ì¹í´ì¼ íë¤.
 * @return : boolean. ê°ì´ ì§ì ë ê·¸ë£¹ë´ì ì¡´ì¬íëì§ ì¬ë¶.
 * @author : ìì¬í
 */
function cfIsIn(value, valueArray) {
    for (var i = 0; i < valueArray.length; i++) {
        if (value == valueArray[i]) {
            return true;
        }
    }

    return false;
}


/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ í¼ ì¤ìì íë ì´ìì ê°ì´ ì¡´ì¬íëì§ ê²ì¬
 *           ê°ì²´ì name ìì±ì ì°¸ì¡°íë©°, <input type=text> ì ííë¤.
 * <pre>
 *     cfExistValues(form.sal,form.comm);
 * </pre>
 * @sig    :
 * @param  : ì²´í¬íê³ ì íë ìë ¥ í¼ IDs
 * @return : true(íëë¼ë ì¡´ì¬)/false(íëë ì¡´ì¬íì§ ìì)
 * @author : ì íê·
 */
function cfExistValues(){
    var isOk=false;
    var i = 0;
    var arrName = "";
    var oId;

    if(!arguments.length) return true;

    while(arguments[i]){
        oId = eval(arguments[i++]);

        if(!cfIsNull(oId.value)) {
            isOk = true;
            break;
        }
        arrName += "["+oId.name + "] ";
    }

    if(!isOk) {
        cfAlertMsg(MSG_COM_ERR_067, [arrName]);     // ì¤ì íëë ë°ëì ìë ¥í´ì¼ í©ëë¤.
        eval(arguments[0]).focus();
    }

    return isOk;
}

/**
 * @type   : function
 * @access : private
 * @desc   : Objectë¥¼ ì´ê¸°ííë¤.
 * <pre>
 *     cfIniObject( document.getElementById("oInputTable") );
 *     cfIniObject( [form.oEmpno, form.oContents, form.oRd[0]], "0" );
 *     cfIniObject( form.oEmpno, "0000" );
 * </pre>
 * @sig    : obj[, iniVal]
 * @param  : obj    - required ì´ê¸°íí  ëì ì¤ë¸ì í¸
 * @param  : iniVal - optional ì´ê¸°ê°
 * @author : ì ì°ì£¼
 */
function cfIniObject(obj, iniVal) {
    if (cfIsNull(obj)) {
        return;
    }
    if (obj.length != null) {
        for (var i = 0; i < obj.length; i++) {
            cfProcessChildElement(obj[i], cfIniElement, iniVal);
        }
    } else {
        cfProcessChildElement(obj, cfIniElement, iniVal);
    }
}

/**
 * @type   : function
 * @access : private
 * @desc   : elementë¥¼ ì´ê¸°ííë¤.
 * @sig    : oElement[, iniVal]
 * @param  : oElement - required ì´ê¸°íí  ëì ì¤ë¸ì í¸
 * @param  : iniVal    - optional ì´ê¸°ê°
 * @author : ì ì°ì£¼
 */
function cfIniElement(oElement, iniVal) {
    if( cfIsNull( iniVal ) ){
        iniVal = "";
    }

    switch (cfGetElementType(oElement)) {
        case "BUTTON" :
        case "RESET" :
        case "SUBMIT" :
        case "IMG" :
        case "IMAGE" :
            break;

        case "CHECKBOX" :
        case "RADIO" :
            oElement.checked = false;
            break;

        case "SELECT" :
            oElement.selectedIndex = 0;
            break;

        case "FILE" :
        case "PASSWORD" :
        case "TEXT" :
        case "TEXTAREA" :
            oElement.value = iniVal;
            break;

        default :
            break;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : window.openì¼ë¡ ìë¸ì°½ì ëì¸ ë ìë¸ì°½ì ìì¹ë¥¼ ê°ë¨íê² ì§ì í  ì ìë¤.
 * @sig    : width, height, position, [sURL] [, sName] [, sFeatures] [, bReplace]
 * @param  : width - ìë¸ì°½ì ëì´
 * @param  : height - ìë¸ì°½ì ëì´
 * @param  : position  - ìë¸ì°½ì ìì¹ (default : 5) <br><br>
 * <table border='1'>
 *     <tr>
 *         <td>1</td>
 *         <td>2</td>
 *         <td>3</td>
 *     </tr>
 *     <tr>
 *         <td>4</td>
 *         <td>5</td>
 *         <td>6</td>
 *     </tr>
 *     <tr>
 *         <td>7</td>
 *         <td>8</td>
 *         <td>9</td>
 *     </tr>
 * </table>
 * @param  : sURL      - required window.openì sURL íë¼ë¯¸í°ì ëì¼
 * @param  : sName     - required window.openì sName íë¼ë¯¸í°ì ëì¼
 * @param  : sFeatures - required window.openì sFeatures íë¼ë¯¸í°ì ëì¼
 * @param  : bReplace  - required window.openì bReplace íë¼ë¯¸í°ì ëì¼
 * @author : ìì¬í
 */
function cfOpen(sWidth, sHeight, position, sURL, sName, sFeatures, bReplace) {

    var left = 0;
    var top = 0;

    var featureNames  = ["status", "menubar", "toolbar"];
    var featureValues = ["no", "no", "no"];
    var featureTypes  = ["boolean", "boolean", "boolean"];

    if (sFeatures != null) {
        cfParseOpenFeature(sFeatures, featureNames, featureValues, featureTypes);
    }

    var status = featureValues[0];
    var menubar = featureValues[1];
    var toolbar = featureValues[2];

    if (sWidth != null && sHeight != null) {
        width = sWidth*1 + 10; // windowì ì¢ì° border 5pxì© ê°ì.
        height = sHeight*1 + 29; // titlebarë ê¸°ë³¸ì¼ë¡ ê°ì.

        if (menubar) {
            height = height + 48;
            //IEì¸ ê²½ì° menubarê° yesì´ë©´ heightê° 20px ëì´ëë¤.
            if( document.all ) {
                height = height - 20;
                sHeight = sHeight - 20;
            }
        }

        if (toolbar) {
            height = height + 27;
        }

        if (status) {
            height = height + 20;
        }

        switch (position) {
            case 1 :
                left = 0;
                top = 0;
                break;

            case 2 :
                left = (screen.availWidth - width) / 2;
                top = 0;
                break;

            case 3 :
                left = screen.availWidth - width;
                top = 0;
                break;

            case 4 :
                left = 0;
                top = (screen.availHeight - height) / 2;
                break;

            case 5 :
                left = (screen.availWidth - width) / 2;
                top = (screen.availHeight - height) / 2;
                break;

            case 6 :
                left = screen.availWidth - width;
                top = (screen.availHeight - height) / 2;
                break;

            case 7 :
                left = 0;
                top = screen.availHeight - height;
                break;

            case 8 :
                left = (screen.availWidth - width) / 2;
                top = screen.availHeight - height;
                break;

            case 9 :
                left = screen.availWidth - width;
                top = screen.availHeight - height;
                break;

            case 10 :
                left = (screen.availWidth - width) / 2;
                top = height + 7;
                break;

            default :
                left = (screen.availWidth - width) / 2;
                top = (screen.availHeight - height) / 2;
                break;
        }

        //IEì height ë³´ì 
        if( document.all ){
            sHeight = sHeight - 3.5;
        }

        if (cfIsNull(sFeatures)) {
            sFeatures = "width=" +sWidth+ ",height=" +sHeight + ",left=" + left + ",top=" + top;
        } else {
            sFeatures = sFeatures +",width=" +sWidth+ ",height=" +sHeight + ",left=" + left + ",top=" + top;
        }
    }

    var newWindow = window.open(sURL, sName, sFeatures, bReplace);
    newWindow.focus();
    return newWindow;
}

/**
 * @type   : function
 * @access : private
 * @desc   : features ì¤í¸ë§ì íì±íì¬ arrayì ìííë ë´ë¶ í¨ì
 * @sig    : features, fNameArray, fValueArray, fTypeArray
 * @param  : features    - required featuresë¥¼ ííí ì¤í¸ë§
 * @param  : fNameArray  - required ì¶ì¶í´ì¼ í  featureì ì´ë¦ì ëí array
 * @param  : fValueArray - required ì¶ì¶í´ì¼ í  featureì ê¸°ë³¸ê°ì ëí array
 * @param  : fTypeArray  - required ì¶ì¶í´ì¼ í  featureì ë°ì´í°íìì ëí array
 * @author : ìì¬í
 */
function cfParseOpenFeature(features, fNameArray, fValueArray, fTypeArray) {
    if (features == null) {
        return;
    }

    var featureArray = features.split(",");
    var featurePair;

    for (var i = 0; i < featureArray.length; i++) {
        featurePair = featureArray[i].trim().split("=");

        for (var j = 0; j < fNameArray.length; j++) {
            if (featurePair[0] == fNameArray[j]) {
                switch (fTypeArray[j]) {
                    case "string" :
                        fValueArray[j] = featurePair[1];
                        break;
                    case "number" :
                        fValueArray[j] = Number(featurePair[1]);
                        break;
                    case "boolean" :
                        if (featurePair[1].toUpperCase() == "YES" || featurePair[1].toUpperCase() == "TRUE" || featurePair[1] == "1") {
                            fValueArray[j] = true;
                        } else {
                            fValueArray[j] = false;
                        }
                        break;
                }
            }
        }
    }
}


//---------------------------------------- ì´í ê°ì²´ì ì¸ ------------------------------------------------------------------------------//

///////////////////////////// coMessage /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ë©ì¸ì§ë¥¼ ê´ë¦¬íë ê°ì²´ì´ë¤.
 * @author : ìì¬í
 */
function coMessage() {
    // method
    this.getMsg = coMessage_getMsg;
}

/**
 * @type   : method
 * @access : public
 * @object : coMessage
 * @desc   : ê³µíµë©ì¸ì§ì ì ìë ë©ì¸ì§ë¥¼ ì¹ííì¬ ìë ¤ì¤ë¤.
 * @sig    : message[, paramArray]
 * @param  : message    - required common.jsì ê³µíµ ë©ì¸ì§ ìì­ì ì ì¸ë ë©ì¸ì§ ID
 * @param  : paramArray - optional ë©ì¸ì§ìì '@' ë¬¸ìì ì¹íë  ì¤í¸ë§ Array. (Arrayì indexì
 *           ë©ì¸ì§ ë´ì '@' ë¬¸ìì ììê° ì¼ì¹íë¤.)
 * @return : ì¹íë ë©ì¸ì§ ì¤í¸ë§
 */
function coMessage_getMsg(message, paramArray) {
    if (cfIsNull(message)) {
        return null;
    }

    var index = 0;
    var re = /@/g;
    var count = 0;

    if (paramArray == null) {
        return message;
    }

    while ( (index = message.indexOf("@", index)) != -1) {
        if (paramArray[count] == null) {
            paramArray[count] = "";
        }

        message = message.substr(0, index) + String(paramArray[count]) +
                  message.substring(index + 1);

        index = index + String(paramArray[count++]).length;
    }

    return message;
}

///////////////////////////// coMap /////////////////////////////
/**
 * @type   : object
 * @access : public
 * @desc   : String parameter ì ëí nameê³¼ value ìë¤ì ê°ì§ ê°ì²´
 * @author : ìì¬í
 */
function coMap() {
    // fields

    this.names = new Array();
    this.values = new Array();
    this.count = 0;

    // methods
    this.getValue          = coMap_getValue;
    this.put               = coMap_put;
    this.getNameAt         = coMap_getNameAt;
    this.getValueAt        = coMap_getValueAt;
    this.size              = coMap_size;
    this.getMaxNameLength  = coMap_getMaxNameLength;
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : nameì ë§ë íë¼ë¯¸í°ê°ì ë¦¬í´íë¤.
 * @sig    : name
 * @param  : name - required mapì nameì¼ë¡ ì¬ì©í  ê°
 * @return : íë¼ë¯¸í°ê°
 */
function coMap_getValue(name) {
    for (var i = 0; i < this.count; i++) {
        if (this.names[i] == name) {
            return this.values[i];
        }
    }

    return null;
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : ìë¡ì´ mapì ì¶ê°íë¤. ê°ì nameê° ì¡´ì¬í  ê²½ì° overwriteíë¤.
 * @sig    : name, value
 * @param  : name  - required mapì nameë¡ ì¬ì©í  ê°
 * @param  : value - required mapì valueë¡ ì¬ì©í  ê°
 * @return : íë¼ë¯¸í°ê°
 */
function coMap_put(name, value) {
    for (var i = 0; i < this.count; i++) {
        if (this.names[i] == name) {
            this.values[i] = value;
            return;
        }
    }

    this.names[this.count] = name;
    this.values[this.count++] = value;
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : ì§ì ë indexì ìë mapì nameì ìë ¤ì¤ë¤.
 * @sig    : index
 * @param  : index - mapì index
 * @return : name
 */
function coMap_getNameAt(index) {
    return this.names[index];
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : ì§ì ë indexì ìë mapì valueë¥¼ ìë ¤ì¤ë¤.
 * @sig    : index
 * @param  : index - required mapì index
 * @return : value
 */
function coMap_getValueAt(index) {
    return this.values[index];
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : mapì name-value ìì ê°¯ìë¥¼ ìë ¤ì¤ë¤.
 * @return : name-value ìì ê°¯ì
 */
function coMap_size() {
    return this.count;
}

/**
 * @type   : method
 * @access : public
 * @object : coMap
 * @desc   : map ë´ì name ê°ë¤ì Stringì¼ë¡ íì°íì¬ ìµëê¸¸ì´ë¥¼ ìë ¤ì¤ë¤.
 * @return : max name length
 */
function coMap_getMaxNameLength() {
    var maxLength = 0;

    for (var i = 0; i < this.count; i++) {
        if (String(this.names[i]).length > maxLength) {
            maxLength = String(this.names[i]).length;
        }
    }

    return maxLength;
}

///////////////////////////// coParameterMap /////////////////////////////
/**
 * @type   : object
 * @access : public
 * @desc   : String parameter ì ëí nameê³¼ value ìë¤ì ê°ì§ ê°ì²´
 * @author : ìì¬í
 */
function coParameterMap() {
    // fields

    /**
     * @type   : field
     * @access : private
     * @object : coParameterMap
     * @desc   : íë¼ë¯¸í° ì´ë¦ì ë´ê³ ìë array
     */
    this.names = new Array();

    /**
     * @type   : field
     * @access : private
     * @object : coParameterMap
     * @desc   : íë¼ë¯¸í° ê°ì ë´ê³ ìë array
     */
    this.values = new Array();

    /**
     * @type   : field
     * @access : private
     * @object : coParameterMap
     * @desc   : íë¼ë¯¸í°ì ê°ì
     */
    this.count = 0;

    // methods
    this.getValue          = coParameterMap_getValue;
    this.put               = coParameterMap_put;
    this.getNameAt         = coParameterMap_getNameAt;
    this.getValueAt        = coParameterMap_getValueAt;
    this.size              = coParameterMap_size;
    this.getMaxNameLength  = coParameterMap_getMaxNameLength;
    this.getMaxValueLength = coParameterMap_getMaxValueLength;
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : nameì ë§ë íë¼ë¯¸í°ê°ì ë¦¬í´íë¤.
 * @sig    : name
 * @param  : name - required mapì nameì¼ë¡ ì¬ì©í  ê°
 * @return : íë¼ë¯¸í°ê°
 */
function coParameterMap_getValue(name) {
    for (var i = 0; i < this.count; i++) {
        if (this.names[i] == name) {
            return this.values[i];
        }
    }

    return null;
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : ìë¡ì´ mapì ì¶ê°íë¤. ê°ì nameê° ì¡´ì¬í  ê²½ì° overwriteíë¤.
 * @sig    : name, value
 * @param  : name  - required mapì nameë¡ ì¬ì©í  ê°
 * @param  : value - required mapì valueë¡ ì¬ì©í  ê°
 * @return : íë¼ë¯¸í°ê°
 */
function coParameterMap_put(name, value) {
    for (var i = 0; i < this.count; i++) {
        if (this.names[i] == name) {
            this.values[i] = value;
            return;
        }
    }

    this.names[this.count] = name;
    this.values[this.count++] = value;
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : ì§ì ë indexì ìë mapì nameì ìë ¤ì¤ë¤.
 * @sig    : index
 * @param  : index - required mapì index
 * @return : name
 */
function coParameterMap_getNameAt(index) {
    return this.names[index];
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : ì§ì ë indexì ìë mapì valueë¥¼ ìë ¤ì¤ë¤.
 * @sig    : index
 * @param  : index - required mapì index
 * @return : value
 */
function coParameterMap_getValueAt(index) {
    return this.values[index];
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : mapì name-value ìì ê°¯ìë¥¼ ìë ¤ì¤ë¤.
 * @return : name-value ìì ê°¯ì
 */
function coParameterMap_size() {
    return this.count;
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : map ë´ì name ê°ë¤ì Stringì¼ë¡ íì°íì¬ ìµëê¸¸ì´ë¥¼ ìë ¤ì¤ë¤.
 * @return : max name length
 */
function coParameterMap_getMaxNameLength() {
    var maxLength = 0;

    for (var i = 0; i < this.count; i++) {
        if (String(this.names[i]).length > maxLength) {
            maxLength = String(this.names[i]).length;
        }
    }

    return maxLength;
}

/**
 * @type   : method
 * @access : public
 * @object : coParameterMap
 * @desc   : map ë´ì value ê°ë¤ì Stringì¼ë¡ íì°íì¬ ìµëê¸¸ì´ë¥¼ ìë ¤ì¤ë¤.
 * @return : max value length
 */
function coParameterMap_getMaxValueLength() {
    var maxLength = 0;

    for (var i = 0; i < this.count; i++) {
        if (String(this.values[i]).length > maxLength) {
            maxLength = String(this.values[i]).length;
        }
    }

    return maxLength;
}

/**
 * @type   : object
 * @access : public
 * @desc   : A,img ë§í¬ í´ë¦­ì ì ì  ì ê±°íë ê³µíµ ì¤ë¸ì í¸
 * @author : ê¹íê²½
 */
function coBluring(){
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();
}
//document.onfocusin=coBluring;

//-------------------------- ì í¨ì± ê²ì¬ë¥¼ ìí ê°ì²´ ì ì¸ -----------------------------//
/*
 * @Validator ê°ì²´ì êµ¬ì¡°
 *   - ìì± : exception,   -> validityì subìì±ì´ë¤. validityê° trueë©´ exceptionì ë¬´ì¡°ê±´ falseì´ê³ 
 *                            validityê° falseì¸ ê²½ì° falseì ìì¸ì´ exceptionì¸ì§ ì¬ë¶ë¥¼ ìë ¤ì¤ë¤.
 *                            exceptionì ì¬ì©ì ìë ¥ì ëí ì¤ì  validationê³¼ë ë¬´ê´í ìë¬ë¥¼ ìë¯¸íë¤.
 *                            true/false ì¤ íë.
 *            message,     -> ì¤ë¥ë©ì¸ì§ë¥¼ ë´ê³  ìë¤.
 *            validity,    -> ì í¨ì±ê²ì¬ê²°ê³¼ë¥¼ ë´ê³  ìë¤. true/false ì¤ íë.
 *            value        -> ì í¨ì± ê²ì¬ ëì ê°.
 *
 *   - ë©ìë : validate() -> ì í¨ì± ê²ì¬ë¥¼ ìííë¤.
 *                            ì í¨í  ê²½ì°, validityë¥¼ trueë¡íê³  trueë¥¼ returníê³ 
 *                            ì í¨íì§ ìì ê²½ì°,  validityë¥¼ falseë¡íê³  falseë¥¼ returníê³ 
 *                            messageì ì¤ë¥ë©ì¸ì§ë¥¼ ê¸°ì íë¤.
 *                            exceptionì ê²½ì°ë exceptionì trueë¡ íê³  messageì ë©ì¸ì§ë¥¼ ê¸°ì íë¤.
 *
 *   - ì¶ê°ì í ì¼ :
 *     1) validatorê°ì²´ë¥¼ ì ìíë¤.
 *     2) covValidExp ê°ì²´ì getValidators ë©ìëì validatorê°ì²´ë¥¼ ë±ë¡íë¤.
 */

///////////////////////////// covValueValidExp /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ì í¨ì± ê²ì¬ì ëí íí(expression)ì ê°ì²´í íìë¤.
 *             - expression íì<br>
 *               í­ëª©ì´ë¦:íìí­ëª©ì¬ë¶:ì í¨ì±í­ëª©<br>
 *               ì) "ì ìë²í¸:yes:length=6"
 *             - ì í¨ì± í­ëª© íì
 *               ì í¨ì±í­ëª©ëª=ì í¨ê°[&ì í¨ì±í­ëª©ëª=ì í¨ê°]..
 *               ì) "length=13&ssn"
 * @sig    : expression
 * @param  : expression - required valid expression string.
 * @author : ìì¬í
 */
function covValueValidExp(expression) {
    // data;
    this.validItems = new Array();
    this.errMsg = "";

    // method
    this.init = covValueValidExp_init;
    this.parse = covValueValidExp_parse;
    this.validate = covValueValidExp_validate;

    // initialize
    this.init(expression);
}

/**
 * @type   : method
 * @access : private
 * @object : covValueValidExp
 * @desc   : ì´ê¸°íë¥¼ ìííë¤.
 * @sig    : expression
 * @param  : expression - required valid expression string.
 * @author : ìì¬í
 */
function covValueValidExp_init(expression) {
    this.parse(expression);
}

/**
 * @type   : method
 * @access : private
 * @object : covValueValidExp
 * @desc   : covValidExp ê°ì²´ì parse ë©ìë.
 *           valid expressionì parsingíë¤.
 * @sig    : expression
 * @param  : expression - required valid expression string.
 */
function covValueValidExp_parse(expression) {
    if (cfIsNull(expression)) {
        return;
    }

    var validItemExps = expression.advancedSplit("&", "i");
    var validItem;

    for (var i = 0; i < validItemExps.length; i++) {
        validItemPair = validItemExps[i].trim().advancedSplit("=", "i");
        validItem = new Object();
        validItem.name  = validItemPair[0].trim();
        validItem.value = validItemPair[1];  // parsedExp[1] ì ì¡´ì¬íì§ ìì ìë ìì§ë§ ìë°ì¤í¬ë¦½í¸ììë
        this.validItems[i] = validItem;      // ì´ë° ê²½ì° "undefined" ë¼ë ê°ì ë¦¬í´íë¤.
    }
}

/**
 * @type   : method
 * @access : private
 * @object : covValueValidExp
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ê²ì¬ëìê°
 */
function covValueValidExp_validate(value) {
    var validators = new Array();
    var count = 0;

    for (var i = 0; i < this.validItems.length; i++) {
        switch (this.validItems[i].name) {
            case "length" :
                validators[count++] = new covLengthValidator(this.validItems[i].value);
                break;

            case "byteLength" :
                validators[count++] = new covByteLengthValidator(this.validItems[i].value);
                break;

            case "minLength" :
                validators[count++] = new covMinLengthValidator(this.validItems[i].value);
                break;

            case "minByteLength" :
                validators[count++] = new covMinByteLengthValidator(this.validItems[i].value);
                break;

            case "maxLength" :
                validators[count++] = new covMaxLengthValidator(this.validItems[i].value);
                break;

            case "maxByteLength" :
                validators[count++] = new covMaxByteLengthValidator(this.validItems[i].value);
                break;

            case "number" :
                validators[count++] = new covNumberValidator(this.validItems[i].value);
                break;

            case "minNumber" :
                validators[count++] = new covMinNumberValidator(this.validItems[i].value);
                break;

            case "maxNumber" :
                validators[count++] = new covMaxNumberValidator(this.validItems[i].value);
                break;

            case "inNumber" :
                validators[count++] = new covInNumberValidator(this.validItems[i].value);
                break;

            case "inNumberAlpha" :
                validators[count++] = new covInNumberAlphaValidator(this.validItems[i].value);
                break;

            case "inAlpha" :
                validators[count++] = new covInAlphaValidator(this.validItems[i].value);
                break;

            case "minDate" :
                validators[count++] = new covMinDateValidator(this.validItems[i].value);
                break;

            case "maxDate" :
                validators[count++] = new covMaxDateValidator(this.validItems[i].value);
                break;

            case "minDateYM" :
                validators[count++] = new covMinDateYMValidator(this.validItems[i].value);
                break;

            case "maxDateYM" :
                validators[count++] = new covMaxDateYMValidator(this.validItems[i].value);
                break;

            case "format" :
                validators[count++] = new covFormatValidator(this.validItems[i].value);
                break;

            case "ssn" :
                validators[count++] = new covSsnValidator(this.validItems[i].value);
                break;

            case "fsn" :
                validators[count++] = new covFsnValidator(this.validItems[i].value);
                break;

            case "csn" :
                validators[count++] = new covCsnValidator(this.validItems[i].value);
                break;

            case "filterIn" :
                validators[count++] = new covFilterInValidator(this.validItems[i].value);
                break;

            case "filterOut" :
                validators[count++] = new covFilterOutValidator(this.validItems[i].value);
                break;

            case "email" :
                validators[count++] = new covEmailValidator(this.validItems[i].value);
                break;

            case "date" :
                validators[count++] = new covDateValidator(this.validItems[i].value);
                break;

            case "phone" :
                validators[count++] = new covPhoneValidator(this.validItems[i].value);
                break;

            default :
                break;
        }
    }

    for (var i = 0; i < validators.length; i++) {
        if (!validators[i].validate(value)) {
            this.errMsg = validators[i].message;
            return false;
        }
    }

    return true;
}

///////////////////////////// covItemValidExp /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ì í¨ì± ê²ì¬ì ëí íí(expression)ì ê°ì²´í íìë¤.
 *             - expression íì<br>
 *               í­ëª©ì´ë¦:íìí­ëª©ì¬ë¶:ì í¨ì±í­ëª©<br>
 *               ì) "ì ìë²í¸:yes:length=6"
 *             - ì í¨ì± í­ëª© íì
 *               ì í¨ì±í­ëª©ëª=ì í¨ê°[&ì í¨ì±í­ëª©ëª=ì í¨ê°]..
 *               ì) "length=13&ssn"
 * @sig    : expression, itemName
 * @param  : expression - required valid expression string.
 * @param  : itemName   - required ìì´íëª
 * @author : ìì¬í
 */
function covItemValidExp(expression, itemName) {
    // data;
    this.itemName;
    this.required;
    this.valueValidExp;

    // method
    this.parse = covItemValidExp_parse;
    this.validate = covItemValidExp_validate;

    // initialize
    this.parse(expression, itemName);
}

/**
 * @type   : method
 * @access : public
 * @object : covItemValidExp
 * @desc   : valid expressionì parsingíë¤.
 * @sig    : expression, itemName
 * @param  : expression - required valid expression string.
 * @param  : itemName   - required ìì´íëª
 */
function covItemValidExp_parse(expression, itemName) {
    if (cfIsNull(expression)) {
        return;
    }

    var columns = expression.advancedSplit(":", "i");

    if (cfIsNull(columns[1])) {
        return;
    }

    if (cfIsNull(columns[0])) {
        if (!cfIsNull(itemName)) {
            this.itemName = itemName.trim();
        } else {
            return;
        }
    } else {
        this.itemName = columns[0].trim();
    }

    this.required = (columns[1].trim().toUpperCase() == "YES" ||
                     columns[1].trim().toUpperCase() == "TRUE" ||
                     columns[1].trim() == "1"
                    ) ? true : false;

    if ((columns[2]) != null) {
        this.valueValidExp = new covValueValidExp(columns[2].trim());
    }
}

/**
 * @type   : method
 * @access : public
 * @object : covItemValidExp
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ê²ì¬í  ê°
 */
function covItemValidExp_validate(value) {
    // ííìì íìí­ëª©ë¤(ìì´íëª, íìì¬ë¶)ì ê¸°ì íì§ ìì ê²½ì°ë ííìì´ ìë¤ê³  ê°ì£¼.
    if (cfIsNull(this.itemName) || cfIsNull(this.required)) {
        return true;
    }

    if (this.required && cfIsNull(value)) {
        this.errMsg = MSG_COM_ERR_002;
        return false;
    }

    if (!this.required && cfIsNull(value)) {
        return true;
    }

    if (this.valueValidExp == null) {
        return true;
    }

    if (!this.valueValidExp.validate(value)) {
        this.errMsg = this.valueValidExp.errMsg;
        return false;
    }

    return true;
}

///////////////////////////// covColumnValidExp /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : Gridì ì»¬ë¼ ì í¨ì± ê²ì¬ ííì
 * @sig    : expression, oGrid
 * @param  : expression - required valid expression string.
 * @param  : oGrid      - required ê²ì¬ëì Grid ì¤ë¸ì í¸
 * @author : ìì¬í
 */
function covColumnValidExp(expression, oGrid) {
    // data;
    this.colId;
    this.errMsg = "";
    this.errRow = -1;
    this.errItemName = "";
    this.itemValidExp;
    this.property = "NORMAL";  // NORMAL, KEY, SINGLEKEY ìì±ì´ ìë¤.

    // method
    this.parse    = covColumnValidExp_parse;
    this.validate = covColumnValidExp_validate;

    // initialize
    this.parse(expression, oGrid);
}

/**
 * @type   : method
 * @access : public
 * @object : covColumnValidExp
 * @desc   : valid expressionì parsingíë¤.
 * @sig    : expression, oGrid
 * @param  : expression - required valid expression string.
 * @param  : oGrid      - required ê²ì¬ëì Grid ì¤ë¸ì í¸
 */
function covColumnValidExp_parse(expression, oGrid) {
    var index = -1;

    var expArr = expression.advancedSplit(":", "i");

    if (expArr.length < 3) {
        return;
    }

    var itemName = null;

    this.colId = expArr[0].trim();

    if (new coGridFormat(oGrid.Format).existsColumn(this.colId)) {
        itemName = oGrid.ColumnProp(this.colId, "Name");
    }

    this.itemValidExp = new covItemValidExp(expArr[1] + ":" + expArr[2] + ":" + expArr[3], itemName);
    if (!cfIsNull(expArr[4]) && expArr[4].toUpperCase().trim() == "KEY") {
        this.property = "KEY";
    } else if (!cfIsNull(expArr[4]) && expArr[4].toUpperCase().trim() == "SINGLEKEY") {
        this.property = "SINGLEKEY";
    }
}

/**
 * @type   : method
 * @access : public
 * @object : covColumnValidExp
 * @desc   : validationì ìííë¤.
 * @sig    : oDataSet, row
 * @param  : oDataSet - required ê²ì¬ëì DataSet
 * @param  : row - required ê²ì¬ëì DataSetì í¹ì  row ë²í¸
 */
function covColumnValidExp_validate(oDataSet, row) {
    if (oDataSet == null ||
        oDataSet.tagName != "OBJECT" ||
        oDataSet.attributes.classid.nodeValue.toUpperCase() !== "CLSID:3267EA0D-B5D8-11D2-A4F9-00608CEBEE49" ||
        oDataSet.CountRow < 1
       ) {
        return true;
    }

    var startIdx = 1;
    var endIdx = oDataSet.CountRow;
    var value;
    var rowYN = false;

    if (row != null) {
        startIdx = row;
        endIdx = row;
        rowYN = true;
    }

    for (var i = startIdx; i <= endIdx; i++) {
        value = (oDataSet.NameValue(i, this.colId) == null) ?
                 null : oDataSet.NameString(i, this.colId).trim();  // DataSetì dataë¥¼ trim ìí¨ë¤.

        if (this.itemValidExp != null && !this.itemValidExp.validate(value)) {
            this.errMsg = this.itemValidExp.errMsg;
            this.errRow = i;
            this.errItemName = this.itemValidExp.itemName;
            return false;
        }
    }

    return true;
}

///////////////////////////// covGridValidExp /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : Gridì ëí ì í¨ì±ê²ì¬ ííì
 * @sig    : oGrid
 * @param  : oGrid - required ê²ì¬ëì Grid
 * @author : ìì¬í
 */
function covGridValidExp(oGrid) {
    // data;
    this.oGrid = oGrid;
    this.columnValidExps = new Array();
    this.errMsg;
    this.errRow;
    this.errColId;
    this.errItemName = "";

    // method
    this.parse = covGridValidExp_parse;
    this.validate = covGridValidExp_validate;

    // initialize
    this.parse();
}

/**
 * @type   : method
 * @access : public
 * @object : covGridValidExp
 * @desc   : valid expressionì parsingíë¤.
 */
function covGridValidExp_parse() {
    if (cfIsNull(this.oGrid) || cfIsNull(this.oGrid.validExp)) {
        return;
    }

    var columns = this.oGrid.validExp.trim().advancedSplit(",", "it");

    for (var i = 0; i < columns.length; i++) {
        this.columnValidExps[i] = new covColumnValidExp(columns[i], this.oGrid);
    }
}

/**
 * @type   : method
 * @access : public
 * @object : covGridValidExp
 * @desc   : validationì ìííë¤.
 * @sig    : [row[, colId[, ignoreStatus]]]
 * @param  : row - optional ê²ì¬ëì Gridì í¹ì  row ë²í¸
 * @param  : colId - optional ê²ì¬ëì Gridì í¹ì  ì»¬ë¼ì id
 * @param  : ignoreStatus - optional Grid ê²ì¬ì row statusì ìê´ìì´ ëª¨ë ê²ì¬í  ê²ì¸ì§ì ì¬ë¶.
 */
function covGridValidExp_validate(row, colId, ignoreStatus) {
    var oDataSet = document.all(this.oGrid.DataId);

    if (oDataSet == null ||
        oDataSet.tagName != "OBJECT" ||
        oDataSet.attributes.classid.nodeValue.toUpperCase() !== "CLSID:3267EA0D-B5D8-11D2-A4F9-00608CEBEE49" ||
        oDataSet.CountRow < 1
       ) {
        return true;
    }

    var startIdx;
    var endIdx;
    var nestedStartIdx;
    var nestedEndIdx;
    var keyColValidExps = new Array();
    var singleKeyColValidExps = new Array();

    // í¤ì»¬ë¼ ì¶ì¶
    var keyColCnt = 0;
    var singleKeyColCnt = 0;
    for (var i = 0; i < this.columnValidExps.length; i++) {
        if (this.columnValidExps[i].property == "KEY") {
            keyColValidExps[keyColCnt++] = this.columnValidExps[i];
        } else if (this.columnValidExps[i].property == "SINGLEKEY") {
            singleKeyColValidExps[singleKeyColCnt++] = this.columnValidExps[i];
        }
    }

    if (row != null) {
        startIdx = row;
        endIdx = row;
    } else {
        startIdx = 1;
        endIdx = oDataSet.CountRow - 1;
    }

    // ì¤ë³µí¤ ì²´í¬
    if (keyColValidExps.length > 0 || singleKeyColValidExps.length > 0) {
        var isEqual;

        for (var i = startIdx; i <= endIdx; i++) {

            if (row != null) {
                nestedStartIdx = 1;
            } else {
                nestedStartIdx = i + 1;
            }

            for (j = nestedStartIdx; j <= oDataSet.CountRow; j++) {
                if (i == j) {
                    continue;
                }

                // ì¼ë°í¤ì»¬ë¼ ê²ì¬.
                {
                    isEqual = true;
                    for (var k = 0; k < keyColValidExps.length; k++) {
                        if (oDataSet.NameValue(i, keyColValidExps[k].colId) !=
                            oDataSet.NameValue(j, keyColValidExps[k].colId)
                           ) {
                            isEqual = false;
                            break;
                        }
                    }

                    if (isEqual) {
                        this.errMsg = cfGetMsg(MSG_COM_ERR_032, ["@"]);

                        if (row != null) {
                            this.errRow = row;  // rowë¥¼ ì§ì íìì ëë í´ë¹ rowì ëí errorë¡ ê°ì£¼
                        } else {
                            this.errRow = j; // rowì§ì ì´ ìì¼ë©´ ì¤ë³µë ëê°ì ë°ì´í°ì¤ ììì ëì¤ì ìë rowë¥¼ errorë¡ ê°ì£¼
                        }

                        for (var k = 0; k < keyColValidExps.length; k++) {
                            this.errItemName = this.errItemName + keyColValidExps[k].itemValidExp.itemName + ", ";
                        }

                        this.errItemName = this.errItemName.substring(0, this.errItemName.lastIndexOf(","));
                        return false;
                    }
                }

                // ì±ê¸í¤ì»¬ë¼ ê²ì¬.
                for (var k = 0; k < singleKeyColValidExps.length; k++) {
                    if (oDataSet.NameValue(i, singleKeyColValidExps[k].colId) ==
                        oDataSet.NameValue(j, singleKeyColValidExps[k].colId)
                       ) {
                        this.errMsg = cfGetMsg(MSG_COM_ERR_032, ["@"]);

                        if (row != null) {
                            this.errRow = row;  // rowë¥¼ ì§ì íìì ëë í´ë¹ rowì ëí errorë¡ ê°ì£¼
                        } else {
                            this.errRow = j; // rowì§ì ì´ ìì¼ë©´ ì¤ë³µë ëê°ì ë°ì´í°ì¤ ììì ëì¤ì ìë rowë¥¼ errorë¡ ê°ì£¼
                        }

                        this.errItemName = singleKeyColValidExps[k].itemValidExp.itemName;
                        return false;
                    }
                }
            }
        }
    }

    if (row != null) {
        startIdx = row;
        endIdx = row;
    } else {
        startIdx = 1;
        endIdx = oDataSet.CountRow;
    }

    // validation ìí
    for (var i = startIdx; i <= endIdx; i++) {
        if (ignoreStatus || oDataSet.RowStatus(i) != 0) {
            for (var j = 0; j < this.columnValidExps.length; j++) {
                columnValidExp = this.columnValidExps[j];

                if (!columnValidExp.validate(oDataSet, i)) {
                    this.errMsg = columnValidExp.errMsg;
                    this.errRow = i;
                    this.errColId = columnValidExp.colId;
                    this.errItemName = columnValidExp.errItemName;
                    return false;
                }
            }
        }
    }

    return true;
}

///////////////////////////// covLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'length' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ê¸¸ì´ë¥¼ ê°ì§ê³  ìëì§ ê²ì¬íë¤.
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covLengthValidator_validate(value) {
    if (value.length != this.length) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_005, ["@", String(this.length)]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covByteLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'byteLength' í­ëª©ì ëí validator. ê°ì´ ì§ì ë byteë¨ìì ê¸¸ì´ë¥¼ ê°ì§ê³  ìëì§ ê²ì¬íë¤.
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covByteLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covByteLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covByteLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covByteLengthValidator_validate(value) {
    if (cfGetByteLength(value) != this.length) {
        // íê¸ì Byteë¥¼ ê³ì°íë¤. (ê³µëì´ì© DBë 2Byte(ksc5601), ê·¸ ì¸ë 3Byte(utf-8)
        var hangulByte = cfGetHangulByte();

        this.message = new coMessage().getMsg(MSG_COM_ERR_027, ["@", String(this.length), String(Math.floor(this.length / hangulByte ))]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMinLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'minLength' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ê¸¸ì´ ì´ìì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : length
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covMinLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covMinLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMinLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMinLengthValidator_validate(value) {
    if (value.length < this.length) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_011, ["@", String(this.length)]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMinByteLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'minByteLength' í­ëª©ì ëí validator. ê°ì´ ì§ì ë byteë¨ìì ê¸¸ì´ ì´ìì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : length
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covMinByteLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covMinByteLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMinByteLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMinByteLengthValidator_validate(value) {
    if (cfGetByteLength(value) < this.length) {

        // íê¸ì Byteë¥¼ ê³ì°íë¤. (ê³µëì´ì© DBë 2Byte(ksc5601), ê·¸ ì¸ë 3Byte(utf-8)
        var hangulByte = cfGetHangulByte();

        this.message = new coMessage().getMsg(MSG_COM_ERR_028, ["@", String(this.length), String(Math.floor(this.length / hangulByte ))]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMaxLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'maxLength' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ê¸¸ì´ ì´ìì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : length
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covMaxLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covMaxLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMaxLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMaxLengthValidator_validate(value) {
    if (value.length > this.length) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_012, ["@", String(this.length)]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMaxByteLengthValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'maxByteLength' í­ëª©ì ëí validator. ê°ì´ ì§ì ë byteë¨ìì ê¸¸ì´ ì´íì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : length
 * @param  : length - required ì í¨í ê¸°ì¤ê¸¸ì´.
 * @author : ìì¬í
 */
function covMaxByteLengthValidator(length) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covMaxByteLengthValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMaxByteLengthValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMaxByteLengthValidator_validate(value) {
    if (cfGetByteLength(value) > this.length) {

        // íê¸ì Byteë¥¼ ê³ì°íë¤. (ê³µëì´ì© DBë 2Byte(ksc5601), ê·¸ ì¸ë 3Byte(utf-8)
        var hangulByte = cfGetHangulByte();
        this.message = new coMessage().getMsg(MSG_COM_ERR_029, ["@", String(this.length), String(Math.floor(this.length / hangulByte))]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covNumberValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'number' í­ëª©ì ëí validator. ê°ì´ ì«ìì¸ì§ë¥¼ ê²ì¬íë¤. ëí formatì ì§ì íìì ê²½ì°ìë formatì ë§ëì§ ê²ì¬íë¤.
 * <pre>
 *     "number" ë¡ ì§ì ì : ì«ìì¸ì§ ì²´í¬
 *     "number=(5.2)" ë¡ ì§ì ì : ì«ìì´ë©´ì ì ìë¶ 5ìë¦¬ ì´í, ììë¶ 2ìë¦¬ ì´íì¸ì§ë¥¼ ì²´í¬
 * </pre>
 * @author : ìì¬í
 */
function covNumberValidator(format) {
    // data;
    re = /\(\s*(\d+)\s*.\s*(\d+)\s*\)/;
    this.iLength;
    this.dLength;

    this.message = "";
    this.validity = false;

    // method
    this.validate = covNumberValidator_validate;

    // initialize
    {
        if (cfIsNull(format)) {
            return;
        }

        r = format.match(re);

        if (r == null) {
            return;
        }

        this.iLength = Number(r[1]);
        this.dLength = Number(r[2]);
    }
}

/**
 * @type   : method
 * @access : public
 * @object : covNumberValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covNumberValidator_validate(value) {
    if (isNaN(value)) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_007, ["@"]);
        return false;
    } else if (!cfIsNull(this.iLength)) {
        var strValue = String(value);
        var idx = strValue.indexOf('.');
        var iNumStr = strValue.substr(0, idx);
        var dNumStr = strValue.substr(idx + 1);

        if (iNumStr.length > this.iLength) {
            this.message = new coMessage().getMsg(MSG_COM_ERR_059, ["@", String(this.iLength)]);
            return false;
        } else if (dNumStr.length > this.dLength) {
            this.message = new coMessage().getMsg(MSG_COM_ERR_060, ["@", String(this.dLength)]);
            return false;
        }
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMinNumberValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'minNumber' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ìµìê°ì ëëì§ë¥¼ ê²ì¬íë¤.
 * @sig    : minNumber
 * @param  : minNumber - required ì í¨í ê¸°ì¤ ìµìê°.
 * @author : ìì¬í
 */
function covMinNumberValidator(minNumber) {
    // data;
    this.message = "";
    this.validity = false;
    this.minNumber = minNumber;

    // method
    this.validate = covMinNumberValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMinNumberValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMinNumberValidator_validate(value) {
    // ê¸°ì¤ê°ì´ ì«ìê° ìëê²½ì° ë¬´ì¡°ê±´ true;
    if (isNaN(this.minNumber)) {
        this.validity = true;
        return true;
    }

    if (isNaN(value)) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_007, ["@"]);
        return false;
    }

    this.minNumber = Number(this.minNumber);
    value          = Number(value);

    if (value < this.minNumber) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_013, ["@", String(this.minNumber)]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMaxNumberValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'maxNumber' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ìµëê°ì ëì§ ìëì§ë¥¼ ê²ì¬íë¤.
 * @sig    : maxNumber
 * @param  : maxNumber ì í¨í ê¸°ì¤ ìµëê°.
 * @author : ìì¬í
 */
function covMaxNumberValidator(maxNumber) {
    // data;
    this.message = "";
    this.validity = false;
    this.maxNumber = (maxNumber == null) ? "" : maxNumber.trim();

    // method
    this.validate = covMaxNumberValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMaxNumberValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMaxNumberValidator_validate(value) {
    // ê¸°ì¤ê°ì´ ì«ìê° ìëê²½ì° ë¬´ì¡°ê±´ true;
    if (isNaN(this.maxNumber)) {
        this.validity = true;
        return true;
    }

    if (isNaN(value)) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_007, ["@"]);
        return false;
    }

    this.maxNumber = Number(this.maxNumber);
    value          = Number(value);

    if (value > this.maxNumber) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_014, ["@", String(this.maxNumber)]);
        return false;
    }

    this.validity = true;
    return true;
}


///////////////////////////// covInNumberValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'inNumber' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ë²ì ë´ì ê°ì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : inNumber
 * @param  : inNumber - required ì«ìì ë²ìë¥¼ ëíë´ë ì¤í¸ë§. ì) "1~100"
 * @author : ìì¬í
 */
function covInNumberValidator(inNumber) {
    // data;
    this.message = "";
    this.validity = false;
    this.minNumber;
    this.maxNumber;

    // method
    this.validate = covInNumberValidator_validate;

    // initialize
    this.minNumber = inNumber.substring(0, inNumber.indexOf("~"));
    this.maxNumber = inNumber.substr(inNumber.indexOf("~") + 1);

    this.minNumber = (this.minNumber == null) ? "" : this.minNumber.trim();
    this.maxNumber = (this.maxNumber == null) ? "" : this.maxNumber.trim();
}

/**
 * @type   : method
 * @access : public
 * @object : covInNumberValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covInNumberValidator_validate(value) {
    // ê¸°ì¤ê°ì´ ì«ìê° ìëê²½ì° ë¬´ì¡°ê±´ true;
    if (isNaN(this.minNumber) || isNaN(this.maxNumber)) {
        this.validity = true;
        return true;
    }

    if (isNaN(value)) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_007, ["@"]);
        return false;
    }

    this.minNumber = Number(this.minNumber);
    this.maxNumber = Number(this.maxNumber);
    value     = Number(value);

    if (value < this.minNumber || value > this.maxNumber) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_006, ["@", String(this.minNumber), String(this.maxNumber)]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covInNumberAlphaValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'inNumberAlpha' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ë²ì ë´ì ê°ì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : inNumberAlpha
 * @author : ííì£¼
 */
function covInNumberAlphaValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covInNumberAlphaValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covInNumberAlphaValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covInNumberAlphaValidator_validate(value) {

	if(!cfChkAlpa_Number(value)){
        this.message = new coMessage().getMsg(MSG_COM_ERR_079, ["@"]);
        return false;
	}

    this.validity = true;
    return true;
}

///////////////////////////// covInAlphaValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'inAlpha' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ë²ì ë´ì ê°ì¸ì§ë¥¼ ê²ì¬íë¤.
 * @sig    : inAlpha
 * @author : ííì£¼
 */
function covInAlphaValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covInAlphaValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covInAlphaValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covInAlphaValidator_validate(value) {

	if(!cfIsAlphaOnly(value)){
        this.message = new coMessage().getMsg(MSG_COM_ERR_081, ["@"]);
        return false;
	}

    this.validity = true;
    return true;
}

///////////////////////////// covMinDateValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'minDate' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ë ì§ë¥¼ ëëì§ë¥¼ ê²ì¬íë¤.
 *           'YYYYMMDD' íìì¼ë¡ ë ì§ë¥¼ íê¸°í´ì¼ íë¤.
 *             ì) minDate=20020315
 * @sig    : minDate
 * @param  : minDate - required ì í¨í ê¸°ì¤ ìµìê°.
 * @author : ìì¬í
 */
function covMinDateValidator(minDate) {
    // data;
    this.message = "";
    this.validity = false;
    this.minDate = minDate;

    // method
    this.validate = covMinDateValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMinDateValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMinDateValidator_validate(value) {
    if (!(new covDateValidator("YYYY-MM-DD").validate(value))) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_018, ["@"]);
        return false;
    }

    if (value < this.minDate) {
        var msgParams = new Array(4);
        msgParams[0] = "@";
        msgParams[1] = this.minDate.substring(0,4);
        msgParams[2] = this.minDate.substring(5,6) == "0" ? this.minDate.substring(6,7) : this.minDate.substring(5,7);
        msgParams[3] = this.minDate.substring(8,9) == "0" ? this.minDate.substring(9,10) : this.minDate.substring(8,10)
        this.message = new coMessage().getMsg(MSG_COM_ERR_025, msgParams);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covPhoneValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ì íë²í¸ í­ëª©ì ëí validator.
 * @param  : phoneNumber - ê²ì¬í  ì íë²í¸.
 * @author : ë¥ì í¸
 */
function covPhoneValidator(phoneNumber) {
    // data;
    this.message = "";
    this.validity = false;
    this.length = length;

    // method
    this.validate = covPhoneValidator_validate;
}


/**
 * @type   : method
 * @access : public
 * @object : covPhoneValidator_validate
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covPhoneValidator_validate(value) {

	if(/^\d{2,4}-\d{3,4}-\d{4}$/.test(value)){
	    this.validity = true;
	}else{
        this.message = new coMessage().getMsg(MSG_COM_ERR_038, ["@"]);
        return false;
	}

    return true;
}



///////////////////////////// covMinDateYMValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'minDateYM' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ë ì§ë¥¼ ëëì§ë¥¼ ê²ì¬íë¤.
 *           'YYYYMM' íìì¼ë¡ ë ì§ë¥¼ íê¸°í´ì¼ íë¤.
 *             ì) minDate=200203
 * @sig    : minDate
 * @param  : minDate - required ì í¨í ê¸°ì¤ ìµìê°.
 * @author : ííì£¼
 */
function covMinDateYMValidator(minDate) {
    // data;
    this.message = "";
    this.validity = false;
    this.minDate = minDate;

    // method
    this.validate = covMinDateYMValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMinDateYMValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMinDateYMValidator_validate(value) {
    if (!(new covDateValidator("YYYY-MM").validate(value))) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_018, ["@"]);
        return false;
    }

    if (value < this.minDate) {
        var msgParams = new Array(3);
        msgParams[0] = "@";
        msgParams[1] = this.minDate.substring(0,4);
        msgParams[2] = this.minDate.substring(5,6) == "0" ? this.minDate.substring(6,7) : this.minDate.substring(5,7);
        this.message = new coMessage().getMsg(MSG_COM_ERR_025, msgParams);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMaxDateValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'maxDate' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ìµëê°ì ëì§ ìëì§ë¥¼ ê²ì¬íë¤.
 * @sig    : maxDate
 * @param  : maxDate - required ì í¨í ìµëë ì§ê°.
 * @author : ìì¬í
 */
function covMaxDateValidator(maxDate) {
    // data;
    this.message = "";
    this.validity = false;
    this.maxDate = maxDate;

    // method
    this.validate = covMaxDateValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMaxDateValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMaxDateValidator_validate(value) {
    if (!(new covDateValidator("YYYY-MM-DD").validate(value))) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_018, ["@"]);
        return false;
    }

    if (value > this.maxDate) {
        var msgParams = new Array(4);
        msgParams[0] = "@";
        msgParams[1] = this.maxDate.substring(0,4);
        msgParams[2] = this.maxDate.substring(5,6) == "0" ? this.maxDate.substring(6,7) : this.maxDate.substring(5,7);
        msgParams[3] = this.maxDate.substring(8,9) == "0" ? this.maxDate.substring(9,10) : this.maxDate.substring(8,10)
        this.message = new coMessage().getMsg(MSG_COM_ERR_024, msgParams);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covMaxDateYMValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'maxDate' í­ëª©ì ëí validator. ê°ì´ ì§ì ë ìµëê°ì ëì§ ìëì§ë¥¼ ê²ì¬íë¤.
 * @sig    : maxDate
 * @param  : maxDate - required ì í¨í ìµëë ì§ê°.
 * @author : ííì£¼
 */
function covMaxDateYMValidator(maxDate) {
    // data;
    this.message = "";
    this.validity = false;
    this.maxDate = maxDate;

    // method
    this.validate = covMaxDateYMValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covMaxDateYMValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covMaxDateYMValidator_validate(value) {
    if (!(new covDateValidator("YYYY-MM").validate(value))) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_018, ["@"]);
        return false;
    }

    if (value > this.maxDate) {
        var msgParams = new Array(3);
        msgParams[0] = "@";
        msgParams[1] = this.maxDate.substring(0,4);
        msgParams[2] = this.maxDate.substring(5,6) == "0" ? this.maxDate.substring(6,7) : this.maxDate.substring(5,7);
        this.message = new coMessage().getMsg(MSG_COM_ERR_024, msgParams);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covFormatValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'format' í­ëª©ì ëí validator. ê°ì´ ë§ì¤í¬ë¡ ííë íìê³¼ ì¼ì¹íëì§ ê²ì¬íë¤.
 *             - format characters
 *               #    : ë¬¸ìì ì«ì
 *               h, H : íê¸ (Hë ê³µë°±í¬í¨)
 *               A, Z : ë¬¸ì (Zë ê³µë°±í¬í¨)
 *               0, 9 : ì«ì (9ë ê³µë°±í¬í¨)
 * @sig    : format
 * @param  : format - required í¬ë©§ ì¤í¸ë§.
 * @author : ìì¬í
 */
function covFormatValidator(format) {
    // data;
    this.message  = "";
    this.validity = false;
    this.format   = format

    // method
    this.validate = covFormatValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covFormatValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covFormatValidator_validate(value) {
    if (value.length != this.format.length) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
        return false;
    }

    for (var i = 0; i < this.format.length; i++) {
        switch(this.format.charAt(i)) {
            case 'h' :
                var cCode = value.charCodeAt(i);
                if ( (value.charAt(i) == " ") ||
                     !((0xAC00 <= cCode && cCode <= 0xD7A3) || (0x3131 <= cCode && cCode <= 0x318E))
                   ) {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;

            case 'H' :
                var cCode = value.charCodeAt(i);
                if ( (value.charAt(i) != " ") &&
                     !((0xAC00 <= cCode && cCode <= 0xD7A3) || (0x3131 <= cCode && cCode <= 0x318E))
                   ) {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;

            case '0' :
                if (isNaN(value.charAt(i)) || value.charAt(i) == " ") {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;

            case '9' :
                if (isNaN(value.charAt(i))) {
                    if (value.charAt(i) != " ") {
                        this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                        return false;
                    }
                }
                break;

            case 'A' :
                if ( (value.charAt(i) == " ") || !isNaN(value.charAt(i)) ) {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;

            case 'Z' :
                if ( (value.charAt(i) != " ") && !isNaN(value.charAt(i)) ) {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;

            case '#' :
                break;

            default :
                if (value.charAt(i) != this.format.charAt(i)) {
                    this.message = new coMessage().getMsg(MSG_COM_ERR_026, ["@", this.format]);
                    return false;
                }
                break;
        }
    }

    this.validity = true;
    return true;
}

///////////////////////////// covSsnValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'ssn' í­ëª©ì ëí validator. ìë ¥ë ì£¼ë¯¼ë±ë¡ë²í¸ê° ì í¨íì§ ê²ì¬íë¤.
 * @author : ìì¬í
 */
function covSsnValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covSsnValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covSsnValidator
 * @desc   : validationì ìííë¤.
 * @sig    : ssn
 * @param  : ssn - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covSsnValidator_validate(ssn) {

    if ( ssn == null || ssn.trim().length != 13 || isNaN(ssn) )  {
        this.message = new coMessage().getMsg(MSG_COM_ERR_016, ["@"]);
        return false;
    }

    var jNum1 = ssn.substr(0, 6);
    var jNum2 = ssn.substr(6);

    /*
      ìëª»ë ìëìì¼ì ê²ì¬í©ëë¤.
      2000ëëë¶í° ì±êµ¬ë³ ë²í¸ê° ë°ëìì´ì¼ë¡ êµ¬ë³ìê° 2ë³´ë¤ ìë¤ë©´
      1900ëë ìì´ëê³  2ë³´ë¤ í¬ë¤ë©´ 2000ëë ì´ììì´ ë©ëë¤.
      ë¨ 1800ëë ìì ê³ì°ìì ì ì¸í©ëë¤.
    */
    bYear = (jNum2.charAt(0) <= "2") ? "19" : "20";

    // ì£¼ë¯¼ë²í¸ì ììì 2ìë¦¬ë¥¼ ì´ì´ì 4ìë¦¬ì ìëì ì ì¥í©ëë¤.
    bYear += jNum1.substr(0, 2);

    // ë¬ì êµ¬í©ëë¤. 1ì ëºê²ì ìë°ì¤í¬ë¦½í¸ììë 1ìì 0ì¼ë¡ íê¸°íê¸° ëë¬¸ìëë¤.
    bMonth = jNum1.substr(2, 2) - 1;

    bDate = jNum1.substr(4, 2);

    bSum = new Date(bYear, bMonth, bDate);

    // ìëìì¼ì íë¹ì±ì ê²ì¬íì¬ ê±°ì§ì´ ììì ìë¬ë©ì¸ì§ë¥¼ ëíë
    if ( bSum.getYear() % 100 != jNum1.substr(0, 2) || bSum.getMonth() != bMonth || bSum.getDate() != bDate) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_016, ["@"]);
        return false;
    }

    total = 0;
    var temp = new Array(13);

    for (i = 1; i <= 6; i++) {
        temp[i] = jNum1.charAt(i-1);
    }

    for (i = 7; i <= 13; i++) {
        temp[i] = jNum2.charAt(i-7);
    }

    for (i = 1; i <= 12; i++) {
        k = i + 1;

        // ê° ìì ê³±í  ìë¥¼ ë½ìëëë¤. ê³±ìê° ë§ì¼ 10ë³´ë¤ í¬ê±°ë ê°ë¤ë©´ ê³ì°ìì ìí´ 2ë¡ ë¤ì ììíê² ë©ëë¤.
        if(k >= 10) k = k % 10 + 2;

        // ê° ìë¦¬ìì ê³ì°ìë¥¼ ê³±íê°ì ë³ì totalì ëì í©ì°ìíµëë¤.
        total = total + (temp[i] * k);
    }

    // ë§ì§ë§ ê³ì°ìì ë³ì last_numì ëìí©ëë¤.
    last_num = (11- (total % 11)) % 10;

    // laster_numì´ ì£¼ë¯¼ë²í¸ìë§ì§ë§ìì ê°ìë©´ ì°¸ì íë¦¬ë©´ ê±°ì§ì ë°íí©ëë¤.
    if(last_num != temp[13]) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_016, ["@"]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covFsnValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'fsn' í­ëª©ì ëí validator. ìë ¥ë ì¸êµ­ì¸ë±ë¡ë²í¸ê° ì í¨íì§ ê²ì¬íë¤.
 * @author : ííì£¼
 */
function covFsnValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covFsnValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covFsnValidator
 * @desc   : validationì ìííë¤.
 * @sig    : fsn
 * @param  : fsn - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covFsnValidator_validate(fsn) {
    if ( fsn == null || fsn.trim().length != 13 || isNaN(fsn) )  {
        this.message = new coMessage().getMsg(MSG_COM_ERR_080, ["@"]);
        return false;
    }

	var sum=0;
	var odd=0;
	buf = new Array(13);
	for(i=0; i<13; i++) {
		buf[i]=parseInt(fsn.charAt(i));
	}
	odd = buf[7]*10 + buf[8];

//	if(odd%2 != 0) {
////		this.message = new coMessage().getMsg(MSG_COM_ERR_080, ["@"]);
////        return false;
//	}

	if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
		//this.message = new coMessage().getMsg(MSG_COM_ERR_080, ["@"]);
        //return false;
		//2012.04.10 12ë²ì§¸ ìë¦¬ ì²´í¬ë¡ì§ ì£¼ìì²ë¦¬(ì¸êµ­ì¸ë±ë¡ë²í¸ ì²´ê³ë³ê²½ì ë°ë¥¸ ì í¨ì± ì²´í¬ ì¤í¬ë¦½í¸ ìì )
	}

	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for(i=0, sum=0; i<12; i++) {
		sum += (buf[i] *= multipliers[i]);
	}
	sum = 11 - (sum%11);
	if(sum >= 10) { sum -= 10; }
	sum += 2;
	if(sum >= 10) { sum -= 10; }
	if(sum != buf[12]) {
		this.message = new coMessage().getMsg(MSG_COM_ERR_080, ["@"]);
        return false;
	}

    this.validity = true;
    return true;
}

///////////////////////////// covCsnValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : 'csn' í­ëª©ì ëí validator. ìë ¥ë ì¬ììë±ë¡ë²í¸ê° ì í¨íì§ ê²ì¬íë¤.
 * @author : ìì¬í
 */
function covCsnValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covCsnValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covCsnValidator
 * @desc   : validationì ìííë¤.
 * @sig    : csn
 * @param  : csn - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covCsnValidator_validate(csn) {

    if ( csn == null || csn.length != 10 || isNaN(csn) )  {
        this.message = new coMessage().getMsg(MSG_COM_ERR_017, ["@"]);
        return false;
    }

    var sum = 0;
    var nam = 0;
    var checkDigit = -1;
    var checkArray = [1,3,7,1,3,7,1,3,5];

    for(i=0 ; i < 9 ; i++)
      sum += csn.charAt(i) * checkArray[i];

    sum = sum + ((csn.charAt(8) * 5 ) / 10);

    nam = Math.floor(sum) % 10;

    checkDigit = ( nam == 0 ) ? 0 : 10 - nam;

    if ( csn.charAt(9) != checkDigit) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_017, ["@"]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covFilterInValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ì§ì ë ë¬¸ì ì´ì¸ì ë¤ë¥¸ ë¬¸ìê° ë¤ì´ìì ê²½ì° ì í¨íì§ ìì ê²ì¼ë¡ íë¨íë¤.
 *           í¹ì  ë¬¸ìë¤ì ëí í¹ìë¬¸ìê° ìëì ëììë¤.<br>
 * <pre>
 *         ;    - \;
 *         íê¸ - \h
 *         ìë¬¸ - \a
 *         ì«ì - \n
 * </pre>
 * @sig    : fStr
 * @param  : fStr - required filterì ëí íí
 * @author : ìì¬í
 */
function covFilterInValidator(fStr) {
    // data;
    this.message = "";
    this.validity = false;
    this.fStrArr = fStr.advancedSplit(";", "i");

    for (var i = 0; i < this.fStrArr.length; i++) {
        if (this.fStrArr[i] == "\\h") {
            this.fStrArr[i] = "íê¸";
        } else if (this.fStrArr[i] == "\\a") {
            this.fStrArr[i] = "ìë¬¸";
        } else if (this.fStrArr[i] == "\\n") {
            this.fStrArr[i] = "ì«ì";
        }
    }

    // method
    this.validate = covFilterInValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covFilterInValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covFilterInValidator_validate(value) {
    var isIn = false;
    var c
    var cCode;

    for (var i = 0; i < value.length; i++) {
        isIn = false;
        c = value.charAt(i);
        cCode = value.charCodeAt(i);

        for (var j = 0; j < this.fStrArr.length; j++) {
            if (this.fStrArr[j] == "íê¸" &&
                ((0xAC00 <= cCode && cCode <= 0xD7A3) || (0x3131 <= cCode && cCode <= 0x318E))
               ) {
                isIn = true;
            } else if ( this.fStrArr[j] == "ìë¬¸" &&
                        ((0x61 <= cCode && cCode <= 0x7A) || (0x41 <= cCode && cCode <= 0x5A))
                      ) {
                isIn = true;
            } else if (this.fStrArr[j] == "ì«ì" && !isNaN(c)) {
                isIn = true;
            } else if (this.fStrArr[j] == c) {
                isIn = true;
            }
        }

        if (!isIn) {
            this.message = new coMessage().getMsg(MSG_COM_ERR_036, ["@", this.fStrArr.toString()]);
            return false;
        }
    }

    this.validity = true;
    return true;
}

///////////////////////////// covFilterOutValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ì§ì ë ì¤í¸ë§ë¤ì´ ë¤ì´ìì ê²½ì° ì í¨íì§ ììê²ì¼ë¡ íë¨íë¤.
 *           ë¶ë¦¬ìë ";"ë¥¼ ì¬ì©íë¤. ";" í¹ì ";"ë¬¸ìê° ë¤ì´ê° ì¤í¸ë§ì íí°ë§íë ¤ í  ê²½ì°ë
 *           "\\;"ë¼ê³  íê¸°í´ì¼ íë¤.
 * @sig    : fStr
 * @param  : fStr - required filterì ëí íí
 * @author : ìì¬í
 */
function covFilterOutValidator(fStr) {
    // data;
    this.message = "";
    this.validity = false;
    this.fStrArr = fStr.advancedSplit(";", "i");

    // method
    this.validate = covFilterOutValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covFilterValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covFilterOutValidator_validate(value) {
    for (var i = 0; i < this.fStrArr.length; i++) {
        if (value.indexOf(this.fStrArr[i]) != -1) {
            this.message = new coMessage().getMsg(MSG_COM_ERR_033, ["@", this.fStrArr.toString()]);
            return false;
        }
    }

    this.validity = true;
    return true;
}

///////////////////////////// covEmailValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ìë ¥ê°ì´ email íìì ì í©íì§ë¥¼ ê²ì¬íë¤.
 * @author : ìì¬í
 */
function covEmailValidator() {
    // data;
    this.message = "";
    this.validity = false;

    // method
    this.validate = covEmailValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covEmailValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value - required ì í¨ì± ê²ì¬ ëìê°.
 * @return : boolean. ì í¨ì± ì¬ë¶.
 */
function covEmailValidator_validate(value) {
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;

    if (value.search(format) == -1) {
        this.message = new coMessage().getMsg(MSG_COM_ERR_037, ["@"]);
        return false;
    }

    this.validity = true;
    return true;
}

///////////////////////////// covDateValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ê°ì´ Dateíìì¸ì§ë¥¼ ê²ì¬íë¤.
 *
 *            formatë¬¸ì :  YYYY,  -> 4ìë¦¬ ëë
 *                          YY,    -> 2ìë¦¬ ëë. 2000ë ì´í.
 *                          MM,    -> 2ìë¦¬ ì«ìì ë¬.
 *                          DD,    -> 2ìë¦¬ ì«ìì ì¼.
 *                          hh,    -> 2ìë¦¬ ì«ìì ìê°. 12ì ê¸°ì¤
 *                          HH,    -> 2ìë¦¬ ì«ìì ìê°. 24ì ê¸°ì¤
 *                          mm,    -> 2ìë¦¬ ì«ìì ë¶.
 *                          ss     -> 2ìë¦¬ ì«ìì ì´.
 *
 *            ì)
 *                'YYYYMMDD' -> '20020328'
 *                'YYYY/MM/DD' -> '2002/03/28'
 *                'Today : YY-MM-DD' -> 'Today : 02-03-28'
 *
 *            ì°¸ê³ )
 *                  formatë¬¸ìê° ì¤ë³µí´ì ëì¤ëë¼ë ì²ì ëì¨ ë¬¸ìì ëí´ìë§
 *                  formatë¬¸ìë¡ ì¸ìëë¤. YYYYì YY, hhì HH ë ì¤ë³µì¼ë¡ ë³¸ë¤.
 *                  ë ì§ë ë,ìì´ ì¡´ì¬í  ëë§ ì íí ì²´í¬íê³  ë§ì¼ ë, ìì´ ìë¤ë©´
 *                  1 ~ 31 ì¬ì´ì¸ì§ë§ ì²´í¬íë¤.
 *
 * @sig    : dateExp
 * @param  : dateExp - required Date Format expression.
 *             ì) 2002ë 3ì 12ì¼ -> "YYYY-MM-DD"(Date Format Expression) -> "2002-03-12"
 * @author : ìì¬í
 */
function covDateValidator(dateExp) {
    // data;
    this.message = "";
    this.validity = false;
    this.dateExp = dateExp;
    this.year = null;
    this.month = null;

    // method
    this.validate = covDateValidator_validate;
    this.checkLength = covDateValidator_checkLength;
    this.checkYear = covDateValidator_checkYear;
    this.checkMonth = covDateValidator_checkMonth;
    this.checkDay = covDateValidator_checkDay;
    this.checkHour = covDateValidator_checkHour;
    this.checkMin = covDateValidator_checkMin;
    this.checkSec = covDateValidator_checkSec;
    this.checkRest = covDateValidator_checkRest;
}

/**
 * @type   : method
 * @access : public
 * @object : covDateValidator
 * @desc   : validationì ìííë¤.
 * @sig    : value
 * @param  : value   - required ê²ì¬ëìì´ ëë Date ì¤í¸ë§ ê°.
 * @return : boolean - ì í¨ì± ì¬ë¶
 */
function covDateValidator_validate(value) {
    this.value = value;

    if ( this.checkLength(value) &&
         this.checkYear(value) &&
         this.checkMonth(value) &&
         this.checkDay(value) &&
         this.checkHour(value) &&
         this.checkMin(value) &&
         this.checkSec(value) &&
         this.checkRest(value)
       ) {
        this.validity = true;
        return true;
    } else {
        this.validity = false;
        return false;
    }
}

function covDateValidator_checkLength() {

    if (this.value.length == this.dateExp.length) {
        return true;
    } else {
        this.message = new coMessage().getMsg(MSG_COM_ERR_005, ["@", String(this.dateExp.length)]);
        return false;
    }
}

function covDateValidator_checkYear() {
    var index = -1;

    if ( (index = this.dateExp.indexOf("YYYY")) != -1 ) {
        subValue = this.value.substr(index, 4);
        if ( !isNaN(subValue) &&
             (subValue > 0)
           ) {
            this.dateExp = this.dateExp.cut(index, 4);
            this.value = this.value.cut(index, 4);
            this.year = subValue;
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_015, ["@"]);
            return false;
        }
    }

    if ( (index = this.dateExp.indexOf("YY")) != -1 ) {
        subValue = "20" + this.value.substr(index, 2);
        if ( !isNaN(subValue) &&
             (subValue > 0)
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            this.year = subValue;
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_015, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkMonth() {
    var index = -1;

    if ( (index = this.dateExp.indexOf("MM")) != -1 ) {
        subValue = this.value.substr(index, 2);
        if ( !isNaN(subValue) &&
             (subValue > 0) &&
             (subValue <= 12)
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            this.month = subValue;
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_019, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkDay() {
    var index = -1;
    var days = 0;

    if ( (index = this.dateExp.indexOf("DD")) != -1 ) {
        if ( (this.year != null) && (this.month != null) ) {
            days = (this.month != 2) ? GLB_DAYS_IN_MONTH[this.month-1] : (( (this.year % 4) == 0 && (this.year % 100) != 0 || (this.year % 400) == 0 ) ? 29 : 28 );
        } else {
            days = 31;
        }

        subValue = this.value.substr(index, 2);
        if ( (!isNaN(subValue)) &&
             (subValue > 0) &&
             (subValue <= days)
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_020, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkHour() {
    var index = -1;

    if ( (index = this.dateExp.indexOf("hh")) != -1 ) {
        subValue = this.value.substr(index, 2);
        if ( !isNaN(subValue) &&
             (subValue >= 0) &&
             (subValue <= 12)
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_021, ["@"]);
            return false;
        }
    }

    if ( (index = this.dateExp.indexOf("HH")) != -1 ) {
        subValue = this.value.substr(index, 2);
        if ( !isNaN(subValue) &&
             (subValue >= 0) &&
             (subValue < 24)
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_021, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkMin() {
    var index = -1;

    if ( (index = this.dateExp.indexOf("mm")) != -1 ) {
        subValue = this.value.substr(index, 2);
        if ( !isNaN(subValue) &&
             (subValue >= 0) &&
             (subValue < 60 )
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            this.month = subValue;
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_022, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkSec() {
    var index = -1;

    if ( (index = this.dateExp.indexOf("ss")) != -1 ) {
        subValue = this.value.substr(index, 2);
        if ( (!isNaN(subValue)) &&
             (subValue >= 0) &&
             (subValue < 60 )
           ) {
            this.dateExp = this.dateExp.cut(index, 2);
            this.value = this.value.cut(index, 2);
            this.month = subValue;
            return true;
        } else {
            this.message = new coMessage().getMsg(MSG_COM_ERR_023, ["@"]);
            return false;
        }
    }

    return true;
}

function covDateValidator_checkRest() {
    if (this.value == this.dateExp) {
        return true;
    }

    return false;
}


///////////////////////////// covNullValidator /////////////////////////////
/**
 * @type   : object
 * @access : private
 * @desc   : ë¬´ì¡°ê±´ validí ê²°ê³¼ë¥¼ ê°ì§ validator.
 * @author : ìì¬í
 */
function covNullValidator() {
    // data;
    this.message = "";
    this.validity = true;

    // method
    this.validate = covNullValidator_validate;
}

/**
 * @type   : method
 * @access : public
 * @object : covNullValidator
 * @desc   : validationì ìííë¤.
 * @return : boolean - ë¬´ì¡°ê±´ true.
 */
function covNullValidator_validate() {
    this.message = new coMessage().getMsg(MSG_COM_INF_007);
    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë°ì¤í¬ë¦½í¸ì ì«ì ìì ì§ì ë ìë¦¿ìë§í¼ zero character ë¥¼ ì½ìíë¤.
 * <pre>
 *     cfDigitalNumber(125, 5);
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° "00123" ì´ë¼ë Stringì ë¦¬í´íë¤.
 * @sig    : length, number
 * @param  : length - required ì«ìë¥¼ íííë ê¸¸ì´
 * @param  : number - required ë³íë  ì«ì
 * @return : ë³íë ì¤í¸ë§
 * @author : ìì¬í
 */
function cfDigitalNumber(number, length) {
    var numStr = number + "";
    var zeroChars = "";

    for (var i = 0; i < (length - numStr.length); i++) {
        zeroChars = zeroChars + "0";
    }
    return (zeroChars + numStr);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì í ìë§í¼ ììì  ìëë¡ 0ì ë¶ì¸ë¤.
 * <pre>
 *     cfFractionFormat( '-2,123.3',2);
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° "-2,123.30" ì´ë¼ë Stringì ë¦¬í´íë¤.
 * @sig    : number, pos
 * @param  : number - required ë¬¸ìì´
 * @param  : pos    - required ì ë°ë(ììì ì´í ìë¦¬ì)
 * @return : ë³íë ì¤í¸ë§
 * @author : ì ì°ì£¼
 */
function cfFractionFormat( number, pos ){
    var numStr = String( number );
    var ptPos  = numStr.indexOf(".");
    var cnt    = 0;

    if ( ptPos < 1 ){
        numStr += ".";
        cnt = pos;
    } else {
        var subLen = numStr.substr( ptPos + 1 ).length;
        if ( pos > subLen ){
            cnt = pos - subLen;
        }
    }

    var str0 = "";

    for ( var i = 0 ; i < cnt ; i ++ ){
        str0 += "0";
    }

    return numStr + str0;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì«ì Stringë¥¼ ë°ìì ì½¤ë§ë¥¼ ë£ì´ ë§ë ë¤.
 *           ì½ë¨¸í¬í¨í ì«ì Validê¹ì§ ì²ë¦¬í¨
 * <pre>
 *  cfCommaEdit( "-123a4.3", 1)  -> false
 *  cfCommaEdit( "-1234.3", 1)   -> -1,234.3
 *  cfCommaEdit( "-1234.3", 4)   -> false
 *  cfCommaEdit( "-1234.3")      -> -1,234.3
 * </pre>
 * @sig    : numStr, primeLen
 * @param  : numStr   - required  ì«ì String
 * @param  : primeLen - optional  ììì  ì´í ìë¦¬ì ì²´í¬
 * @return : ì½¤ë§ì²ë¦¬ë ê° í¹ì false
 * @author : ì ì°ì£¼
 */
function cfCommaEdit( numStr, primeLen ){

    var pureNum         = "";
    var newVal          = "";
    var headNum         = 0 ;
    var loopCount       = 0 ;
    var minus           = "";
    var commaIndex      = 0 ;
    var nStr            = "";
    var modfyStr        = "";
    var pStr            = "";
    var dotIndex        = 0 ;
    var dotValue        = "";

    numStr = numStr + "";

    if( cfIsNull( numStr ) ){
        return "";
    } else {
        numStr = String( numStr );

        dotIndex    = numStr.lastIndexOf(".") ;
        commaIndex  = numStr.indexOf(",") ;     // -1 ì¼ì´ë©´ Commaê° ìë ì«ì

        if ( dotIndex != -1 ){                   // ììì ì´ ìë ì«ì
            pStr = numStr.substr(dotIndex+1) ;
            if ( primeLen > 0 && pStr.length != primeLen ){
                return false ;
            }
            if ( !cfChkNumPositive ( pStr )){
                return false ;
            }
            modfyStr = numStr.substr(0,dotIndex) ;
            nStr     = modfyStr.replace(/,/g,'') ;
        }else{
            modfyStr = numStr ;
            nStr     = numStr.replace(/,/g,'') ;
        }

        if ( nStr.substr(0,1) == '-' ) { minus = "-" ; nStr = nStr.substr(1); }

        for( i = 0 ; i < ( nStr.length ); i++ ){
            pureNum = pureNum + nStr.substr(i,1);
        }

        if(pureNum.toString().length > 3){
            headNum = pureNum.length % 3;
            loopCount = ( pureNum.toString().length - headNum ) / 3;
            if(headNum != 0)
                newVal = pureNum.substr(0,headNum) + ",";
            newVal = newVal + pureNum.substr(headNum, 3);

            for( var idx= 0 ; idx < ( loopCount - 1) ; idx++){
                newVal = newVal + ",";
                newVal = newVal + pureNum.substr(headNum + (3*(idx+1)), 3);
            }
        }else newVal = pureNum;

        if ( !cfChkNum( minus+pureNum ) ){
            return false ;
        }

        if ( (commaIndex != -1) && (modfyStr != minus+newVal) ){
            return false ;
        }

        if ( dotIndex != -1 && pStr.length != 0 )  // ììì ì´ ìë ì«ì
            return minus+newVal+"."+pStr ;
        else
            return minus+newVal;
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ì»´ë§ë¥¼ ìì¤ ì«ìë¥¼ ë°ííë¤.
 * <pre>
 *     cfNumeric( "-12,345.09" ) -> -12345.09
 * </pre>
 * @sig    : number
 * @param  : number - required ë¬¸ìì´
 * @return : ì¹íë ë¬¸ìì´ ì¤í¸ë§
 * @author : ìì ì¼
 */
function cfNumeric(number) {
    number = number + "";
    number = number.replace(/,/g,"");
    var nm = parseFloat(number).toString();
    return (isNaN(nm)?0:nm);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì«ìë¥¼ ì ì¸í ëª¨ë  ë¬¸ìë¥¼ ì ê±°íë¤.
 * <pre>
 *     cfGetNumberOnly("2006.01.02");"
 *     ììê°ì´ ì¬ì©íì ê²½ì° '20060102'ë¥¼ return
 * </pre>
 * @sig    : sOrg
 * @param  : sOrg - required ë¬¸ìì´
 * @return : ì¹íë ë¬¸ìì´ ì¤í¸ë§
 * @author : ì ì°ì£¼
 */
function cfGetNumberOnly(sOrg) {
	return sOrg.replace(/[^0-9]/g, "");
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìì ì ìì¸ì§ ì²´í¬íë¤.
 * <pre>
 *  cfChkNumPositive(-123)  -> false
 *  cfChkNumPositive(123)   -> true
 *  cfChkNumPositive(123.4) -> false
 * </pre>
 * @sig    : toCheck
 * @param  : toCheck  - check data
 * @return : true(ìì)/false(ìì)
 * @author : ì ì°ì£¼
 */
function cfChkNumPositive( toCheck ){
    var chkStr = toCheck+"" ;
    var isNum  = true ;

    for (j = 0 ; isNum && (j < chkStr.length) ; j++){
        if ((chkStr.substring(j,j+1) < "0") || (chkStr.substring(j,j+1) > "9")){
            isNum = false ;
        }
    }
    return isNum;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì«ìì¸ì§, ë²ìì ì í©íì§ ì²´í¬íë¤.
 * @sig    : toCheck, totLen, primeLen
 * @param  : toCheck  - check data
 * @param  : totLen   - ì´ìë¦¿ì
 * @param  : primeLen - ììì ì´í ìë¦¬ì
 * @param  : limit    - ë²ì
 * @return : true(Number)/false - Not Number
 * @author : ì ì°ì£¼
 */
function cfChkNum( toCheck, totLen, primeLen ){
    var isNum       = true ;
    var dotIndex    = 0 ;
    var nStr        = toCheck+"" ;  // ì ìë¶ë¶
    var pStr        = "" ;          // ììë¶ë¶

    dotIndex = toCheck.lastIndexOf(".") ;

    if ( cfIsNull(nStr) ) return false;

    if ( dotIndex != -1 ){           // ììì ì´ ìë ì«ì

        pStr = toCheck.substr(dotIndex+1) ;
        if ( (primeLen > 0 && pStr.length > primeLen) || toCheck.substring(toCheck.length-1)=="." ){
            return false ;
        }

        if ( !cfChkNumPositive ( pStr )){
            return false ;
        }
        nStr = toCheck.substr(0,dotIndex) ;
    }

    if ( primeLen > 0 && nStr.length > totLen-primeLen ){
        return false ;
    }

    for (j = 0 ; isNum && (j < nStr.length) ; j++){
        if ((nStr.substring(j,j+1) < "0") || (nStr.substring(j,j+1) > "9")){
            if ( nStr.substring(j,j+1) == "-" ){
                if ( j != 0 ){
                   isNum = false;
                }
            }else{
                isNum = false ;
            }
        }
    }
    if ( nStr == "-" ) isNum = false ;
    return isNum;
}


/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì ë textBoxì ìì ì¤ì§ ì«ìë§ ìë ¥ ê°ë¥í ë¡ íë¤.
 * <pre>
 *    cfSetObjNumberOnly([sId,sNm])
 * </pre>
 * @sig    : objectArray
 * @param  : objectArray ì«ìë§ ìë ¥ë°ëë¡ íë objectë¤
 * @return : void
 * @author : ìì ì¼
 */
function cfSetObjNumberOnly(objArray) {
    if (eval(objArray).length != null) {

        for ( i = 0 ; i < objArray.length ; i++) {
            eval(objArray[i]).onkeypress = function (){cfNumberOnly()};
        }

    } else {
        eval(objArray).onkeypress = function (){cfNumberOnly()};
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥íì¤í¸ ë°ì¤ì ì«ìë§ ìë ¥í  ì ìê² íë¤.
 * <pre>
 *     onkeypress="cfNumberOnly(event);"
 *     ììê°ì´ ì¬ì©íì ê²½ì° ì«ìë§ ìë ¥ê°ë¥íê² íë¤. - . ë íì©
 *     ì¤íì´ì¤ ë¶ê°
 * </pre>
 * @sig    : e
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfNumberOnly(e) {
    if(window.event){   //IE
        e = window.event
        var lkeycode = e.keyCode;
    }else{               //W3C
        var lkeycode = e.charCode;
    }

    if(  !(48 <= lkeycode && lkeycode <=57)
       && lkeycode != 0             // ê¸°í key
       && lkeycode != 45            // -
       && lkeycode != 46 ) {        // .
        if( window.event ){
            e.keyCode = 0;
        }else{
            e.preventDefault();
        }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥íì¤í¸ ë°ì¤ì ìë¬¸ê³¼ ì«ìë§ ìë ¥.
 * <pre>
 *     onkeypress="cfAlpaNumberOnly(event);"
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° ìë¬¸ê³¼ ì«ìë§ ìë ¥.
 * @sig    : e
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfAlpaNumberOnly(e) {

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.charCode;
    }

    var bAlpaNumber = true;

    if  ( lkeycode == 0 ) {  // - . ë íµê³¼
        // íµê³¼
    } else if  ( lkeycode < 48 ) {
        bAlpaNumber = false;
    } else if ( lkeycode >= 48 && lkeycode <= 57 ){   // ì«ì
        // íµê³¼
    } else if ( lkeycode > 57 && lkeycode < 65 ){
        bAlpaNumber = false;
    } else if ( lkeycode >= 65 && lkeycode <= 90 ){   // Alphabat ëë¬¸ì
        // íµê³¼
    } else if ( lkeycode > 90 && lkeycode < 97 ){
        bAlpaNumber = false;
    } else if ( lkeycode >= 97 && lkeycode <= 122 ){  // Alphabat ìë¬¸ì
        // íµê³¼
    } else{
        bAlpaNumber = false;
    }

    if( !bAlpaNumber ){
        if( window.event ){
            e.keyCode = 0;
        }else{
            e.preventDefault();
        }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥íì¤í¸ ë°ì¤ì ìë¬¸, ì«ì, ê³µë°±(' ')ë§ ìë ¥.
 * <pre>
 *     onkeypress="cfAlpaNumberSpaceOnly(event);"
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° ìë¬¸ê³¼ ì«ì, ê³µë°±ë§ ìë ¥.
 * @sig    : e
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfAlpaNumberSpaceOnly(e) {

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.charCode;
    }
    var bAlpaNumber = true;

    if  ( lkeycode == 0 || lkeycode == 32 ) {  // ê³µë°±
        // íµê³¼
    } else if  ( lkeycode < 48 ) {
        bAlpaNumber = false;
    } else if ( lkeycode >= 48 && lkeycode <= 57 ){   // ì«ì
        // íµê³¼
    } else if ( lkeycode > 57 && lkeycode < 65 ){
        bAlpaNumber = false;
    } else if ( lkeycode >= 65 && lkeycode <= 90 ){   // Alphabat ëë¬¸ì
        // íµê³¼
    } else if ( lkeycode > 90 && lkeycode < 97 ){
        bAlpaNumber = false;
    } else if ( lkeycode >= 97 && lkeycode <= 122 ){  // Alphabat ìë¬¸ì
        // íµê³¼
    } else{
        bAlpaNumber = false;
    }

    if( !bAlpaNumber ){
        if( window.event ){
            e.keyCode = 0;
        }else{
            e.preventDefault();
        }
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥íì¤í¸ ë°ì¤ì íê¸ë§ ìë ¥.
 * <pre>
 *     onkeypress="cfKoreanOnly(event);"
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° íê¸ë§ ìë ¥.
 * @sig    : e
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ííì£¼
 */
function cfKoreanOnly(e) {

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.charCode;
    }

	if (lkeycode != 0 &&((lkeycode<65)||(lkeycode>90))) {

		if(window.event){  //IE
			e.returnValue=false;
		} else{              //W3C
			var lkeycode = e.charCode;
			e.preventDefault();
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : INPUT TEXTì ìë¬¸ ìë ¥ì ëë¬¸ìë¡ ë³í(ì½ëì± ë°ì´í° ìë ¥ì)
 * <pre>
 *    onkeyup=cfUpperCase(this, event)
 * </pre>
 * @sig    : obj, e
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ííì£¼
 */
function cfUpperCase(obj,e){

    if(window.event){    //IE
        e = window.event
    }

    var lkeycode = e.keyCode;

	if( !((65 <= lkeycode && lkeycode <=90) || (97 <= lkeycode && lkeycode <=122) || lkeycode == 13) )
		e.keyCode = 0;		// ì´ë²¤í¸ cancel
	if( e.type == "keyup" && lkeycode > 47 && lkeycode < 58 && parseInt(obj.value.charAt( obj.value.length-1)) )
		obj.value = obj.value.substring(0, obj.value.length-1 );
	if( (65 <= lkeycode && lkeycode <=90) || (97 <= lkeycode && lkeycode <=122))
		obj.value = obj.value.toUpperCase();
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¬ì©ìê° ëë¥¸ keyê° enter key ì¸ì§ ì¬ë¶ë¥¼ ìë ¤ì¤ë¤.
 * <pre>
 *     function fncOnKeyDown(e) {
 *         ...
 *         if (cfIsEnterKey(e)) {
 *             ...
 *         }
 *     }
 *     ...
 *     &lt;input type="text" onkeydown="fncOnKeyDown(event)"&gt;
 * </pre>
 * @return : enter key ì¬ë¶
 * @author : ìì¬í
 */
function cfIsEnterKey(e) {

    if(window.event){    //IE
        e = window.event
    }
    var lkeycode = e.keyCode;

    if (lkeycode == 13) {
        return true;
    }

    return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¡°íì¡°ê±´ í¼ì EnterKey ì´ë²¤í¸ë¥¼ ë¶ì¬
 *           input text, input passwordì ííë¤.
 * <pre>
 *     cfSetEvent(fnc, [obj1, obj2])
 * </pre>
 * ex) cfSetEvent(fncSearchList, [form.sEmpno, form.sEname, form.sDname]);
 * @sig    : fun, obj
 * @param  : fun - required ì´ë²¤í¸ ë°ìì ìíí  function ëª
 * @param  : obj - required í¹ì  functionì í´ë¹íë eventë¥¼ ì¤ object ì array
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfSetEvent(fnc,obj){
    try{
        if(fnc == null || fnc == undefined) {
            return false;
        }

        if (obj.length == null) {
            switch (obj.tagName) {
	            case "TABLE":
	            case "DIV":
	            case "FIELDSET":
	            case "TR":
	            	objArr = obj.getElementsByTagName("*");
	                break;
				default:
					objArr = new Array(1);
            		objArr[0] = obj;
            		break;
            }
        } else {
            objArr = obj;
        }

        var oElement
        for (var objArrIdx = 0; objArrIdx < objArr.length; objArrIdx++) {
            oElement = objArr[objArrIdx];

            switch (cfGetElementType(oElement)) {
                case "TEXT" :
                case "HIDDEN" :
                case "PASSWORD" :
                case "SUBMIT" :
                case "RESET" :
                case "CHECKBOX" :
                case "SELECT" :
                case "RADIO" :
                    cfAttachEvent( oElement, "keydown", function(event){if( cfIsEnterKey(event)) fnc()}, false );
                    break;
                default:
                    break;
            }
        }
    }catch(e){}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ë¸ì í¸ì event listenerë¥¼ ì¶ê°íë¤.
 * <pre>
 *     cfAttachEvent(obj, evt, fnc, useCapture )
 * </pre>
 * @sig    : obj, evt, fnc, useCapture
 * @param  : obj - required í¹ì  functionì í´ë¹íë eventë¥¼ ì¤ object
 * @param  : evt - required í´ë¹íë event type
 * @param  : useCapture - optional ì¬ì©ìê° captureë¥¼ ì´ê¸°íí ì§ ì¬ë¶. defaultë false
 * @return : boalean
 * @author : ì ì°ì£¼
 */
function cfAttachEvent(obj, evt, fnc, useCapture ){

    if(!useCapture) useCapture = false;

    if( obj.addEventListener){      //W3C DOM
        return obj.addEventListener(evt, fnc, useCapture);
    }else if( obj.attachEvent ){    //MS DOM
        return obj.attachEvent("on"+evt, fnc);
    }else {
        return false;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¬ì©ìì ìë ¥ê°ì´ Byteë¡ íì°ë ìµëê¸¸ì´ë¥¼ ëì ê²½ì° ìë ¥ì´ ìëëë¡ íë í¨ì. <br>
 *           ìíê¹ê²ë Windows XP íê²½ììë íê¸ì ëí í¤ì´ë²¤í¸ê° ë°ìíì§ ììì ëìíì§ ìëë¤.<br>
 *           ì¤ë¸ì í¸ ì ì¸ì onkeydown ì´ë²¤í¸ì ë¤ìê³¼ ê°ì´ ê¸°ì í´ ì£¼ì´ì¼ë§ íë¤.
 * <pre>
 *     onkeydown="cfValidateMaxByteLength(10, event);"
 * </pre>
 * íì¬ë htmlì text input, textareaìë§ ì ì©ëë¤.
 * @sig    : length, e
 * @param  : length   - required max byte length
 * @param  : e        - required ì´ë²¤í¸
 * @author : ì ì°ì£¼
 */
function cfValidateMaxByteLength(length, e) {
    var value = "";

    if(window.event){    //IE
        e = window.event;
        var vElement = e.srcElement;
        var lkeycode = e.keyCode;
    } else{                //W3C
        var vElement = e.currentTarget;
        var lkeycode = e.which;
    }

    if (lkeycode == 8 ||   // backspace
        lkeycode == 33 ||  // PgUp key
        lkeycode == 34 ||  // PgDn key
        lkeycode == 35 ||  // end key
        lkeycode == 36 ||  // home key
        lkeycode == 37 ||  // left key
        lkeycode == 38 ||  // up key
        lkeycode == 39 ||  // right key
        lkeycode == 40 ||  // down key
        lkeycode == 46     // delete key
       ) {
        return true;
    }

    switch (cfGetElementType(vElement)) {
        case "TEXT" :
        case "TEXTAREA" :
            value = vElement.value;
            break;

        default :
            return;
    }

    if(window.event){    //IE
        if (cfGetByteLength(value) > length ) {
            vElement.blur();
            vElement.focus();
            vElement.value = vElement.value.substr(0, vElement.value.length - 1);
            event.returnValue = false;
            return;
        }

        if (vElement.onkeyup == null) {
            vElement.onkeyup =
                function() {
                    if (cfGetByteLength(vElement.value) > length) {
                        vElement.blur();
                        vElement.focus();
                        vElement.value = vElement.value.substr(0, vElement.value.length - 1);
                    }
                }
        }

        if (cfGetByteLength(value) == length ) {
           // ìì±íê¸ : 0xAC00 <= c && c <= 0xD7A3
           // ìì : 0x3131 <= c
           // ëª¨ì : c <= 0x318E
            var c = value.charCodeAt(value.length - 1);

            if ( (0xAC00 <= c && c <= 0xD7A3) || (0x3131 <= c && c <= 0x318E) ) {
                e.returnValue = true;
            } else {
                e.returnValue = false;

                if( window.event ){
                    e.returnValue = false;
                }else{
                    e.preventDefault();
                }
            }
        } else {
            e.returnValue = true;
        }
    }else{    //W3C
        var rtnValue = value;
        for(var idx=0; idx<value.length; idx++){
            if (cfGetByteLength(value.substr(0, idx)) >= length ) {
                rtnValue = value.substr(0, idx-1);
                break;
            }
        }
        vElement.value = rtnValue;

       if (vElement.onkeyup == null) {
            vElement.onkeyup =
                function() {
                    var rtnValue = vElement.value;
                    for(var idx=0; idx<vElement.value.length; idx++){
                        if (cfGetByteLength(vElement.value.substr(0, idx)) >= length ) {
                            rtnValue = vElement.value.substr(0, idx);
                            break;
                        }
                    }
                    vElement.value = rtnValue;
                }
        }
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ì¤í¸ë§ì ìë¦¿ìë¥¼ Byte ë¨ìë¡ íì°íì¬ ìë ¤ì¤ë¤. ìë¬¸, ì«ìë 1Byteì´ê³  íê¸ì 2Byteì´ë¤.(ì/ëª¨ ì¤ì íëë§ ìë ê¸ìë 2Byteì´ë¤.)
 * <pre>
 *     cfGetByteLength('íê¸');
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° 4 ë¥¼ ë¦¬í´íë¤.
 * @sig    : value
 * @param  : value - required ì¤í¸ë§
 * @return : ì¤í¸ë§ì ê¸¸ì´
 * @author : ì°¨ì¢í¸
 */
function cfGetByteLength(value){
    var byteLength = 0;

    if (cfIsNull(value)) {
        return 0;
    }

    var c;

    // íê¸ì Byteë¥¼ ê³ì°íë¤. (ê³µëì´ì© DBë 2Byte(ksc5601), ê·¸ ì¸ë 3Byte(utf-8)
    var hanguleByte = cfGetHangulByte();

    for(var i = 0; i < value.length; i++) {
        c = escape(value.charAt(i));

        if (c.length == 1) {
            byteLength ++;
        } else if (c.indexOf("%u") != -1)  {
            byteLength += hanguleByte*1;
        } else if (c.indexOf("%") != -1)  {
            byteLength += c.length/3;
        }
    }

    return byteLength;
}

/**
 * @type   : function
 * @access : public
 * @desc   : íê¸ì Byteë¥¼ ë¦¬í´íë¤. <br>
 *          - ê³µëì´ì©DBë ko16ksc5601 íê¸ì 2Byteë¡ ì¸ìíê³ ,<br>
 *          - ë¤ë¥¸ ìì¤íDBë utf8 íê¸ì 3Byteë¡ ì¸ìíë¤.)<br>
 * <pre>
 *     cfGetHangulByte();
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° 2 í¹ì 3ì ë¦¬í´íë¤.
 * @sig    : void
 * @param  : void
 * @return : Byte length
 * @author : ì ì°ì£¼
 */
function cfGetHangulByte(){

    // ê³µëì´ì©DB, ì íì DBë ko16ksc5601 íê¸ì 2Byteë¡ ì¸ìíë¤.
    // ë¨, ì íììë¬´ ì¤ í¬íDBë¥¼ ì¬ì©íë ë¶ë¶ì ì ì¸
    if( gvContextPath == "/cop" || ( gvContextPath == "/isi" && (document.location + "").indexOf("/isi/emp") == -1 ) ){
        return 2;
    } else {                      // ë¤ë¥¸ ìì¤íDBë utf8 íê¸ì 3Byteë¡ ì¸ìíë¤.
        return 3;
    }
}
/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ê°ì´ ìë¬¸ê³¼ ì«ìì¸ì§ ì²´í¬
 * <pre>
 *     cfNoHangul("123");
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° ìë¬¸ê³¼ ì«ìì¸ì§ ì²´í¬
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : true(íê¸ì´ ì¡´ì¬íì§ ìì)/false(íê¸ì´ ì¡´ì¬í¨)
 * @author : ìì ì¼
 */
function cfNoHangul(sOrg) {
    var AlphaDigit;
    var IDLength;
    var NumberChar, CompChar;
    var ChkFlag;

    AlphaDigit= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    IDLength = sOrg.length;

    for (i = 0; i < IDLength; i++) {
        NumberChar = sOrg.charAt(i);
        ChkFlag = false;
        for (j = 0; j < AlphaDigit.length ; j++) {
            CompChar = AlphaDigit.charAt(j);
            if (NumberChar.toLowerCase() == CompChar.toLowerCase()){
                ChkFlag = true;
            }
        }
        if (ChkFlag == false) return false;
    }
    return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : í¹ì ë¬¸ìì ì¬ì©ì íì¸íë¤.
 * <pre>
 *     cfNoSpecialChar("123*")
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° í¹ìë¬¸ìê° ì¡´ì¬íëì§ íì¸íë¤.
 * ì²´í¬íë í¹ìë¬¸ì : '<>!@#$%^&*"
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : true(í¹ìë¬¸ìê° ì¡´ì¬íì§ ìì)/false(í¹ìë¬¸ìê° ì¡´ì¬í¨)
 * @author : ìì ì¼
 */
function cfNoSpecialChar(sOrg) {
    var AlphaDigit;
    var IDLength;
    var NumberChar, CompChar;
    var ChkFlag;

    AlphaDigit= "'<>!@#$%^&*" + '"';

    IDLength = sOrg.length;

    for (i = 0; i < IDLength; i++) {
        NumberChar = sOrg.charAt(i);
        ChkFlag = true;
        for (j = 0; j < AlphaDigit.length ; j++) {
            CompChar = AlphaDigit.charAt(j);
            if (NumberChar.toLowerCase() == CompChar.toLowerCase()){
                ChkFlag = false;
            }
        }
        if (ChkFlag == false) return false;
    }
    return true;
}


/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì ë textboxì ìë ¥í ìë¦¬ì ì´ìì¼ë¡ ìë ¥ì íë©´ ë¤ì objë¡ í¬ì»¤ì¤ë¥¼ ì´ëíë¤.
 * <pre>
 *     cfAutotab(obj1, 6, obj2);"
 * </pre>
 * @sig    : obj1, len, obj2
 * @param  : obj1 - required ê¸¸ì´ ì²´í¬ë¥¼ í  obj
 * @param  : len  - required ê¸¸ì´
 * @param  : obj2 - required í¬ì»¤ì± ë  obj
 * @return : void
 * @author : ìì§ì
 *
 * @modify : 2017.07.10 ì¹ì ê·¼ì± ì¡°ì¹ - ìë focus ì´ë ë©ìë deprecate
 */
function cfAutotab ( obj1,len, obj2 ){
   /* if(eval(obj1).value.length >= len ){
      eval(obj2 ).focus() ;
    }*/

	return;
}


/**
 * @type   : function
 * @access : public
 * @desc   : xvarm ìë²ì ìë fileì ë¤ì´ë¡ë íë¤.
 * <pre>
 *    spec ì laf.xmlì ì í´ì§ ê°ì ë°ë¼ ê°ì ¸ì¨ë¤. ì¤ì  íì¼ì ìë² ê²½ë¡ë specì¼ë¡ ê°ì ¸ì¨ ê°ê³¼  filename ì¼ë¡ ê²°ì ëë¤.
 *
 *    cfDownLoadFile(sElementid, sFileNm)
 * </pre>
 * @sig    : sElementid, sFileNm
 * @param  : sElementid - xvarm ìë²ì doc id
 * @param  : sFileNm    - íì¼ëª
 * @return : void
 * @author : ìì ì¼
 */
function cfDownLoadFile(sElementid, sFileNm){

    var vInFrame = '<iframe name="fileFrame" id="fileFrame" style="display:none; position:absolute; left:0; top:0; width:0; height:0" FrameBorder="0"></iframe>';

    var vAction = gvContextPath + '/FileDown';

    var vFormText = '<form name="fileForm"  id="fileForm" method="post" action="'+vAction+'" target="fileFrame">'
                  + '<input type="hidden" name="sElementid">'
                  + '<input type="hidden" name="sFileNm">'
                  + '</form>';

    // pageì ë¤ì´ë¡ëë¥¼ ìí iframe ì´ ì¡´ì¬íì§ ìì¼ë©´ ìë¡ ë§ë ë¤.
    if (document.getElementById('fileFrame') == null ) {

        if( document.all ){   //IE

	        for (var i = 0; i < document.all.length; i++) {
	            if (document.all[i].tagName == "BODY") {
	                document.all[i].insertAdjacentHTML("beforeEnd", vInFrame);
	                break;
	            }
	        }
	    } else {              //W3C
	        var parentObj = document.getElementsByTagName("BODY");

	        var objFrame = document.createElement("iframe");
	        objFrame.setAttribute("id","fileFrame");
	        objFrame.setAttribute("name","fileFrame");
	        objFrame.setAttribute("style", "display:none; position:absolute; left:0; top:0; width:0; height:0");
	        objFrame.setAttribute("FrameBorder", "0");
	        parentObj[0].appendChild(objFrame);

	    }
    }

    // pageì ë¤ì´ë¡ëë¥¼ ìí form ì´ ì¡´ì¬ íì§ ìì¼ë©´ ìë¡ ë§ë ë¤.
    if (document.getElementById('fileForm') == null ) {
        if( document.all ){   //IE
	        for (var i = 0; i < document.all.length; i++) {
	            if (document.all[i].tagName == "BODY") {
	                document.all[i].insertAdjacentHTML("beforeEnd", vFormText);
	                break;
	            }
	        }
	    } else {               //W3C
	        var parentObj = document.getElementById("fileFrame");

	        var objForm = document.createElement("Form");
	        objForm.setAttribute("id", "fileForm");
	        objForm.setAttribute("name", "fileForm");
	        objForm.setAttribute("target", "fileFrame");
	        objForm.setAttribute("action", vAction);
	        objForm.setAttribute("method", "post");

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "sElementid");
	        oElement.setAttribute("value", "");
	        objForm.appendChild( oElement );

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "sFileNm");
	        oElement.setAttribute("value", "");
	        objForm.appendChild( oElement );

	        parentObj.appendChild(objForm);
	    }
    }

    document.fileForm.action = vAction;
    document.fileForm.sElementid.value = sElementid;
    document.fileForm.sFileNm.value = sFileNm;

//	alert(vAction + "\n" + sDocId + "\n" + sFileNm);

    document.fileForm.submit();
}






/**
 * @type   : function
 * @access : public
 * @desc   : ìë²ìì íì¬ìê°ì ì½ì´ìì ìë°ì¤í¬ë¦½í¸ì Date ì¤ë¸ì í¸ë¡ ë³ííë¤.
 *           Date ì¤ë¸ì í¸ë¡ë¶í° ì¤í¸ë§ ííë¡ ë ì§ í¹ì ìê°ì ì»ì¼ë ¤ë©´ Date.format() ë©ìëë¥¼ ì°¸ì¡°í  ê².
 * @return : Date ì¤ë¸ì í¸
 * @author : ìì¬í
 */
function cfGetCurrentDate() {
    var dataSet;
    var dateString;

    if (document.all("coCurrentDateGDS") == null) {
        dataSet = document.createElement("<OBJECT>");
        dataSet.classid = "CLSID:3267EA0D-B5D8-11D2-A4F9-00608CEBEE49";
        dataSet.id = "coCurrentDateGDS";
        dataSet.SyncLoad = "true";
        dataSet.DataId = gvContextPath + "/GetCurrentDateR.pcg";
        // </head> íê·¸ ì§ì ì DataSet ì½ì
        for (var i = 0; i < document.all.length; i++) {
            if (document.all[i].tagName == "HEAD") {
                document.all[i].insertAdjacentElement("beforeEnd", dataSet);
                break;
            }
        }
    } else {
        dataSet = document.all("coCurrentDateGDS");
    }

    dataSet.Reset();
    dateString = dataSet.NameValue(1, "dateString");
    dataSet.clearData();

    if (cfIsNull(dateString)) {
        return null;
    }

    return new Date(dateString.substr(0, 4),
                    Number(dateString.substr(4, 2)) -1,
                    dateString.substr(6, 2),
                    dateString.substr(8, 2),
                    dateString.substr(10, 2),
                    dateString.substr(12, 2)
                   )
}


/**
 * @type   : function
 * @access : public
 * @desc   : emeditë text boxì íì¬ ë ì§ë¥¼ settingíë¤.
 * @sig    : objArray ,Format
 * @param  : textbox,Emeidt ííì object Array
 * @param  : ë ì§ í¬ë§·
 * <pre>
 *    cfSetCurrentDate(['oStartDate','oEndDate'],'YYYYMMDD')
 * </pre>
 * @return : String
 * @author : ìì ì¼
 */
function cfSetCurrentDate(objArray, format){

    var vCurDate = cfGetCurrentDate().format(format);

    if (objArray.length != null) {

        for ( i=0; i < objArray.length ; i++) {

            if ( cfGetElementType(eval(objArray[i])) == 'TEXT' || cfGetElementType(eval(objArray[i])) == 'HIDDEN') {
                eval(objArray[i]).value = vCurDate;
            } else if (cfGetElementType(objArray[i]) == 'GE') {
                eval(objArray[i]).Text = vCurDate;
            }
        }
    } else {

        if ( cfGetElementType(eval(objArray)) == 'TEXT' || cfGetElementType(eval(objArray)) == 'HIDDEN') {
            eval(objArray).value = vCurDate;
        } else if (cfGetElementType(eval(objArray)) == 'GE') {
            eval(objArray).Text = vCurDate;
        }
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ë°°ì¹ììì´ ììë¨ì ìë ¤ì£¼ë ìë¸ì°½ì ëì°ê³ , ë°°ì¹ììì ì¤ì ë¡ ì¤íí  íì´ì§ë¥¼ ì¤íìí¨ë¤. ì´ ë, ë°°ì¹ììì ì¤ì ë¡ ì¤íí 
 *           íì´ì§ë ê°ìíë©´ ìì­ ë°ì ëìì§ê³  ëí íì´ì§ë¡ ëê²¨ì¤ ë°ì´í°ê° ìì¼ë©´ íë¼ë¯¸í°ë¡ ëê²¨ì£¼ë, ë°ì´í°ê° ì¬ë¬ê°ì´ë©´
 *            íëì objectë¡ ë§ë¤ì´ì ëê²¨ì£¼ë©´ ëë¤.
 * <pre>
 *     ì)
 *         var paramObj = new Object();
 *         paramObj.a = param1;
 *         paramObj.b = param2;
 *         cfNotifyBatchJobStart(url, paramObj);
 * </pre>
 * @sig    : url, paramObj
 * @param  : url - required ë°°ì¹ììì ì¤ì ë¡ ì¤íí  íì´ì§ì url
 * @param  : paramObj ë°°ì¹ììì ì¤ì ë¡ ì¤íí  íì´ì§ì ì ë¬í  ì¤ë¸ì í¸
 * @author : ìì¬í
 */
function cfNotifyBatchJobStart(url, paramObj) {
    window.open("/comtask/notify_batchJob_start.html", "notifyBatchWindow", "left=0,top=0,height=100,width=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=no");
    //IEììë§ ì ê³µëë í¨ìì(ìì í´ì¼ í¨)
    window.showModelessDialog(url, paramObj, "dialogLeft:3000; dialogHeight:0; dialogWidth:0px; dialogHeight:0px; help:no; status:no; scroll:no")
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë°°ì¹ììì ì¤ì ë¡ ì¤íí íì´ì§ë¥¼ ë«ê³  ë°°ì¹ììì´ ììë¨ì ìë ¤ì£¼ìë ìë¸ì°½ì ë°°ì¹ììì´ ëë¬ë¤ë ë©ìì§ë¥¼ ëì´ë¤.
 * @author : ìì¬í
 */
function cfNotifyBatchJobEnd() {
    window.close();
    window.open("/comtask/notify_batchjob_end.html", "notifyBatchWindow", "left=0,top=0,height=100,width=300,status=no,toolbar=no,menubar=no,location=no,scrollbars=no");
}


/**
 * @type   : function
 * @access : public
 * @desc   : Loading íë©´ì íë©´ì ë ì´ë¤.
 * @sig    : iFrameId, posx, posy
 * @param  : iFrameID
 * @param  : x ìì¹
 * @param  : y ìì¹
 * <pre>
 *    cfStartLoading('LowerFrame')
 * </pre>
 * @return : void
 * @author : ìì ì¼
 */
function cfStartLoading(iFrameId, posx, posy ) {

    var x;
    var y;

    if (posx == null && posx == null) {

        x = document.body.clientWidth/2 + document.body.scrollLeft - 145;
        y = document.body.clientHeight/2 + document.body.scrollTop - 44;

    } else {

        x = posx;
        y = posy;
    }

    document.getElementById(iFrameId).style.posLeft=x;
    document.getElementById(iFrameId).style.posTop=y;

    //í´ë¹ DataSetì ë°ëì SyncLoadê° falseì¬ì¼íë¤.

    document.getElementById(iFrameId).style.display = "";
}

/**
 * @type   : function
 * @access : public
 * @desc   : Loading íë©´ì ìì¤ë¤.
 * @sig    : iFrameId
 * @param  : iFrameID
 * <pre>
 *    cfEndLoading('LowerFrame')
 * </pre>
 * @return : void
 * @author : ìì ì¼
 */
function cfEndLoading(iFrameId) {
if(iFrameId)
    document.getElementById(iFrameId).style.display = "none";
}

/**
 * @type   : function
 * @access : public
 * @desc   : body íê·¸ ëì iframe ì ë±ë¡íë¤.
 * @sig    : iFrameID
 * @param  : iFrameID
 * <pre>
 *    cfSetLoadFrame('LowerFrame')
 * </pre>
 * @return : void
 * @author : ìì ì¼
 */
function cfSetLoadFrame(iFrameId) {

    var vFrameId;

    if(iFrameId !=null) {
        vFrameId = iFrameId;
    } else vFrameId = 'LowerFrame';

    if(document.all(vFrameId)!=null) return;    //ì íê· ì¶ê°, fncOnload()ë¥¼ ëë² ì´ì í¸ì¶í  ê²½ì°ê° ìì..

    var vInFrame = '<iframe id="'+vFrameId+ '" style="display:none; position:absolute; left:600px; top:800px; width:333px; height:133px" FrameBorder="0" src="/images/loading.gif">' +
                   '</iframe>';

    for (var i = 0; i < document.all.length; i++) {
        if (document.all[i].tagName == "BODY") {
            document.all[i].insertAdjacentHTML("beforeEnd", vInFrame);
            break;
        }
    }

}

/**
 * @type   : function
 * @access : public
 * @desc   : íì¤í¸ ë°ì¤ì ë ì§ìë ¥ì ìí´ ë¬ë ¥ì ì¤ííë íì<br>
 *			  íµì¼ì±ì ìí´ "onclick" ì´ë²¤í¸ ë°ìì í¸ì¶íëë¡ íë¤.<br>
 * @sig    : obj, event, inputName
 * @param  : event - onclick
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * @param  : event - ì´ë²¤í¸
 * @param  : inputName - ê°ì ëê²¨ë°ì íì¤í¸ë°ì¤ëª ë¬¸ìì´
 * @param  : dateType - ì¸íë  ë ì§íì('YYYYMM':ëì, 'YYYY':ë, ê·¸ì¸:ëìì¼)
 * <pre>
 *    cfOpenCalendar(this,event,inputName)
 * </pre>
 * @return : void
 * @author : ííì£¼  ------------------------------------------------------------------------------------------------------------------------------- ìì  ì ì°¬ë²
 */
function cfOpenCalendar(obj, event, inputName, dateType, fncName)
{
	var sURL = null;
	var vArguments = new Object();
	var sFeature = null;

	var dlg_width  = 200;
	var dlg_height = 200;

	//íë©´ì ìì¹
	var innerX,innerY;
	if (self.innerWidth) { // IE ê¸°ë°
		innerX = self.screen.left;
		innerY = self.screen.top;
	}
	else if (document.documentElement && document.documentElement.clientTop) { // Explorer 6 Strict
		innerX = document.documentElement.clientLeft;
		innerY = document.documentElement.clientTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		innerX = document.body.clientLeft;
		innerY = document.body.clientTop;
	}

	//ì¤í¬ë¡¤ ë ì¬ì´ì¦
	var scrollX,scrollY;
	if (self.pageYOffset) { //  IE ê¸°ë°
		scrollX = self.pageXOffset;
		scrollY = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop) {	// Explorer 6 Strict
		scrollX = document.documentElement.scrollLeft;
		scrollY = document.documentElement.scrollTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		scrollX = document.body.scrollLeft;
		scrollY = document.body.scrollTop;
	}
	var dlg_left   = cfGetRealOffsetLeft(obj) + (event.screenX - event.clientX) + innerX - scrollX;
	var dlg_top    = cfGetRealOffsetTop(obj)  + (event.screenY - event.clientY) + innerY - scrollY + obj.offsetHeight;

	if (dlg_left + dlg_width > screen.availWidth) {
		dlg_left = screen.availWidth - dlg_width;
	}
	if (dlg_top + dlg_height > screen.availHeight) {
		dlg_top = dlg_top - dlg_height - obj.offsetHeight;
	}
	if (dlg_top < 0) dlg_top = 0;

	//2008.08.25 ContextPath ì ê±° ë¥ì í¸
//	sURL = gvContextPath + "/wem/common/calendar.jsp?inputName="+inputName;
	sURL ="/comm/pop/calendar.jsp?inputName=" + inputName + "&dateType=" + dateType + "&fncName=" + fncName;

	vArguments = new Object();
	vArguments.control = obj;
	sFeature = "toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,width="+dlg_width+", height="+dlg_height+", left="+dlg_left+", top="+dlg_top;
	window.open(sURL, 'cal' , sFeature);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤í¬ë¦°ì RealOffsetTop ê°ì ¸ì¤ê¸°<br>
 *			 ë¬ë ¥íìì ìì¹ë¥¼ ê³ì°íê¸° ìí´ ì¬ì©
 * @sig    : obj
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * <pre>
 *    GetRealOffsetTop(obj)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfGetRealOffsetTop(obj)
{
	return (obj ? obj.offsetTop + cfGetRealOffsetTop(obj.offsetParent) : 0);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤í¬ë¦°ì RealOffsetLeft ê°ì ¸ì¤ê¸°<br>
 *			 ë¬ë ¥íìì ìì¹ë¥¼ ê³ì°íê¸° ìí´ ì¬ì©
 * @sig    : obj
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * <pre>
 *    GetRealOffsetLeft(obj)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfGetRealOffsetLeft(obj)
{
	return (obj ? obj.offsetLeft + cfGetRealOffsetLeft(obj.offsetParent) : 0);
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>
 * @sig    : comboNm
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : cdGrpSeq - ê°ì ¸ì¬ ì½¤ë³´ë°ì¤ì ì½ëí¤ê°
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´ëª
 * <pre>
 *    cfCodeComboChg(comboNm, cdGrpSeq, selectedCode, initKey, initText, lang)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfCodeComboChg(comboNm, cdGrpSeq, selectedCode, initKey, initText, lang) {

	var frameName = "codeFrame" + new Date().valueOf();
	var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";
	var url = "";
	if(location.protocol == "https:")	url = "https://"+location.host;
	url += gvContextPath + "/common/comtask/comboChgHidden.jsp?"
	     + "comboNm=" + comboNm
         + "&cdGrpSeq=" + cdGrpSeq
         + "&selectedCode=" + selectedCode
         + "&initKey=" + initKey
         + "&initText=" + initText
         + "&lang=" + lang;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
		document.body.insertBefore(codeFrame);
		codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

		var iframe = document.getElementById(frameName);
    	iframe.src = url;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>
 * @sig    : column
 * @param  : column - ì ë ¬í  ì»¬ë¼ëª
 * @param  : order - ì ë ¬ìì
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfGrpCodeComboChg(column, order, comboNm, selectedCode, initKey, initText)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfGrpCodeComboChg(column, order, comboNm, selectedCode, initKey, initText) {

	var frameName = "codeFrame" + new Date().valueOf();
	var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";

	var url = "";
	if(location.protocol == "https:")	url = "https://"+location.host;
	url += gvContextPath + "/common/comtask/grpCodeComboHidden.jsp?"
		+ "&column=" + column
		+ "&order=" + order
	    + "&comboNm=" + comboNm
        + "&selectedCode=" + selectedCode
        + "&initKey=" + initKey
        + "&initText=" + initText;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
		document.body.insertBefore(codeFrame);
		codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

		var iframe = document.getElementById(frameName);
    	iframe.src = url;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì  ì²´í¬ë°ì¤ë¥¼ ëª¨ë ì²´í¬íë¤.<br>
 * @sig    : chk_obj
 * @param  : chk_obj - ì´ë²¤í¸ê° ì¼ì´ëë ì¤ë¸ì í¸
 * @param  : obj_name - ì²´í¬, ì¸ì²´í¬í  ì²´í¬ë°ì¤ ì´ë¦
 * <pre>
 *    cfAllCheck(chk_obj, obj_name)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfAllCheck(chk_obj, obj_name){

	var obj = document.getElementsByName(obj_name);

	for(var i=0; i < obj.length; i++ ){

		if(!obj[i].disabled){
			if(chk_obj.checked){
				obj[i].checked = true;
			}else{
				obj[i].checked = false;
			}
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì²´í¬ë ìë¦¬ë¨¼í¸ì ê°¯ìë¥¼ ê°ì ¸ì¨ë¤.<br>(ë¼ëì¤ë²í¼, ì²´í¬ë°ì¤ë§ í´ë¹)
 * @sig    : obj_name
 * @param  : obj_name - ì²´í¬ë¥¼ íì¸í  ì²´í¬ë°ì¤, ë¼ëì¤ë²í¼ ì´ë¦
 * <pre>
 *    cfGetCheckCnt(obj_name)
 * </pre>
 * @return : int cnt
 * @author : ííì£¼
 */
function cfGetCheckCnt(obj_name){

	var obj = document.getElementsByName(obj_name);
	var cnt = 0;
	for(var i=0; i < obj.length; i++ ){
		if(obj[i].checked){
			cnt++;
		}
	}
	return cnt;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì°í¸ë²í¸ ì¡°íì ìí íì<br>
 * @sig    : inputName1, inputName2, inputName3
 * @param  : inputName1 - ì°í¸ë²í¸ë¥¼ ë°ì ì¤ë¸ì í¸ëª
 * @param  : inputName2 - ê¸°ë³¸ì£¼ìë¥¼ ë°ì ì¤ë¸ì í¸ëª
 * @param  : inputName3 - ìì¸ì£¼ìë¥¼ ë°ì ì¤ë¸ì í¸ëª
 * <pre>
 *    cfOpenPostNumList(inputName1, inputName2, inputName3)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfOpenPostNumList(inputName1, inputName2, inputName3){

	var sWidth  = 480;
	var sHeight = 430;
	var sURL = gvContextPath + "/common/comtask/PstNumListPopupR.jsp?inputName1="+inputName1+"&inputName2="+inputName2+"&inputName3="+inputName3;
	var sName = "PostNum";
	cfOpen(sWidth, sHeight, '5', sURL, sName);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìëìì¼ ì½¤ë³´ë°ì¤ìì ì í ë,ìì ë°ë¥¸ ì¼ìë¥¼ ê³ì°íë¤.<br>('ë'ì½¤ë³´ë°ì¤, 'ì'ì½¤ë³´ë°ì¤ì ì ì©)
 * @sig    : yearObjNm, monthObjNm, dateObjNm, initKey, initText, selectedCode
 * @param  : yearObjNm - ì í 'ëë' ì¤ë¸ì í¸ëª
 * @param  : monthObjNm - ì í  'ì' ì¤ë¸ì í¸ëª
 * @param  : dateObjNm - ì¸íí  'ì¼' ì¤ë¸ì í¸ëª
 * @param  : initKey - 'ì¼' ì¤ë¸ì í¸ì default Keyê°
 * @param  : initText - 'ì¼' ì¤ë¸ì í¸ì default Textê°
 * @param  : selectedCode - 'ì¼' ì¤ë¸ì í¸ì ì íê°
 * <pre>
 *    cfChgBirthDate(yearObjNm, monthObjNm, dateObjNm, initKey, initText, selectedCode)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfChgBirthDate(yearObjNm, monthObjNm, dateObjNm, initKey, initText, selectedCode){

	var dateObj = document.getElementById(dateObjNm);
	var month = document.getElementById(monthObjNm).value;
	var year = document.getElementById(yearObjNm).value;

	// ì½¤ë³´ Data ì­ì 
	var selectCnt = dateObj.length;
	for(var i=0; i < selectCnt; i++) dateObj.remove(0);

	//ì´ê¸°ë°ì´í° ì¸í
	if((initKey != null && initKey != '') && (initText != null && initText != '')){
		var option = document.createElement("OPTION");
		if( document.all ){   //IE
			option.value = initKey;
			option.text  = initText;
			dateObj.add(option);
		} else {              //W3C
	    	option.setAttribute("value", initKey);
			option.text = initText;
	    	dateObj.appendChild(option);
		}
	}

	// ì ê· Data Add
	var date = 31;
	if(month == '04' || month == '06' || month == '09' || month == '11')	date = 30;
	else if(month == '02'){
		if(parseInt(year)%4 == 0)	date = 29;
		else date = 28;
	}

	for(var i=1; i<=date; i++){
		var option = document.createElement("OPTION");
		var j = i;
		if(i<10)	j = '0'+i;
		if( document.all ){   //IE
			option.value = j;
			option.text  = j;
			if(j == selectedCode)	option.selected = true;
			dateObj.add(option);
		} else {              //W3C
    		option.setAttribute("value", j);
			option.text = j;
			if(j == selectedCode)	option.setAttribute('selected', true);
    		dateObj.appendChild(option);
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¦¬í¬í¸ë¥¼ íë¦°í¸íë í¨ì
 * <pre>
 * cfPrintReport( "Rexpert1.rex", "/prototype/ReportTest.nav?aaa=1&bbb=2", "userId=aaa:pgmId=bbb^33:44", "1", "report" );
 * </pre>
 *
 * @sig    : reportNm, url, param, paperTy, windowNm
 * @param  : reportNm - ë¦¬í¬í¸ íì¼ëª(rexfile ë£¨í¸ íì ê²½ë¡ í¬í¨)
 * @param  : url - XML DataSetì íì±íë action url, ìë²ì ì ë¬íê³ ì íë íë¼ë¯¸í°ë í¨ê» ëê¸´ë¤.
 * @param  : param - ë¦¬í¬í¸ì ì ë¬í  íë¼ë¯¸í°, userId=aaa:pgmId=bbb^33:44íí
 * @param  : paperTy - ì¶ë ¥íí( 1:ì¸ë¡, 2:ê°ë¡ ) ëí´í¸ë ì¸ë¡
 * @param  : windowNm - ì¶ë ¥í  ìëì°ëª  ëí´í¸ë "report"
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfPrintReport( reportNm, url, param, paperTy, windowNm, zoomSize ){

    var vPaperTy = "1";
    var width  = "700";
    var height = "1000";
    var vWindowNm = "report";
    var vZoomSize = "80";

    if ( !cfIsNull(paperTy) ) {
        vPaperTy = paperTy;
    }

    if ( paperTy == "2" ) {
        vPaperTy = "2";
        width   = "900";
        height  = "712";		//80%ë¹ì¨ìì ê°ì¥ ì´ìì ì
    } else {
        vPaperTy = "1";
        width   = "656";		//80%ë¹ì¨ìì ê°ì¥ ì´ìì ì
        height  = "760";
    }

    if ( !cfIsNull( windowNm ) ){
        vWindowNm = windowNm;
    }

    if ( !cfIsNull( zoomSize ) ){
        vZoomSize = zoomSize;
    }

    var vInFrame = '<iframe name="reportFrame" id="reportFrame" style="display:none; position:absolute; left:0; top:0; width:0; height:0" FrameBorder="0">' +
                   '</iframe>';

    var vAction = gvContextPath + '/common/comtask/RexViewer.jsp';

    var targetWindow = cfOpen( width, height, 5, vAction, vWindowNm );

    var vFormText = '<form name="reportForm"  id="reportForm" method="post" action="'+vAction+'" target="' + targetWindow.name + '">'
                  + '<input type="hidden" name="pRptNames">'
                  + '<input type="hidden" name="pRptParams">'
                  + '<input type="hidden" name="pUrl">'
                  + '<input type="hidden" name="pZoomSize">'
                  + '</form>';

    // pageì ë¦¬í¬í¸ì¶ë ¥ë¥¼ ìí iframe ì´ ì¡´ì¬íì§ ìì¼ë©´ ìë¡ ë§ë ë¤.
    if (document.getElementById('reportFrame') == null ) {

        if( document.all ){   //IE

	        for (var i = 0; i < document.all.length; i++) {
	            if (document.all[i].tagName == "BODY") {
	                document.all[i].insertAdjacentHTML("beforeEnd", vInFrame);
	                break;
	            }
	        }
	    } else {              //W3C
	        var parentObj = document.getElementsByTagName("BODY");

	        var objFrame = document.createElement("iframe");
	        objFrame.setAttribute("id","reportFrame");
	        objFrame.setAttribute("name","reportFrame");
	        objFrame.setAttribute("style", "display:none; position:absolute; left:0; top:0; width:0; height:0");
	        objFrame.setAttribute("FrameBorder", "0");
	        parentObj[0].appendChild(objFrame);

	    }
    }

    // pageì ë¦¬í¬í¸ì¶ë ¥ë¥¼ ìí form ì´ ì¡´ì¬ íì§ ìì¼ë©´ ìë¡ ë§ë ë¤.
    if (document.getElementById('reportForm') == null ) {
        if( document.all ){   //IE
	        for (var i = 0; i < document.all.length; i++) {
	            if (document.all[i].tagName == "BODY") {
	                document.all[i].insertAdjacentHTML("beforeEnd", vFormText);
	                break;
	            }
	        }
	    } else {               //W3C
	        var parentObj = document.getElementById("reportFrame");

	        var objForm = document.createElement("Form");
	        objForm.setAttribute("id", "reportForm");
	        objForm.setAttribute("name", "reportForm");
	        objForm.setAttribute("target", "reportFrame");
	        objForm.setAttribute("action", vAction);
	        objForm.setAttribute("method", "post");

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "pRptNames");
	        oElement.setAttribute("value", "1");
	        objForm.appendChild( oElement );

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "pRptParams");
	        oElement.setAttribute("value", "");
	        objForm.appendChild( oElement );

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "pUrl");
	        oElement.setAttribute("value", "");
	        objForm.appendChild( oElement );

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "pZoomSize");
	        oElement.setAttribute("value", "");
	        objForm.appendChild( oElement );

	        parentObj.appendChild(objForm);
	    }
    }

    document.reportForm.action = vAction;
    document.reportForm.pRptNames.value = reportNm;
    document.reportForm.pUrl.value = url;
    document.reportForm.pRptParams.value = param;
    document.reportForm.pZoomSize.value = vZoomSize;

    document.reportForm.submit();
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ì§ ì«ìë§ ìë ¥ê°ë¥íê² ë§ëë íì.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNumRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNumRT(e){

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if( !((48 <= lkeycode && lkeycode <=57) || lkeycode == 13 || lkeycode == 8 || lkeycode == 0) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
    }else{
	    if( !((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ì§ ì«ìì '-'ë§ ìë ¥ê°ë¥íê² ë§ëë íì.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNumMinusRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNumMinusRT(e){

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if( !((48 <= lkeycode && lkeycode <=57) || lkeycode == 45 || lkeycode == 13 || lkeycode == 8 || lkeycode == 0) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
    }else{
	    if( !((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 109 || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì«ì, -, <-, -> ë§ ìë ¥ê°ë¥íë¤.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNumDashRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNumDashRT(e) {

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if( !((48 <= lkeycode && lkeycode <=57) || lkeycode == 60 || lkeycode == 62 || lkeycode == 45 || lkeycode == 13 || lkeycode == 8 || lkeycode == 0) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
    }else{
	    if( !((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 109 || lkeycode == 16 || lkeycode == 45 || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ì§ ì«ìì dot(.)ë§ ìë ¥ê°ë¥íê² ë§ëë íì.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNumDotRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNumDotRT(e){

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if (!((48 <= lkeycode && lkeycode <=57) || lkeycode == 46 || lkeycode == 13 || lkeycode == 8  || lkeycode == 0 ) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
    }else{
	    if (!((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 190 || lkeycode == 13 || lkeycode == 8  || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ì§ ì«ìì dot(.), -ë§ ìë ¥ê°ë¥íê² ë§ëë íì.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNumDotMinusRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNumDotMinusRT(e){

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if (!((48 <= lkeycode && lkeycode <=57) || lkeycode == 46 || lkeycode == 45 || lkeycode == 13 || lkeycode == 8  || lkeycode == 0 ) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
    }else{
	    if (!((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 190 || lkeycode == 109 || lkeycode == 13 || lkeycode == 8  || lkeycode == 46 || lkeycode == 229 ) ){
			var eVal = e.srcElement.value;
			if(eVal.length > 0) e.srcElement.value = eVal.substring(0, eVal.length-1);
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ì§ ì«ìì  '~'ë§ ìë ¥ê°ë¥íê² ë§ëë íì.<br>(onkeypress ì´ë²¤í¸ì í¸ì¶íë¤)
 * @sig    : e
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeypress="cfInputNum4TelRT(event);"
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInputNum4TelRT(e){

	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

	if(e.type == "keypress"){
	    if (!((48 <= lkeycode && lkeycode <=57) || lkeycode == 126 || lkeycode == 13 || lkeycode == 8  || lkeycode == 0 ) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }
	}else{
	    if (!((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 192 || lkeycode == 13 || lkeycode == 8  || lkeycode == 46 || lkeycode == 229 ) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì¼ë¡ ì¬ì©ìê° ì«ìë¥¼ ìë ¥íëìê° ìíë í¬ë§·ì ì¤ê°ì ë°ë¡ ì¶ê°<br>
 *           "jumin":ì£¼ë¯¼(ë²ì¸)ë²í¸, "postno":ì°í¸ë²í¸, "resno":ì¬ììë²í¸, "cuno":ê¸°ìì²´ë²í¸, "date":ë ì§, "dateYM":ë ì§_ëì, "time":ìê°_ìë¶ì´ , "timeHM":ìê°_ìë¶
 * @sig    : obj, gubun, e
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : gubun - dash ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeyup="cfSetFormatRT(this,'date',event);"
 * </pre>
 * @return : ì§ì í í¬ë§·ì´ ë¤ì´ê° ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetFormatRT(obj, gubun, e){
	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

	if(e.type == "keypress"){
	    if( !((48 <= lkeycode && lkeycode <=57) || lkeycode == 13 || lkeycode == 8 || lkeycode == 0) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }else{
			var pos = cfGetCaretPosition(obj);
			var cntSep = cfGetSep(obj, pos);

			if(gubun == "date" || gubun == "dateYM"){
				//cfSetDot(obj, gubun);
				cfSetHyphen(obj, gubun);
			}else if(gubun == "time" || gubun == "timeHM"){
				cfSetColon(obj, gubun);
			}else{
				cfSetDash(obj, gubun);
			}
			if(pos != -1) cfSetCaretToPos(obj, pos + (cfGetSep(obj,pos) - cntSep));
	    }
    }else{
	    if( !((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != ""){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }else{
			var pos = cfGetCaretPosition(obj);
			var cntSep = cfGetSep(obj, pos);

			if(gubun == "date" || gubun == "dateYM"){
				//cfSetDot(obj, gubun);
				cfSetHyphen(obj, gubun);
			}else if(gubun == "time" || gubun == "timeHM"){
				cfSetColon(obj, gubun);
			}else{
				cfSetDash(obj, gubun);
			}
			if(pos != -1) cfSetCaretToPos(obj, pos + (cfGetSep(obj,pos) - cntSep));
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¬ì©ìê° ìíë í¬ë§·ì ì¤ê°ì ì¶ê°í ë¬¸ìì´ ë¦¬í´íë í¨ì<br>
 *           "jumin":ì£¼ë¯¼(ë²ì¸)ë²í¸, "postno":ì°í¸ë²í¸, "resno":ì¬ììë²í¸, "cuno":ê¸°ìì²´ë²í¸
 * @sig    : obj, gubun
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : gubun - dash ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetDash(this,'jumin');
 * </pre>
 * @return : dashê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetDash(obj, gubun) {
	obj.value = cfSetDashStr(obj.value, gubun);
}

/**
 * @type   : function
 * @access : public
 * @desc   :  RealTimeì´ ìëê²½ì°ì ëí´ dashë¥¼ ì¤ê°ì ì¶ê°í ë¬¸ìì´ì ë¦¬í´<br>
 *           "jumin":ì£¼ë¯¼(ë²ì¸)ë²í¸, "postno":ì°í¸ë²í¸, "resno":ì¬ììë²í¸, "cuno":ê¸°ìì²´ë²í¸
 * @sig    : str, gubun
 * @param  : str - í¬ë§·ì ë£ì ë¬¸ìì´
 * @param  : gubun - dash ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetDashStr('7711111234567','jumin');
 * </pre>
 * @return : dashê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetDashStr(str, gubun) {

	var data = str;
	var data_1 = cfGetNumberOnly(data);	// "-" ì ê±°
	var retStr = str;

	// ì£¼ë¯¼(ë²ì¸)ë²í¸ 6ì-7ì ííë¡ ì¤ê°ì dash ì½ì
	if (gubun == "jumin") {
		if (data.length > 14) {
			retStr = data_1.substring(0,6) + "-" + data_1.substring(6,13);
		} else if (data.length > 6) {
			if(data.substring(6,7) == "-") return str;
			else retStr = data_1.substring(0,6) + "-" + data_1.substring(6);
		}

	// ì°í¸ë²í¸ 3ì-3ì ííë¡ ì¤ê°ì dash ì½ì
	} else if (gubun == "postno") {
		if (data.length > 7) {
			retStr = data_1.substring(0,3) + "-" + data_1.substring(3,6);
		} else if (data.length > 3) {
			if(data.substring(3,4) == "-") return str;
			else retStr = data_1.substring(0,3) + "-" + data_1.substring(3);
		}

	// ì¬ììë²í¸ 3ì-2ì-5ì ííë¡ ì¤ê°ì dash ì½ì
	} else if (gubun == "resno") {
		if (data.length > 12) {
			retStr = data_1.substring(0,3) + "-" + data_1.substring(3,5) + "-" + data_1.substring(5,10);
		} else if (data.length > 6) {
			if(data.substring(3,4)=="-" && data.substring(6,7)=="-") return str;
			else retStr = data_1.substring(0,3) + "-" + data_1.substring(3,5) + "-" + data_1.substring(5,10);
		}else if (data.length > 3) {
			if(data.substring(3,4)=="-") return str;
			else retStr = data_1.substring(0,3) + "-" + data_1.substring(3);
		}

	// ê¸°ìì²´ë²í¸ 2ì-3ì-4ì ííë¡ ì¤ê°ì dash ì½ì (
	} else if (gubun == "cuno") {
		if (data_1.length >= 9) {
			retStr = data_1.substring(0,2) + "-" + data_1.substring(2,5) + "-" + data_1.substring(5,9);
		} else if (data_1.length == 8) {
			retStr = data_1.substring(0,1) + "-" + data_1.substring(1,4) + "-" + data_1.substring(4,8);
		} else if (data_1.length == 7) {
			retStr = data_1.substring(0,3) + "-" + data_1.substring(3);
		} else if (data_1.length == 6) {
			retStr = data_1.substring(0,2) + "-" + data_1.substring(2);
		} else if (data_1.length == 5) {
			retStr = data_1.substring(0,1) + "-" + data_1.substring(1);
		} else if (data_1.length <= 4) {
			retStr = data_1;
		}
	}
	return retStr;
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìëê²½ì°ì ëí´ dotë¥¼ ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "date":ë ì§, "dateYM":ë ì§_ëì
 * @sig    : obj, gubun
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : gubun - dot ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetDot(this,'date');
 * </pre>
 * @return : dotê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetDot(obj, gubun) {
	obj.value = cfSetDotStr(obj.value, gubun);
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìëê²½ì°ì ëí´ dotë¥¼ ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "date":ë ì§, "dateYM":ë ì§_ëì
 * @sig    : str, gubun
 * @param  : str - dotë¥¼ ì¶ê°í  ë¬¸ìì´
 * @param  : gubun - dot ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetDot('20061222','date');
 * </pre>
 * @return : dotê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetDotStr(str, gubun) {
	if(cfIsNull(str) ) return "";

	var retStr = str;	//ë¦¬í´í  ë¬¸ìì´
	var data = str;
	var data_1 = cfGetNumberOnly(data);	// "." ì ê±°

	// ë ì§ 4ì-2ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	if (gubun == "date") {
		if (data.length > 10) {
			retStr = data_1.substring(0,4) + "." + data_1.substring(4,6) + "." + data_1.substring(6,8);
		} else if (data.length > 7) {
			if(data.substring(4,5)=="." && data.substring(7,8)==".") return str;
			else retStr = data_1.substring(0,4) + "." + data_1.substring(4,6) + "." + data_1.substring(6,8);
		}else if (data.length > 4) {
			if(data.substring(4,5)==".") return str;
			else retStr = data_1.substring(0,4) + "." + data_1.substring(4);
		}

	// ë ì§ëì 4ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	} else if (gubun == "dateYM") {
		if (data.length > 7) {
			retStr = data_1.substring(0,4) + "." + data_1.substring(4,6);
		} else if (data.length > 4) {
			if(data.substring(4,5) == ".") return str;
			else retStr = data_1.substring(0,4) + "." + data_1.substring(4);
		}
	}
	return retStr;
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìëê²½ì°ì ëí´ ì½ë¡ ì ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "time":ìê°_ìë¶ì´, "timeHM":ìê°_ìë¶
 * @sig    : obj, gubun
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : gubun - colon ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetColon(this,'time');
 * </pre>
 * @return : ì½ë¡ ì´ ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetColon(obj, gubun) {
	obj.value = cfSetColonStr(obj.value, gubun);
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìëê²½ì°ì ëí´ ì½ë¡ ì ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "time":ìê°_ìë¶ì´, "timeHM":ìê°_ìë¶
 * @sig    : str, gubun
 * @param  : str - dotë¥¼ ì¶ê°í  ë¬¸ìì´
 * @param  : gubun - colon ì½ìí¨í´ êµ¬ë¶ì ë¬¸ìì´
 * <pre>
 *    cfSetColonStr('130101','time');
 * </pre>
 * @return : colonì´ ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetColonStr(str, gubun) {
	if(cfIsNull(str) ) return "";

	var retStr = str;	//ë¦¬í´í  ë¬¸ìì´
	var data = str;
	var data_1 = cfGetNumberOnly(data);	// "." ì ê±°

	// ìê° 2ì-2ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	if (gubun == "time") {
		if (data.length > 8) {
			retStr = data_1.substring(0,2) + ":" + data_1.substring(2,4) + ":" + data_1.substring(4,6);
		} else if (data.length > 5) {
			if(data.substring(2,3)==":" && data.substring(5,6)==":") return str;
			else retStr = data_1.substring(0,2) + ":" + data_1.substring(2,4) + ":" + data_1.substring(4,6);
		}else if (data.length > 2) {
			if(data.substring(2,3)==":") return str;
			else retStr = data_1.substring(0,2) + ":" + data_1.substring(2);
		}

	// ë ì§ëì 4ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	} else if (gubun == "timeHM") {
		if (data.length > 5) {
			retStr = data_1.substring(0,2) + ":" + data_1.substring(2,4);
		} else if (data.length > 2) {
			if(data.substring(2,3)==":") return str;
			else retStr = data_1.substring(0,2) + ":" + data_1.substring(2);
		}
	}
	return retStr;
}
/**
 * @type   : function
 * @access : public
 * @desc   : input íë ê°ì²´(obj)ì ê¸ì¡ ìë ¥ì, ì¤ìê°ì¼ë¡ 3ìë¦¬ ë§ë¤ ,ë¥¼ ì½ì<br>
 *           onkeyupì ì´ë²¤í¸ ë°ìì íìì í¸ì¶íë¤
 * @sig    : obj,e
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    cfSetCommaRT(this, event);
 * </pre>
 * @return : ì½¤ë§ê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetCommaRT(obj,e){

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.which;
    }

	var str = obj.value;
	var rtVal;

	if(e.type == "keyup"){
		if( lkeycode == 37 || lkeycode == 39 ) return;
	}

	rtVal = cfSetMoneyComma(str);

	if(rtVal != str)
		obj.value = rtVal;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê¸ì¡ ë¬¸ìì´(str)ì 3ìë¦¬ë§ë¤ ì½¤ë§ì¶ê°í ë¬¸ìì´ì ë¦¬í´
 * @sig    : str
 * @param  : str - ì½¤ë§ ì¶ê°í  ë¬¸ìì´
 * <pre>
 *    cfSetMoneyComma('2006122');
 * </pre>
 * @return : ì½¤ë§ê° ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetMoneyComma(str){

	//ê°ì´ null ì´ë 0 ì´ë©´ blank
	if(cfIsNull(str) ) return "";

	var rtStr;	// ë¦¬í´í  ë¬¸ìì´

	//ì²«ìê° -ì¼ë -ë¥¼ ëºê¸ì¡ì¼ë¡ ì²ë¦¬íê³  ëì¤ì -ë¶ì
	var minus = "";
	if(str.substring(0,1) == "-"){
		rtStr = str.substring(1);		// '-' ëº ë¬¸ì ì ì¥
		minus = "-";
	}else										// ê·¸ì¸ì ëª¨ë  ê²½ì°
		rtStr = str;

	//ììì  ììë ìë¶ë¶ë§ rtStrì ë£ì´ì²ë¦¬íê³  ë·ë¶ë¶ì ë°ë¡ ë¼ ëìë¤ê° ëì¤ì ë¶ì.
	var belowzero = "";
	if (cfChkDot(rtStr)==true){
		arr = rtStr.split(".");
		rtStr = arr[0];		     	 //ììì  ìë¶ë¶
		belowzero = "." + arr[1];    //ììì ê³¼ ê·¸ ë·ë¶ë¶
	}

	// ê¸°ì¡´ì½¤ë§ì ê±°
	rtStr = cfGetNumberOnly(rtStr);

	var len = rtStr.length ;
	var result ="";

	if (len > 1 && str.substring(0,1)=="0") rtStr = rtStr.substring(1); // ì²«ë²ì§¸ 0ì´ ìì¼ë©´ ì ê±°

	for (var i=0; i < len;i++){  // ì´ì  ì¤ì ë¡ ì½¤ë§ íìí¨
		comma="";
		var schar = rtStr.charAt(i);
		where = len - 1 - i;
		if ((where % 3) == 0 && len > 3 && where != 0) comma = ",";
		result = result +   schar + comma ;
	}
    rtStr = minus + result + belowzero;	// - ì ììì  ì´íë¥¼ ë¶ì

	return rtStr;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê¸ì¡ì ììì  ìëì§ ì²´í¬. ì¡´ì¬íë¤ë©´ true, ìë¤ë©´ false
 * @sig    : str
 * @param  : str - ì²´í¬í  ë¬¸ìì´
 * <pre>
 *    cfChkDot('20061222.122');
 * </pre>
 * @return : boolean
 * @author : ííì£¼
 */
function cfChkDot(str){
	for (var i=0; i< str.length; i++) {
		if(str.charAt(i) == "." )	return true;
	}
	return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥íì¤í¸ ë°ì¤ì ìë¬¸ë§ ìë ¥.
 * <pre>
 *     onkeypress="cfAlpaOnly(event);"
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° ìë¬¸ê³¼ ì«ìë§ ìë ¥.
 * @sig    : e
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ííì£¼
 */
function cfAlpaOnly(e) {

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.which;
    }

    var bAlpaNumber = true;

    if(e.type == "keypress"){
	    if (!((65 <= lkeycode && lkeycode <= 90) || (97 <= lkeycode && lkeycode <= 122) || lkeycode == 13 || lkeycode == 8 || lkeycode == 0 )){
	        bAlpaNumber = false;
	    }
    }else{
	    if (!((65 <= lkeycode && lkeycode <= 90) || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229 )){
	        bAlpaNumber = false;
	    }
    }

    if( !bAlpaNumber ){
        if( window.event ){
            e.keyCode = 0;
        }else{
            e.preventDefault();
        }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ê°ì´ ìë¬¸&ì«ìì¸ì§ ì²´í¬
 * <pre>
 *     cfChkAlpa_Number("123abc");
 * </pre>
 * ììê°ì´ ì¬ì©íì ê²½ì° ìë¬¸ê³¼ ì«ìì¸ì§ ì²´í¬
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : true(ìë¬¸&ì«ìë¡ ì´ë£¨ì´ì ¸ìì)/false
 * @author : ííì£¼
 */
function cfChkAlpa_Number(sOrg) {
    var Alpha, Digit;
    var IDLength1, IDLength2;
    var EngStr, NumStr;
    var NumberChar, CompChar;
    var ChkNumFlag ,ChkAlpaFlag;
    var result = false;

    Alpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    Digit= "0123456789";

    EngStr = cfGetAlphaOnly(sOrg) ;
    NumStr = cfGetNumberOnly(sOrg) ;

    IDLength1 = EngStr.length;
    IDLength2 = NumStr.length;

    for (i = 0; i < IDLength1; i++) {

        NumberChar = EngStr.charAt(i);
        ChkAlpaFlag = false;

        for (j = 0; j < Alpha.length ; j++) {
            CompChar = Alpha.charAt(j);
            if (NumberChar.toLowerCase() == CompChar.toLowerCase()){
                ChkAlpaFlag = true;
            }
        }
    }

    for (i = 0; i < IDLength2; i++) {

        NumberChar = NumStr.charAt(i);
        ChkNumFlag = false;

        for (j = 0; j < Digit.length ; j++) {
            CompChar = Digit.charAt(j);
            if (NumberChar.toLowerCase() == CompChar.toLowerCase()){
                ChkNumFlag = true;
            }
        }
    }

    if((ChkAlpaFlag == true) && (ChkNumFlag == true))
		result = true;

    return result;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ê°ìì ìë¬¸ìë§ ì¶ì¶íì¬ë¦¬í´
 * <pre>
 *     cfGetAlphaOnly("123abc");
 * </pre>
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : ìë¬¸ìë¡ ì´ë£¨ì´ì§ ë¬¸ìì´
 * @author : ííì£¼
 */
function cfGetAlphaOnly(sOrg) {
	return sOrg.replace(/[^a-zA-Z]/g, "");
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì²ë¦¬ì¤ íë ìì ë³´ì¬ì¤ë¤. <br>flag íë¼ë¯¸í°ìë true , false ê°ì ì£¼ì´ì¼ íë¤.
 * <pre>
 *     cfOpenRunning(true);
 * </pre>
 * @sig    : flag
 * @param  : flag - ì²ë¦¬ì¤ ì¬ë¶
 * @return : void
 * @author : ííì£¼
 */
var _WaitLayer = null;
function cfOpenRunning(flag) {

	// FrameWait ê° ì¡´ì¬íëì§ íì¸í´ì ìì¼ë©´ ìì±
	if (document.getElementById('waitLayer')==null && flag) {
	  	if (!flag) return;

		var currentH = document.body.clientHeight;	// íì¬ íë ìì ëì´(ì¤í¬ë¡¤ ìì­ ì ì¸)

		var layerW = 780;
		if(!cfIsNull(gvContextPath) && gvContextPath == "/pt")
			layerW = 1000;

		var wait = "<table width='100%' height='"+currentH+"' border='0' cellpadding='0' cellspacing='0'>"
				 + "<tr><td valign='middle' align='center'><table border='0' cellspacing='0' cellpadding='0'>"
				 + "<tr><td bgcolor='#FFFFFF'><img src='/images/common/etc/loading.gif' style='border:double 4px #ccc;'></td></tr>"
				 + "</table></td>"
				 + "</tr></table>";

		if( document.all ){   //IE
	        _WaitLayer = document.createElement("<div id='waitLayer' style='left:0; top:0; width:"+layerW+"px; height:"+currentH+"px; position:absolute; z-index:1; visibility:visible;'></div>");
			document.body.insertBefore(_WaitLayer);
			_WaitLayer.innerHTML = wait;
		}else{				  //W3C
	        var parentObj = document.getElementsByTagName("BODY");
	        _WaitLayer = document.createElement("div");
	        _WaitLayer.setAttribute("id", "waitLayer");
	        _WaitLayer.setAttribute("style", "left:0; top:0; width:"+layerW+"px; height:"+currentH+"; position:absolute; z-index:1; visibility:visible;");

	        parentObj[0].insertBefore(_WaitLayer, null);
			_WaitLayer.innerHTML = wait;
		}
	} else {
		  if (flag) return;
	}
	if (flag) {
		window.defaultStatus = "ì²ë¦¬ì¤ ìëë¤......";
		window.status = "ì²ë¦¬ì¤ ìëë¤......";
		window.document.body.style.cursor		= "wait";
	} else {
		window.defaultStatus = "ìë£";
		window.status = "ìë£";
		window.document.body.style.cursor		= "default";

		if(document.getElementById('waitLayer') != null){
			if( document.all ) {
				document.all.waitLayer.removeNode(true);
			}else{
				window.document.body.removeChild(document.getElementById('waitLayer'));
			}
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìì´íë ìì ìí ì²ë¦¬ì¤ íë ìì ë³´ì¬ì¤ë¤. <br>flag íë¼ë¯¸í°ìë true , false ê°ì ì£¼ì´ì¼ íë¤.
 * <pre>
 *     cfOpenRunning2(true);
 * </pre>
 * @sig    : flag
 * @param  : flag - ì²ë¦¬ì¤ ì¬ë¶
 * @return : void
 * @author : ííì£¼
 */
var _FrameWait = null;
function cfOpenRunning2(flag) {

	// FrameWait ê° ì¡´ì¬íëì§ íì¸í´ì ìì¼ë©´ ìì±
	if (document.getElementById('__FrameWaitIframe__')==null && flag) {
	  	if (!flag) return;
		var currentW = 780;	// íì¬ íë ìì ëë¹(ì¤í¬ë¡¤ ìì­ ì ì¸)
		var currentH = document.body.clientHeight;	// íì¬ íë ìì ëì´(ì¤í¬ë¡¤ ìì­ ì ì¸)
		var msgW = 312;		// ì²ë¦¬ì¤ ë©ìì§ì°½ ëë¹
		var msgH = 158; 	// ì²ë¦¬ì¤ ë©ìì§ì°½ ëì´

		if ( currentW < msgW ) var leftPos = 0;
		else var leftPos = currentW/2 - msgW/2;

		if ( currentH < msgH ) var topPos = 0;
		else var topPos  = currentH/2 - msgH/2;

		var layerW = 780;
		if(!cfIsNull(gvContextPath) && gvContextPath == "/pt")
			layerW = 1000;

		var wait = "<table width='100%' height='100%' border='0'> "
				 + "<tr align='center' valign='middle'></tr><td>"
				 + "<IFRAME name='__FrameWaitIframe__' frameborder=0 style='position:absolute; left:"+leftPos+"px; top:"+topPos+"px; width:"+msgW+"px; height:"+msgH+"px; visibility:hidden;' src='"+gvContextPath + "/common/comtask/loading.htm' /> "
				 + "</td></tr></table> ";

		if( document.all ){   //IE
	        _FrameWait = document.createElement("<div id='FrameWait' style='position:absolute; left:0px; top:0px; width:"+layerW+"px; height:"+currentH+"px; z-index:1; visibility:hidden ;'></div>");
			document.body.insertBefore(_FrameWait);
			_FrameWait.innerHTML = wait;
		}else{				  //W3C
	        var parentObj = document.getElementsByTagName("BODY");
	        _FrameWait = document.createElement("div");
	        _FrameWait.setAttribute("id", "FrameWait");
	        _FrameWait.setAttribute("style", "position:absolute; left:0px; top:0px; width:"+layerW+"px; height:"+currentH+"px; z-index:1; visibility:hidden;");

	        parentObj[0].insertBefore(_FrameWait, null);
			_FrameWait.innerHTML = wait;
		}
	}

	if ( flag ) {
		window.defaultStatus = "ì²ë¦¬ì¤ ìëë¤......";
		window.status = "ì²ë¦¬ì¤ ìëë¤......";
		window.document.body.style.cursor		= "wait";
		document.all.FrameWait.style.visibility	= "visible";
		document.all.__FrameWaitIframe__.style.visibility	= "visible";
	} else {
		window.defaultStatus = "ìë£";
		window.status = "ìë£";
		parent.document.body.style.cursor		= "default";

		if(parent.document.getElementById('FrameWait') != null){
			if( document.all ) {
				parent.document.all.FrameWait.removeNode(true);
			}else{
				parent.document.body.removeChild(parent.document.getElementById('FrameWait'));
			}
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¶ë¶ì¸ìë¥¼ íë¤.
 * <pre>
 *     cfPrintDiv('image1');
 * </pre>
 * @sig    : id
 * @param  : id - ë¶ë¶ì¸ìí  div ìì­ì ì´ë¦
 * @return : void
 * @author : ííì£¼
 */
var div2print;
function cfPrintDiv (id) {

	if (document.all && window.print) {		//IE
    	div2print = document.all[id];
    	window.onbeforeprint = cfHideDivs;
    	window.onafterprint = cfShowDivs;
    	window.print();
  	}else if (document.layers) {			//NN
    	div2print = document[id];
    	cfHideDivs();
    	window.print();
  	} else{									//W3C
  		div2print = document.getElementById(id);
  		cfHideDivs();
    	window.print();
    	window.setTimeout(cfShowDivs, 1000, true);		//ìê°ì°¨ë¥¼ ëê¸° ìí´ Timeoutì¬ì©
 //   	alert('ì¸ìê° ìë£ëììµëë¤.\nPrinting is finished.');
 //   	cfShowDivs();
  	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¶ë¶ì¸ìë¥¼ ìí´ ë¶ë¶ì¸ìê° ìë ìì­ì ê°ì¶ë¤.
 * <pre>
 *     cfHideDivs();
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfHideDivs () {
  	/*if (document.all) {
    	var divs = document.all.tags('DIV');
    	for (var d = 0; d < divs.length; d++)
      		if (divs[d] != div2print)
        		divs[d].style.display = 'none';
  	}else if (document.layers) {
    	for (var l = 0; l < document.layers.length; l++)
      		if (document.layers[l] != div2print)
        		document.layers[l].visibility = 'hide';
  	}else{
    	var divs = document.getElementsByTagName('DIV');
    	for (var d = 0; d < divs.length; d++)
      		if (divs[d] != div2print)
        	divs[d].style.display = 'none';
  	}*/
	document.getElementById("popupTitle").style.display = 'none';
	document.getElementById("button_default").style.display = 'none';
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¶ë¶ì¸ìê° ëë í ëª¨ë  ìì­ì ë³´ì¬ì¤ë¤.
 * <pre>
 *     cfShowDivs();
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfShowDivs () {
	/*if (document.all) {
  		var divs = document.all.tags('DIV');
  		for (var d = 0; d < divs.length; d++)
    		divs[d].style.display = 'block';
    }else if (document.layers) {
    	for (var l = 0; l < document.layers.length; l++)
      		if (document.layers[l] != div2print)
        		document.layers[l].visibility = 'block';
    }else{
    	var divs = document.getElementsByTagName('DIV');
    	for (var d = 0; d < divs.length; d++)
      		if (divs[d] != div2print)
        		divs[d].style.display = 'block';
    }*/
	document.getElementById("popupTitle").style.display = 'block';
	document.getElementById("button_default").style.display = 'block';
}

/**
 * @type   : function
 * @access : public
 * @desc   : í¼ê°ì²´ ìì input type='text' ìë¦¬ë¨¼í¸ì ìë ì½¤ë§ë¤ì ì ê±°íê³  ì«ìë§ ë°ííë¤.
 * <pre>
 *     cfDelMoneyComma(frmObj)
 * </pre>
 * @sig    : frmObj
 * @param  : frmObj - ì½¤ë§ ì ê±°í  ìë¦¬ë¨¼í¸ë¤ì í¼ ê°ì²´
 * @return : void
 * @author : ííì£¼
 */
function cfDelMoneyComma(frmObj){
	var len = frmObj.elements.length;

	for ( var i = 0; i < len; i++ ) {

		if ( frmObj.elements[i].type == 'text' ) {
			frmObj.elements[i].value = cfGetNumberOnly( frmObj.elements[i].value );
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë¬¸ìë¥¼ ì ì¸í ë¤ë¥¸ë¬¸ìë¤ì ì ê±°íê³  ëë¬¸ìì ìë¬¸ìë§ ë°í
 * <pre>
 *     cfGetUpperCase(obj)
 * </pre>
 * @sig    : obj
 * @param  : obj - í´ë¹ê°ì²´
 * @return : void
 * @author : ííì£¼
 */
function cfGetUpperCase(obj) {

	var sOrg = obj.value;
    var AlphaDigit;
    var IDLength;
    var NumberChar, CompChar;
    var returnChar = "";

    AlphaDigit= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    IDLength = sOrg.length;

    for (i = 0; i < IDLength; i++) {
        NumberChar = sOrg.charAt(i);

        for (j = 0; j < AlphaDigit.length ; j++) {
            CompChar = AlphaDigit.charAt(j);
            if (NumberChar.toUpperCase() == CompChar.toUpperCase()){
                returnChar += NumberChar.toUpperCase();
            }
        }
    }
	obj.value = returnChar;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ìê°ì¼ë¡ ìë ¥ëë ê¸ììë¥¼ ì ííë¤.
 * <pre>
 *     obkeydown="cfByteLengthRT_Obj( event, obj, limitLen )";
 * </pre>
 * @sig    : event, obj, limitLen
 * @param  : event - ì´ë²¤í¸
 * @param  : obj - í´ë¹ê°ì²´
 * @param  : limitLen - ì íê¸¸ì´
 * @return : void
 * @author : ííì£¼
 */
function cfByteLengthRT_Obj( event, obj, limitLen ){
	val = cfByteLengthRT(event, obj.value, limitLen);
	if( val.length != obj.value.length ) obj.value = val;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ìê°ì¼ë¡ ìë ¥ëë ê¸ììë¥¼ ê³ì°íì¬ ê¸ìì ì´ê³¼ì alertì°½ ë³´ì
 * <pre>
 *     obkeydown="cfByteLengthRT(event, str, limitLen)";
 * </pre>
 * @sig    : event, obj, limitLen
 * @param  : event - ì´ë²¤í¸
 * @param  : str - ì²´í¬í  ë¬¸ìì´
 * @param  : limitLen - ì íê¸¸ì´
 * @return : void
 * @author : ííì£¼
 */
function cfByteLengthRT(event, str, limitLen) {
	var hangulByte = cfGetHangulByte();
	var nLen = 0;
	var hFlag = 0;
	var iLen = str.length;
	var i = 0;
	var val = ""
	for (i = 0; i < iLen; i++) {
  		tmp_chr = str.charAt(i);
  		if (tmp_chr > "~") {
  	 		if(hFlag == 0) {
  	 			nLen = nLen + 1;
  	 		}
//     		nLen = nLen + 2;
			nLen = nLen + hangulByte;
     		hFlag = 1;
     		if (i == iLen) {
     			nLen = nLen + 1;
     		}
  		} else {
  			if (hFlag == 1) nLen = nLen + 1;
			hFlag = 0;
   			nLen = nLen + 1;
		}
  		if( nLen < limitLen ) val += tmp_chr;
	}
	if (hFlag == 1) nLen = nLen + 1;


    if(window.event){    //IE
        event = window.event
    }

	if( event.keyCode ==  8 || event.keyCode == 46 || event.keyCode == 45 || event.keyCode == 91 ||
		event.keyCode ==  9 || event.keyCode == 13 || event.keyCode == 16 || event.keyCode == 17 ||
		event.keyCode == 18 || event.keyCode == 92 || event.keyCode == 93 || event.keyCode == 116||
		(112 <= event.keyCode && event.keyCode <= 123 ) ||(33 <= event.keyCode && event.keyCode <= 40 ) ||
		event.keyCode == 27
	){
		return str;
	}

	if (nLen == limitLen) {
		alert("ë ì´ì ìë ¥íì¤ ì ììµëë¤.\nìë ¥íì¤ ì ìë ìµë ë¬¸ìì´ ê¸¸ì´ê° ì´ë¯¸ ìë ¥ ëì¨ìµëë¤.");
	}
	else if (nLen > limitLen) {
		alert("ìë ¥íì¤ ì ìë ìµë ë¬¸ìì´ ê¸¸ì´ë¥¼ ì´ê³¼íì¨ìµëë¤.\n ìµë ìë ¥ê°ë¥ ë¬¸ìì´ ê¸¸ì´ => " + limitLen + "\n ìë ¥íì  ë¬¸ìì´ ê¸¸ì´ => " + nLen);
	}
	return val;
}

/**
 * @type   : function
 * @access : public
 * @desc   : window.openì¼ë¡ ìë¸ì°½ì ëì¸ ë ìë¸ì°½ì ìì¹ë¥¼ ê°ë¨íê² ì§ì í  ì ìë¤.
 * @sig    : width, height, left, top, [sURL] [, sName] [, sFeatures] [, bReplace]
 * @param  : width     - ìë¸ì°½ì ëì´
 * @param  : height    - ìë¸ì°½ì ëì´
 * @param  : left      - ìë¸ì°½ì ì¼ìª½ì¢í
 * @param  : top       - ìë¸ì°½ì ììª½ì¢í
 * @param  : sURL      - required window.openì sURL íë¼ë¯¸í°ì ëì¼
 * @param  : sName     - required window.openì sName íë¼ë¯¸í°ì ëì¼
 * @param  : sFeatures - required window.openì sFeatures íë¼ë¯¸í°ì ëì¼
 * @param  : bReplace  - required window.openì bReplace íë¼ë¯¸í°ì ëì¼
 * @author : ìì¬í
 */
function cfOpen2(sWidth, sHeight, sLeft, sTop, sURL, sName, sFeatures, bReplace) {

	var left = sLeft;
	var top = sTop;

    var featureNames  = ["status", "menubar", "toolbar"];
    var featureValues = ["no", "no", "no"];
    var featureTypes  = ["boolean", "boolean", "boolean"];

    if (sFeatures != null) {
        cfParseOpenFeature(sFeatures, featureNames, featureValues, featureTypes);
    }

    var status = featureValues[0];
    var menubar = featureValues[1];
    var toolbar = featureValues[2];

    if (sWidth != null && sHeight != null) {
        width = sWidth*1 + 10; // windowì ì¢ì° border 5pxì© ê°ì.
        height = sHeight*1 + 29; // titlebarë ê¸°ë³¸ì¼ë¡ ê°ì.

        if (menubar) {
            height = height + 48;
            //IEì¸ ê²½ì° menubarê° yesì´ë©´ heightê° 20px ëì´ëë¤.
            if( document.all ) {
                height = height - 20;
                sHeight = sHeight - 20;
            }
        }

        if (toolbar) {
            height = height + 27;
        }

        if (status) {
            height = height + 20;
        }

        //IEì height ë³´ì 
        if( document.all ){
            sHeight = sHeight - 3.5;
        }

        if (cfIsNull(sFeatures)) {
            sFeatures = "width=" +sWidth+ ",height=" +sHeight + ",left=" + left + ",top=" + top;
        } else {
            sFeatures = sFeatures +",width=" +sWidth+ ",height=" +sHeight + ",left=" + left + ",top=" + top;
        }
    }

    return window.open(sURL, sName, sFeatures, bReplace);
}

/**
 * @type   : function
 * @access : public
 * @desc   : INPUT TEXTì ìë¬¸ ìë ¥ì ëë¬¸ìë¡ ë³í(íê¸,ì«ì,ìë¬¸ ëª¨ë ìë ¥ ê°ë¥)
 * <pre>
 *    onkeypress=cfUpperCase2(this, event)
 * </pre>
 * @sig    : obj, e
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : e - required ì´ë²¤í¸
 * @return : void
 * @author : ííì£¼
 */
function cfUpperCase2(obj, e){

    if(window.event){  //IE
        e = window.event
        var lkeycode = e.keyCode;
    } else{              //W3C
        var lkeycode = e.which;
    }

	if(lkeycode >= 97 && lkeycode <= 122){	//ìë¬¸ìì¼ë

		if(window.event){  //IE
			e.keyCode = lkeycode - 32; 		//ëë¬¸ì;
		} else{              //W3C
			e.preventDefault();
			obj.value = obj.value + String.fromCharCode(lkeycode).toUpperCase();
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ë¥¼ ì´ê¸°ííë¤.<br>
 			 ëì ì¼ë¡ ì½¤ë³´ë°ì¤ ë³ê²½ì ì¬ì©íë¤.
 * @sig    : comboNm, initKey, initText
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfInitCombo(comboNm, initKey, initText)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfInitCombo(comboNm, initKey, initText){
	// ì´ê¸°íë  ì½¤ë³´
	var selectObj = document.getElementById(comboNm);

	// ì½¤ë³´ Data ì­ì 
	var selectCnt = selectObj.length;
	for(var i=0; i < selectCnt; i++) selectObj.remove(0);

	if(initKey != null && initKey != ""){
		// ì ê· Data Add
		var option = document.createElement("OPTION");

		if( document.all ){   //IE
			option.value = initKey;
			option.text  = initText;
			selectObj.add(option);
		} else {              //W3C
		    option.setAttribute("value", initKey);
			option.text = initText;
		    selectObj.appendChild(option);
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>(í¬í, í¬íê´ë¦¬)
 * @sig    : comboNm
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : cdGrpSeq - ê°ì ¸ì¬ ì½¤ë³´ë°ì¤ì ì½ëí¤ê°
 * @param  : cd - ê°ì ¸ì¬ ì½¤ë³´ë°ì¤ì ì½ëê°
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´ëª
 * <pre>
 *    cfCodeComboChg4Bbs(comboNm, cdGrpSeq, cd, selectedCode, initKey, initText, lang)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfCodeComboChg4Bbs(comboNm, cdGrpSeq, cd, selectedCode, initKey, initText, lang) {

	var frameName = "codeFrame" + new Date().valueOf();
	var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";
	var url = "";
	if(location.protocol == "https:")	url = "https://"+location.host;
	url += gvContextPath + "/common/comtask/comboChgHidden4Bbs.jsp?"
		+ "comboNm=" + comboNm
		+ "&cdGrpSeq=" + cdGrpSeq
		+ "&cd=" + cd
		+ "&selectedCode=" + selectedCode
		+ "&initKey=" + initKey
		+ "&initText=" + initText
		+ "&lang=" + lang;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
		document.body.insertBefore(codeFrame);
		codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

		var iframe = document.getElementById(frameName);
    	iframe.src = url;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¶ë¶ì¸ìë¥¼ ìí´ íìì°½ì ëì´ë¤.
 * <pre>
 *    cfPartPrint(divId, lang)
 * </pre>
 * @sig    : divId, lang
 * @param  : divId - required ë¶ë¶ì¸ìë¥¼ í  ë¶ë¶ì div id ê°
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´(KR:íê¸, EN:ìì´)
 * @return : void
 * @author : ííì£¼
 */
function cfPartPrint(divId, lang){
	var obj = document.getElementById(divId);
	var langCd = "KR";
	if(!cfIsNull(lang))		langCd = lang;

    var vAction = gvContextPath + "/common/comtask/InfoPrint.jsp";
	var targetWindow = cfOpen("700", "650", "5", vAction, "print", "status=0,menubar=0,toolbar=0,scrollbars=0");
    var vFormText = '<form name="printForm" id="printForm" method="post" action="'+vAction+'" target="' + targetWindow.name + '">'
                  + '<input type="hidden" name="content">'
                  + '<input type="hidden" name="lang">'
                  + '</form>';
	if (document.getElementById('printForm') == null ) {
		if( document.all ){   //IE
	        for (var i = 0; i < document.all.length; i++) {
	            if (document.all[i].tagName == "BODY") {
	                document.all[i].insertAdjacentHTML("beforeEnd", vFormText);
	                break;
	            }
	        }
	    } else {               //W3C
	        var objForm = document.createElement("Form");
	        objForm.setAttribute("id", "printForm");
	        objForm.setAttribute("name", "printForm");
	        objForm.setAttribute("target", targetWindow.name);
	        objForm.setAttribute("action", vAction);
	        objForm.setAttribute("method", "post");

	        var oElement = document.createElement("input");
	        oElement.setAttribute("type", "hidden");
	        oElement.setAttribute("name", "content");
	        objForm.appendChild( oElement );

	        var oElement2 = document.createElement("input");
	        oElement2.setAttribute("type", "hidden");
	        oElement2.setAttribute("name", "lang");
	        objForm.appendChild( oElement2 );

	        document.body.appendChild(objForm);
	    }
	}
    document.printForm.content.value = obj.innerHTML;
    document.printForm.lang.value = langCd;
    document.printForm.submit();
}

/**
 * @type   : function
 * @access : public
 * @desc   : input íë ê°ì²´(obj)ì ê°ì´ ììí ìë¬¸ì("A"-"Z", or "a"-"z") ì¸ì§ ì²´í¬
 * <pre>
 * cfIsAlphaOnly("alsdkfjalsdkj");
 * </pre>
 * @sig    : value
 * @param  : value - ì²´í¬í  ë¬¸ìì´
 * @return : boolean (true or false)
 * @author : ííì£¼
 */
function cfIsAlphaOnly(value) {

	if(value == null || value == "") return false;

	var isValid = true;
  	for (var i = 0; i < value.length; i++) {
		if (!(  ((value.charAt(i) >= 'a') && (value.charAt(i) <= 'z')) ||	((value.charAt(i) >= 'A') && (value.charAt(i) <= 'Z')) ||  (value.charAt(i) == ' ')) ){
         	isValid = false;
			break;
     	}
   }
	return isValid;
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>(í¬íê´ë¦¬)
 * @sig    : lang, pGvrnCd, isAll, comboNm, selectedCode, initKey, initText
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´(EN, KR)
 * @param  : pGvrnCd - ììê¸°ê´ ì½ë
 * @param  : isAll - ììê¸°ê´ì í´ë¹íë íìê¸°ê´ì ëª¨ë ê°ì ¸ì¬ì§ ì¬ë¶ (Y,N)
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfCodeComboChg4Gvrn(lang, pGvrnCd, isAll, comboNm, selectedCode, initKey, initText)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfCodeComboChg4Gvrn(lang, pGvrnCd, isAll, comboNm, selectedCode, initKey, initText) {

	var frameName = "codeFrame" + new Date().valueOf();
	var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";
	var url = "";
	if(location.protocol == "https:")	url = "https://"+location.host;
	url += gvContextPath + "/common/comtask/comboChgHidden4Gvrn.jsp?"
		+ "lang=" + lang
        + "&pGvrnCd=" + pGvrnCd
        + "&isAll=" + isAll
	    + "&comboNm=" + comboNm
        + "&selectedCode=" + selectedCode
        + "&initKey=" + initKey
        + "&initText=" + initText;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
		document.body.insertBefore(codeFrame);
		codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

		var iframe = document.getElementById(frameName);
    	iframe.src = url;
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>(í¬íê´ë¦¬)
 * @sig    : lang, pPartyCd,  comboNm, selectedCode, initKey, initText
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´(EN, KR)
 * @param  : pPartyCd - ììê³ì´ ì½ë
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfCodeComboChg4Party(lang, pPartyCd, comboNm, selectedCode, initKey, initText)
 * </pre>
 * @return : void
 * @author : ë¸íì
 */
function cfCodeComboChg4Party(lang, pPartyCd, comboNm, selectedCode, initKey, initText) {

	var frameName = "codeFrame" + new Date().valueOf();
	var style = "display:none; position:absolute; left:0; top:0; width:100; height:100";
	var url = "";
	if(location.protocol == "https:")	url = "https://"+location.host;
	url += contextPath + "/common/comtask/comboChgHidden4Party.jsp?"
		+ "lang=" + lang
        + "&pPartyCd=" + pPartyCd
	    + "&comboNm=" + comboNm
        + "&selectedCode=" + selectedCode
        + "&initKey=" + initKey
        + "&initText=" + initText;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
		document.body.insertBefore(codeFrame);
		codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

		var iframe = document.getElementById(frameName);
    	iframe.src = url;
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ê°ìì ìë¬¸ê³¼ ì«ìë§ ì¶ì¶íì¬ë¦¬í´
 * <pre>
 *     cfGetAlphaNumberOnly("ãã¹123abc");
 * </pre>
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : ìë¬¸ê³¼ ì«ìë¡ ì´ë£¨ì´ì§ ë¬¸ìì´
 * @author : ííì£¼
 */
function cfGetAlphaNumberOnly(sOrg) {
	return sOrg.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê¸°ê´ ì¡°íì ìí íì(í¬íê´ë¦¬)<br>
 * @sig    : inputName1, inputName2
 * @param  : inputName1 - ê¸°ê´ì½ëë¥¼ ë°ì ì¤ë¸ì í¸ëª
 * @param  : inputName2 - ê¸°ê´ëªì ë°ì ì¤ë¸ì í¸ëª
 * <pre>
 *    cfOpenGvrnCdList(inputName1, inputName2)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */
function cfOpenGvrnCdList(inputName1, inputName2, inputedCode){

	var sWidth  = 370;
	var sHeight = 400;
	var sURL = gvContextPath + "/common/comtask/GvrnCdListPopupR.jsp?inputName1="+inputName1+"&inputName2="+inputName2+"&inputedCode="+inputedCode;
	var sName = "GvrnList";
	cfOpen(sWidth, sHeight, '5', sURL, sName);
}

/**
 * @type   : function
 * @access : public
 * @desc   : íì¼ ì¬ì´ì¦ ì²´í¬(IEìì ì ìëì, FireFoxììë config ìì í´ì¼ ì ìëì)<br>
 * @sig    : filePath
 * @param  : filePath - íì¼ê²½ë¡
 * <pre>
 *    getFileSize(filePath)
 * </pre>
 * @return : íì¼ì¬ì´ì¦
 * @author : ííì£¼
 */
function getFileSize(filePath) {
	var len = 0;

	if ( navigator.appName.indexOf("Netscape") != -1) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		} catch(e) {
			alert("signed.applets.codebase_principal_supportë¥¼ ì¤ì í´ì£¼ì­ìì¤.\n"+e);
			return -1;
		}
		try {
			var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			file.initWithPath ( filePath );
			len = file.fileSize;
		} catch(e) {
			alert("ìë¬ ë°ì:"+e);
		}
	} else if (navigator.appName.indexOf('Microsoft') != -1) {
        if(navigator.userAgent.indexOf('MSIE') > 0 && navigator.appVersion.indexOf('MSIE 7.') > 0){
            //IE 7.0ììë dynsrc ìì±ì ì§ìíì§ ìëë¤.
        }else{
    		var img = new Image();
    		img.dynsrc = filePath;
    		len = img.fileSize;
        }
	}
	return len;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìíë ììì  ìë¦¬ê¹ì§ ë°ì¬ë¦¼<br>
 * @sig    : str, len
 * @param  : str - ë°ì¬ë¦¼í  ì«ì
 * @param  : len - ìíë ììì  ìë¦¬
 * <pre>
 *    cfMakeNumberRound(str, len)
 * </pre>
 * @return : ë°ì¬ë¦¼ë ì«ì
 * @author : ííì£¼
 */
function cfMakeNumberRound(orgStr, len){

	var str = cfNumeric(orgStr.toString());

	if(cfIsNull(str)){
		str = "0";
	}

	var pos2 = 10;
	for(var i=0; i<len; i++){
		pos2 *= 10;
	}

	var rtnVal = Math.round(str*pos2)/pos2;
	return rtnVal;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì í ìë§í¼ ììì  ìëë¡ 0ì ë¶ì´ê±°ë ììì  ì´í ì«ìë¥¼ ì ì­íë¤.
 * <pre>
 *     onBlur="cfFractionFormat_Obj( this, 2 );"
 * </pre>
 * @sig    : obj, pos
 * @param  : obj    - required ì¤ë¸ì í¸
 * @param  : pos    - required ì ë°ë(ììì ì´í ìë¦¬ì)
 * @return : ë³íë ì¤ë¸ì í¸ ë°¸ë¥
 * @author : ííì£¼
 */
function cfFractionFormat_Obj( obj, pos ){
	obj.value = cfFractionFormat2(obj.value, pos);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì§ì í ìë§í¼ ììì  ìëë¡ 0ì ë¶ì´ê±°ë ììì  ì´í ì«ìë¥¼ ì ì­íë¤.
 * <pre>
 *     cfFractionFormat2( '-123.234234', 2 );
 *     cfFractionFormat2( '-123.2', 2 );
 * </pre>
 * @sig    : str, pos
 * @param  : str    - required ë¬¸ìì´
 * @param  : pos    - required ì ë°ë(ììì ì´í ìë¦¬ì)
 * @return : ë³íë ì¤í¸ë§
 * @author : ííì£¼
 */
function cfFractionFormat2( str, pos ){
    var numStr = str;
    var ptPos  = numStr.indexOf(".");
    var cnt    = 0;
	var rtnVal;

    if ( ptPos < 1 ){
        numStr += ".";
        cnt = pos;
    } else {
        var subLen = numStr.substr( ptPos + 1 ).length;
        if ( pos > subLen ){
            cnt = pos - subLen;
        }
    }

	if(cnt > 0){
	    var str0 = "";
	    for ( var i = 0 ; i < cnt ; i ++ ){
	        str0 += "0";
	    }
	    rtnVal = numStr + str0;
	}else{
		rtnVal = numStr.substring(0, ptPos+pos+1);
	}
    return rtnVal;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ìê°ì¼ë¡ ìë ¥ëë ê¸ììë¥¼ ì ííë¤.
 * <pre>
 *     obkeyup="cfFractionFormatRT_Obj( obj, limitLen )";
 * </pre>
 * @sig    : event, obj, limitLen
 * @param  : event - ì´ë²¤í¸
 * @param  : obj - í´ë¹ê°ì²´
 * @param  : limitLen - ì íê¸¸ì´
 * @return : void
 * @author : ííì£¼
 */
function cfFractionFormatRT_Obj(obj, limitLen ){
	val = cfFractionFormatRT(obj.value, limitLen);
	if( val.length != obj.value.length ) obj.value = val;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ìê°ì¼ë¡ ìë ¥ëë ê¸ììë¥¼ ê³ì°íì¬ ê¸ìì ì´ê³¼ì alertì°½ ë³´ì
 * <pre>
 *     obkeyup="cfFractionFormatRT(str, limitLen)";
 * </pre>
 * @sig    : str, limitLen
 * @param  : str - ì²´í¬í  ë¬¸ìì´
 * @param  : limitLen - ì íê¸¸ì´
 * @return : void
 * @author : ííì£¼
 */
function cfFractionFormatRT(str, limitLen) {
	var numStr = str;
    var ptPos  = numStr.indexOf(".");
    var rtnVal = str;

	if(ptPos >= 1){

	    var nLen = numStr.substr(ptPos+1).length;

		if (nLen > limitLen) {
			cfAlertMsg(MSG_COM_ERR_084,[limitLen]);
			rtnVal = cfFractionFormat2( str, limitLen );
		}
	}
	return rtnVal;
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì¼ë¡ ì¬ì©ìê° ì«ì, ìë¬¸ìë¥¼ ìë ¥íëìê° ìíë í¬ë§·ì ì¤ê°ì ë°ë¡ ì¶ê°<br>
 *           "###-##-####"ííë¡ í¬ë§·ì ì§ì í´ì¤ë¤.
 * @sig    : obj, format, e
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : format - fotmat Mask
 * @param  : e - ì´ë²¤í¸
 * <pre>
 *    onkeyup="cfSetFormatMaskRT(this,'####-##-###',event);"
 * </pre>
 * @return : ì§ì í í¬ë§·ì´ ë¤ì´ê° ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetFormatMaskRT(obj, format, e){
	if(window.event){    //IE
       	e = window.event;
       	var lkeycode = e.keyCode;
    }else{				//W3C
    	var lkeycode = e.which;
    }

    if(e.type == "keypress"){
	    if( !((48 <= lkeycode && lkeycode <=57) || (65 <= lkeycode && lkeycode <=90) || (97 <= lkeycode && lkeycode <=122) || lkeycode == 13 || lkeycode == 8 || lkeycode == 0) ){
			if( window.event ){
	    		e.returnValue = false;
	    	}else{
	        	e.preventDefault();
	    	}
	    }else{
			var pos = cfGetCaretPosition(obj);
			var cntSep = cfGetSep(obj, pos);

			cfSetFormatMask(obj, format);

			if(pos != -1) cfSetCaretToPos(obj, pos + (cfGetSep(obj,pos) - cntSep));
	    }
    }else{
	    if( !((48 <= lkeycode && lkeycode <=57) || (96 <= lkeycode && lkeycode <=105) || (65 <= lkeycode && lkeycode <=90) || lkeycode == 13 || lkeycode == 8 || lkeycode == 46 || lkeycode == 229) ){
			var charVal = String.fromCharCode(lkeycode);
			if(charVal != null && charVal != "" && !cfIsAlphaOnly(charVal)){
				var eVal = e.srcElement.value;
				if(eVal.length > 0) e.srcElement.value = eVal = eVal.replace(charVal, "");
			}
	    }else{
			var pos = cfGetCaretPosition(obj);
			var cntSep = cfGetSep(obj, pos);

			cfSetFormatMask(obj, format);

			if(pos != -1) cfSetCaretToPos(obj, pos + (cfGetSep(obj,pos) - cntSep));
	    }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìë ê²½ì°ì ëí´ ì§ì í¬ë§·ì ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "###-##-####"ííë¡ í¬ë§·ì ì§ì í´ì¤ë¤.
 * @sig    : obj, format
 * @param  : obj - í´ë¹ ì¤ë¸ì í¸
 * @param  : format - fotmat Mask
 * <pre>
 *    cfSetColon(this,'time');
 * </pre>
 * @return : ì§ì í í¬ë§·ì´ ë¤ì´ê° ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetFormatMask(obj, format) {
	obj.value = cfSetFormatMaskStr(obj.value, format);
}

/**
 * @type   : function
 * @access : public
 * @desc   : RealTimeì´ ìë ê²½ì°ì ëí´ ì§ì í¬ë§·ì ì¤ê°ì ì¶ê°í´ì¤ë¤<br>
 *           "###-##-####"ííë¡ í¬ë§·ì ì§ì í´ì¤ë¤.
 * @sig    : str, format
 * @param  : str - í¬ë§·ì ì ì©í  ë¬¸ìì´
 * @param  : format - fotmat Mask
 * <pre>
 *    cfSetFormatMaskStr('123120','###-###');
 * </pre>
 * @return : colonì´ ì¶ê°ë ë¬¸ìì´
 * @author : ííì£¼
 */
function cfSetFormatMaskStr(str, format) {
	if(cfIsNull(str) ) return "";

	var strAlphaNum = cfGetAlphaNumberOnly(str);	// ì ì©í  ë¬¸ìì´

	var strValue = format;

	for(var i = 0; i < strAlphaNum.length; i++) {
		strValue = strValue.replace("#", strAlphaNum.charAt(i));
	}

	strValue = strValue.replace(/([#]|[^0-9A-Za-z])*$/g, "");

	return strValue;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìë ¥ê°ìì ì«ìì '~'ë§ ì¶ì¶íì¬ë¦¬í´
 * <pre>
 *     cfGetTelNumberOnly("123~123abc");
 * </pre>
 * @sig    : sOrg
 * @param  : sOrg - required ì²´í¬í  ë¬¸ìì´
 * @return : ì«ìë¡ ì´ë£¨ì´ì§ ë¬¸ìì´
 * @author : ííì£¼
 */
function cfGetTelNumberOnly(sOrg) {

    var num = sOrg + "";
    var tmp = "";

    for (var i = 0; i < num.length; i ++) {
        if ( (num.charAt(i) >= 0 && num.charAt(i) <= 9) || num.charAt(i) == '~')
            tmp = tmp + num.charAt(i);
    }
    return tmp;
}

/**
 * @type   : function
 * @access : public
 * @desc   : Form, DIV, Table ,TD ,TR ë±ìì text, checkBox, text area, radio, hidden, ê¸°íXML ì name=valueìì Stringì ë§ë¬
 * <pre>
 *     cfGetParamValStr(form, [aaa,bbb],[ccc]);
 * </pre>
 * @sig    : dLayer
 * @param  : dLayer 	  - required íë¼ë¯¸í° ì¤í¸ë§ì ì»ì´ì¬ ê°ì²´
 * @param  : discardIds   - ë¹¼ê³ ì¶ì ID ë°°ì´
 * @param  : discardNames - ë¹¼ê³ ì¶ì ì´ë¦ ë°°ì´
 * @return : name=valueë¡ ì´ë£¨ì´ì§ ë¬¸ìì´
 * @author : ííì£¼
 */
function cfGetParamValStr(dLayer, discardIds, discardNames) {
	//public functions
	this.addLayer				=cfAddLayer;						// íë¼ë¯¸í° ì¤í¸ë§ì ì»ì´ì¬ ë ì´ì´ë¥¼ ì½ìíë¤.
    this.getParamVal			=cfGetParamVal;						// íë¼ë¯¸í°ì¤í¸ë§ì ì»ëë¤.
    this.setDiscardNames		=cfSetDiscardNames;					// ë¹¼ê³ ì¶ì ì´ë¦ì ì¸ííë¤.
    this.setDiscardIds			=cfSetDiscardIds;  					// ë¹¼ê³ ì¶ì IDë¥¼ ì¸ííë¤.

	//private function
	this.dataLayers				=new Array();						// ë°ì´í° ë ì´ì´ Pool
	this.dIds					=null;								// discard Id Pool
	this.dNames					=null;								// discard Name Pool
	this.dLSize					=0;									// ë°ì´í° ë ì´ì´ ê°ì.
	this.isDiscard				=cfIsDiscard;
	this.getParamValFunction	=cfGetParamValStringFuncton;

	//creator behavior
	if(dLayer!=null) 			this.addLayer(dLayer);				//ìì±ìì ë ì´ì´ê° ììë
	if(discardIds!=null) 		this.setDiscardIds(discardIds);		//ìì±ìì discard idê° ììë
	if(discardNames!=null) 		this.setDiscardNames(discardNames);	//ìì±ìì discardNameì´ ììë
	return  this.getParamVal();
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ë¸ì í¸ë¥¼ ì¶ê°íë¤.
 * <pre>
 *     cfAddLayer(lLayer);
 * </pre>
 * @sig    : lLayer
 * @param  : lLayer - required ì¶ê°í  ì¤ë¸ì í¸
 * @author : ííì£¼
 */
function cfAddLayer(lLayer){
   	this.dataLayers[this.dLSize++]=lLayer;
}

/**
 * @type   : function
 * @access : public
 * @desc   : íë¼ë¯¸í° ì¤í¸ë§ì ê°ì ¸ì¨ë¤.
 * <pre>
 *     cfGetParamVal();
 * </pre>
 * @return : íë¼ë¯¸í° ì¤í¸ë§
 * @author : ííì£¼
 */
function cfGetParamVal(){
	var qry="";
	for(var i=0;i<this.dLSize;i++){
		qry+=this.getParamValFunction(this.dataLayers[i].all);
	}
	qry=qry.substring(0,qry.length-1);
	return qry;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¹¼ê³ ì¶ì nameì ì¸ííë¤.
 * <pre>
 *     cfSetDiscardNames(dNames);
 * </pre>
 * @sig    : dNames
 * @param  : dNames - required ë¹¼ê³ ì¶ì ìë¦¬ë¨¼í¸ name
 * @author : ííì£¼
 */
function cfSetDiscardNames(dNames){
	this.dNames =","+dNames+",";
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¹¼ê³ ì¶ì idë¥¼ ì¸ííë¤.
 * <pre>
 *     cfSetDiscardIds(dIds);
 * </pre>
 * @sig    : dIds
 * @param  : dIds - required ë¹¼ê³ ì¶ì ìë¦¬ë¨¼í¸ id
 * @author : ííì£¼
 */
function cfSetDiscardIds(dIds){
	this.dIds = ","+dIds+",";
}

/**
 * @type   : function
 * @access : public
 * @desc   : íë¼ë¯¸í° ì¤í¸ë§ì ë§ë ë¤.
 * <pre>
 *     cfGetParamValStringFuncton(objs);
 * </pre>
 * @sig    : objs
 * @param  : objs - required íë¼ë¯¸í° ì¤í¸ë§ì ë§ë¤ ê°ì²´ë¤
 * @return : íë¼ë¯¸í° ì¤í¸ë§
 * @author : ííì£¼
 */
function cfGetParamValStringFuncton(objs){
	if(objs==null||objs.length==0) return null;
	var rCnt=objs.length;	// repeatCount
	var qry="";				// Query String
	for(var i=0;i<rCnt;i++){
		var obj=objs[i];
		if(obj.name !=null && obj.name!="" && !this.isDiscard(obj)){
			if(obj.tagName=="INPUT"){
				if((obj.type=="checkbox" ||obj.type=="radio")){
					if(obj.checked==true)  qry+=obj.name+"="+obj.value+"&";
				}else qry+=obj.name+"="+obj.value+"&";
			}else if(obj.tagName=="TEXTAREA"){
				qry+=obj.name+"="+obj.innerText+"&";
			}else {
				qry+=obj.name+"="+obj.value+"&";
			}
		}
	}
	return qry;
}

/**
 * @type   : function
 * @access : public
 * @desc   : DiscardList ì ìí ì¤ë¸ì í¸ì¸ì§ íì¸
 * <pre>
 *     cfIsDiscard(obj);
 * </pre>
 * @sig    : obj
 * @param  : obj - required íì¸í  ì¤ë¸ì í¸
 * @return : DiscardList ì ìëì§ ì¬ë¶
 * @author : ííì£¼
 */
function cfIsDiscard(obj){
	var rtValue=false;
	if(this.dNames!=null && obj.name!=null) 			rtValue= this.dNames.match(","+obj.name+",");
	if(!rtValue && this.dIds!=null && obj.id !=null) 	rtValue= this.dIds.match(","+obj.id+",");
	return rtValue;
}

///////////////////////////// ì»¤ìì í¬ì»¤ì¤ ìì¹ë¥¼ ì°¾ê¸° ìí ë©ìë /////////////////////////////
function cfSetSelectedTextRange(elm, selectionStart, selectionEnd) {
	if (elm.setSelectionRange) {
		elm.focus();
		elm.setSelectionRange(selectionStart, selectionEnd);
	}
	else if (elm.createTextRange) {
		var range = elm.createTextRange();

		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}

function cfSetCaretToPos (elm, pos) {
	cfSetSelectedTextRange(elm, pos, pos);
}

function cfGetCaretPosition(elm) {
	if (typeof elm.selectionStart != "undefined")
		return elm.selectionStart;
	else if (document.selection)
		return Math.abs(document.selection.createRange().moveStart("character",-1000000));
}

function cfGetSep(obj, pos) {
	var cnt = 0;

	for(var i = 0; i < pos; i++) {
		if(/[^a-zA-Z0-9]/g.test(obj.value.charAt(i))) cnt++;
	}
	return cnt;
}
/////////////////////////////////////////////////////////////////////////////////////////

//ì ë³´ë§ë¹ ì¤í¬ë©ì ìí ìëì°ì°½ íì
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì²ë¦¬ì¤ íë ìì ë³´ì¬ì¤ë¤. <br>flag íë¼ë¯¸í°ìë true , false ê°ì ì£¼ì´ì¼ íë¤.
 * <pre>
 *     cfDisableWindow(true);
 * </pre>
 * @sig    : flag
 * @param  : flag - ì²ë¦¬ì¤ ì¬ë¶
 * @return : void
 * @author : ííì£¼
 */
var _DisableLayer = null;
function cfDisableWindow(flag) {

	// FrameWait ê° ì¡´ì¬íëì§ íì¸í´ì ìì¼ë©´ ìì±
	if (document.getElementById('disableLayer')==null && flag) {
	  	if (!flag) return;

		var currentH = document.body.clientHeight;	// íì¬ íë ìì ëì´(ì¤í¬ë¡¤ ìì­ ì ì¸)
		var layerW = 780;
		if(!cfIsNull(gvContextPath) && gvContextPath == "/pt")
			layerW = 1000;

		var wait = "<table width='100%' height='"+currentH+"' border='0' cellpadding='0' cellspacing='0'>"
				 + "<tr><td valign='middle' align='center'></td>"
				 + "</tr></table>";

		if( document.all ){   //IE
	        _DisableLayer = document.createElement("<div id='disableLayer' style='left:0; top:0; width:"+layerW+"px; height:"+currentH+"px; position:absolute; z-index:1; visibility:visible;'></div>");
			document.body.insertBefore(_DisableLayer);
			_DisableLayer.innerHTML = wait;
		}else{				  //W3C
	        var parentObj = document.getElementsByTagName("BODY");
	        _DisableLayer = document.createElement("div");
	        _DisableLayer.setAttribute("id", "disableLayer");
	        _DisableLayer.setAttribute("style", "left:0; top:0; width:"+layerW+"px; height:"+currentH+"px; position:absolute; z-index:1; visibility:visible;");

	        parentObj[0].insertBefore(_DisableLayer, null);
			_DisableLayer.innerHTML = wait;
		}
	} else {
		  if (flag) return;
	}
	if (flag) {
		window.document.body.style.cursor		= "wait";
	} else {
		window.document.body.style.cursor		= "default";

		if(document.getElementById('disableLayer') != null){
			if( document.all ) {
				document.all.disableLayer.removeNode(true);
			}else{
				window.document.body.removeChild(document.getElementById('disableLayer'));
			}
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : IPì£¼ìë¥¼ IP numberë¡ ë³í
 * <pre>
 *     cfDisableWindow(10.10.10.1);
 * </pre>
 * @sig    : ipAddress
 * @param  : ipAddress - IP ì£¼ì
 * @return : void
 * @author : ë¥ì í¸
 */
function cfConvertIpAddress(ipAddress){
    //IP íì ì²´í¬
    var regExp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if(!regExp.test(ipAddress)){
        return null;
    }

    //IPì£¼ì ë²ì ì²´í¬
    var addressArray = ipAddress.split(".");
    var partOfAddress;
    for(var i=0; i<addressArray.length; i++){
        partOfAddress = Number(addressArray[i]);
        if(partOfAddress < 0 || partOfAddress >255){
            return null;
        }
    }

    return (Number(addressArray[0])*16777216) + (Number(addressArray[1])*65536) + (Number(addressArray[2])*256) + Number(addressArray[3]);
}



/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>(ë°©ë¬¸ìì½ê´ë¦¬-ì ìì°½êµ¬)
 * @sig    : lang, pOrgnCd, comboNm, selectedCode, initKey, initText
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´(EN, KR)
 * @param  : pOrgnCd - ë´ë¹ê¸°ê´ ì½ë
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfCodeComboDeskSeq(lang, pOrgnCd, comboNm, selectedCode, initKey, initText)
 * </pre>
 * @return : void
 * @author : ë°ëì² 
 */
function cfCodeComboDeskSeq(lang, pOrgnCd, comboNm, selectedCode, initKey, initText) {

    var frameName = "codeFrame" + new Date().valueOf();
    var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";
    var url = "";
    if(location.protocol == "https:")   url = "https://"+location.host;
    url += contextPath + "/common/comtask/comboChgHidden4DeskSeq.jsp?"
        + "lang=" + lang
        + "&pOrgnCd=" + pOrgnCd
        + "&comboNm=" + comboNm
        + "&selectedCode=" + selectedCode
        + "&initKey=" + initKey
        + "&initText=" + initText;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
        document.body.insertBefore(codeFrame);
        codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

        var iframe = document.getElementById(frameName);
        iframe.src = url;
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : í´ë¹ì½¤ë³´ë°ì¤ì ê°ì Hidden Frameì ì¨ì ëì ì¼ë¡ ë°ê¾¼ë¤.<br>(ë°©ë¬¸ìì½ê´ë¦¬-ì´ìì°½êµ¬)
 * @sig    : lang, pOrgnCd, comboNm, selectedCode, initKey, initText
 * @param  : lang - ë³´ì¬ì¤ ì¸ì´(EN, KR)
 * @param  : pDeskSeq - ì ìì°½êµ¬ ì½ë
 * @param  : pSelectDate - ì íì¼ì
 * @param  : comboNm - ë³ê²½ë  ì½¤ë³´ë°ì¤ ì´ë¦
 * @param  : selectedCode - ì íë  ì½ëê°
 * @param  : initKey - ì´ê¸° Option í¤ê°
 * @param  : initText - ì´ê¸° Option íì¤í¸ê°
 * <pre>
 *    cfCodeComboOperDeskNo(lang, pDeskSeq, pSelectDate, comboNm, selectedCode, initKey, initText)
 * </pre>
 * @return : void
 * @author : ë°ëì² 
 */
function cfCodeComboOperDeskNo(lang, pDeskSeq, pSelectDate, comboNm, selectedCode, initKey, initText) {

    var frameName = "codeFrame" + new Date().valueOf();
    var style = "display:none; position:absolute; left:0; top:0; width:0; height:0";
    var url = "";
    if(location.protocol == "https:")   url = "https://"+location.host;
    url += contextPath + "/common/comtask/comboChgHidden4OperDeskNo.jsp?"
        + "lang=" + lang
        + "&pDeskSeq=" + pDeskSeq
        + "&pSelectDate=" + pSelectDate
        + "&comboNm=" + comboNm
        + "&selectedCode=" + selectedCode
        + "&initKey=" + initKey
        + "&initText=" + initText;

    if( document.all ){   //IE
        var codeFrame = document.createElement("<iframe name='" + frameName +
                                               "' style='" + style +
                                               "'  border='0' frameborder='0' src=''></iframe>");
        document.body.insertBefore(codeFrame);
        codeFrame.src = url;

    } else {              //W3C
        var parentObj = document.getElementsByTagName("BODY");

        var objFrame = document.createElement("iframe");
        objFrame.setAttribute("id", frameName);
        objFrame.setAttribute("name", frameName);
        objFrame.setAttribute("style", style);
        objFrame.setAttribute("frameBorder", "0");
        parentObj[0].appendChild(objFrame);

        var iframe = document.getElementById(frameName);
        iframe.src = url;
    }
}


/**
 * @type   : function
 * @access : public
 * @desc   : Xecurewebì ì´ì©í íì¼ìë¡ë
 * @sig    : form, obj_name
 * @param  : form - submit form ê°ì²´
 * @param  : obj_name - file object name
 * <pre>
 *    cfXecureFileUpload(form, "addFile");
 * </pre>
 * @return : void
 * @author : ì ì°ì£¼
 */
function cfXecureFileUpload(form, obj_name){
    var action = form.action;
    form.action = gvContextPath + "/SecureUpload";
    document.charset="euc-kr";

    var obj = document.getElementsByName(obj_name);
    for(var idx=0; idx < obj.length; idx++ ){
        if( !cfIsNull(obj[idx].value)){
            FileUploadEx3( obj[idx].value, form, 0 );
            var oElement = document.createElement("input");
            oElement.setAttribute("type", "hidden");
            oElement.setAttribute("name", "XecureUploadFile");
            var filename = obj[idx].value;
            filename = filename.substring(filename.lastIndexOf('\\')+1);
            oElement.setAttribute("value", filename);
            form.appendChild( oElement );
        }
    }

    document.charset="utf-8";
    form.action = action;
}

//ë°°í¬ë´ì­ì¶ê° DHTML
function cfAddRow(tableId){

	var tableObj = document.getElementById(tableId);
	var cells = tableObj.cells;
	var rows = tableObj.rows;
	var makeCellCount = cells.length/rows.length;

	var cellTemplates = new Array(makeCellCount);
	var tagName = null;

	for(var i=makeCellCount, j=0; i<makeCellCount*2; i++,j++){
		cellTemplates[j] = cells[i].innerHTML;
	}

	var newRow = tableObj.insertRow(rows.length);
	for(var i=0; i<cellTemplates.length; i++){
		var newCell = null;
		newCell = newRow.insertCell();
		newCell.className = "tdData";
		newCell.innerHTML = cellTemplates[i];

		if(newCell.all.length == 1){
			tagName = cells[makeCellCount+i].all[0].name;
			switch(newCell.all[0].tagName){
			case "INPUT":
				switch(newCell.all[0].type){
				case "checkbox":
				case "radio":
					newCell.all[0].checked = false;
					break;
				default:
					newCell.all[0].value = "";
					break;
				}
				break;
			default:
				newCell.all[0].value = "";
				break;
			}

		}else if(newCell.all.length == 3){
			try{
				tagName = cells[makeCellCount+i].all[0].name;
				newCell.all[0].id = tagName + (incRowSeq);
				newCell.all[0].value = "";
				newCell.all[2].id = cells[makeCellCount+i].all[2].id + (incRowSeq);
				newCell.all[1].onclick = function (){cfOpenCalendar(newCell.all[2], event, newCell.all[0].id);return false;};
			}catch(e){
				;
			}
		}else if(newCell.all.length == 2){
			var hiddenId = newCell.all[0].id + (incRowSeq);
			newCell.all[0].id = hiddenId;
			newCell.all[0].value = "";
			newCell.all[1].onchange = function (){document.getElementById(hiddenId).value = this.value;};
		}else if(newCell.all.length == 7){

			var fileHTML = new Array(2);
			for(var j=0, k=0; j<newCell.all.length; j++){
				if(j>4){
					fileHTML[k++] = newCell.all[j].outerHTML;
				}
			}
			newCell.innerText = "";
			newCell.innerHTML = fileHTML[0]+fileHTML[1];
			var hiddenId = newCell.all[0].id + (incRowSeq)
			newCell.all[0].id = hiddenId;
			newCell.all[0].value = "";
			newCell.all[1].onchange = function (){document.getElementById(hiddenId).value = this.value;};
		}else{
			break;
		}
	}
	incRowSeq++;
}

//ë°°í¬ë´ì­ì­ì  DHTML
function cfDelRow(tableId){
	var tableObj = document.getElementById(tableId);
	var cells = tableObj.cells;
	var rows = tableObj.rows;
	var checkLastDelete = false;
	if(rows.length >2){
		for(var i=rows.length-1; i>=0; i--){
			if(rows.length == 2){
				checkLastDelete = true;
				break;
			}else{
				try{
					for(var j=0; j<rows[i].all.length; j++){
						if(rows[i].all[j].type == "checkbox" && rows[i].all[j].checked){
							tableObj.deleteRow(i);
						}
					}
				}catch(e){
					continue;
				}
			}
		}
	}else if(rows.length == 2){
		checkLastDelete = true;
	}

	if(checkLastDelete){
		var rowAll = rows[1].all;
		var confirmDelete = false;
		for(var i=0; i<rowAll.length; i++){
			if(rowAll[i].type == "checkbox" && rowAll[i].checked){
				confirmDelete = true;
				break;
			}
		}

		for(var i=0; i<rowAll.length; i++){
			if(confirmDelete){
				switch(rowAll[i].tagName){
				case "INPUT":
					switch(rowAll[i].type){
					case "checkbox":
					case "radio":
						rowAll[i].checked = false;
						break;
					case "file":
						var parentNode = rowAll[i].parentNode;
						var cloneHTML = parentNode.innerHTML;
						parentNode.innerHTML = cloneHTML;
						break;
					default:
						rowAll[i].value = "";
						break;
					}
					break;
				case "A":
					var bros = rowAll[i].parentNode.all;
					if(bros[0] == rowAll[i]){
						rowAll[i].innerText = "";
						rowAll[i].removeNode();
						i--;
					}
					break;
				case "IMG":
				case "BR":
					if(bros[0] == rowAll[i]){
						rowAll[i].removeNode();
						i--;
					}
					break;
				default:
					rowAll[i].value = "";
					break;
				}
			}
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : "-"ë¥¼ í¬í¨í ì íë²í¸ ìë ¥
 * @sig    : obj_name
 * @param  : obj_name - object name
 * <pre>
 *    cfChkTel_Number(this);
 * </pre>
 * @return : void
 * @author : ì±ììµ
 */
function cfChkTel_Number(obj_name) {

    var objNmae   = document.getElementById(obj_name.name);
	var strValue  = objNmae.value;
    var endStr    = strValue.substring(strValue.length-1,strValue.length);

    if ( (endStr == "-") || ( (endStr >=0) && (endStr <= 9) ) ) {
       return;
    } else {
       objNmae.value = strValue.substring(0,strValue.length-1);
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : select box ìµì ìë¡ ìì±
 * @sig    : obj_name
 * @param  : arrayObj - ìµìì´ ë¤ì´ìë ë°°ì´, selectObj - ìì±ëì´ì¼í  Select Box, keyValue - ê¸°ì¤ê°
 * <pre>
 *    createSelectBox(arrayObj, selectObj, keyValue);
 * </pre>
 * @return : void
 * @author : ì±ììµ
 */
function createSelectBox(arrayObj, selectObj, keyValue) {

		var newSelectBox  = document.getElementById(selectObj.name);
		var newOption     = null;

		//optionì index=0ì¸ ê²ë§ ì ì¸íê³  ëª¨ë ì§ì´ë¤.
		for(var i=newSelectBox.options.length; i>=1; i--){
			newSelectBox.remove(i);
		}

		//ìë¡ì´ ìµìì ìì±íë¤.
		for(var i=0; i<arrayObj.length; i++){
  			if(keyValue == arrayObj[i][0]){
  				newOption = document.createElement("OPTION");
  				newSelectBox.add(newOption);
  				newOption.value     = arrayObj[i][1];
  				newOption.innerText = arrayObj[i][2];
  			}
		}

}

/**
 * @type   : function
 * @access : public
 * @desc   : ì½ëíìì Ajaxë¥¼ ì¬ì©íê¸° ìí ê³µíµí¨ìë¥¼ í¸ì¶í©ëë¤.

 * @author : ê¶ìì£¼
 */
function cfAjaxSelect(objNm, tableName, langCd, cdGroup, ajaxFlag, initVal, selectVal){
	cfAjaxGrpSnSelect(objNm, tableName, langCd, cdGroup, "", ajaxFlag, initVal, selectVal);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì½ëíìì Ajaxë¥¼ ì¬ì©íì¬ select boxë¥¼ êµ¬ì±íê¸° ìí ê³µíµí¨ìë¥¼ í¸ì¶í©ëë¤.
 * 	** tableName = 'tb_com011_down'ì¸ ê²½ì° cdGroup = hi_comm_cd, cdGrpSn = comm_cl_cd(comm_cl_cdì¡°ê±´ì´ íììì¼ë©´ cdGrpSn = '')
 * <pre>
 *     cfAjaxGrpSnSelect(objNm, tableName, langCd, cdGroup, cdGrpSn, ajaxFlag, initVal, selectVal, etcVal, etcText);
 * </pre>
 * @param  : objNm		selectë°ì¤ name
 * @param  : tableName	CodeListRBizìì ì ìí íì´ë¸ëª
 * @param  : langCd		'KR' ëë '' - íê¸ì½ëëª, 'EN' - ìì´ì½ëëª ì¡°í
 * @param  : cdGroup	comm_cl_cd ê°
 * @param  : cdGrpSn	tableNameì´ 'tb_com012' ì¸ ê²½ì° comm_grp_sn ê°
 * @param  : ajaxFlag	Ajax flag
 * @param  : initVal	ì´ê¸° ê°
 * @param  : selectVal	ì íë  ê°
 * @param  : etcVal		selectì ë§ì§ë§ì ì¶ê°ë  option value
 * @param  : etcText	selectì ë§ì§ë§ì ì¶ê°ë  option innerText
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfAjaxGrpSnSelect(objNm, tableName, langCd, cdGroup, cdGrpSn, ajaxFlag, initVal, selectVal, etcVal, etcText){
	cfAjaxGrpHiCdSelect(objNm, tableName, langCd, cdGroup, cdGrpSn, "", "", "", ajaxFlag, initVal, selectVal, etcVal, etcText);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì½ëíìì Ajaxë¥¼ ì¬ì©íì¬ select boxë¥¼ êµ¬ì±íê¸° ìí ê³µíµí¨ìë¥¼ í¸ì¶í©ëë¤. ììì½ëë¡ ì¡°íí  ì ìì
 * <pre>
 *     cfAjaxGrpHiCdSelect(objNm, tableName, langCd, cdGroup, cdGrpSn, hiCdGroup, hiCdGroupSn, hiCd, ajaxFlag, initVal, selectVal, etcVal, etcText);
 * </pre>
 * @param  : objNm		selectë°ì¤ name
 * @param  : tableName	CodeListRBizìì ì ìí íì´ë¸ëª
 * @param  : langCd		'KR' ëë '' - íê¸ì½ëëª, 'EN' - ìì´ì½ëëª ì¡°í
 * @param  : cdGroup	comm_cl_cd ê°
 * @param  : cdGrpSn	tableNameì´ 'tb_com012' ì¸ ê²½ì° comm_grp_sn ê°
 * @param  : hiCdGroup	ììì½ëì ê·¸ë£¹ì½ëê°
 * @param  : hiCdGroupSn	ììì½ëì ê·¸ë£¹ìë²ê°
 * @param  : hiCd		ììì½ëì ì½ëê°
 * @param  : ajaxFlag	Ajax flag
 * @param  : initVal	ì´ê¸° ê°
 * @param  : selectVal	ì íë  ê°
 * @param  : etcVal		selectì ë§ì§ë§ì ì¶ê°ë  option value
 * @param  : etcText	selectì ë§ì§ë§ì ì¶ê°ë  option innerText
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfAjaxGrpHiCdSelect(objNm, tableName, langCd, cdGroup, cdGrpSn, hiCdGroup, hiCdGroupSn, hiCd, ajaxFlag, initVal, selectVal, etcVal, etcText){
	var qryString = "tableName="+tableName+"&langCd="+langCd+"&cdGroup="+cdGroup+"&cdGroupSn="+cdGrpSn+"&hiCommClCd="+hiCdGroup+"&hiCommGrpSn="+hiCdGroupSn+"&hiCommCd="+hiCd;
	var xmlHttp = cfGetXmlHttpRequest();
	var url = "/eo/AjaxCode.eo";
	xmlHttp.open("POST", url, true);
	xmlHttp.onreadystatechange = cfHandleRequest(xmlHttp, cfSubSelectBox, ajaxFlag, objNm, initVal, selectVal, etcVal, etcText);

	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(qryString);
}

/**
 * @type   : function
 * @access : public
 * @desc   : Ajaxë¥¼ ì¬ì©íê¸° ìí´ XML Requestë¥¼ ë°íí©ëë¤.

 * @author : ë¥ì í¸
 */
function cfGetXmlHttpRequest()
{
	var xmlhttp;
	if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE5, IE6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	}

    if(xmlhttp == null) alert('ì§ìëì§ ìë ë¸ë¼ì°ì ¸ ìëë¤.');

    return xmlhttp;
}

function cfHandleRequest(xmlHttp, executeFunction, tagNm, objNm, initVal, selectVal, etcVal, etcText){
	return function(){
	    //ì ì
	    if(xmlHttp.readyState == 4) {
	        //ìë²ìì ìì ìë£
	        if(xmlHttp.status == 200) {
	        	if(executeFunction != ""){
	            	executeFunction(xmlHttp.responseXML, tagNm, objNm, initVal, selectVal, etcVal, etcText);
	            }
	        } else {
	            //alert("Error loading "+url+", "+xmlhttp.status+"("+xmlhttp.statusText+")");
	        }
	    }
	}
}

//íì ìë í¸ë°ì¤ë¥¼ êµ¬ì±íë ì½ë°±í¨ì
function cfSubSelectBox(xmlDoc, tagNm, objNm, initVal, selectVal, etcVal, etcText){
    var listTag = xmlDoc.getElementsByTagName(tagNm);
    var list = null;

	var obj = document.getElementById(objNm);

	try
	{
		var options = obj.options;
		//ìë í¸ë°ì¤ì ìµìì ì­ì íë¤.
		for(var i=options.length; i>=0; i--){
			options.remove(i);
		}

		//ìë¡ì´ ìµìì ìì±íë¤.
		if(!cfIsNull(initVal)){
			//ì´ê¸°ê° ìí
			var addOpt = document.createElement('OPTION');
			obj.add(addOpt);
			addOpt.value = "";
			addOpt.innerText = initVal;
		}

		//ì¡°ííê° ì¸í
		for(var i=0; i<listTag.length; i++){
			list = listTag[i];
			var code = list.getElementsByTagName("code")[0].firstChild.nodeValue;
			var codeNm = list.getElementsByTagName("codeNm")[0].firstChild.nodeValue;
			addOpt = document.createElement('OPTION');
			obj.add(addOpt);
			addOpt.value = code;
			addOpt.innerText = codeNm;
			if (code == selectVal) {
				addOpt.selected = true;
			}
		}

		// ê¸°í option ì¸í
		if(!cfIsNull(etcVal)) {
			addOpt = document.createElement('OPTION');
			obj.add(addOpt);
			addOpt.value = etcVal;
			addOpt.innerText = etcText;
		}
	}
	catch (e){}

}

function cfCheckDeleteFile(linkObj, deleteFileName){
	if(cfConfirmMsg(MSG_COM_CRM_004)){
		var bros = new Array(linkObj.parentNode.all.length);
		var index = 0;
		for(var i=0; i<bros.length; i++){
			bros[i] = linkObj.parentNode.all[i];
			if(bros[i] == linkObj){
				index = i;
			}
		}
		for(var i=index-2; i<index+4; i++){
			if(bros[i].tagName == "INPUT" && bros[i].type == "hidden"){
				bros[i].value = deleteFileName!=null?deleteFileName:"";
			}else{
				try{bros[i].innerText = "";bros[i].removeNode();}catch(e){bros[i].removeNode();}
			}
		}
	}
}

//ì²¨ë¶íì¼ í­ëª© ì¶ê°
function cfCvlapplFileAdd(targetObjName, scanCd, indYn, fileTagCnt){
    var newBrTag = null;
    newBrTag = document.createElement("P");
    document.getElementById(targetObjName).insertAdjacentElement("beforeEnd", newBrTag);

    var newHiddenTag1 = null;
    newHiddenTag1 = document.createElement("INPUT");
    newHiddenTag1.type = "hidden";
    newHiddenTag1.name = "fileHidden";
    newHiddenTag1.id = "addFileHidden"+fileTagCnt;
    document.getElementById(targetObjName).insertAdjacentElement("beforeEnd", newHiddenTag1);

    var newFileTag = null;
    newFileTag = document.createElement("INPUT");
    newFileTag.type = "file";
    newFileTag.name = "oriFileNm";
    newFileTag.id = "oriFileNm";
    newFileTag.className = "file";
	newFileTag.style.width = "350px";
	cfAttachEvent(newFileTag, "change", function(event){document.getElementById("addFileHidden"+fileTagCnt).value = newFileTag.value;}, false);
    document.getElementById(targetObjName).insertAdjacentElement("beforeEnd", newFileTag);

    var newHiddenTag2 = null;
    newHiddenTag2 = document.createElement("INPUT");
    newHiddenTag2.type = "hidden";
    newHiddenTag2.name = "scanCd";
    newHiddenTag2.value = scanCd;
    document.getElementById(targetObjName).insertAdjacentElement("beforeEnd", newHiddenTag2);

    var newHiddenTag3 = null;
    newHiddenTag3 = document.createElement("INPUT");
    newHiddenTag3.type = "hidden";
    newHiddenTag3.name = "indYn";
	newHiddenTag3.value = indYn;
    document.getElementById(targetObjName).insertAdjacentElement("beforeEnd", newHiddenTag3);

	document.all.apndFileTagCnt.value = parseInt(fileTagCnt) + 1;
}

//ì²¨ë¶íì¼ í­ëª© ì­ì 
function cfCvlapplFileRemove(targetObjName){
    var targetObj = document.getElementById(targetObjName);
    for(var i=0; i<5; i++){
        if(targetObj.children.length != 0){
            targetObj.children[targetObj.children.length-1].removeNode();
        }
    }
}

//ë ì§í¬ë©§('-')ì¶ê°
function cfSetHyphen(obj, gubun) {
	obj.value = cfSetHyphenStr(obj.value, gubun);
}

//ë ì§í¬ë©§('-')ì¶ê°
function cfSetHyphenStr(str, gubun) {
	if(cfIsNull(str) ) return "";

	var retStr = str;	//ë¦¬í´í  ë¬¸ìì´
	var data = str;
	var data_1 = cfGetNumberOnly(data);	// "." ì ê±°

	// ë ì§ 4ì-2ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	if (gubun == "date") {
		if (data.length > 10) {
			retStr = data_1.substring(0,4) + "-" + data_1.substring(4,6) + "-" + data_1.substring(6,8);
		} else if (data.length > 7) {
			if(data.substring(4,5)=="-" && data.substring(7,8)=="-") return str;
			else retStr = data_1.substring(0,4) + "-" + data_1.substring(4,6) + "-" + data_1.substring(6,8);
		}else if (data.length > 4) {
			if(data.substring(4,5)=="-") return str;
			else retStr = data_1.substring(0,4) + "-" + data_1.substring(4);
		}

	// ë ì§ëì 4ì-2ì ííë¡ ì¤ê°ì dash ì½ì
	} else if (gubun == "dateYM") {
		if (data.length > 7) {
			retStr = data_1.substring(0,4) + "-" + data_1.substring(4,6);
		} else if (data.length > 4) {
			if(data.substring(4,5) == "-") return str;
			else retStr = data_1.substring(0,4) + "-" + data_1.substring(4);
		}
	}
	return retStr;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¤ì¤íì¼ ìë¡ëë¥¼ ìí íì¼ ì¶ê° íì
                          íì¼ valueë¥¼ ìë í¸ë°ì¤ì ì¶ê°íê³ , ë¤ìì ìë ¥í  íì¼íê·¸ë¥¼ ìì±íë¤.

 * @param  : obj - ìë í¸ë°ì¤ì ì¶ê°ë  íì¼ê°ì²´
 * @param  : tagNamePrepix - íì¼íê·¸ ì´ë¦ ì ëì´
 * @author : ë¥ì í¸
 */
function cfAttachMultiFile(obj,tagNamePrepix){

    var options = document.getElementById("o"+tagNamePrepix+"SelectBox").options;
    var newOption = document.createElement("OPTION");

    var isNew = true;
    for(var i=0; i<options.length; i++){
        if(options[i].text == obj.value){
            isNew = false;
            break;
        }
    }

    if(isNew && obj.value != ""){
        newOption.text = obj.value;
        options.add(newOption);

	    var fileString = "<input type=file id="+tagNamePrepix+" name="+tagNamePrepix+" onchange=\"cfAttachMultiFile(this,'"+tagNamePrepix+"');return false;\" size=1 style=width:0;cursor:pointer >";
	    document.getElementById(tagNamePrepix+"FileItems").insertAdjacentHTML("afterEnd", fileString);
    }

    document.recalc();
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¤ì¤íì¼ ìë¡ëë¥¼ ìí íì¼ ì­ì  íì
                         ìë í¸ë°ì¤ìì íì¼ì ì­ì íê³ , íì¼íê·¸ë ê°ì´ ì­ì íë¤.

 * @param  : tagNamePrepix - íì¼íê·¸ ì´ë¦ ì ëì´
 * @author : ë¥ì í¸
 */
function cfDeleteMultiFile(tagNamePrepix){
	var fileTags = document.getElementsByName(tagNamePrepix);

    var options = document.getElementById("o"+tagNamePrepix+"SelectBox").options;
    var fileId;

    if(options.selectedIndex != -1){
        for(var i=0; i<fileTags.length; i++){
            if(fileTags[i].value == options[options.selectedIndex].text){
            	fileTags[i].removeNode();
                break;
            }
        }
        options.remove(options.selectedIndex);
    }
    document.recalc();
}

/*
*ê¸°ë¥:ë ì§íìë³ê²½(20010101 - 2001/01/01, 200101 - 2001-01..)
*@param date_type:ë³ê²½íê³ ìíë ë ì§íëê°
*@return ì ì:ë³ê²½ë ë ì§ê°, ê·¸ì´ì¸ì:"ìëê°"
*/
function dateFormat(date_val, stradd){
    if(date_val.length == 6 && stradd.length == 1){         //ëì
        date_val = date_val.substring(0,4)+stradd+date_val.substring(4,6);
    }else if(date_val.length == 8 && stradd.length == 1){   //ëìì¼
        date_val = date_val.substring(0,4)+stradd+date_val.substring(4,6)+stradd+date_val.substring(6,8);
    }
    return date_val
}


/**
 * @type   : function
 * @access : public
 * @desc   : íìë¦¬ ì«ìì '0'ì ì¶ê°í ë¬¸ìë¥¼ ë°í

 * @param  : value - '0'ì ì¶ê°í  ê°
 * @author : ì¥ì§ê·¼
 */
function cfLNGDate(value) {
	var str = String(value);

	if (str.length == 1) {
		str = "0" + str;
	} else {
		str = str
	}
	return str;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ëì¼ìë¡ ë¶í° ë, ì, ì£¼, ì¼ ì ì ì¼ìë¥¼ ê²ìì¼ìì  ì¸í

 * @param  : sStartDt - ê²ì ììì¼(ì´ì ì¼ì)
 		   : sEndDt - ê²ì ì¢ë£ì¼(ì¤ëì¼ì)
 		   : dateType - ë("year"), ì("month"), ì£¼("week"), ì¼("day")
 		   : dateValue - dateTypeì ë°ë¥¸ ì´ì  ê°
 * @author : ì¥ì§ê·¼
 */
function cfSetToNBeforeDate(sStartDt, sEndDt, dateType, dateValue){

	var todayDate = new Date();
	todayYear = todayDate.getFullYear();
    todayMonth = todayDate.getMonth();
    todayDay = todayDate.getDate();

    var beforeDate = todayDate;
    if(dateType == "year") {
    	beforeDate = new Date(todayYear-dateValue, todayMonth, todayDay);
    } else if(dateType == "month") {
    	beforeDate = new Date(todayYear, todayMonth-dateValue, todayDay);
    } else if(dateType == "week") {
    	beforeDate = new Date(todayYear, todayMonth, todayDay-(dateValue*7));
    } else if(dateType == "day") {
    	beforeDate = new Date(todayYear, todayMonth, todayDay-dateValue);
    }
    var beforeYear = beforeDate.getFullYear();
    var beforeMonth = beforeDate.getMonth() + 1;
    var beforeDay = beforeDate.getDate();

    var today = todayYear +"-"+ cfLNGDate(todayMonth+1) +"-"+ cfLNGDate(todayDay);//ì¤ë
	var beforeDay = beforeYear +"-"+ cfLNGDate(beforeMonth) +"-"+ cfLNGDate(beforeDay);//ì´ì ì¼

	document.getElementById(sEndDt).value = today;
	document.getElementById(sStartDt).value = beforeDay;

	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê³µíµ ì²¨ë¶íì¼ íì ì²´í¬

 * @param  :
 * @author : ì¥ì§ê·¼
 */
function cfFileValidate() {
	var objFile = document.getElementById("fileTable");
	var objDelFile = document.getElementById("apndFileDeleteCheck");

	// ê¸°ì¡´ ì²¨ë¶íì¼ì´ ëª¨ë ì­ì  ì¬ë¶ ì²´í¬
	if(objDelFile != null) {
		if(objDelFile.length > 1) {
			for(var i=0; i<objDelFile.length; i++) {
				if(objDelFile[i].value == "") {
					return true;
				}
			}
		} else if(objDelFile.value == "") {
			return true;
		}
	}

	// ê¸°ì¡´ ì²¨ë¶íì¼ì´ ëª¨ë ì­ì ë ê²½ì° ì ì²¨ë¶íì¼ ë±ë¡ì¬ë¶ ì²´í¬
	if(objFile != null) {
		return cfValidate(objFile);
	}

	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê²ìê¸°ê° ì í ì²´í¬
 * @param  : fromDt - required ììì¼ì ë´ì input text ê°ì²´
 * @param  : toDt   - required ë§ê°ì¼ ë´ì  input ê°ì²´
 * @param  : pMonth - ì í ê°ì ì
 * @author : ì¥ì§ê·¼
 */
function cfPeriodLimitDate(fromDt, toDt, pMonth, pDay) {
	var sFrom = eval(fromDt).value.trim();
    var sTo   = eval(toDt).value.trim();
    sFrom = sFrom.replaceAll("-", "");
	sTo = sTo.replaceAll("-", "");

	var year  = sFrom.substring(0, 4);
	var month = sFrom.substring(4, 6);
	var day   = sFrom.substring(6, 8);
	var pDate = new Date( year, parseInt(month, 10)+parseInt(pMonth, 10)-1, day );	// pMonth ê°ì í
	//alert(pDate.getFullYear()+"-"+(pDate.getMonth()+1)+"-"+pDate.getDate());

	year  = sTo.substring(0, 4);
	month = sTo.substring(4, 6);
	day   = sTo.substring(6, 8);
	var dateTo = new Date( year, month-1, day );
	//alert(dateTo.getFullYear()+"-"+(dateTo.getMonth()+1)+"-"+dateTo.getDate());

	if (dateTo > pDate)	{
		alert("ê²ìì´ ê°ë¥í ê¸°ê°ì " + pDay + "ì¼ì´ë´ì¬ì¼ í©ëë¤");
		return false;
	}

	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê²ìê¸°ê° ì í ì²´í¬
 * @param  : fromDt - ê³µê°ìì ì¼ì
 * @param  : toDt   - ê³µê°ë§ê° ì¼ì
 * @param  : pDay	- ì í ì¼ì ì´í
 * @param  : pYear	- ì í ë ì´ë´
 * @author : ìì¹ê· 
 */
function cfPeriodLimitDate2(fromDt, toDt, pDay, pYear) {
	var sFrom = fromDt.trim();
    var sTo   = eval(toDt).value.trim();
    sFrom = sFrom.replaceAll("-", "");
	sTo = sTo.replaceAll("-", "");

	var sYear  = sFrom.substring(0, 4);
	var sMonth = sFrom.substring(4, 6);
	var sDay   = sFrom.substring(6, 8);
	var eYear  = sTo.substring(0, 4);
	var eMonth = sTo.substring(4, 6);
	var eDay   = sTo.substring(6, 8);

	var yDate = new Date( parseInt(sYear, 10) + parseInt(pYear, 10), sMonth-1, sDay ); // pYearë ì´ë´
	var dDate = new Date(sYear, sMonth-1, parseInt(sDay, 10) + parseInt(pDay, 10));	//pdayì¼ ì´í
	var eDate = new Date( eYear, eMonth-1, eDay );

	if(yDate < eDate){
		alert("ê³µê°ê¸°ê°ì " + pYear + "ëì´ë´ì¬ì¼ í©ëë¤.")
		return false;
	}else if(dDate > eDate){
		alert("ê³µê°ê¸°ê°ì " + pDay + "ì¼ì´íì¬ì¼ í©ëë¤.")
		return false;
	}

	return true;
}


/**
 * @type   : function
 * @access : public
 * @desc   : 2ìì ê²ìì¡°ê±´ í­ëª©ì í¼ì¹ê±°ë ì ëë¤.
 * @param  : folderAreaId	- 2ìì ê²ìì¡°ê±´ displayìì­
 * @param  : opnBtnId		- í¼ì¹¨ë²í¼id
 * @param  : clsBtnId		- ë«íë²í¼id
 * @author : ë°ì² ë¯¼
 */
function cfFolderCtrl(folderAreaId, opnBtnId, clsBtnId){
	var folderArea = document.getElementById(folderAreaId);
	var opnBtnObj = document.getElementById(opnBtnId);
	var clsBtnObj = document.getElementById(clsBtnId);

	if(folderArea.style.display == "none"){
		cfChgObjDisplay(folderArea, "block");
		cfChgObjDisplay(opnBtnObj, "none");
		cfChgObjDisplay(clsBtnObj, "inline");
	}else{
		cfChgObjDisplay(folderArea, "none");
		cfChgObjDisplay(opnBtnObj, "inline");
		cfChgObjDisplay(clsBtnObj, "none");
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : Objectì Displayë¥¼ ì»¨í¸ë¡¤íë¤..
 * @param  : Obj	- ì»¨í¸ë¡¤ ëì Object
 * @param  : PrcCd  - ì²ë¦¬ì½ë
 * @author : ë°ì² ë¯¼
 */
function cfChgObjDisplay(Obj, PrcCd){
	Obj.style.display = PrcCd;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê²ìì¡°ê±´ ìë ¥ì¬ë¶ë¥¼ checkíë¤.
 * @param  : Obj	- ê²ìì¡°ê±´ í­ëª© Table Object
 * @author : ë°ì² ë¯¼
 */
function cfChkSrchCondNull(Obj){
	var isSrchCondNull = true;

	if(Obj != null){
		var childObj = Obj.getElementsByTagName("*");
		for(var idx=0; idx<childObj.length; idx++){
			if(isSrchCondNull){
				isSrchCondNull = cfChkCondNull(childObj[idx]);
			}
		}
	}

	if(isSrchCondNull){
		cfAlertMsg(MSG_COM_ERR_067,['ê²ìì¡°ê±´']);
		return false;
	}else{
		return true;
	}

}

/**
 * @type   : function
 * @access : public
 * @desc   : í¹ì  ê²ìì¡°ê±´ì ì ì¸í ëë¨¸ì§ì ìë ¥ì¬ë¶ë¥¼ checkíë¤.
 * @param  : Obj		- ê²ìì¡°ê±´ í­ëª© Table Object
 * @param  : tgtInput	- ì ì¸ëì í­ëª©ì input Name
 * @param  : tgtInputNm	- ì ì¸ëì í­ëª©ëª
 * @author : ë°ì² ë¯¼
 */

function cfChkTgtCondNull(obj, tgtInput, tgtInputNm){
	var isTgtCondNull = true;

	if(obj != null){
		var childObj = obj.getElementsByTagName("*");
		for(var idx=0; idx<childObj.length; idx++){
			if(childObj[idx].name != tgtInput){
				if(isTgtCondNull){
					isTgtCondNull = cfChkCondNull(childObj[idx]);
				}
			}
		}
	}

	var msg = tgtInputNm+"ì(ë¥¼) ì ì¸í ê²ìì¡°ê±´";
	if(isTgtCondNull){
		cfAlertMsg(MSG_COM_ERR_067,[msg]);
		return false;
	}else{
		return true;
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : Objectë´ì ìë ¥í­ëª©ë¤ì ê°ì´ nullì¸ì§ íì¸íë¤.
 * @param  : Obj - ê²ìì¡°ê±´ í­ëª© Table Object
 * @author : ë°ì² ë¯¼
 */

function cfChkCondNull(obj){
	var isNull = true;
	switch (obj.tagName) {
		case "INPUT" :
		case "TEXTAREA" :
		case "SELECT" :
			if(obj.value == ""){
				isNull = true;
			}else{
				isNull = false;
			}
			break;
		default :
			break;
	}
	return isNull;
}

/**
 * @type   : function
 * @access : public
 * @desc   : iFrameì ì ê±°ë í¼ì¹ë¤.
 * @param  : btnObjId		- ë³ê²½ì  ë²í¼Objectì Id
 * @param  : tagetBtnObjId	- ë³ê²½í ë²í¼Objectì Id
 * @param  : actType		- ì²ë¦¬ì í
 * @param  : frmId			- ëìiFrameì Id
 * @param  : heigtht		- ëìiFrameì ëì´
 * @author : ë°ì² ë¯¼
 */
function cfiFrmCtl(btnObj, tgtBtnObjId, actType, frmId, height){
	var tgtBtnObj	= document.getElementById(tgtBtnObjId);
	var frm			= document.getElementById(frmId);

	tgtBtnObj.style.display = "block";
	btnObj.style.display = "none";

	if(actType == "opn"){
		frm.height = height;
	}else{
		frm.height = "0";
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : elementì value ì¤  ìë¬¸ìë¥¼ ëë¬¸ìë¡ ë³ííì¬ ë¤ì ì¸ííë¤.
 * <pre>
 *     cfSetUppderFormat(element);
 * </pre>
 * @sig    : obj
 * @param  : obj - valueê° ëë¬¸ìë¡ ë³ê²½ë  element
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfSetUppderFormat(obj){
    if (cfIsNull(obj)) {
        return;
    }

	obj.value = obj.value.toUpperCase();
}

/**
 * @type   : function
 * @access : public
 * @desc   : radio ë° checkboxì ì íë valueê°ì ê°ì ¸ì¨ë¤.
 * <pre>
 *     cfSetUppderFormat(element);
 * </pre>
 * @sig    : objName
 * @param  : objName - radio ë° checkboxì name
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfGetCheckedValue(objName){
    if (cfIsNull(objName)) {
        return "";
    }
    var objs = document.getElementsByName(objName);
    var value = "";
    for(i=0; i<objs.length; i++) {
    	if(objs[i].checked) {
    		if(value != "") value += ";";
    		value += objs[i].value;
    	}
    }

	return value;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤ë³µì ì¡ ì²ë¦¬ë¥¼ ë°©ì§íë¤.
 * @param  : formObject - submitíê³ ì íë formObject
 * @return : void
 * @author : ê¶ìì£¼
 */
var isSubmit = false;
function cfFormSubmit(formObject){
	if(!isSubmit){
		isSubmit = true;
		formObject.submit();
	}
}

/**************************************/
/* 	ìµì´ìì± 2009.07.14	              */
/* 	ìë°ì´í¸ì ê¸°ë¥ì ì íì     	  */
/* 	EPS INTRANET                      */
/**************************************/

/* png ì´ë¯¸ì§ í¬ëª ì ì© (IE 6.0 ì´í)
//<![CDATA[
 function setPng24(obj) {
 obj.width=obj.height="1";
 obj.className=obj.className.replace(/\bpng24\b/i,"");
 obj.style.filter= "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
 obj.src="/comm/img/blank.gif";
 return "";
}
//]]>*/

/* toggle layer */
//<![CDATA[
function toggleLayer(layer)
{
var obj = document.getElementById(layer);
if(obj.style.display == "")
obj.style.display = "none";
else if(obj.style.display == "none")
obj.style.display = "";
}
//]]>
/**
 * @type   : function
 * @access : public
 * @desc   : checkboxë¥¼ ì ì²´ì í/í´ì 
 * <pre>
 *     cfChecked(this.checked, document.all['chkChk']);
 * </pre>
 * @sig    : objName
 * @param  : bChech ì ì²´ì í/í´ì  checkboxì boolean ê°
 * @param  : oCheckBox ì ì²´ì í/í´ì í  ê°ì²´ëª
 * @return : void
 * @author : ì´ì ì
 */
function cfChecked(bChech, oCheckBox){
	if(!cfIsNull(oCheckBox) && oCheckBox != "undefined"){
		var iCheckBoxLen = oCheckBox.length;	//Checkbox ì ê°¯ì

		if(!iCheckBoxLen) {	                    //Checkboxê° íëì¼ ê²½ì°
			if(oCheckBox.disabled != true){
				oCheckBox.checked = bChech;
			}

		}else{				                    //Checkboxê° ì¬ë¬ê° ê²½ì°
			for(var i=0; i < iCheckBoxLen; i++) {
				if(oCheckBox[i].disabled == true){
					continue ;
				}
				oCheckBox[i].checked = bChech;
			}
		}
	}
}
/**
 * @type   : function
 * @access : public
 * @desc   : select boxë¥¼ ì íë ê°ì ë¦¬í´
 * <pre>
 *     cfGetSelVal(document.frmFnd.sExecYn);
 * </pre>
 * @obj    : ê°ì²´
 * @return : String ì íë ê°
 * @author : ì´ì ì
 */
function cfGetSelVal(obj){
    var sVal = "";  // ì íë ê°

	if(!cfIsNull(obj) && obj != "undefined"){
        var iObjSelCnt = obj.length;	//Selectì ê°¯ì

        if(iObjSelCnt > 0){
            for(var i = iObjSelCnt - 1; i >= 0; i--){
                if(obj[i].selected == true){	//ì íë ê°
                    sVal = obj.options[i].value;
                }
            }
        }else{
            sVal = "";
        }
	}
    return sVal;
}
/**
 * @type   : function
 * @access : public
 * @desc   : ì¡°í ê²°ê³¼ê° ìì ê²½ì° ë¶ëª¨ì°½ì frame ëë iframeì ë«ëë¤.
 * <pre>
 *     cfFraCls();
 * </pre>
 * @return : void
 * @author : ì´ì ì
 */
function cfFraCls(){
  var objIframe = this.window.name;
  if( objIframe != ""){
    parent.document.getElementById(objIframe).height = this.document.body.scrollHeight+10;    // ie 8ìì iframe ì¬ì´ì¦ ë³´ì (+10)
  }
}
/**
 * @type   : function
 * @access : public
 * @desc   : ë¶ëª¨ íë ìì ì¬ì´ì¦ë¥¼ ì¡°ì íë¤.
 * <pre>
 *     cfParentFraCls();
 * </pre>
 * @return : void
 * @author : ì´ì ì
 */
function cfParentFraCls(){
  cfFraCls();
}
/**
 * @type   : function
 * @access : public
 * @desc   : ìì¼ìë ¥ì ë°ë¥¸ ëì´ ê³ì°íì¬ ëì´ ìë ¥ëì ìë ìë ¥.
 * <pre>
 *     cfBirthDtToSetAge(idNmBirtDt, idNmAge);
 * </pre>
 * @obj    : ê°ì²´
 * @param  : idNmBirtDt	ìëìì¼ ìë ¥ idëª
 * @param  : idNmAge 	ëì´ ìë ¥ idëª
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfBirthDtToSetAge(idNmBirtDt, idNmAge) {
	var objBirthDt = document.getElementById(idNmBirtDt);
	var objAge = document.getElementById(idNmAge);

	var bDt = objBirthDt.value;
	if(bDt == "") {
		objAge.value = "";
		return;
	}

	if(!cfValidateValue(bDt, "date=YYYY-MM-DD")) {
		cfAlertMsg( MSG_COM_ERR_018, ["ìëìì¼"] );
		objBirthDt.focus();
		return;
	}
	bDt = bDt.simpleReplace("-", "").trimAll();

	// ì¤ëë ì§.
	var todayDate = new Date();
	var toYear = todayDate.getFullYear();
	var todayMon = todayDate.getMonth() + 1;
	var todayDay = todayDate.getDate();
    var toMMDD = (todayMon < 10 ? "0" + todayMon : todayMon) + "" + (todayDay < 10 ? "0" + todayDay : todayDay);

	// ìì¼
	var year = bDt.substring(0, 4);
	var mmdd = bDt.substring(4, 8);

	var age = eval(toYear) - eval(year);
	if(toMMDD < mmdd) {
		age = eval(age) - 1;
	}

	// ëì´ ì¸í.
	objAge.value = age;
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¡°íê¸°ê° ììì¼ ë° ì¢ë£ì¼ ì¸í
 * <pre>
 *     cfSetSchDate(sDay, eDay, strDtId, endDtId);
 * </pre>
 * @param  : sDay		ì¤ëì¼ìì ì¡°íììì¼ì ì¼ì°¨ì´
 * @param  : eDay 		ì¤ëì¼ìì ì¡°íì¢ë£ì¼ì ì¼ì°¨ì´
 * @param  : strDtId	ì¡°íê¸°ê° ììì¼ì id ëª
 * @param  : endDtId 	ì¡°íê¸°ê° ì¢ë£ì¼ì id ëª
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfSetSchDate(sDay, eDay, strDtId, endDtId) {
	// ì¤ëë ì§.
	var todayDate = new Date();
	var toYear = todayDate.getFullYear();
	var toMon = todayDate.getMonth() + 1;
	var todayDay = todayDate.getDate();

    if(!cfIsNull(sDay) && !cfIsNull(strDtId)) {
		var sDate = new Date(toYear, toMon-1, todayDay-parseInt(sDay, 10));
		var sYear = sDate.getFullYear();
		var sMon = sDate.getMonth() + 1;
		var sDay = sDate.getDate();

		document.getElementById(strDtId).value = sYear + "-"  + (sMon < 10 ? "0" + sMon : sMon) + "-"  + (sDay < 10 ? "0" + sDay : sDay);
	} else {
		document.getElementById(strDtId).value = "";
	}

	if(!cfIsNull(eDay) && !cfIsNull(endDtId)) {
		var eDate = new Date(toYear, toMon-1, todayDay-parseInt(eDay, 10));
		var eYear = eDate.getFullYear();
		var eMon = eDate.getMonth() + 1;
		var eDay = eDate.getDate();

		document.getElementById(endDtId).value = eYear + "-"  + (eMon < 10 ? "0" + eMon : eMon) + "-" + (eDay < 10 ? "0" + eDay : eDay);
	} else {
		document.getElementById(endDtId).value = "";
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : selectì ìµìì ì­ì íë¤.
 * <pre>
 *     cfDeleteSelectBoxOption(selectId, rmdOptIndex);
 * </pre>
 * @param  : selectId		ìµìì ì­ì í  selectì id
 * @param  : rmdOptIndex	ì­ì íì§ ìì ìµìì index(ëª¨ë ì­ì í  ê²½ì° -1)
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfDeleteSelectBoxOption(selectId, rmdOptIndex) {
	var objSel = document.getElementById(selectId);
	if(cfIsNull(objSel)) return;

	var options = objSel.options;
	for(var i=options.length; i>=0; i--) {
		// ë¨ê²¨ëì index
		if(i == rmdOptIndex) continue;

		options.remove(i);
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¬¸ìì´ìì í¹ì ë¬¸ìë¥¼ ì ê±°íë¤.
 * <pre>
 *     cfRejectStr(orgStr, tgtStr);
 * </pre>
 * @param  : orgStr		ìë³¸ë¬¸ìì´
 * @param  : tgtStr		ëì²´ëì ë¬¸ì
 * @return : void
 * @author : ë°ì² ë¯¼
 */
function cfRejStr(orgStr, tgtStr) {
	alert(orgStr);
	var rtnStr = "";
	if(orgStr != null && orgStr != ""){
		var obj = orgStr.split(tgtStr);
		for(var idx=0; idx<obj.length; idx++){
			rtnStr = rtnStr+obj[idx];
		}
	}else{
		rtnStr = orgStr;
	}
	return rtnStr.trim();
}

/**
 * @type   : function
 * @access : public
 * @desc   : ìì¢ ì íì ê²ìì¡°ê±´ íì±ííë¤.
 * <pre>
 *     cfChgItp('sItpCd', 'trBplcAddFnd', 'spaTitlBoatNo', 'spaBoatNo', 'spaTitlPrimEinsBplcNo', 'spaPrimEinsBplcNo', 'sBoatNo', 'sPrimEinsBplcNo');
 * </pre>
 * @param  : sItpCd		        ìì¢ì½ë id ëª
 * @param  : sTr		        ì¶ê°ê²ì trê°ì²´ idëª
 * @param  : sTitl1		        ì ë°ë²í¸ íì´í span id ëª
 * @param  : sHtml1		        ì ë°ë²í¸ span id ëª
 * @param  : sTitl2		        ì(í)ìê¸ë²í¸ íì´í span id ëª
 * @param  : sHtml2		        ì(í)ìê¸ë²í¸ span id ëª
 * @param  : sObjNm1	        ì ë°ë²í¸ ìë ¥ê°ì²´ id ëª
 * @param  : sObjNm2	        ì(í)ìê¸ë²í¸ ìë ¥ê°ì²´ id ëª
 * @param  : sTblFndDtlNm	    ìì¸ê²ì table id ëª
 * @param  : sBtnFndDtlOpnNm	ìì¸ê²ì open ë²í¼ id ëª
 * @param  : sBtnFndDtlClsNm	ìì¸ê²ì close ë²í¼ id ëª
 * @return : void
 * @author : ì´ì ì
 */
// ìì¢ ì íì
function cfChgItp(sItpCd, sTr, sTitl1, sHtml1, sTitl2, sHtml2, sObjNm1, sObjNm2, sTblFndDtlNm, sBtnFndDtlOpnNm, sBtnFndDtlClsNm){
    var objItpCd          = document.getElementById(sItpCd);
    var objTr             = document.getElementById(sTr);
    var objTitl1          = document.getElementById(sTitl1);
    var objHtml1          = document.getElementById(sHtml1);
    var objTitl2          = document.getElementById(sTitl2);
    var objHtml2          = document.getElementById(sHtml2);
    var objBoatNo         = document.getElementById(sObjNm1);
    var objPrimEinsBplcNo = document.getElementById(sObjNm2);
    var objTblFndDtlNm    = document.getElementById(sTblFndDtlNm);
    var sItpCd            = cfGetSelVal(objItpCd);

    if(sItpCd == "00620"){
        cfChgObjDisplay(objTr, "inline");
        cfChgObjDisplay(objTitl1, "none");
        cfChgObjDisplay(objHtml1, "none");
        cfChgObjDisplay(objTitl2, "inline");
        cfChgObjDisplay(objHtml2, "inline");
        objBoatNo.value = "";
    }else if(sItpCd == "00650"){
        cfChgObjDisplay(objTr, "inline");
        cfChgObjDisplay(objTitl1, "inline");
        cfChgObjDisplay(objHtml1, "inline");
        cfChgObjDisplay(objTitl2, "none");
        cfChgObjDisplay(objHtml2, "none");
        objPrimEinsBplcNo.value = "";
    }else{
        cfChgObjDisplay(objTr, "none");
        cfChgObjDisplay(objTitl1, "none");
        cfChgObjDisplay(objHtml1, "none");
        cfChgObjDisplay(objTitl2, "none");
        cfChgObjDisplay(objHtml2, "none");
        objBoatNo.value = "";
        objPrimEinsBplcNo.value = "";
    }
/*
    if(!cfIsNull(sItpCd) && objTblFndDtlNm.style.display == "none"){
        cfFolderCtrl(sTblFndDtlNm, sBtnFndDtlOpnNm, sBtnFndDtlClsNm);
    }
*/
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¼ê´ì²ë¦¬ ì ì²´í¬ ë°ì¤ ì íì¬ë¶ë¥¼ ì²´í¬íë¤.
 * <pre>
 *     cfCheckSelectChk(chkbxName, paramArray);
 * </pre>
 * @param  : chkbxName	ì²´í¬ë°ì¤ ëª
 * @param  : paramArray	ë©ìì§ ì¶ë ¥ ì íìí íì¤í¸ 2ê°(0 : ì²ë¦¬, 1 : ì²ë¦¬ëì)
 			 ex : ["ë±ë¡", "êµ¬ì§ëªë¶"] -> "ë±ë¡ì²ë¦¬ í  êµ¬ì§ëªë¶(ì)ë¥¼ ì ííì¸ì."
 			 		ì²´í¬ë°ì¤ê° ìë ê²½ì°  -> "ë±ë¡ì²ë¦¬ í  êµ¬ì§ëªë¶(ì´)ê° ììµëë¤."
 * @return : boolean
 * @author : ì¥ì§ê·¼
 */
function cfCheckSelectChk(chkbxName, paramArray) {
	var chk = document.getElementsByName(chkbxName);
	var isChk = false;
	for(i=0; i<chk.length; i++) {
		if(chk[i].checked) {
			isChk = true;
			break;
		}
	}
	if(!isChk) {
		if(chk.length > 0) {
			cfAlertMsg(MSG_COM_CRM_018, paramArray);
			chk[0].focus();
		} else {
			cfAlertMsg(MSG_COM_CRM_019, paramArray);
		}
	}

	return isChk;
}

/**
 * @type   : function
 * @access : public
 * @desc   : íì¬ ìë ¥ëì maxLengthë§í¼ ìë ¥ëìë¤ë©´ nextObjë¡ focusë¥¼ ìë ì´ëíë¤.
 *			 input_textì onkeyup ì´ë²¤í¸ì í¸ì¶íë¤.
 * <pre>
 *     cfMoveFocus(obj, nextObjId);
 * </pre>
 * @param  : obj		íì¬ìë ¥ ì¤ì¸ text object
 * @param  : nextObjId	focusë¥¼ ì´ëí  obj ID
 * @return : void
 * @author : ì¥ì§ê·¼
 */
function cfMoveFocus(obj, nextObjId) {
	if(obj.value.length >= obj.maxLength) {
		document.getElementById(nextObjId).focus();
	}
}
/**
 * @type   : function
 * @access : public
 * @desc   : xvarm ìë²ì íì¼ì ì ì¥ object ìì± ì¤í¬ë¦½í¸
 * <pre>
 *     cfCreateKeisModule();
 * </pre>
 * @return : void
 * @author : ì´ì ì
 */
function cfCreateKeisModule() {
//    document.writeln("<object id='prjKEISModule' classid='CLSID:1F4F6F23-96CC-4C2B-8F10-43051B2A3556' codebase='http://localhost:7100/xvarm/prjKEISModule.CAB#version=1,0,0,2' width='0' height='0' ></object>");
    var oBody = document.body;
    var oKeisModule = document.createElement("<OBJECT>");
    oKeisModule.id = "prjKEISModule";
    oKeisModule.classid = "CLSID:1F4F6F23-96CC-4C2B-8F10-43051B2A3556";
    oKeisModule.codebase = "http://localhost:7100/xvarm/prjKEISModule.CAB#version=1,0,0,2";
    oKeisModule.width = 1;
    oKeisModule.height = 1;

	oBody.appendChild(oKeisModule);
}
/**
 * @type   : function
 * @access : public
 * @desc   : xvarm ìë²ì íì¼ì ì ì¥íë¤.
 * <pre>
 * 	var docItems = new Array();
 *	var item = new docItem("doc_uniq_no","D1209876154");
 *	docItems[docItems.length] = item;
 *
 *	var item = new docItem("recv_no","1121212");
 *	docItems[docItems.length] = item;
 *
 *  cfFileSend(docItems, document.frm.file.value);
 *
 *
 * doc_uniq_no	: ë¬¸ìê³ ì ë²í¸
 * recv_no		: ì¸êµ­ì¸ê·¼ë¡ìì ìë²í¸
 * bbs_cd		: ê²ìíêµ¬ë¶
 * bbsw_sn		: ê²ìë¬¼ë²í¸
 * doc_cd		: ë¬¸ìêµ¬ë¶ (056ì½ë ì°¸ì¡°)
 * doc_sn		: ë¬¸ìì¼ë ¨ë²í¸
 * eps_bplc_no	: EPSì¬ìì¥ë²í¸
 * nati_swk_sn	: ë´êµ­ì¸êµ¬ì¸ì¼ë ¨ë²í¸
 * agny_appl_no	: ëíì ì²­ë²í¸
 * capp_recv_no	: ë¯¼ìì ìë²í¸
 * </pre>
 *
 * @param  : docItems   tb_ecm íì´ë¸ì ì ì¥í  ë©íì ë³´
 * @param  : sFullPath	íì¼ì ì ì²´ ê²½ë¡(íì¼ëª í¬í¨)
 * @return : sResult    xvarm ìë²ì ì ì¥í doc idë¥¼ ë¦¬í´
 * @author : ì´ì ì
 */
function cfFileSend(docItems, sFullPath) {

    var docIds = new Array();
    docIds[docIds.length] = "doc_uniq_no";
    docIds[docIds.length] = "recv_no";
    docIds[docIds.length] = "bbs_cd";
    docIds[docIds.length] = "bbsw_sn";
    docIds[docIds.length] = "doc_cd";
    docIds[docIds.length] = "doc_sn";
    docIds[docIds.length] = "eps_bplc_no";
    docIds[docIds.length] = "nati_swk_sn";
    docIds[docIds.length] = "agny_appl_no";
    docIds[docIds.length] = "capp_recv_no";

    var sFileNm = sFullPath.substring(sFullPath.lastIndexOf("\\") + 1, sFullPath.length);
	var sParams = "indexid=TB_ECM;";

	var check = false;
	for(var i in docItems){
		for(var j in docIds){
			if(docItems[i].key == docIds[j]){
				check = true;
				break;
			}else{
				check = false;
			}
		}
		if(!check){
			alert("xvarmìë²ì ì ì¡íê¸°ìí ë©íì ë³´ì ì¼ì¹íì§ ìë í­ëª©ì´ ììµëë¤.\níì¸íì­ìì¤.");
			return "";
		}
		sParams+= docItems[i].key+"="+docItems[i].value + ",";
	}
	sParams+= "file_nm=" + sFileNm;
	/***************************************************************
	 * [SR-DEP-1732] 2017-07-31 ADD ì¹ì·¨ì½ì± ì¡°ì¹ START
	 * *************************************************************/
	var prjKEISModuleInfo = "";
    var sResult = prjKEISModule.fnImport(prjKEISModuleInfo, sParams, "cclassid=BASIC_CC", sFullPath);
    /***************************************************************
	 * [SR-DEP-1732] 2017-07-31 ADD ì¹ì·¨ì½ì± ì¡°ì¹ END
	 * *************************************************************/
	if(sResult != ""){
//        cfAlertMsg(MSG_COM_INF_001);                // ì±ê³µì ì¼ë¡ ì ì¥íììµëë¤.
	}else{
        cfAlertMsg(MSG_COM_ERR_051, ["íì¼ì ì¡"]);  // @ì(ë¥¼) ì¤í¨íììµëë¤.
//		alert("ìë ¥ì¤í¨"+prjKEISModule.strErrorMessage);
	}
    return sResult;
}

function docItem(key, value){
	this.key = key;
	this.value = value;
}

/**
 * @type   : function
 * @access : public
 * @desc   : xvarm ìë²ìì ë¡ì»¬ì íì¼ì ì ì¥íë¤.
 * <pre>
 *     cfFileDown("1234567", "C:\\200912291547420.jpg");
 * </pre>
 * @param  : sElementid xvarm ìë²ì ì ì¥ë doc id
 * @param  : sFullPath	íì¼ì ì ì²´ ê²½ë¡(íì¼ëª í¬í¨)
 * @return : void
 * @author : ì´ì ì
 */
function cfFileDown(sElementid, sFullPath){
	/***************************************************************
	 * [SR-DEP-1732] 2017-07-31 ADD ì¹ì·¨ì½ì± ì¡°ì¹ START
	 * *************************************************************/
	var prjKEISModuleInfo = "";
    var sResult = prjKEISModule.fnDownload(prjKEISModuleInfo, sElementid, sFullPath);
    /***************************************************************
	 * [SR-DEP-1732] 2017-07-31 ADD ì¹ì·¨ì½ì± ì¡°ì¹ END
	 * *************************************************************/
	if(sResult == true){
        cfAlertMsg(MSG_COM_INF_007, [sFullPath]);       // @ì(ë¥¼) ì±ê³µì ì¼ë¡ ì ì¥íììµëë¤.
	}else{
        cfAlertMsg(MSG_COM_ERR_051, ["íì¼ë¤ì´ë¡ë"]);  // @ì(ë¥¼) ì¤í¨íììµëë¤.
//		alert("ë¤ì´ë¡ëì¤í¨" + prjKEISModule.strErrorMessage);
	}
}
/**
 * @type   : function
 * @access : public
 * @desc   : ê²ìì¡°ê±´ì´ ìëì§ ì¬ë¶ë¥¼ ì²´í¬íë¤.
 *           input text, input passwordì ííë¤.
 * <pre>
 *     cfGetFndValChk([obj1, obj2])
 * </pre>
 * ex) cfGetFndValChk([form.sRecvNatEngAlasNm, form.sRecvYy, form.sRecvSn, form.sNatCd, form.sFrnwFnm, form.sPsptNo, form.sKlangTestApexNo]);
 * @sig    : obj
 * @param  : obj ê²ìì¡°ê±´ object ì array
 * @return : true/false
 * @author : ì´ì ì
 */
function cfGetFndValChk(obj){
    for (var objIdx = 0; objIdx < obj.length; objIdx++) {
        oElement = obj[objIdx];
        if(!cfIsNull(oElement.value)){
            return true;
        }
    }
    return false;
}

/**
 * @type   : function
 * @access : public
 * @desc   : IFrameì ì¤í¬ë¡¤ì ìì¤ë¤.
 * <pre>
 * ë¶ëª¨ì°½ìì ì»¨í¸ë¡¤ í´ì¼ íë©°, bodyì onload, ì¤í¬ë¡¤ì ì¡°ì íë ¤ë iframe íê·¸ì onload ì íìì ì½ìíë¤.
 *     cfResizeIFrame("iContents", "150");//í´ë¹ ê¸¸ì´ ë§í¼ iFrameì´ ëì´ëê³  ì¤í¬ë¡¤ì´ ìê¹
 *     cfResizeIFrame("iContents");//ì¤í¬ë¡¤ê¸¸ì´ ë§í¼ iFrameì ëë¦°ë¤.
 * </pre>
 * @param  : name     xvarm ìë²ì ì ì¥ë doc id
 * @param  : heightLimit	íì¼ì ì ì²´ ê²½ë¡(íì¼ëª í¬í¨)
 * @return : void
 * @author : ë¥ì í¸
 */
function cfResizeIFrame(name, heightLimit){
	var Frame_Body  = document.frames[name].document.body;
	var Frame_name  = document.all(name);

	var uHeight = 0;

	if(heightLimit == null){
		uHeight = Frame_Body.scrollHeight + (Frame_Body.offsetHeight-Frame_Body.clientHeight) + 10;
		Frame_name.style.height = String(uHeight) + "px";
	}else{
		if(heightLimit > Frame_Body.scrollHeight){
			uHeight = Frame_Body.scrollHeight + (Frame_Body.offsetHeight-Frame_Body.clientHeight) + 10;
			Frame_name.style.height = String(uHeight) + "px";
		}else{
			uHeight = heightLimit + (Frame_Body.offsetHeight-Frame_Body.clientHeight) + 10;
			Frame_name.style.height = String(uHeight) + "px";
		}
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¯¼ìì§íìí ì íì ê° ì§íìíì ë§ë ìë ¥ê°ì íì±ííë¤.
 * @param  : obj     ë¯¼ìì§íìí ì í radio btn ê°ì²´
 * @return : void
 * @author : ë°ì² ë¯¼
 */
function cfCtrCappInput(obj){
	var cappPrgStatCd = obj.value;
	switch(cappPrgStatCd){
		case "46802" :
			cfInputInit(['cappDealRsltCd']);
			cfInputCtr(['cappDealRsltCd'], "disable");
			document.getElementById("cappDealRsltCd").validExp="ì²ë¦¬ê²°ê³¼:no";
			document.getElementById("cappDealExtnRsnCn").validExp="ì²ë¦¬ë´ì©:no:maxByteLength=200";
			break;
		case "46803" :
			cfInputInit(['cappDealRsltCd']);
			cfInputCtr(['cappDealRsltCd'], "disable");
			document.getElementById("cappDealRsltCd").validExp="ì²ë¦¬ê²°ê³¼:no";
			document.getElementById("cappDealExtnRsnCn").validExp="ì²ë¦¬ë´ì©:yes:maxByteLength=200";
			break;
		case "46804" :
			cfInputInit(['cappDealRsltCd']);
			cfInputCtr(['cappDealRsltCd'], "enable");
			document.getElementById("cappDealRsltCd").validExp="ì²ë¦¬ê²°ê³¼:yes";
			document.getElementById("cappDealExtnRsnCn").validExp="ì²ë¦¬ë´ì©:no:maxByteLength=200";
			break;
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì£¼ì ë¦¬ë¨ì ìí
 * <pre>
 *     cfSetEtcHanAd("txtBplcEtcAd", etcHanAd);
 * </pre>
 * @param  : sObjNm         ë¦¬ë¨ì ìíí  ê°ì²´IDëª
 * @param  : sEtcHanAd      ê¸°í ì£¼ìì ê°
 * @return : void
 * @author : ì´ì ì
 */
function cfSetEtcHanAd(sObjNm, sEtcHanAd){
    var oEtcHanAd = document.getElementById(sObjNm);
    if(!cfIsNull(sEtcHanAd)){
        if(sEtcHanAd.substr(sEtcHanAd.length-1, sEtcHanAd.length) == "ë¦¬") oEtcHanAd.value = sEtcHanAd;
    }
}




/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		í©ì¤ë¥¼ ì ì¡í¸ì¶íë ì¤í¬ë¦½í¸
 * <pre>
 *     cfFaxSend("F0001", "X00000000,3,Y000000");
 * </pre>
 * @param  : tmplCd		ííë¦¿ì½ë
 * @param  : param		ì½¤ë§(,)ë¡ êµ¬ë¶ë ì¸ìê°
 * @return : void
 * @author : ì¤ í ë
 */
function cfCallFaxSend(tmplCd, param, mrdNm){

	var arr = param.split(":");	//ì¬ë¬ê°ì í©ì¤ë¥¼ ì ì¡í ê²½ì°
	var key = "";				//í¤ê°
	var templateCode = "";
	var natKey = "";

	for(var i=0;i<arr.length;i++){
		key = arr[i];
		if(tmplCd == "F0001"){	//íì¤ê·¼ë¡ê³ì½ì
			if(key.substring(1,3) == "VN"){	//ë² í¸ë¨
				templateCode = "F0028";
			}else if(key.substring(1,3) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0029";
			}else if(key.substring(1,3) == "KH"){	//ìºë³´ëì
				templateCode = "F0030";
			}else if(key.substring(1,3) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0031";
			}else if(key.substring(1,3) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤í
				templateCode = "F0032";
			}else if(key.substring(1,3) == "MN"){	//ëª½ê³¨
				templateCode = "F0033";
			}else if(key.substring(1,3) == "MM"){	//ë¯¸ìë§
				templateCode = "F0034";
			}else if(key.substring(1,3) == "NP"){	//ë¤í
				templateCode = "F0035";
			}else if(key.substring(1,3) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0036";
			}else if(key.substring(1,3) == "TH"){	//íêµ­
				templateCode = "F0037";
			}else if(key.substring(1,3) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0038";
			}else if(key.substring(1,3) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0039";
			}else if(key.substring(1,3) == "CN") {  //ëí°ëª¨ë¥´
				templateCode = "F0040";
			}else{
				templateCode = "F0001";		//ìë¬¸
			}
			natKey = key.substring(1,3);
		}else if(tmplCd == "F0045"){	//ê·¼ë¡ìì© ìë´ë¬¸
			//ì¸ë²ì§¸ íë¼ë¯¸í°ê°(ì¸êµ­ì¸ì ìë²í¸) ê° ê°ì ¸ì¤ê¸°
			//key2 = key.split(",");
			//if(key2[2].substring(0,2) == "VN"){	//ë² í¸ë¨
			if(key.substring(0,2) == "VN"){	//ë² í¸ë¨
				templateCode = "F0060";
			}else if(key.substring(0,2) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0047";
			}else if(key.substring(0,2) == "KH"){	//ìºë³´ëì
				templateCode = "F0048";
			}else if(key.substring(0,2) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0051";
			}else if(key.substring(0,2) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤íw
				templateCode = "F0052";
			}else if(key.substring(0,2) == "MN"){	//ëª½ê³¨
				templateCode = "F0053";
			}else if(key.substring(0,2) == "MM"){	//ë¯¸ìë§
				templateCode = "F0054";
			}else if(key.substring(0,2) == "NP"){	//ë¤í
				templateCode = "F0055";
			}else if(key.substring(0,2) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0057";
			}else if(key.substring(0,2) == "TH"){	//íêµ­
				templateCode = "F0058";
			}else if(key.substring(0,2) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0059";
			}else if(key.substring(0,2) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0050";
			}else if(key.substring(0,2) == "CN") {  //ì¤êµ­
				templateCode = "F0049";
			}else if(key.substring(0,2) == "PK") {  //íí¤ì¤í
				templateCode = "F0056";
			}else{
				templateCode = "F0045";		//ìë¬¸
			}
			natKey = key.substring(0,2);
		}else if(tmplCd == "F0065"){	//íì¤ê·¼ë¡ê³ì½ì
			if(key.substring(1,3) == "VN"){	//ë² í¸ë¨
				templateCode = "F0066";
			}else if(key.substring(1,3) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0067";
			}else if(key.substring(1,3) == "KH"){	//ìºë³´ëì
				templateCode = "F0068";
			}else if(key.substring(1,3) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0069";
			}else if(key.substring(1,3) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤í
				templateCode = "F0070";
			}else if(key.substring(1,3) == "MN"){	//ëª½ê³¨
				templateCode = "F0071";
			}else if(key.substring(1,3) == "MM"){	//ë¯¸ìë§
				templateCode = "F0072";
			}else if(key.substring(1,3) == "NP"){	//ë¤í
				templateCode = "F0073";
			}else if(key.substring(1,3) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0074";
			}else if(key.substring(1,3) == "TH"){	//íêµ­
				templateCode = "F0075";
			}else if(key.substring(0,2) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0076";
			}else if(key.substring(1,3) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0077";
			}else if(key.substring(1,3) == "CN") {  //ì¤êµ­
				templateCode = "F0078";
			}else{
				templateCode = "F0065";		//ìë¬¸
			}
			natKey = key.substring(1,3);
		}else{
				templateCode = tmplCd;
		}

		cfIntraFaxSend(templateCode,key,natKey, mrdNm);	//í©ì¤í¸ì¶
	}
}




/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		í©ì¤ë¥¼ ì ì¡íë ì¤í¬ë¦½í¸
 * <pre>
 *     cfFaxSend("F0001", "X00000000,3,Y000000");
 * </pre>
 * @param  : tmplCd		ííë¦¿ì½ë
 * @param  : param		ì½¤ë§(,)ë¡ êµ¬ë¶ë ì¸ìê°
 * @return : void
 * @author : ì¤íë
 */
function cfIntraFaxSend(tmplCd, param, natKey, mrdNm){
	var url ="/ei/FaxRd.ei";
	var qryString ="tmplCd="+ tmplCd +"&fPrm="+ param +"&natKey="+ natKey + "&mrdNm=" + mrdNm;

	var xmlHttp = cfGetXmlHttpRequest();
	xmlHttp.open("GET", url, false);	//ëê¸°í
	executeFunction = cfFaxSendRslt;

	xmlHttp.onreadystatechange = cfFaxHandleRequest(xmlHttp, executeFunction);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(qryString);
}

/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		í©ì¤ë¥¼ ì ì¡í¸ì¶íë ì¤í¬ë¦½í¸
 * <pre>
 *     cfFaxSend("F0001", "X00000000,3,Y000000");
 * </pre>
 * @param  : tmplCd		ííë¦¿ì½ë
 * @param  : param		ì½¤ë§(,)ë¡ êµ¬ë¶ë ì¸ìê°
 * @param  : mrdNm		mrd name
 * @param  : faxNo		í©ì¤ ë²í¸
 * @return : void
 */
function cfCallFaxSend(tmplCd, param, mrdNm, faxNo){
	var arr = param.split(":");	//ì¬ë¬ê°ì í©ì¤ë¥¼ ì ì¡í ê²½ì°
	var key = "";				//í¤ê°
	var templateCode = "";
	var natKey = "";

	for(var i=0;i<arr.length;i++){
		key = arr[i];
		if(tmplCd == "F0001"){	//íì¤ê·¼ë¡ê³ì½ì
			if(key.substring(1,3) == "VN"){	//ë² í¸ë¨
				templateCode = "F0028";
			}else if(key.substring(1,3) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0029";
			}else if(key.substring(1,3) == "KH"){	//ìºë³´ëì
				templateCode = "F0030";
			}else if(key.substring(1,3) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0031";
			}else if(key.substring(1,3) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤í
				templateCode = "F0032";
			}else if(key.substring(1,3) == "MN"){	//ëª½ê³¨
				templateCode = "F0033";
			}else if(key.substring(1,3) == "MM"){	//ë¯¸ìë§
				templateCode = "F0034";
			}else if(key.substring(1,3) == "NP"){	//ë¤í
				templateCode = "F0035";
			}else if(key.substring(1,3) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0036";
			}else if(key.substring(1,3) == "TH"){	//íêµ­
				templateCode = "F0037";
			}else if(key.substring(1,3) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0038";
			}else if(key.substring(1,3) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0039";
			}else if(key.substring(1,3) == "CN") {  //ëí°ëª¨ë¥´
				templateCode = "F0040";
			}else{
				templateCode = "F0001";		//ìë¬¸
			}
			natKey = key.substring(1,3);
		}else if(tmplCd == "F0045"){	//ê·¼ë¡ìì© ìë´ë¬¸
			//ì¸ë²ì§¸ íë¼ë¯¸í°ê°(ì¸êµ­ì¸ì ìë²í¸) ê° ê°ì ¸ì¤ê¸°
			//key2 = key.split(",");
			//if(key2[2].substring(0,2) == "VN"){	//ë² í¸ë¨
			if(key.substring(0,2) == "VN"){	//ë² í¸ë¨
				templateCode = "F0060";
			}else if(key.substring(0,2) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0047";
			}else if(key.substring(0,2) == "KH"){	//ìºë³´ëì
				templateCode = "F0048";
			}else if(key.substring(0,2) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0051";
			}else if(key.substring(0,2) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤íw
				templateCode = "F0052";
			}else if(key.substring(0,2) == "MN"){	//ëª½ê³¨
				templateCode = "F0053";
			}else if(key.substring(0,2) == "MM"){	//ë¯¸ìë§
				templateCode = "F0054";
			}else if(key.substring(0,2) == "NP"){	//ë¤í
				templateCode = "F0055";
			}else if(key.substring(0,2) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0057";
			}else if(key.substring(0,2) == "TH"){	//íêµ­
				templateCode = "F0058";
			}else if(key.substring(0,2) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0059";
			}else if(key.substring(0,2) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0050";
			}else if(key.substring(0,2) == "CN") {  //ì¤êµ­
				templateCode = "F0049";
			}else if(key.substring(0,2) == "PK") {  //íí¤ì¤í
				templateCode = "F0056";
			}else{
				templateCode = "F0045";		//ìë¬¸
			}
			natKey = key.substring(0,2);
		}else if(tmplCd == "F0065"){	//íì¤ê·¼ë¡ê³ì½ì
			if(key.substring(1,3) == "VN"){	//ë² í¸ë¨
				templateCode = "F0066";
			}else if(key.substring(1,3) == "BD"){	//ë°©ê¸ë¼ë°ì
				templateCode = "F0067";
			}else if(key.substring(1,3) == "KH"){	//ìºë³´ëì
				templateCode = "F0068";
			}else if(key.substring(1,3) == "ID"){	//ì¸ëë¤ìì
				templateCode = "F0069";
			}else if(key.substring(1,3) == "KG"){	//í¤ë¥´ê¸°ì¤ì¤í
				templateCode = "F0070";
			}else if(key.substring(1,3) == "MN"){	//ëª½ê³¨
				templateCode = "F0071";
			}else if(key.substring(1,3) == "MM"){	//ë¯¸ìë§
				templateCode = "F0072";
			}else if(key.substring(1,3) == "NP"){	//ë¤í
				templateCode = "F0073";
			}else if(key.substring(1,3) == "LK"){	//ì¤ë¦¬ëì¹´
				templateCode = "F0074";
			}else if(key.substring(1,3) == "TH"){	//íêµ­
				templateCode = "F0075";
			}else if(key.substring(0,2) == "UZ"){	//ì°ì¦ë² í¤ì¤í
				templateCode = "F0076";
			}else if(key.substring(1,3) == "TP") {  //ëí°ëª¨ë¥´
				templateCode = "F0077";
			}else if(key.substring(1,3) == "CN") {  //ì¤êµ­
				templateCode = "F0078";
			}else{
				templateCode = "F0065";		//ìë¬¸
			}
			natKey = key.substring(1,3);
		}else{
				templateCode = tmplCd;
		}

		cfIntraFaxSend(templateCode,key,natKey, mrdNm, faxNo);	//í©ì¤í¸ì¶
	}
}




/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		í©ì¤ë¥¼ ì ì¡íë ì¤í¬ë¦½í¸
 * <pre>
 *     cfFaxSend("F0001", "X00000000,3,Y000000");
 * </pre>
 * @param  : tmplCd		ííë¦¿ì½ë
 * @param  : param		ì½¤ë§(,)ë¡ êµ¬ë¶ë ì¸ìê°
 * @param  : mrdNm		mrd name
 * @param  : faxNo		í©ì¤ ë²í¸
 * @return : void
 */
function cfIntraFaxSend(tmplCd, param, natKey, mrdNm, faxNo){
	var url ="/ei/FaxRd.ei";
	var qryString ="tmplCd="+ tmplCd +"&fPrm="+ param +"&natKey="+ natKey + "&mrdNm=" + mrdNm + "&faxNo=" + faxNo;

	var xmlHttp = cfGetXmlHttpRequest();
	xmlHttp.open("GET", url, false);	//ëê¸°í
	executeFunction = cfFaxSendRslt;

	xmlHttp.onreadystatechange = cfFaxHandleRequest(xmlHttp, executeFunction);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(qryString);
}


/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		í©ì¤ë¥¼ ì ì¡íë ì¤í¬ë¦½í¸
 * <pre>
 *     cfFaxSend("F0001", "X00000000,3,Y000000");
 * </pre>
 * @param  : tmplCd		ííë¦¿ì½ë
 * @param  : param		ì½¤ë§(,)ë¡ êµ¬ë¶ë ì¸ìê°
 * @return : void
 * @author : ì¤íë
 */
function cfFaxSend(tmplCd,minwonNo,minwonSeq,faxNo, param){
	var url ="/ei/FaxC.ei";
	var mrdNm = param.split("&mrdNm");
	var qryString ="tmplCd="+ tmplCd +"&minwonNo="+ minwonNo +"&minwonSeq="+ minwonSeq +"&faxNo="+ faxNo +"&fPrm="+ param;

	var xmlHttp = cfGetXmlHttpRequest();
	xmlHttp.open("GET", url, false);
	executeFunction = cfFaxSendRslt;

	xmlHttp.onreadystatechange = cfFaxHandleRequest(xmlHttp, executeFunction);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(qryString);
}


/**
 * @type   : function
 * @access : public
 * @desc   : í©ì¤ ë±ë¡
 * 		ì¤í¬ë¦½í¸ cfFaxSendì ì ì¡ì´ ìë£ëë©´ í¸ì¶ëë ì¤í¬ë¦½í¸ë¡
 *      ì ìì ì¼ë¡ ìë£ëììëì  ì¤í¬ë¦½í¸ cfFaxSendRsltë¥¼ í¸ì¶í¨
 * <pre>
 *     cfFaxHandleRequest();
 * </pre>
 * @param  : xmlHttp
 * @param  : executeFunction
 * @return : void
 * @author : ì¤íë
 */
function cfFaxHandleRequest(xmlHttp, executeFunction) {
	return function() {
	    //ì ì
	    if(xmlHttp.readyState == 4) {
        	//ìëµ ì±ê³µ
	        if(xmlHttp.status == 200) {
	            executeFunction(xmlHttp.responseXML);
	        }
	    }
	}
}

 /**
  * @type   : function
  * @access : public
  * @desc   : í©ì¤ ë±ë¡
  * 	ì¤í¬ë¦½í¸ cfFaxSendì ê²°ê³¼ë¥¼ ì²ë¦¬í¨
  * <pre>
  *     cfFaxSendRslt();
  * </pre>
  * @param  : xmlDoc
  * @return : void
  * @author : ì¤íë
  */
function cfFaxSendRslt(xmlDoc) {
	var listTags = xmlDoc.getElementsByTagName("SINGLE");
	if(listTags.length>0){
		var list = listTags[0];

		if(list.getElementsByTagName("cnt")[0].firstChild.nodeValue == "1"){
			alert("ì ìì ì¼ë¡ í©ì¤ë¥¼ ì ì¡íìµëë¤.\nì ì¡ê²°ê³¼ë í©ì¤ì ì¡ëª©ë¡ìì íì¸í´ ì£¼ì­ìì¤.");
		}else{
		    if(list.getElementsByTagName("errorMsg")[0].firstChild.nodeValue == "NULL"){
		    	alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\ní©ì¤ë²í¸ ë±ì´ ì ííì§ íì¸íì  í ì ì¡íìê¸° ë°ëëë¤.");
		    }else if(list.getElementsByTagName("errorMsg")[0].firstChild.nodeValue == "DUP"){
		    	alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\nì ì í ë¤ì ì ì¡í´ ì£¼ì­ìì¤.");
		    }else if(list.getElementsByTagName("errorMsg")[0].firstChild.nodeValue == "TMPL"){
		    	alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\nííë¦¿ ì¡´ì¬íì§ ììµëë¤.");
		    }else if(list.getElementsByTagName("errorMsg")[0].firstChild.nodeValue == "NONE"){
		    	if(list.getElementsByTagName("tmplCd")[0].firstChild.nodeValue=="F0006")
		    	{
		    		alert("ê¸ì¼ ìì í êµ¬ì§ì ë³´ê° ììµëë¤. ë¤ì íì¸ ë°ëëë¤.");
		    	}else{
		    		alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\nì ì¡í  ë°ì´í°ê° ììµëë¤.");
		    	}
		    }else{
		    	alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\nì ì í ë¤ì ì ì¡í´ ì£¼ì­ìì¤.");
		    }
		}
	}else{
		alert("í©ì¤ ì ì¡ì ì¤í¨íìµëë¤.\nì ì í ë¤ì ì ì¡í´ ì£¼ì­ìì¤.");
	}
}



 /**
  * @type   : function
  * @access : public
  * @desc   : ì²¨ë¶íì¼ file íê·¸ ìì±
  * @param  : docCd
  * @return : void
  * @author : ë¥ì í¸
  */
function cfAddApndFile(docCd){
	var spanId = "fileApndArea"+docCd;
	var base = document.getElementById(spanId);

	base.innerHTML += "<input type='file' name='apndFile"+docCd+"' style='width:500px;' class='form'/><br/>";

	//2017.07.05 ì¹ì ê·¼ì± ì¡°ì¹
	cfSetFileInputTitleName(spanId);

}

 /**
  * @type   : function
  * @access : public
  * @desc   : ì²¨ë¶íì¼ file íê·¸ ì­ì 
  * @param  : docCd
  * @return : void
  * @author : ë¥ì í¸
  *
  * @ìì  : 2017.07.05 í¬ë¡¬ë¸ë¼ì°ì ìì ëììíë ì¤ë¥ ìì  - ê¹íì
  *
  */
function cfRemoveApndFile(docCd){
	var spanId = "fileApndArea"+docCd;
	var base = document.getElementById(spanId);

	var userAgent = navigator.userAgent;

	if(userAgent.indexOf("MSIE") > 0){ // Internet Explorer
		if(base.all.length <1){
			return;
		}

		base.all[base.all.length-1].removeNode(true);
		base.all[base.all.length-1].removeNode(true);
	}else if(userAgent.indexOf("Chrome") > 0){
		if(base.childElementCount <= 0){ // Chrome browser
			return;
		}
		base.removeChild(base.lastChild); // <br> ì­ì 
		base.removeChild(base.lastChild); // ë§ì§ë§ input ì­ì 
	}else{
		if(base.all.length <1){ // ì´ì¸ ë¸ë¼ì°ì 
			return;
		}

		base.all[base.all.length-1].removeNode(true);
		base.all[base.all.length-1].removeNode(true);
	}

	//2017.07.05 ì¹ì ê·¼ì± ì¡°ì¹
	cfSetFileInputTitleName(spanId);

}

/*
 * cfAddApndFile(docCd) ì  cfRemoveApndFile(docCd) ëìì í´ë¹ input íê·¸ì íì´íëªì ìë¯¸ìë ë¬¸êµ¬ë¡ ì ì´íë¤.
 * 2017.07.05 ì¹ì ê·¼ì± ì¡°ì¹
 *
 */
function cfSetFileInputTitleName(spanId){
	if(spanId == undefined || spanId == null || spanId.length <= 0){
		return ;
	}

	var inputArr = $("#" + spanId + " > input[type='file']");

	if(inputArr.length <= 0 || inputArr == undefined || inputArr == null){
		return ;
	}

	var parentTdTag = $("#" + spanId).parent(); // span íê·¸ì ë°ë¡ ìì td íê·¸ë¥¼ ì í
	var parentTrTag = parentTdTag.parent();	    // ììì ì íë ë°ë¡ ìì tr íê·¸ë¥¼ ì í

	// ë¶ëª¨ td íê·¸ ë´ì ìë input[type='file'] íê·¸ì ê°¯ì (td íê·¸ë´ì ì ì²´ input[type='file'] ê°¯ì - span íê·¸ ë´ì ìë input[type='file'] ì ê°¯ì)
	var parentFileInputSize = parentTdTag.find("input[type='file']").length - inputArr.length;

	// ìë¯¸ìë ë¬¸êµ¬ ì¶ì¶
	var titleNm = parentTrTag.find("th").text();

	// span íê·¸ ë´ì input[type='file'] ì ëë©° ììì ìë¯¸ ìë ë¬¸êµ¬ë¡ title ìì±ì ë³ê²½
	for(var i = 0; i < inputArr.length; i++){
		$(inputArr[i]).attr("title", (i + 1 + parentFileInputSize) + "ë² " + titleNm + " ì²¨ë¶íì¼ ì í");
	}

}


 /**
  * @type   : function
  * @access : public
  * @desc   : ì²¨ë¶íì¼ file ì­ì 
  * @param  : fileNo
  * @return : void
  * @author : ë¥ì í¸
  */
function cfDeleteApndFile(fileNo){
	if(confirm("ì­ì íìê² ìµëê¹?")){

		var form = document.forms[0];
		var xmlHttp = cfGetXmlHttpRequest();
		//var url = "/ei/ApndFileD.ei";
		//2015-08-11 eo/KrApndFileDë eiì ApndFileD ê°ì.
		var url = "/eo/KrApndFileD.eo";
		var qryString = "attFileNo="+fileNo;
		xmlHttp.open("POST", url, true);
		xmlHttp.onreadystatechange = cfHandleRequest(xmlHttp, "");
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttp.send(qryString);

		var fileTag = document.getElementById("link"+fileNo);
		fileTag.removeNode(true);
		fileTag = document.getElementById("del"+fileNo);
		fileTag.removeNode(true);
		fileTag = document.getElementById("comma"+fileNo);
		fileTag.removeNode(true);
	}
}

/**
 * @type   : function
 * @access : public
 * @desc   : ê°ì¸ìë³ì ë³´ ì²´í¬(ì£¼ë¯¼ë±ë¡ë²í¸)
 * @param  : value - ì í¨ì± ê²ì¬ ëìê°
 * @return : boolean. ì í¨ì± ì¬ë¶.
 * @author : ë°ìë
 */
function cfChkPin(value){
	var chkSsn = new covSsnValidator();
	var chkFsn = new covFsnValidator();
	var chkYn = false;

	if ( value == null || value.trim().length < 13)  {
        return chkYn;
    }

	for(idx=0;idx<value.length;idx++){
		var chkVal = value.replaceAll("-", "").replaceAll(" ", "").substr(idx, 13);
		if(!isNaN(chkVal) && !chkVal.trim().length < 13){
			if(chkSsn.validate(chkVal.trim()) || chkFsn.validate(chkVal.trim())){
				chkYn = true;
				break;
			}
		}
	}

	return chkYn;
}

 /**
  * @type   : function
  * @access : public
  * @desc   : ':', '_' ë¬¸ìì²´í¬
  * @param  : obj
  * @return : void
  * @author : í©ì¤í
  */
function cfNoAprvChar(obj){

	  var AlphaDigit;
    var IDLength;
    var NumberChar, CompChar;
    var ChkFlag;
    var str = obj.value;

    AlphaDigit= ":_";

    IDLength = str.length;

    for (i = 0; i < IDLength; i++) {
        NumberChar = str.charAt(i);
        ChkFlag = true;
        for (j = 0; j < AlphaDigit.length ; j++) {
            CompChar = AlphaDigit.charAt(j);
            if (NumberChar.toLowerCase() == CompChar.toLowerCase()){
              	alert("í¹ìë¬¸ì (':', '_')ë ì¬ì©íì¤ì ììµëë¤.");
              	obj.value = str.replaceAll(":","").replaceAll("_","");
								return false;
            }
        }
    }
}

/**
 * @type   : function
 * @access : public
 * @desc   : ë¹ë°ë²í¸ ì²´í¬
 * @param  : obj
 * @return : void
 * @author : ë°ìë
 */
function cfChkpwd(value){
	if(value.length < 8 || value.length > 16) {
		alert('ë¹ë°ë²í¸ë 8~16ì ì´ë´ë¡ ìë ¥íì­ìì¤.');
		return false;
	}
	if(!(/[a-zA-Z]+/.test(value) && /[0-9]+/.test(value) && /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/.test(value))){
		alert("ë¹ë°ë²í¸ë ìë¬¸(ë/ìë¬¸ì)ê³¼ ì«ì, í¹ìë¬¸ì ì¤ 3ê°ì§ ì´ìì ì¢ë¥ë¡ ì¡°í©íì¬ ìë ¥íì¸ì.")
		return false;
	}
	return true;
}

/**
 * @type   : function
 * @access : public
 * @desc   : 2ìë¦¬ë¡ ìê°ì¸í
 * @param  : obj
 * @return : void
 * @author : ë°ìë
 */
function cfSetTimeHh(obj, gubun){
	var timeValue = obj.value;

	if(timeValue.length == 1 && timeValue != "0" && timeValue != "1") {
		if(gubun == "HH" && timeValue != "2"){
			obj.value = "0" + timeValue;
		}else if(gubun == "hh"){
			obj.value = "0" + timeValue;
		}
	}
}

addLoadEvent(getLoad);
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload =func;
	}
	else{
		window.onload =function(){
			oldonload();
			func();
		};
	}
}

function getLoad(){
	document.oncontextmenu = function(){
		return false;
	};
}

function cfSjobApplRsnCodeChk(rsnOcurDt, oneDepthCd, threeDepthCd, firstMsg, altMsg) {
	var vRsnOcurDt = rsnOcurDt;
	var vThreeDepthCd = threeDepthCd.value;
	if (oneDepthCd.value == "48402") {
		if (parseInt(cfGetNumberOnly(vRsnOcurDt.value)) < 20190201) {
			if (vThreeDepthCd.substring(0,4) >= 4843) {
				if (!cfIsNull(altMsg)) {
					alert(firstMsg+"19ë 2ì ì´í ë³ê²½ë "+altMsg+"ë¥¼ ìë ¥íì¨ìµëë¤.\në¤ì ë±ë¡íìê¸° ë°ëëë¤.");
				}
				return false;
			}
		}

		if (parseInt(cfGetNumberOnly(vRsnOcurDt.value)) >= 20190201) {
			if (vThreeDepthCd.substring(0,4) < 4843) {
				if (!cfIsNull(altMsg)) {
					alert(firstMsg+"19ë 2ì ì´ì  "+altMsg+"ë¥¼ ìë ¥íì¨ìµëë¤.\në¤ì ë±ë¡íìê¸° ë°ëëë¤.");
				}
				return false;
			}
		}
	}
	return true;
}
