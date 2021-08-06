var SEP = '|';
var PAIR = '=';

/*
 * Misc. Utility Functions
 */
function activeXDetect(componentClassID) {
	var componentVersion = document.body.getComponentVersion(
			'{' + componentClassID + '}', 'ComponentID');
	return (componentVersion !== null) ? componentVersion : false;
}

function stripIllegalChars(value) {
	var t = "";
	// first we need to escape any "\n" or "/" or "\"
	value = value.toLowerCase();
	for (var i = 0; i < value.length; i++) {
		if (value.charAt(i) != '\n' &&
				value.charAt(i) != '/'&&
				value.charAt(i) != "\\") {
			t += value.charAt(i);
		} else if (value.charAt(i) == '\n') {
			t += "n";
		}
	}
	return t;
}

function stripFullPath(tempFileName, lastDir) {
	var fileName = tempFileName;
	// anything before the last lastDir will be lost
	var filenameStart = 0;
	filenameStart = fileName.lastIndexOf(lastDir);
	if (filenameStart < 0) {
		return tempFileName;
	}
	var filenameFinish = fileName.length;
	fileName = fileName.substring(filenameStart + lastDir.length,
			filenameFinish);
	return fileName;
}

var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent) ||
				this.searchVersion(navigator.appVersion) ||
				"an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = data[i].string;
				var dataProp = data[i].prop;
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1){
						return data[i].identity;
					}
				}
				else if (dataProp){
					return data[i].identity;
				}
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1){
				return;
			}
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome",
				id: 1
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb",
				id: 2
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version",
				id: 3	
			},
			{
				prop: window.opera,
				identity: "Opera",
				id: 4
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab",
				id: 5
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror",
				id: 5
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox",
				id: 6
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino",
				id: 7
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape",
				id: 8
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE",
				id: 9
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv",
				id: 10
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla",
				id: 11
			}
		],
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				   string: navigator.userAgent,
				   subString: "iPhone",
				   identity: "iPhone/iPod"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

	};/*
 * the FingerPrint prototype object defines the following properties, deviceprint_browser,
 * deviceprint_software, deviceprint_display...., that reference the functions, deviceprint_browser,
 * deviceprint_software, deviceprint_display, .... Every instance of FingerPrint inherits the
 * prototype allowing them to call the FingerPrint functions through the
 * properties.
 */
function FingerPrint() {
	/*
	 Create a Hashtable of mozilla components
	 */
	var ht = new Hashtable();
	ht.put('npnul32', 'def'); // Default netscape plugin
	ht.put('npqtplugin6', 'qt6'); // Quicktime 6.5.1
	ht.put('npqtplugin5', 'qt5'); // Quicktime 6.5.1
	ht.put('npqtplugin4', 'qt4'); // Quicktime 6.5.1
	ht.put('npqtplugin3', 'qt3'); // Quicktime 6.5.1
	ht.put('npqtplugin2', 'qt2'); // Quicktime 6.5.1
	ht.put('npqtplugin', 'qt1'); // Quicktime 6.5.1
	ht.put('nppdf32', 'pdf'); // Adobe Acrobat
	ht.put('NPSWF32', 'swf'); // Macromedia Flash
	ht.put('NPJava11', 'j11'); // Java 1.4.2_02
	ht.put('NPJava12', 'j12'); // Java 1.4.2_02
	ht.put('NPJava13', 'j13'); // Java 1.4.2_02
	ht.put('NPJava32', 'j32'); // Java 1.4.2_02
	ht.put('NPJava14', 'j14'); // Java 2 5.0 Update 4
	ht.put('npoji600', 'j61'); // Java 2 5.0 Update 4
	ht.put('NPJava131_16', 'j16'); // Java 1.3.1_16
	ht.put('NPOFFICE', 'mso'); // Microsoft Office 2003
	ht.put('npdsplay', 'wpm'); // Windows Media Player
	ht.put('npwmsdrm', 'drm'); // Windows DRM
	ht.put('npdrmv2', 'drn'); // Netscape DRM
	ht.put('nprjplug', 'rjl'); // Real Jukebox
	ht.put('nppl3260', 'rpl'); // Real Player Live Connect
	ht.put('nprpjplug', 'rpv'); // Real Player Version
	ht.put('npchime', 'chm'); // Chime
	ht.put('npCortona', 'cor'); // Cortina
	ht.put('np32dsw', 'dsw'); // Macromedia Director
	ht.put('np32asw', 'asw'); // Macromedia Authorware

	
	this.deviceprint_version = function () {
		return 1;
	};

	/*
	 * This function captures the User Agent String from the Client Browser
	 */
	this.deviceprint_browser = function () {
		var userAgent = navigator.userAgent;
		var ua = userAgent.toLowerCase();
		var t = ua + SEP + navigator.appVersion + SEP + navigator.platform;
		return t;
	};

	this.deviceprint_software = function () {
		var t = "";
		var isFirst = true;

		if (navigator.plugins.length > 0) {
			var temp = "";
			var moz = "";
			var key = "";
			var plugin = "";
			for (i = 0; i < navigator.plugins.length; i++) {
				plugin = navigator.plugins[i];
				moz = plugin.filename;
				var index = moz .indexOf(".");
				moz  = moz.slice(0,index );
				if (isFirst === true) {
					key = ht.containsKey(moz);
					if (key) {
						temp += ht.get(moz);
						isFirst = false;
					} else {
						temp = "";
						isFirst = false;
					}
				} else {
					key = ht.containsKey(moz);
					if (key) {
						temp += SEP + ht.get(moz);
					}
				}
			}
			t = stripIllegalChars(temp);

		}
		return t;
	};


	/*
	 * This function captures the Client's Screen Information
	 */
	this.deviceprint_display = function () {
		var t = "";
		if (self.screen) {
			t += screen.colorDepth + SEP + screen.width + SEP + screen.height + SEP + screen.availHeight;
		}
		return t;
	};

	/*
	 * This function captures the user's timezone in GMT
	 */
	this.deviceprint_timezone = function () {
		var gmtHours = (new Date().getTimezoneOffset() / 60) * (-1);
		return gmtHours;
	};

	/*
	 * This function captures the user's browser language. Note: this is captured in
	 * the User Agent String, but this function provides more detailed information
	 * from IE (system language)
	 */
	this.deviceprint_language = function () {
		var lang;

		if (typeof (navigator.language) !== "undefined") {
			lang = "lang" + PAIR + navigator.language + SEP;
		} else if (typeof (navigator.browserLanguage) !== "undefined") {
			lang = "lang" + PAIR + navigator.browserLanguage + SEP;
		} else {
			lang = "lang" + PAIR + "" + SEP;
		}

		if ((typeof (navigator.systemLanguage) !== "undefined"))
		{
			lang += "syslang" + PAIR + navigator.systemLanguage + SEP;
		} else {
			lang += "syslang" + PAIR + "" + SEP;
		}
		if ((typeof (navigator.userLanguage) !== "undefined"))
		{
			lang += "userlang" + PAIR + navigator.userLanguage;
		} else
		{
			lang += "userlang" + PAIR + "";
		}
		return lang;
	};

	/*
	 * This function captures whether or not Java is enabled
	 */
	this.deviceprint_java = function() {
		var javaEnabled = (navigator.javaEnabled()) ? 1 : 0;
		return javaEnabled;
	};

	/*
	 * This function captures whether or not user enabled cookies or not
	 */
	this.deviceprint_cookie = function () {

		var cookieEnabled = (navigator.cookieEnabled) ? 1 : 0;
		// if not IE4+ nor NS6+
		if (typeof navigator.cookieEnabled === "undefined" && !cookieEnabled) {
			document.cookie = "testcookie";
			cookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? 1 : 0;
		}
		return cookieEnabled;
	};

	/*
	 * deviceprint Communication - 3 options 1. Post Asynchronously 2. Post
	 * Synchronously 3. Query String
	 */

	/*
	 * Async Post Helper Method
	 */
	this.form_add_data = function (fd, name, value) {
		if (fd && fd.length > 0) {
			fd += "&";
		} else {
			fd = "";
		}

		fd += name + '=' + escape(value.toString());
		return fd;
	};

	this.form_add_deviceprint = function (fd, name, value) {
		fd = form_add_data(fd, name + "d", value);
		return fd;
	};

	/*
	 * deviceprint - POST Asynchronously
	 */
	this.asyncpost_deviceprint = function asyncpost_deviceprint(url) {
		var xmlhttp = false;
		/* @cc_on @ */
		/*
		 * @if (@_jscript_version >= 5) // JScript gives us Conditional compilation,
		 * we can cope with old IE versions. // and security blocked creation of the
		 * objects. try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
		 * try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (E) {
		 * xmlhttp = false; } } @end @
		 */

		if (!xmlhttp && typeof XMLHttpRequest !== 'undefined') {
			xmlhttp = new XMLHttpRequest();
		}
		if (!xmlhttp) {
			return false;
		}

		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");

		var fd;
		fd = form_add_deviceprint(fd, "fp_browser", deviceprint_browser());
		fd = form_add_deviceprint(fd, "fp_display", deviceprint_display());
		fd = form_add_deviceprint(fd, "fp_software", deviceprint_software());
		fd = form_add_deviceprint(fd, "fp_timezone", deviceprint_timezone());
		fd = form_add_deviceprint(fd, "fp_language", deviceprint_language());
		fd = form_add_deviceprint(fd, "fp_java", deviceprint_java());
		fd = form_add_deviceprint(fd, "fp_cookie", deviceprint_cookie());

		xmlhttp.send(fd); // fire and forget
		return true;
	};
}
	/*
	Helper Hashtable implementation
	*/
	function Hashtable()
	{
    	var keysToIndex = {__indexToValue:[],__indexToKeys:[]};
	    var activeEnum = [];
    	var tableLength = 0;
	    var self = this;

    	/*
	    This inner Object constructor is used to implement a Java
    	style Enumerator (and Iterator) Object.
	    */

    	function Enumeration(arrNm)
	    {
        	var lastIndex = null;
	        var enumIndex = 0;
    	    while(typeof activeEnum[enumIndex] == 'number'){
    	    	enumIndex += 1;
    	    }
        	activeEnum[enumIndex] = 0;

	        /*
    	    Returns true if this Enumerator/ has another entry to
	        return, else returns false.
    	    */
        	this.hasNext = this.hasMoreElements = function(){
            if(activeEnum[enumIndex] < tableLength){
                return true;
            }else{
                if(typeof activeEnum[enumIndex] == 'number'){
                    activeEnum[enumIndex] = null;
                }
                return false;
            }
        };

        /*
        Returns the next item from this Enumerator/Iterator (key
        or value, depending on whether it was created with the keys
        or elements methods).
        */
        this.next = this.nextElement = function(){
            if(this.hasNext){
                lastIndex = activeEnum[enumIndex];
                return keysToIndex[arrNm][activeEnum[enumIndex]++];
            }else{
                return null;
            }
        };

        /*
        Removes the last entry (key/value pair) accessed with the
        next or nextElement methods of this Enumerator/Iterator
        (if any). The key/value pair is removed regardless of whether
        the Enumerator/Iterator was accessing keys or values.
        */
        this.remove = function(){
            if(typeof lastIndex == 'number'){
                self.remove(keysToIndex.__indexToKeys[lastIndex]);
                lastIndex = null;
            }
        	};
    	}
    	// End Enumeration

	    /*
    	Returns the value mapped to the provided (String) key, or null
	    if the key is not mapped to a value.
    	*/
	    this.get = function(key){
        if(typeof keysToIndex[key] == 'number'){
            return keysToIndex.__indexToValue[keysToIndex[key]];
        }else{
            return null;
        }
		};
	    /*
    	Adds the value provided to this Hashtable mapped to the key
	    provided.
    	*/
	    this.put = function(key, value){
    	if(typeof keysToIndex[key] == 'number'){
            keysToIndex.__indexToValue[keysToIndex[key]] = value;
        }else{
            keysToIndex[key] = tableLength;
            keysToIndex.__indexToValue[tableLength] = value;
            keysToIndex.__indexToKeys[tableLength++] = key;
        }
    	};
    	/*
	    Removes the key and any value mapped to it from this
	    Hashtable.
    	*/
	    this.remove = function(key){
    	    var remIndex = keysToIndex[key];
        	if(typeof remIndex == 'number'){
            	delete keysToIndex[key];
	            tableLength -= 1;
    	        for(var c = remIndex;c < tableLength;c++){
        	        keysToIndex.__indexToValue[c] =
                                     keysToIndex.__indexToValue[c+1];
            	    keysToIndex[(keysToIndex.__indexToKeys[c] =
                                keysToIndex.__indexToKeys[c+1])] = c;
	            }
    	        for(var j = 0;j < activeEnum.length;j++){
        	        if((activeEnum[j])&&(remIndex < activeEnum[j])){
            	        activeEnum[j] -= 1;
                }
            }
        	}
    	};

	    /*
    	Returns the length of this Hashtable.
	    */
    	this.size = function(){
        	return tableLength;
	    };

    	/*
	    This method is not intended for external use! use elements
    	and keys methods instead.
	    */
    	this.__enumerate = function(type){
		    return new Enumeration(type);
    	};

		/*
		Returns an object that is similar to the Java Enumeration
		Interface, having hasMoreElements and nextElement Methods. This
		object also reproduces the Java Iterator interface, having methods
		hasNext, next and remove. This enumeration is of the values stored
		in the Hashtable.
		*/
		Hashtable.prototype.elements = function(){
    		return this.__enumerate('__indexToValue');
		};

		/*
		Returns an object that is similar to the Java Enumeration
		Interface, having hasMoreElements and nextElement Methods. This
		object also reproduces the Java Iterator interface, having methods
		hasNext, next and remove. This enumeration is of the keys stored
		in the Hashtable.
		*/
		Hashtable.prototype.keys = function(){
		    return this.__enumerate('__indexToKeys');
		};

		/*
		Removes all entry's from the Hashtable
		*/
		Hashtable.prototype.clear = function(){
	    	var e = this.keys();
	    	while(e.hasNext()){
    	    	this.remove(e.next());
    		}
		};

		Hashtable.prototype.toString = function(){
	    var n,e = this.keys();
    	var st = '';
	    while(e.hasNext()){
    	    n = e.next();
        	st += n+' =&gt; '+this.get(n)+'\r\n';
	    }
    	return st;

		};

		/*
		Returns true if this Hashtable contains a value that is equal
		to the value provided, else returns false
		*/
		Hashtable.prototype.contains = function(testVal){
    		var e = this.elements();
		    while(e.hasNext()){
    	    	if(e.next() == testVal){
    	    		return true;
    	    	}
		    }
    		return false;
		};

		/*
		Returns true if this Hashtable contains a value that is equal
		to the value provided, else returns false.
		*/
		Hashtable.prototype.containsValue = Hashtable.prototype.contains;

		/*
		Returns true if this Hashtable contains a value mapped to
		the value provided, else returns false.
		*/
		Hashtable.prototype.containsKey = function(testKey){
    		return (this.get(testKey) !== null);
		};

		/*
		Returns true if this Hashtable has zero entry's.
		*/
		Hashtable.prototype.isEmpty = function(){
    		return (this.size() === 0);
		};

		/*
		If the parameter provided is another Hashtable object
		then all of the key/value pairs from the provided Hashtable
		are added to this Hashtable.
		*/
		Hashtable.prototype.putAll = function(hTable){
    	if(hTable.constructor == Hashtable){
        	var n,e = hTable.keys();
        	while(e.hasNext()){
            	n = e.next();
	            this.put(n, hTable.get(n));
    	    }
    	}
		};

		/*
		Returns a 'shallow' copy of this Hashtable.
		*/
		Hashtable.prototype.clone = function(){
    		var ht = new Hashtable();
	    	ht.putAll(this);
	    	return ht;
		};

		/*
		Returns true if this Hashtable equals the parameter
		provided, else it returns false.
		*/
		Hashtable.prototype.equals = function(o){
    	return (o == this);
		};
}
function IE_FingerPrint() {
	/*
	 * This function captures the User Agent String from the Client Browser
	 */
	this.deviceprint_browser = function () {
		var ua = navigator.userAgent.toLowerCase();
		var t = ua + SEP + navigator.appVersion + SEP + navigator.platform;
		t += SEP + navigator.appMinorVersion + SEP + navigator.cpuClass + SEP + navigator.browserLanguage;
		t += SEP + ScriptEngineBuildVersion();
		return t;
	};

	this.deviceprint_software = function () {
		var t = "";
        try {
		var isFirst = true;

		document.body.addBehavior("#default#clientCaps");
		var compVer;
		for (var i = 0; i < components.length; i++) {
			compVer = activeXDetect(components[i]);
			var name = names[i];
			if (compVer) {
				if (isFirst === true) {
					t += name + PAIR + compVer;
					isFirst = false;
				} else {
					t += SEP + name + PAIR + compVer;
				}
			} else {
				t += "";
				isFirst = false;
			}
		}
        }
        catch( e ) {
        }
		return t;
	};
	var names = new Array("abk", // Address Book
			"wnt", // Windows Desktop Update NT
			"aol", // AOL ART Image Format Support
			"arb", // Arabic Text Display Support
			"chs", // Chinese (Simplified) Text Display Support
			"cht", // Chinese (traditional) Text Display Support
			"dht", // Dynamic HTML Data Binding
			"dhj", // Dynamic HTML Data Binding for Java
			"dan", // DirectAnimation
			"dsh", // DirectShow
			"heb", // Hebrew Text Display Support
			"ie5", // Internet Explorer 5 Browser
			"icw", // Internet Connection Wizard
			"ibe", // Internet Explorer Browsing Enhancements
			"iec", // Internet Explorer Classes for Java
			"ieh", // Internet Explorer Help
			"iee", // Internet Explorer Help Engine
			"jap", // Japanese Text Display Support
			"krn", // Korean Text Display Support
			"lan", // Language Auto-Selection
			"swf", // Macromedia Flash
			"shw", // Macromedia Shockwave Director
			"msn", // MSN Messenger Service
			"wmp", // Windows Media Player
			"obp", // Offline Browsing Pack
			"oex", // Outlook Express
			"net", // NetMeeting NT
			"pan", // Pan-European Text Display Support
			"thi", // Thai Text Display Support
			"tks", // Task Scheduler
			"uni", // Uniscribe
			"vtc", // Vector Graphics Rendering (VML)
			"vnm", // Vietnamese Text Display Support
			"mvm", // Microsoft virtual machine
			"vbs", // Visual Basic Scripting Support
			"wfd" // Web Folders
	);

	/*
	 * Create a Hashtable of IE components guids
	 */
	var components = new Array("7790769C-0471-11D2-AF11-00C04FA35D02",
			"89820200-ECBD-11CF-8B85-00AA005B4340",
			"47F67D00-9E55-11D1-BAEF-00C04FC2D130",
			"76C19B38-F0C8-11CF-87CC-0020AFEECF20",
			"76C19B34-F0C8-11CF-87CC-0020AFEECF20",
			"76C19B33-F0C8-11CF-87CC-0020AFEECF20",
			"9381D8F2-0288-11D0-9501-00AA00B911A5",
			"4F216970-C90C-11D1-B5C7-0000F8051515",
			"283807B5-2C60-11D0-A31D-00AA00B92C03",
			"44BBA848-CC51-11CF-AAFA-00AA00B6015C",
			"76C19B36-F0C8-11CF-87CC-0020AFEECF20",
			"89820200-ECBD-11CF-8B85-00AA005B4383",
			"5A8D6EE0-3E18-11D0-821E-444553540000",
			"630B1DA0-B465-11D1-9948-00C04F98BBC9",
			"08B0E5C0-4FCB-11CF-AAA5-00401C608555",
			"45EA75A0-A269-11D1-B5BF-0000F8051515",
			"DE5AED00-A4BF-11D1-9948-00C04F98BBC9",
			"76C19B30-F0C8-11CF-87CC-0020AFEECF20",
			"76C19B31-F0C8-11CF-87CC-0020AFEECF20",
			"76C19B50-F0C8-11CF-87CC-0020AFEECF20",
			"D27CDB6E-AE6D-11CF-96B8-444553540000",
			"2A202491-F00D-11CF-87CC-0020AFEECF20",
			"5945C046-LE7D-LLDL-BC44-00C04FD912BE",
			"22D6F312-B0F6-11D0-94AB-0080C74C7E95",
			"3AF36230-A269-11D1-B5BF-0000F8051515",
			"44BBA840-CC51-11CF-AAFA-00AA00B6015C",
			"44BBA842-CC51-11CF-AAFA-00AA00B6015B",
			"76C19B32-F0C8-11CF-87CC-0020AFEECF20",
			"76C19B35-F0C8-11CF-87CC-0020AFEECF20",
			"CC2A9BA0-3BDD-11D0-821E-444553540000",
			"3BF42070-B3B1-11D1-B5C5-0000F8051515",
			"10072CEC-8CC1-11D1-986E-00A0C955B42F",
			"76C19B37-F0C8-11CF-87CC-0020AFEECF20",
			"08B0E5C0-4FCB-11CF-AAA5-00401C608500",
			"4F645220-306D-11D2-995D-00C04F98BBC9",
			"73FA19D0-2D75-11D2-995D-00C04F98BBC9");



}

IE_FingerPrint.prototype = new FingerPrint();


function Mozilla_FingerPrint() {
}

Mozilla_FingerPrint.prototype = new FingerPrint();



function Opera_FingerPrint() {
	
}

Opera_FingerPrint.prototype = new FingerPrint();



/*
 *include all the java script 
 * 
 * 
 */






/*
 * Deviceprint - delimited string value where names are in accordance with
 * PassMarkDeviceRequest
 */
function add_deviceprint() {
	/*
	 * Browser Detection
	 */
	BrowserDetect.init();
	var fp;
	switch (BrowserDetect.browser)
	{
	case 'Explorer':
		fp = new IE_FingerPrint();
		break;
	case 'Firefox':
		fp = new Mozilla_FingerPrint();
		break;
	case 'Opera':
		fp = new Opera_FingerPrint();
		break;			
	default:
		fp = new FingerPrint();
	}
	var t = "version=" + fp.deviceprint_version() + "&pm_fpua=" + fp.deviceprint_browser() + "&pm_fpsc=" + fp.deviceprint_display() + "&pm_fpsw=" + fp.deviceprint_software() + "&pm_fptz=" + fp.deviceprint_timezone() + "&pm_fpln=" + fp.deviceprint_language() + "&pm_fpjv=" + fp.deviceprint_java() + "&pm_fpco=" + fp.deviceprint_cookie();
	return t;
}

/*
 * URL encode the string to make it portable safely
 */
function urlEncode(text) {
	// The escape() function encodes special characters, with the exception of:
	// * @ - _ + . /
	// find *+-_/.@ and replace with equivalent url-encode value
	var encodedString = escape(text).replace(/\*/g, "%2A").replace(/\+/g, "%2B")
	.replace(/-/g, "%2D").replace(/\./g, "%2E").replace(/\//g, "%2F")
			.replace(/_/g, "%5F").replace(/@/g, "%40");

	return encodedString;
}


/*
 * Encoded Deviceprint - Encodes The Deviceprint
 */
function encode_deviceprint() {
	var t = add_deviceprint();
	return urlEncode(t);
}

/*
 * Helper Function - Shows How to Decode The Deviceprint
 */
function decode_deviceprint() {
	var t = encode_deviceprint;
	return unescape(urlEncode(t));
}

/*
 * deviceprint - POST data
 */
function post_deviceprint() {
	/*
	 * Uncomment for another version
	 * 
	 * document.forms[0].fp_browser.value = URLencode(deviceprint_browser());
	 * document.forms[0].fp_screen.value = URLencode(deviceprint_display());
	 * document.forms[0].fp_software.value = URLencode(deviceprint_software());
	 * document.forms[0].fp_timezone.value = URLencode(deviceprint_timezone());
	 * document.forms[0].fp_language.value = URLencode(deviceprint_language());
	 * document.forms[0].fp_java.value = URLencode(deviceprint_java());
	 * document.forms[0].fp_cookie.value = URLencode(deviceprint_cookie());
	 */
	document.forms[0].pm_fp.value = encode_deviceprint();
	return true;
}

