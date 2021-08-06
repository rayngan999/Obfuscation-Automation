var URLtoPOST = "/hqb2b/script/newslettersubscribe.php";
var URLtoPOSTemail = "/hqb2b/script/sendNLemail.php";
var blankEmailMessage = "Please Enter your Email Address.";
var invalidEmailMessage = "Please Enter valid Email Address.";
var blankNLCheckboxMessage = "Please select the newsletters to subscribe.";
var emailClickQuadTag = "https://o1.qnsr.com/cgi/r?;n=203;c=1387912;s=15939;x=7936;f=201306031137030;u=j;z=TIMESTAMP;";
var EUcountries = ["AT", "BG", "HR", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "BE", "LU", "MT", "NL", "NO", "PL", "PT", "CY", "RO", "SK", "SI", "ES", "SE", "GB", "UK"];
var nlOnlySiteName = getNLFullSiteName(window.location.hostname.split("."));//This returns only sitename as ex. serverwatch not serverwatch.com
var marketoEndpoint = '949-NYM-063';
var showErrorPopup = false;
var showSuccessPopup = false;

var allSiteConfig = {
    "antionline":  {brandName: "eWEEK", emailColor: "#2165A6"},
    "baselinemag": {brandName: "eWEEK", emailColor: "#900"},
    "channelinsider": {brandName: "eWEEK", emailColor: "#0A6A9F"},
    "cioinsight": {brandName: "eWEEK", emailColor: "#374066"},
    "codeguru": {brandName: "Developer", emailColor: "#053061"},
    "databasejournal": {brandName: "eWEEK", emailColor: "#FFFF99"},
    "dbasupport": {brandName: "Developer", emailColor: "#686565"},
    "developer": {brandName: "Developer", emailColor: "#002D3A"},
    "devx": {brandName: "Developer", emailColor: "#FF6600"},
    "esecurityplanet": {brandName: "eWEEK", emailColor: "#0B3161"},
    "enterprisestorageforum": {brandName: "eWEEK", emailColor: "#000066"},
    "datamation": {brandName: "eWEEK", emailColor: "#0088B4"},
    "enterpriseappstoday": {brandName: "eWEEK", emailColor: "#C0C0C0"},
    "enterprisemobiletoday": {brandName: "eWEEK", emailColor: "#2D877E"},
    "enterprisenetworkingplanet": {brandName: "eWEEK", emailColor: "#183693"},
    "eseminarslive": {brandName: "eWEEK", emailColor: "#840A08"},
    "flashkit": {brandName: "Developer", emailColor: "#2573C0"},
    "freevbcode": {brandName: "Developer", emailColor: "#FFD073"},
    "htmlgoodies": {brandName: "Developer", emailColor: "#305C82"},
    "infostor": {brandName: "eWEEK", emailColor: "#E60505"},
    "internetnews": {brandName: "eWEEK", emailColor: "#19358F"},
    "itbusinessedge": {brandName: "eWEEK", emailColor: "#0952F7"},
    "itchannelplanet": {brandName: "eWEEK", emailColor: "#496356"},
    "itsmwatch": {brandName: "eWEEK", emailColor: "#00467F"},
    "jguru": {brandName: "Developer", emailColor: "#95C256"},
    "linux-mag": {brandName: "eWEEK", emailColor: "#333333"},
    "linuxplanet": {brandName: "eWEEK", emailColor: "#0021B5"},
    "linuxtoday": {brandName: "eWEEK", emailColor: "#006699"},
    "serverwatch": {brandName: "eWEEK", emailColor: "#C10012"},
    "smallbusinesscomputing": {brandName: "eWEEK", emailColor: "#6A92B6"},
    "sqlcourse": {brandName: "eWEEK", emailColor: "#FFCC00"},
    "sqlcourse2": {brandName: "eWEEK", emailColor: "#FFCC00"},
    "sysopt": {brandName: "eWEEK", emailColor: "#2B87C6"},
    "vbforums": {brandName: "Developer", emailColor: "#0D5692"},
    "webopedia": {brandName: "eWEEK", emailColor: "#000000"},
    "4guysfromrolla": {brandName: "Developer", emailColor: "#008284"},
};

//newsletter GDPR pop up code STARTs here
var selectedCountry;
var nlemailField;
var nlFormDataStr;
var subscriptionLink;
var isEU = false;

var isMobile = false;
if (window.location.hostname.indexOf("mobile.") !== -1) {
    isMobile = true;
}

if (window.location.hostname.indexOf(".lampdev.") !== -1 || window.location.hostname.indexOf(".quinlampstage.") !== -1 || window.location.hostname.indexOf("local.") !== -1) {
    marketoEndpoint = '360-UKZ-640';
}
var queryparams;

queryparams = getParams(window.location.href);
if (queryparams.nlemail !== undefined) { //When there is nlemail in query parameters (URL) 
    var subscriptionData = 'nlemail=' + atob(queryparams.nlemail) + '&nlBusinessUnit=' + queryparams.nlBusinessUnit + '&nlNewsletterKey=' + queryparams.nlNewsletterKey + '&nlBrandName=' + allSiteConfig[nlOnlySiteName].brandName + '&isEUcountry=' + queryparams.isEUcountry;
    if (queryparams.nlQuadTrackUrl !== undefined) {
        subscriptionData += '&nlQuadTrackUrl=' + atob(queryparams.nlQuadTrackUrl);
    }
    if (isMobile) {
        subscriptionData += '&nlRegistrationWebsite=mobile.' + nlOnlySiteName + '.com';
    } else {
        subscriptionData += '&nlRegistrationWebsite=www.' + nlOnlySiteName + '.com';
    }
    console.time('subscriptionTime');
    console.time('totalSubscriptionTime');
    subscriptionAjax(subscriptionData);
    initializeCSSnHTML();
    if (showSuccessPopup === true) {
        toggleModal('nlstep4'); // Show Sucess popup
        console.timeEnd('totalSubscriptionTime');
    }
    if (showErrorPopup === true) {
        toggleModal('nlstep5'); // Show error popup
        console.timeEnd('totalSubscriptionTime');
    }
    var step4btn = document.querySelector("#nlstep4 .subscribeBtn");
    var step5btn = document.querySelector("#nlstep5 .subscribeBtn");

    var closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", closeModel);
    step4btn.addEventListener("click", closeModel);
    step5btn.addEventListener("click", closeModel);
}

function step1btnClick() {
    if (document.querySelector("#nlstep1 .subscribeBtn").getAttribute("disable") === null) {
        for (var i = 0; i < EUcountries.length; i++) {
            if (EUcountries[i] == selectedCountry) {
                isEU = true;
                break;
            }
        }
        hideAllNLSteps();
        if (isEU === true) {
            document.getElementById("nlstep2").style.display = "block";
        } else {
            document.getElementById("nlstep3").style.display = "block";
            prepareAndSendSubscriptionEmail();
        }
//        alert(selectedCountry);
    }
}
function step2btnClick() {
    hideAllNLSteps();
    document.getElementById("nlstep3").style.display = "block";
    prepareAndSendSubscriptionEmail();
}

function toggleModal(stepidToShow) {
    hideAllNLSteps();
    document.getElementById(stepidToShow).style.display = "block";
    document.querySelector(".nlmodal").classList.toggle("show-modal");
}
function closeModel() {
    document.querySelector(".nlmodal").classList.toggle("show-modal");
    if (queryparams.nlemail !== undefined) {
        window.location.replace(window.location.pathname);
    }
}


//newsletter GDPR pop up code ENDs here

function newsletterGlobalSubmit(nlformId, errorContainerId, successContainerId) {
    var CSSnHTMLdomEle = !document.getElementById("nlmodal");
    if(CSSnHTMLdomEle)
        initializeCSSnHTML();

    var step1btn = document.querySelector("#nlstep1 .subscribeBtn");
    var step2btn = document.querySelector("#nlstep2 .subscribeBtn");
    var step3btn = document.querySelector("#nlstep3 .subscribeBtn");

    var closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", closeModel);
    step1btn.addEventListener("click", step1btnClick);
    step2btn.addEventListener("click", step2btnClick);
    step3btn.addEventListener("click", closeModel);

	/* Create County dropdown starts here*/
    var countryEle = !document.getElementById("countryDD");
    if(countryEle){
        createCountryDD();
    }
    /* Create County dropdown ends here*/
    document.getElementById(errorContainerId).style.display = 'none';
    document.getElementById(successContainerId).style.display = 'none';
    var nlform = document.getElementById(nlformId);
    nlemailField = nlform.getElementsByClassName("nlemail")[0];
    var nlNewsletterKeyField = document.getElementsByName("nlNewsletterKey");

    if (nlemailField.value != "") { // check if email is not blank
        if (validateEmail(nlemailField.value)) { // check email id is valid
            if (nlNewsletterKeyField[0].type == "checkbox" && checkCheckedBoxes("nlNewsletterKey") === false) {
                document.getElementById(errorContainerId).innerHTML = blankNLCheckboxMessage;
                document.getElementById(errorContainerId).style.display = 'block';
                return false;
            } else {
                nlFormDataStr = serialize(nlform);
                console.log(nlFormDataStr);
                 var currentNLUrl = window.location.href;
                // regex pattern for detecting ? character
                var pattern = new RegExp(/\?+/g);
                var queryResult = pattern.test(currentNLUrl);
                if(queryResult === true){
                subscriptionLink = window.location.href + "&" + nlFormDataStr + "&brandName=" + allSiteConfig[nlOnlySiteName].brandName;
                }
                else{
                subscriptionLink = window.location.href + "?" + nlFormDataStr + "&brandName=" + allSiteConfig[nlOnlySiteName].brandName;
                }
                console.log(subscriptionLink);
                toggleModal('nlstep1');
            }
        } else {
            document.getElementById(errorContainerId).innerHTML = invalidEmailMessage;
            document.getElementById(errorContainerId).style.display = 'block';
        }
    } else {
        document.getElementById(errorContainerId).innerHTML = blankEmailMessage;
        document.getElementById(errorContainerId).style.display = 'block';
    }

}

function prepareAndSendSubscriptionEmail() {
    var xmlhttp;
    var emailContent;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (isEU === true) {
                subscriptionLink += '&isEUcountry=true';
            } else {
                subscriptionLink += '&isEUcountry=false';
            }
            console.log(subscriptionLink);
            emailContent = xmlhttp.responseText;
            emailContent = emailContent.replaceAll('USEREMAILID', nlemailField.value);
            emailContent = emailContent.replaceAll('NLSITENAME', nlOnlySiteName + '.com');
            emailContent = emailContent.replaceAll('NLBRAND', (allSiteConfig[nlOnlySiteName].brandName === 'Developer') ? 'Developer.com' : allSiteConfig[nlOnlySiteName].brandName);
            emailContent = emailContent.replaceAll('NLSITELOGO', 'http://www.' + nlOnlySiteName + '.com' + '/hqb2b/img/nlemail/' + nlOnlySiteName + '-300w.gif');
            emailContent = emailContent.replaceAll('NLEMAILCOLOR', allSiteConfig[nlOnlySiteName].emailColor);
            emailContent = emailContent.replaceAll('NLSUBSCRIBELINK', subscriptionLink);
            sendEmailAjax(nlFormDataStr + "&brandName=" + allSiteConfig[nlOnlySiteName].brandName + "&nlemail=" + btoa(encodeURIComponent(nlemailField.value)) + "&sendemail=true&emailcontent=" + escape(emailContent));
        }
    };
    xmlhttp.open("GET", "/hqb2b/script/newsletter_email_content.html", true);
    xmlhttp.send();
}
function sendEmailAjax(dataString) {
    var req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (req != undefined) {
        try {
            req.open("POST", URLtoPOSTemail, false); // 3rd param is whether "async"
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        catch (err) {
            alert("couldnt complete request in sendEmailAjax. Is JS enabled for that domain?\\n\\n" + err.message);
            return false;
        }
        req.send(dataString); // param string only used for POST
        if (req.readyState == 4) { // only if req is "loaded"
            if (req.status == 200)  // only if "OK"
            {
                console.log("email send");
            }
            else {
                console.log("email send fail");
            }
        }
    }
}
function subscriptionAjax(dataString) {
    var req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (req != undefined) {
        try {
            req.open("POST", URLtoPOST, false); // 3rd param is whether "async"
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        catch (err) {
            alert("couldnt complete request. Is JS enabled for that domain?   \\n\\n" + err.message);
            return false;
        }
        req.send(dataString); // param string only used for POST
        if (req.readyState == 4) { // only if req is "loaded"
            if (req.status == 200)  // only if "OK"
            {
                var jsonData = JSON.parse(req.responseText);
                console.log(jsonData);
                if (jsonData.result == "fail") {
//                    toggleModal('nlstep5'); // Show error popup
                    showErrorPopup = true;
                } else {
//                    toggleModal('nlstep4'); // Show Sucess popup
                    showSuccessPopup = true;
                }
                console.timeEnd('subscriptionTime');
                setTimeout(function() {
                    if (Munchkin !== undefined) {
                        Munchkin.init(marketoEndpoint, {
                            "domainLevel": 2
                        });
                        console.log('Munchkin tracking called');
                    }
                }, 3000);

            }
            else {
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=> ' + "XHR error: " + req.status + " " + req.statusText);
            }
        }
    }
}

function serialize(form) {
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j, q = [], chk = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'email':
                    case 'reset':
                    case 'submit':
                        if (form.elements[i].name == "nlemail" || form.elements[i].name == "nlQuadTrackUrl") {
                            q.push(form.elements[i].name + "=" + btoa(encodeURIComponent(form.elements[i].value)));
                        } else {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }

                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            if (chk[form.elements[i].name] != undefined) {
                                chk[form.elements[i].name] = chk[form.elements[i].name] + encodeURIComponent(form.elements[i].value) + ",";
                            } else {
                                chk[form.elements[i].name] = encodeURIComponent(form.elements[i].value) + ",";
                            }
                            //q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }
                        break;
                    case 'file':
                        break;
                }
                break;
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }
    for (var key in chk) {
        if (typeof chk[key] !== 'function') {
            q.push(key + "=" + chk[key].substring(0, (chk[key].length) - 1));
        }
    }
    return q.join("&");
}function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false)
        return false;
    else
        return true;
}
// Pass the checkbox name to the function
function checkCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    // loop over them all
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    return false;
}
function getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function getNLFullSiteName(siteArr) {
    for (var i = 0; i <= siteArr.length; i++) {
        if (siteArr[i] === "com") {
            return siteArr[i - 1];
        }
    }
}
function hideAllNLSteps() {
    document.getElementById("nlstep1").style.display = "none";
    document.getElementById("nlstep2").style.display = "none";
    document.getElementById("nlstep3").style.display = "none";
    document.getElementById("nlstep4").style.display = "none";
}
function createCountryDD() {
    var countryObject = [
        {"cncode": "0", "cnname": "--- Select One ---"},
        {"cncode": "US", "cnname": "United States"},
        {"cncode": "CA", "cnname": "Canada"},
        {"cncode": "AF", "cnname": "Afghanistan"},
        {"cncode": "AX", "cnname": "Aland Islands"},
        {"cncode": "AL", "cnname": "Albania"},
        {"cncode": "DZ", "cnname": "Algeria"},
        {"cncode": "AD", "cnname": "Andorra"},
        {"cncode": "AO", "cnname": "Angola"},
        {"cncode": "AI", "cnname": "Anguilla"},
        {"cncode": "AQ", "cnname": "Antarctica"},
        {"cncode": "AG", "cnname": "Antigua & Barbuda"},
        {"cncode": "AR", "cnname": "Argentina"},
        {"cncode": "AM", "cnname": "Armenia"},
        {"cncode": "AW", "cnname": "Aruba"},
        {"cncode": "AU", "cnname": "Australia"},
        {"cncode": "AT", "cnname": "Austria"},
        {"cncode": "AZ", "cnname": "Azerbaijan"},
        {"cncode": "BS", "cnname": "Bahamas"},
        {"cncode": "BH", "cnname": "Bahrain"},
        {"cncode": "BD", "cnname": "Bangladesh"},
        {"cncode": "BB", "cnname": "Barbados"},
        {"cncode": "BY", "cnname": "Belarus"},
        {"cncode": "BE", "cnname": "Belgium"},
        {"cncode": "BZ", "cnname": "Belize"},
        {"cncode": "BJ", "cnname": "Benin"},
        {"cncode": "BM", "cnname": "Bermuda"},
        {"cncode": "BT", "cnname": "Bhutan"},
        {"cncode": "BO", "cnname": "Bolivia"},
        {"cncode": "BA", "cnname": "Bosnia-Herzegovina"},
        {"cncode": "BW", "cnname": "Botswana"},
        {"cncode": "BV", "cnname": "Bouvet Island"},
        {"cncode": "BR", "cnname": "Brazil"},
        {"cncode": "VG", "cnname": "British Virgin Islands"},
        {"cncode": "BN", "cnname": "Brunei"},
        {"cncode": "BG", "cnname": "Bulgaria"},
        {"cncode": "BF", "cnname": "Burkina Faso"},
        {"cncode": "BI", "cnname": "Burundi"},
        {"cncode": "KH", "cnname": "Cambodia"},
        {"cncode": "CM", "cnname": "Cameroon"},
        {"cncode": "CV", "cnname": "Cape Verde"},
        {"cncode": "KY", "cnname": "Cayman Islands"},
        {"cncode": "CF", "cnname": "Central African Republic"},
        {"cncode": "TD", "cnname": "Chad"},
        {"cncode": "CL", "cnname": "Chile"},
        {"cncode": "CN", "cnname": "China"},
        {"cncode": "CO", "cnname": "Colombia"},
        {"cncode": "KM", "cnname": "Comoros"},
        {"cncode": "CG", "cnname": "Congo"},
        {"cncode": "CK", "cnname": "Cook Islands"},
        {"cncode": "CR", "cnname": "Costa Rica"},
        {"cncode": "CI", "cnname": "Cote D'ivoire"},
        {"cncode": "HR", "cnname": "Croatia"},
        {"cncode": "CU", "cnname": "Cuba"},
        {"cncode": "CY", "cnname": "Cyprus"},
        {"cncode": "CZ", "cnname": "Czech Republic"},
        {"cncode": "DK", "cnname": "Denmark"},
        {"cncode": "DJ", "cnname": "Djibouti"},
        {"cncode": "DM", "cnname": "Dominica"},
        {"cncode": "DO", "cnname": "Dominican Republic"},
        {"cncode": "TP", "cnname": "East Timor"},
        {"cncode": "EC", "cnname": "Ecuador"},
        {"cncode": "EG", "cnname": "Egypt"},
        {"cncode": "SV", "cnname": "El Salvador"},
        {"cncode": "GQ", "cnname": "Equatorial Guinea"},
        {"cncode": "ER", "cnname": "Eritrea"},
        {"cncode": "EE", "cnname": "Estonia"},
        {"cncode": "ET", "cnname": "Ethiopia"},
        {"cncode": "FK", "cnname": "Falkland Islands"},
        {"cncode": "FO", "cnname": "Faroe Islands"},
        {"cncode": "FJ", "cnname": "Fiji"},
        {"cncode": "FI", "cnname": "Finland"},
        {"cncode": "FR", "cnname": "France"},
        {"cncode": "GF", "cnname": "French Guiana"},
        {"cncode": "PF", "cnname": "French Polynesia"},
        {"cncode": "GA", "cnname": "Gabon"},
        {"cncode": "GM", "cnname": "Gambia"},
        {"cncode": "GE", "cnname": "Georgia"},
        {"cncode": "DE", "cnname": "Germany"},
        {"cncode": "GH", "cnname": "Ghana"},
        {"cncode": "GI", "cnname": "Gibraltar"},
        {"cncode": "GR", "cnname": "Greece"},
        {"cncode": "GL", "cnname": "Greenland"},
        {"cncode": "GD", "cnname": "Grenada"},
        {"cncode": "GP", "cnname": "Guadeloupe"},
        {"cncode": "GT", "cnname": "Guatemala"},
        {"cncode": "GG", "cnname": "Guernsey"},
        {"cncode": "GN", "cnname": "Guinea"},
        {"cncode": "GW", "cnname": "Guinea-Bissau"},
        {"cncode": "GY", "cnname": "Guyana"},
        {"cncode": "HT", "cnname": "Haiti"},
        {"cncode": "HN", "cnname": "Honduras"},
        {"cncode": "HK", "cnname": "Hong Kong"},
        {"cncode": "HU", "cnname": "Hungary"},
        {"cncode": "IS", "cnname": "Iceland"},
        {"cncode": "IN", "cnname": "India"},
        {"cncode": "ID", "cnname": "Indonesia"},
        {"cncode": "IQ", "cnname": "Iraq"},
        {"cncode": "IE", "cnname": "Ireland"},
        {"cncode": "IR", "cnname": "Islamic Republic of Iran"},
        {"cncode": "IM", "cnname": "Isle of Man"},
        {"cncode": "IL", "cnname": "Israel"},
        {"cncode": "IT", "cnname": "Italy"},
        {"cncode": "JM", "cnname": "Jamaica"},
        {"cncode": "JP", "cnname": "Japan"},
        {"cncode": "JE", "cnname": "Jersey"},
        {"cncode": "JO", "cnname": "Jordan"},
        {"cncode": "KZ", "cnname": "Kazakhstan"},
        {"cncode": "KE", "cnname": "Kenya"},
        {"cncode": "KI", "cnname": "Kiribati"},
        {"cncode": "KP", "cnname": "Korea, DPRK"},
        {"cncode": "KR", "cnname": "Korea, ROK"},
        {"cncode": "KW", "cnname": "Kuwait"},
        {"cncode": "KG", "cnname": "Kyrgyzstan"},
        {"cncode": "LA", "cnname": "Laos"},
        {"cncode": "LV", "cnname": "Latvia"},
        {"cncode": "LB", "cnname": "Lebanon"},
        {"cncode": "LS", "cnname": "Lesotho"},
        {"cncode": "LR", "cnname": "Liberia"},
        {"cncode": "LY", "cnname": "Libya"},
        {"cncode": "LI", "cnname": "Liechtenstein"},
        {"cncode": "LT", "cnname": "Lithuania"},
        {"cncode": "LU", "cnname": "Luxembourg"},
        {"cncode": "MO", "cnname": "Macau"},
        {"cncode": "MG", "cnname": "Madagascar"},
        {"cncode": "MW", "cnname": "Malawi"},
        {"cncode": "MY", "cnname": "Malaysia"},
        {"cncode": "MV", "cnname": "Maldives"},
        {"cncode": "ML", "cnname": "Mali"},
        {"cncode": "MT", "cnname": "Malta"},
        {"cncode": "MQ", "cnname": "Martinique"},
        {"cncode": "MR", "cnname": "Mauritania"},
        {"cncode": "MU", "cnname": "Mauritius"},
        {"cncode": "YT", "cnname": "Mayotte"},
        {"cncode": "MX", "cnname": "Mexico"},
        {"cncode": "MD", "cnname": "Moldova"},
        {"cncode": "MC", "cnname": "Monaco"},
        {"cncode": "MN", "cnname": "Mongolia"},
        {"cncode": "MS", "cnname": "Monserrat"},
        {"cncode": "ME", "cnname": "Montenegro"},
        {"cncode": "MA", "cnname": "Morocco"},
        {"cncode": "MZ", "cnname": "Mozambique"},
        {"cncode": "MM", "cnname": "Myanmar (Burma)"},
        {"cncode": "NA", "cnname": "Nambia"},
        {"cncode": "NR", "cnname": "Nauru"},
        {"cncode": "NP", "cnname": "Nepal"},
        {"cncode": "NL", "cnname": "Netherlands"},
        {"cncode": "AN", "cnname": "Netherlands Antilles"},
        {"cncode": "NC", "cnname": "New Caledonia"},
        {"cncode": "NZ", "cnname": "New Zealand"},
        {"cncode": "NI", "cnname": "Nicaragua"},
        {"cncode": "NE", "cnname": "Niger"},
        {"cncode": "NG", "cnname": "Nigeria"},
        {"cncode": "NU", "cnname": "Niue"},
        {"cncode": "NF", "cnname": "Norfolk Island"},
        {"cncode": "NO", "cnname": "Norway"},
        {"cncode": "OM", "cnname": "Oman"},
        {"cncode": "PK", "cnname": "Pakistan"},
        {"cncode": "PS", "cnname": "Palestinian Territory, Occupied"},
        {"cncode": "PA", "cnname": "Panama"},
        {"cncode": "PG", "cnname": "Papua New Guinea"},
        {"cncode": "PY", "cnname": "Paraguay"},
        {"cncode": "PE", "cnname": "Peru"},
        {"cncode": "PH", "cnname": "Philippines"},
        {"cncode": "PN", "cnname": "Pitcairn"},
        {"cncode": "PL", "cnname": "Poland"},
        {"cncode": "PT", "cnname": "Portugal"},
        {"cncode": "PR", "cnname": "Puerto Rico"},
        {"cncode": "QA", "cnname": "Qatar"},
        {"cncode": "MK", "cnname": "Republic of  Macedonia"},
        {"cncode": "RE", "cnname": "Reunion"},
        {"cncode": "RO", "cnname": "Romania"},
        {"cncode": "RU", "cnname": "Russian Federation"},
        {"cncode": "RW", "cnname": "Rwanda"},
        {"cncode": "LC", "cnname": "Saint Lucia"},
        {"cncode": "WS", "cnname": "Samoa"},
        {"cncode": "SM", "cnname": "San Marino"},
        {"cncode": "ST", "cnname": "Sao Tome & Principe"},
        {"cncode": "SA", "cnname": "Saudi Arabia"},
        {"cncode": "SN", "cnname": "Senegal"},
        {"cncode": "RS", "cnname": "Serbia"},
        {"cncode": "SC", "cnname": "Seychelles"},
        {"cncode": "SL", "cnname": "Sierra Leone"},
        {"cncode": "SG", "cnname": "Singapore"},
        {"cncode": "SK", "cnname": "Slovakia"},
        {"cncode": "SI", "cnname": "Slovenia"},
        {"cncode": "SB", "cnname": "Solomon Islands"},
        {"cncode": "SO", "cnname": "Somalia"},
        {"cncode": "ZA", "cnname": "South Africa"},
        {"cncode": "ES", "cnname": "Spain"},
        {"cncode": "LK", "cnname": "Sri Lanka"},
        {"cncode": "SH", "cnname": "St. Helena"},
        {"cncode": "PM", "cnname": "St. Pierre & Miquelon"},
        {"cncode": "SD", "cnname": "Sudan"},
        {"cncode": "SR", "cnname": "Suriname"},
        {"cncode": "SZ", "cnname": "Swaziland"},
        {"cncode": "SE", "cnname": "Sweden"},
        {"cncode": "CH", "cnname": "Switzerland"},
        {"cncode": "SY", "cnname": "Syria"},
        {"cncode": "TW", "cnname": "Taiwan"},
        {"cncode": "TJ", "cnname": "Tajikistan"},
        {"cncode": "TZ", "cnname": "Tanzania"},
        {"cncode": "TH", "cnname": "Thailand"},
        {"cncode": "TG", "cnname": "Togo"},
        {"cncode": "TK", "cnname": "Tokelau"},
        {"cncode": "TO", "cnname": "Tonga"},
        {"cncode": "TT", "cnname": "Trinidad & Tobago"},
        {"cncode": "TN", "cnname": "Tunisia"},
        {"cncode": "TR", "cnname": "Turkey"},
        {"cncode": "TM", "cnname": "Turkmenistan"},
        {"cncode": "TV", "cnname": "Tuvalu"},
        {"cncode": "UM", "cnname": "U.S. Pacific Islands"},
        {"cncode": "UG", "cnname": "Uganda"},
        {"cncode": "UA", "cnname": "Ukraine"},
        {"cncode": "AE", "cnname": "United Arab Emirates"},
        {"cncode": "GB", "cnname": "United Kingdom"},
        {"cncode": "UY", "cnname": "Uruguay"},
        {"cncode": "UZ", "cnname": "Uzbekistan"},
        {"cncode": "VU", "cnname": "Vanuatu"},
        {"cncode": "VA", "cnname": "Vatican City (Holy See)"},
        {"cncode": "VE", "cnname": "Venezuela"},
        {"cncode": "VN", "cnname": "Vietnam"},
        {"cncode": "EH", "cnname": "Western Sahara"},
        {"cncode": "YE", "cnname": "Yemen"},
        {"cncode": "YU", "cnname": "Yugoslavia"},
        {"cncode": "ZR", "cnname": "Zaire"},
        {"cncode": "ZM", "cnname": "Zambia"},
        {"cncode": "ZW", "cnname": "Zimbabwe"}
    ];
    var countryDDContainer = document.querySelector("#countryDDContainer");
    var countryDDfrag = document.createDocumentFragment();
    var countryDD = document.createElement("select");
    countryDD.className = "countryDD";
    countryDD.id = "countryDD";
    countryObject.forEach(function(countryObjectItem) {
        countryDD.options.add(new Option(countryObjectItem.cnname, countryObjectItem.cncode));
    })
//    countryDD.options.add(new Option("Method1", "AU", true, true));
//    countryDD.options.add(new Option("Method2", "FI"));

    countryDDfrag.appendChild(countryDD);
    countryDDContainer.appendChild(countryDDfrag);

    var cdd = document.querySelector(".countryDD");
    cdd.addEventListener('change', function() {
        //disable button if no country selected
        if (this.value === "0") {
            document.querySelector("#nlstep1 .subscribeBtn").disabled = true;
        } else {
            document.querySelector("#nlstep1 .subscribeBtn").disabled = false;
        }
        selectedCountry = this.value;
    }, false);
}

function initializeCSSnHTML() {
    var requiredCSS = "\
.nlmodal {\
    position: fixed;\
    left: 0;\
    top: 0;\
    width: 100%;\
    height: 100%;\
    background-color: rgba(0, 0, 0, 0.5);\
    opacity: 0;\
    visibility: hidden;\
    transform: scale(1.1);\
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\
}\
.nlmodal-content {\
    position: absolute;\
    top: 50%;\
    left: 50%;\
    transform: translate(-50%, -50%);\
    background-color: white;\
    padding: 7px 10px 15px 10px;\
    width: 400px;\
}\
.close-button {\
    float: right;\
    width: 15px;\
    line-height: 15px;\
    text-align: center;\
    cursor: pointer;\
    color: black;\
}\
.show-modal {\
    opacity: 1;\
    z-index:16777216;\
    visibility: visible;\
    transform: scale(1.0);\
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\
}\
.nlsteps h3{\
    text-align: center;\
    font-weight: normal;\
    font-family: sans-serif;\
    font-size: 18px;\
    margin: 15px 0px 10px 0px;\
    color: black;\
}\
.nlsteps hr{\
    margin: 10px 0 20px 0;\
    border: 0;\
    border-top: 1px solid #000;\
}\
.subscribeBtn{\
    height: 33px;\
    border-radius: 20px;\
    display: block;\
    margin: 0 auto;\
    margin-top: 30px;\
    text-align: center;\
    border: 0;\
    padding: 0px 20px 0px 20px;\
    background: black;\
    color: white;\
}\
.subscribeBtn:hover{\
background: black;\
}\
.subscribeBtn:disabled,.subscribeBtn[disabled]{\
  background: #595959;\
}\
.nlsteps p {\
    text-align: center;\
    margin: 0 0 10px;\
    font-size: 15px;\
    color: black;\
}\
#nlstep1 .countryDD{\
    width: 95%;\
    height: 30px;\
    display: block;\
    margin: 0 auto;\
    color: black;\
}\
#nlstep2 p {\
    text-align: justify;\
    margin: 0 0 10px;\
    font-size: 13px;\
}\
#nlstep2 p a{\
    text-decoration: underline;\
}\
#nlstep3 p {\
    text-align: justify;\
    margin: 0 0 10px;\
    font-size: 13px;\
}\
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\
.nlmodal-content {\
    width: 340px;\
}\
}\
\
";
    var popupHTML = '\
<div class="nlmodal" id="nlmodal">\
    <div class="nlmodal-content">\
        <span class="close-button">&#10005</span>\
        <div id="nlstep1" class="nlsteps">\
            <h3>CONFIRM YOUR SUBSCRIPTION</h3>\
            <hr>\
            <p>Where are you located ?</p>\
            <div id="countryDDContainer"></div>\
            <div>\
                <button class="subscribeBtn" disabled type="button">SUBSCRIBE</button>\
            </div>\
        </div>\
        <div id="nlstep2" class="nlsteps" style="display: none">\
            <h3>CONFIRM YOUR SUBSCRIPTION</h3>\
            <hr>\
            <p>By submitting your information you agree to receive email, phone and text message communications from ' + nlOnlySiteName + '.com, a property of ' + ((allSiteConfig[nlOnlySiteName].brandName === "Developer") ? "Developer.com" : allSiteConfig[nlOnlySiteName].brandName) + '. In addition, you agree to receive email offers about products and services that may be interest to you.</p>\
            <p>Your personal information will be processed in accordance with the <a href="/privacy">Quinstreet Privacy Policy</a>. You may unsubscribe at any time.</p>\
            <div>\
                <button class="subscribeBtn" type="button">SUBSCRIBE</button>\
            </div>\
        </div>\
        <div id="nlstep3" class="nlsteps" style="display: none">\
            <h3>ALMOST FINISHED!</h3>\
            <hr>\
            <p>You\'re almost there!</p>\
            <p>We just need to confirm your email address. Please click the link we sent to your email to activate your subscription.</p>\
            <div>\
                <button class="subscribeBtn" type="button">CLOSE</button>\
            </div>\
        </div>\
        <div id="nlstep4" class="nlsteps" style="display: none">\
            <h3>Thank You!</h3>\
            <hr>\
            <p>Your subscription is now active!</p>\
            <div>\
                <button class="subscribeBtn" type="button">CLOSE</button>\
            </div>\
        </div>\
        <div id="nlstep5" class="nlsteps" style="display: none">\
            <h3>Error!</h3>\
            <hr>\
            <p>Something went wrong please try again</p>\
            <div>\
                <button class="subscribeBtn" type="button">CLOSE</button>\
            </div>\
        </div>\
    </div>\
</div>';

    var documentFragment = document.createDocumentFragment();

    var sheetStyle = document.createElement('style')
    sheetStyle.innerHTML = requiredCSS;
    documentFragment.appendChild(sheetStyle);

    var popupNode = document.createElement("div");
    popupNode.innerHTML = popupHTML;
    documentFragment.appendChild(popupNode);

    document.body.appendChild(documentFragment);
}