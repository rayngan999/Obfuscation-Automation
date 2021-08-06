ï»¿/// <reference path="/@JSense.js" />
/// <reference path="../../js/jquery-1.7.1-vsdoc.js" />

/* Ajax call handling functions
*********************************************************************************************************************************/
callPageMethod = function callPageMethod(pageAndMethod, dataToSend, successFunc, errorFunc) {
    $.ajax({
        type: "POST",
        url: pageAndMethod,
        traditional: true,
        data: JSON.stringify(dataToSend),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            defaultPageMethodSuccess(data, (successFunc ? successFunc : showEffect)); 
            },
        error: errorFunc ? errorFunc : defaultError
    });
}
function showEffect() {
    $(tblRow).effect("highlight", { color: '#fff2d5' }, 1000);
}
function defaultError(jqXHR, textStatus, errorThrown) {
    var rslt = new Object();
    rslt.d = jqXHR.responseText.replace('{"d":null}', '');
    defaultPageMethodSuccess(rslt);
}
/*Cart Ajax to call pagemethods in cart/default.aspx + Row highlite and fading effect - zubair 4/18/2012
*********************************************************************************************************************************/
// Variables
var tblRow = null;
var cartItemID = null;
var bundleID = null;
var priceCell = null;
var valToSelect = null;
var control = null;
var control2 = null;
var divToHide = null;
var totalItemPrice = null;
var numYears = 1;

// Initialize Variables
function setVars(element) {
//    if (location.toString().toLowerCase().indexOf('bundle') >= 0) {
//        tblRow = $(element).parent().parent();
//        cartItemID = tblRow.find("[id*='hfItemID']").val();
//        bundleID = tblRow.find("[id*='hfBundleID']").val();
//    }
//    else {
    var div = $(element).closest('div.cartitem');
        tblRow = $(element).closest('tr');
        cartItemID = div.find("[id*=hfItemID]").val();
        bundleID = div.find("[id*=hfBundleID]").val();
        totalItemPrice = $('[id$=spanTotalPrice]', div);
//    }

        var rowID = tblRow.attr('id');
        priceCell = tblRow.find(".price");
    }

/* Success Callback functions
*********************************************************************************************************************************/
//    function updateDDL(ddl, actualUnitPrice, serverPrice, sanPrice, txt1, txt2) {
//        var multiServer = $(ddl).attr('id').indexOf('MultiServer') >= 0;
//    $('option', ddl).each(function (i, v) {
//        var cnt = i + 1;
//        var p = (actualUnitPrice * 1);
//        p += (serverPrice * (multiServer ? i : 1));
//        p += (sanPrice * (!multiServer ? i : 1));
//        p = Math.abs(p);
//        var t = cnt + txt1 + (cnt > 1 ? "s" : "") + txt2 + " - $" + p;
//        $(v).text(t);
//    });
    //}
    function updateDDL(ddl, price) {
        var idx = $('option:selected', ddl).index();
        var txt, cnt;
        var p = 0,  p2 = 0;
        $('option', ddl).each(function (i, v) {
            cnt = i + 1;
            txt = " (Included)";
            var diff = idx - i;

            p = Math.abs(price * diff);

            if (idx > i)
                txt = " (-" + p.currencyFormat(2, '.', ',') + ")";
            else if (idx < i)
                txt = " (+" + p.currencyFormat(2, '.', ',') + ")";
            else if (idx > 0) {
                txt = "";
                p2 = price * idx;
            }
            var t = cnt + txt;
            $(v).text(t);
        });
        var pCell = $(ddl).closest('tr').find('.price');
        if (p2 > 0)
            pCell.text(p2.currencyFormat(2, '.', ','));
        else
            pCell.text('');
    }

    Number.prototype.currencyFormat = function (c, d, t) {
        var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d || ".",
    t = t || ",",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
        return '$' + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    
    function successFunc(msg) {
    if (msg.d != null && msg.d.error) return successFuncError(msg);
    if (msg.d.productPriceServer || msg.d.productPriceSan) {
        if (msg.d.productPriceServer) {
            var ddl = tblRow.attr('id').indexOf('trMultiServer') >= 0 ? tblRow.find('[id$=ddlMultiServer]') : tblRow.siblings('[id$=trMultiServer]').find('[id$=ddlMultiServer]');
            updateDDL(ddl, msg.d.productPriceServer);
        }
        if (msg.d.productPriceSan) {
            var ddl = tblRow.attr('id').indexOf('trSan') >= 0 ? tblRow.find('[id$=ddlSan]') : tblRow.siblings('[id$=trSan]').find('[id$=ddlSan]');
            updateDDL(ddl, msg.d.productPriceSan);
        }
    }
    if (!(tblRow.hasClass('multiServerRow') || tblRow.hasClass('sanRow')))
        $(priceCell).html(msg.d.price);

    if (tblRow.hasClass('registrationLengthRow') && msg.d.info && msg.d.info != '') 
        $('.col2InfoSpan', tblRow).html(msg.d.info);

    totalItemPrice.html(msg.d.totalItemPrice);
    $("[id*='lblTotal']").text(msg.d.total);
    $("#hfCartTotal").val(msg.d.total);
    bindNoteLinks()

    if (control && msg.d.val && msg.d.val != "") {
        resetSuccessFunc(msg);
        return;
    }
    showEffect(tblRow);
}
function successFuncError(msg) {
    showEffect = showEffect || true;
    if (msg.d != null && msg.d.error) {
        showCartAlert(msg.d.error, "Cart Item Not Found");
        return false;
    }
    else if(msg.d != null && msg.d.ciid != null) {
        var ciid = msg.d.ciid;
        var $ciiDiv = $('div').find('[data-ciid="' + ciid + '"]');
        if(msg.d.AutoRenew === "") {            
            $ciiDiv.find('span[id*="spanAutoRenewalDisabled"]').hide();
            $ciiDiv.find('div[id*="divAutoRenew"]').show();
        } else {
            $ciiDiv.find('span[id*="spanAutoRenewalDisabled"]').show();
            $ciiDiv.find('div[id*="divAutoRenew"]').hide()
        }
        
        if(msg.d.Privacy === "") {
            $ciiDiv.find('span[id*="spanPrivacyProtectionDisabled"]').hide();
            $ciiDiv.find('select[id*="ddlPrivacyProtection"]').show();
            $ciiDiv.find('div[id*="spanPrivacyProtectionPrice"]').show();
            $ciiDiv.find('span[id*="spanPrivacyProtectionInfo"]').show();
        } else {
            $ciiDiv.find('span[id*="spanPrivacyProtectionDisabled"]').show();
            $ciiDiv.find('select[id*="ddlPrivacyProtection"]').hide();
            $ciiDiv.find('div[id*="spanPrivacyProtectionPrice"]').hide();
            $ciiDiv.find('span[id*="spanPrivacyProtectionInfo"]').hide();
        }
        //Handle changes to cartItem for AutoRenew && Privacy
        
    } 
    showEffect(tblRow);
}

function resetSuccessFunc(msg) {
    if (msg.d != null && msg.d.error) return successFuncError(msg);
    $(control).val(msg.d.val).removeClass('hidden').show();
    $(control2).hide();
    $(divToHide).hide();
    control = null;
    showEffect(tblRow);
}

/* Cart Review Page Whois public address fetching and setting functions
*********************************************************************************************************************************/
function getContact(cid) {
    callPageMethod("/cart/Review.aspx/getContact", { contactID: cid }, setContact);
}
function setContact(msg) {
    $('lblPublicName').text(msg.d.name);
    $('lblPublicPhone').text(msg.d.phone);
    $('lblPublicEmail').text(msg.d.email);
    $('lblPublicAddress1').text(msg.d.address1);
    $('lblPublicAddress2').text(msg.d.address2);
    $('lblPublicCityStateZip').text(msg.d.cityStateZip);
    $("[id*='lblTotal']").text(msg.d.total);
}

/* Copy domains handling functions get called from within document.ready() below
*********************************************************************************************************************************/
function displayResults(msg) {
    copyToClipboard($.parseJSON(msg.d).join('\n'));
}
function displayResultsNoJSON(msg) {
    copyToClipboard(msg.d.join('\n'));
}
function selectAllCartItems() {
    $('div[id$=DivCartItems] .cartitem input:checkbox').attr('checked', 'checked');
    return false;
}
function unselectAllCartItems() {
    $('div[id$=DivCartItems] .cartitem input:checkbox').removeAttr('checked');
    return false;
}
function selectAll(el) {
    $(el).select();
}
function isTableItemSelected(tblName) {
    if ($(tblName + " tbody :checkbox:checked").length < 1) {
        showCartAlert("You have to select at least one item before<br />you can take this action.", "No item(s) selected!")
        return false;
    }
    return true;
}                                                                                                             
function copyDomains(elem) {
    var tblID = $(elem).attr('tableID');
    if (!tblID) return;

    var domainNameFieldID = $(tblID).attr('domainNameFieldID');
    var selectedItems = getSelectedRows(tblID); //this shows no item selected error
    if (selectedItems.length < 1) return false;

    var domainList = new Array();
    $(selectedItems).each(function () {
        var elem = $(this).find("[id*='lblDomain']");
//        if (elem.length == 0) elem = $(this).find("[id*='lnkDomain']");
        if (elem.length == 0) elem = $(this).find("[id*='" + domainNameFieldID + "']");
        domainList.push(elem.text());
    });
    copyDomainsFromArray(domainList);
}
function copyDomainsFromString(domainList) {
    copyDomainsFromArray(domainList.split('|'));
}
function copyDomainsFromArray(domainList) {
    var msg = {};
    msg.d = domainList;
    displayResultsNoJSON(msg);
}
/* Default Category handling functions
*********************************************************************************************************************************/
var tblCell;
var _catID;
var elementToChange;
function setDefaultCategory(element, catID, elemToChange, newCatName) {
    _catID = catID;
    var row = $(element).parents('tr');
    var callbackOK = 'changeDefaultCat()';
    var catName;
    if (newCatName != null) { catName = newCatName; } else {
        catName = $('td:first a', row).text();
    }
    var catTitle = $('td:first a', row).attr('title');
    var currentDefaultCat = $('#hfCurrentDefaultCat').val();
    var cdcTitle;
    if(currentDefaultCat.length > 30) {
        cdcTitle = currentDefaultCat;
        currentDefaultCat = currentDefaultCat.substring(0, 27) + '...'; 
    }
    if (elemToChange) { elementToChange = elemToChange; }
    else {
        tblCell = $(element).parent();
        tblRow = $(tblCell).parent();
    }

    
    var msg = new Array();
    var j = 0;
    msg[j++] = "Your account is allowed to have one default category. The default category is the category that is pre-selected when you buy and transfer new domain names.";
    msg[j++] = "Your default category should be the most frequently used category at NameBright.<br/><br/>";
    msg[j++] = "<span style=\"color: #FF8F07; text-align:center;font-weight:bold;font-size:14px;\">Your current default category is <span" + (cdcTitle != null ? " title=\"" + cdcTitle + "\"" : "") + ">\"" + currentDefaultCat + "\"</span></span><br/><br/>";
    msg[j++] = "<span style=\"color: #F04700; text-align:center;font-weight:bold;font-size:14px;\">You are changing it to <span" + (catTitle != null ? " title=\"" + catTitle + "\"" : "") + ">\"" + catName + "\"</span></span>";
    confirmCancelPopup('Change Default Category?', msg.join(''), 400, callbackOK, null, null, null, null, null, 147);
}

function changeDefaultCat() {
    if (elementToChange)
        callPageMethod("/account/Categories.aspx/SetDefaultCategory", { acctID: $('#hfAcctID').val(), catID: _catID.toString() }, updateElement);
    else
        callPageMethod("/account/Categories.aspx/SetDefaultCategory", { acctID: $('#hfAcctID').val(), catID: _catID.toString() }, updateCatTbl);
}

function updateCatTbl(msg) {
    var tbl = $(tblRow).parent();
    $(tbl).children().each(function () {
        var tCell = $(this).find("td:last");
        if ($(tCell).html() && $(tCell).find('a.notelink').html() == "Default") {
            $(tCell).parents('tr').find('a.delCat').attr('confirm-message','Are you sure you want to delete the category:<br/><b>'+ $(this).find('td:first').find('a').html() +'</b>?<br /><br /><b style="color:Red;"> You will permanently lose all category settings if you delete this category!</b>');
            $(tCell).html("<a href='javascript:void(0)'  onclick='setDefaultCategory(this, " + _catID + ")'>Set as Default</a>");
        }
    });
    $(tblCell).html('<a href="#" class="notelink" notediv="divWhatIsADefaultCategory">Default</a>');
    $(tblCell).parents('tr').find('a.delCat').attr('confirm-message', 'Are you sure you want to delete the category:<br/><b>' + $(this).find('td:first').find('a').html() + '</b>?<br /><br /><b style="color:Red;"> You will permanently lose all category settings if you delete this category!</b><br/><br/>*This is your default category.  If you delete this category we will automatically assign another category as your default.');
    $('#hfCurrentDefaultCat').val(catName);
    bindNoteLinks();
}
function updateElement(msg) {
    if (typeof (catName) == 'undefined') { refreshPage(0); }
    $(elementToChange).val("Default");
    $('#hfCurrentDefaultCat').val(catName);
}

/* Cart & Financial Fund Account validation and confrimation handling functions
*********************************************************************************************************************************/
function confirmDeposit(event, elem) {
    if ($(elem).attr("confirmed") == 'true') return true;
    if ($(elem).attr("id") == 'btnCCPayment') {
        if (!validateCartAddFunds()) return false;
    }
    else {
        if (!validateUCAddFunds()) return false;
    }
    var method = $("#hfMethod").val();
    if (method && method != "fundAccount") //possible values = "card" "account" and "fundAccount"
        return true;
    var msg = "Are you sure you want to save this card in your account ";
    var title = "Save Card";
    if ($('#cbUCACJustAddCard').is(':checked')) {
        msg += $('span', $('#cbUCACStoreMyCard').next()).text();
    }
    else {
        var ccFeePercentage = $("#lblCcProcessingFee").text();
        var fundsToAdd = $("#depositAmount").val();
        var ccFee = fundsToAdd * ccFeePercentage / 100;
        msg = "Your card will be charged for: $" + parseFloat(fundsToAdd).toFixed(2);
        msg += "<br>" + ccFeePercentage + " % credit card processing fee: $" + parseFloat(ccFee).toFixed(2);
        msg += "<br>Total funds that will be added : $" + parseFloat((fundsToAdd - ccFee)).toFixed(2);
        title = "Add Funds";
    }
    clickConfirm(event, elem, title, msg, 'Yes', 'No', null, true);
    return false;
}

function confirmAction(event, elem) {
    if ($(elem).attr("confirmed") == 'true') return true;
    if ($(elem).attr("id") == 'btnCCPayment') {
        if (!validateCartAddFunds()) return false;
    }
    else {
        if (!validateUCAddFunds()) return false;
    }
    var method = $("#hfMethod").val();
    if (method && method != "fundAccount") //possible values = "card" "account" and "fundAccount"
        return true;
    var msg = "Are you sure you want to Add this card to your account ";
    var title = "Add Card";
    msg += $('span', $('#cbUCACStoreMyCard').next()).text();
    clickConfirm(event, elem, title, msg, 'Yes', 'No', null, true);
    return false;
}

var cartStatusLoadTimeOut = null, cartStatusUnloadTimeOut = null;
function doReceiptPageBeforeLoad() {
    setCookie("terms", "y", -15);
    setCookie("private", "y", -15);
    clearTimeout(cartStatusLoadTimeOut);
    if ($('.cartStatus:visible').length > 0)
        $('.cartStatus').hide();
}

/*$(document).ready()
*********************************************************************************************************************************/
$(document).ready(function () {
    $('body').on('change', 'input[name=rlAskForAll]', function () {
        acceptPushRadioChanged(this); // in pushin.aspx
    });
    $('body').on('blur', '.initialText', function () {
        showMyContents(this);
    });
    $('body').on('focus', '.initialText', function () {
        clearMyContents(this);
    });

    if (document.location.pathname.toLowerCase().indexOf('receipt.aspx') >= 0)
        doReceiptPageBeforeLoad();
    //Table row selection bindings
    //    bindTablesWithSelectableRows();

    //Bind all checkboxes on tables to have checkall functionality
    bindCheckAll();
    // All dropdown lists change handling functions
    $("select[id$='ddlSan']").change(function () { //ddlSan Change
        setVars(this);
        var v = this.value;
        callPageMethod("/cart/Default.aspx/updateSan", { cartItemID: cartItemID, numDomains: v }, successFunc);
    });
    $("select[id$='ddlMultiServer']").change(function () { //ddlMultiServer Change
        setVars(this);
        var v = this.value;
        callPageMethod("/cart/Default.aspx/updateMultiServer", { cartItemID: cartItemID, numServers: v }, successFunc);
    });
    $("select[id$='ddlUpgrade']").change(function () { //ddlUpgrade Change
        setVars(this);
        var v = this.value;
        if (bundleID != "0")
            callPageMethod("/cart/Default.aspx/updateUpgradeBundle", { bundleID: bundleID, add: v }, successFunc);
        else
            callPageMethod("/cart/Default.aspx/updateUpgrade", { cartItemID: cartItemID, add: v }, successFunc);
    });
    $("select[id$='ddlPrivacyProtection']").change(function () { //ddlPrivacyProtection Change
        setVars(this);
        var v = this.value;
        if (bundleID != "0")
            callPageMethod("/cart/Default.aspx/updatePrivacyBundle", { bundleID: bundleID, add: v }, successFunc);
        else
            callPageMethod("/cart/Default.aspx/updatePrivacy", { cartItemID: cartItemID, add: v }, successFunc);
    });
    $("select[id*='ddlYears']").change(function () { //ddlYears Change
        setVars(this);
        numYears = this.value;
        if (bundleID != "0")
            callPageMethod("/cart/Default.aspx/updateBundleYears", { numYears: numYears, bundleID: bundleID }, successFunc);
        else
            callPageMethod("/cart/Default.aspx/updateYears", { numYears: numYears, cartItemID: cartItemID }, successFunc);
    });

    $("select[id*='ddlRenew']").change(function () {
        setVars(this);
        var autoRenew = this.value;
        if (bundleID != "0")
            callPageMethod("/cart/Default.aspx/updateBundleRenew", { autoRenew: autoRenew, bundleID: bundleID }, successFuncError);
        else
            callPageMethod("/cart/Default.aspx/updateRenew", { autoRenew: autoRenew, cartItemID: cartItemID }, successFuncError);
    });

    $("select[id*='ddlCategory']").change(function () {
        setVars(this);
        var catID = this.value;
        if (bundleID != "0")
            callPageMethod("/cart/Default.aspx/updateBundleCategory", { catID: catID, bundleID: bundleID }, successFuncError);
        else
            callPageMethod("/cart/Default.aspx/updateCategory", { catID: catID, cartItemID: cartItemID }, successFuncError);
    });

    // All dropdown lists Reset handling functions
    $("a[id*='lbUpgradeReset']").each(function (indx) {
        $(this).attr("confirm-title", "Reset Upgrade?");
        $(this).attr("confirm-yes", "Reset");
        $(this).attr("confirm-no", "Cancel");
        $(this).attr("confirm-message", "This will reset all items in this bundle to NOT HAVE upgrade.<br /><br />Are you sure you want to continue?");
        $(this).click(function (event) {
            event = event || window.event;
            event.preventDefault();
            divToHide = $(this).parent();
            setVars(divToHide);
            valToSelect = "1";
            control = $(tblRow).find("[id*='ddlUpgrade']");
            control2 = $(tblRow).find("[id*='lblUpgrade']");
            callPageMethod("/cart/Default.aspx/updateUpgradeBundle", { bundleID: bundleID, add: "false" }, successFunc);
        });
    });

    $("a[id*='lbPrivacyReset']").each(function (indx) {
        $(this).attr("confirm-title", "Reset Privacy?");
        $(this).attr("confirm-yes", "Reset");
        $(this).attr("confirm-no", "Cancel");
        $(this).attr("confirm-message", "This will reset all items in this bundle to have Privacy Protection ON.<br /><br />Are you sure you want to continue?");
        $(this).click(function (event) {
            event = event || window.event;
            event.preventDefault();
            divToHide = $(this).parent();
            setVars(divToHide);
            valToSelect = "1";
            control = $(tblRow).find("[id*='ddlPrivacyProtection']");
            control2 = $(tblRow).find("[id*='lblPrivacy']");
            callPageMethod("/cart/Default.aspx/updatePrivacyBundle", { bundleID: bundleID, add: "true" }, successFunc);
        });
    });

    $("a[id*='lbYearsReset']").each(function (indx) {
        $(this).attr("confirm-title", "Reset Years?");
        $(this).attr("confirm-yes", "Reset");
        $(this).attr("confirm-no", "Cancel");
        $(this).attr("confirm-message", "This will reset all items in this bundle to 1 year<br /><br />Are you sure you want to continue?");
        $(this).click(function (event) {
            event = event || window.event;
            event.preventDefault();
            divToHide = $(this).parent();
            setVars(divToHide);
            valToSelect = "1";
            control = $(tblRow).find("[id*='ddlYears']");
            control2 = $(tblRow).find("[id*='lblYears']");
            callPageMethod("/cart/Default.aspx/updateBundleYears", { numYears: "1", bundleID: bundleID }, successFunc);
        });
    });


    $("a[id*='lbRenewReset']").each(function (indx) {
        $(this).attr("confirm-title", "Reset Auto Renew?");
        $(this).attr("confirm-yes", "Reset");
        $(this).attr("confirm-no", "Cancel");
        $(this).attr("confirm-message", "This will reset Auto Renew on all domains and turn them all to ON<br /><br />Are you sure you want to do this?");
        $(this).click(function (event) {
            event = event || window.event;
            divToHide = $(this).parent();
            setVars(divToHide.parent());
            control = $(tblRow).find("[id*='ddlRenew']");
            control2 = $(tblRow).find("[id*='lblRenew']");
            callPageMethod("/cart/Default.aspx/updateBundleRenew", { autoRenew: "true", bundleID: bundleID }, resetSuccessFunc);
        });
    });

    $("a[id*='lbCategoryReset']").each(function (indx) {
        $(this).attr("confirm-title", "Reset Category?");
        $(this).attr("confirm-yes", "Reset");
        $(this).attr("confirm-no", "Cancel");
        $(this).attr("confirm-message", "This will reset all items in this bundle to current default category (" + $("#hfCatName").val() + ")");
        $(this).click(function (event) {
            event = event || window.event;
            divToHide = $(this).parent();
            setVars(divToHide);
            control = $(tblRow).find("[id*='ddlCategory']");
            control2 = $(tblRow).find("[id*='lblCategory']");
            divToHide = $(tblRow).find("[id='divCategoryNav']"); ;
            callPageMethod("/cart/Default.aspx/updateBundleCategory", { catID: -2, bundleID: bundleID }, resetSuccessFunc);
        });
    });

    // Copy Domains handling functions

    $('body').on('click', '.copyDomains', function (e) {
        e.preventDefault();
        copyDomains($(this));
    });
    // copy domains in BundleEdit - No need to go Ajax
    $("#hlCopyItems").click(function () {
        if (!isTableItemSelected("#tblCheckAllCart")) return false;
        var domainList = new Array();
        var msg = {};
        $("#tblCheckAllCart tbody tr").each(function () {
            var cb = $(this).find("[id*='cbSelect']");
            if ($(cb).is(":checked")) {
                domainList.push($(this).find("[id*='ItemDisplayName']").text());
            }
        });
        msg.d = domainList;
        displayResults(msg);
    });
    $('body').on("click", "#hlCopyItemsTI", function (e) {
        e.preventDefault();
        var selectedItems = getSelectedRows("#tblCheckAllPendingRequests");
        if (selectedItems.length < 1) return false;
        var domainList = new Array();
        var msg = {};
        $(selectedItems).each(function () {
            domainList.push($(this).find("[id*='lblDomain']").text());
        });
        msg.d = domainList;
        displayResults(msg);
    });

    $("#hlCopy").click(function () {
        if (!isTableItemSelected("#tblCheckAllCart")) return false;
        var bundleIDs = new Array();
        var itemIDs = new Array();
        $("#tblCheckAllCart tbody tr").each(function () {
            cartItemID = $(this).find("[id*='hfItemID']").val();
            bundleID = $(this).find("[id*='hfBundleID']").val();
            var cb = $(this).find("[id*='cbSelect']");
            if ($(cb).is(":checked")) {
                if (bundleID != "0")
                    bundleIDs.push(bundleID);
                else
                    itemIDs.push(cartItemID);
            }
        });
        callPageMethod("/cart/Default.aspx/getDomainNames", { itemIDs: itemIDs, bundleIDs: bundleIDs }, displayResults);
    });
    $("#hlCopyNew").click(function () {
        if (!isCartItemSelected()) return false;
        var bundleIDs = new Array();
        var itemIDs = new Array();
        var div;

        $(selectedCartItemsArray).each(function () { // selectedCartItemsArray gets set in isCartItemSelected()
            div = $(this).closest('div.cartitem');
            cartItemID = div.find("[id*='hfItemID']").val();
            bundleID = div.find("[id*='hfBundleID']").val();
            if (bundleID != "0")
                bundleIDs.push(bundleID);
            else
                itemIDs.push(cartItemID);
        });
        callPageMethod("/cart/Default.aspx/getDomainNames", { itemIDs: itemIDs, bundleIDs: bundleIDs }, displayResults);
    });


    // When clicking on the button close or the mask layer the popup closed
    $('a.close, #mask').on('click', function () {
        $('#mask, #divLogin').fadeOut(300, function () {
            $('#mask').remove();
        });
        return false;
    });

    // Funded Account handling functions
    $("#hfTransactionType").val("");

    // bindFinancials

    bindFinancials();

    // Account divs handling functions
    //    $("#divAccountOverview").load("/account/iframes/AcctOverview.aspx");
    //    $("#divFinancials").load("/account/iframes/Financials.aspx");
    //    $("#divLinkedAccounts").load("/account/iframes/LinkedAccounts.aspx");

    $(".ajax__tab_inner").click(function () { // synchronize account balance on financials and general tab 
        if ($(this.children[0]).text() == "General" && $("#lblBalanceFinancials").text().substr(1, $("#lblBalanceFinancials").text().length) > 0)
            $("#lblBalanceGeneral").text($("#lblBalanceFinancials").text());
    });

    // Displays popup message if hfMsg || hfIframeMsg is not empty
    var msg = $("#hfMsg").val();
    var msgTitle = $("#hfMsgTitle").val();
    if (msg != null && msg != "") {
        if (msgTitle != null && msgTitle != "")
            showCartAlert(msg, msgTitle);
        else
            showCartAlert(msg);
    }
});                                 //document.ready Ends

/*This function displays alerts in Tony's new dialogs - Called from anywhere and replaces Javascript alert() 
*********************************************************************************************************************************/
function showCartAlert(msg, heading, btnTxt, onClick, buttons /*should be <input type='button'>*/) {
    btnTxt = btnTxt || "Close";
    onClick = onClick || "return false;";
    onClick = onClick.replace(/"/g, "&quot");
    var btnHtml = "";
    if (buttons)
        btnHtml = buttons.join();
    heading = heading ? heading : "";
    $('#thePopup').data('newWidth', '400');
    simplePopup("<div id='divForm' class='frr frON cCategory'>" +
        "<div class='boxCategory'><div class='boxON' style='text-align:center'><span style='text-size:13px'>" + msg +
        "</span><br><br>" + btnHtml + "<span style='margin-left:8px;'>" + createButton(btnTxt, onClick) + "</span><br><br></div></div></div>", heading, 'Close');
}

function createButton(btnTxt, onClick) {
//    var popHideClass = onclick != null ? "" : "popupHide";
    onClick = onClick || "return false;"
    return "<input type=submit class='button30 orange animateButton popupHide' value='" + btnTxt + "' onclick=\"" + onClick + "\"></input>";
}

/*Sets hidden field hfLinkID for linkAccountID to post back for account switching
*********************************************************************************************************************************/
function setLinkID(val) {
    //alert(val);
    document.getElementById('hfLinkID').value = val;
    return true;
}

/*new card entry handling functions in account/settings/financials
*********************************************************************************************************************************/
function bindFinancials(target) {
    // Cards RadioButtonlist in payment.aspx change handling functions (also addFunds in Financials)
    if (!target || !($(target + ' #hfIFrameMsg').length > 0 && $(target + ' #hfIFrameMsg').val() != ""))
        if (typeof setNewCardEntryDisplay != "undefined") setNewCardEntryDisplay(); //In v3.js
        $("#rblCardsOnFile input").change(function () {
            if ($(this).val() == "new") {
                $('#cardContinueBtn').removeClass("shown").addClass("hidden");
                $('#btnAddNewCc_wrap').removeClass("hidden").addClass("shown");
                $("#divNewCardEntry").slideDown();
            }
            else {
                $('#cart_payment_token').val($(this).val());
                $("#divNewCardEntry").slideUp(250, function() {
                    $('#cardContinueBtn').removeClass("hidden").addClass("shown");
                    $('#btnAddNewCc_wrap').removeClass("shown").addClass("hidden");    
                });                
            }
        });
    cleanLinks();
    bindCCAddressDiffer();
    checkIframeMsg(target, true);    
    if (typeof ajaxTabsGrayInit != "undefined") ajaxTabsGrayInit();
    if ($('.panel_CConFile').length > 0) setFinancialActiveTab();
}
function launchAddCardControl() {
    var cardLauncher = $('a.addCardLink');
    if (cardLauncher.length > 0) cardLauncher.trigger("click");
}

function setFinancialActiveTab() {
    var mode = $('#hfFinancialMode').val();
    switch (mode) {
        case "cardOnFile":
            $('#spanCardOnFile_innerTab').addClass("ajax__tab_active").click().siblings().removeClass("ajax__tab_active");
            $('.panel_CConFile').addClass("active").siblings().removeClass("active");
            break;
        case "addFunds":
            $('#spanAddFunds_innerTab').addClass("ajax__tab_active").click().siblings().removeClass("ajax__tab_active");
            $('.panel_AddFunds').addClass("active").siblings().removeClass("active");
            break;
        case "faHistory":
            $('#spanFaHistory_innerTab').addClass("ajax__tab_active").click().siblings().removeClass("ajax__tab_active");
            $('.panel_FAHistory').addClass("active").siblings().removeClass("active");
            break;
        default:
            $('#spanOrderHistory_innerTab').addClass("ajax__tab_active").click().siblings().removeClass("ajax__tab_active");
            $('.panel_OrderHistory').addClass("active").siblings().removeClass("active");
            break;
    }
}
function setCountries(target) {
    target = target || 'body';
    var countryToSet = $('.country', target).val();
    var regionToSet = $('.state', target).val();
    setCountriesAndRegions();
}

function bindCCAddressDiffer() {
    $("#ccAddrDiffer").bind({ click: function () { $("#divAddress").slideToggle(); } });
    $("#ccUCACAddrDiffer").bind({
        click: function () {
            if ($(this).is(':checked')) {
                if ($("div#divUCACAddress").closest('div.panel_AddFunds').length > 0)
                    $('#hfAddFundsMode').val("address");
                else
                    $('#hfCardOnFileMode').val("address");
                $("#divUCACAddress").slideDown();
            }
            else {
                if ($("div#divUCACAddress").closest('div.panel_AddFunds').length > 0)
                    $('#hfAddFundsMode').val("card");
                else
                    $('#hfCardOnFileMode').val("card");
                $("#divUCACAddress").slideUp();
            }
        }
    });
}

function toggleUid(elem) {
    var divUid = document.getElementById("divUid");
    if ($(elem).is(":checked"))
        divUid.style.visibility = "inherit"; 
   else
       divUid.style.visibility = "hidden";
}

/*Implementation of checkall functionality for tables 
*********************************************************************************************************************************/

function bindCheckAll(target) { //Check or uncheck All checkboxes
    /*$("table[id*='tblCheckAll'] input[id*='cbCheckAll']:checkbox").each(function () {
        if ($(this).data('events')) {
            var $elem = $(this);
            $.each($(this).data('events'), function () {
                if (!$(this)[0].handler.toString().indexOf("bindCheckAll") >= 0)
                    bindCBCheckAll($elem);
            });
        }
        else
            bindCBCheckAll(this);
    });

    //If all cbSelect boxes are selected then cbCheckAll needs to be checked otherwise unchecked
    $("table[id*='tblCheckAll'] input[id*='cbSelect']").each(function () {
        if ($(this).data('events')) {
            var $elem = $(this);
            $.each(!$(this).data('events'), function () {
                if ($(this)[0].handler.toString().indexOf("bindcbSelect") >= 0)
                    bindCBSelect($elem);
            });
        }
        else
            bindCBSelect(this);
    });*/
    if (target) {
        var hr = $('form hr', target);
        if (hr.length > 0) $(hr[hr.length - 1]).remove();
    }
    cleanLinks();
    bindTablesWithSelectableRows();
    if ($('#divOBTResultsOverlay').length > 0)
        getCompletedOBTransfers();
    checkIframeMsg(target);
    updateTransferCounts();
    if ($('#pushOutOverlay').length > 0 && $('#hfShowPushOutPopup').val() == "true")
        showInPopup('#pushOutPopup', '#pushOutOverlay');

    if (target && target.indexOf("PushIn") > 0 && typeof(updatePushStatus) == "function")
        updatePushStatus();

    $('.obt_approve_transfers').click(function (e) {
        e.preventDefault();
        $('#ddlActions').val('approve').change();
    });
}
function showInPopup(popupID, overlayID) {
    makePopup(popupID, overlayID);
    formatPopups();
}

function cleanLinks() {
    $('.ma_transfers a[href="../controls/#"]').attr('href', '#');
}
function checkIframeMsg(target, closePopup) {
    var msg;
    var title;
    var $msgFld = $(target + ' #hfIFrameMsg');
    var $titleFld = $(target + ' #hfIFrameMsgTitle');
    if ($msgFld.length > 0 && $msgFld.val().length > 0) {
        msg = $msgFld.val();
        title = $titleFld.val();
        $msgFld.val("");
        showCartAlert(msg, title);
    }
    else if (target == "#divBilling") {
        var pup = null;
        $('#overlay').each(function () {
            pup = $(this);
            if ($('.popup h3:contains(Delete)', pup).length > 0)
                $('a.x', pup).trigger("click");
        });
    }
}
function updateTransferCounts() {
    if ($('#hfInboundTransferCount').length < 1 || $('#hfOutboundTransferCount').length < 1 || $('#hfInboundPushCount').length < 1 || $('#hfOutboundPushCount').length < 1)
        return;
    var tot = cnt = highest = 0;

    cnt = $('#hfInboundTransferCount').val();
    if (cnt != "0") {
        $('#spanInboundTransferCount').text("(" + cnt + ")");
        highest = cnt = parseInt(cnt);
        tot += cnt;
    } else $('#spanInboundTransferCount').text("");
    $('#hfTransferActiveTab').val("ti");

    var cnt = $('#hfOutboundTransferCount').val();
    if (cnt != "0") {
        $('#spanOutboundTransferCount').text("(" + cnt + ")");
        cnt = parseInt(cnt);
        tot += cnt;
    } else $('#spanOutboundTransferCount').text("");
    if (typeof cnt === "number" && cnt > highest) {
        highest = cnt;
        $('#hfTransferActiveTab').val("to");
    }

    cnt = $('#hfInboundPushCount').val();
    if (cnt != "0") {
        $('#spanInboundPushCount').text("(" + cnt + ")");
        cnt = parseInt(cnt);
        tot += cnt;
    } else $('#spanInboundPushCount').text("");
    if (typeof cnt === "number" && cnt > highest) {
        highest = cnt;
        $('#hfTransferActiveTab').val("pi");
    }

    cnt = $('#hfOutboundPushCount').val();
    if (cnt != "0") {
        $('#spanOutboundPushCount').text("(" + cnt + ")");
        cnt = parseInt(cnt);
        tot += cnt;
    } else $('#spanOutboundPushCount').text("");
    if (typeof cnt === "number" && cnt > highest) {
        highest = cnt;
        $('#hfTransferActiveTab').val("po");
    }

    cnt = $('#hfPendingDeleteCount').val();
    if (cnt != "0") {
        $('#pendingDeleteCount').text(" (" + cnt + ")");
        cnt = parseInt(cnt);
        tot += cnt;
    } else $('#pendingDeleteCount').text("");
    if (typeof cnt === "number" && cnt > highest) {
        highest = cnt;
        $('#hfTransferActiveTab').val("pd");
    }

    if (tot > 0)
        $('#spanMainTransferCount').text("(" + tot + ")");
    else
        $('#spanMainTransferCount').text("");
}
function setTransferActiveTab() { //Not being used at this time. Remove hfTransferActiveTab with it if decide to remove  - zubair 02-13-2013 
    var mode = $('#hfTransferActiveTab').val(), tab;
    switch (mode) {
        case "to":
            var tab = $('#TransfersOut_tab');
            if (!tab.hasClass("ajax__tab_active")) {
                tab.addClass("ajax__tab_active").click().siblings().removeClass("ajax__tab_active");
                $('#transfersout_div').addClass("active").siblings().removeClass("active");
            }
            break;
        case "pi":
            var tab = $('#PushIn_tab');
            if (!tab.hasClass("ajax__tab_active")) {
                tab.addClass("ajax__tab_active").siblings().click().removeClass("ajax__tab_active");
                $('#pushin_div').addClass("active").siblings().removeClass("active");
            }
            break;
        case "po":
            var tab = $('#PushOut_tab');
            if (!tab.hasClass("ajax__tab_active")) {
                tab.addClass("ajax__tab_active").siblings().click().removeClass("ajax__tab_active");
                $('#pushout_div').addClass("active").siblings().removeClass("active");
            }
            break;
        case "pd": //pending delete
            var tab = $('#PendDel_tab');
            if (!tab.hasClass("ajax__tab_active")) {
                tab.addClass("ajax__tab_active").siblings().click().removeClass("ajax__tab_active");
                $('#penddel_div').addClass("active").siblings().removeClass("active");
            }
            break;
        default:
            $('#TransfersIn_tab').addClass("ajax__tab_active").siblings().removeClass("ajax__tab_active");
            $('#transfersin_div').addClass("active").siblings().removeClass("active");
            break;
    }
}

function setSpanCopyItems(chkd) {
    if ($("#spanCopyItems")) {
        if (chkd > 0)
            $("#spanCopyItems").show();
        else
            $("#spanCopyItems").hide();
    }
}

function bindCBSelect(elem) {
    $(elem).click(function () {
        var fn = "bindcbSelect";
        var tbl = $(this).closest('table');
        var all = 0;
        $(tbl).find("input[id*='cbSelect']:checkbox").each(function () {
            if (!this.isDisabled)
                all += 1;
        });
        var chkd = $(tbl).find("input[id*='cbSelect']:checkbox:checked").size();
        setSpanCopyItems(chkd);
        if (all == chkd)
            $(tbl).find("input[id*='cbCheckAll']:checkbox").attr("checked", true);
        else
            $(tbl).find("input[id*='cbCheckAll']:checkbox").attr("checked", false);
    });
}
function bindCBCheckAll(elem) {
    $(elem).removeAttr("checked");
    $(elem).click(function () {
        var fn = "bindCheckAll";
        var tbl = $(this).closest('table');
        if ($(this).is(":checked")) {
            $(tbl).find("input[id*='cbSelect']:checkbox").each(function () {
                if (!this.isDisabled)
                    $(this).attr("checked", true);
            });
            setSpanCopyItems(1);
        }
        else {
            $(tbl).find("input[id*='cbSelect']:checkbox").each(function () {
                if (!this.isDisabled)
                    $(this).attr("checked", false);
            });
            setSpanCopyItems(0);
        }
    });
}

/* copy Domains in the cart
*********************************************************************************************************************************/
$('#copySelectedDomains').click(function (e) {
    e.preventDefault();
    copyToClipboard(selectedDomainsListArray.join('\n'));
});

/*Globals
*********************************************************************************************************************************/
function showHideElements(elemToShow, elemToHide) {
    if (elemToShow && elemToShow != "") {
        if (typeof elemToShow == "string") {
            $('#' + elemToShow).show();
        }
        else {
            for (i in elemToShow)
                $('#' + elemToShow[i]).show();
        }
    }

    if (elemToHide && elemToHide != "") {
        if (typeof elemToHide == "string") {
            $('#' + elemToHide).hide();
        }
        else {
            for (i in elemToHide)
                $('#' + elemToHide[i]).hide();
        }
    }
}
function redirectTo(path) {
    window.location = path;
}
function slideMeUp(e) {
    $(e).slideUp();
    return false;
}
function slideMyDivUp(e) {
    var elem = $(e).closest('div');
    return slideMeUp(elem);
}
function closeDiv(e) {
    var elems = e.split(' ');
    $(elems).each(function () { 
        var el = $(this.toString());
        el.closest('div').hide();
        if ($("#msgDiv"))
            $("#msgDiv").hide();
    });
}
function hideMe(elem) {
    $(elem).fadeOut("slow");
    return false;
}
function removeMe(elem) {
    hideMe(elem);
    setTimeout($(elem).remove(), 6000);
    return false;
}
function clearMyContents(elem) {
    var textToMatch = $(elem).attr('initialtext');
    if ($.trim($(elem).val()) == $.trim(textToMatch)) {
        $(elem).val("").css('color', 'inherit');
    }
}
function showMyContents(elem, textToShow) {
    var textToShow = $(elem).attr('initialtext');
    if ($.trim($(elem).val()) == '')
        $(elem).val(textToShow).css('color', 'grey');
}
function showBusy(elem, noOverWrite) {
    if (elem) {
        var parentDiv = $('#' + elem).parent('div');
        var r = Math.round(Math.random()*10000);
        $('#' + elem).hide();
        $("<div style='text-align:center; margin:auto; margin-top:2em'><img src='/images/loading_anim.gif' border='0'></div>").insertBefore(parentDiv);
        ScrollIntoView(parentDiv, null, true);
    }
}
var showBusyTimer;
function showBusyBefore(elem, hideElem) {
    if ($('#busyDiv').length > 0)
        $('#busyDiv').remove();
    hideElem = hideElem || true;
    $("<div id='busyDiv' style='text-align:center; margin:auto'><img src='/images/loading_anim.gif' border='0'></div>").insertBefore($(elem));
    if (hideElem)
        $(elem).hide();
//    var r = Math.round(Math.random() * 10000);
//    $("<div id='busyDiv' style='text-align:center; margin:auto'><img src='/images/loading_anim.gif?r=" + r + "' border='0'></div>").insertBefore($(elem));
}
function removeBusy(elem) {
    if ($('#busyDiv').length > 0)
        $('#busyDiv').remove();
    if (elem)
        $(elem).show();
    if (!showBusyTimer) return;

    clearTimeout(showBusyTimer);
    var overlay = $('[id*="verlay"]');
    if (overlay && overlay.length > 0) {
        overlay.each(function () {
            var div = $(this);
            if (div.is(':visible')) {
                var cancelLnk = $('a.x', div);
                if (cancelLnk && cancelLnk.length > 0) cancelLnk.trigger("click");
            }
        });
    }
}


/*Field Validation
*********************************************************************************************************************************/

function isValidCardNum(ccNum) {
    var sum = 0, digit = 0, len = ccNum.length, cntr = len - 1;
    if (isNaN(ccNum) || len > 16 || len < 13) return false;
    if (ccNum == "5105105105105100") return true;
    for (i = len - 1; i >= 0; i--) {
        digit = parseInt(ccNum[i]);
        if (i % 2 == len % 2) {
            digit = digit * 2;
            if (digit > 9)
                digit = (digit % 10) + 1;
            sum += digit;
        }
        else
            sum += digit;
    }
    return (sum % 10 == 0);
}


/*Text Field*/
var err = false,
    monthErr = false,
    yearErr = false,
    msgTitle = "Validation Failed",
    msgTxt = "Please check and correct all fields with red border.",
    msgType = 0 // 0 = addValidationMsg - 1 = CartAlert - 2 = both;
function addValidationMsg(elem, msg) {
    if (msgType > 0) {
        if (msg == "Required") msg = msgTxt;
        setTimeout(function () { showCartAlert(msg, msgTitle) }, 50);
        if (msgType == 1) {
            return !(err = true); //return false
        }
    }
    if ($(elem).siblings('.validationMsg').length < 1)
        $(elem).parent().append("<span class='validationMsg' style='color:red; margin-left:5px; display:inline-block'>" + msg + "</span>");
    return !(err = true); //return false
}
function removeValidationMsg(elem) {
    if ($(elem).siblings('.validationMsg').length > 0)
        $(elem).siblings('.validationMsg').remove();
}
function validateCountryState(elem) {
    removeValidationMsg(elem);
    var hasVal = true;
    $(elem).each(function () {
        var e = $(this);
        e.val(e.val().trim());
        var v = e.val();
        if (v.length == 0) hasVal = false;
    });
    if (!hasVal)
        return addValidationMsg(elem, "Required");
    return true;
}
function validateRequiredField(elem) {
    removeValidationMsg(elem);
    $(elem).val($(elem).val().trim());
    var v = $(elem).val();
    if (v.length > 0 && v != '0') { return true; }
    return addValidationMsg(elem, "Required");
}
function validateRequiredNumField(elem) {
    if (!validateRequiredField(elem)) return false;
    if (isNaN($(elem).val()))
        return addValidationMsg(elem, "Must be a Number");
    return true;
}
function validateRequiredPositiveAmount(elem) {
    if (!validateRequiredNumField(elem)) return false;
    var v = parseFloat($(elem).val());
//    if (v < 0)
//        return addValidationMsg(elem, "Must be a positive amount");
    if (v < minD || v > maxD)
        return addValidationMsg(elem, "Must be between $" + minD + ".00 and $" + maxD + ".00");
    return true;
}
function validateRequiredFieldLength(elem, max, min) {
    if (!validateRequiredField(elem)) return false;
    return validateFieldLength(elem, max, min);
}
function validateRequiredNumFieldLength(elem, max, min) {
    if (!validateRequiredNumField(elem)) return false;
    return validateFieldLength(elem, max, min);
}
function validateFieldLength(elem, max, min) { //This method shouldbe considered private and should only be called by other validation methods
    min = min || 1;
    $(elem).val($(elem).val().trim());
    var elemLength = $(elem).val().length;
    if (elemLength >= min && elemLength <= max) return true;
    return addValidationMsg(elem, "Must be from " + min + " to " + max + " Characters");
}
function validateRequiredCCField(elem) {
    if (!validateRequiredNumField(elem)) return false;
    if (!isValidCardNum($(elem).val()))
        return addValidationMsg(elem, "Invalid Card Number");
    return true;
}
function validateRequiredMonthField(elem) {
    var month = $(elem).val();
    if (!validateRequiredNumField(elem)) return false;
    if (month < 1 || month > 12) {
        monthErr = true;
        return addValidationMsg(elem, "Month must be 1-12");
    }
    return true;
}
function validateRequiredYearField(elem) {
    if (monthErr) return false;
    var year = $(elem).val();
    if (!validateRequiredNumField(elem)) return false;
    if (year < 1 || year > 99) {
        yearErr = true;
        return addValidationMsg(elem, "Year must be 1-99");
    }
    return true;
}
function validateMonthYear(monthElem, yearElem) {
    monthErr = false;
    yearErr = false;
    if (!validateRequiredMonthField(monthElem) || !validateRequiredYearField(yearElem)) return false;
    var enteredMY = parseInt($(monthElem).val()) + (parseInt($(yearElem).val()) * 100);
    var d = new Date();
    //In JS Date Object January is 0, February is 1, and so on.
    var currentMY = (d.getMonth() + 1) + (parseInt(d.getFullYear().toString().slice(2)) * 100);
    if (enteredMY >= currentMY) return true;
    return addValidationMsg(monthElem, "Must be a Future Date");
}

function validateTextEntry(textFieldID, elemToShowBusy, elemToShow, elemToHide) {
    if ($('#' + textFieldID).val().length > 0) {
        showBusy(elemToShowBusy);
        return true;
    }
    showHide([elemToShow], [elemToHide]);
    return false;
}

function showHide(toShowIDsArray, toHideIDsArray) {
    if ($(toShowIDsArray).length > 0) {
        $(toShowIDsArray).each(function () {
            $('#' + this).show();
        });
    }
    if ($(toHideIDsArray).length > 0) {
        $(toHideIDsArray).each(function () {
            $('#' + this).hide();
        });
    }
}
function validateFinAddFunds() {
    msgType = 1;
    var field = $('.cbAgreeTerms input');
    if (!field.is(':checked')) {
        $('.cbAgreeTermsSpan').css('background-color', 'yellow');
        showCartAlert("You must agree to our Terms and Condition before placing order...", "Terms & Condition Agreement");
        return (err = false);
    }
    field = $('#txtAddFundsAmount');
    if (!validateRequiredPositiveAmount(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    if (!err) return true;
    return (err = false);
}
function validateUCAddFunds() {

    var msg = "Please check your entries in all the fields with red border";
    if ($('#divDepositAmount').is(':visible')) {
        var field = $('#depositAmount');
        if (!validateRequiredPositiveAmount(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    }
    if ($("#divNewCardEntry").is(":visible")) {
        field = $('#tbUCACFirstName');
        if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        field = $('#tbUCACLastName');
        if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        field = $('#tbUCACCCNum');
        if (!validateRequiredCCField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');

        var monthField = $('#tbUCACExpirationMonth');
        fixMonthFieldVal(monthField);
        var yearField = $('#tbUCACExpirationYear');
        if (!validateMonthYear(monthField, yearField))
            $([monthField, yearField]).each(function () { this.addClass('errorInput'); });
        else $([monthField, yearField]).each(function () { this.removeClass('errorInput'); });

        field = $('#tbUCACCVV');
        if (!validateRequiredNumFieldLength(field, 4, 3)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');

        if ($('#ccUCACAddrDiffer').is(':checked')) {
            field = $('#tbUCACCCAddress1');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('#tbUCACCity');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('[id*=tbUCACStates]');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('#tbUCACZip');
            if (!validateRequiredNumField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        }
    }
    if (!err) return true;
    showCartAlert(msg, "Validation Failed");
    return (err = false);
}

function validateCartAddFunds() {
    var filed = "";
    var msg = "Please check your entries in all the fields with red border";
    var method = $("#hfMethod").val();
    if (method && method == "card" && !$('#tbFirstName').is(':visible')) return true;
    if (method && method == "fundAccount") //possible values = "card" "account" and "fundAccount"
    {
        field = $('#depositAmount');
        //    if (!validateRequiredNumField(field)) $(field).addClass('validationFailed'); else $(field).removeClass('validationFailed');
        if (!validateRequiredPositiveAmount(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    }
    if ($('#tbFirstName').is(':visible')) {
        field = $('#tbFirstName');
        if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        field = $('#tbLastName');
        if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        field = $('#tbCCNum');
        if (!validateRequiredCCField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');

        var monthField = $('#tbExpirationMonth');
        fixMonthFieldVal(monthField);
        var yearField = $('#tbExpirationYear');
        if (!validateMonthYear(monthField, yearField))
            $([monthField, yearField]).each(function () { this.addClass('errorInput'); });
        else $([monthField, yearField]).each(function () { this.removeClass('errorInput'); });

        field = $('#tbCVV');
        if (!validateRequiredNumFieldLength(field, 4, 3)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');

        if ($('#cbAddrDiffer').is(':checked')) {
            field = $('#tbCCAddress1');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('#tbCity');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('input[id*=tbState], select[id*=tbState]');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('#tbZip');
            if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
            field = $('#tbCountry, #ddlCountry');
            if (!validateCountryState(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
        }
    }
    if (!err) return true;
    err = false;
    showCartAlert(msg, "Validation Failed");
    return false;
}
function fixMonthFieldVal(monthField) {
    var v = $(monthField).val().trim();
    if (v.length == 1) $(monthField).val("0" + v);
}

function validateUpdateCard(target, msgDiv) {
    var filed = "";
    var msg = "Please check your entries in all the fields with red border";
    field = $('.cvvTB', target);
    if (!validateRequiredNumFieldLength(field, 4, 3)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    var monthField = $('.expMonth', target);
    fixMonthFieldVal(monthField);
    var yearField = $('.expYear', target);
    if (!validateMonthYear(monthField, yearField))
        $([monthField, yearField]).each(function () { this.addClass('errorInput'); });
    else $([monthField, yearField]).each(function () { this.removeClass('errorInput'); });

    field = $('.firstName', target);
    if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    field = $('.lastName', target);
    if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    field = $('.address1', target);
    if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    field = $('.city', target);
    if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    field = $('.state', target);
    if (!validateRequiredField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    field = $('.zip', target);
    if (!validateRequiredNumField(field)) $(field).addClass('errorInput'); else $(field).removeClass('errorInput');
    if (!err) return true;
    err = false;
    if (msgDiv) $(msgDiv).html(msg).show();
    else showCartAlert(msg, "Validation Failed");
    return false;
}

/*Called form every Action DropDownlist on the tables with checkable items (all transfers)
*********************************************************************************************************************************/
var selectedCartItemsArray;
function isCartItemSelected() {
    selectedCartItemsArray = selectedCartItems();
    if (selectedCartItemsArray.length < 1) {
        showCartAlert("Please select one or more items in the cart first....", "No item(s) selected!")
        return false;
    }
    return true;
}
function selectedCartItems() {
    return $('div.cartitem input[id$=cbSelect]:checked');
}
function isItemSelected(tableID, ddl) { 
    if ($("#" + tableID + " tbody :checkbox:checked").length < 1) {
        showCartAlert("Please select one or more items from the table first....", "No item(s) selected!")
        $(ddl).val('select');
        return false;
    }
    return true;
}

var allRowsSelected = false; //Global and Not thread safe - so immediate copy within local scope is recommended
function getSelectedRows(tableID) {
    var allRows = $(tableID + " tbody tr");
    var rows = new Array();
    allRows.each(function () {
        if ($(':checkbox', this).is(':checked'))
            rows.push(this);
    });
    allRowsSelected = allRows.length == rows.length && rows.length > 0;
    if (rows.length == 0)
        showCartAlert("Please select one or more items from the table first....", "No item(s) selected!")
    return rows;
}
function getTextFromRows(rows, fieldName, runTxt, maxNum, totCnt, showTotal) {
    if (!rows || rows.length == 0) return;
    var arry = [], txt = "", cntr = 0;
    showTotal = showTotal || false;
    runTxt = runTxt || true;
    totCnt = totCnt || rows.length;
    if (totCnt == 0) totCnt = rows.length;
    maxNum = maxNum || totCnt;
    $(rows).each(
        function () {
            if (runTxt)
                txt = $(this).find("[id*='" + fieldName + "']").text();
            else
                txt = $(this).find("[id*='" + fieldName + "']").val();
            arry.push(txt);
            if (++cntr > maxNum) return false;
        });
        var endingTxt = "";
        if (typeof totCnt != "number") totCnt = totCnt.replace(",", "") * 1;
        if (totCnt > maxNum) {
            endingTxt = "... and " + (totCnt - maxNum) + " more. (" + totCnt + " total)";
            if (showTotal)
                endingTxt += "<div style='text-align:center; margin:20px 0 -13px 0;'><span style='color:red; line-height:20px;'>There are " + totCnt + " domains in total that will be affected.  Please note pushes can take approximately 5 seconds per domain name.  We estimate this process will take <strong>APPROXIMATELY " + Math.round(totCnt * 5 / 60) + " minutes to complete</strong>.  (Rough estimate)</span></div>";
        }
    return arry.join(", ") + endingTxt;
}
/*Show/Hide funded account History in Financials Tab in My Account/Settings. 
**Also called by link in My Account/SETTINGS/General (Overview.aspx) 
*********************************************************************************************************************************/
function showFundedAccountHistory(showOnly) {
    if (showOnly || $('#lnkFundedAccountHistory').text() == "Funded Account History") {
        $('#lnkFundedAccountHistory').text("Card Management");
        $('#spanAddFundsLink').hide();
        $('#divFATransactions').show();
        $('#divCardManagement').hide();
    }
    else {
        $('#divFATransactions').hide();
        $('#divCardManagement').show();
        $('#spanAddFundsLink').show();
        $('#lnkFundedAccountHistory').text("Funded Account History");
    }
}
function editCard(cardInfo, info) {
    $('#hfCardOnFileMode').val("edit");
    var infoArray = info.split('|');
    $('#tbEditCVV').val("");
    $('#tbEditExpirationMonth').val("");
    $('#tbEditExpirationYear').val("");
    $('#tbEditFirstName').val(infoArray[1]);
    $('#tbEditLastName').val(infoArray[2]);
    $('#tbEditAddress1').val(infoArray[3]);
    $('#tbEditAddress2').val(infoArray[4]);
    $('#tbEditCity').val(infoArray[5]);
    $('#tbEditStates_dd').val(infoArray[6]);
    $('#tbEditZip').val(infoArray[7]);
    $('#tbEditCountry').val(infoArray[8]);
    $('#tbEditPhoneCode').val(infoArray[9]);
    $('#tbEditPhoneNum').val(infoArray[10]);

    $('#divCCOnFile').hide();
    $('#divAddFunds').hide();
    $('#divCardEdit').show();
    $('#lblMainCardInfo').text(cardInfo);
    $('#hfMainPaymentInfoId').val(infoArray[0]);
}
function cancelEditCard() {
    $('#hfCardOnFileMode').val("show");
    $('#divCCOnFile').show();
    $('#divAddFunds').hide();
    $('#divCardEdit').hide();
}


/* Domain renewal and Restore
*********************************************************************************************************************************/
var cartLink = "<br><input type='button' class='button30 orange animateButton' onclick='redirectTo(\"/cart/\"); return false;' value='View Cart' style='margin-right:1em'/>";
var renewalOrRestoreMsg = "",
    renewalOrRestoreMsgHeading = "",
    upgradeMsg = "",
    upgradeMsgHeading = "",
    privacyMsg = "",
    privacyMsgHeading = "";
function renew(domainName, catID) { //Single domain renewal
    var doms = new Array();
    doms.push(domainName);
    AddItemToCart(2, 0, doms, catID);
    return false;
}
function restore(domainName, catID) { //Single domain restore
    var doms = new Array();
    doms.push(domainName);
    AddItemToCart(3, 0, doms, catID);
    return false;
}
function upgradeDomains(domains) {
    AddItemToCart(50, 0, domains);
}
function addDomainPrivacy(domains) {
    AddItemToCart(51, 0, domains);
}

//function domainPrivacySuccess(msg) {
//    var rs = $.parseJSON(msg.d);
//    if (rs != null) {
//        $('#cartCount').text(parseInt($('#cartCount').text()) + 1);
//        showCartAlert('There was a problem adding some of the domains to receive Privacy Protection', privacyMsgHeading, null, null, [cartLink]);
//    }
//    else
//        showCartAlert(privacyMsg, privacyMsgHeading, null, null, [cartLink]);
//}

//function domainUpgradeSuccess(msg) {
//    var rs = $.parseJSON(msg.d);
//    if (rs != null) {        
//        $('#cartCount').text(parseInt($('#cartCount').text()) + 1);
//        showCartAlert('There was a problem adding some of the domains to be upgraded', upgradeMsgHeading, null, null, [cartLink]);
//    }
//    else
//        showCartAlert(upgradeMsg, upgradeMsgHeading, null, null, [cartLink]);
//}
//function domainRenewalSuccess(msg) {
//    var rs = $.parseJSON(msg.d);
//    if (rs) {
//        $('#cartCount').text(parseInt($('#cartCount').text()) + 1);
//        showCartAlert(renewalOrRestoreMsg, renewalOrRestoreMsgHeading,null,null, [cartLink]);
//    }
//    else
//        showCartAlert("This domain is already in your cart...", renewalOrRestoreMsgHeading, null, null, [cartLink]);
//}
var numDomains = 0;
function renewDomains(catID) {//multiple domain renewal
    if (catID == null) { catID = 0; }
    var domainList = [];
    $('#Dom input:checked').each(function () {
        domainName = $(this).val();
        domainList.push(domainName);
    });
    numDomains = domainList.length;
    if (numDomains == 0) { //-J
        simpleFormattedPopup('<div style="padding:20px; text-align:center;font-size:16px;">You need to select at least one domain.  Once you select a domain you will be able to use these links to manage the domain.</div>', 'No domains selected', null, null, null);
    } else {
        AddItemToCart(2, 0, domainList, catID);
        //callPageMethod("/Account/Controls/pageMethods.aspx/AddDomainRenewals", { domainList: domainList, catID: catID }, domainsRenewalSuccess);
    }
    return false;
}

//function domainsRenewalSuccess(msg) {
//    var rs = $.parseJSON(msg.d);
//    if (!rs) {
//        $('#cartCount').text(parseInt($('#cartCount').text()) + numDomains);
//        showCartAlert(numDomains + (numDomains > 1 ? " Domains were" : " Domain was") +
//                " successfully added to your cart for renewal...", "Domain Renewal", null, null, [cartLink]);
//        return;
//    }
//    var alertMsg = "";
//    var cnt = 0;
//    if (rs.alreadyExisting) {
//        cnt = rs.alreadyExisting.length;
//        if (cnt > 1)
//            alertMsg += "The following " + cnt + " domains already exist in your cart: <br>"
//        else
//            alertMsg += "The following " + cnt + " domain already exists in your cart: <br>"
//        $(rs.alreadyExisting).each(function () {
//            alertMsg += "<br>" + this;
//        });
//        alertMsg += "<br><br>";
//        numDomains = numDomains - cnt;
//    }

//    if (rs.overLimit) {
//        cnt = rs.overLimit.length;
//        if (cnt > 1)
//            alertMsg += "The following " + cnt + " domains were not added due to limit restrictions: <br>"
//        else
//            alertMsg += "The following " + cnt + " domain was not added due to limit restrictions: <br>"
//        $(rs.overLimit).each(function () {
//            alertMsg += "<br>" + this;
//        });
//        numDomains = numDomains - cnt;
//    }
//    $('#cartCount').text(parseInt($('#cartCount').text()) + numDomains);
//    showCartAlert(alertMsg, "Domain Renewal", null, null, [cartLink]);
//}

/* Admin Sales Specific Methods
*********************************************************************************************************************************/
function daysChanged() {
    var v = $('#tbNumDays').val();
    if (v == "" || v == "0") return;
    v = -v+1;
    setDate("#tbStart", addDays(v));
}

function increaseDate(startDate, endDate, arrow) {
    var dt = new Date($(startDate).val());
    dt = addDays(1, dt);
    setDate(startDate, dt);
    $(endDate).val($(startDate).val());
    if (isDateEqual(dt, new Date())) $(arrow).hide();
}
function decreaseDate(startDate, endDate, arrow) {
    var dt = new Date($(startDate).val());
    dt = addDays(-1, dt);
    setDate(startDate, dt);
    $(endDate).val($(startDate).val());
    $(arrow).show();
}
function isDateEqual(d1, d2) {
    d1 = d1.toDateString();
    d2 = d2.toDateString();
    return d1 == d2;
}
function setDate(elem, date) {
    var d = date || new Date();
    $(elem).val((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());
    //    $(elem).val(d.toDateString());
}
function addDays(numDays, date) {
    var d = date || new Date();
    d.setDate(d.getDate() + numDays);
    return d;
}
function addMonths(numMonths, date) {
    var d = date || new Date();
    d.setMonth(d.getMonth() + numMonths);
    return d;
}
function setSalesSearchParams() {
    var v = $('#tbNumDays').val();
    if (v != "" && v != "0") daysChanged();

}



/* Receipt Popup Methods
*********************************************************************************************************************************/
function receiptPopup(oid, url, title) {
    makeServerPopup(url, title, null, null, null, oid);
    return false;
}


/* Print Content Method
********************************************************************************************************************************
Usage: Anything wrapped in most outer print class will be taken and logo will be added on top. by default it removes all <a> tags, however
any links with the class "doNotRemove" will not be removed. Also any element with the class pf "removeFromPrint" will be removed.

-- added "ExtraCSS" to handle printing with additional CSS needed

Constraints:
The content needs to print should have the class of "print". The most outer "print" class will be taken
all <a> tags will be removed by default except for the ones with the class "doNotRemove"
any elements with the class "removeFromPrint" will be removed even if they contain the class "doNotRemove"
*/
function printThis(elem, extraCss) {
    var styles = $('link').clone();
    $.merge(styles, $('style').clone());
//    styles.push($('style').clone()[0]);
    if (extraCss != null) { styles.push($(extraCss).clone()[0]); }
    var arryOfPrint = $(elem).parents('.print');
    var mostOuterPrint;
    if (arryOfPrint.length > 0)
        mostOuterPrint = arryOfPrint[arryOfPrint.length - 1];
    else
        mostOuterPrint = $(elem).closest('.print');
    var pg = $(mostOuterPrint).clone();
    pg.find('a:not(".doNotRemove")').remove();
    pg.find('.removeFromPrint').remove();

    var head = $('<head></head>', { html: styles });
    var body = $('<body></body>');
    var logoDiv = $("<div style='margin-left:16px; height:80px'><img src='/images/logo_off.gif'></div>");
    body.append(logoDiv).append(pg.show());
    body.css('background', '#FFF');

    var newPg = $('<html></html>');
    newPg.append(head).append(body);


    var win = window.open();
    win.document.write('<html>' + $(newPg).html() + '<script type="text/javascript">setTimeout(function() { console.log("loaded"); window.print(); setTimeout(function() { window.close(); }, 0); }, 5); </script></html>');
    //win.document.write('<html>' + $(newPg).html() + '</html>');
    //setTimeout(function () {
    //    //win.document.close();
    //    win.focus();
    //    win.print();
    //    win.close();
    //}, 10);    
    //win.focus();
    //win.print();
    //win.close();

    //win.document.write('<html>' + $(newPg).html() + '</html>');        
//    console.log($(newPg).html());
    //self.focus();
//    win.document.open();
//    win.document.write('<html>' + $(newPg).html() + '<script>window.focus(); window.print(); window.close();</script></html>'); //window.close();
    //win.document.write('<html>' + $(newPg).html() + '<script>window.print(); setTimeout(function() { window.close(); },5);</script></html>'); //window.close();
    //win.document.close();
    //win.document.close();
}

/* Javascript cookie handling Methods
********************************************************************************************************************************
Please log all uses below
used to retain the state of agree to terms checkbox at checkout for 15 minutes
*/
function setCookie(c_name, value, exMins) {
    if (!exMins || exMins == 0) return;
    var d = new Date();
    d.setMinutes(d.getMinutes() + exMins);
    var c_value = escape(value) + "; expires=" + d.toUTCString() + ";path=/";
    document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


/* Table Row selection handling Methods
********************************************************************************************************************************
*/
function bindTablesWithSelectableRows() {
    var tbls = $("table.upDnSelect:not(.processed)");
    tbls.each(function (i, v) {
        var trs = $(v).children('tbody').children();
        if (trs.length < 6) {
            trs.find('a.up[title], a.dn[title]').not('parent.hoverable').hide();
            $(v).addClass('hiddenSelects');
        }
        else
            $(v).addClass('shownSelects');
        $(v).addClass('processed');
    });
    tbls.on('click', 'tbody tr td', function (e) {
        //        if ($(e.target).is('img')) return;
        var tgt = $(e.target),
            src = tgt.src;
        if (tgt.hasClass('help') || (src && src.indexOf('question') > 0)) return;
        tdClicked(e, $(this));
    });
    tbls.on('hover mouseover', 'tbody tr', function (e) {
        toggleHilite(e, $(this));
    });
    tbls.on('click', 'a.up[title]', function (e) {
        upSelectClicked(e, $(this));
    });
    tbls.on('click', 'a.dn', function (e) {
        downSelectClicked(e, $(this));
    });
    tbls.on('change', 'input[type=checkbox]', function (e) {
        cbChanged(e, $(this));
    });
}
function toggleHilite(e, tr) {
    if ($(tr).closest('table').hasClass('noHover')) return;
    var cb = $('input[type=checkbox]', tr);
    if (e.type == 'mouseenter' || e.type == 'mouseover')
        highLightTR(tr);
    else if (!cb.is(":checked"))
        unhighLightTR(tr);
}
function cbChanged(e, cb) {
    cb = $(cb);
    var tr = cb.closest('tr');
    if (cb.is(":checked"))
        selectTR(tr, cb);
    else {
        unselectTR(tr, cb);
    }
}
function tdClicked(e, td) {
    var tag = e.target.id.indexOf('cbSelect') >= 0;
    if (tag) {
        cbChanged(e, e.target);
        return;
    }
    var tgt = $(e.target),
        tagName = e.target.tagName,
        exempted = tgt.hasClass('notelink') || tgt.parent().hasClass('notelink')
            || tgt.hasClass('transferHelpPopup')
            || tgt.hasClass('whoisPopup') || (tagName == "A" && tgt.text() && tgt.text().trim().length > 0);

    if (tagName == "SELECT" || tagName == "INPUT" || exempted) return;
    var tr = $(td).parent();
    var cb = $('input[type=checkbox]', tr);
    if (cb.is(":checked"))
        unselectTR(tr, cb);
    else
        selectTR(tr, cb);
}
function upSelectClicked(e, aTag) {
    e.preventDefault();
    var tr = aTag.closest('tr');
    var cb = $('input[type=checkbox]', tr);
    if (cb.is(":checked")) {
        tr.prevAll(tr).each(function (i, v) {
            tr = $(v);
            cb = $('input[type=checkbox]', tr);
            unselectTR(tr, cb);
        });
    }
    else {
        tr.prevAll(tr).each(function (i, v) {
            tr = $(v);
            cb = $('input[type=checkbox]', tr);
            selectTR(tr, cb);
        });
    }
}
function downSelectClicked(e, aTag) {
    e.preventDefault();
    var tr = aTag.closest('tr');
    var cb = $('input[type=checkbox]', tr);
    if (cb.is(":checked")) {
        tr.nextAll(tr).each(function (i, v) {
            tr = $(v);
            cb = $('input[type=checkbox]', tr);
            unselectTR(tr, cb);
        });
    }
    else {
        tr.nextAll(tr).each(function (i, v) {
            tr = $(v);
            cb = $('input[type=checkbox]', tr);
            selectTR(tr, cb);
        });
    }
}
function selectTR(tr, cb) {
    if (typeof cb == undefined || $(cb).length == 0) return;
    highLightTR(tr);
    cb.attr('checked', 'checked');
    setTitle(tr, true);
}
function unselectTR(tr, cb) {
    unhighLightTR(tr);
    cb.removeAttr('checked');
    setTitle(tr, false);
}
function highLightTR(tr) {
    var cls = (tr.hasClass('even')) ? "highlightEven" : "highlightOdd";
    tr.addClass(cls);
}
function unhighLightTR(tr) {
    var cls = (tr.hasClass('even')) ? "highlightEven" : "highlightOdd";
    tr.removeClass(cls);
}
function setTitle(tr, selected) {
    if (selected) {
        $('a.up', tr).attr('title', 'Unselect this and all items above');
        $('a.dn', tr).attr('title', 'Unselect this and all items below');
    }
    else {
        $('a.up', tr).attr('title', 'Select this and all items above');
        $('a.dn', tr).attr('title', 'Select this and all items below');
    }
}

/*Credit Cards*/
var cardOperationMode = "";
function setAsDefault(token) {
    callPageMethod("/account/controls/pagemethods.aspx/setAsDefault", { token: token}, setAsDefaultResult)
}
function setAsDefaultResult(data) {
    var rs = $.parseJSON(data.d);
    $('.cardsOnFileDiv').html(rs.Items);
    $('.cardsOnFileFunds').html(rs.Options);
    setTimeout(function () { closePopup(); }, 100);
    setClickConfirm();
}
function deleteCard(token) {
    callPageMethod("/account/controls/pagemethods.aspx/RemovePaymentMethod", { token: token}, deleteCardResult)
}
function deleteCardResult(data) {
    var rs = $.parseJSON(data.d);
    $('.cardsOnFileDiv').html(rs.Items);
    $('.cardsOnFileFunds').html(rs.Options);
    setTimeout(function () { closePopup(); }, 100);
    setClickConfirm();
}
function updateCartCardDisplay(rs, act) {
    act = act || 0;  //0=delete 1=edit 2=add
    var tmp = rs.toString().split("#|#");
    if (act == 0) {
        $('ul#rblCardsOnFile input[value=' + tmp[0] + ']').closest('li').remove();
        var li = $('ul#rblCardsOnFile li');
        if (li.length == 1)
            li.find('input').prop('checked', 'checked').find('a').remove();
    }
    else if (act == 1)
        $('ul#rblCardsOnFile input[value=' + tmp[0] + ']').next().text(tmp[1]);
    else if (act == 2) {
        var elem = $('ul#rblCardsOnFile li:last-child'),
            ul = elem.parent(),
            nm = elem.find('input').prop('name'),
            idx = elem.index(),
            id = "rblCardsOnFile_" + idx,
            li = "<li><input id='" + id + "' type='radio' name='" + nm + "' value='" + tmp[0] + "' checked='checked'></input><label for='" + id + "'>" + tmp[1] + "</label></li>";
        $('#hfPiId').val(tmp[0]); //set the id in hidden field as this is not in view state and rbl gets dynamically built
        $('input', ul).removeProp('checked');
        ul.prepend(li);
    }
}
/*Credit Cards END*/

function breakIt() {
    return false;
}

