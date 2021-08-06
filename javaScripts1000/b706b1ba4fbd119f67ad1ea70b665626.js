/*AUTHORITIES*/
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_dp_SignUp_SignIn",
        forgotPassword: "B2C_1_dp_Reset",
        editProfile: "B2C_1_dp_edit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://FanFedertennis.b2clogin.com/FanFedertennis.onmicrosoft.com/B2C_1_dp_SignUp_SignIn",
        },
        forgotPassword: {
            authority: "https://FanFedertennis.b2clogin.com/FanFedertennis.onmicrosoft.com/B2C_1_dp_Reset",
        },
        editProfile: {
            authority: "https://FanFedertennis.b2clogin.com/FanFedertennis.onmicrosoft.com/B2C_1_dp_edit"
        }
    },
}
/*API CONFIG*/
const apiConfig = {
  b2cScopes: ["https://FanFedertennis.onmicrosoft.com/dpsupertennis/user_impersonation"],
  webApi: "https://fabrikamb2chello.azurewebsites.net/hello"
};

/* AUTH CONFIG*/
const msalConfig = {
  auth: {
    clientId: "63bed121-efc6-462a-83d2-ee0742432191",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    validateAuthority: false,
	redirectUri: "https://www.supertennis.tv",
	//postLogoutRedirectUri: "https://myfit.federtennis.it/MicrosoftIdentity/Account/SignedOut",
	navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
  }
};

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
const loginRequest = {
  scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
const tokenRequest = {
  scopes: apiConfig.b2cScopes,  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};

/**/
// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

let accessToken;

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack(error, response) {
  // Error handling
  if (error) {
    //console.log(error);

    // Check for forgot password error
    // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
    if (error.errorMessage.indexOf("AADB2C90118") > -1) {
      try {
        // Password reset policy/authority
        myMSALObj.loginRedirect(b2cPolicies.authorities.forgotPassword);
      } catch(err) {
        //console.log(err);
      }
    }
  } else {
    // We need to reject id tokens that were not issued with the default sign-in policy.
    // "acr" claim in the token tells us what policy is used (NOTE: for new policies (v2.0), use "tfp" instead of "acr")
    // To learn more about b2c tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
    //console.log("risposta token")
	//console.log(response)
	if (response.tokenType === "id_token" && response.idToken.claims['tfp'] === b2cPolicies.names.forgotPassword) {
	  //console.log("entro forgotPassword");
	  myMSALObj.loginRedirect(loginRequest);
	  //myMSALObj.logout();
      //window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");

    } else if (response.tokenType === "id_token" && response.idToken.claims['tfp'] === b2cPolicies.names.editProfile) {
      window.alert("Profile has been updated successfully.");

      if (myMSALObj.getAccount()) {
		//console.log("UPDATE UI")
        updateUI();
      }

    } else if (response.tokenType === "id_token" && response.idToken.claims['tfp'] === b2cPolicies.names.signUpSignIn) {
      //console.log("id_token acquired at: " + new Date().toString());
	  logLogin();
	  getLocalStorage();
      if (myMSALObj.getAccount()) {
        updateUI();
      }

    } else if (response.tokenType === "access_token") {
        //console.log("access_token acquired at: " + new Date().toString());
        accessToken = response.accessToken;
        logMessage("Request made to Web API:");
        if (accessToken) {
          try {
            callApiWithAccessToken(apiConfig.webApi, accessToken);
          } catch (err) {
            //console.log(err);
          }
        }
    } else {
        //console.log("Token type is: " + response.tokenType);
		getLocalStorage();
    }
  }
}

function signIn() {
  myMSALObj.loginRedirect(loginRequest);
}  

// sign-out the user
function logout() {
	// Removes all sessions, need to call AAD endpoint to do full logout
	var localguid = localStorage.getItem("Guid");
	var localtoken = localStorage.getItem("Token");

	//SSOLogout();

	var loginlocalfedertennis1 = document.createElement("iframe");
	loginlocalfedertennis1.setAttribute("src", "https://www.federtennis.it/SSO/logout.html?Guid=" + String(localtoken) + "&Token=" + String(localtoken));
	loginlocalfedertennis1.style.width = "1px";
	loginlocalfedertennis1.style.height = "1px";
	document.body.appendChild(loginlocalfedertennis1);
	
	var loginlocalmyfit = document.createElement("iframe");
	loginlocalmyfit.setAttribute("src", "https://myfit.federtennis.it/SSO/logout.html?Guid=" + String(localtoken) + "&Token=" + String(localtoken));
	loginlocalmyfit.style.width = "1px";
	loginlocalmyfit.style.height = "1px";
	document.body.appendChild(loginlocalmyfit);

	clearLocalStorage();
	//myMSALObj.logout();
	window.location.href = "https://myfit.federtennis.it/?logout=1";
}

// main method to get token with redirect flow
function getTokenRedirect(request) {
return myMSALObj.acquireTokenSilent(request)
  .then((response) => {
    if (response.accessToken) {
      accessToken = response.accessToken;
      logMessage("Request made to Web API:");

      if (accessToken) {
        try {
          callApiWithAccessToken(apiConfig.webApi, accessToken);
        } catch (err) {
          //console.log(err);
        }
      }
    }
  }).catch(error => {
    //console.log("Silent token acquisition fails. Acquiring token using redirect");
    //console.log(error);
    // fallback to interaction when silent call fails
    return myMSALObj.acquireTokenRedirect(request);
  });
}


// calls the resource API with the token
function passTokenToApi() {
  if (!accessToken) {
    getTokenRedirect(tokenRequest);
  } else {
      logMessage("Request made to Web API:");
      try {
        callApiWithAccessToken(apiConfig.webApi, accessToken);
      } catch (err) {
        //console.log(err);
      }
  }
}

function editProfile() {
  myMSALObj.loginRedirect(b2cPolicies.authorities.editProfile);
}

// helper function to access the resource with the token
function callApiWithAccessToken(endpoint, token) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers: headers
    };

  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => {
      logMessage("Web API returned:\n" + JSON.stringify(response));
    }).catch(error => {
      logMessage("Error calling the Web api:\n" + error);
    });
}

function getLocalStorage(){
	lsBearer = localStorage.getItem("msal.63bed121-efc6-462a-83d2-ee0742432191.idtoken");
	lsGuid = localStorage.getItem("Guid");
	//console.log("Bearer : " + lsBearer);
	//console.log("lsGuid : " + lsGuid);
	if(lsBearer != "" && lsBearer != null && lsBearer != undefined){
		if(lsGuid === "" || lsGuid == null && lsGuid == undefined){
			jQueryV2.ajax({
				url: 'https://dp-fit-prod-function.azurewebsites.net/api/v6/sso/login',
				type: 'POST',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Bearer ' + String(lsBearer));
				},
				//data: {},
				success: function (response) {
					console.log(response)
					localStorage.setItem("Guid", String(response.guid));
					localStorage.setItem("Member", +response.member);
					localStorage.setItem("Teacher", +response.teacher);
					localStorage.setItem("Udg", +response.udg);
					localStorage.setItem("AcceptProfilation", response.acceptProfilation);
					localStorage.setItem("Hashkey", String(response.hashkey));
					localStorage.setItem("Points", String(response.points));
					localStorage.setItem("Token", String(response.token));
					localStorage.setItem("AgoTennis", response.agoTennis);
					localStorage.setItem("AgoPaddle", response.agoPaddle);
					localStorage.setItem("AgoBeach", response.agoBeach);
					localStorage.setItem("PrivacyAccepted",+response.acceptedPrivacy)
					localStorage.setItem("RankTennis",String(response.rankTennis));
					localStorage.setItem("RankPaddle",String(response.rankPaddle));
					localStorage.setItem("RankBeach",String(response.rankBeach));
					
					var curDate = new Date();
					var valDatePicker = curDate.getFullYear() + "-" + String(curDate.getMonth() + 1).padStart(2, '0') + "-" + String(curDate.getDate()).padStart(2, '0')

					localStorage.setItem("dataCreatedLoginSSO", valDatePicker);

					
					var loginlocalfedertennis = document.createElement("iframe");
					loginlocalfedertennis.setAttribute("src", "https://www.federtennis.it/SSO/login.html?Guid=" + String(response.guid) + "&Token=" + String(localStorage.getItem("Token")));
					loginlocalfedertennis.style.width = "1px";
					loginlocalfedertennis.style.height = "1px";
					document.body.appendChild(loginlocalfedertennis);
					
					var loginlocalmyfit = document.createElement("iframe");
					loginlocalmyfit.setAttribute("src", "https://myfit.federtennis.it/SSO/login.html?Guid=" + String(localStorage.getItem("Guid")) + "&Token=" + String(localStorage.getItem("Token")));
					loginlocalmyfit.style.width = "1px";
					loginlocalmyfit.style.height = "1px";
					document.body.appendChild(loginlocalmyfit);
					
					jQueryV2("#news-right-block").html('<a href="https://myfit.federtennis.it" class="cc-link cc-link-myfit we"><span class="cc-text">My FIT</span></a><div class="cc-link cc-link-icon cc-link-coins"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.103 0 20.207 20" xml:space="preserve"><path d="M10,0C4.299,0,0,2.149,0,5v5v0.143v5C0,17.912,4.299,20,10,20s10-2.088,10-4.857v-5V10V5 C20,2.149,15.701,0,10,0z M10,2c4.884,0,8,1.777,8,3s-3.116,3-8,3C5.117,8,2,6.223,2,5S5.117,2,10,2z M10,18 c-4.883,0-8-1.692-8-2.857V13.12C3.794,14.275,6.65,15,10,15s6.206-0.725,8-1.88v2.022C18,16.308,14.884,18,10,18z M18,10.143 C18,11.308,14.884,13,10,13c-4.883,0-8-1.692-8-2.857V10V8.064C3.794,9.254,6.65,10,10,10s6.206-0.746,8-1.936V10V10.143z"/></svg><div class="cc-content-number cc-active"><span class="cc-number" id="fitCoinAmount">' + String(response.points) + '</span></div></div><div class="cc-link cc-link-icon cc-has-child cc-link-notifications"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.103 0 20.207 20" xml:space="preserve"><path d="M20.104,17.333l-1.328-1.632c-0.023-0.027-2.236-2.777-2.236-5.501V6.52C16.539,2.986,13.545,0,10,0 C6.456,0,3.461,2.986,3.461,6.52V10.2c0,2.723-2.213,5.474-2.235,5.501l-1.329,1.633h7.137C7.203,18.829,8.46,20,10,20 c1.541,0,2.798-1.171,2.966-2.666H18L20.104,17.333z M10,18c-0.434,0-0.794-0.28-0.933-0.666h1.866C10.795,17.72,10.434,18,10,18z M3.877,15.334C4.62,14.055,5.461,12.17,5.461,10.2V6.52C5.461,4.07,7.541,2,10,2c2.46,0,4.539,2.07,4.539,4.52V10.2 c0,1.97,0.842,3.854,1.584,5.134H3.877z"/></svg><div class="cc-content-number cc-active"><span class="cc-number" id="notReadNotification">0</span></div></div><div class="cc-link we cc-link-exit" onclick="javascript:logout();" id="logout"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.414 16" xml:space="preserve"><polygon points="10,12.414 14.414,8 10,3.586 8.586,5 10.586,7 4,7 4,9 10.586,9 8.586,11"/><path d="M2,2h9V0H1C0.448,0,0,0.448,0,1v14c0,0.552,0.448,1,1,1h10v-2H2V2z"/></svg><span class="cc-text" onclick="javascript:logout();">Esci</span></div>');
					
					if(Boolean(response.acceptedPrivacy) == false)
							showPopUpPrivacyAdvice();
				},
				error: function () { },
			});
		}
	}
	checkUIbyGuid();
}

function clearLocalStorage(){
	//console.log("clearLocalStorage")
	/*
	localStorage.removeItem("Guid");
	localStorage.removeItem("Member");
	localStorage.removeItem("Teacher");
	localStorage.removeItem("Udg");
	localStorage.removeItem("AcceptProfilation");
	localStorage.removeItem("Hashkey");
	localStorage.removeItem("Points");
	localStorage.removeItem("Token");
	localStorage.removeItem("AgoTennis");
	localStorage.removeItem("AgoPaddle");
	localStorage.removeItem("AgoBeach");
	localStorage.removeItem("Norobot");
	*/
	localStorage.clear();
}

function checkUIbyGuid()
{
	//console.log("checkUIbyGuid")
	var lsGuid = localStorage.getItem("Guid");
	//console.log("lsGuid " + lsGuid);
	console.log("SONO FUORI ");
	if(lsGuid != null && lsGuid != "" && lsGuid != undefined){
		console.log("ENTRO ");
		jQueryV2("#news-right-block").html('<a href="https://myfit.federtennis.it" class="cc-link cc-link-myfit we"><span class="cc-text">My FIT</span></a><div class="cc-link cc-link-icon cc-link-coins"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.103 0 20.207 20" xml:space="preserve"><path d="M10,0C4.299,0,0,2.149,0,5v5v0.143v5C0,17.912,4.299,20,10,20s10-2.088,10-4.857v-5V10V5 C20,2.149,15.701,0,10,0z M10,2c4.884,0,8,1.777,8,3s-3.116,3-8,3C5.117,8,2,6.223,2,5S5.117,2,10,2z M10,18 c-4.883,0-8-1.692-8-2.857V13.12C3.794,14.275,6.65,15,10,15s6.206-0.725,8-1.88v2.022C18,16.308,14.884,18,10,18z M18,10.143 C18,11.308,14.884,13,10,13c-4.883,0-8-1.692-8-2.857V10V8.064C3.794,9.254,6.65,10,10,10s6.206-0.746,8-1.936V10V10.143z"/></svg><div class="cc-content-number cc-active"><span class="cc-number" id="fitCoinAmount">' + String(localStorage.getItem("Points")) + '</span></div></div><div class="cc-link cc-link-icon cc-has-child cc-link-notifications"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.103 0 20.207 20" xml:space="preserve"><path d="M20.104,17.333l-1.328-1.632c-0.023-0.027-2.236-2.777-2.236-5.501V6.52C16.539,2.986,13.545,0,10,0 C6.456,0,3.461,2.986,3.461,6.52V10.2c0,2.723-2.213,5.474-2.235,5.501l-1.329,1.633h7.137C7.203,18.829,8.46,20,10,20 c1.541,0,2.798-1.171,2.966-2.666H18L20.104,17.333z M10,18c-0.434,0-0.794-0.28-0.933-0.666h1.866C10.795,17.72,10.434,18,10,18z M3.877,15.334C4.62,14.055,5.461,12.17,5.461,10.2V6.52C5.461,4.07,7.541,2,10,2c2.46,0,4.539,2.07,4.539,4.52V10.2 c0,1.97,0.842,3.854,1.584,5.134H3.877z"/></svg><div class="cc-content-number cc-active"><span class="cc-number" id="notReadNotification">0</span></div></div><div class="cc-link we cc-link-exit" onclick="javascript:logout();" id="logout"><svg class="cc-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14.414 16" xml:space="preserve"><polygon points="10,12.414 14.414,8 10,3.586 8.586,5 10.586,7 4,7 4,9 10.586,9 8.586,11"/><path d="M2,2h9V0H1C0.448,0,0,0.448,0,1v14c0,0.552,0.448,1,1,1h10v-2H2V2z"/></svg><span class="cc-text" onclick="javascript:logout();">Esci</span></div>');
		
		Referer = localStorage.getItem("Referer");
		if(Referer != null && Referer != "" && Referer != undefined){
			localStorage.removeItem("Referer");
			window.location.href = Referer
			return false;
		}
		else
		{
			localStorage.removeItem("Referer");
		}
	}
}

function updateUI(response) {
	checkUIbyGuid();
}

function checkPrivacy(){
	lsBearer = localStorage.getItem("msal.63bed121-efc6-462a-83d2-ee0742432191.idtoken");
	lsPrivacyAccepted = localStorage.getItem("PrivacyAccepted");
	lsGuid = localStorage.getItem("Guid");
	lsToken = localStorage.getItem("Token");
	
	if(lsBearer != "" && lsBearer != null && lsBearer != undefined || lsToken != "" && lsToken != null && lsToken != undefined){
		if(lsGuid != null && lsGuid != "" && lsGuid != undefined){
			if(lsPrivacyAccepted === "" || lsPrivacyAccepted == null && lsPrivacyAccepted == undefined || lsPrivacyAccepted === 0 || lsPrivacyAccepted == 0){	
				//console.log("chiamata function per privacy")
				
				//console.log("lsBearer " + lsBearer)
				//console.log("lsToken " + lsToken)
				
				
				if ((lsBearer === "" || lsBearer == null || lsBearer == undefined) && (lsToken != "" && lsToken != null && lsToken != undefined))
				{
					lsBearer = lsToken;
				}
				
				
				jQueryV2.ajax({
					url: 'https://dp-fit-prod-function.azurewebsites.net/api/v6/sso/login',
					type: 'POST',
					beforeSend: function (xhr) {
						xhr.setRequestHeader('Authorization', 'Bearer ' + String(lsBearer));
					},
					//data: {},
					success: function (response) {
						//console.log(response)
						localStorage.setItem("PrivacyAccepted",+response.acceptedPrivacy);
						
						var loginlocalsupertennis = document.createElement("iframe");
						loginlocalsupertennis.setAttribute("src", "https://www.federtennis.it/SSO/login.html?Guid=" + String(response.guid) + "&Token=" + String(localStorage.getItem("Token")));
						loginlocalsupertennis.style.width = "1px";
						loginlocalsupertennis.style.height = "1px";
						document.body.appendChild(loginlocalsupertennis);
						
						var loginlocalmyfit = document.createElement("iframe");
						loginlocalmyfit.setAttribute("src", "https://myfit.federtennis.it/SSO/login.html?Guid=" + String(localStorage.getItem("Guid")) + "&Token=" + String(localStorage.getItem("Token")));
						loginlocalmyfit.style.width = "1px";
						loginlocalmyfit.style.height = "1px";
						document.body.appendChild(loginlocalmyfit);
						
						if(Boolean(response.acceptedPrivacy) == false)
							showPopUpPrivacyAdvice();
					},
					error: function () { },
				});
			}
		}
	}
}

function showPopUpPrivacyAdvice() {
	//return false;
	if (window.suppressPrivacyAdvice) return;
	var popuUp = '<div id="popup" class="cc-overlay cc-overlay-purchase cc-overlay-privacyadvice" style="display: block;">' +
		'   <div class="cc-overlay-main cc-overlay-main-small"   style="background: white;">' +
		//'      <div class="cc-close-button">' +
		//'         <div class="cc-svg cc-svg-close-primary-color jq-popup-close"><span>Chiudi</span></div>' +
		//'      </div>' +
		'      <section class="cc-purchase-contents">' +
		'         <div class="cc-content-title cc-content-title-feedback">' +
		'            <div class="cc-content-icon">' +
		'               <div class="cc-svg cc-svg-purchase-ko"><span>Ok</span></div>' +
		'            </div>' +
		'            <h1 class="cc-purchase-main-title" style="color:#222225">Privacy Policy<br></h1>' +
		'            <p class="cc-purchase-subtitle">Raccolta consensi</p>' +
		'         </div>' +
		'         <div class="cc-content-main-info cc-small-padding-top">' +
		'			 <p>Vorremmo utilizzare i cookie per offrirti una migliore esperienza di navigazione sul nostro sito web e per avere statistiche sull\'uso dei nostri servizi da parte dell\'utenza. Questo sito utilizza i cookie anche di terze parti. Potrai gestire o revocare il tuo consenso in qualsiasi momento. Informazioni dettagliate possono essere trovate nella nostra</p>' +
		'            <div class="cc-content-button"><a href="/Privacy-Policy" class="cc-button cc-button-secondary">Informativa Privacy</a><a href="https://myfit.federtennis.it/" class="cc-button cc-button-primary">RINNOVA I TUOI CONSENSI</a></div>' +
		'         </div>' +
		'      </section>' +
		'   </div>' +
		'</div>';

	if (jQueryV2('.cc-desktop').length > 0) {
		jQueryV2('.cc-desktop').append(popuUp);
	} else if (jQueryV2('.cc-mobile').length > 0) {
		jQueryV2('.cc-mobile').append(popuUp);
	}

	jQueryV2(".jq-popup-close").on("click", function () {
		jQueryV2("#popup").remove();
	});
}

function logLogin(){
	lsBearer = localStorage.getItem("msal.63bed121-efc6-462a-83d2-ee0742432191.idtoken");
	lsGuid = localStorage.getItem("Guid");
	//console.log("logLogin Bearer : " + lsBearer);
	//console.log("logLogin lsGuid : " + lsGuid);
	if(lsBearer != "" && lsBearer != null && lsBearer != undefined){
		if(lsGuid === "" || lsGuid == null && lsGuid == undefined){
			jQueryV2.ajax({
				url: 'https://dp-fit-prod-function.azurewebsites.net/api/v5/sso/login/log',
				type: 'POST',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Bearer ' + String(lsBearer));
				},
				//data: {},
				success: function (response) {
				},
				error: function () { 
				},
			});
		}
	}
}

function SSOLogout()
{
	//console.log("SSOLogout");
	lsBearer = localStorage.getItem("msal.32631830-3fa3-40c8-a613-825ba7b68179.idtoken");
	lsGuid = localStorage.getItem("Guid");
	//console.log("SSOLogout Bearer : " + lsBearer);
	//console.log("SSOLogout lsGuid : " + lsGuid);
	if(lsBearer != "" && lsBearer != null && lsBearer != undefined){
		if(lsGuid != "" || lsGuid != null && lsGuid != undefined){
			jQueryV2.ajax({
				url: 'https://dp-fit-prod-function.azurewebsites.net/api/v3/sso/logout',
				type: 'POST',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Bearer ' + String(lsBearer));
				},
				//data: {},
				success: function (response) {
				},
				error: function () { 
				},
			});
		}
	}
}

var dataCreatedLoginSSO = localStorage.getItem("dataCreatedLoginSSO");
var guidLs = localStorage.getItem("Guid")
//if(Guid == "17d1c01d-375a-40bf-a45a-899a6b8600ca" && (dataCreatedLoginSSO == "" || dataCreatedLoginSSO == null || dataCreatedLoginSSO == undefined)) {
if((dataCreatedLoginSSO === "" || dataCreatedLoginSSO == null || dataCreatedLoginSSO == undefined) && (guidLs != "" && guidLs != null && guidLs != undefined))
{
	//alertSessionEnd();
	localStorage.clear();																													
	
	var logoutlocalfedertennis = document.createElement("iframe");
	logoutlocalfedertennis.setAttribute("src", "https://www.federtennis.it/SSO/logout.html");
	logoutlocalfedertennis.style.width = "0px";
	logoutlocalfedertennis.style.height = "0px";
	logoutlocalfedertennis.style = "display:none";
	document.body.appendChild(logoutlocalfedertennis);
	
	var loginlocalmyfit1 = document.createElement("iframe");
	loginlocalmyfit1.setAttribute("src", "https://myfit.federtennis.it/SSO/logout.html");
	loginlocalmyfit1.style.width = "0px";
	loginlocalmyfit1.style.height = "0px";
	loginlocalmyfit1.style = "display:none";
	document.body.appendChild(loginlocalmyfit1);
	
	console.log("OK")
	
	
	jQueryV2("#news-right-block").html('<a href="https://myfit.federtennis.it" class="cc-link cc-link-myfit we cc-not-logged" id="loginMobile"><span class="cc-text">My FIT</span></a> <a href="https://myfit.federtennis.it" class="cc-link we cc-link-login" id="login"><span class="cc-text">Accedi o registrati a <strong class="cc-text-register">My FIT</strong></span></a>');
	
}