<!doctype html>
<html lang="en">
<head>
<title>Donate NowâPower Our Vital Work for Animals! | PETA</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="referrer" content="no-referrer-when-downgrade">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<script src="https://use.fontawesome.com/be5da11684.js"></script>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
<link href="https://resources.peta.org/engaging-networks/pages/peta/styles/magnific.min.css?v=1.0.0" rel="stylesheet">
<link href="https://resources.peta.org/engaging-networks/pages/peta/styles/main-content.css" rel="stylesheet" type="text/css" />
<link href="https://resources.peta.org/engaging-networks/pages/_shared/theme-iframe-donation/styles/en-page-custom.css" rel="stylesheet" type="text/css" />
<link href="https://resources.peta.org/engaging-networks/pages/_shared/theme-iframe-donation/styles/headlines-donation-form-styles.css" rel="stylesheet" type="text/css" />
<link href="https://resources.peta.org/engaging-networks/pages/peta/styles/hidden-form-content.css" rel="stylesheet" type="text/css" />
<link href="https://resources.peta.org/engaging-networks/pages/_shared/styles/applepay.css" rel="stylesheet" type="text/css" />

<!-- BEGIN APPLE PAY -->
<script type="text/javascript">
    var merchantIdentifier = 'merchant.com.petamem.prod';
    var merchantDomainName ='support.peta.org';
    var merchantDisplayName ='PETA';

    // Session
    var merchantSessionIdentifier = 'e9c42f77062f4c759a3e855c1b92a9e2-use2-prd-web1';
    var merchantNonce = 'fake-nonce';
    var merchantEpochTimestamp = '1467051059';
    var merchantSignature = 'fake-signature';

    // Validation
    var merchantCountryCode = 'US';
    var merchantCurrencyCode = 'USD';
    var merchantSupportedNetworks = [ 'visa', 'masterCard', 'amex', 'discover' ];
    var merchantCapabilities = [ 'supports3DS' ];
    var merchantTotalLabel = '';
</script>
<!-- END APPLE PAY -->
<script language="javascript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<!--START GOOGLE ANALYTICS-->
<script language="javascript" type="text/javascript" src="https://resources.peta.org/googleAnalytics/global/ga_constants.js"></script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/googleAnalytics/petaUS/peta/gaBase.js"></script>
<!-- END GOOGLE ANALYTICS -->

<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/theme-iframe-donation/js/jquery.responsiveiframe.js"></script>
<script>
  var ri = responsiveIframe();
  ri.allowResponsiveEmbedding();
</script>

<!-- Start Data Layer -->
<script type="text/javascript">// <![CDATA[
//Donation TY page
function checkIsSent(ref) {
	var cookiename = 'gaSaleSent_' + ref;	
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(cookiename + '=') != -1){
        	return true;
        }
    }    
    var d = new Date();
    d.setTime(d.getTime() + (90*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cookiename + '=1; ' + expires;
    
    return false;  
}

!function (w, d, e, u, m, t, s) {
    if (w.care2Targeting) return;
    m = w.care2Targeting = function (params) {
        m.callMethod ? m.callMethod.apply(m, [params]) : m.queue.push(params)
    };
    m.push = m;
    m.version = '1.0';
    m.queue = [];
    t = d.createElement(e);
    t.async = !0;
    t.src = u;
    s = d.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
}(window, document, 'script', '//dingo.care2.com/targeting/pixel.js');

jQuery(document).ready(function() {	
	if(window.location.href.toLowerCase().indexOf('/donate/2') > 0 || window.location.href.toLowerCase().indexOf('/donation/2') > 0)
	{                           
        var transactionID =  '{receipt_data~txId}';
        var isRepeating = false;
		
		if(!checkIsSent(transactionID)){ 
			var transactionType = pageJson.transactionType;

			if(transactionType == 'FCS' || transactionType == 'FBS' || transactionType == 'ACS'){
                transactionType = 'Single Gift';
                isRepeating = false;
			}
			else if(transactionType == 'FCR' || transactionType == 'FUR' || transactionType == 'FBR' || transactionType == 'ACR'){
                transactionType = 'Recurring Gift';
                isRepeating = true;
			}
			else if(transactionType == 'FIM'){
                transactionType = 'Memorial Gift';
                isRepeating = false;
			}

			(function() {
				dataLayer = dataLayer || [];
				dataLayer.push({
					'transactionId': '{receipt_data~txId}',
					'transactionTotal': +('{receipt_data~amount}'.replace( /(\$|,)/g, '' )),
					'transactionProducts': [{
						  'name': transactionType,
						  'sku': 'id:'+ pageJson.campaignPageId + ' ' + pageJson.pageName,
						  'price': +('{receipt_data~amount}'.replace( /(\$|,)/g, '' )),
						  'quantity': 1}]
				});
            })();
            
            care2Targeting({
                clientid: '154',
                email: '{user_data~EMail Address}',
                value: '{receipt_data~amount}'.replace('$',''),
                repeating: isRepeating
            });
		}
	}
});
</script>
<!-- End Data Layer -->

<!-- Prevent Pre-Migration Code -->
<script>
    dataLayer = [{'blockCustomCodeInGTM': 'yes'}];
</script>
<!-- End Prevent Pre-Migration Code -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K76L3F');</script>
<!-- End Google Tag Manager -->

<!-- Email Validation -->
<script id="email-validation-script" src="https://services.peta.org/validate.js"></script> 
<link href="https://services.peta.org/validate.css" rel="stylesheet"> 
<!-- Email Validation END -->
<!-- START PETA CUSTOM CODE -->
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/peta/js/instance-variables.js"></script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/peta-js/peta-en-shared.js"></script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/peta-js/tip-jar.js"></script>

<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/peta/js/4site/peta-cross-domain.js"></script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/peta/js/4site/peta-en-field-populator.js"></script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/peta/js/4site/peta-remember-me.js"></script>

<script>
    //PAGE SETUP - BEFORE FORM IS CREATED
    pageInitialization.afterHeadLoad();
</script>
<!-- END PETA CUSTOM CODE -->

<meta name="title" content="ALL Animals Deserve Our Love, Protection, and Respect"/>
<meta property="og:title" content="ALL Animals Deserve Our Love, Protection, and Respect"/>
<meta property="og:description" content="I just donated to PETA to power its vital work for animalsâwill you join me?"/>
<meta name="description" content="I just donated to PETA to power its vital work for animalsâwill you join me?"/>
<meta property="og:image" content="http://www.mediapeta.com/EN/peta/images/social-media-thumbnail-peta-v02.jpg"/>
<link rel="canonical" href="https://support.peta.org/page/1828/donate/1?locale=en-US"/>
<meta property="og:url" content="https://support.peta.org/page/1828/donate/1?locale=en-US"/>
<link rel="image_src" href="https://www.mediapeta.com/EN/peta/images/social-media-thumbnail-peta-v02.jpg" />
<link href='/pageassets/css/enPage.css?v=4.0.0' rel='stylesheet' type='text/css' />
<script>var pageJson = {"clientId":10003,"campaignPageId":22134,"campaignId":57700,"pageNumber":1,"pageCount":2,"pageName":"PE FOD GEN 2020-09 Embedded Headlines version of 1828 IXXXWBXXXXG GIT DTY OTMON Checkbox 2Col","pageType":"donation","externalReference8":"GEN::devo::EN::Donation::PE Donate NowâPower Our Vital Work for Animals!","externalReference9":"peta","locale":"en-US","redirectPresent":false,"appealCode":"IXXXWBXXXXG","giftProcess":false};</script>
<script src='/page/22134/pagedata.js?locale=en-US&ea.profile.id=0'></script>
<script src='/pageassets/js/enPage.js?v=4.0.0'></script>
</head>
<body><form method="post" action="/page/22134/donate/2" class="en__component en__component--page">
	<input type="hidden" name="hidden" class="en__hiddenFields" value="">
	<input type="hidden" name="sessionId" value="e9c42f77062f4c759a3e855c1b92a9e2-use2-prd-web1">
	
	
	
	
	
	<ul class="en__errorList">
	</ul>

		<div class="en__component en__component--row en__component--row--2">
		<div class="en__component en__component en__component--column en__component--column--1">
		<div class="en__component en__component--codeblock"><style>
.en__component--row:last-of-type {
    padding: 1.5rem;
}    
</style>
<script type="text/javascript">
  if (typeof window.useRememberMe === 'undefined' || window.useRememberMe != true){
    ENFieldPopulator.prototype.autofill = function(){}
    ENFieldPopulator.prototype.save = function(){}
  }
</script></div>
		<div class="en__component en__component--copyblock"

style="







"
>
	<h3 class="form_header">Donation Amount</h3>

	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<input type="hidden" class="en__field__input en__field__input--hidden" name="supporter.appealCode" value="IXXXWBXXXXG" />


	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<div class="en__field en__field--radio en__field--withOther en__field--217388 en__field--donationAmt en__mandatory">
	<label class="en__field__label" style="">Donation Amount</label>
	<div class="en__field__element en__field__element--radio
	" >
		<div class="en__field__item">
			<input type="radio" class="en__field__input en__field__input--radio" value="25" name="transaction.donationAmt" id="en__field_transaction_donationAmt0" />
			<label class="en__field__label en__field__label--item" for="en__field_transaction_donationAmt0">$25</label>
		</div>
		<div class="en__field__item">
			<input checked type="radio" class="en__field__input en__field__input--radio" value="35" name="transaction.donationAmt" id="en__field_transaction_donationAmt1" />
			<label class="en__field__label en__field__label--item" for="en__field_transaction_donationAmt1">$35</label>
		</div>
		<div class="en__field__item">
			<input type="radio" class="en__field__input en__field__input--radio" value="50" name="transaction.donationAmt" id="en__field_transaction_donationAmt2" />
			<label class="en__field__label en__field__label--item" for="en__field_transaction_donationAmt2">$50</label>
		</div>
		<div class="en__field__item">
			<input type="radio" class="en__field__input en__field__input--radio" value="100" name="transaction.donationAmt" id="en__field_transaction_donationAmt3" />
			<label class="en__field__label en__field__label--item" for="en__field_transaction_donationAmt3">$100</label>
		</div>
		<div class="en__field__item">
			<input type="radio" class="en__field__input en__field__input--radio" value="" name="transaction.donationAmt" id="en__field_transaction_donationAmt4" />
			<label class="en__field__label en__field__label--item" for="en__field_transaction_donationAmt4">Other</label>
		</div>
		<div class="en__field__item en__field__item--other en__field__item--hidden">
			<input class="en__field__input en__field__input--other" type="text"  name="transaction.donationAmt.other" value="" />
		</div>
	</div>
</div>
			<div class="en__field en__field--checkbox en__field--217389 en__field--recurrpay">
	<label class="en__field__label" style="">Recurring Payment</label>
	<div class="en__field__element en__field__element--checkbox
	" >
		<div class="en__field__item">
			<input id="en__field_transaction_recurrpay" type="checkbox" class="en__field__input en__field__input--checkbox" value="Y" name="transaction.recurrpay" />
			<label for="en__field_transaction_recurrpay" class="en__field__label en__field__label--item" >Repeat this gift every month and we'll receive an extra $75 from a generous foundation supporting PETA!</label>
		</div>
	</div>
</div>
			<input type="hidden" class="en__field__input en__field__input--hidden" name="transaction.recurrfreq" value="MONTHLY" />

			<input type="hidden" class="en__field__input en__field__input--hidden" name="transaction.recurrday" value="" />

			<div class="en__field en__field--text en__field--question en__field--191534 en__field--img-donor-type-hidden-field-important-eo-mara-">
	<label for="en__field_supporter_questions_191534" class="en__field__label" style="">IMG Donor Type</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_questions_191534" type="text" class="en__field__input en__field__input--text" name="supporter.questions.191534" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--question en__field--222378 en__field--img-gomonthly-lightbox-setting-hidden-field-important-mmeinhardt-">
	<label for="en__field_supporter_questions_222378" class="en__field__label" style="">IMG GoMonthly Lightbox</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_questions_222378" type="text" class="en__field__input en__field__input--text" name="supporter.questions.222378" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--question en__field--223994 en__field--img-skip-default-amount-on-postback-important-mmeinhardt-">
	<label for="en__field_supporter_questions_223994" class="en__field__label" style="">Skip setting default amount on postback by flagging when an amount is set.  Cleared if switched</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_questions_223994" type="text" class="en__field__input en__field__input--text" name="supporter.questions.223994" value=""  />
	 </div>
</div>

	
	
</div>
		<div class="en__component en__component--codeblock"><script>
    petaVars.flags.state.setDefaultDonationAfterAmountInteraction = false;
</script></div>
</div>
		<div class="en__component en__component en__component--column en__component--column--2">
		<div class="en__component en__component--copyblock"

style="







"
>
	<h3 class="form_header">Donor Contact Information&nbsp;</h3>

	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<div class="en__field en__field--text en__field--346496 en__field--firstName en__mandatory">
	<label for="en__field_supporter_firstName" class="en__field__label" style="">First Name</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_firstName" type="text" class="en__field__input en__field__input--text" name="supporter.firstName" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--346497 en__field--lastName en__mandatory">
	<label for="en__field_supporter_lastName" class="en__field__label" style="">Last Name</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_lastName" type="text" class="en__field__input en__field__input--text" name="supporter.lastName" value=""  />
	 </div>
</div>

	
	
</div>
		<div class="en__component en__component--formblock en__donation--billing--info" style="">
	
	
			<div class="en__field en__field--text en__field--31578 en__field--emailAddress en__mandatory">
	<label for="en__field_supporter_emailAddress" class="en__field__label" style="">E-Mail Address</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_emailAddress" type="text" class="en__field__input en__field__input--text" name="supporter.emailAddress" value=""  />
	 </div>
</div>

	
	
</div>
		<div class="en__component en__component--copyblock"

style="







"
>
	<div class="opt-in-header">
<p>Sign me up for the following e-mail:</p>
</div>

<div id="casl_opt_in_header" style="display: none;">
<p><kbd>UN ANY Sign me up for the following e-mail:</kbd></p>
</div>
<script>
if(!window.EngagingNetworks)
{
    document.getElementById("casl_opt_in_header").style.display = "block";
}
</script>
	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<div class="en__field en__field--checkbox en__field--question en__field--164 en__field--membership-updates">
	<label class="en__field__label" style="">Membership Updates</label>
	<div class="en__field__element en__field__element--checkbox
	" >
		<div class="en__field__item">
			<input id="en__field_supporter_questions_164" type="checkbox" class="en__field__input en__field__input--checkbox" value="Y" name="supporter.questions.164" />
			<label for="en__field_supporter_questions_164" class="en__field__label en__field__label--item" ></label>
		</div>
	</div>
</div>
			<div class="en__field en__field--checkbox en__field--question en__field--167 en__field--peta-e-news">
	<label class="en__field__label" style="">PETA E-News</label>
	<div class="en__field__element en__field__element--checkbox
	" >
		<div class="en__field__item">
			<input id="en__field_supporter_questions_167" type="checkbox" class="en__field__input en__field__input--checkbox" value="Y" name="supporter.questions.167" />
			<label for="en__field_supporter_questions_167" class="en__field__label en__field__label--item" ></label>
		</div>
	</div>
</div>

	
	
</div>
		<div class="en__component en__component--copyblock"

style="







"
>
	<div class="opt-in-footer">
<p class="privacy-policy"><span class="currentSubscriberText">Current subscribers: You will continue to receive e-mails unless you explicitly opt out <a href="https://support.peta.org/page/921/action/1" target="_blank">here</a>.</span></p>
</div>

<div id="casl_opt_in_footer" style="display: none;">
<p><kbd>PE Deve CASL Unsubscribe Text Without PRP </kbd></p>
</div>
<script>
if(!window.EngagingNetworks)
{
    document.getElementById("casl_opt_in_footer").style.display = "block";
}
</script>
	
	
</div>
</div>
</div>
		<div class="en__component en__component--row en__component--row--2">
		<div class="en__component en__component en__component--column en__component--column--1">
		<div class="en__component en__component--copyblock"

style="







"
>
	<h3 class="form_header">Billing Information</h3>

	
	
</div>
		<div class="en__component en__component--formblock en__donation--billing--info" style="">
	
	
			<div class="en__field en__field--select en__field--215941 en__field--country en__mandatory">
	<label for="en__field_supporter_country" class="en__field__label" style="">Country/Region</label>
		<div class="en__field__element en__field__element--select">
		<select id="en__field_supporter_country" class="en__field__input en__field__input--select" name="supporter.country" >
			<option selected="selected" value="US">United States</option>
			<option value="CA">Canada</option>
			<option value="MX">Mexico</option>
			<option value="AU">Australia</option>
			<option value="GB">United Kingdom</option>
			<option value="AF">Afghanistan</option>
			<option value="AX">Ãland Islands</option>
			<option value="AL">Albania</option>
			<option value="DZ">Algeria</option>
			<option value="AS">American Samoa</option>
			<option value="AD">Andorra</option>
			<option value="AO">Angola</option>
			<option value="AI">Anguilla</option>
			<option value="AQ">Antarctica</option>
			<option value="AG">Antigua and Barbuda</option>
			<option value="AR">Argentina</option>
			<option value="AM">Armenia</option>
			<option value="AW">Aruba</option>
			<option value="AC">Ascension Island</option>
			<option value="AU">Australia</option>
			<option value="AT">Austria</option>
			<option value="AZ">Azerbaijan</option>
			<option value="AP">Azores</option>
			<option value="BS">Bahamas</option>
			<option value="BH">Bahrain</option>
			<option value="BD">Bangladesh</option>
			<option value="BB">Barbados</option>
			<option value="BY">Belarus</option>
			<option value="BE">Belgium</option>
			<option value="BZ">Belize</option>
			<option value="BJ">Benin</option>
			<option value="BM">Bermuda</option>
			<option value="BT">Bhutan</option>
			<option value="BO">Bolivia</option>
			<option value="BL">Bonaire</option>
			<option value="BA">Bosnia and Herzegovina</option>
			<option value="BW">Botswana</option>
			<option value="BV">Bouvet Island</option>
			<option value="BR">Brazil</option>
			<option value="IO">British Indian Ocean Territory</option>
			<option value="VG">British Virgin Islands</option>
			<option value="BN">Brunei Darussalam</option>
			<option value="BG">Bulgaria</option>
			<option value="BF">Burkina Faso</option>
			<option value="BI">Burundi</option>
			<option value="KH">Cambodia</option>
			<option value="CM">Cameroon</option>
			<option value="CA">Canada</option>
			<option value="IC">Canary Islands</option>
			<option value="CV">Cape Verde</option>
			<option value="BQ">Caribbean Netherlands</option>
			<option value="KY">Cayman Islands</option>
			<option value="CF">Central African Republic</option>
			<option value="TD">Chad</option>
			<option value="CD">Channel Islands</option>
			<option value="CL">Chile</option>
			<option value="CN">China</option>
			<option value="CX">Christmas Island</option>
			<option value="CC">Cocos (Keeling) Islands</option>
			<option value="CO">Colombia</option>
			<option value="KM">Comoros</option>
			<option value="CG">Congo</option>
			<option value="CK">Cook Islands</option>
			<option value="CR">Costa Rica</option>
			<option value="HR">Croatia</option>
			<option value="CU">Cuba</option>
			<option value="CW">Curacao</option>
			<option value="CY">Cyprus</option>
			<option value="CZ">Czech Republic</option>
			<option value="ZP">Democratic Republic of the Congo</option>
			<option value="DK">Denmark</option>
			<option value="DJ">Djibouti</option>
			<option value="DM">Dominica</option>
			<option value="DO">Dominican Republic</option>
			<option value="TP">East Timor</option>
			<option value="EC">Ecuador</option>
			<option value="EG">Egypt</option>
			<option value="SV">El Salvador</option>
			<option value="GQ">Equatorial Guinea</option>
			<option value="ER">Eritrea</option>
			<option value="EE">Estonia</option>
			<option value="ET">Ethiopia</option>
			<option value="FO">Faeroe Islands</option>
			<option value="FK">Falkland Islands</option>
			<option value="FJ">Fiji</option>
			<option value="FI">Finland</option>
			<option value="FR">France</option>
			<option value="GF">French Guiana</option>
			<option value="PF">French Polynesia</option>
			<option value="TF">French Southern Territories</option>
			<option value="GA">Gabon</option>
			<option value="GM">Gambia</option>
			<option value="GE">Georgia</option>
			<option value="DE">Germany</option>
			<option value="GH">Ghana</option>
			<option value="GI">Gibraltar</option>
			<option value="GR">Greece</option>
			<option value="GL">Greenland</option>
			<option value="GD">Grenada</option>
			<option value="GP">Guadeloupe</option>
			<option value="GU">Guam</option>
			<option value="GT">Guatemala</option>
			<option value="GG">Guernsey</option>
			<option value="GN">Guinea</option>
			<option value="GW">Guinea-Bissau</option>
			<option value="GY">Guyana</option>
			<option value="HT">Haiti</option>
			<option value="HM">Heard Island and McDonald Islands</option>
			<option value="HN">Honduras</option>
			<option value="HK">Hong Kong</option>
			<option value="HU">Hungary</option>
			<option value="IS">Iceland</option>
			<option value="IN">India</option>
			<option value="ID">Indonesia</option>
			<option value="IR">Iran</option>
			<option value="IQ">Iraq</option>
			<option value="IE">Ireland</option>
			<option value="IM">Isle of Man</option>
			<option value="IL">Israel</option>
			<option value="IT">Italy</option>
			<option value="CI">Ivory Coast</option>
			<option value="JM">Jamaica</option>
			<option value="JP">Japan</option>
			<option value="JE">Jersey</option>
			<option value="JO">Jordan</option>
			<option value="KZ">Kazakhstan</option>
			<option value="KE">Kenya</option>
			<option value="KI">Kiribati</option>
			<option value="KO">Kosrae</option>
			<option value="KW">Kuwait</option>
			<option value="KG">Kyrgyzstan</option>
			<option value="LA">Laos</option>
			<option value="LV">Latvia</option>
			<option value="LB">Lebanon</option>
			<option value="LS">Lesotho</option>
			<option value="LR">Liberia</option>
			<option value="LY">Libya</option>
			<option value="LI">Liechtenstein</option>
			<option value="LT">Lithuania</option>
			<option value="LU">Luxembourg</option>
			<option value="MO">Macau</option>
			<option value="MK">Macedonia</option>
			<option value="MG">Madagascar</option>
			<option value="MW">Malawi</option>
			<option value="MY">Malaysia</option>
			<option value="MV">Maldives</option>
			<option value="ML">Mali</option>
			<option value="MT">Malta</option>
			<option value="MH">Marshall Islands</option>
			<option value="MQ">Martinique</option>
			<option value="MR">Mauritania</option>
			<option value="MU">Mauritius</option>
			<option value="YT">Mayotte</option>
			<option value="MX">Mexico</option>
			<option value="FM">Micronesia</option>
			<option value="MD">Moldova</option>
			<option value="MC">Monaco</option>
			<option value="MN">Mongolia</option>
			<option value="ME">Montenegro</option>
			<option value="MS">Montserrat</option>
			<option value="MA">Morocco</option>
			<option value="MZ">Mozambique</option>
			<option value="MM">Myanmar</option>
			<option value="NA">Namibia</option>
			<option value="NR">Nauru</option>
			<option value="NP">Nepal</option>
			<option value="NL">Netherlands</option>
			<option value="NC">New Caledonia</option>
			<option value="NZ">New Zealand</option>
			<option value="NI">Nicaragua</option>
			<option value="NE">Niger</option>
			<option value="NG">Nigeria</option>
			<option value="NU">Niue</option>
			<option value="NF">Norfolk Island</option>
			<option value="KP">North Korea</option>
			<option value="MP">Northern Mariana Islands</option>
			<option value="NO">Norway</option>
			<option value="OM">Oman</option>
			<option value="PK">Pakistan</option>
			<option value="PW">Palau</option>
			<option value="PS">Palestinian Territory</option>
			<option value="PA">Panama</option>
			<option value="PG">Papua New Guinea</option>
			<option value="PY">Paraguay</option>
			<option value="PE">Peru</option>
			<option value="PH">Philippines</option>
			<option value="PN">Pitcairn</option>
			<option value="PL">Poland</option>
			<option value="PO">Ponape</option>
			<option value="PT">Portugal</option>
			<option value="PR">Puerto Rico</option>
			<option value="QA">Qatar</option>
			<option value="RE">Reunion</option>
			<option value="RO">Romania</option>
			<option value="RT">Rota</option>
			<option value="RU">Russian Federation</option>
			<option value="RW">Rwanda</option>
			<option value="KN">Saint Kitts and Nevis</option>
			<option value="LC">Saint Lucia</option>
			<option value="VC">Saint Vincent and the Grenadines</option>
			<option value="SP">Saipan</option>
			<option value="WS">Samoa</option>
			<option value="SM">San Marino</option>
			<option value="ST">Sao Tome and Principe</option>
			<option value="SA">Saudi Arabia</option>
			<option value="SN">Senegal</option>
			<option value="RS">Serbia</option>
			<option value="SC">Seychelles</option>
			<option value="SL">Sierra Leone</option>
			<option value="SG">Singapore</option>
			<option value="SK">Slovak Republic</option>
			<option value="SI">Slovenia</option>
			<option value="SB">Solomon Islands</option>
			<option value="SO">Somalia</option>
			<option value="ZA">South Africa</option>
			<option value="GS">South Georgia and South Sandwich Islands.</option>
			<option value="KR">South Korea</option>
			<option value="SS">South Sudan</option>
			<option value="ES">Spain</option>
			<option value="LK">Sri Lanka</option>
			<option value="NT">St. Barthelemy</option>
			<option value="SW">St. Christopher</option>
			<option value="EU">St. Eustatius</option>
			<option value="SH">St. Helena</option>
			<option value="SX">St. Maarten</option>
			<option value="MF">St. Martin</option>
			<option value="PM">St. Pierre and Miquelon</option>
			<option value="SD">Sudan</option>
			<option value="SR">Suriname</option>
			<option value="SJ">Svalbard and Jan Mayen Islands</option>
			<option value="SZ">Swaziland</option>
			<option value="SE">Sweden</option>
			<option value="CH">Switzerland</option>
			<option value="SY">Syria</option>
			<option value="TA">Tahiti</option>
			<option value="TW">Taiwan</option>
			<option value="TJ">Tajikistan</option>
			<option value="TZ">Tanzania</option>
			<option value="TH">Thailand</option>
			<option value="TI">Tinian</option>
			<option value="TG">Togo</option>
			<option value="TK">Tokelau</option>
			<option value="TO">Tonga</option>
			<option value="TL">Tortola</option>
			<option value="TT">Trinidad and Tobago</option>
			<option value="TU">Truk</option>
			<option value="TN">Tunisia</option>
			<option value="TR">Turkey</option>
			<option value="TM">Turkmenistan</option>
			<option value="TC">Turks and Caicos Islands</option>
			<option value="TV">Tuvalu</option>
			<option value="UG">Uganda</option>
			<option value="UA">Ukraine</option>
			<option value="UI">Union Island</option>
			<option value="AE">United Arab Emirates</option>
			<option value="GB">United Kingdom</option>
			<option value="US">United States</option>
			<option value="UY">Uruguay</option>
			<option value="UM">US Minor Outlying Islands</option>
			<option value="VI">US Virgin Islands</option>
			<option value="UZ">Uzbekistan</option>
			<option value="VU">Vanuatu</option>
			<option value="VA">Vatican City State</option>
			<option value="VE">Venezuela</option>
			<option value="VN">Vietnam</option>
			<option value="VR">Virgin Gorda</option>
			<option value="WF">Wallis and Futuna Islands</option>
			<option value="EH">Western Sahara</option>
			<option value="YA">Yap</option>
			<option value="YE">Yemen</option>
			<option value="ZR">Zaire</option>
			<option value="ZM">Zambia</option>
			<option value="ZW">Zimbabwe</option>
		</select>
	</div>
</div>
			<div class="en__field en__field--text en__field--215938 en__field--address1 en__mandatory">
	<label for="en__field_supporter_address1" class="en__field__label" style="">Street Address</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_address1" type="text" class="en__field__input en__field__input--text" name="supporter.address1" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--215939 en__field--address2">
	<label for="en__field_supporter_address2" class="en__field__label" style="">Street Address (Line 2)</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_address2" type="text" class="en__field__input en__field__input--text" name="supporter.address2" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--215940 en__field--city en__mandatory">
	<label for="en__field_supporter_city" class="en__field__label" style="">City</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_city" type="text" class="en__field__input en__field__input--text" name="supporter.city" value=""  />
	 </div>
</div>
			<div class="en__field en__field--select en__field--215943 en__field--region en__mandatory">
	<label for="en__field_supporter_region" class="en__field__label" style="">State/Province</label>
		<div class="en__field__element en__field__element--select">
		<select id="en__field_supporter_region" class="en__field__input en__field__input--select" name="supporter.region" >
			<option selected="selected" value="">Select</option>
			<option value="AL">Alabama</option>
			<option value="AK">Alaska</option>
			<option value="AS">American Samoa</option>
			<option value="AZ">Arizona</option>
			<option value="AR">Arkansas</option>
			<option value="AA">Armed Forces Americas (AA)</option>
			<option value="AE">Armed Forces Europe (AE)</option>
			<option value="AP">Armed Forces Pacific (AP)</option>
			<option value="CA">California</option>
			<option value="CO">Colorado</option>
			<option value="CT">Connecticut</option>
			<option value="DE">Delaware</option>
			<option value="DC">District of Columbia</option>
			<option value="FM">Federated States of Micronesia</option>
			<option value="FL">Florida</option>
			<option value="GA">Georgia</option>
			<option value="GU">Guam</option>
			<option value="HI">Hawaii</option>
			<option value="ID">Idaho</option>
			<option value="IL">Illinois</option>
			<option value="IN">Indiana</option>
			<option value="IA">Iowa</option>
			<option value="KS">Kansas</option>
			<option value="KY">Kentucky</option>
			<option value="LA">Louisiana</option>
			<option value="ME">Maine</option>
			<option value="MH">Marshall Islands</option>
			<option value="MD">Maryland</option>
			<option value="MA">Massachusetts</option>
			<option value="MI">Michigan</option>
			<option value="MN">Minnesota</option>
			<option value="MS">Mississippi</option>
			<option value="MO">Missouri</option>
			<option value="MT">Montana</option>
			<option value="NE">Nebraska</option>
			<option value="NV">Nevada</option>
			<option value="NH">New Hampshire</option>
			<option value="NJ">New Jersey</option>
			<option value="NM">New Mexico</option>
			<option value="NY">New York</option>
			<option value="NC">North Carolina</option>
			<option value="ND">North Dakota</option>
			<option value="MP">Northern Mariana Islands</option>
			<option value="OH">Ohio</option>
			<option value="OK">Oklahoma</option>
			<option value="OR">Oregon</option>
			<option value="PW">Palau</option>
			<option value="PA">Pennsylvania</option>
			<option value="PR">Puerto Rico</option>
			<option value="RI">Rhode Island</option>
			<option value="SC">South Carolina</option>
			<option value="SD">South Dakota</option>
			<option value="TN">Tennessee</option>
			<option value="TX">Texas</option>
			<option value="UT">Utah</option>
			<option value="VT">Vermont</option>
			<option value="VI">Virgin Islands</option>
			<option value="VA">Virginia</option>
			<option value="WA">Washington</option>
			<option value="WV">West Virginia</option>
			<option value="WI">Wisconsin</option>
			<option value="WY">Wyoming</option>
		</select>
	</div>
</div>
			<div class="en__field en__field--text en__field--215942 en__field--postcode en__mandatory">
	<label for="en__field_supporter_postcode" class="en__field__label" style="">Zip/Postal Code</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_postcode" type="text" class="en__field__input en__field__input--text" name="supporter.postcode" value=""  />
	 </div>
</div>

	
	
</div>
</div>
		<div class="en__component en__component en__component--column en__component--column--2">
		<div class="en__component en__component--copyblock"

style="







"
>
	<h3 class="form_header">Payment Information</h3>

	
	
</div>
		<div class="en__component en__component--formblock cc-select-vi-mc-ax-paypal" style="">
	
	
			<div class="en__field en__field--select en__field--161964 en__field--paymenttype en__mandatory">
	<label for="en__field_transaction_paymenttype" class="en__field__label" style="">Payment Type</label>
		<div class="en__field__element en__field__element--select">
		<select id="en__field_transaction_paymenttype" class="en__field__input en__field__input--select" name="transaction.paymenttype" >
			<option value="VI">Visa</option>
			<option value="MC">MasterCard</option>
			<option value="AX">Amex</option>
			<option value="DI">Discover</option>
			<option value="paypal">Paypal</option>
		</select>
	</div>
</div>

	
	
</div>
		<div class="en__component en__component--copyblock cc__icons"

style="







"
>
	<ul>
	<li><img alt="Visa" src="https://resources.peta.org/engaging-networks/pages/_shared/images/cc-visa.png" /></li>
	<li><img alt="Mastercard" src="https://resources.peta.org/engaging-networks/pages/_shared/images/cc-mastercard.png" /></li>
	<li><img alt="American Express" src="https://resources.peta.org/engaging-networks/pages/_shared/images/cc-amex.png" /></li>
	<li><img alt="Discover" src="https://resources.peta.org/engaging-networks/pages/_shared/images/cc-discover.png" /></li>
	<li><img alt="Paypal" src="https://resources.peta.org/engaging-networks/pages/_shared/images/cc-paypal.png" /></li>
</ul>

	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<div class="en__field en__field--text en__field--956 en__field--ccnumber en__mandatory">
	<label for="en__field_transaction_ccnumber" class="en__field__label" style="">Credit Card Number</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_transaction_ccnumber" type="text" class="en__field__input en__field__input--text" name="transaction.ccnumber" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--958 en__field--ccvv en__mandatory">
	<label for="en__field_transaction_ccvv" class="en__field__label" style="">CVV Number</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_transaction_ccvv" type="text" class="en__field__input en__field__input--text" name="transaction.ccvv" value=""  />
	 </div>
</div>
			<div class="en__field en__field--splitselect en__field--962 en__field--ccexpire en__mandatory">
	<label for="en__field_transaction_ccexpire" class="en__field__label" style="">Credit Card Expiration</label>
	<div class="en__field__element en__field__element--splitselect">
		<input type="hidden" name="transaction.ccexpire.delimiter" value="">
		<div class="en__field__item">
			<select id="en__field_transaction_ccexpire" class="en__field__input en__field__input--splitselect" name="transaction.ccexpire" >
				<option selected="selected" value="">MM</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
			</select>
		</div>
		<div class="en__field__item">
		<select class="en__field__input en__field__input--splitselect" name="transaction.ccexpire" >
				<option selected="selected" value="">YYYY</option>
				<option value="20">2020</option>
				<option value="21">2021</option>
				<option value="22">2022</option>
				<option value="23">2023</option>
				<option value="24">2024</option>
				<option value="25">2025</option>
				<option value="26">2026</option>
				<option value="27">2027</option>
				<option value="28">2028</option>
				<option value="29">2029</option>
				<option value="30">2030</option>
				<option value="31">2031</option>
				<option value="32">2032</option>
				<option value="33">2033</option>
				<option value="34">2034</option>
				<option value="35">2035</option>
				<option value="36">2036</option>
				<option value="37">2037</option>
			</select>
		</div>
	</div>
</div>
			<div class="en__field en__field--text en__field--3043 en__field--bankRoutingNumber en__mandatory">
	<label for="en__field_supporter_bankRoutingNumber" class="en__field__label" style="">Bank Routing Number</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_bankRoutingNumber" type="text" class="en__field__input en__field__input--text" name="supporter.bankRoutingNumber" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--3022 en__field--bankAccountNumber en__mandatory">
	<label for="en__field_supporter_bankAccountNumber" class="en__field__label" style="">Bank Account Number</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_bankAccountNumber" type="text" class="en__field__input en__field__input--text" name="supporter.bankAccountNumber" value=""  />
	 </div>
</div>
			<div class="en__field en__field--text en__field--3033 en__field--NOT_TAGGED_60 en__mandatory">
	<label for="en__field_supporter_NOT_TAGGED_60" class="en__field__label" style="">Verify Bank Account Number</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_NOT_TAGGED_60" type="text" class="en__field__input en__field__input--text" name="supporter.NOT_TAGGED_60" value=""  />
	 </div>
</div>
			<div class="en__field en__field--radio en__field--3021 en__field--bankAccountType en__mandatory">
	<label for="en__field_supporter_bankAccountType" class="en__field__label" style="">Bank Account Type</label>
	<div class="en__field__element en__field__element--radio
" >
		<div class="en__field__item">
			<input id="en__field_supporter_bankAccountType0" type="radio" class="en__field__input en__field__input--radio" value="Checking" name="supporter.bankAccountType" />
			<label for="en__field_supporter_bankAccountType0" class="en__field__label en__field__label--item" >Checking</label>
		</div>
		<div class="en__field__item">
			<input id="en__field_supporter_bankAccountType1" type="radio" class="en__field__input en__field__input--radio" value="Savings" name="supporter.bankAccountType" />
			<label for="en__field_supporter_bankAccountType1" class="en__field__label en__field__label--item" >Savings</label>
		</div>
	</div>
</div>
			<div class="en__field en__field--checkbox en__field--3044 en__field--NOT_TAGGED_99 en__mandatory">
	<label class="en__field__label" style="">Bank Account Used as a Payment Method</label>
	<div class="en__field__element en__field__element--checkbox
	" >
		<div class="en__field__item">
			<input id="en__field_supporter_NOT_TAGGED_99" type="checkbox" class="en__field__input en__field__input--checkbox" value="Y" name="supporter.NOT_TAGGED_99" />
			<label for="en__field_supporter_NOT_TAGGED_99" class="en__field__label en__field__label--item" >By checking this option, I agree to use my U.S. bank account as a payment method and authorize this organization to debit my bank account to fulfill my donation commitment.</label>
		</div>
	</div>
</div>
			<input type="hidden" class="en__field__input en__field__input--hidden" name="transaction.othamt3" value="" />

			<input type="hidden" class="en__field__input en__field__input--hidden" name="supporter.NOT_TAGGED_15" value="I agree to the PayPal billing agreement." />

			<input type="hidden" class="en__field__input en__field__input--hidden" name="transaction.paycurrency" value="USD" />


	
	
</div>
		<div class="en__component en__component--formblock" style="">
	
	
			<div class="en__field en__field--text en__field--234350 en__field--NOT_TAGGED_16">
	<label for="en__field_supporter_NOT_TAGGED_16" class="en__field__label" style="">IMG Source</label>
	<div class="en__field__element en__field__element--text">
		<input id="en__field_supporter_NOT_TAGGED_16" type="text" class="en__field__input en__field__input--text" name="supporter.NOT_TAGGED_16" value=""  />
	 </div>
</div>
			<input type="hidden" class="en__field__input en__field__input--hidden" name="supporter.NOT_TAGGED_2" value="" />

			<div class="en__captcha">
	<div class="g-recaptcha" data-sitekey="6LdjFAUTAAAAAOR0XkVp_ORlGPrlOB_WMer01f2H"></div>
</div>

	
	<div class="en__submit"><button style="">Submit My Secure Donation</button></div>
</div>
</div>
</div>
		<div class="en__component en__component--row en__component--row--1">
		<div class="en__component en__component en__component--column en__component--column--1">
</div>
</div>
		<div class="en__component en__component--row en__component--row--1">
		<div class="en__component en__component en__component--column en__component--column--1">
		<div class="en__component en__component--copyblock smaller_text"

style="







"
>
	<p align="center">Donations to PETA are in U.S. dollars and are tax-deductible to the fullest extent allowed by U.S. law. PETA&#39;s tax ID number is 52-1218336. Please print or save this message for your personal records.</p>

	
	
</div>
		<div class="en__component en__component--copyblock smaller_text"

style="







"
>
	<div class="is_monthly_element">
<p align="center">Thanks to a generous foundation supporting PETA&#39;s work, an additional gift of $75 will be made to benefit our Investigations &amp; Rescue Fund for each new monthly donor who gives via this form until December 31, 2021, or until the $75,000 campaign goal is met. Donations made after the goal has been met will not qualify for the extra $75 gift, but they&#39;ll still make a tremendous difference to animals.</p>
</div>

	
	
</div>
		<div class="en__component en__component--codeblock"><style>
/* DO NOT ADD ADDITIONAL STYLES
For hiding recurring payment label ONLY */

.en__field--recurrpay label:first-child {
  display:none !important;
}
</style></div>
		<div class="en__component en__component--codeblock"><script>
    $(document).ready(function(){
        if(document.getElementsByName("transaction.donationAmt").length){
            tipJar.initDOM({
                tipjarContent: 'For just $%tipcost% more, I would like to cover the transaction fees and help <em>even more</em> animals.',
                useEngagingNetworksHooks: false,		//If true, uses "enOnSubmit" to process donation amount updates.
			    attachToSubmitClick: false,		        //This is ignored if "useEngagingNetworksHooks" is true.
			    exposedSubmitHandler: "tipJarSubmit",	//Function name for tip jar handler. Called within submit process
			    dynamicTipIntro: true
             });
        }
 });
</script></div>
		<div class="en__component en__component--copyblock"

style="







"
>
	<!--  HIDDEN POPUP HTML -->
<div class="cc-popup mfp-hide" id="ccv">
<div class="row">
<div class="small-12 medium-12 medium-text-left columns">
<h3>What is the Verification Code and what does it look like?</h3>

<p>For your protection, we ask that you enter an extra 3-4 digit number called the CVV2. The CVV2 is NOT your PIN number. It is an extra ID printed on your Visa, MasterCard, Discover, or American Express Card.</p>
</div>

<div class="small-12 medium-8 medium-text-left columns">
<h4>Visa, MasterCard &amp; Discover</h4>

<p>On the back of the card in the top-right corner of the signature box, as depicted in the image to the right. Enter the three-digit number following the credit card number.</p>
</div>

<div class="small-12 text-center medium-4 medium-text-right columns">
<p align="center"><img alt="The CVV2 is shown as 3 digits after the credit card number on the back of the card." src="https://resources.peta.org/engaging-networks/pages/_shared/images/visa-cvv2.jpg" /></p>
</div>

<div class="small-12 medium-8 medium-text-left columns">
<h4>American Express</h4>

<p>On the front of the card as depicted in the image to the right. Enter the four-digit number on the right directly above the credit card number.</p>
</div>

<div class="small-12 text-center medium-4 medium-text-right columns">
<p align="center"><img alt="The CVV2 is shown as 4 digits on the front of the card." src="https://resources.peta.org/engaging-networks/pages/_shared/images/amex-cvv2.jpg" /></p>
</div>
</div>
</div>

<div id="ccv-info" style="display: none;">
<p><kbd>UN POP Credit Card Verification Code Info Popup</kbd></p>
</div>
<script>
if(!window.EngagingNetworks)
{
    document.getElementById("ccv-info").style.display = "block";
}
</script>
	
	
</div>
		<div class="en__component en__component--copyblock"

style="







"
>
	<!--<p class="ccvv__link"><a class="open-popup-link" href="#bank-routing-info">Bank Routing Number?</a></p>-->
<p class="ccvv__link"><a class="open-popup-link" href="#bank-routing-info"><i aria-hidden="true" class="fa fa-question-circle">&nbsp;</i></a> <!--  HIDDEN POPUP HTML --></p>

<div class="cc-popup mfp-hide" id="bank-routing-info">
<div class="row">
<div class="small-12 medium-text-left columns">
<h3>Bank Routing &amp; Account Numbers</h3>

<p>To make a payment directly from your U.S. bank account, you will need to provide the routing number for your bank, as well as your account number. Both of these numbers can be found at the bottom of a check issued for your bank account.</p>

<p>At the bottom of your check you will find three numbers - the routing number which is always 9 digits long for U.S. banks, the account number which can be up to 17 digits long, and the check number which will match the number found in the upper right corner of the check. These sets of numbers can appear in a variety of orders on your check. However, you will always find the routing number surrounded by this symbol ACH Routing Symbol, and the account number will always be to the left of this symbol ACH Account Symbol.</p>

<p>Please use the image below for an example of how your routing and account numbers may appear on your check.</p>
</div>

<div class="small-12 medium-text-left columns">
<h4>Sample Check:</h4>

<p>The routing number comes first and is surrounded by the ACH Routing Symbol symbol, the account number comes next and is followed by the ACH Account Symbol symbol.</p>
</div>

<div class="small-12 medium-text-left columns">
<p align="center"><img alt="The CVV2 is shown as 3 digits after the credit card number on the back of the card." src="https://resources.peta.org/engaging-networks/pages/_shared/images/bank-routing.gif" /></p>
</div>
</div>
</div>

<div id="bank-info" style="display: none;">
<p><kbd>UN POP Bank Routing Number Info Popup</kbd></p>
</div>
<script>
if(!window.EngagingNetworks)
{
    document.getElementById("bank-info").style.display = "block";
}
</script>
	
	
</div>
</div>
</div>
		<div class="en__component en__component--row en__component--row--1">
		<div class="en__component en__component en__component--column en__component--column--1">
</div>
</div>
		<div class="en__component en__component--row en__component--row--1">
		<div class="en__component en__component en__component--column en__component--column--1">
		<div class="en__component en__component--codeblock"><script>
    jQuery("div.en__field.en__field--recurrpay").append(jQuery("div.repeat_text.is_monthly_element").detach());
    var dtValue = 
    jQuery("[name='supporter.questions.191534']").val(
        ((document.location.search.match(/[?&]dt=([^&]+)/)      //There is any dt= URL parameter
        || (document.location.search.match(/[?&]dt=/) == null 
            && document.location.search.match(/[?&]ea.profile.id=([^&]+)/))   //There is a profile ID on the URL
        || (typeof pageJson.supporterId !== "undefined" 
            && document.location.search.match(/[?&]ea.url.id=/) != null 
            && document.location.search.indexOf('&forwarded=true') == -1 && [null,"HPC"])    //Page came through email, and is a first-time click
        || [null, ""])[1])
            .toLowerCase());

</script></div>
</div>
</div>
</form><!--START Google Analytics Social Button Tracking-->
<script language="javascript" type="text/javascript" src="https://resources.peta.org/googleAnalytics/global/ga_social_tracking.js"></script>
<!--END Google Analytics Social Button Tracking-->

<script language="javascript" type="text/javascript">
jQuery(document).ready(function($) {
    if(window.location.pathname.indexOf("donate/2") >= 0)  {
        console.log('scroll up');
        jQuery("html, body").animate({ scrollTop: 0 }, "fast");
    }
});
</script>

<!-- Lightbox BEGIN -->
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/js/jquery.magnific-popup.min.js"></script> 
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/js/magnific-scripts.js"></script>
<!-- Lightbox END -->

<!--calculator script-->
<script>
(function(scriptSrc){
    petaEN.utility.whenAvailable("Promise",function(){
        var myScript = document.createElement("script");
        myScript.setAttribute("src", scriptSrc);
        document.body.appendChild(myScript);
    });
})("https://resources.peta.org/engaging-networks/pages/peta/js/4site/conversion-rate.js");

</script>
<!--/calculator script-->

<script type="text/javascript" src="https://h.online-metrix.net/fp/tags.js?org_id=e0j3u9ji&session_id=10003-e9c42f77062f4c759a3e855c1b92a9e2-use2-prd-web1&pageid=1"></script>
<noscript>
<iframe style="width: 100px; height: 100px; border: 0; position: absolute; top: -5000px;" src="https://h.online-metrix.net/tags?org_id=e0j3u9ji&session_id=10003-e9c42f77062f4c759a3e855c1b92a9e2-use2-prd-web1&pageid=1"></iframe>
</noscript>
<script type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/js/applepay.js"></script>
<script>
    //PAGE SETUP - BEFORE FORM IS CREATED
    pageInitialization.afterPageLoad();
</script>
<script language="javascript" type="text/javascript" src="https://resources.peta.org/engaging-networks/pages/_shared/peta-js/peta-en-footer.js"></script>
</body>
</html>   
<!-- PE FOD GEN 2020-09 Embedded Headlines version of 1828 IXXXWBXXXXG GIT DTY OTMON Checkbox 2Col:22134:57700:10003 -->