  // TODO: Replace the following with your app's Firebase project configuration
 
  var cookie = new CookieClass();
  var browser = new BrowserClass();
  var subscriberCookieName = "haberturkWebPush";

  var messaging = null;
  var swRegistration = null;


  var firebaseConfig = {
	  apiKey: "AIzaSyDuAp6lQ-WcCTCmTzSSPrM4swl2V1bHnVc",
	  authDomain: "haberturk-18d05.firebaseapp.com",
	  databaseURL: "https://haberturk-18d05.firebaseio.com",
	  projectId: "haberturk-18d05",
	  storageBucket: "haberturk-18d05.appspot.com",
	  messagingSenderId: "1060959803213",
	  appId: "1:1060959803213:web:9ff53ece6bb46ef8544904",
	  measurementId: "G-7SGF48B7HB"
  };




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
	messaging = firebase.messaging();

	setSwRegistration();
  // tarayÄ±cÄ± uygun tarayÄ±cÄ± listesinde var mÄ±?
  if (browser.isSendable()) {
	  // tokeni almaya calis
	  setTimeout(function() {
		  getToken();
	  }, 700);
  } else {
	  // tarayÄ±cÄ± bildirim gÃ¶nderebileceÄimiz listede yok
	  // showElement('.buttons');
	  // showElement('.undefined-browser');
	  // removeBodyClass('with-notification');
  }
function getParameterByName(name) {
  	var url = document.currentScript ? document.currentScript.src : window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setSwRegistration() {
  navigator.serviceWorker
	  .register("/scripts/service-worker.js?v=" + getParameterByName('v') || 0)
	  .then(function(registration) {
		  messaging.useServiceWorker(registration);  
		  swRegistration = registration;
 
	  });
}

function getToken() {
  if (swRegistration === null) {
	  setSwRegistration();
	  setTimeout(function() {
		  getToken();
	  }, 750);
  } else {
	  messaging
		  .getToken()
		  .then(function(currentToken) {
			  // tokeni aldÄ±k
			  if (currentToken) {
				  // Ã¼retilen token cookie yazÄ±lan token ile aynÄ±ysa
				  // bu kullanÄ±cÄ±ya push gonderiyoruz. fakat farklÄ± ise
				  // yeni tokeni db ye gondermemiz lazÄ±m
				  if (cookie.get(subscriberCookieName) == currentToken) {
					  // daha Ã¶nce kayÄ±t olmuÅtunuz divini gÃ¶ster
					  // showElement('.buttons');
					  // showElement('.already-registered');
					  // removeBodyClass('with-notification');
				  } else {
					  // showElement('.buttons');
					  // showElement('.available');
					  // tokeni veritabanÄ±na yolla
					  sentToken(currentToken, "add");
					  // removeBodyClass('with-notification');
				  }
			  } else {
				  // token alamadÄ±k, bildirim isteÄi atalÄ±m
				  requestPermission();
			  }
		  })
		  .catch(function(err) {
			  // showElement('.buttons');
			  // showElement('.blocked');
			  // removeBodyClass('with-notification');
			  console.log("Hata oluÅtu ve bir Åekilde token alÄ±namadÄ±:", err);
		  });
  }
}

function requestPermission() {
  if (swRegistration === null) {
	  setSwRegistration();
	  setTimeout(function() {
		  requestPermission();
	  }, 750);
  } else {
	  messaging
		  .requestPermission()
		  .then(function() {
			  // tokeni kaydetmek icin gerekli yollarÄ± izle
			  getToken();
		  })
		  .catch(function(err) {
			  // Ã¼retilen tokenÄ± alamadÄ±, firebase ile ilgili bir
			  // hata olabilir
			  // showElement('.buttons');
			  // showElement('.blocked');
			  // removeBodyClass('with-notification');
		  });
  }
}

function showElement(selector) {
  var element = document.querySelector(selector);
  if (browser.getName() == "MSIE") {
	  element.style.display = "block";
  } else {
	  element.style = "display:flex";
  }
}

function removeBodyClass(name) {
  document.querySelector("body").classList.remove(name);
}

function sentToken(token, type) {
  var http = new XMLHttpRequest();
  var data = {
	  token: token,
	  id: browser.getId(),
	  name: browser.getName(),
	  width: browser.getWidth(),
	  height: browser.getHeight(),
	  platform: browser.getOs(),
	  mobile: browser.isMobile(),
	  user: cookie.get("uid")
  };
  http.open("POST", "/push/token.php");
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // db ye yolla
  http.send("data=" + JSON.stringify(data));
  // cookie set et
  cookie.set(subscriberCookieName, token, 365);
}

/**
* Cookie Class
*/

function CookieClass() {
  this.get = function(name) {
	  name += "=";
	  var splitCookie = document.cookie.split(";");
	  for (var i = 0; i < splitCookie.length; i++) {
		  var c = splitCookie[i];
		  while (c.charAt(0) == " ") {
			  c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			  return c.substring(name.length, c.length);
		  }
	  }
	  return "";
  };
  this.set = function(name, value, expire) {
	  var d = new Date();
	  d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000);
	  var expires = "expires=" + d.toUTCString();
	  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  this.remove = function(name) {
	  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
}

/**
* Browser Class
*/
function BrowserClass() {
  this.id = 0;
  this.name = "";
  this.browsers = ["Chrome", "Opera", "Firefox"];

  this.getName = function() {
	  return this.name;
  };
  this.getId = function() {
	  return this.id;
  };
  this.getWidth = function() {
	  return Math.max(
		  document.documentElement.clientWidth,
		  window.innerWidth || 0
	  );
  };
  this.getHeight = function() {
	  return Math.max(
		  document.documentElement.clientHeight,
		  window.innerHeight || 0
	  );
  };
  this.getLeft = function() {
	  return window.screenLeft != undefined ? window.screenLeft : screen.left;
  };
  this.getTop = function() {
	  return window.screenTop != undefined ? window.screenTop : screen.top;
  };
  this.getOs = function() {
	  var userAgent = window.navigator.userAgent,
		  platform = window.navigator.platform,
		  macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
		  windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
		  iosPlatforms = ["iPhone", "iPad", "iPod"],
		  opSystem = "";

	  if (macosPlatforms.indexOf(platform) !== -1) {
		  opSystem = "Mac OS";
	  } else if (iosPlatforms.indexOf(platform) !== -1) {
		  opSystem = "iOS";
	  } else if (windowsPlatforms.indexOf(platform) !== -1) {
		  opSystem = "Windows";
	  } else if (/Android/.test(userAgent)) {
		  opSystem = "Android";
	  } else if (!opSystem && /Linux/.test(platform)) {
		  opSystem = "Linux";
	  }

	  return opSystem;
  };
  this.isMobile = function() {
	  return this.getOs() == "iOS" || this.getOs() == "Android" ? 1 : 0;
  };
  this.isSendable = function() {
	  if (this.browsers.indexOf(this.getName()) < 0) {
		  return false;
	  }

	  if (this.getOs() == "iOS") {
		  return false;
	  }

	  return true;
  };

  var _detectBrowser = function() {
	  var ua = navigator.userAgent,
		  tem,
		  M =
			  ua.match(
				  /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
			  ) || [];
	  if (/trident/i.test(M[1])) {
		  tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		  return { name: "IE ", version: tem[1] || "" };
	  }
	  if (M[1] === "Chrome") {
		  tem = ua.match(/\bOPR\/(\d+)/);
		  if (tem != null) {
			  return { name: "Opera", version: tem[1] };
		  }
	  }
	  M = M[2]
		  ? [M[1], M[2]]
		  : [navigator.appName, navigator.appVersion, "-?"];
	  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		  M.splice(1, 1, tem[1]);
	  }
	  return {
		  name: M[0],
		  version: M[1]
	  };
  };

  _browser = _detectBrowser();
  this.name = _browser.name;

  switch (this.name) {
	  case "Chrome":
		  this.id = 1;
		  break;
	  case "Safari":
		  this.id = 2;
		  break;
	  case "Opera":
		  this.id = 3;
		  break;
	  case "Firefox":
		  this.id = 4;
		  break;
	  case "MSIE":
		  this.id = 5;
		  break;
  }
}



