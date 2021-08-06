/*!
 * AnySign, v1.0.1.26.
 * 
 * For more information on this product, please see
 * https://www.hsecure.co.kr/
 * 
 * Copyright (c) Hancom Secure Inc. All Rights Reserved.
 * 
 * Date: 2019-08-25
 */
var XW_FVIEW_CREATE_VID				= 0x00000004;
var XW_FVIEW_CREATE_VID_FROM_WEB	= 0x00000008;
var XW_FVIEW_CREATE_VID_NO_IDN		= 0x00000010;

var XW_OPTION_SIGN_ADD				= 0x00000020;
var XW_OPTION_SIGN_DETACHED			= 0x00000040;
var XW_OPTION_SIGN_DETACHED_BASE64	= 0x00000080;
var XW_OPTION_FCMS_CACHE_CERTINFO	= 0x00001000;

var XW_OPTION_ENVELOPE_PWD_DLG		= 0x00000001;
var XW_OPTION_ENVELOPE_MULTI_CERT	= 0x00000004;

var XW_OPTION_NO_SELECTFILE			= 0x00010000;
var XW_OPTION_TEMP_SAVE				= 0x00020000;
var XW_OPTION_CHECK_WRITE_FILE		= 0x00040000;

var XW_OPTION_CACHE_CERTLOCATION	= 0x00100000;
var XW_OPTION_CACHE_SMARTCERT  		= 0x00200000;

var XW_OPTION_ADD_SIGN_BUTTON		= 0x20000000;
var XW_OPTION_PKCS1_ADD				= 0x01000000;

var XW_SIGNDATA_OPTION_SAME_CERT	= 0x08000000;

var XW_SECUREINPUT_NATIVEINPUT			= 00;
var XW_SECUREINPUT_TRANSKEY				= 01;
var XW_SECUREINPUT_TOUCHENKEY			= 02;
var XW_SECUREINPUT_OPENKEYBOARD			= 03;
var XW_SECUREINPUT_XECUREKEYPAD			= 04;
var XW_SECUREINPUT_KDEFENSE				= 05;
var XW_SECUREINPUT_VKEYPAD				= 06;
var XW_SECUREINPUT_KEYCRYPT_HTML5		= 09;
var XW_SECUREINPUT_ASTX					= 10;
var XW_SECUREINPUT_TOUCHENNXKEY			= 11;
var XW_SECUREINPUT_KINGSKEY				= 12;
var XW_SECUREINPUT_XECUREKEYPADHTML5	= 13;
var XW_SECUREINPUT_INCAKEYPAD			= 14;
var XW_SECUREINPUT_EZKEYTEC				= 15;
var XW_SECUREINPUT_XECUREKEYPADE2E		= 16;

var XW_CERT_LOCATION_HARD			= 0;
var XW_CERT_LOCATION_REMOVABLE		= 100;
var XW_CERT_LOCATION_ICCARD		 	= 200;
var XW_CERT_LOCATION_CSP			= 300;
var XW_CERT_LOCATION_PKCS11		 	= 400;
var XW_CERT_LOCATION_USBTOKEN		= 500;
var XW_CERT_LOCATION_USBTOKEN_KB	= 600;
var XW_CERT_LOCATION_USBTOKEN_KIUP	= 700;
var XW_CERT_LOCATION_YESSIGNM		= 1100;
var XW_CERT_LOCATION_MPHONE			= 1200;
var XW_CERT_LOCATION_LOCALSTORAGE	= 2000;
var XW_CERT_LOCATION_MEMORYSTORAGE	= 2100;
var XW_CERT_LOCATION_SESSIONSTORAGE	= 2200;
var XW_CERT_LOCATION_XECUREFREESIGN	= 2300;
var XW_CERT_LOCATION_WEBPAGE		= 2400;
var XW_CERT_LOCATION_SECUREDISK		= 3000;
var XW_CERT_LOCATION_KEPCOICCARD	= 3100;

var XW_MEDIA_TYPE_ANYSIGN4PC		= 0;
var XW_MEDIA_TYPE_ANYSIGNLITE		= 1;
var XW_MEDIA_TYPE_XECUREFREESIGN	= 2;

var ANYSIGN4PC_INSTALL_MSG  	= "[AnySign for PC] ì¸ì¦ ë³´ì íë¡ê·¸ë¨ ì¤ì¹ê° íìí©ëë¤.\n[íì¸]ì ì ííìë©´ ì¤ì¹íì´ì§ë¡ ì°ê²°ë©ëë¤.";
var ANYSIGN4PC_INSTALL_MSG_en	= "[AnySign for PC] Installation of certified authentication security program is required.\nIf you select OK to go to the installation page.";

var XW_SECUREDISK_INSTALL_MSG		= "ìì ëì¤í¬ íë¡ê·¸ë¨ì´ ì¤ì¹ëì´ ìì§ ììµëë¤.\nì¤ì¹íì´ì§ë¡ ì´ëíìê² ìµëê¹?";
var XW_SECUREDISK_INSTALL_MSG_en	= "Secure Disk program is not installed.\nDo you want to go to the installation page?";
var XW_SECUREDISK_NOTABLE_MSG		= "ìì ëì¤í¬ íë¡ê·¸ë¨ì´ ì¤ì¹ëì´ ìì§ ìê±°ë ì¬ì©í  ì ììµëë¤.";
var XW_SECUREDISK_NOTABLE_MSG_en	= "Secure Disk program is not installed or is not available.";

var XW_OPENCERT_INIT_ERROR_NOTABLE_MSG		= "ë¸ë¼ì°ì  ê³µëì ì¥ìë¥¼ ì ì¸í ë¡ì»¬ ë¸ë¼ì°ì  ì ì¥ìì ì¸ì¦ìë§ ì½ìµëë¤.";
var XW_OPENCERT_INIT_ERROR_NOTABLE_MSG_en	= "Reads only certificates from the local browser storage except for the browser common storage.";

var ANYSIGN4PC_ERROR_30000		= "AnySign4PC.exe ì¤íì ì¤í¨íììµëë¤.";
var ANYSIGN4PC_ERROR_30001		= "ë²ì  ìê·¸ë ì´ëê° íìí©ëë¤.";
var ANYSIGN4PC_ERROR_30002		= "AnySign4PC.exe ì¤íì íìí ì ë³´ë¥¼ íëíëë° ì¤í¨íììµëë¤.";
var ANYSIGN4PC_ERROR_30003		= "AnySign4PC.exe ìì ì¬ì© ê°ë¥í íµì  í¬í¸ê° ëª¨ë ì¬ì©ì¤ìëë¤.";
var ANYSIGN4PC_ERROR_30004		= "AnySign4PC.exe ì¤í í ìì¼ ì°ê²° íì¸ì ì¤í¨íììµëë¤.";
var ANYSIGN4PC_ERROR_30005		= "AnySign4PC.exe ì¤í í ìì¼ ì°ê²° íì¸ë ë¤ íë¡ì¸ì¤ê° ì¢ë£ëììµëë¤.";

var XW_ERROR_MSG_SIGNCACHE1		= "No cached data.";
var XW_ERROR_MSG_SIGNCACHE2		= "Invalid Crypto Token.";

var XW_ERROR_PLUGINS_SIGN_CANCEL	= 10000006;
var XW_ERROR_PLUGINS_INPUTNULL		= 10000111;
var XW_ERROR_VERIFY_INTEGRITY		= 20000008;
var XW_ERROR_SECUREDISK_LOAD_FAILED	= 23000802;
//var XW_ERROR_SIGN_DUPLICATE			= 24000538;

var XW_ERROR_PLUGINS_INCORRECT_PWD		= 10000013;
var XW_ERROR_PLUGINS_FAILED_TO_LOAD_DLL = 10010002;
var XW_ERROR_PLUGINS_HSM_NOT_FIND_TOKEN = 10010009;
var XW_ERROR_PLUGINS_NOT_SECUREINPUT	= 10010015;

//var XW_ERROR_VERIFYCERTOWNER			= 22000002;
//var XW_ERROR_VERIFYPASSWORD 			= 22000006;
//var XW_ERROR_INCORRECT_PASSWORD_KMCERT	= 22000015;

var XW_ERROR_MIRAE_1 					= 30000001;
var XW_ERROR_MIRAE_6					= 30000006;
var XW_ERROR_MIRAE_PKCS11_1				= 31000001;
var XW_ERROR_MIRAE_PKCS11_2				= 31000006;

var XW_ERROR_NOT_LOGIN					= 0x7005011C;	// 0x04
var XW_ERROR_USER_LOGIN_INVALID_PASSWD1 = 0x6409012C;	// 0x07
var XW_ERROR_USER_LOGIN_INVALID_PASSWD2 = 0x640C0128;	// 0x08
var XW_ERROR_USER_LOGIN_EXPIRED_PASSWD2 = 0x640C011C;	// 0x09
var XW_ERROR_CERT_PASSWORD_UPDATE_FAIL	= 0x65021018;	// 0x0B

var XW_ERROR_INCORRECT_PARAM			= 10000111;
var XW_ERROR_NOT_SUPPORTED_MEDIA		= 10000150;
var XW_ERROR_DIFFRENT_PASSWORD			= 10000015;
var XW_ERROR_INCORRECT_PASSWORD			= 22000013;
var XW_ERROR_INCORRECT_PASSWORD_KMCERT	= 22000015;
var XW_ERROR_INPUT_LENGTH				= 10000016;
var XW_ERROR_INPUT_LENGTH_10			= 10000145;
var XW_ERROR_PASSWORD_IS_WRONG			= 10000124;
var XW_ERROR_PASSWORD_MIX_DISIT_ALPHA_PUNCT	= 10000143;
var XW_ERROR_PASSWORD_NOT_ALLOW_CHARACTER	= 10000144;
var XW_ERROR_CONFIRMED_PASSWORD_DOES_NOT_MATCH	= 10000135;
var XW_ERROR_GETCERTIFICATE				= 22000007;
var XW_ERROR_GETCERT					= 22000004;
var XW_ERROR_USE_CERT_FAIL				= 21000016;
var XW_ERROR_GETCERTTREE				= 22000005;
var XW_ERROR_SAVECERT					= 21000009;
var XW_ERROR_PFX_CERT_IMPORT_FAIL		= 21000015;
var XW_ERROR_EXPORTCERT					= 21000007;
var XW_ERROR_DELETECERT					= 21000005;
var XW_ERROR_VERIFYPASSWORD				= 22000006;
var XW_ERROR_CHANGECERTPASSWORD			= 21000006;
var XW_ERROR_VERIFYCERT					= 22000001;
var XW_ERROR_VERIFYCERTOWNER			= 22000002;
var XW_ERROR_CREATE_SIGNDATA			= 24000003;
var XW_ERROR_GETPLAINDATAOFSIGNDATA		= 24000004;
var XW_ERROR_ENVELOPIDNUM				= 24000007;
var XW_ERROR_ENVELOP_FAIL				= 24000401;
var XW_ERROR_DEENVELOP_FAIL				= 24000403;
var XW_ERROR_REQUESTCERT				= 21000001;
var XW_ERROR_RENEWCERT					= 21000002;
var XW_ERROR_RECOVERCERT				= 21000003;
var XW_ERROR_REVOKECERT					= 21000004;
var XW_ERROR_HASHDATA					= 24000005;
var XW_ERROR_ENCRYPT_PRIKEY				= 21000801;
var XW_ERROR_DECRYPT_PRIKEY				= 21000802;
var XW_ERROR_PKCS8_NO_VID				= 23000102;
var XW_ERROR_PKCS8_NO_RANDOM			= 23000104;
var XW_ERROR_SIGN_DUPLICATE_CERT		= 24000538;
var XW_ERROR_SAVE_CERT_ALREADY_EXIST	= 21000405;
var XW_ERROR_CERT_EXPIRED				= 30043034;

var XW_OPENCERT_ERROR_INCORRECT_PASSWORD    = 2211;

var gTarget;
var UbikeyFunction;
var gPlainFilePath;
var gSignedFilePath;

var gShowGuideDialog = false;
var gStartTime = 0;
var gGuideDialog = null;
var gTimeIntervalFunc;

if(window.console == undefined) console = {log:function(){}};

// error callback ì ì§ì í´ ì£¼ì§ ìì¼ë©´ ì´ê±¸ ì¬ì©íë¤
function gErrCallback_common(aResult)
{
	if (!aResult.msg)
		aResult.msg = "Unknown Error";

	alert("[" + aResult.code + "] " +aResult.msg.replace(/\\n/g, '\r\n'));
}

if (!String.trim && !String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/gi, "");
	}	
}

AnySignForPCInterface = function(aSandBox)
{
	this.mSandBox = aSandBox;
}

AnySignForPCInterface.prototype.checkFunction= function (aFunctionName)
{
	var aObject;
	
	if (AnySign.mAnySignEnable)
	{
		return true;
	}
	else
	{
		aObject = this.mSandBox.crypto();

		if (aFunctionName in aObject)
			return true;
		else
			return false;
	}
}

AnySignForPCInterface.prototype.setCertificate = function (aPFX,
														   aSignCert,
														   aSignKey,
														   aKmCert,
														   aKmKey,
														   aKeyword,
														   aOption,
														   aSearchType,
														   aSearchValue,
														   aSearchSerial,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "setCert")) return;} catch(e) {}
		this.mSandBox.crypto().setCert (aPFX,
										aSignCert,
										aSignKey,
										aKmCert,
										aKmKey,
										aKeyword,
										aSearchType,
										aSearchValue,
										aSearchSerial,
										aOption,
										aCallback);
	}
}

AnySignForPCInterface.prototype.getCertPath = function (aMediaID,
														aCertType,
														aIssuerRDN,
														aCertSerial,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCertPath",
										aMediaID,
										aCertType,
										aIssuerRDN,
										aCertSerial);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getCertTree = function (aMediaID,
														aCertType,
														aSearchType,
														aContentLevel,
														aSearchValue,
														aSearchSerial,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCertTree",
										aMediaID,
										aCertType,
										aSearchType,
										aContentLevel,
										aSearchValue,
										aSearchSerial);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getCertTree")) return;} catch(e) {}
		this.mSandBox.crypto().getCertTree (aMediaID,
											aCertType,
											aSearchType,
											aSearchValue,
											aSearchSerial,
											aContentLevel,
											aCallback);
	}
}

AnySignForPCInterface.prototype.getMediaList = function (aMediaType,
														 aReturnType,
														 aOption,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getMediaList",
										aMediaType,
										aReturnType,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getMediaList")) return;} catch(e) {}
		this.mSandBox.crypto().getMediaList (aMediaType,
											 aOption,
											 aCallback);
	}
}

AnySignForPCInterface.prototype.signDataCMS = function (aXgateAddress,
														aMediaID,
														aIssuerRDN,
														aCertSerial,
														aKeyword,
														aData,
														aOption,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signDataCMS",
										aXgateAddress,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aData,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "signData")) return;} catch(e) {}
		this.mSandBox.crypto().signData (aMediaID,
										 aIssuerRDN,
										 aCertSerial,
										 aKeyword,
										 aData,
										 aOption,
										 aCallback);
	}
}

AnySignForPCInterface.prototype.signDataAdd = function (aXgateAddress,
														aMediaID,
														aIssuerRDN,
														aCertSerial,
														aKeyword,
														aData,
														aOption,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signDataAdd",
										aXgateAddress,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aData,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "signDataAdd")) return;} catch(e) {}
		this.mSandBox.crypto().signDataAdd (aMediaID,
											aIssuerRDN,
											aCertSerial,
											aKeyword,
											aData,
											aOption,
											aCallback);
	}
}

AnySignForPCInterface.prototype.getCertPEM = function (aMediaID,
													   aIssuerRDN,
													   aCertSerial,
													   aOption,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCertPEM",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getCert")) return;} catch(e) {}
		this.mSandBox.crypto().getCert (aMediaID,
										aIssuerRDN,
										aCertSerial,
										2,
										aCallback);
	}
}

AnySignForPCInterface.prototype.signFile = function (aXgateAddress,
													 aMediaIDDataSet,
													 aIssuerDNDataSet,
													 aSerialDataSet,
													 aDecryptedKeyword,
													 aPlainFilePath,
													 aSignedFilePath,
													 aSignOption,
													 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signFile",
										aXgateAddress,
										aMediaIDDataSet,
										aIssuerDNDataSet,
										aSerialDataSet,
										aDecryptedKeyword,
										aPlainFilePath,
										aSignedFilePath,
										aSignOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.signFileInfo = function (aXgateAddress,
														 aMediaID,
														 aIssuerRDN,
														 aCertSerial,
														 aKeyword,
														 aInputData,
														 aOption,
														 aAdd,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signFileInfo",
										aXgateAddress,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aInputData,
										aOption,
										aAdd);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "signFileInfo")) return;} catch(e) {}
		this.mSandBox.crypto().signFileInfo (aMediaID,
											 aIssuerRDN,
											 aCertSerial,
											 aKeyword,
											 aInputData,
											 aOption,
											 aCallback);
	}
}

AnySignForPCInterface.prototype.signDataWithPFX = function (aPlain,
															aPFXPath,
															aKeyword,
															aOption,
															aAdd,
															aCallback)

{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signDataWithPFX",
										aPlain,
										aPFXPath,
										aKeyword,
										aOption,
										aAdd);
	}
	else
	{
		if (aAdd == 0) {
			try {if (!Integrity.checkIntegrity("XCrypto", "signData")) return;} catch(e) {}
			this.mSandBox.crypto().signData (XW_CERT_LOCATION_MEMORYSTORAGE,
											 null,
											 null,
											 aKeyword,
											 aPlain,
											 aOption,
											 aCallback);
		} else {
			try {if (!Integrity.checkIntegrity("XCrypto", "signDataAdd")) return;} catch(e) {}
			this.mSandBox.crypto().signDataAdd (XW_CERT_LOCATION_MEMORYSTORAGE,
												null,
												null,
												aKeyword,
												aPlain,
												aOption,
												aCallback);
		}
	}
}

AnySignForPCInterface.prototype.setIdNum = function (aId_num,
													 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("setIdNum",
										aId_num);
	}
	else
	{
		this.mSandBox.envelopIdnum_idnum = aId_num;
		aCallback(0);
	}
}

AnySignForPCInterface.prototype.envelopIdNum = function (aXgateAddress,
									 					 aCAName,
														 aMediaID,
														 aIssuerRDN,
														 aCertSerial,
														 aKeyword,
														 aSvrCert,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopIdNum",
										aXgateAddress,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aSvrCert);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopIdNum")) return;} catch(e) {}

		var aUserCallback = (function (aResult) {
			if(!aResult) {
				this.mSandBox.envelopIdnum_result = "";
				aCallback (-1);
			} else {
				this.mSandBox.envelopIdnum_result = aResult;
				aCallback (0);
			}
		}).bind(this);

		var aResult = this.mSandBox.crypto().envelopIdNum (aMediaID,
														   aIssuerRDN,
														   aCertSerial,
														   aKeyword,
														   this.mSandBox.envelopIdnum_idnum,
														   aSvrCert,
														   0,
														   aUserCallback);
	}
}

AnySignForPCInterface.prototype.envelopIdNumWithPFX = function (aPFXPath,
																aKeyword,
																aSvrCert,
																aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopIdNumWithPFX",
										aPFXPath,
										aKeyword,
										aSvrCert);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopIdNum")) return;} catch(e) {}

		var aUserCallback = (function (aResult) {

			if(!aResult) {
				this.mSandBox.envelopIdnum_result = "";
				aCallback (-1);
			} else {
				this.mSandBox.envelopIdnum_result = aResult;
				aCallback (0);
			}
		}).bind(this);

		var aResult = this.mSandBox.crypto().envelopIdNum (XW_CERT_LOCATION_MEMORYSTORAGE,
														   null,
														   null,
														   aKeyword,
														   this.mSandBox.envelopIdnum_idnum,
														   aSvrCert,
														   0,
														   aUserCallback);
	}
}

AnySignForPCInterface.prototype.getVidInfo = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getVidInfo");
	}
	else
	{
		aCallback(this.mSandBox.envelopIdnum_result);
	}
}
AnySignForPCInterface.prototype.verifyPassword = function (aMediaID,
														   aIssuerRDN,
														   aCertSerial,
														   aPasswd,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyPassword",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aPasswd);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "verifyCertPwd")) return;} catch(e) {}
		this.mSandBox.crypto().verifyCertPwd (aMediaID,
											  aIssuerRDN,
											  aCertSerial,
											  aPasswd,
											  0,
											  aCallback);
	}
}

AnySignForPCInterface.prototype.verifyCert = function (aMediaID,
													   aCertType,
													   aIssuerRDN,
													   aCertSerial,
													   aVerifyOption,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyCert",
										aMediaID,
										aCertType,
										aIssuerRDN,
										aCertSerial,
										aVerifyOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "verifyCert")) return;} catch(e) {}
		this.mSandBox.crypto().verifyCert (aMediaID,
										   aCertType,
										   aIssuerRDN,
										   aCertSerial,
										   aVerifyOption,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.verifyCertOwner = function (aMediaID,
															aIssuerRDN,
															aCertSerial,
															aKeyword,
															aIdNum,
															aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyCertOwner",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aIdNum);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "verifyCertOwner")) return;} catch(e) {}
		this.mSandBox.crypto().verifyCertOwner (aMediaID,
												aIssuerRDN,
												aCertSerial,
												aKeyword,
												aIdNum,
												0,
												aCallback);
	}
}

AnySignForPCInterface.prototype.verifyRootCaCert = function (aMediaID,
															 aIssuerRDN,
															 aCertSerial,
															 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyRootCaCert",
										aMediaID,
										aIssuerRDN,
										aCertSerial);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.verifyRootCaCertByLDAP = function (aLDAPURL,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyRootCaCertByLDAP",
										aLDAPURL);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.deleteCertificate = function (aMediaID,
															  aCertType,
															  aIssuerRDN,
															  aCertSerial,
															  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deleteCertificate",
										aMediaID,
										aCertType,
										aIssuerRDN,
										aCertSerial);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "deleteCert")) return;} catch(e) {}
		this.mSandBox.crypto().deleteCert (aMediaID,
										   aCertType,
										   aIssuerRDN,
										   aCertSerial,
										   0,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.changeCertPassword = function (aMediaID,
															   aIssuerRDN,
															   aCertSerial,
															   aOldKeyword,
															   aNewKeyword,
															   aConfirmKeyword,
															   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("changeCertPassword",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aOldKeyword,
										aNewKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "changeCertPwd")) return;} catch(e) {}
		this.mSandBox.crypto().changeCertPwd (aMediaID,
											  aIssuerRDN,
											  aCertSerial,
											  aOldKeyword,
											  aNewKeyword,
											  aConfirmKeyword,
											  0,
											  aCallback);
	}
}
/*
AnySignForPCInterface.prototype.lastErrKey = function ()
{
	var aResult;

	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.doSend ("lastErrKey");
	}
	else
	{
		aResult = this.mSandBox.crypto().lastErrKey ();
	}

	return aResult;
}

AnySignForPCInterface.prototype.lastErrCode = function ()
{
	var aResult;

	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.doSend ("lastErrCode");
	}
	else
	{
		aResult = this.mSandBox.crypto().lastErrCode ();
	}
	
	return aResult;
}

AnySignForPCInterface.prototype.lastErrMsg = function ()
{
	var aResult;

	if (AnySign.mAnySignEnable)
	{
		aResult = this.mSandBox.extension.getLastErrMsg ();
		this.mSandBox.extension.resetErrAndMsg ();
	}
	else
	{
		aResult = this.mSandBox.crypto().lastErrMsg ();
	}

	return aResult;
}
*/
AnySignForPCInterface.prototype.setError = function (aErrorKey,
													 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("setError",
										aErrorKey);
	}
	else
	{
		this.mSandBox.crypto().setError (aErrorKey,
										 aCallback);
	}
}

AnySignForPCInterface.prototype.checkPFXPwdWithFilter = function (aFileName,
																  aKeyword,
																  aSearchType,
																  aSearchValue,
																  aSearchSerial,
																  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("checkPFXPwdWithFilter",
										aFileName,
										aKeyword,
										aSearchType,
										aSearchValue,
										aSearchSerial);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.checkPFXPwd = function (aFileName,
														aKeyword,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("checkPFXPwd",
										aFileName,
										aKeyword);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.setSecureInput = function (aSessionID,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("put_SecureInputN",
										aSessionID);
	}
	else
	{
		this.mSandBox.crypto().setSecureInput (aSessionID,
											   aCallback);
	}
}

AnySignForPCInterface.prototype.setXecureKeyPad = function (aSessionID,
															aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("put_XecureKeyPadN",
										aSessionID);
	}
	else
	{	// ë¯¸ì§ì
		aCallback();
	}
}

AnySignForPCInterface.prototype.getSecureInput = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("get_SecureInputN");
	}
	else
	{
		this.mSandBox.crypto().getSecureInput (aCallback);
	}
}

AnySignForPCInterface.prototype.importCert = function (aMediaID,
													   aKeyword,
													   aPFXKeyword,
													   aPFXPath,
													   aSignCertPath,
													   aSignKeyPath,
													   aKMCertPath,
													   aKMKeyPath,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("importCert",
										aMediaID,
										aKeyword,
										aPFXKeyword,
										aPFXPath,
										aSignCertPath,
										aSignKeyPath,
										aKMCertPath,
										aKMKeyPath);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.exportCert = function (aMediaID,
													   aIssuerRDN,
													   aCertSerial,
													   aPKCS8Keyword,
													   aPKCS12Keyword,
													   aStorePath,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("exportCert",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aPKCS8Keyword,
										aPKCS12Keyword,
										aStorePath);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.exportCertToPFX = function (aMediaID,
															aIssuerRDN,
															aCertSerial,
															aPKCS8Keyword,
															aPKCS12Keyword,
															aStoreTokenPIN,
															aOption,
															aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("exportCertToPFX",
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aPKCS8Keyword,
										aPKCS12Keyword,
										aStoreTokenPIN,
										AnySign.mFinancialType,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "exportCert")) return;} catch(e) {}
		aOption |= 1;
		this.mSandBox.crypto().exportCert (aMediaID,
										   aIssuerRDN,
										   aCertSerial,
										   aPKCS8Keyword,
										   aPKCS12Keyword,
										   aOption,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.importCertFromPFX = function (aMediaID,
															  aKeyword,
															  aPFXKeyword,
															  aPFXPath,
															  aSignCertPath,
															  aSignKeyPath,
															  aKMCertPath,
															  aKMKeyPath,
															  aStoreTokenPIN,
															  aOption,
															  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("importCertFromPFX",
										aMediaID,
										aKeyword,
										aPFXKeyword,
										aPFXPath,
										aSignCertPath,
										aSignKeyPath,
										aKMCertPath,
										aKMKeyPath,
										aStoreTokenPIN,
										AnySign.mFinancialType);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "importCert")) return;} catch(e) {}
		this.mSandBox.crypto().importCert (aPFXPath,
										   aSignCertPath,
										   aSignKeyPath,
										   aKMCertPath,
										   aKMKeyPath,
										   aPFXKeyword,
										   aMediaID,
										   aKeyword,
										   aOption,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.getPFXAccessableMediaList = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getPFXAccessableMediaList");
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getPFXFolderList = function (aBasePath,
															 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getPFXFolderList",
										aBasePath);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getFolderList = function (aBasePath,
														  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getFolderList",
										aBasePath);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.saveCert = function (aIssuerRDN,
													 aCertSerial,
													 aKeyword,
													 aSourceMediaID,
													 aCertType,
													 aDestMediaID,
													 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("saveCert",
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aSourceMediaID,
										aCertType,
										aDestMediaID);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.saveCertFromStoreToken = function (aIssuerRDN,
																   aCertSerial,
																   aKeyword,
																   aSourceMediaID,
																   aCertType,
																   aDestMediaID,
																   aStoreTokenPIN,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("saveCertFromStoreToken",
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aSourceMediaID,
										aCertType,
										aDestMediaID,
										aStoreTokenPIN,
										AnySign.mFinancialType);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.requestCertificate = function (aCAPort, 
															   aCAAddr, 
															   aMediaID, 
															   aRefNum,
															   aAuthCode,
															   aCAType, 
															   aKeyword,
															   aWorkerNum,
															   aWorkerScript,
															   aReqOption, 
															   aCAName, 
															   aRAName,
															   aUserCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aUserCallback);
		this.mSandBox.extension.doSend ("requestCertificate",
										aCAPort,
										aCAAddr,
										aMediaID,
										aRefNum,
										aAuthCode,
										aCAType,
										aKeyword,
										aReqOption,
										aCAName,
										aRAName);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "requestCert")) return;} catch(e) {}
		this.mSandBox.crypto().requestCert (aCAType,
											aCAAddr + aCAPort,
											aRefNum,
											aAuthCode,
											aMediaID,
											aKeyword,
											aWorkerNum,
											aWorkerScript,
											aReqOption,
											aUserCallback);
	}
}

AnySignForPCInterface.prototype.renewCertificate = function (aCAPort,
															 aCAAddr,
															 aIssuerRDN,
															 aCertSerial,
															 aMediaID,
															 aCAType,
															 aOldKeyword,
															 aNewKeyword,
															 aWorkerNum,
															 aWorkerScript,
															 aOption,
															 aUserCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aUserCallback);
		this.mSandBox.extension.doSend ("renewCertificate",
										aCAPort,
										aCAAddr,
										aIssuerRDN,
										aCertSerial,
										aMediaID,
										aCAType,
										aOldKeyword,
										aNewKeyword,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "renewCert")) return;} catch(e) {}
		this.mSandBox.crypto().renewCert (aCAType,
										  aCAAddr + aCAPort,
										  aMediaID,
										  aIssuerRDN,
										  aCertSerial,
										  aOldKeyword,
										  aNewKeyword,
										  aWorkerNum,
										  aWorkerScript,
										  aOption,
										  aUserCallback);
	}
}

AnySignForPCInterface.prototype.renewCertificateEx = function (aCAPort,
															   aCAAddr,
															   aIssuerRDN,
															   aCertSerial,
															   aOldMediaID,
															   aNewMediaID,
															   aCAType,
															   aOldKeyword,
															   aNewKeyword,
															   aOption,
															   aUserCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aUserCallback);
		this.mSandBox.extension.doSend ("renewCertificateEx",
										aCAPort,
										aCAAddr,
										aIssuerRDN,
										aCertSerial,
										aOldMediaID,
										aNewMediaID,
										aCAType,
										aOldKeyword,
										aNewKeyword,
										aOption);
	}
	else
	{
		// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.revokeCertificate = function (aCAPort,
															  aCAAddr,
															  aIssuerRDN,
															  aCertSerial,
															  aMediaID,
															  aJobCode,
															  aReason,
															  aCAType,
															  aKeyword,
															  aUserCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aUserCallback);
		this.mSandBox.extension.doSend ("revokeCertificate",
										Number(aCAPort),
										aCAAddr,
										aIssuerRDN,
										aCertSerial,
										Number(aMediaID),
										Number(aJobCode),
										Number(aReason),
										Number(aCAType),
										aKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "revokeCertificate")) return;} catch(e) {}
		this.mSandBox.crypto().revokeCertificate (Number(aCAPort),
												  aCAAddr,
												  aIssuerRDN,
												  aCertSerial,
												  Number(aMediaID),
												  Number(aJobCode),
												  Number(aReason),
												  Number(aCAType),
												  aKeyword,
												  aUserCallback);
	}
}

AnySignForPCInterface.prototype.installCertificate = function (aMediaID,
															   aType,
															   aCertificate,
															   aKeyword,
															   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("installCertificate",
										aMediaID,
										aType,
										aCertificate,
										aKeyword);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.installCertificateByLDAP = function (aLDAPURL,
																	 aIssuerRDN,
																	 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("installCertificateByLDAP",
										aLDAPURL,
										aIssuerRDN);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.setIssuerConvertTable = function (aIssuer,
																  aConvertedPool,
																  aComment,
																  aLanguage,
																  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("setIssuerConvertTable",
										aIssuer,
										aConvertedPool,
										aComment,
										aLanguage);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "setIssuerConvertTable")) return;} catch(e) {}
		this.mSandBox.crypto().setIssuerConvertTable (aIssuer,
													  aConvertedPool,
													  aComment,
													  aLanguage,
													  aCallback);
	}
}

AnySignForPCInterface.prototype.setPolicyConvertTable = function (aPolicy,
																  aConvertedPool,
																  aComment,
																  aLanguage,
																  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("setPolicyConvertTable",
										aPolicy,
										aConvertedPool,
										aComment,
										aLanguage);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "setPolicyConvertTable")) return;} catch(e) {}
		this.mSandBox.crypto().setPolicyConvertTable (aPolicy,
													  aConvertedPool,
													  aComment,
													  aLanguage,
													  aCallback);
	}
}

AnySignForPCInterface.prototype.envelopeDataWithPEM = function (aPlainData,
																aEnvelopeOption,
																aPEMCert,
																aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeDataWithPEM",
										aPlainData,
										aEnvelopeOption,
										aPEMCert);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopeDataWithPEM")) return;} catch(e) {}
		this.mSandBox.crypto().envelopeDataWithPEM (aPEMCert,
													aPlainData,
													aEnvelopeOption,
													aCallback);
	}
}


AnySignForPCInterface.prototype.envelopeDataWithCert = function (aPlainData,
																 aEnvelopeOption,
																 aMediaIDList,
																 aIssuerRDNList,
																 aCertSerialList,
																 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeDataWithCert",
										aPlainData,
										aEnvelopeOption,
										aMediaIDList,
										aIssuerRDNList,
										aCertSerialList);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopeDataWithCert")) return;} catch(e) {}
		this.mSandBox.crypto().envelopeDataWithCert (aMediaIDList,
													 aIssuerRDNList,
													 aCertSerialList,
													 aPlainData,
											 		 aEnvelopeOption,
													 aCallback);
	}
}


AnySignForPCInterface.prototype.envelopeDataWithPasswd = function (aPlainData,
																   aEnvelopeOption,
																   aKeyword,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeDataWithPasswd",
										aPlainData,
										aEnvelopeOption,
										aKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopeDataWithPwd")) return;} catch(e) {}
		this.mSandBox.crypto().envelopeDataWithPwd (aKeyword,
													aPlainData,
													aEnvelopeOption,
													aCallback);
	}
}


AnySignForPCInterface.prototype.deEnvelopeDataWithCert = function (aEnvelopedData,
																   aMediaID,
																   aIssuerRDN,
																   aCertSerial,
																   aKeyword,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deEnvelopeDataWithCert",
										aEnvelopedData,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "deenvelopeDataWithCert")) return;} catch(e) {}
		this.mSandBox.crypto().deenvelopeDataWithCert (aMediaID,
													   aIssuerRDN,
													   aCertSerial,
													   aKeyword,
													   aEnvelopedData,
													   0,
													   aCallback);
	}
}

AnySignForPCInterface.prototype.deEnvelopeDataWithCacheCert = function (aXgateAddress,
																		aEnvelopedData,
																		aMediaID,
																		aIssuerRDN,
																		aCertSerial,
																		aKeyword,
																		aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deEnvelopeDataWithCacheCert",
										aXgateAddress,
										aEnvelopedData,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "deenvelopeDataWithCert")) return;} catch(e) {}
		this.mSandBox.crypto().deenvelopeDataWithCert (aMediaID,
													   aIssuerRDN,
													   aCertSerial,
													   aKeyword,
													   aEnvelopedData,
													   0,
													   aCallback);
	}
}

AnySignForPCInterface.prototype.deEnvelopeDataWithPasswd = function (aEnvelopedData,
																	 aKeyword,
																	 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deEnvelopeDataWithPasswd",
										aEnvelopedData,
										aKeyword);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "deenvelopeDataWithPwd")) return;} catch(e) {}
		this.mSandBox.crypto().deenvelopeDataWithPwd (aKeyword,
													  aEnvelopedData,
													  0,
													  aCallback);
	}
}


AnySignForPCInterface.prototype.setLanguage = function (aLanguage,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("put_LanguageN",
		 								aLanguage);
	}
	else
	{
		this.mSandBox.crypto().setLanguage (aLanguage,
											aCallback);
	}
}

AnySignForPCInterface.prototype.setCharset = function (aCharset,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("put_CharsetN",
										aCharset);
	}
	else
	{
		this.mSandBox.crypto().setCharset (aCharset,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.setErrCodeAndMsg = function ()
{
	var aResult = {};

	/************************************************************************/
	if (AnySign.mAnySignEnable)
	{
		aResult.code = this.mSandBox.extension.getLastErrCode();
		aResult.msg = this.mSandBox.extension.getLastErrMsg();
		
		this.mSandBox.extension.resetErrAndMsg ();
	}
	else
	{
		var aErrCode = this.mSandBox.crypto().getLastErrCode();
		aResult.code = this.mSandBox.convertErrCode(aErrCode);
		aResult.msg = this.mSandBox.crypto().getLastErrMsg();
		
		this.mSandBox.crypto().resetErrAndMsg ();
	}
	/************************************************************************/

	return aResult;
}

AnySignForPCInterface.prototype.setTransKey = function (aSessionID,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("put_TransKeyN",
										aSessionID);
	}
	else
	{	// ë¯¸ì§ì
		aCallback();
	}
}

AnySignForPCInterface.prototype.loginPKCS11FromIndex = function (aProviderIndex,
																 aPIN,
																 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("loginPKCS11FromIndex",
										aProviderIndex,
										aPIN);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

// AnySignLite API
AnySignForPCInterface.prototype.setLastLocation = function (aMediaID)
{
	try {if (!Integrity.checkIntegrity("XCrypto", "setLastLocation")) return;} catch(e) {}
	this.mSandBox.crypto().setLastLocation (aMediaID);
}

// AnySignLite API
AnySignForPCInterface.prototype.setCacheCertLocation = function (aXgateAddress,
																 aMediaID)
{
	try {if (!Integrity.checkIntegrity("XCrypto", "setCacheCertLocation")) return;} catch(e) {}
	this.mSandBox.crypto().setCacheCertLocation (aMediaID);
}

AnySignForPCInterface.prototype.getLastLocation = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getLastLocation");
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getLastLocation")) return;} catch(e) {}
		this.mSandBox.crypto().getLastLocation (aCallback);
	}
}

AnySignForPCInterface.prototype.getCacheCertLocation = function (aXgateAddress,
																 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCacheCertLocation",
										aXgateAddress);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getCacheCertLocation")) return;} catch(e) {}
		this.mSandBox.crypto().getCacheCertLocation (0,
													 aCallback);
	}
}

AnySignForPCInterface.prototype.getCacheCertLocationEx = function (aXgateAddress,
																   aOption,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCacheCertLocationEx",
										aXgateAddress,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "getCacheCertLocation")) return;} catch(e) {}
		this.mSandBox.crypto().getCacheCertLocation (aOption,
													 aCallback);
	}
}

AnySignForPCInterface.prototype.finalizePKCS11FromName = function (aProviderName,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("finalizePKCS11FromName",
										 aProviderName);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.finalizePKCS11FromIndex = function (aProviderIndex,
																	aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("finalizePKCS11FromIndex",
										aProviderIndex);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.initializePKCS11FromName = function (aProviderName,
																	 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("initializePKCS11FromName",
										aProviderName);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.initializePKCS11FromNameEx = function (aProviderName,
																	   aServiceInfo,
																	   aOption,
																	   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("initializePKCS11FromNameEx",
										aProviderName,
										aServiceInfo,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.hsmDriverManager = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("hsmDriverManager");
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.verifyHSM = function (aProviderName,
													  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyHSM",
										aProviderName);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.wif = function (aOption,
												aPEM,
												aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("wif",
										aOption,
										aPEM);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.setPhoneData = function (aPhoneData,
														 aVendor,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("setPhoneData",
										aPhoneData,
										aVendor);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}
 
AnySignForPCInterface.prototype.checkPasswordLen = function (aKeyword,
															 aKeywordconfirm,
															 aConfirm,
															 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("checkPasswordLen",
										aKeyword,
										aKeywordconfirm,
										aConfirm);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "checkPwd")) return;} catch(e) {}
		var aOption = 0;
		if (aConfirm) aOption = 1;
		this.mSandBox.crypto().checkPwd (aKeyword,
										 aKeywordconfirm,
										 aOption,
										 aCallback);
	}
}

AnySignForPCInterface.prototype.checkPasswordLenExt = function (aKeyword,
																aKeywordconfirm,
																aConfirm,
																aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("checkPasswordLenExt",
										aKeyword,
										aKeywordconfirm,
										aConfirm);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "checkPwd")) return;} catch(e) {}
		var aOption = 2;
		if (aConfirm) aOption = 3;
		this.mSandBox.crypto().checkPwd (aKeyword,
										 aKeywordconfirm,
										 aOption,
										 aCallback);
	}
}

AnySignForPCInterface.prototype.blockEnc = function (aXgateAddress, aPath, aPlain, aMethod, aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("blockEnc",
										 aXgateAddress,
										 aPath,
										 aPlain,
										 aMethod);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.blockEnc2 = function (aXgateAddress,
													  aPath,
													  aPlain,
													  aMethod,
													  aCharset,
													  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("blockEnc2",
										 aXgateAddress,
										 aPath,
										 aPlain,
										 aMethod,
										 aCharset);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.blockEncAsync = function (aXgateAddress,
														  aPath,
														  aPlain,
														  aMethod,
														  aCharset,
														  aUserCallback,
														  aParam)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.doAsyncSend ('',
											 "blockEnc2",
											 aXgateAddress,
											 aPath,
											 aPlain,
											 aMethod,
											 aCharset,
											 aUserCallback,
											 aParam);
	}
	else
	{	// ë¯¸ì§ì
		aUserCallback ("");
	}
}

AnySignForPCInterface.prototype.blockDecEx = function (aXgateAddress,
													   aCipher,
													   aCharSet,
													   aElement,
													   aUserCallback,
													   aParam)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.doAsyncSend (aElement ? aElement.id : null,
											 "blockDecEx",
											 aXgateAddress,
											 aCipher,
											 aCharSet,
											 aUserCallback,
											 aParam);
	}
	else
	{	// ë¯¸ì§ì
		aUserCallback ("");
	}
}

AnySignForPCInterface.prototype.blockEncConvert = function (aXgateAddress,
															aPath,
															aSessionKey,
															aPlain,
															aMethod,
															aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("blockEncConvert",
										aXgateAddress,
										aPath,
										aSessionKey,
										aPlain,
										aMethod);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.blockEncConvertAsync = function (aXgateAddress,
																 aPath,
																 aSessionKey,
																 aPlain,
																 aMethod,
																 aCharset,
																 aUserCallback,
																 aParam)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.doAsyncSend ('',
											 "blockEncConvert2",
											 aXgateAddress,
											 aPath,
											 aSessionKey,
											 aPlain,
											 aMethod,
											 aCharset,
											 aUserCallback,
											 aParam);
	}
	else
	{	// ë¯¸ì§ì
		aUserCallback ("");
	}
}

AnySignForPCInterface.prototype.getVIDRandom = function (aXgateAddress,
														 aMediaID,
														 aIssuerRDN,
														 aCertSerial,
														 aKeyword,
														 aOption,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getVIDRandom",
										aXgateAddress,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aKeyword,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.hasCachedData = function (aXgateAddress,
														  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("hasCachedData",
										aXgateAddress);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "hasCachedData")) return;} catch(e) {}
		this.mSandBox.crypto().hasCachedData (aCallback);
	}
}

AnySignForPCInterface.prototype.clearCachedData= function (aXgateAddress,
														   aOption,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("clearCachedData",
										aXgateAddress,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "clearCachedData")) return;} catch(e) {}
		this.mSandBox.crypto().clearCachedData (aCallback);
	}
}

AnySignForPCInterface.prototype.getCertInfoEx = function (aSignedData,
														  aOriginalData,
														  aOpOption,
														  aInfoOption,
														  aVerifyOption,
														  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getCertInfoEx",
										aSignedData,
										aOriginalData,
										aOpOption,
										aInfoOption,
										aVerifyOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.verifyData = function (aSignedData,
													   aOriginalData,
													   aOption,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyData",
										aSignedData,
										aOriginalData,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "verifyData")) return;} catch(e) {}
		this.mSandBox.crypto().verifyData (aSignedData,
										   aOriginalData,
										   aOption,
										   aCallback);
	}
}

AnySignForPCInterface.prototype.initStoreToken = function (aMediaID,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("initStoreToken",
										aMediaID);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.loginStoreToken = function (aMediaID,
															aStoreTokenPIN,
															aOption,
															aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("loginStoreToken",
										aMediaID,
										AnySign.mFinancialType,
										aStoreTokenPIN,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.logoutStoreToken = function (aMediaID,
															 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("logoutStoreToken",
										aMediaID);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.getKTBScanInfo = function (aServerIP,
														   aServerPort,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getKTBScanInfo",
										aServerIP,
										aServerPort);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.fileHash = function (aPath,
													 aAlg,
													 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("fileHash",
										aPath,
										aAlg);
	}
	else
	{	// ë¯¸ì§ì
		//aCallback ("");
		
	}
}

AnySignForPCInterface.prototype.generateRandom = function (aLength,
														   aOption,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("generateRandom",
										aLength,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		//aCallback ("");
		try {if (!Integrity.checkIntegrity("XCrypto", "generateRandom")) return;} catch(e) {}
		this.mSandBox.crypto().generateRandom (aLength, aOption, aCallback);
	}
}

AnySignForPCInterface.prototype.initializeSecureDiskFromName = function (aProviderName,
																		 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("initializeSecureDiskFromName",
										aProviderName);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

// CmpMod - 0:default, 1:ë°ê¸, 2:ì¬ë°ê¸, 3:ê°±ì 
AnySignForPCInterface.prototype.loginSecureDiskFromIndex = function (aProviderName,
																	 aPin,
																	 aSubjectRDN,
																	 aIssuerRDN,
																	 aCertSerial,
																	 aCmpMod,
																	 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("loginSecureDiskFromIndex",
										aProviderName,
										aPin,
										aSubjectRDN,
										aIssuerRDN,
										aCertSerial,
										aCmpMod);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.finalizeSecureDiskFromName = function (aProviderName,
																	   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("finalizeSecureDiskFromName",
										aProviderName);
	}
	else
	{	// ë¯¸ì§ì
		aCallback (-1);
	}
}

AnySignForPCInterface.prototype.XK_MakeRandomKeypadID = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("XK_MakeRandomKeypadID");
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.XK_MakeIndex = function (aSessionID,
														 aKeyType,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("XK_MakeIndex",
										aSessionID,
										aKeyType);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

// FCMS
AnySignForPCInterface.prototype.selectFile = function (aInitPath,
													   aFilterString,
													   aOption,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("selectFile",
										aInitPath,
										aFilterString,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.signFileEx = function (aXgateAddress,
													   aInFilePath,
													   aOutFilePath,
													   aMediaID,
													   aIssuerDN,
													   aSerial,
													   aPFXPath,
													   aPasswd,
													   aOption,
													   aDescription,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("signFileEx",
										aXgateAddress,
										aInFilePath,
										aOutFilePath,
										aMediaID,
										aIssuerDN,
										aSerial,
										aPFXPath,
										aPasswd,
										aDescription,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.verifyFile = function (aInFilePath,
													   aSignedData,
													   aOption,
													   aDescription,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("verifyFile",
										aInFilePath,
										aSignedData,
										aDescription,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getVerifiedFileCertInfo = function (aOption,
																	aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getVerifiedFileCertInfo",
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.extractFile = function (aInFilePath,
														aOutFilePath,
														aOption,
														aDescription,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("extractFile",
										aInFilePath,
										aOutFilePath,
										aDescription,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.envelopeFileWithPEM = function (aInFilePath,
																aOutFilePath,
																aCertPEM,
																aOption,
																aDescription,
																aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeFileWithPEM",
										 aInFilePath,
										 aOutFilePath,
										 aCertPEM,
										 aDescription,
										 aOption)
	}
	else
	{
		// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.envelopeFileWithCert = function (aInFilePath,
																 aOutFilePath,
																 aMediaID,
																 aIssuerRDN,
																 aCertSerial,
																 aPFXPath,
																 aOption,
																 aDescription,
																 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeFileWithCert",
										 aInFilePath,
										 aOutFilePath,
										 aMediaID,
										 aIssuerRDN,
										 aCertSerial,
										 aPFXPath,
										 aDescription,
										 aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.deEnvelopeFileWithCert = function (aInFilePath,
																   aOutFilePath,
																   aMediaID,
																   aIssuerRDN,
																   aCertSerial,
																   aPFXPath,
																   aPasswd,
																   aOption,
																   aDescription,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deEnvelopeFileWithCert",
										aInFilePath,
										aOutFilePath,
										aMediaID,
										aIssuerRDN,
										aCertSerial,
										aPFXPath,
										aPasswd,
										aDescription,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.envelopeFileWithPasswd = function (aInFilePath,
																   aOutFilePath,
																   aSymKey,
																   aOption,
																   aDescription,
																   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopeFileWithPasswd",
										aInFilePath,
										aOutFilePath,
										aSymKey,
										aDescription,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.deEnvelopeFileWithPasswd = function (aInFilePath,
																	 aOutFilePath,
																	 aSymKey,
																	 aOption,
																	 aDescription,
																	 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("deEnvelopeFileWithPasswd",
										aInFilePath,
										aOutFilePath,
										aSymKey,
										aDescription,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getEnvelopedFileInfo = function (aEnvelopedFile,
																 aOption,
																 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getEnvelopedFileInfo",
										aEnvelopedFile,
										aOption)
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.uploadFile = function (aXgateAddress,
													   aPath,
													   aQuery,
													   aHostName,
													   aPort,
													   aInFilePath,
													   aUploadOption,
													   aDescription,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("uploadFile",
										aXgateAddress,
										aPath,
										aQuery,
										aHostName,
										aPort,
										aInFilePath,
										aDescription,
										aUploadOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.uploadFileEx = function (aXgateAddress,
													   aPath,
													   aQuery,
													   aHostName,
													   aPort,
													   aInFilePath,
													   aUploadOption,
													   aDescription,
													   aSID,
													   aCharset,
													   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("uploadFileEx",
										aXgateAddress,
										aPath,
										aQuery,
										aHostName,
										aPort,
										aInFilePath,
										aDescription,
										aUploadOption,
										aSID,
										aCharset);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.downloadFile = function (aXgateAddress,
														 aPath,
														 aQuery,
														 aHostName,
														 aPort,
														 aTargetFilePath,
														 aDownloadPath,
														 aDownloadOption,
														 aDescription,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("downloadFile",
										aXgateAddress,
										aPath,
										aQuery,
										aHostName,
										aPort,
										aTargetFilePath,
										aDownloadPath,
										aDescription,
										aDownloadOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.downloadFileEx = function (aXgateAddress,
														 aPath,
														 aQuery,
														 aHostName,
														 aPort,
														 aTargetFilePath,
														 aDownloadPath,
														 aDownloadOption,
														 aDescription,
														 aSID,
														 aCharset,
														 aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("downloadFileEx",
										aXgateAddress,
										aPath,
										aQuery,
										aHostName,
										aPort,
										aTargetFilePath,
										aDownloadPath,
										aDescription,
										aDownloadOption,
										aSID,
										aCharset);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.zipFile = function (aXgateAddress,
													aSourceFile,
													aTargetFile,
													aOption,
													aDescription,
													aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("zipFile",
										aXgateAddress,
										aSourceFile,
										aTargetFile,
										aDescription,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.unZipFile = function (aXgateAddress,
													  aSourceFile,
													  aDestDir,
													  aOption,
													  aDescription,
													  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("unZipFile",
										aXgateAddress,
										aSourceFile,
										aDestDir,
										aDescription,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getFileInfo = function (aFilePath,
														aOption,
														aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getFileInfo",
										aFilePath,
										aOption);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.clearTempFile = function (aXgateAddress,
														  aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("clearTempFile",
										aXgateAddress);
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.getHomeDir = function (aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("getHomeDir");
	}
	else
	{	// ë¯¸ì§ì
		aCallback ("");
	}
}

AnySignForPCInterface.prototype.envelopIdNumEx = function (aXgateAddress,
														   aMediaID,
														   aIssuerDN,
														   aSerial,
														   aPFXPath,
														   aPasswd,
														   aIDN,
														   aCertPEM,
														   aOption,
														   aCallback)
{
	if (AnySign.mAnySignEnable)
	{
		this.mSandBox.extension.setcallbackFunc (aCallback);
		this.mSandBox.extension.doSend ("envelopIdNumEx",
										aXgateAddress,
										aMediaID,
										aIssuerDN,
										aSerial,
										aPFXPath,
										aPasswd,
										aIDN,
										aCertPEM,
										aOption);
	}
	else
	{
		try {if (!Integrity.checkIntegrity("XCrypto", "envelopIdNum")) return;} catch(e) {}
		this.mSandBox.crypto().envelopIdNum (aMediaID,
											 aIssuerDN,
											 aSerial,
											 aPasswd,
											 aIDN,
											 aCertPEM,
											 aOption,
											 aCallback);
	}
}

AnySignForPCInterface.prototype.xfsLogin = function (aUserID,
													 aKeyword,
													 aSecondYn,
													 aCode,
													 aCallback)
{
	this.mSandBox.crypto().xfsLogin (aUserID,
									 aKeyword,
									 aSecondYn,
									 aCode,
									 aCallback);
}

AnySignForPCInterface.prototype.xfsOtpRequest = function (aUserID,
													   aCallback)
{
	this.mSandBox.crypto().xfsOtpRequest (aUserID,
										  aCallback);
}

AnySignForPCInterface.prototype.xfsLogout = function (aCallback)
{
	this.mSandBox.crypto().xfsLogout (aCallback);
}

// AnySignLite API
AnySignForPCInterface.prototype.setCrossStorage = function (aCrossStorageHubUrl,
															aCrossStorageOption,
															aCallback)
{
	this.mSandBox.crypto().setCrossStorage (aCrossStorageHubUrl,
											aCrossStorageOption,
											aCallback);
}

// AnySignLite API
AnySignForPCInterface.prototype.setOpenStorage = function (aOpenKey,
														   aOpenCertFiles,
														   aOpenCertEventLisnter,
														   aGuidewindow,
														   aCallback)
{
	this.mSandBox.crypto().setOpenStorage (aOpenKey,
										   aOpenCertFiles,
										   aOpenCertEventLisnter,
										   aGuidewindow,
										   aCallback);
}

AnySignForPCInterface.prototype.SyncOpenCert = function (aCertSource,
														 aCertSerial,
														 aCertPassword,
														 aCallback)
{
	this.mSandBox.crypto().SyncOpenCert (aCertSource,
										 aCertSerial,
										 aCertPassword,
										 aCallback);
}

AnySignForPCInterface.prototype.SetCloudTrayView = function (aView)
{
	try {
		this.mSandBox.crypto().SetCloudTrayView (aView);
	}catch(e) {
		return;
	}
}

AnySignForPCInterface.prototype.exportCertRelayFromBrowser = function (aServerUrl,
																	   aAuthCode,
																	   aIssuerRDN,
																	   aCertSerial,
																	   aOldKeyword,
																	   aNewKeyword,
																	   aCallback)
{
	this.mSandBox.crypto().exportCertRelayFromBrowser (aServerUrl,
													   aAuthCode,
													   aIssuerRDN,
													   aCertSerial,
													   aOldKeyword,
													   aNewKeyword,
													   aCallback);
}

AnySignForPCInterface.prototype.importCertRelayToBrowser = function (aServerUrl,
																	 aAuthCode,
																	 aCallback)
{
	this.mSandBox.crypto().importCertRelayToBrowser (aServerUrl,
													 aAuthCode,
													 aCallback);
}


AnySignForPC = (function ()
{
// private
	var upObject = null;

	var aUserAgent = navigator.userAgent;

	var aBrowserName = "unknown";
	var aBrowserVersion = 0; //Rendering version

	//Check Version 
	var aRegExp;
	if (aUserAgent.indexOf("Edge") >= 0)
	{
		aBrowserName = "edge";
		aRegExp  = new RegExp("Edge\/([0-9]{1,}[\.0-9]{0,})");
	}
	else if (aUserAgent.indexOf("MSIE") >= 0 || aUserAgent.indexOf("Trident") >= 0)
	{
		aBrowserName = "trident";

		//if(document.compatMode == "BackCompat") {
		//	aBrowserVersion = 5;
		//} else
		if(document.documentMode) {
			aBrowserVersion = document.documentMode;
		} else {
			aRegExp  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		}
	}
	else if (aUserAgent.indexOf("Firefox") >= 0)
	{
		aBrowserName = "firefox";
		aRegExp  = new RegExp("Firefox\/([0-9]{1,}[\.0-9]{0,})");
	}
	else if (aUserAgent.indexOf("OPR") >= 0)
	{
		aBrowserName = "opera";
		aRegExp = new RegExp("Opera\/([0-9]{1,}[\.0-9]{0,})");
	}
	else if (aUserAgent.indexOf("Chrome") >= 0)
	{
		aBrowserName = "chrome";
		aRegExp = new RegExp("Chrome\/([0-9]{1,}[\.0-9]{0,})");
	}
	else if (aUserAgent.indexOf("Safari") >= 0)
	{
		aBrowserName = "safari";
		aRegExp = new RegExp("Version\/([0-9]{1,}[\.0-9]{0,})");
	}
	else if (aUserAgent.indexOf("Opera") >= 0)
	{
		aBrowserName = "opera";
		aRegExp = new RegExp("Version\/([0-9]{1,}[\.0-9]{0,})");
	}
	else
	{
		alert("unknown browser");
	}

	if (aRegExp && aRegExp.exec(aUserAgent) != null)
			aBrowserVersion = parseFloat( RegExp.$1 );

	var __SANDBOX =
	{	    
	    loadModule: __loadModule,
	    integrityModule: null,
	    plugin: function () { return document.getElementById ("XWCDataPlugin"); },
		crypto: function () { return __initXCrypto(); },
		xcrypto: null,
		convertErrCode: __convertErrCode,
		browserName: aBrowserName,
	    browserVersion: aBrowserVersion,
	    IEVersion: (function() {
			if( aBrowserName == "trident" )
				return aBrowserVersion;
			else
				return NaN;
		})(),
	    isIE: function() { return __SANDBOX.IEVersion; },
		getSafeResponse: function(aText) { return aText; },
		localPathSeperator: "\\",
	    upInterface: function () { return upObject; },
		showCertselectDialogCommon: __showCertselectDialogCommon,
		certSelectDialog: __certSelectDialog,
		inputPasswdDialog: __inputPasswdDialog,
		verifyVidDialog: __verifyVidDialog,
		isFailed: __isFailed,
		setButton: __setButton,
		setLocationEnable: __setLocationEnable,
		certLocationSet: {},
		refreshCertLocationSet: __refreshCertLocationSet,
		inputKeyHandler: __inputKeyHandler,
		allowNormalInput: aAllowNativeInput,
		addDialogOffset: __addDialogOffset,
		removeDialogOffset: __removeDialogOffset,
		dialogOffset: 530000,
		dialogStack: [],
		setUbiKeyFunction: function (f) { UbikeyFunction = f; },
		getUbiKeyFunction: function (r) { UbikeyFunction(r); },
		transkey: null,
		isCheckFunction: __isCheckFunction,
		convertTable: null,
		setConvertTable : __setConvertTable,
		setAfterAction: __setAfterAction,
		cacheSmartCert: false,
		cacheCertData: {},
		clearCacheCert: __clearCacheCert,
		processCacheCert: __processCacheCert,
		getInputType: __getInputType,
		setMediaType: __setMediaType,
		getMediaType: __getMediaType,
		envelopIdnum_idnum:"",
		envelopIdnum_result:"",
		isDialogLoaded: false,
		informationDialog: null
	}
	
	// AnySignLite init
	function __initXCrypto () {
		if (__SANDBOX.xcrypto == null) {
			if (typeof XCrypto == "undefined")
			 	return null;
			
			if (!XCrypto.checkXCrypto || typeof XCrypto.checkXCrypto != "function")
				return null;
			
			__SANDBOX.xcrypto = XCrypto;
			
			if (AnySign.mSecurityContext != "" && AnySign.mSecurityOption != "") {
				__SANDBOX.xcrypto.setSecurityContext (AnySign.mSecurityContext, AnySign.mSecurityOption);
			}
			
			var aGuideModule = __SANDBOX.loadModule("guidewindow");
			
			// XecureFreeSign init
			__SANDBOX.xcrypto.xfsInit (AnySign.mXecureFreeSignData.serviceURL,
									   AnySign.mXecureFreeSignData.serviceKey,
									   AnySign.mXecureFreeSignData.asyncOption,
									   AnySign.mXecureFreeSignData.signType,
									   AnySign.mWebPageStorageData.type,
									   AnySign.mWebPageStorageData.certList,
									   AnySign.mWebPageStorageData.storageElementID,
									   aGuideModule);
		}
		__SANDBOX.xcrypto.setProperty (AnySign.mLanguage, AnySign.mCharset, AnySign.mLicense);
		return __SANDBOX.xcrypto;
	}
	
	function __convertErrCode (aCode) {
		if(aCode > 0xFFFFFF) {
			// 0x[12][34][56][78]
			var aCode1234 = Math.floor(aCode/0x10000);
			var aCode34 = aCode1234 - Math.floor(aCode1234/0x100)*0x100;
			var aCode78 = aCode - Math.floor(aCode/0x100)*0x100;
			if(aCode34 == 0x06) {
				switch(aCode78) {
					case 0x04 : return XW_ERROR_NOT_LOGIN;
					case 0x07 : return XW_ERROR_USER_LOGIN_INVALID_PASSWD1;
					case 0x08 : return XW_ERROR_USER_LOGIN_INVALID_PASSWD2;
					case 0x09 : return XW_ERROR_USER_LOGIN_EXPIRED_PASSWD2;
					case 0x0A : return XW_ERROR_VERIFYPASSWORD;
					case 0x0B : return XW_ERROR_CERT_PASSWORD_UPDATE_FAIL;
					default: return aCode;
				}
			} else {
				switch(aCode78) {
					case 0x02 : return XW_ERROR_INCORRECT_PARAM;
					case 0x03 : return XW_ERROR_NOT_SUPPORTED_MEDIA;
					case 0x04 : return XW_ERROR_DIFFRENT_PASSWORD;
					case 0x05 : return XW_ERROR_INCORRECT_PASSWORD;
					case 0x06 : return XW_ERROR_INCORRECT_PASSWORD_KMCERT;
					case 0x07 : return XW_ERROR_INPUT_LENGTH;
					case 0x08 : return XW_ERROR_INPUT_LENGTH_10;
					case 0x09 : return XW_ERROR_PASSWORD_IS_WRONG;
					case 0x0A : return XW_ERROR_PASSWORD_MIX_DISIT_ALPHA_PUNCT;
					case 0x0B : return XW_ERROR_PASSWORD_NOT_ALLOW_CHARACTER;
					case 0x0C : return XW_ERROR_CONFIRMED_PASSWORD_DOES_NOT_MATCH;
					case 0x0D : return XW_ERROR_GETCERTIFICATE;
					case 0x0E : return XW_ERROR_GETCERT;
					case 0x0F : return XW_ERROR_USE_CERT_FAIL;
					case 0x10 : return XW_ERROR_GETCERTTREE;
					case 0x11 : return XW_ERROR_SAVECERT;
					case 0x12 : return XW_ERROR_PFX_CERT_IMPORT_FAIL;
					case 0x13 : return XW_ERROR_EXPORTCERT;
					case 0x14 : return XW_ERROR_DELETECERT;
					case 0x15 : return XW_ERROR_VERIFYPASSWORD;
					case 0x16 : return XW_ERROR_CHANGECERTPASSWORD;
					case 0x17 : return XW_ERROR_VERIFYCERT;
					case 0x18 : return XW_ERROR_VERIFYCERTOWNER;
					case 0x19 : return XW_ERROR_CREATE_SIGNDATA;
					case 0x1A : return XW_ERROR_GETPLAINDATAOFSIGNDATA;
					case 0x1B : return XW_ERROR_ENVELOPIDNUM;
					case 0x1C : return XW_ERROR_ENVELOP_FAIL;
					case 0x1D : return XW_ERROR_DEENVELOP_FAIL;
					case 0x1E : return XW_ERROR_REQUESTCERT;
					case 0x1F : return XW_ERROR_RENEWCERT;
					case 0x20 : return XW_ERROR_RECOVERCERT;
					case 0x21 : return XW_ERROR_REVOKECERT;
					case 0x22 : return XW_ERROR_HASHDATA;
					case 0x23 : return XW_ERROR_ENCRYPT_PRIKEY;
					case 0x24 : return XW_ERROR_DECRYPT_PRIKEY;
					case 0x25 : return XW_ERROR_PKCS8_NO_VID;
					case 0x26 : return XW_ERROR_PKCS8_NO_RANDOM;
					case 0x27 : return XW_ERROR_SIGN_DUPLICATE_CERT;
					case 0x28 : return XW_ERROR_SAVE_CERT_ALREADY_EXIST;
					case 0x29 : return XW_ERROR_CERT_EXPIRED;
					default: return aCode;
				}
			}
		} else {
			return aCode;
		}
	}
	
	// AnySignForPC
	__SANDBOX.convertTable = new Array();

	function gCheckTime ()
	{
		if (gStartTime == 0)
		{
			clearInterval (gTimeIntervalFunc);
			return;
		}
		
		var existDialog = document.getElementById("xwup_xvvcursor_disabled");
		if (existDialog == null)
		{
			clearInterval (gTimeIntervalFunc);
			return;
		}

		var currentTime = new Date().getTime();
		if ((currentTime - gStartTime) > 2000)
		{
			clearInterval (gTimeIntervalFunc);
			
			var aGuideModule = __SANDBOX.loadModule("guidewindow");
			gGuideDialog = aGuideModule({
							type: "login",
							args: "",
							onconfirm: "",
							oncancel: function () {gGuideDialog.dispose();}
			});

			gGuideDialog.show();
			gShowGuideDialog = true;
			
			if (gStartTime == 0)
				setTimeout(gCloseGuideDialog, 1000);
		}
	}
	
	function gCloseGuideDialog ()
	{
		gGuideDialog.dispose();
		gGuideDialog = null;
		gShowGuideDialog = false;
	}
	
	function gStartGuideDialog ()
	{
		var element = document.getElementById("xwup_title_guidewindow");
		if (element == null) {
			gStartTime = new Date().getTime();
			gTimeIntervalFunc = setInterval (gCheckTime, 50);
		}
	}
	
	function gEndGuideDialog ()
	{
		gStartTime = 0;
		clearInterval (gTimeIntervalFunc);
		
		if (gGuideDialog) {
			if (gShowGuideDialog) {
				gCloseGuideDialog ();
			}
		}
	}

	function __isCheckFunction (aFunctionName)
	{
		return __SANDBOX.upInterface().checkFunction (aFunctionName);		
	}

	function __addDialogOffset () {
		return __SANDBOX.dialogOffset += 10;
	}

	function __removeDialogOffset () {
		return __SANDBOX.dialogOffset -= 10;
	}

	function __refreshCertLocationSet (aStorage) {
		var aCertLocationArray = aStorage.split(","),
			i;

		__SANDBOX.certLocationSet = {};
		for (i= 0; i < aCertLocationArray.length; i++) {
			__SANDBOX.certLocationSet[aCertLocationArray[i].toLowerCase()] = true;
		}
	}
	
	if (aStorage) {
		__SANDBOX.refreshCertLocationSet (aStorage);
	}

	if(navigator.platform.indexOf("Win") != 0)
		__SANDBOX.localPathSeperator = "/";

	if(__SANDBOX.isIE() && typeof(document.documentMode) == "undefined")
	{
		document.documentMode = __SANDBOX.isIE();
	}

	upObject = new AnySignForPCInterface(__SANDBOX);

	var loadModule = __loadModule;

	function __loadModule (moduleName)
	{
		var req;
		if (window.ActiveXObject) {
			try {
				req = new ActiveXObject("MSXML2.XMLHTTP.3.0");
			}catch(e) {
				try {
					req = new ActiveXObject("Microsoft.XMLHTTP");
				}catch(e){}
			}
		}
		else if (window.XMLHttpRequest) {
			req = new window.XMLHttpRequest;
		}

		var d = new Date();
		var year = d.getFullYear().toString();
		var month = (d.getMonth()+1).toString();
		var day = d.getDate().toString();
		var hour = d.getHours().toString();
		var minutes = Math.floor(d.getMinutes()/10) * 10

		var path = AnySign.mBasePath + "/module/" + moduleName + ".js?version=" + year + month + day + hour + minutes;

		req.open ('GET', path, false);
		req.send (null);

		eval (__SANDBOX.getSafeResponse(req.responseText));
		var moduleConstructor = eval(__SANDBOX.getSafeResponse("__" + moduleName));

		return moduleConstructor (__SANDBOX);
	}

	function __isFailed (aResult, aErrCallback)
	{
		if ( (typeof(aResult) == "string" && aResult === "") || (typeof(aResult) == "number" && aResult !== 0 ))
		{
			var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();

			if (aErrorObject.code != "0")
			{
				if (aErrorObject.code == XW_ERROR_VERIFY_INTEGRITY) { // integrity fail
					alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
				} else if (aErrCallback) {
					aErrCallback (aErrorObject);
				}
				return true;
			}

			else
			{
				//Something is wrong but what can we do?
				return true;
			}
		}

		return false;
	}

	function __setButton(aElements, aAttributeType, aValue, aIsWin){
		// WIN32, WIN64
		if(aIsWin){
			if(navigator.platform == "Win32" || navigator.platform == "Win64"){
				if(aAttributeType == "checked")
					aValue = true;
				else
					aValue = false;
			}
		}

		switch(aAttributeType){
			case "checked":
				for(var i = 0; i < aElements.length; i++){
					if(aValue)
						aElements[i].checked = true;
					else
						aElements[i].checked = false;
				}
				break;
			case "disabled":
				for(var i = 0; i < aElements.length; i++){
					//var aImage = aElements[i].getElementsByTagName("span")[0];
					var aText = aElements[i].getElementsByTagName("span")[1];
					if (aText == undefined) aText = aElements[i];
					if(aValue) {
						aElements[i].disabled = true;
						if(aText) aText.style.color = "#bbb";
					}
					else {
						aElements[i].disabled = false;
						if(aText) aText.style.color = "black";
					}
				}
				break;
		}
	}

	function __setLocationEnable(aLocations, aElements, aIsWin32Only, aDisableLocation) {
		var aDisable = false,
			i;

		if(aIsWin32Only) {
			if(navigator.platform == "Win32")
				aDisable = false;
			else
				aDisable = true;
		}

		if (aDisable == false) {
			aDisable = true;
			for (i=0; i < aLocations.length; i++) {
				if (__SANDBOX.certLocationSet[aLocations[i]]) {
					aDisable = false;
					break;
				}
			}
		}

		if (aDisableLocation && aIsWin32Only != true) {
			aDisable = false;
			if (navigator.platform != "Win32")
				__SANDBOX.certLocationSet[aDisableLocation] = false;
		}

		for (i=0; i < aElements.length; i++) {
			aElements[i].disabled = aDisable;
		}
	}
	
	function __inputKeyHandler (aName, aOriInputObj, aIndex, aX, aY, aKeyType, aMaxSize, aNewWidth, aInputType) {
		var aOriInput = aOriInputObj;
		var orgbk = '#FFFFFF';

		//transkey var
		var aTransKeyInputFlag = false;
		var aTransKeyID;
		var aTransKey;
		var aTransKeyInputID;
		var aTransKeyCheckboxID;
		var aTransKeyCheckbox;
		var aTransKeyPath = AnySign.mTransKeyPath;
		var aTransKeyEnable = AnySign.mTransKeyEnable;
		var aIncaNOSv10KeypadImgPath = AnySign.mIncaNOSv10KeypadImgPath;
		var aEzKeyTecInputData = "";
		
		// touchenkey var
		var aTouchEnKeyObj = document.getElementById ("TouchEnKey");
		var aTouchEnKeyEnable = AnySign.mTouchEnKeyEnable != false && aTouchEnKeyObj !=null && typeof(aTouchEnKeyObj) != "undefined";
		
		var aTouchEnKeyName;
		var aTouchEnKeyInputName;

		//transkey references
		var _TransKeyName,
			_GenerateSessionKeyRef,
			_KeyTypeRef,
			_GenKeyRef,
			_TransKeyPage;
		
		//openkeyboard var
		/*
		 * file   : openkeyboard_ac.js
		 * object : var openkeyboard = null;
		 * set    : var ok_windowIsOnload = false;
		 * set    : this.url = "";
		 * hidden field name prefix  : _E2E_OK_
		 * checkbox child element tag: <SPAN>
		 */
		var aOpenkeyboardEnable = aTransKeyEnable != true && AnySign.mOpenkeyboardEnable != false && typeof(OpenKeyboard) != "undefined";
		var aKeyTypeRef;
		var aOriInputParent;
		var aOpenkeyboardCheckbox;
		var aOpenkeyboardElement;

		if (navigator.platform.indexOf("Win") != 0)
			aOpenkeyboardEnable = false;
		
		// K-Defense var
		var aKDefenseEnable = aTouchEnKeyEnable != true && AnySign.mKDefenseEnable != false;

		// Inca VKeypad var
		var aVKeypadEnable = aTransKeyEnable != true && AnySign.mVKeypadEnable != false;

		// XecureKeyPad var
		var aXecureKeyPadEnable;
		var aXKModule = null;
		var aXKName = "xk_dialog_" + aOriInput.name + "_img";
		var aXKType;

		aXecureKeyPadEnable = aTransKeyEnable != true && aOpenkeyboardEnable != true && AnySign.mXecureKeyPadEnable != false;
			
		// XecureKeyPad HTML5 var (Lite or XFS client sign)
		var aXecureKeyPadHTML5Enable;
		var aXKHTML5Module = null;
		var aXKHTML5Name = "xk_dialog_" + aOriInput.name;
		
		aXecureKeyPadHTML5Enable = AnySign.mXecureKeyPadHTML5Enable;
		
		// XecureKeyPad E2E var (XFS server sign)
		var aXecureKeyPadE2EEnable = AnySign.mXecureKeyPadE2EEnable;

		// nProtect KeyCrypt_HTML5 var
		var aKeyCryptHTML5Enable = aTouchEnKeyEnable != true && aKDefenseEnable != true && aKOSKeyEnable != true && AnySign.mKeyCryptHTML5Enable != false;
		if (__SANDBOX.isIE () < 7 || AnySign.mPlatform.aName == "linux" || AnySign.mPlatform.aName == "mac universal")
			aKeyCryptHTML5Enable = false;

		// ASTx var
		var aASTxEnable = aTouchEnKeyEnable != true && aKDefenseEnable != true && aKeyCryptHTML5Enable != true && aKOSKeyEnable != true && AnySign.mASTxEnable != false;
		var aASTx_windowid;
		var aASTx_formid;
		var aASTx_inputid;

		if (AnySign.mPlatform.aName == "linux" || AnySign.mPlatform.aName == "mac universal") {
			aASTxEnable = false;
		}
		
		// TouchEn nxKey
		var aTouchEnnxKeyEnable = aTouchEnKeyEnable != true && aKDefenseEnable != true && aKeyCryptHTML5Enable != true && aASTxEnable != true && aKOSKeyEnable != true && AnySign.mTouchEnnxKeyEnable != false;
		if (AnySign.mPlatform.aName == "linux" || (AnySign.mPlatform.aName == "mac universal" && (AnySign.mTouchEnnxKeyMacEnable == false))) {
			aTouchEnnxKeyEnable = false;
		}
		// KINGS key
		var aKOSKeyEnable = aTouchEnKeyEnable != true && aKDefenseEnable != true && aKeyCryptHTML5Enable != true && aASTxEnable != true && aTouchEnnxKeyEnable != true && AnySign.mKOSKeyEnable != false;
		
		// Inca NOSv10
		var aIncaNOSv10Enable = AnySign.mIncaNOSv10Enable;
		var aIncaNOSv10KeypadEnable = AnySign.mIncaNOSv10KeypadEnable;

		//EzKeyTec
		var aEzKeyTecEnable = AnySign.mEzKeyTecEnable;
		
		// reset
		if (aInputType == "envelope")
		{
			aTransKeyEnable = false;
			aTouchEnKeyEnable = false;
			aOpenkeyboardEnable = false;
			aKDefenseEnable = false;
			aVKeypadEnable = false;
			aXecureKeyPadEnable = false;
			aKeyCryptHTML5Enable = false;
			aASTxEnable = false;
			aTouchEnnxKeyEnable = false;
			aKOSKeyEnable = false;
			aIncaNOSv10Enable = false;
			aXecureKeyPadHTML5Enable = false; // lite
			aIncaNOSv10KeypadEnable = false;
			aEzKeyTecEnable = false;
			aXecureKeyPadE2EEnable = false; // e2e
		} else if (aInputType == "lite" || aInputType == "e2e")
		{
			//aTransKeyEnable = false;
			aTouchEnKeyEnable = false;
			aOpenkeyboardEnable = false;
			aKDefenseEnable = false;
			aVKeypadEnable = false;
			aXecureKeyPadEnable = false;
			aKeyCryptHTML5Enable = false;
			aASTxEnable = false;
			//aTouchEnnxKeyEnable = false;
			aKOSKeyEnable = false;
			//aIncaNOSv10Enable = false;
			//aIncaNOSv10KeypadEnable = false;
			aEzKeyTecEnable = false;
			
			if (aInputType == "lite")
				aXecureKeyPadE2EEnable = false;
			else if (aInputType == "e2e")
				aXecureKeyPadHTML5Enable = false;
		} else
		{ // 4pc
			aXecureKeyPadHTML5Enable = false;
			aXecureKeyPadE2EEnable = false;
		}
		
		//2013.03.22 _GenerateSessionKeyRef ë¼ì¨ìíì´ ê¹ì§ì ê°ì´ë :  transkeyServlet ì¬ì©ë² ìì ì¼ë¡ ëª¨ë ì£¼ì ì²ë¦¬
		//init var about TransKey	
		
		if (aTransKeyEnable)
		{
			if (typeof xc_TransKey != "undefined") {
				AnySign.mTransKeyIsXC = true;
				//old version
				_TransKeyName = "xc_TransKey";
				_GenerateSessionKeyRef = xc_generateSessionKey;
				_KeyTypeRef = aKeyType.substr(0, aKeyType.indexOf("_crt"));
				_GenKeyRef = tk_getrnd_hex;
				_TransKeyPage = aTransKeyPath + "/index.jsp";

				aOriInput.style.width = aNewWidth +"px";
				aTransKeyID = aName + "_tk" + aIndex;
				aTransKeyInputID = aName + "_tk" + aIndex + "_input";

				eval(__SANDBOX.getSafeResponse(aTransKeyID + "= null"));
				_GenerateSessionKeyRef (_TransKeyPage);
				eval(__SANDBOX.getSafeResponse(aTransKeyID +" = new " + _TransKeyName  + " (aTransKeyID, aX, aY, _TransKeyPage, _KeyTypeRef, aMaxSize, 'password');"));

				eval(__SANDBOX.getSafeResponse("aTransKey = " + aTransKeyID));
				aOriInput = document.getElementById(aTransKeyInputID);
			} else {
				AnySign.mTransKeyIsXC = false;
				_TransKeyName = "TransKey";
				_GenerateSessionKeyRef = generateSessionKeyForCRT;
				_KeyTypeRef = aKeyType;
				_GenKeyRef = new GenKey().GenerateKey;
				_TransKeyPage = aTransKeyPath;

				if (!AnySign.mTransKeyCheckBoxEnable)
				{
					aOriInput.style.width = aNewWidth +"px";					
					//20181114 yhkim
					//ë¼ì¨ìíì´ì¸¡ìì ê±´ê°ë³´íê´ë¦¬ê³µë¨(ì¥ê¸°ìì) ì ì© ì ê°ìí¤í¨ë ë²ì  ë³ê²½ì¼ë¡ ìëì ê°ì´ ì²ë¦¬í¨				
					if(aInputType == "lite" && (aName == "certselect" || aName == "certselectwide"))
					{
						aTransKeyID = aName + "_lite_tk" + aIndex;
						aTransKeyInputID = "xwup_" + aName + "_lite_input" + aIndex;
					}
					else
					{
						aTransKeyID = aName + "_tk" + aIndex;
						aTransKeyInputID = "xwup_" + aName + "_tek_input" + aIndex;
					}
					eval(aTransKeyID + "= null");


					//2013.02.18, wbr : ë¼ì¨ìíì´ ì´ë¨ì´ëë¦¬ ê°ì´ëë¡ ì¸ìí¤ ìì± ìì ì í¸ëì¤í¤ ê°ì²´ ìì± ì ì¼ë¡ ë³ê²½
					_GenerateSessionKeyRef (_TransKeyPage);
					eval(aTransKeyID +" = new " + _TransKeyName  + " (aTransKeyID, aX, aY, _TransKeyPage, _KeyTypeRef, aMaxSize, 'password');");

					eval("aTransKey = " + aTransKeyID);
					aOriInput = document.getElementById(aTransKeyInputID);
					
					if(AnySign.mTransKeyXY != "")
					{
						aOriInput.setAttribute ("data-tk-kbdxy", AnySign.mTransKeyXY); 
					}
					
					if(aInputType == "lite")
					{						
						transkey[aTransKeyInputID].button.src=transkey_url+'/images/on.png';
						transkey[aTransKeyInputID].useTranskey=true;
						transkey[aTransKeyInputID].inputObj.readOnly=true;
						transkey[aTransKeyInputID].checkValue.value="transkey";
						transkey[aTransKeyInputID].buttonListener = function(btnObj, inputId){return;};
					}
					else if(aTouchEnnxKeyEnable == false)
					{
						transkey[aTransKeyInputID].button.src=transkey_url+'/images/on.png';
						transkey[aTransKeyInputID].useTranskey=true;
						transkey[aTransKeyInputID].inputObj.readOnly=true;
						transkey[aTransKeyInputID].checkValue.value="transkey";
						transkey[aTransKeyInputID].buttonListener = function(btnObj, inputId){return;};
					}
				}
				//20190417 ë¼ì¨ìíì´ ì´ì í¸ëë¦¬ì íìíì¬ mTransKeyCheckBoxEnableë ì§ììíê¸°ë¡ í¨
				/*else
				{
					aTransKeyID = aName + "_tk" + aIndex;
					aTransKeyInputID = "xwup_" + aName + "_tek_input" + aIndex;
					aTransKeyCheckboxID = aName + "_tk" + aIndex + "_button"; 

					aX -= 78;

					//2013.02.18, wbr : ë¼ì¨ìíì´ ì´ë¨ì´ëë¦¬ ê°ì´ëë¡ ì¸ìí¤ ìì± ìì ì í¸ëì¤í¤ ê°ì²´ ìì± ì ì¼ë¡ ë³ê²½
					//_GenerateSessionKeyRef (_TransKeyPage);
					eval(aTransKeyID +" = new " + _TransKeyName  + " (aTransKeyID, aX, aY, _TransKeyPage, _KeyTypeRef, aMaxSize, 'password', '" + aTransKeyInputID + "');");
					eval (aTransKeyID + ".useTransKey = false");
					eval("aTransKey = " + aTransKeyID);
					aTransKeyCheckbox = document.getElementById(aTransKeyCheckboxID);
				}*/
			}
		}

		//init vars about TouchEnKey
		if (aTouchEnKeyEnable) {
			aTouchEnKeyName = aOriInput.form.name;
			if (!aTouchEnKeyName) {
				alert("XWUP error [" + aTouchEnKeyName.outerHTML + "] doesn't have name");
			}
			aTouchEnKeyInputName = aName + "_tek_input" + aIndex;
			aOriInput.setAttribute ("enc", "on");
			aOriInput.setAttribute ("kbd", "off"); 
		}
		
		//init vars about KeyCrypt_HTML5
		if (aKeyCryptHTML5Enable) {
			var aKeyCryptHTML5div;
			var aOriInputParent;
			var form = aOriInput.form;
			var name = aOriInput.name;

			function CreateIe7HiddenInput (form, name) {
				var element = document.createElement ("input");
				element.setAttribute ("type", "hidden");
				element.setAttribute ("name", name+"__E2E__");
				form.appendChild (element);
			}

			aKeyCryptHTML5div = document.createElement("div");
			aKeyCryptHTML5div.className = "nppfs-elements";
			aOriInputParent = aOriInput.form;
			aOriInputParent.appendChild(aKeyCryptHTML5div);

			if (__SANDBOX.isIE () <= 7) {
				CreateIe7HiddenInput (aOriInput.form, name);
				aOriInputParent = aOriInput.form;
			}

			aOriInput.setAttribute ("enc", "re");

			// Regist Dynamic Field
			npPfsCtrl.RegistDynamicField(form, name);
		}

		//init vars about VKeyPad
		if (aVKeypadEnable) {
			aOriInput.readOnly = true;
			
			// keypad create location div
			aVkeypadDiv = document.createElement("div");
			aVkeypadDiv.id = "vKeypad" + aOriInput.name;
			aOriInput.form.appendChild(aVkeypadDiv);
			
			// keypad type (PASSWORD, ALPHANUM)
			if(aKeyType.indexOf("number") == 0)	{
				npKpdType = npKpd.define.types.PASSWORD;
			} else {
				npKpdType = npKpd.define.types.ALPHANUMCERT;
			}
		
			// keypad create
			strObjParam = "vKeypadOK(" + npKpdType + ",'" + aOriInput.form.name + "','" + aOriInput.name + "');";
			var objOption = {type:npKpdType, inputs:aOriInput.name, form:aOriInput.form.name, display:"hide", imagepath:AnySign.mBasePath + "/../inca/keypad/jsp", checkfunc:strObjParam};
			npKpd.create(aVkeypadDiv.id, objOption);
			
			if (aOriInput.addEventListener) {
				aOriInput.addEventListener( "click", function(e){

				}, false);
			} else if (aOriInput.attachEvent) {
				aOriInput.attachEvent( "onclick", function(e){

				});
			}
		}
		
		// Init Inca NOSv10
		var aParentForm;
		//aParentForm = aOriInput.form;
		/*
		aParentForm = aOriInput;
		while (aParentForm) {
			if (aParentForm.tagName && (aParentForm.tagName.toUpperCase() == "FORM")) {
				break;
			}
			aParentForm = aParentForm.parentNode;
		}
		*/
		if (aIncaNOSv10KeypadEnable) {
			aParentForm = aOriInput.form;
			aOriInput.setAttribute ("npkencrypt", "re");
			if(aKeyType.indexOf("number") == 0)	{
				aOriInput.setAttribute ("data-keypad-type", "num");
			} else {
				aOriInput.setAttribute ("data-keypad-type", "alpha");
			}
			aOriInput.setAttribute ("data-keypad-useyn-type", "toggle");
			aOriInput.setAttribute ("data-keypad-useyn-input", aOriInput.name + "_useyn_toggle");
			
			var aIncaIcon = document.createElement("IMG");
			aIncaIcon.id = aOriInput.name + "_useyn_toggle";
			aIncaIcon.src= aIncaNOSv10KeypadImgPath + "icon_mouse_on.gif";
			
			aOriInputParent = aOriInput.parentNode;
			aOriInputParent.appendChild(aIncaIcon);
			
			npPfsCtrl.RegistDynamicField(aParentForm, aOriInput.name);
		}
		
		if (aIncaNOSv10Enable) {
			if(aInputType == "lite")
			{
				///í¤í¨ë ì¤ë³µ append ë¡ì§ Start
				var npLength = npVCtrl.keypadObject.length;

				for (var i=0; i<npLength; i++){		
				   if("nppfs-keypad-certselect_teck_input1" == npVCtrl.keypadObject[i]._uuid){
			
					  npVCtrl.keypadObject.splice(i,1);		
				   }		
				}
				///í¤í¨ë ì¤ë³µê´ë ¥ append ë¡ì§ End
				
				aParentForm = aOriInput.form;
				aOriInput.setAttribute ("npkencrypt", "on");
				if(aKeyType.indexOf("number") == 0)	{
					aOriInput.setAttribute ("data-keypad-type", "num");
				} else {
					aOriInput.setAttribute ("data-keypad-type", "alpha");
				}
				
				//npPfsCtrl.RegistDynamicField(aParentForm, aOriInput.name);
				npPfsCtrl.RescanField();
			}
			else
			{
				aParentForm = aOriInput.form;
				aOriInput.setAttribute ("npkencrypt", "re");
				if(aKeyType.indexOf("number") == 0)	{
					aOriInput.setAttribute ("data-keypad-type", "num");
				} else {
					aOriInput.setAttribute ("data-keypad-type", "alpha");
				}
				
				npPfsCtrl.RegistDynamicField(aParentForm, aOriInput.name);
			}
		}
		
		//init vars about Openkeyboard
		if (aOpenkeyboardEnable) {	
			ok_windowIsOnload  = true;
			openkeyboard = new OpenKeyboard();

			if(aKeyType.indexOf("number") == 0)	{
				aKeyTypeRef = "numpad";
			} else {
				aKeyTypeRef = "qwerty";
			}
			
			aOriInput.style.width = aNewWidth +"px";
			aOriInput.setAttribute ("enc", "on");
			aOriInput.setAttribute ("kbd", aKeyTypeRef);
			//aOriInput.setAttribute ("maxlength", "56");
						
			aOpenkeyboardCheckbox = document.createElement("SPAN");
			aOpenkeyboardCheckbox.id = "openkeyboard_" + aOriInput.name;
			aOpenkeyboardCheckbox.style.verticalAlign = "top";
			aOpenkeyboardCheckbox.style.marginTop = "3px";
			
			aOriInputParent = aOriInput.parentNode;
			aOriInputParent.appendChild(aOpenkeyboardCheckbox);
			
			aOpenkeyboardElement = document.getElementById("_E2E_OK_" + aOriInput.name);
			if (aOpenkeyboardElement != undefined)
				aOpenkeyboardElement.parentNode.removeChild(aOpenkeyboardElement);

			openkeyboard.init();
			openkeyboard.getSessionId();

			aOpenkeyboardElement = document.getElementById("_E2E_OK_" + aOriInput.name);
			if (aOpenkeyboardElement == undefined) {
				aOpenkeyboardEnable = false;
			} else {
				if (aOpenkeyboardElement.value.length > 0) {
					aOpenkeyboardElement.value = "";
				}
			}
			
			// TouchEnKey ë¯¸ì§ì ë¸ë¼ì°ì  ì²ë¦¬
			//if (navigator.platform.indexOf("Win") != 0 || (aBrowserName == "opera" && aBrowserVersion >= 12)) {
			if (!aTouchEnKeyEnable && AnySign.mTouchEnKeyEnable) {
				aOriInput.readOnly = true;
				if (aOriInput.addEventListener) {
					aOriInput.addEventListener( "click", function(e){
						openkeyboard.start(aOriInput);
					}, false);
				} else if (aOriInput.attachEvent) {
					aOriInput.attachEvent( "onclick", function(e){
						openkeyboard.start(aOriInput);
					});
				}
			}
			
			if (__SANDBOX.isIE() > 8) {
				// IE9,10 ESC key exception
				//openkeyboard.start(aOriInput);
			}
		}
		
		// init K-Defense
		/*
		if (aKDefenseEnable) {
			if (document.kdefense == null || typeof(document.kdefense) == "undefined" || document.kdefense.object == null) {
				if(navigator.mimeTypes["application/lssl-plugin"] == null) {
					aKDefenseEnable = false;
				} else {
					aKDefenseEnable = true;
				}
			} else {
				aKDefenseEnable = true;
			}
			
			if (aKDefenseEnable == true) {
				kdfCertEncInit();
			}
		}
		*/

		// init ASTx
		if (aASTxEnable) {       
			//ASTx 1.2
			/*
			aOriInput.setAttribute ("e2esdk", "true");
			astxsdk_set_option("e2e_sdk_customcode", "1967");
			astxsdk_init();

			aASTx_windowid = astxsdk_get_e2e_windowid();
			aASTx_formid = astxsdk_get_e2e_formid(aOriInput);
			aASTx_inputid = astxsdk_get_e2e_inputid(aOriInput);
			*/

			// ASTx 1.3
			aOriInput.setAttribute ("e2e_type", "11");
			$ASTX2.initNonE2E(1967); 

			aASTx_windowid = $ASTX2.getE2EPageID();
			aASTx_formid = $ASTX2.getE2EPageID();

			console.log("AnySign_input_name:" + aOriInput.name);
			console.log("astxsdk_get_e2e_windowid:" + aASTx_windowid);
			console.log("astxsdk_get_e2e_formid:" + aASTx_formid);
			console.log("astxsdk_get_e2e_inputid:" + aASTx_inputid);
		}

		//init vars about XecureKeyPad 
		/*
		 * XK_MakeRandomKeypadID : í¤í¨ë ì¸ìID ìì±
		 * XK_MakeIndex : í¤í¨ë ìì±
		 */
		if (aXecureKeyPadEnable) {
			aXKModule = new XKModule();

			var makeIndexCallback;
			var aXKModuleSpan = document.createElement("SPAN");
			aXKModuleSpan.id = "xk_dialog_" + aOriInput.name + "_span";
			//aXKModuleSpan.style.verticalAlign = "top";
			//aXKModuleSpan.style.marginTop = "3px";
			
			var aPositionInfo = {
					option : 1,
					left : 0,
					top : null 
				};
				
			if (AnySign.mDivInsertOption == 1)
				aPositionInfo.left = 170;
			
			if(aKeyType.indexOf("number") == 0)	{
				aXKType = "number";
			} else {
				aXKType = "qwerty";
			}
			
			aOriInput.parentNode.appendChild(aXKModuleSpan);

			var CB_XK_MakeIndex = function (result)
			{
				makeIndexCallback (result.split(","));
			}

			var CB_XK_MakeRandomKeypadID = function (result)
			{
				if (aXKModule.sessionID == null)
					aXKModule.sessionID = result;

				aXKModule.setTimer(30);

				__SANDBOX.upInterface().XK_MakeIndex(aXKModule.sessionID, aXKType, CB_XK_MakeIndex);
			}

			var aMakeIndexFunction = function(callback)
			{
				makeIndexCallback = callback;

				if(aXKModule.sessionID == null) 
					__SANDBOX.upInterface().XK_MakeRandomKeypadID (CB_XK_MakeRandomKeypadID);
				else {
					CB_XK_MakeRandomKeypadID (null);
				}
			}

			var aCustomInitializeFunction = function()
			{
				if(document.MKD25 != null || typeof(document.MKD25) != "undefined")
					MKD25.SkipVerify(1);
			}
			var aCustomFinalizeFunction = function()
			{
				if(document.MKD25 != null || typeof(document.MKD25) != "undefined")
					MKD25.SkipVerify(0);
			}

			aXKModule.makeIndex = aMakeIndexFunction;
			aXKModule.setCustomFunction (aCustomInitializeFunction, aCustomFinalizeFunction);
			aXKModule.setAttachAnySignPC();

			aXKModule.initialize(aXKName, aXKModuleSpan, aOriInput, aNewWidth, aXKType, 'decrypted', aPositionInfo, 0);
		}
		
		//init vars about XecureKeyPad HTML5 (lite), E2E (XFS)
		if (aXecureKeyPadHTML5Enable || aXecureKeyPadE2EEnable) {
			var aXKModuleSpan = document.createElement("SPAN");
			aXKModuleSpan.id = "xk_dialog_" + aOriInput.name + "_span";

			var aPositionInfo = {
				option : 1,
				left : -18, 
				top : null
			};
			
			if (AnySign.mDivInsertOption == 1)
				aPositionInfo.left = 20;
			
			aOriInput.parentNode.appendChild(aXKModuleSpan);

			if (aXecureKeyPadHTML5Enable) {
				aXKHTML5Module = new XKeypadHTML5();
				aXKType = "qwerty";
			} else {
				aXKHTML5Module = new XKeypadE2E();
				if(aKeyType.indexOf("number") == 0)	{
					aXKType = "number";
				} else {
					aXKType = "qwerty";
				}
			}
			
			aXKHTML5Module.initVirtualKeypadWithPosition(aXKHTML5Name, aXKModuleSpan, aOriInput, aNewWidth, aXKType, aPositionInfo, 0);
			if (aOriInput.addEventListener) {
				aOriInput.addEventListener( "click", function(e){
					aXKHTML5Module.createKeypad();
				}, false);
			} else if (aOriInput.attachEvent) {
				aOriInput.attachEvent( "onclick", function(e){
					aXKHTML5Module.createKeypad();
				});
			}
		}
		
		//init TouchEn nxKey
		if (aTouchEnnxKeyEnable) {
			aTouchEnKeyName = aOriInput.form.name;
			if (!aTouchEnKeyName) {
				alert("XWUP error [" + aTouchEnKeyName.outerHTML + "] doesn't have name");
			}
			
			if(aInputType == "lite" && (aName == "certselect" || aName == "certselectwide"))
			{
				aTouchEnKeyInputName = aName + "_lite_input" + aIndex;
			}
			else
			{
				aTouchEnKeyInputName = aName + "_tek_input" + aIndex;
			}
			aOriInput.setAttribute ("enc", "on");
		}
		
		//init Kings Key
		if (aKOSKeyEnable) {
			var pubKey = "MIGJAoGBALp7h5CCh1QXUisoA6TFDZUH2Ykeqn5vsYF6Y/ECPbr/8aR0NImwMT9R80MfKn8OeErXmQBfFrB9YTivKLgdQwouIT11FdCHbwGCuyrZ+0dEiUeFvPHCxah5ZMWmbABSOJtfJYq+OyW3/Z1/PgVW9pp5Zo858aC099fMJ5VPa9hDAgMBAAE=";
			
			KOS.registerElementWithKey(aOriInput, 
					                   'none', 
					                   'data-kdf-e2e-pubkey',
					                   pubKey); 
				
		}
		
		if(aEzKeyTecEnable) {
			EZKInput.InitInput(aOriInput.id,doEnterEzKeyTec);
			
			function doEnterEzKeyTec(objInput, sEnterText)
			{
				aEzKeyTecInputData = sEnterText;
			}
		}

		return {
			onComplete : function (completeHandle) {
				if (aTransKeyEnable) {
					var aOkFunction = function() {
						aTransKeyInputFlag = (_KeyTypeRef.indexOf("number") == 0 || _KeyTypeRef.indexOf("qwerty") == 0); //number use close func only
						completeHandle.ok();
					}
					var aCloseFunction = function() {
						aTransKeyInputFlag = (_KeyTypeRef.indexOf("number") == 0 || _KeyTypeRef.indexOf("qwerty") == 0); //number use close func only
						completeHandle.close();
					}
					aTransKey.onCompleteInput = aOkFunction;
					aTransKey.onCompleteClose = aCloseFunction;
				} else if (aOpenkeyboardEnable) {
					var aOkFunction = function() {
						openkeyboard.stop();
						completeHandle.ok();
					}
					var aCloseFunction = function() {
						openkeyboard.stop();
						completeHandle.close();
					}
					openkeyboard.confirm = aOkFunction;
					openkeyboard.cancel = aCloseFunction;
				} else if (aVKeypadEnable) {
					var aOkFunction = function() {
						completeHandle.ok();
					}
					var aCloseFunction = function() {
						completeHandle.close();
					}
				} else if (aXecureKeyPadEnable) {
					var aOkFunction = function() {
						aXKModule.stop();
						var xkLayer = document.getElementById(aXKName);
						if (xkLayer != null)
							xkLayer.parentNode.removeChild(xkLayer);

						aOriInput.readOnly = false;

						completeHandle.ok();
					}
					var aRefreshCallback = function (aResult) {
						aXKModule.genkeypad(aResult);
					}
					var aRefreshFunction = function () {
						aXKModule.clear();
						aXKModule.makeIndex(aRefreshCallback);
					}
					aXKModule.enter = aOkFunction;
					aXKModule.refresh = aRefreshFunction;
				} else if (aXecureKeyPadHTML5Enable || aXecureKeyPadE2EEnable) {
					var aOkFunction = function (aResult) {
						aOriInput.readOnly = false;
						if (aResult == "XK_ENTER") // ìë ¥ìë£: XK_ENTER, ë«ê¸°: XK_CLOSE
							completeHandle.ok();
					}
					aXKHTML5Module.setCloseCallback(aOkFunction);
				}
			},

			generateSessionID : function(aOption, callback) {
				var aResult = "";
				var aKeyType = "";
				var aSetData = "";
				var aSetPreData = "";
				var aIsPreData = false;


				/*=========================================================================
				 * setSecureInput aSetData callback function
				 =========================================================================*/
				 _CB_setSecureInput_setData = function ()
				 {
					//if (aTouchEnnxKeyEnable) 
					if (aKeyType == XW_SECUREINPUT_TOUCHENNXKEY) {
						TK_GetEncXW (aTouchEnKeyName, aTouchEnKeyInputName, aResult, callback);
					} else {
						callback (aResult);
					}
				 }
				/*=========================================================================
				 * generateRandom callback function
				 =========================================================================*/
				_CB_generateRandom = function (result)
				{
					if (result)
						aResult = result;

					if (aIsPreData == false)
					{
						if (aSetPreData.length > 0) {
							aSetPreData += "$";
						}
						aSetData = aSetPreData + aKeyType + "|" + aResult;
					}
					else
					{
						aSetData = aSetPreData;
					}

					// 4. set property
					__SANDBOX.upInterface().setSecureInput (aSetData, _CB_setSecureInput_setData);
				}
				/*=========================================================================
				 * getSecureInput callback function
				 =========================================================================*/
				_CB_getSecureInput = function (result)
				{
					if (result) {
						aPreSessionArray = result.split("$");
						for (var aIter = 0; aIter < aPreSessionArray.length; aIter++) {
							aPreDataArray = aPreSessionArray[aIter].split("|");
							if (aPreDataArray[0] == String(aKeyType)) {
								aIsPreData = true;
								if (aPreDataArray.length > 1)
									aResult = aPreDataArray[1];
							}
							if (aIter > 0) {
								aSetPreData += "$";
							}
							aSetPreData += aPreSessionArray[aIter];
						}
					}

					return _CB_checkPreData ();
				}
				/*=========================================================================
				 * check PreData function
				 =========================================================================*/
				_CB_checkPreData = function () {
					// 3. generate sessionid
					if (aIsPreData == false) {
						if (aKeyType == XW_SECUREINPUT_TRANSKEY) {
							aResult = _GenKeyRef(10);
						} else if (aKeyType == XW_SECUREINPUT_TOUCHENKEY) {
							__SANDBOX.upInterface().generateRandom(16, 0, _CB_generateRandom);
							return;
						}
						else if (aKeyType == XW_SECUREINPUT_OPENKEYBOARD) {
							var aPort = "";
							if (window.location.port == "") {
								if (window.location.protocol == "https:") aPort = "443";
								else aPort = "80";
							} else {
								aPort = window.location.port;
							}
							aResult = window.location.hostname + "|" +
									  openkeyboard.url +
									  ((openkeyboard.url.charAt(openkeyboard.url.length - 1) == '/') ? "" : "/") +
									  "make.jsp" + "|" +
									  aPort + "|" +
									  openkeyboard.jsessionId;
						} else if (aKeyType == XW_SECUREINPUT_KDEFENSE) {
							aResult = site_noptionEx;
						} else if (aKeyType == XW_SECUREINPUT_XECUREKEYPAD) {
							__SANDBOX.upInterface().generateRandom(16, 0, _CB_generateRandom);
							return;
						} else if (aKeyType == XW_SECUREINPUT_TOUCHENNXKEY) {
							__SANDBOX.upInterface().generateRandom(16, 0, _CB_generateRandom);
							return;
						} else if (aKeyType == XW_SECUREINPUT_KINGSKEY) {
							__SANDBOX.upInterface().generateRandom(16, 0, _CB_generateRandom);
							return;
						}
					}
					else
					{
						aSetData = aSetPreData;
					}

					_CB_generateRandom();
				}
				/*=========================================================================*/

				// 1. check input type
				if (aTransKeyInputFlag && aTransKey.getHiddenData().length > 0) {
					aKeyType = XW_SECUREINPUT_TRANSKEY;
				} else if (aOpenkeyboardEnable && aOpenkeyboardElement.value.length > 0) {
					aKeyType = XW_SECUREINPUT_OPENKEYBOARD;
				} else if (aTouchEnKeyEnable && document[aTouchEnKeyName][aTouchEnKeyInputName].value.length > 0) {
					aKeyType = XW_SECUREINPUT_TOUCHENKEY;
				} else if (aKDefenseEnable && kdfCertGetlenght(aOriInput.form.name + "." + aOriInput.name, aOriInput.type) > 0) {
					aKeyType = XW_SECUREINPUT_KDEFENSE;
				} else if (aVKeypadEnable) {
					aKeyType = XW_SECUREINPUT_VKEYPAD;
				} else if (aIncaNOSv10KeypadEnable && npVCtrl.isKeypadUse(aOriInput.name)) {
					aKeyType = XW_SECUREINPUT_INCAKEYPAD;
				} else if (aXecureKeyPadEnable && aXKModule.get_Vinput().length > 0) {
					aKeyType = XW_SECUREINPUT_XECUREKEYPAD;
				} else if (aXecureKeyPadHTML5Enable && aXKHTML5Module.get_Vinput().length > 0) {
					aKeyType = XW_SECUREINPUT_XECUREKEYPADHTML5;
				} else if (aXecureKeyPadE2EEnable && aXKHTML5Module.get_sessionInfo().input && aXKHTML5Module.get_sessionInfo().input.length > 0) {
					aKeyType = XW_SECUREINPUT_XECUREKEYPADE2E;
				} else if (aKeyCryptHTML5Enable) {
					aKeyType = XW_SECUREINPUT_KEYCRYPT_HTML5;
				} else if (aIncaNOSv10Enable) {
					if(aInputType == "lite")
					{
						aKeyType = XW_SECUREINPUT_INCAKEYPAD;
					}
					else
					{
						aKeyType = XW_SECUREINPUT_KEYCRYPT_HTML5;
					}
					
				} else if (aASTxEnable) {
					aKeyType = XW_SECUREINPUT_ASTX;
				} else if (aTouchEnnxKeyEnable) {
					aKeyType = XW_SECUREINPUT_TOUCHENNXKEY;
				} else if (aKOSKeyEnable) {
					aKeyType = XW_SECUREINPUT_KINGSKEY;
				} else if (aEzKeyTecEnable) {
					aKeyType = XW_SECUREINPUT_EZKEYTEC;
				} else {
					aKeyType = XW_SECUREINPUT_NATIVEINPUT;
				}

				// 2. check option (undefined,0: new or reset, 1:old set, 2:update)
				if (aOption > 0) {
					__SANDBOX.upInterface().getSecureInput (_CB_getSecureInput);
				}
				else
				{
					_CB_setXecureKeyPad = function ()
					{
						_CB_checkPreData ();
					}
					_CB_setSecureInput = function () 
					{
						__SANDBOX.upInterface().setXecureKeyPad ("", _CB_setXecureKeyPad);
					}
					_CB_setTransKey = function ()
					{
						__SANDBOX.upInterface().setSecureInput ("", _CB_setSecureInput);
					}
					__SANDBOX.upInterface().setTransKey ("", _CB_setTransKey);
					
					return aResult;
				}
			},
			getValue : function (aSessionID) {
				var aType = 0;
				var aLen = 0;
				var aResult = "";
				var aKOSSessionKey="";
		
				if (__SANDBOX.CachedCertificateInfo && __SANDBOX.CachedCertificateInfo.password) {
					aType = XW_SECUREINPUT_NATIVEINPUT;
					aResult = __SANDBOX.CachedCertificateInfo.password;
				} else if (aTransKey != null && aTransKey.getHiddenData().length > 0) {
					aType = XW_SECUREINPUT_TRANSKEY;
					aResult = aTransKey.getCipherData (aSessionID);
					aTransKeyInputFlag = false;
				} else if (aOpenkeyboardEnable && aOpenkeyboardElement.value.length > 0) {
					aType = XW_SECUREINPUT_OPENKEYBOARD;
					aResult = aOriInput.name + "|" + aOpenkeyboardElement.value;
				} else if (aVKeypadEnable) {
					aType = XW_SECUREINPUT_VKEYPAD;
					aResult = npKpd.decode( npKpdType, aOriInput.form.name, {inputs:aOriInput.name})
				} else if (aIncaNOSv10KeypadEnable && npVCtrl.isKeypadUse(aOriInput.name)) {
					aType = XW_SECUREINPUT_INCAKEYPAD;
					aResult = npPfsCtrl.GetEncryptResult(aParentForm, aOriInput.name);
				} else if (aTouchEnKeyEnable && document[aTouchEnKeyName][aTouchEnKeyInputName].value.length > 0) {
					aType = XW_SECUREINPUT_TOUCHENKEY;
					aResult = aTouchEnKeyObj.GetEncData(aSessionID, aTouchEnKeyName, aTouchEnKeyInputName);
				} else if (aXecureKeyPadEnable && aXKModule.get_Vinput().length > 0) {
					aType = XW_SECUREINPUT_XECUREKEYPAD;
					aResult = aXKModule.sessionID + "|" + aXKModule.get_input();
					aXKModule.clear ();
				} else if (aXecureKeyPadHTML5Enable && aXKHTML5Module.get_Vinput().length > 0) {
					aType = XW_SECUREINPUT_XECUREKEYPADHTML5;
					return {type: aType, keypad: aXKHTML5Module};
				} else if (aXecureKeyPadE2EEnable && aXKHTML5Module.get_sessionInfo().input && aXKHTML5Module.get_sessionInfo().input.length > 0) {
					aType = XW_SECUREINPUT_XECUREKEYPADE2E;
					var aXKInfo = aXKHTML5Module.get_sessionInfo();
					aResult = aXKInfo.sessionId + "|" + aXKInfo.secToken + "|" + aXKInfo.input;
				} else if (typeof aos_isrunning != "undefined" && aos_isrunning('40')) {
					aType = XW_SECUREINPUT_NATIVEINPUT;
					aResult = aos_get_text2 (aOriInput);
				} else if (aKDefenseEnable && (aLen = kdfCertGetlenght(aOriInput.form.name + "." + aOriInput.name, aOriInput.type)) > 0) {
					aType = XW_SECUREINPUT_KDEFENSE;
					aResult = aLen + "|" + kdfCertGetPwValue (aOriInput.form.name + "." + aOriInput.name, aOriInput.type);
				} else if (aKeyCryptHTML5Enable) {
					aType = XW_SECUREINPUT_KEYCRYPT_HTML5;
					aResult = aOriInput.value.length + "$" + npPfsCtrl.GetReplaceField(aOriInput.form, aOriInput.name) + npPfsCtrl.GetResultField(aOriInput.form, aOriInput.name);
				} else if (aIncaNOSv10Enable) {					
					if(aInputType == "lite")
					{
						aType = XW_SECUREINPUT_INCAKEYPAD;
						aResult = npPfsCtrl.GetEncryptResult(aParentForm, aOriInput.name);
					}
					else
					{
						aType = XW_SECUREINPUT_KEYCRYPT_HTML5;
						aResult = aOriInput.value.length + "$" + npPfsCtrl.GetReplaceField(aParentForm, aOriInput.name) + npPfsCtrl.GetResultField(aParentForm, aOriInput.name);
					}
				} else if (aASTxEnable) {
					aType = XW_SECUREINPUT_ASTX;
					//ASTx 1.2
					//aResult = aASTx_windowid + "$" + aASTx_formid + "$" + aASTx_inputid;

					//ASTx 1.3
					aResult = aASTx_windowid + "$" + aASTx_formid + "$" + $ASTX2.getE2EInputID(aOriInput);
				} else if (aTouchEnnxKeyEnable) {
					aType = XW_SECUREINPUT_TOUCHENNXKEY;
					aResult = aSessionID;
				} else if (aKOSKeyEnable && ( (aKOSSessionKey = KOS.getInputSessionKey(aOriInput)) !=null || (aKOSSessionKey = KOS.getInputSessionKey(aOriInput)) !="" ) ) {
					aType = XW_SECUREINPUT_KINGSKEY;
					aResult = KOS.getInputSessionKey(aOriInput)+ "|" +KOS.getProtectedValue(aOriInput);
					console.log("AnySign_input_name:" + aOriInput.name);
					console.log("KOS_result:"+aResult);
				} else if (aEzKeyTecEnable) {
					aType = XW_SECUREINPUT_EZKEYTEC;
					aResult = aEzKeyTecInputData;
				} else if (!__SANDBOX.allowNormalInput) {
					aType = XW_SECUREINPUT_NATIVEINPUT;
					return "";
				} else	{
					aType = XW_SECUREINPUT_NATIVEINPUT;
					aResult = aOriInput.value;		
				}
				
				if (aResult != null && typeof(aResult) == "string" && aResult.length > 0) {
					return aType + "$" + aResult;
				} else {
					return "";
				}
			},
			clear : function () {
				if (aTransKeyEnable && document.getElementById(aTransKeyInputID)) {
					aTransKey.clear();
					document.getElementById(aTransKeyInputID).value = "";
				} else if (aOpenkeyboardEnable && aOpenkeyboardElement.value.length > 0) {
					aOpenkeyboardElement.value = "";
					aOriInput.value = "";
				} else if (aVKeypadEnable) {
					aOriInput.value = "";
					npKpd.cls(aOriInput.name, aOriInput.form.name);
				} else if (aTouchEnKeyEnable) {
					document[aTouchEnKeyName][aTouchEnKeyInputName].value = "";
				} else if (aASTxEnable) {
					//ASTx 1.2
					//astxsdk_cleartext(aOriInput);

					//ASTx 1.3
					$ASTX2.clearE2EText(aOriInput);
				} else if (aIncaNOSv10KeypadEnable && npVCtrl.isKeypadUse(aOriInput.name)) {
					aOriInput.value = "";
					npVCtrl.resetKeypad(aOriInput.name);
				} else if (aIncaNOSv10Enable) {
					aOriInput.value = "";
				} else if (aEzKeyTecEnable) {
					aOriInput.value = "";
				} else if (aXecureKeyPadEnable) {
					aXKModule.clear();
					aXKModule.close();
				} else if (aXecureKeyPadHTML5Enable || aXecureKeyPadE2EEnable) {
					aXKHTML5Module.clear();
					aXKHTML5Module.close();
				} else {
					setTimeout (function () { aOriInput.value = ""; }, 0); //for AOS
				}
			},
			getElement : function() {
				return aOriInput;
			},
			onEnterKeyPress : function(aTarget) {
				var aInputElement;

				if (aTouchEnKeyEnable) {
					aInputElement = document[aTouchEnKeyName][aTouchEnKeyInputName];
				} else {
					aInputElement = aOriInput;
				}

				aInputElement.onkeypress = function(e) {
					if(!e)
						e = event;	
					var aKeyCode = e.which || e.keyCode,
						aDispatcher;
					
					// K-Defense ì¶ê° íì (íë¬ê·¸ì¸)
					//console.log (aKeyCode);
					if (aKeyCode == 13) {
						//2013.02.15, AI-065, added
						if (AnySign.mDivInsertOption == true) {
								return false;
						}
						
						aTarget.focus();

						if (aTarget.dispatchEvent) {
							var evt = document.createEvent("HTMLEvents");
							evt.initEvent("click", true, true);
							aDispatcher = function () {
								//20130325 ldg ie9 enter key can one touch modify 
								//if (__SANDBOX.isIE () > 0)
								if (__SANDBOX.isIE () < 9)
								{
									return;
								}

								aTarget.dispatchEvent(evt);
							};
						}
						else {
							aDispatcher = function () {
								aTarget.fireEvent("onclick");
							};
						}

						setTimeout(aDispatcher, 0); // for AOS

						return false;
					}
				}
			},
			getLength : function() {
				var aResult = 0;
				var aTarget;
				if (aTransKeyEnable && document.getElementById(aTransKeyInputID)) {
					aTarget = document.getElementById(aTransKeyInputID);
				} else if (aTouchEnKeyEnable) {
					aTarget = document[aTouchEnKeyName][aTouchEnKeyInputName];
				} else {
					aTarget = aOriInput;
				}
				
				if(aTarget || aTarget.value)
					aResult = aTarget.value.length;
				
				return aResult;
			},
			focus : function() {
				if (aTouchEnKeyEnable) {
					if (document[aTouchEnKeyName][aTouchEnKeyInputName].disabled != true) {
						document[aTouchEnKeyName][aTouchEnKeyInputName].focus();
						return true;
					}
				}
				else {
					if(aOriInput.disabled != true) {
						aOriInput.focus();
						return true;
					}
				}

				return false;
			},
			refresh: function() {
				//this.clear();
				if (aTransKeyEnable && document.getElementById(aTransKeyInputID)) {
				//	aTransKey.close();
				} else if (aOpenkeyboardEnable) {
					openkeyboard.stop();
				} else if (aXecureKeyPadEnable) {
					var xkLayer = document.getElementById("xk-dialog");
					if (xkLayer)
						document.body.removeChild(xkLayer);
				}
				if (aTouchEnKeyEnable)
				{
					if (navigator.appName == 'Microsoft Internet Explorer' || navigator.userAgent.match('Trident/7.0') || navigator.userAgent.match('MSIE'))
					{
						if(aTouchEnKeyInputName == 'verifyhsm_tek_input1'||aTouchEnKeyInputName =='certselect_tek_input1' || aTouchEnKeyInputName =='inputpasswd_tek_input1' || aTouchEnKeyInputName == 'certselectwide_tek_input1')
						{
							setTimeout(function(){TouchEnKey_EnqueueList(aTouchEnKeyName,aTouchEnKeyInputName);}, 0);
						}
						else if(aTouchEnKeyInputName =='savepasswd_tek_input1')
						{
							setTimeout(function(){TouchEnkey_EnqueueList_frm(aTouchEnKeyName);}, 0);
      					}	
						else
						{ 
							setTimeout(function(){document.getElementById("TouchEnKey").ReScanDocument();}, 0);
						}
					}
					else
					{ //multi browser
						setTimeout(function(){TouchEnKey_ApplySecurity();}, 0);
					}
				} else if (aKDefenseEnable) {
					setTimeout(function(){KPluginEventInit();}, 0);
				} else if (aTouchEnnxKeyEnable) {
					if(aTouchEnKeyInputName == 'verifyhsm_tek_input1'||aTouchEnKeyInputName =='certselect_tek_input1' ||aTouchEnKeyInputName =='certselect_lite_input1' ||aTouchEnKeyInputName =='certselectwide_lite_input1' || aTouchEnKeyInputName =='inputpasswd_tek_input1' || aTouchEnKeyInputName == 'certselectwide_tek_input1')
					{
						setTimeout(function(){TK_EnqueueList(aTouchEnKeyName,aTouchEnKeyInputName);}, 0);
					}
					else if(aTouchEnKeyInputName =='savepasswd_tek_input1')
					{
						setTimeout(function(){TK_EnqueueList_frm(aTouchEnKeyName);}, 0);
					} 
					else
					{ 
						setTimeout(function(){TK_Rescan();}, 0);
					}
				} 
			},
			enable: function(aEnable) {
				if(aOriInput.disabled != true)
				{
					 orgbk = aOriInput.style.backgroundColor;
				}
				aOriInput.disabled = !aEnable;
				if(aEnable)
				{
					if(orgbk == "")
						orgbk = '#FFFFFF';
					aOriInput.style.backgroundColor = orgbk;
				}
				else
					aOriInput.style.backgroundColor ='#EEEEEE';
				if (aTransKeyEnable && aTransKeyCheckbox !=null && typeof(aTransKeyCheckbox) != "undefined") {
					aTransKeyCheckbox.style.display = (aEnable == true ? "" : "none");
				} else if (aOpenkeyboardEnable && aOpenkeyboardCheckbox !=null && typeof(aOpenkeyboardCheckbox) != "undefined") {
					if (aEnable) openkeyboard.spanEnable();
					else openkeyboard.spanDisable();
				}
			},
			finish: function() {
				npPfsStartup(document.form, false, true, false, false, "npkencrypt", "Off");
			}
		}
	}
	
	// Create Dynamic Filed	
	var dynamicIndex = 1;
	function CreateDynamicFiled() {
		var form = aOriInput.form.name;
		var name = aOriInput.name;

		// Regist Dynamic Field
		npPfsCtrl.RegistDynamicField(form, name);
		dynamicIndex++;
	}

	function __setAfterAction (aCallbackFunc, aCallbackParam) {
		if (AnySign.mAnySignEnable) {
			var _CB_external = function (aResult) {
				if (aResult == undefined || aResult == 0) {
					AnySign.mExtensionSetting.mExternalCallback.result = 0;
					aCallbackFunc(aCallbackParam);
				} else {
					// ì¸ë¶ í¨ì ì¤í¨ (í¤ë³´ë ë³´ì ì¤ì¹ ì²´í¬ ë±)
				}
			}
			
			var _Func_external = function (aResult) {
				AnySign.mExtensionSetting.mInstallCheck_Level = 0;
				if (AnySign.mExtensionSetting.mExternalCallback.func &&
					AnySign.mExtensionSetting.mExternalCallback.result != 0)
					AnySign.mExtensionSetting.mExternalCallback.func(_CB_external);
				else
					_CB_external(0);
			}
				
			if (!AnySign.mAnySignLoad) {
				// StartAnySign ì°ì í¸ì¶ ë°©ì§
				if (AnySign.mExtensionSetting.mInstallCheck_State == "ANYSIGN4PC_NEED_INSTALL" || AnySign.mExtensionSetting.mInstallCheck_State == "ANYSIGN4PC_NEED_UPDATE") {
					var selectResult;
					if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
						selectResult = confirm(ANYSIGN4PC_INSTALL_MSG);
					else
						selectResult = confirm(ANYSIGN4PC_INSTALL_MSG_en);
					if (selectResult) {
						location.href = AnySign.mPlatform.aInstallPage;
					} else {
						return;
					}
				}
				
				AnySign.mExtensionSetting.mInstallCheck_Level = 1;
				AnySign.mExtensionSetting.mLoadCallback.func = _Func_external;
				AnySign.mExtensionSetting.mLoadCallback.param = "";
				
				AnySign.StartAnySign();
			} else {
				_Func_external();
			}
		} else {
			aCallbackFunc (aCallbackParam);
		}
	}

	function __certSelectDialog (aDialogParam)
	{

		var aModule;
		var aDialog;

		var aXgateAddress;
		var aCAList;
		var aCertSerial;
		var aCertLocation;
		var aPlain;
		var aFileInfo;
		var aFileHash;
		var aOption;
		var aForm;
		var aData;
		var aCert;
		var aDescription;
		var aLimitTrial, aKeywordTryLimit;
		var aHTMLData;
		var aCert;
		var aUserCallback;
		var aErrCallback;
		var aMediaID;
		var aSubjectDN;
		var aCompleteCallback;
		var aShowSavePasswdDialog;
		var aJobCode;
		var aReason;
		var aId_num;
		var aPEMCert;

		if (aDialogParam.args.userCallback == undefined)
		{
			alert("user callback error");
		}

		if (aDialogParam.args.errCallback == undefined)
		{
			aDialogParam.args.errCallback = gErrCallback_common;
		}

		aXgateAddress			=	aDialogParam.args.xgateAddress;
		aCAList					=	aDialogParam.args.caList;
		aCertSerial				=	aDialogParam.args.certSerial;
		aCertLocation			=	aDialogParam.args.certLocation;
		aPlain					=	aDialogParam.args.plain;
		aFileInfo				=	aDialogParam.args.fileInfo;
		aFileHash				=	aDialogParam.args.fileHash;
		aInFilePath				=	aDialogParam.args.inFilePath;
		aOutFilePath			=	aDialogParam.args.outFilePath;
		aOption					=	aDialogParam.args.option;
		aForm					=	aDialogParam.args.form;
		aData					=	aDialogParam.args.data;
		aCert					=	aDialogParam.args.cert;
		aDescription			=	aDialogParam.args.description;
		aKeywordTryLimit		=	aDialogParam.args.keywordTryLimit;
		aUserCallback			=	aDialogParam.args.userCallback;
		aErrCallback			=	aDialogParam.args.errCallback;
		aMediaID				=	aDialogParam.args.mediaID;
		aSubjectDN				=	aDialogParam.args.subjectDN; // TODO Delete
		aIssuerRDN				=	aDialogParam.args.issuerRDN;
		aCertSerial				=	aDialogParam.args.certSerial;
		aJobCode				=	aDialogParam.args.aJobCode;
		aReason					=	aDialogParam.args.aReason;
		aCompleteCallback		=	aDialogParam.args.completeCallback;
		aShowSavePasswdDialog	=	aDialogParam.args.showSavePasswdDialog;
		aMultiSignID			=	aDialogParam.args.multiSignID;
		aMultiSignTable			=	aDialogParam.args.multiSignTable;
		aId_num					=	aDialogParam.args.vid;
		aFuncname				=	aDialogParam.args.funcname;

		function onconfirm_common (aResult)
		{
			if (aResult.dialog)
				aResult.dialog.dispose ();
			aDialog.dispose ();
			aUserCallback(aResult);
		}
		

		function onconfirm_sign (aSelectResult)
		{
			var aSignedData = "";
			var aMediaType;

			aMediaType = Math.floor(parseInt(aSelectResult.mediaID, 10) / 100) * 100;
			
			if (aMediaType == XW_CERT_LOCATION_WEBPAGE)
			{
				var aResult = {};
				aResult.subjectDn = aSelectResult.subjectRDN;
				aResult.issuerDn = aSelectResult.issuerRDN;
				aResult.serial = aSelectResult.certSerial;
				
				var aInput = aSelectResult.passwd.split("$");
				if (aInput.length == 2) {
					if (parseInt(aInput[0]) == XW_SECUREINPUT_XECUREKEYPADE2E) {
						var aKeypadInput = aInput[1].split("|");
						aResult.keypadType = "XECUREKEYPAD";
						aResult.keypadSessionId = aKeypadInput[0];
						aResult.keypadSessionToken = aKeypadInput[1];
						aResult.pwd = aKeypadInput[2];
					} else {
						aResult.pwd = aInput[1];
					}
				}
				
				if (!AnySign.mDivInsertOption) {
					aDialog.dispose ();
				}
				aUserCallback(aResult);
				return;
			}
			
			if (aSelectResult.passwd == "" && aMediaType != XW_CERT_LOCATION_PKCS11 && aMediaType != XW_CERT_LOCATION_MPHONE && aMediaType != XW_CERT_LOCATION_SECUREDISK)
			{
				alert("Please enter the password that required to sign the certificate.");
				return;
			}

			if (aSelectResult.passwdResult == -3)
			{
				if (!AnySign.mDivInsertOption) {
					aDialog.dispose ();
				}
				return;
			}

			if (aFuncname == "SignFileInfo" ||
				aFuncname == "SignFileInfoWithSerial" ||
				aFuncname == "SignFileInfoWithVID_Serial")
			{
				_getCertTree ();
			}
			else
			{
				_sign ();
			}
			
			var aFileInfoData = "";
			function _getCertTree() {
				var aHashValue = "";
				
				_getCertTreeCallback = function (result)
				{
					if (__SANDBOX.isFailed (result, aErrCallback))
					{
						_final();
						_close();
						return;
					}
					
					aHashValue = _getSearchHashValue(result, aFileHash);
					if (aHashValue == "")
					{
						_errCallback = function ()
						{
							__SANDBOX.isFailed (aHashValue, aErrCallback);
							_final();
							_close();
						}
						
						__SANDBOX.upInterface().setError(XW_ERROR_PLUGINS_INPUTNULL, _errCallback);
						return;
					}
					
					aFileInfoData = aFileInfo + "|" + aHashValue;
					_sign();
				}
				
				__SANDBOX.upInterface().getCertTree (aSelectResult.mediaID,
													 2,
													 24,
													 0,
													 aSelectResult.issuerRDN,
													 aSelectResult.certSerial,
													 _getCertTreeCallback);
			}

			function _sign() {
				gStartGuideDialog();
				
				/*****************************************************************************/
				__resultCheckFun = function (aResult)
				{
					gEndGuideDialog();

					if (aSelectResult.mediaID == XW_CERT_LOCATION_MPHONE + 1) {
						aErrCallback = null;
					}
					
					if (aResult == "") {
						
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						
						if (aErrorObject.code == XW_ERROR_SIGN_DUPLICATE_CERT) {
							aSelectResult.callback();
							alert (aErrorObject.msg.replace(/\\n/g, '\r\n'));
							if (aSelectResult.dialog)
								aSelectResult.dialog.dispose ();
						} else if (aErrorObject.code != "0") {
							_close();
							
							if (aErrCallback) {
								aErrCallback (aErrorObject);
							}
						}
						
						_final();
					}
					else
					{
						_close();
						
						var _setCertLocation_callback = function () {
							if (aOption & XW_OPTION_PKCS1_ADD) { // jkpark - VID ë¯¸ì§ì
								aSignedData = aResult;
								_getCertPEM(aSignedData);
							} else if (aOption & XW_FVIEW_CREATE_VID) {
								_inputVid(aResult);
							} else {
								gPlainFilePath = "";
								gSignedFilePath = "";
								_done(aResult);
							}
						}
						
						_setCertLocation (aXgateAddress, aSelectResult.mediaID, aOption, _setCertLocation_callback);
					}
				}
				/*****************************************************************************/
				
				if (aFuncname == "SignFileInfo" ||
					aFuncname == "SignFileInfoWithSerial" ||
					aFuncname == "SignFileInfoWithVID_Serial")
				{
					if (aSelectResult.withPFX)
					{
						// for AnySignLite crypto
						aSelectResult.issuerRDN = null;
						aSelectResult.certSerial = null;
					}

					__SANDBOX.upInterface().signFileInfo (aXgateAddress,
														  aSelectResult.mediaID,
														  aSelectResult.issuerRDN, 
														  aSelectResult.certSerial, 
														  aSelectResult.passwd, 
														  aFileInfoData,
														  aOption,
														  0,
														  __resultCheckFun);
				}
				else if (aFuncname == "SignFileInfoAdd")
				{
					if (aSelectResult.withPFX)
					{
						__SANDBOX.upInterface().signFileInfoWithPFX (aXgateAddress,
																	 aSelectResult.pfxPath, 
																	 aSelectResult.passwd, 
																	 aPlain,
																	 aOption,
																	 1,
																	 __resultCheckFun);
					}
					else
					{
						__SANDBOX.upInterface().signFileInfo (aXgateAddress,
															  aSelectResult.mediaID,
															  aSelectResult.issuerRDN, 
															  aSelectResult.certSerial, 
															  aSelectResult.passwd, 
															  aPlain,
															  aOption,
															  1,
															  __resultCheckFun);
					}
				}
				else if (aFuncname == "SignFileEx" ||
						 aFuncname == "SignFileExWithVID")
				{
					__SANDBOX.upInterface().signFileEx (aXgateAddress,
														aInFilePath,
														aOutFilePath,
														(aSelectResult.mediaID == undefined) ? "" : aSelectResult.mediaID,
														(aSelectResult.issuerRDN == undefined) ? "" : aSelectResult.issuerRDN,
														(aSelectResult.certSerial == undefined) ? "" : aSelectResult.certSerial,
														(aSelectResult.withPFX == true) ? aSelectResult.pfxPath : "",
														(aMediaType == XW_CERT_LOCATION_PKCS11) ? aSelectResult.pin : aSelectResult.passwd,
														aOption,
														aDescription,
														__resultCheckFun);
				}
				else // SignData
				{
					if (aFuncname == "SignDataAdd" || aFuncname =="SignDataAddWithVID_Serial")
					{
						if (aSelectResult.withPFX)
						{
							__SANDBOX.upInterface().signDataWithPFX (aPlain,
																	 aSelectResult.pfxPath, 
																	 aSelectResult.passwd, 
																	 aOption,
																	 1,
																	 __resultCheckFun);
						}
						else
						{
							__SANDBOX.upInterface().signDataAdd (aXgateAddress,
																 aSelectResult.mediaID,
																 aSelectResult.issuerRDN, 
																 aSelectResult.certSerial, 
																 aSelectResult.passwd, 
																 aPlain, 
																 aOption,
																 __resultCheckFun);
						}
					}
					else
					{
						if (aSelectResult.withPFX)
						{
							__SANDBOX.upInterface().signDataWithPFX (aPlain,
																	 aSelectResult.pfxPath, 
																	 aSelectResult.passwd, 
																	 aOption,
																	 0,
																	 __resultCheckFun);
						}
						else	
						{
							
							__SANDBOX.upInterface().signDataCMS (aXgateAddress,
																 aSelectResult.mediaID,
																 aSelectResult.issuerRDN, 
																 aSelectResult.certSerial, 
																 aSelectResult.passwd, 
																 aPlain, 
																 aOption,
																 __resultCheckFun);
						}
					}
				}
			}

			function _inputVid(aResult) {
				var aVid;
				aSignedData = aResult;
				
				var _verifyvid = function() {
					if( (aDialogParam.args.option & XW_FVIEW_CREATE_VID_FROM_WEB) || (aDialogParam.args.option & XW_FVIEW_CREATE_VID_NO_IDN) )
					{
						if (aDialogParam.args.option & XW_FVIEW_CREATE_VID_NO_IDN)
						{
							aVid = "";
						}
						else if (aDialogParam.args.funcname == "SignDataWithVID_Serial" ||
								 aDialogParam.args.funcname == "SignDataAddWithVID_Serial" ||
								 aDialogParam.args.funcname == "SignFileInfoWithVID_Serial" ||
								 aDialogParam.args.funcname == "SignFileExWithVID")
						{
							aVid = aDialogParam.args.idn;
						}		
						_setVid (aSignedData, aVid);
					}
					else
					{
						var guideDialog;
						var aInputType = __SANDBOX.getInputType(aSelectResult.mediaID);
						
						var module = __SANDBOX.loadModule("verifyvid");
						//AnySign.SetUITarget (aDialog.getUITarget());
						var vidDialog = module({
							width: 350,
							height: 100,
							onconfirm: function(aResult) { _setVid(aSignedData, aResult); vidDialog.dispose(); },
							oncancel: function() { _final(); vidDialog.dispose(); },
							args: {inputType: aInputType}
						});
						
						vidDialog.show();
					}
				}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					
					_logoutTokenCallback = function () {
						_input_iccard();
					}
					
					_loginTokenCallback = function (result) {
						guideDialog.dispose ();
						
						if(result != 0) {
							var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							
							__SANDBOX.upInterface().logoutStoreToken (aSelectResult.mediaID, _logoutTokenCallback);
						} else {
							_verifyvid();
						}
					}
					
					_input_iccard = function () {
						var aICCardType;
						if (aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
							aICCardType = "kepco";
						else
							aICCardType = "iccard";
						
						var iccardModule = __SANDBOX.loadModule("iccard");
						var iccardDialog = iccardModule({
							type: aICCardType,
							args: { },
							onconfirm: function (aPin) {
								var guideModule;
								guideModule = __SANDBOX.loadModule("guidewindow");
								guideDialog = guideModule({
											  type: "request",
											  args: "",
											  onconfirm: "",
											  oncancel: function () {guideDialog.dispose();}
								});

								if (guideDialog)
									guideDialog.show();

								__SANDBOX.upInterface().loginStoreToken (aSelectResult.mediaID, aPin, 1, _loginTokenCallback);

								iccardDialog.dispose();
							},
							oncancel: function () {
								_final();
								iccardDialog.dispose();
							}
						});
						
						iccardDialog.show();
					}
					
					_input_iccard();
				} else {
					_verifyvid();
				}
			}

			function _setVid (aResult, aVid) {
				var guideModule, guideDialog = null;

				aSignedData = aResult;
				
				/******************************************************************************************/
				_envelopIdNumCallback = function (result)
				{
					if (guideDialog)
						guideDialog.dispose ();
					/*
					if ( __SANDBOX.isFailed(result, aErrCallback) )
					{
						_final();
						return;
					}
					*/
					_done(aSignedData);
				}
				/******************************************************************************************/


				/******************************************************************************************/
				_setIdNumCallback = function (result)
				{
					if ( __SANDBOX.isFailed(result, aErrCallback) )
					{
						_final();
						return;
					}

					if (aSelectResult.withPFX)
					{
						__SANDBOX.upInterface().envelopIdNumWithPFX (aSelectResult.pfxPath,
																	 aSelectResult.passwd,
																	 aCert,
																	 _envelopIdNumCallback);
					}
					else
					{
						__SANDBOX.upInterface().envelopIdNum (aXgateAddress,
															  null,
															  aSelectResult.mediaID,
															  aSelectResult.issuerRDN, 
															  aSelectResult.certSerial,
															  aSelectResult.passwd,
															  aCert,
															  _envelopIdNumCallback);
					}
				}
				/******************************************************************************************/

				if (aFuncname == "SignFileExWithVID")
				{
					if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD || aMediaType == XW_CERT_LOCATION_PKCS11)
					{
						guideModule = __SANDBOX.loadModule("guidewindow");
						guideDialog = guideModule({
									  type: "request",
									  args: "",
									  onconfirm: "",
									  oncancel: function () {guideDialog.dispose();}
						});

						if (guideDialog)
							guideDialog.show();
					}
					
					__SANDBOX.upInterface().envelopIdNumEx (aXgateAddress,
															(aSelectResult.mediaID == undefined) ? "" : aSelectResult.mediaID,
															(aSelectResult.issuerRDN == undefined) ? "" : aSelectResult.issuerRDN, 
															(aSelectResult.certSerial == undefined) ? "" : aSelectResult.certSerial,
															(aSelectResult.pfxPath == undefined) ? "" : aSelectResult.pfxPath,
															(aMediaType == XW_CERT_LOCATION_PKCS11) ? aSelectResult.pin : aSelectResult.passwd,
															aVid,
															aCert,
															0,
															_envelopIdNumCallback);
				}
				else
				{
					if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
					{
						guideModule = __SANDBOX.loadModule("guidewindow");
						guideDialog = guideModule({
									  type: "request",
									  args: "",
									  onconfirm: "",
									  oncancel: function () {guideDialog.dispose();}
						});

						if (guideDialog)
							guideDialog.show();
					}
					
					__SANDBOX.upInterface().setIdNum (aVid, _setIdNumCallback);
				}
			}

			function _done(aResult) {
				if (aFuncname == "SignFileEx" ||
					aFuncname == "SignFileExWithVID") {
						if (aOption & XW_OPTION_FCMS_CACHE_CERTINFO) {
							__SANDBOX.clearCacheCert ();
							__SANDBOX.cacheCertData.mediaID = aSelectResult.mediaID;
							__SANDBOX.cacheCertData.issuerRDN = aSelectResult.issuerRDN;
							__SANDBOX.cacheCertData.certSerial = aSelectResult.certSerial;
							__SANDBOX.cacheCertData.pfxPath = (aSelectResult.withPFX == true) ? aSelectResult.pfxPath : "";
							__SANDBOX.cacheCertData.passwd = (aMediaType == XW_CERT_LOCATION_PKCS11) ? aSelectResult.pin : aSelectResult.passwd;
						}
				}
				
				if (aSelectResult.dialog)
					aSelectResult.dialog.dispose ();

				if (!AnySign.mDivInsertOption) {
					if (aDialog) 
						aDialog.dispose ();
				}

				if (AnySign.mAnySignEnable)
					__SANDBOX.extension.resetErrAndMsg ();

				var _done_logout = function ()
				{
					aUserCallback (aResult);
				}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
				{
					__SANDBOX.upInterface().logoutStoreToken(aSelectResult.mediaID, _done_logout);
				}
				else if (aMediaType == XW_CERT_LOCATION_PKCS11)
				{
					if ((aSelectResult.smartCert == true) && (aOption & XW_OPTION_CACHE_SMARTCERT)) {
						__SANDBOX.cacheSmartCert = aSelectResult.smartCert;
						_done_logout();
					} else {
						__SANDBOX.upInterface().finalizePKCS11FromIndex (aSelectResult.mediaID, _done_logout);
					}
				}
				else if (aMediaType == XW_CERT_LOCATION_SECUREDISK)
				{
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aSelectResult.providerName, _done_logout);
				}
				else
				{
					aUserCallback (aResult);
				}
			}
			
			function _final() {
				var _final_done = function () {}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					__SANDBOX.upInterface().logoutStoreToken(aSelectResult.mediaID, _final_done);
				}
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aSelectResult.mediaID, _final_done);
				}
				
				if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aSelectResult.providerName, _final_done);
				}
			}
			
			function _close() {
				if (aSelectResult.dialog)
					aSelectResult.dialog.dispose ();
				
				if (!AnySign.mDivInsertOption) {
					if (aDialog) 
						aDialog.dispose ();
				}
			}
			
			/********************************************************************************
			 * function add, 2016.2.19, ymkim
	    	 *******************************************************************************/
			function _getCertPEM(aSignedData) {
				var _getCertPEMCallBack = function (result) {
					aSignedData = aSignedData + "|" + aSelectResult.subjectRDN + "|" + aSelectResult.certSerial + "|" + result;
					
					_done(aSignedData);
				}
				
				__SANDBOX.upInterface().getCertPEM (aSelectResult.mediaID, 
													aSelectResult.issuerRDN,
													aSelectResult.certSerial,
													0,
													_getCertPEMCallBack);
			}
			
		}

		function onconfirm_filesign(aResult)
		{
			/********************************************************************************
			 * signFile callback function
			 *******************************************************************************/
			var _signFile_callback = function ()
			{
				var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
				if (aErrorObject.code != 0)
				{
					aErrCallback (aErrorObject);
					return;
				}
				
				gPlainFilePath = "";
				gSignedFilePath = "";
				
				var _final = function () {
					aUserCallback (0);
					if (!AnySign.mDivInsertOption)
						aDialog.dispose ();
				}
				
				if ((Math.floor(aResult.mediaID / 100) * 100) == XW_CERT_LOCATION_PKCS11)
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aResult.mediaID, _final);
				else
					_final ();
			}
			/*****************************************************************************/

			if (aResult.mediaID == XW_CERT_LOCATION_MPHONE + 1)
			{
				alert("not supported media ID");
				return;
			}

			__SANDBOX.upInterface().signFile (aXgateAddress,
											  aResult.mediaID,
											  aResult.issuerRDN, 
											  aResult.certSerial, 
											  aResult.passwd, 
											  gPlainFilePath,
											  gSignedFilePath,
											  aOption,
											  _signFile_callback);
		}

		function onconfirm_vid(aResult)
		{
            if (aResult.passwdResult == -3)
            {
                aDialog.dispose ();
                return;
            }
			aDialogParam.args.mediaID   = aResult.mediaID;
			aDialogParam.args.issuerRDN = aResult.issuerRDN;
			aDialogParam.args.certSerial = aResult.certSerial;
			aDialogParam.args.passwd = aResult.passwd;
			if(aResult.withPFX)
			{
				aDialogParam.args.withPFX = aResult.withPFX;
				aDialogParam.args.pfxPath = aResult.pfxPath;
			}

			if( (aDialogParam.args.option & XW_FVIEW_CREATE_VID_FROM_WEB) || (aDialogParam.args.option & XW_FVIEW_CREATE_VID_NO_IDN) )
			{
				if (aDialogParam.args.option  & XW_FVIEW_CREATE_VID_NO_IDN)
				{
					aDialogParam.args.vid = "";
				}
				else
				{
					aDialogParam.args.vid = aDialogParam.args.idn;
				}
				aDialogParam.args.completeCallback(aDialogParam);
			}
			else
			{
				var aInputType = __SANDBOX.getInputType(aDialogParam.args.mediaID);
					
				var module = __SANDBOX.loadModule("verifyvid");
				AnySign.SetUITarget (aDialog.getUITarget());
				var dialog = module({
					width: 350,
					height: 100,
					onconfirm: function(aResult) {
						aDialogParam.args.vid = aResult;
						aDialogParam.args.completeCallback(aDialogParam);
						dialog.dispose();
						},
					oncancel: function() { dialog.dispose(); },
					args: {inputType: aInputType}
					});
				dialog.show();
			}
			aDialog.dispose();
		}
		
		function onconfirm_multi (aSelectResult)
		{
			var aCount = 1;
			var aSignedData;
			var aCertInfo = "";
			var aMediaType = Math.floor(parseInt(aSelectResult.mediaID, 10) / 100) * 100;
			var aAddOption = false;
			if (aMediaType == XW_CERT_LOCATION_YESSIGNM && !(aOption & 4))
			{
				aOption = aOption + 4;
				aAddOption = true;
			}
			
			if (aSelectResult.passwd == "" && aMediaType != XW_CERT_LOCATION_PKCS11 && aMediaType != XW_CERT_LOCATION_MPHONE && aMediaType != XW_CERT_LOCATION_SECUREDISK)
			{
				alert("Please enter the password that required to sign the certificate.");
				return;
			}
			
			if (aSelectResult.passwdResult == -3)
			{
				if (!AnySign.mDivInsertOption) {
                	aDialog.dispose ();
				}
        		return;
      		}
			
			
			var _getCertTree = function()
			{
				__SANDBOX.upInterface().getCertTree (aSelectResult.mediaID,
													 2,
													 24,
													 0,
													 aSelectResult.issuerRDN,
													 aSelectResult.certSerial,
													 _getCertTreeCallback);
			}
			
			var _getCertTreeCallback = function(result)
			{
				if (__SANDBOX.isFailed (result, aErrCallback))
				{
					_close ();
					return;
				}
				
				aCertInfo = result;
				
				_signDataCMS ();
			}
			
			var _close = function ()
			{
				if (aSelectResult.dialog)
					aSelectResult.dialog.dispose ();
				
				if (!AnySign.mDivInsertOption)
					aDialog.dispose ();
			}
			
			var _final = function (aCallback) {
				var _final_done = function () {
					if (aCallback)
						aCallback();
				}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					__SANDBOX.upInterface().logoutStoreToken(aSelectResult.mediaID, _final_done);
				} else if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aSelectResult.mediaID, _final_done);
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aSelectResult.providerName, _final_done);
				} else {
					_final_done ();
				}
			}
			
			var _signDataCMS_callback = function (signed)
			{
				if (__SANDBOX.isFailed(signed, aErrCallback))
				{
					_final ();
					_close ();
					return;
				}

				aMultiSignTable.setSignedData(aMultiSignID, signed);
				
				if (aCount == aMultiSignTable.sizeOfPlain(aMultiSignID) || aSelectResult.mediaID == XW_CERT_LOCATION_MPHONE + 1)
				{
					_close ();
					
					var _userCallback = function () {
						if (aSelectResult.mediaID == XW_CERT_LOCATION_MPHONE + 1)
							aUserCallback (1);
						else
							aUserCallback (0);
					}
					
					var _setCertLocation_callback = function () {
						
						if (aOption & XW_FVIEW_CREATE_VID) {
							_inputVid();						
						} else {
							_final (_userCallback);
						}
					}
					
					_setCertLocation (aXgateAddress, aSelectResult.mediaID, aOption, _setCertLocation_callback);
				}
				else
				{
					aCount++;
					if (aMediaType == XW_CERT_LOCATION_PKCS11 && aSelectResult.smartCert != true)
						_final (_loginPKCS11);
					else if (aMediaType == XW_CERT_LOCATION_SECUREDISK)
						_final (_loginSecureDisk);
					else
						_signDataCMS ();
				}
			}

			var _loginPKCS11 = function () // ì¤ë¥ ì²ë¦¬ ìì
			{
				__SANDBOX.upInterface().loginPKCS11FromIndex (aSelectResult.mediaID,
															  aSelectResult.pin,
															  _signDataCMS);
			}
			
			var _loginSecureDisk = function ()
			{
				__SANDBOX.upInterface().loginSecureDiskFromIndex (aSelectResult.mediaID,
																  aSelectResult.pin,
																  aSelectResult.subjectRDN,
																  aSelectResult.issuerRDN,
																  aSelectResult.certSerial,
																  0,
																  _signDataCMS);
			}
			
			var _signDataCMS = function ()
			{
				var aPlainMsg = "";
				if (aSelectResult.mediaID == XW_CERT_LOCATION_MPHONE + 1)
				{
					aOption = 67108864;
					for (var i = 0; i < aMultiSignTable.sizeOfPlain(aMultiSignID); i++)
					{
						aPlainMsg += aMultiSignTable.getPlainData (aMultiSignID, i);
						if (aMultiSignTable.getPlainData(aMultiSignID, i+1))
							aPlainMsg += "||";
					}
				}
				else
				{
					aPlainMsg = aMultiSignTable.getPlainData (aMultiSignID, aCount-1);
				}

				if (aFuncname == "MultiSignFileInfo" ||
					aFuncname == "MultiSignFileInfoWithSerial" ||
					aFuncname == "MultiSignFileInfoWithVID_Serial")
				{
					var aFileInfoData = "";
					var aHashValue = "";
					
					aFileHash = aMultiSignTable.getPlainData2 (aMultiSignID, aCount-1);
					aHashValue = _getSearchHashValue(aCertInfo, aFileHash);
					if (aHashValue == "")
					{
						_errCallback = function ()
						{
							__SANDBOX.isFailed (aHashValue, aErrCallback);							
							_close ();
						}
						
						__SANDBOX.upInterface().setError(XW_ERROR_PLUGINS_INPUTNULL, _errCallback);
						return;
					}
					aFileInfoData = aPlainMsg + "|" + aHashValue;
					
					__SANDBOX.upInterface().signFileInfo (aXgateAddress,
														  aSelectResult.mediaID,
														  aSelectResult.issuerRDN, 
														  aSelectResult.certSerial, 
														  aSelectResult.passwd, 
														  aFileInfoData,
														  aOption,
													 	  0,
														  _signDataCMS_callback);
				}
				else
				{
					if (aSelectResult.withPFX)
					{
						__SANDBOX.upInterface().signDataWithPFX (aPlainMsg,
																 aSelectResult.pfxPath, 
																 aSelectResult.passwd, 
																 aOption,
																 0,
																 _signDataCMS_callback);
					}
					else
					{
						if (aCount == aMultiSignTable.sizeOfPlain(aMultiSignID) && aAddOption == true)
							aOption = aOption - 4;
						
						__SANDBOX.upInterface().signDataCMS (aXgateAddress,
															 aSelectResult.mediaID,
															 aSelectResult.issuerRDN, 
															 aSelectResult.certSerial, 
															 aSelectResult.passwd, 
															 aPlainMsg,
															 aOption,
															 _signDataCMS_callback);
					}
				}
			}

			function _inputVid() {
				var aVid;				
				
				var _verifyvid = function() {
					if( (aDialogParam.args.option & XW_FVIEW_CREATE_VID_FROM_WEB) || (aDialogParam.args.option & XW_FVIEW_CREATE_VID_NO_IDN) )
					{
						if (aDialogParam.args.option & XW_FVIEW_CREATE_VID_NO_IDN)
						{
							aVid = "";
						}
						else if (aDialogParam.args.funcname == "MultiSignExWithVID_Serial" ||
								 aDialogParam.args.funcname == "MultiSignFileInfoWithVID_Serial")
						{
							aVid = aDialogParam.args.idn;
						}
						_setVid ( aVid);
					}
					else
					{
						var guideDialog;
						var aInputType = __SANDBOX.getInputType(aSelectResult.mediaID);
						
						var module = __SANDBOX.loadModule("verifyvid");
						//AnySign.SetUITarget (aDialog.getUITarget());
						var vidDialog = module({
							width: 350,
							height: 100,
							onconfirm: function(aResult) { _setVid( aResult); vidDialog.dispose(); },
							oncancel: function() { _final(); vidDialog.dispose(); },
							args: {inputType: aInputType}
						});
						
						vidDialog.show();
					}
				}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					
					_logoutTokenCallback = function () {
						_input_iccard();
					}
					
					_loginTokenCallback = function (result) {
						guideDialog.dispose ();
						
						if(result != 0) {
							var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							
							__SANDBOX.upInterface().logoutStoreToken (aSelectResult.mediaID, _logoutTokenCallback);
						} else {
							_verifyvid();
						}
					}
					
					_input_iccard = function () {
						var aICCardType;
						if (aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
							aICCardType = "kepco";
						else
							aICCardType = "iccard";
						
						var iccardModule = __SANDBOX.loadModule("iccard");
						var iccardDialog = iccardModule({
							type: aICCardType,
							args: { },
							onconfirm: function (aPin) {
								var guideModule;
								guideModule = __SANDBOX.loadModule("guidewindow");
								guideDialog = guideModule({
											  type: "request",
											  args: "",
											  onconfirm: "",
											  oncancel: function () {guideDialog.dispose();}
								});

								if (guideDialog)
									guideDialog.show();

								__SANDBOX.upInterface().loginStoreToken (aSelectResult.mediaID, aPin, 1, _loginTokenCallback);

								iccardDialog.dispose();
							},
							oncancel: function () {
								_final();
								iccardDialog.dispose();
							}
						});
						
						iccardDialog.show();
					}
					
					_input_iccard();
				} else {
					_verifyvid();
				}
			}

			function _setVid ( aVid) {
				var guideModule, guideDialog = null;
		
				/******************************************************************************************/
				_envelopIdNumCallback = function (result)
				{
					if (guideDialog)
						guideDialog.dispose ();
					/*
					if ( __SANDBOX.isFailed(result, aErrCallback) )
					{
						return;
					}
					*/
					var _userCallback = function () {
						if (aSelectResult.mediaID == XW_CERT_LOCATION_MPHONE + 1)
							aUserCallback (1);
						else
							aUserCallback (0);
					}
					
					_final (_userCallback);
				}
				/******************************************************************************************/


				/******************************************************************************************/
				_setIdNumCallback = function (result)
				{
					if ( __SANDBOX.isFailed(result, aErrCallback) )
					{
						_final();
						return;
					}

					if (aSelectResult.withPFX)
					{
						__SANDBOX.upInterface().envelopIdNumWithPFX (aSelectResult.pfxPath,
																	 aSelectResult.passwd,
																	 aCert,
																	 _envelopIdNumCallback);
					}
					else
					{
						__SANDBOX.upInterface().envelopIdNum (aXgateAddress,
															  null,
															  aSelectResult.mediaID,
															  aSelectResult.issuerRDN, 
															  aSelectResult.certSerial,
															  aSelectResult.passwd,
															  aCert,
															  _envelopIdNumCallback);
					}
				}
				/******************************************************************************************/
				
				{
					if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
					{
						guideModule = __SANDBOX.loadModule("guidewindow");
						guideDialog = guideModule({
									  type: "request",
									  args: "",
									  onconfirm: "",
									  oncancel: function () {guideDialog.dispose();}
						});

						if (guideDialog)
							guideDialog.show();
					}
					
					__SANDBOX.upInterface().setIdNum (aVid, _setIdNumCallback);
				}
			}
			
			if (aFuncname == "MultiSignFileInfo" ||
      			aFuncname == "MultiSignFileInfoWithSerial" ||
      			aFuncname == "MultiSignFileInfoWithVID_Serial")
			{
				_getCertTree ();
			}
			else
			{
				_signDataCMS ();
			}
		}

		function onconfirm_multifilesign (aResult)
		{
			var aCount = 1,
				aSignedFilePath,
				aSignFilePath;
			
			if (aResult.passwdResult == -3)
			{
				aDialog.dispose();
				return;
			}
			
			var _signFile_callback = function (signed)
			{
				var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
				if (aErrorObject.code != 0)
				{
					aErrCallback (aErrorObject);
					return;
				}

				aMultiSignTable.setSignedData(aMultiSignID, aSignedFilePath);

				if (aCount == aMultiSignTable.sizeOfPlain(aMultiSignID))
				{
					aUserCallback(0);
					aDialog.dispose();
				}
				else
				{
					aCount++;
					_signFile ();
				}
			}
			
			var _signFile = function ()
			{
				aSignedFilePath = aSignFilePath = aMultiSignTable.getPlainData (aMultiSignID, aCount-1);
				aSignedFilePath += ".sig";

				__SANDBOX.upInterface().signFile (aXgateAddress,
												  aResult.mediaID,
												  aResult.issuerRDN,
												  aResult.certSerial,
												  aResult.passwd,
												  aSignFilePath,
												  aSignedFilePath,
												  aOption,
												  _signFile_callback);
			}
			
			_signFile ();
		}

		function onconfirm_renew (aResult)
		{
            if (aResult.passwdResult == -3)
            {
                aDialog.dispose ();
                return;
            }
			aDialogParam.args.mediaID		= aResult.mediaID;
			aDialogParam.args.providerName	= aResult.providerName;
			aDialogParam.args.oldPasswd		= aResult.passwd;
			aDialogParam.args.issuerRDN		= aResult.issuerRDN;
			aDialogParam.args.certSerial	= aResult.certSerial;
			aDialogParam.args.dialog		= aResult.dialog;
			
			var aMediaType = Math.floor(parseInt(aResult.mediaID, 10) / 100) * 100;
			if((aMediaType == XW_CERT_LOCATION_PKCS11 || aMediaType == XW_CERT_LOCATION_SECUREDISK) && AnySign.mShowRenewCertSaveLoc == false) {
				aDialogParam.args.newPasswd = "";
				aDialogParam.args.completeCallback(aDialogParam);
			} else {
				AnySign.SetUITarget(aDialog.getUITarget());
				aDialogParam.args.showSavePasswdDialog(aDialogParam);
			}

			aDialog.dispose ();
		}

		function onconfirm_revoke (aResult)
		{
            if (aResult.passwdResult == -3)
            {
                aDialog.dispose ();
                return;
            }

			aDialogParam.args.mediaID		= aResult.mediaID;
			aDialogParam.args.providerName	= aResult.providerName;
			aDialogParam.args.issuerRDN		= aResult.issuerRDN;
			aDialogParam.args.certSerial	= aResult.certSerial;
			aDialogParam.args.oldPasswd		= aResult.passwd;
			aDialogParam.args.dialog		= aResult.dialog;

			aDialogParam.args.completeCallback(aDialogParam);
			aDialog.dispose ();

		}

		function oncancel_common ()
		{
			aDialog.dispose ();
		}

		function oncancel_sign ()
		{
			var aErrorObject;
			gTarget = aDialog.getUITarget();
			aDialog.dispose();
		}
		
		function oncancel_signfileex ()
		{
			aDialog.dispose();
			aUserCallback(-1); // ì¶ê° ìëª ìì ì·¨ì ìë ì±ê³µ ì²ë¦¬
		}

		function oncancel_filesign ()
		{
			aDialog.dispose ();
		}

		function onconfirm_certPath (aSelectResult)
		{
			var aSignedData = "";
			_CB_getCertPath = function (aResult)
			{
				if (!__SANDBOX.isFailed (aResult, aErrCallback)) {					
					aDialog.dispose ();
					aUserCallback (aResult, aSignedData);
				}
				else {
					aDialog.dispose ();
				}
			}

			_CB_signDataCMS = function (aResult)
			{
				aSignedData = aResult;

				__SANDBOX.upInterface().getCertPath (aSelectResult.mediaID,
													 Number(2),
													 aSelectResult.issuerRDN,
													 aSelectResult.certSerial,
													 _CB_getCertPath);
			}

			__SANDBOX.upInterface().signDataCMS (aXgateAddress,
												 aSelectResult.mediaID,
												 aSelectResult.issuerRDN, 
												 aSelectResult.certSerial, 
												 aSelectResult.passwd, 
												 aPlain, 
												 aOption,
												 _CB_signDataCMS);
		}

		switch (aDialogParam.args.funcname)
		{
			case "SignFile":
				aDialogParam.onconfirm = onconfirm_filesign;
				aDialogParam.oncancel = oncancel_filesign;
				break;
			case "SignDataCMS":
			case "SignDataAdd":
			case "SignDataCMSWithSerial":
			case "SignDataWithVID_Serial":
			case "SignDataAddWithVID_Serial":
			case "SignDataCMSWithHTMLEx":
			case "SignDataCMSWithHTMLExAndSerial":
			case "SignFileInfo":
			case "SignFileInfoAdd":
			case "SignFileInfoWithSerial":
			case "SignFileInfoWithVID_Serial":
				aDialogParam.onconfirm = onconfirm_sign;
				aDialogParam.oncancel = oncancel_sign;
				break;
			case "SignFileEx":
			case "SignFileExWithVID":
				aDialogParam.onconfirm = onconfirm_sign;
				aDialogParam.oncancel = oncancel_signfileex;
				break;
			case "MultiFileSign":
				aDialogParam.onconfirm = onconfirm_multifilesign;
				aDialogParam.oncancel = oncancel_sign;
				break;
			case "MultiSignEx":
			case "MultiSignExWithSerial":
			case "MultiSignExWithVID_Serial":
			case "MultiSignFileInfo":
			case "MultiSignFileInfoWithSerial":
			case "MultiSignFileInfoWithVID_Serial":
				aDialogParam.onconfirm = onconfirm_multi;
				aDialogParam.oncancel = oncancel_sign;
				break;
			case "RenewCertificate":
				aDialogParam.onconfirm = onconfirm_renew;
				aDialogParam.oncancel = oncancel_common;
				break;
			case "RevokeCertificate":
				aDialogParam.onconfirm = onconfirm_revoke;
				aDialogParam.oncancel = oncancel_common;
				break;
			case "RequestCertificateEx":
				break;
			case "GetCertPath":
				aDialogParam.onconfirm = onconfirm_certPath;
				aDialogParam.oncancel = oncancel_common;
				break;
			default:
			//case "EnvelopeDataWithCert":
			//case "DeEnvelopeDataWithCert":
				aDialogParam.onconfirm = onconfirm_common;
				aDialogParam.oncancel = oncancel_common;
				break;
		}

		if (AnySign.mDivInsertOption == 1) {
			aModule = loadModule ("certselectwide");
		} else {
			aModule = loadModule ("certselect");
		}

		aDialog = aModule (aDialogParam);
		if (aDialog) aDialog.show();
		aDialogParam.dialog = aDialog;
		//return aDialog;
	}

	function __showCertselectDialogCommon (aDialogParam, aType) {
		var aCallbackFunc;
		if (aType == 2) {
			aCallbackFunc = __showCertselectDialogCommon2_after;
		} else {
			aCallbackFunc = __showCertselectDialogCommon_after;
		}

		__setAfterAction (aCallbackFunc, aDialogParam);
	}

	function __showCertselectDialogCommon_after (aDialogParam)
	{
		var aDataArray;
		var aFormArray;
		var aHTMLData;
		
		if (aDialogParam.args.storage)
			__SANDBOX.refreshCertLocationSet (aDialogParam.args.storage);
		else
			__SANDBOX.refreshCertLocationSet (aStorage);

		if (aDialogParam.args.caList)
		{
			aDialogParam.args.searchCondition = 20;
		}

		switch (aDialogParam.args.funcname)
		{
			case "SignDataCMSWithHTMLEx":
			case "SignDataCMSWithHTMLExAndSerial":
				var aDelimiter = AnySign.mSignHTMLOption.aDelimiter;
				var aStringFormat = AnySign.mSignHTMLOption.aStringFormat;

				aDataArray = aDialogParam.args.data.split(aDelimiter);
				aFormArray = aDialogParam.args.form.split(aStringFormat);
				aHTMLData  = "";

				for (var aIter = 0; aIter < aFormArray.length; aIter++) {
					aHTMLData += aFormArray[aIter];
					if (aIter < aFormArray.length - 1 && aDataArray[aIter])
						aHTMLData += aDataArray[aIter];
				}
				aDialogParam.args.plain = aDialogParam.args.data;
				if (AnySign.mUseIframeData == true)
					aDialogParam.args.htmlData = aHTMLData;
				else
					aDialogParam.args.htmlDataToText = aHTMLData;
				break;
		}

		var optionCase = 0x01 & aDialogParam.args.option;
		switch (optionCase)
		{
			case 1: // confirmwindow
				// begin case 1
				var aModule = loadModule ("confirmwindow");
				var aDialog = aModule (
					{
						width: 400,
						height: 80,
						onconfirm: function () {
							aDialog.dispose ();
							AnySign.SetUITarget (aDialog.getUITarget());
							__SANDBOX.certSelectDialog(aDialogParam);
							return;
						},
						oncancel:  function () {
							aDialog.dispose ();
							return;
						}

						,args: {certSelectDialogParam: aDialogParam}
					});
				if (aDialog) aDialog.show();
					// end case 1
				break;
			case 0: // no confirmwindow
			default:
				__SANDBOX.certSelectDialog(aDialogParam);
				break;
		}
	}
	
	function __inputPasswdDialog(aDialogParam)
	{
		var aInputType = __SANDBOX.getInputType(aDialogParam.args.mediaID);
		var aPasswordModule = __SANDBOX.loadModule("inputpasswd");
		var aInputPasswdDialog = aPasswordModule ({
			width: aDialogParam.width,
			height: aDialogParam.height,
			onconfirm: function (aResult) {
				aInputPasswdDialog.dispose();
				aDialogParam.args.userCallback (aResult);
			},
			oncancel: function (e) {
				aInputPasswdDialog.dispose();
				aDialogParam.args.errCallback (-1);
			},
			args: {messageType: aDialogParam.args.messageType, inputType: aInputType}
		});

		if (aInputPasswdDialog) aInputPasswdDialog.show();
	}

	function __verifyVidDialog(aDialogParam)
	{
		var aInputType = __SANDBOX.getInputType(aDialogParam.args.mediaID);
		var aVerifyVidModule = __SANDBOX.loadModule("verifyvid");
		var aVerifyVidDialog = aVerifyVidModule({
			onconfirm: function (aResult) {
				aVerifyVidDialog.dispose();
				aDialogParam.args.userCallback (aResult);
			},
			oncancel: function (e) {
				aVerifyVidDialog.dispose();
				aDialogParam.args.errCallback (-1);
			},
			args: {inputType: aInputType}
		});

		if (aVerifyVidDialog) aVerifyVidDialog.show();
	}
	
	function __showCertselectDialogCommon2_after(aDialogParam)
	{
		var aResult = "";
		var aSignCount = 0;
		var aInputFilePath = aDialogParam.args.inFilePath;
		var aOutputFilePath = aDialogParam.args.outFilePath;
		var aSignFileOption = aDialogParam.args.option;
		var aUserCallback = aDialogParam.args.userCallback;
		var aErrCallback = aDialogParam.args.errCallback;
		
		var _certSelectAndSignFile = function () {
			
			aDialogParam.args.inFilePath = aInputFilePath;
			aDialogParam.args.outFilePath = aOutputFilePath;
			aDialogParam.args.option = aSignFileOption;
			aDialogParam.args.userCallback = _certSelectAndSignFile_userCallback;
			aDialogParam.args.errCallback = _certSelectAndSignFile_errCallback;
			
			__SANDBOX.showCertselectDialogCommon(aDialogParam);
		}
		
		var _certSelectAndSignFile_errCallback = function(result) {
			aErrCallback (result);
		}
		
		var _certSelectAndSignFile_userCallback = function(result) {
			if (result == -1) { // cancel
				if (aSignCount > 0)
					aUserCallback (aResult);
			} else if (aSignFileOption & XW_OPTION_SIGN_ADD &&
					!(aSignFileOption & XW_OPTION_SIGN_DETACHED) &&
					!(aSignFileOption & XW_OPTION_SIGN_DETACHED_BASE64))
			{
				if (aSignCount == 0) {
					aInputFilePath = result;
					aResult = result;
					
					if (!(aSignFileOption & XW_OPTION_NO_SELECTFILE))
						aSignFileOption += XW_OPTION_NO_SELECTFILE;
					if (aSignFileOption & XW_OPTION_TEMP_SAVE)
						aSignFileOption -= XW_OPTION_TEMP_SAVE;
					if (aSignFileOption & XW_OPTION_CHECK_WRITE_FILE)
						aSignFileOption -= XW_OPTION_CHECK_WRITE_FILE;
				}
				aSignCount++;
				_confirmNextCert ();
			} else {
				aUserCallback (result);
			}
		}
		
		var _confirmNextCert = function() {
			var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
			AnySign.SetUITarget (aDialogParam.dialog.getUITarget());
			var aCommonDialog = aCommonDialogModule ({
				width: 350,
				height: 0,
				onconfirm: function() { 
										aCommonDialog.dispose(); 
										AnySign.SetUITarget (aCommonDialog.getUITarget());
										_certSelectAndSignFile(); 
									  },
				oncancel: function(e) {
										aCommonDialog.dispose(); 
										aUserCallback (aResult);
									  },
				args: {dialogType: "confirm",
					   messageType: "signFile_confirmNextCert"}
			});

			if (aCommonDialog) aCommonDialog.show();
		}
		
		_certSelectAndSignFile ();
	}
	
	function __processCacheCert(aParam) {
		var aMediaID		= __SANDBOX.cacheCertData.mediaID;
		var aIssuerRDN		= __SANDBOX.cacheCertData.issuerRDN;
		var aCertSerial		= __SANDBOX.cacheCertData.certSerial;
		var aPfxPath		= __SANDBOX.cacheCertData.pfxPath;
		var aPasswd			= __SANDBOX.cacheCertData.passwd;
		var aFuncname		= aParam.funcname;
		var aOption			= aParam.option;
		var aDescription	= aParam.description;
		var aXgateAddress	= aParam.xgateAddress;
		var aInFilePath		= aParam.inFilePath;
		var aOutFilePath	= aParam.outFilePath;
		var aUserCallback	= aParam.userCallback;
		var aErrCallback	= aParam.errCallback;
		var aSignedData;
		
		if (aUserCallback == undefined)
			alert("user callback error");

		if (aErrCallback == undefined)
			aErrCallback = gErrCallback_common;
		
		_CB_Result = function (aResult) {
			if (!__SANDBOX.isFailed (aResult, aErrCallback)) {
				aUserCallback (aResult);
			}
		}
		
		if (aFuncname == "SignFileEx") {
			if (!aPfxPath) {
				if (aMediaID == undefined || aMediaID == null || !aIssuerRDN || !aCertSerial || !aPasswd) {
					alert("No cached data.");
					return;
				}
				
				var aMediaType = Math.floor(parseInt(aMediaID, 10) / 100) * 100;
				if (aMediaType != XW_CERT_LOCATION_HARD &&
					aMediaType != XW_CERT_LOCATION_REMOVABLE &&
					aMediaType != XW_CERT_LOCATION_ICCARD &&
					aMediaType != XW_CERT_LOCATION_KEPCOICCARD &&
					aMediaType != XW_CERT_LOCATION_PKCS11) {
					alert("Not supported media ID.");
					return;
				}
			}
			
			__SANDBOX.upInterface().signFileEx (aXgateAddress,
												aInFilePath,
												aOutFilePath,
												aMediaID,
												aIssuerRDN,
												aCertSerial,
												aPfxPath,
												aPasswd,
												aOption,
												aDescription,
												_CB_Result);
		} else {
			alert("Not supported API.");
		}
	}
	
	function __clearCacheCert() {
		__SANDBOX.cacheCertData.mediaID = null;
		__SANDBOX.cacheCertData.issuerRDN = null;
		__SANDBOX.cacheCertData.certSerial = null;
		__SANDBOX.cacheCertData.pfxPath = null;
		__SANDBOX.cacheCertData.passwd = null;
		return 0;
	}
	
	function __getInputType(aMediaID) {
		if (aMediaID == undefined || aMediaID == null || aMediaID == "" || aMediaID < 0)
			return "";
		
		aMediaID = Math.floor(parseInt(aMediaID, 10) / 100) * 100;
		if (aMediaID < 0)
			return "";
		
		if (aMediaID == XW_CERT_LOCATION_LOCALSTORAGE ||
			aMediaID == XW_CERT_LOCATION_MEMORYSTORAGE)
			return "lite";
		else if (aMediaID == XW_CERT_LOCATION_XECUREFREESIGN)
			return "xfs"; // lite or e2e
		else if (aMediaID == XW_CERT_LOCATION_WEBPAGE)
			return "e2e";
		else
			return "4pc";
	}
	
	function __setMediaType(aMediaID) {
		if (aMediaID == undefined || aMediaID == null || aMediaID == "" || aMediaID < 0)
			AnySign.mMediaType = XW_MEDIA_TYPE_ANYSIGN4PC; // default ?
		
		aMediaID = Math.floor(parseInt(aMediaID, 10) / 100) * 100;
		if (aMediaID < 0)
			AnySign.mMediaType = XW_MEDIA_TYPE_ANYSIGN4PC; // default ?
		
		if (aMediaID == XW_CERT_LOCATION_LOCALSTORAGE ||
			aMediaID == XW_CERT_LOCATION_MEMORYSTORAGE)
			AnySign.mMediaType = XW_MEDIA_TYPE_ANYSIGNLITE;
		else if (aMediaID == XW_CERT_LOCATION_XECUREFREESIGN)
			AnySign.mMediaType = XW_MEDIA_TYPE_XECUREFREESIGN;
		else
			AnySign.mMediaType = XW_MEDIA_TYPE_ANYSIGN4PC;
	}
	
	function __getMediaType(aMediaID) {
		if (aMediaID != undefined)
			__SANDBOX.setMediaType(aMediaID);
		return AnySign.mMediaType;
	}

	function _getSearchHashValue(aCertInfo, aFileHash) {
		var aResult = "";
		var aCertInfoArray;
		var aHashAlgDescArray;
		var aHashAlg;
		var aFileHashArray;
		var aHashValueArray;
		
		if (aCertInfo == undefined || aCertInfo == "" || aFileHash == undefined || aFileHash == "")
			return aResult;
		
		aCertInfoArray = aCertInfo.split("$");
		aHashAlgDescArray = aCertInfoArray[3].split("+");
		aHashAlgDescArray = aHashAlgDescArray[0].split("With");
		aHashAlg = aHashAlgDescArray[0].trim().toLowerCase();
		
		if (aHashAlg == undefined || aHashAlg == "")
			return aResult;
		
		aFileHashArray = aFileHash.split("$");
		for (var i = 0; i < aFileHashArray.length; i++)
		{
			aHashValueArray = aFileHashArray[i].split("|");
			if (aHashValueArray.length < 2)
				break;
			
			if (aHashValueArray[0].trim().toLowerCase() == aHashAlg)
			{
				aResult = aHashValueArray[1];
				break;
			}
		}
		
		return aResult;
	}
	
	// AnySign4PC setting
	function __setConvertTable(aCallbackFunc) {
		var aAnySign = AnySign.mAnySignEnable;
		var aConvertTable = __SANDBOX.convertTable;
		if (aConvertTable.length > 0 && AnySign.mAnySignLoad)
		{
			var aCount = 0;

			_CB_setConvertTable = function (result)
			{
				aCount++;
				__SANDBOX.isFailed (result, gErrCallback_common);
				if (aCount < aConvertTable.length)
				{
					setConvertTable ();
				}
				else
				{
					__SANDBOX.convertTable = [];
					AnySign.mAnySignEnable = aAnySign;
					aCallbackFunc();
				}
			}

			setConvertTable = function () {
				if (aConvertTable[aCount].type == "policy") {
					__SANDBOX.upInterface().setPolicyConvertTable (aConvertTable[aCount].param1,
																   aConvertTable[aCount].param2,
																   aConvertTable[aCount].param3,
																   aConvertTable[aCount].param4,
																   _CB_setConvertTable);
				}
				else
				{
					__SANDBOX.upInterface().setIssuerConvertTable (aConvertTable[aCount].param1,
																   aConvertTable[aCount].param2,
																   aConvertTable[aCount].param3,
																   aConvertTable[aCount].param4,
																   _CB_setConvertTable);

				}
			}
			
			AnySign.mAnySignEnable = true;
			setConvertTable ();
		}
		else
		{
			aCallbackFunc();
		}
	}
	
	function _setCertLocation(aXgateAddress, aMediaID, aOption, aResultCallback) {
		if (AnySign.mAnySignLiteSupport || AnySign.mXecureFreeSignSupport) {
			// AnySignLite setting
			if(aOption & XW_OPTION_CACHE_CERTLOCATION)
				__SANDBOX.upInterface().setCacheCertLocation(aXgateAddress, aMediaID);
			__SANDBOX.upInterface().setLastLocation(aMediaID);
			
			var aAnySign = AnySign.mAnySignEnable;
			
			var _clearCachedData_callback = function (result) {
				AnySign.mAnySignEnable = aAnySign;
				aResultCallback();
			}
			
			if (AnySign.mAnySignEnable) {
				// AnySignLite setting - delete cache
				AnySign.mAnySignEnable = false;
				__SANDBOX.upInterface().clearCachedData (aXgateAddress, 0, _clearCachedData_callback);
			} else if (AnySign.mAnySignLoad) {
				// AnySign4PC setting - delete cache
				AnySign.mAnySignEnable = true;
				__SANDBOX.upInterface().clearCachedData (aXgateAddress, 0, _clearCachedData_callback);
			} else {
				_clearCachedData_callback(0);
			}
		} else {
			aResultCallback();
		}
	}
	
	function getPath(url)
	{
		var path 	= "/";
		var qs_begin_index = url.indexOf('?');

		// if action is relative url, get base url from window location
		if (url.charAt(0) != '/' && url.substring(0,7) != "http://" && url.substring(0,8) != "https://") {
			urlProtocol = window.location.protocol;

			path_end = window.location.href.indexOf('?');
			if (path_end < 0)
				path_end_str = window.location.href;
			else 
				path_end_str = window.location.href.substring(0, path_end);

			path_relative_base_end 	= path_end_str.lastIndexOf('/');
			path_relative_base_str 	= path_end_str.substring(0, path_relative_base_end+1);
			path_begin_index 		= path_relative_base_str.substring(urlProtocol.length + 2, path_relative_base_str.length).indexOf('/');
			
			if (qs_begin_index < 0)
				path = path_relative_base_str.substring(urlProtocol.length + 2 + path_begin_index, path_relative_base_str.length) + url;
			else 
				path = path_relative_base_str.substring(urlProtocol.length + 2 + path_begin_index, path_relative_base_str.length) + url.substring(0, qs_begin_index);
		}
		else if (url.substring(0,7) == "http://") {
			path_begin_index = url.substring(7, url.length).indexOf('/');
			
			if (qs_begin_index < 0)
				path = url.substring (path_begin_index+7, url.length);
			else
				path = url.substring(path_begin_index+7, qs_begin_index);
		}
		else if (url.substring(0,8) == "https://") {
			path_begin_index = url.substring(8, url.length).indexOf('/');
			
			if (qs_begin_index < 0)
				path = url.substring (path_begin_index+8, url.length);
			else
				path = url.substring(path_begin_index+8, qs_begin_index);
		}
		else if (qs_begin_index < 0)
			path = url;
		else
			path = url.substring(0, qs_begin_index);

		return path;
	}
	
	function XecureMakePlain(form)
	{
		var len 		= form.elements.length;
		var name 		= new Array(len);
		var value 		= new Array(len);
		var flag 		= false;
		var j 			= 0;
		var plain_text	= "";
		
		// K-Defense var
		/*
		var aKDefenseEnable = AnySign.mKDefenseEnable != false && typeof(fnGetKDefenseObject) != "undefined" && fnGetKDefenseObject() != null;
		var aKDefenseE2EPrefix = AnySign.mKDefenseE2EPrefix;
		var aKDefenseValue = "";
		*/
	
		for (i=0; i<len; i++) {
			if ((form.elements[i].type != "button") && (form.elements[i].type != "reset") && (form.elements[i].type != "submit")) {
				if (form.elements[i].type == "radio" || form.elements[i].type == "checkbox") {
					if (form.elements[i].checked == true && form.elements[i].disabled == false) {
						name[j] = form.elements[i].name;
						value[j] = form.elements[i].value;
						j++;
					}
				}
				else {
					name[j] = form.elements[i].name;
					if (form.elements[i].type == "select-one") {
						var index = form.elements[i].selectedIndex;
						if (form.elements[i].options[index].value != '')
							value[j] = form.elements[i].options[index].value;
						else
							value[j] = form.elements[i].options[index].text;
					} else {
						/*
						if((aKDefenseEnable) && (form.elements[i].type == "password" || form.elements[i].type == "text")) {
							// K-Defense e2e
							aKDefenseValue = GetPwdValue_K(form, form.elements[i], AnySign.mXgateAddress, "", "")
							if(aKDefenseValue != form.elements[i].value) {
								name[j] = aKDefenseE2EPrefix + form.elements[i].name;
								value[j] = aKDefenseValue;
							} else {
								name[j] = form.elements[i].name;
								value[j] = form.elements[i].value;
							}
						} else {
							value[j] = form.elements[i].value;
						}
						*/
						value[j] = form.elements[i].value;
					}
					j++;
				}
			}
		}
		
		for (i=0; i<j; i++) {
			if (flag)
				plain_text += "&";
			else
				flag = true;
			plain_text += name[i];
			plain_text += "=";
			plain_text += escape_url(value[i]);
		}

		return plain_text;	
	}
	
	function escape_url(url)
	{
		var i;
		var ch;
		var out = '';
		var url_string = '';

		url_string = String(url);

		for (i=0; i<url_string.length; i++) {
			ch = url_string.charAt(i);
			if (ch == ' ')		out += '%20';
			else if (ch == '%')	out += '%25';
			else if (ch == '&') out += '%26';
			else if (ch == '+') out += '%2B';
			else if (ch == '=') out += '%3D';
			else if (ch == '?') out += '%3F';
			else				out += ch;
		}
		return out;
	}
	
/// public
return {
	LoadExtension: function (aName)
	{
		var aRequest,
			aExtension;
		if (window.ActiveXObject) {
			try {
				aRequest = new ActiveXObject("MSXML2.XMLHTTP.3.0");
			} catch (e) {
				try {
					aRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {}
			}
		} else if (window.XMLHttpRequest) {
			aRequest = new window.XMLHttpRequest;
		}

		aRequest.open ('GET', AnySign.mBasePath + "/ext/" + aName, false);
		aRequest.send (null);

		if (aRequest.status != 200) {
			alert("Failed to load extension");
			return;
		}
		eval (__SANDBOX.getSafeResponse(aRequest.responseText));

		if (aName == "json2.js")
			return;

		var index = aName.indexOf(".");
		var extName = aName.substring(0, index);

		aExtension = new AnySignForPCExtension[extName]();
		return aExtension;
	},

	SetExtension: function (aExtension)
	{
		__SANDBOX.extension = aExtension;
		if (!AnySign.mExtensionSetting.mIgnoreInstallPage)
			__SANDBOX.extension.GetWebSocket ();
	},

    UbiKeyLoadCert: function () {
        __SANDBOX.getUbiKeyFunction();
    },
    
    UbiKeySaveCert: function (result) {
        __SANDBOX.getUbiKeyFunction(result);
    },

	SignDataCMS: function (aXgateAddress,
						   aCAList,
						   aPlain,
						   aOption,
						   aDescription,
						   aLimitTrial,
						   aUserCallback,
						   aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "SignDataCMS",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	SignDataAdd: function (aXgateAddress,
						   aCAList,
						   aPlain,
						   aOption,
						   aDescription,
						   aLimitTrial,
						   aUserCallback,
						   aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;
		
		if (aOption & 1) {
			aOption = aOption - 1;
		}

		aDialogParam.args ={funcname		: "SignDataAdd",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	SignDataAddWithCacheCert: function (aXgateAddress,
										aOption,
										aPlain,
										aUserCallback,
										aErrCallback) 
	{
		__SANDBOX.setAfterAction (function () {
			var aMediaID;
			var aMediaType;
			var aProviderName;
			var aGuideModule;
			var aGuideDialog = null;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_show_guidewindow = function ()
	 		{
				aGuideModule = __SANDBOX.loadModule("guidewindow");
	 			aGuideDialog = aGuideModule({
	 				type: "loading",
	 				args: "",
	 				onconfirm: "",
	 				oncancel: function () {aGuideDialog.dispose();}
	 			});
	 			aGuideDialog.show();
	 		}
				
			_fn_final = function (aCallback) {
				var _final_callback = function () {
					if (aGuideDialog) {
	 					aGuideDialog.dispose ();
	 					aGuideDialog = null;
	 				}
						
					if (aCallback)
						aCallback ();
				}
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _final_callback);
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aProviderName, _final_callback);
				} else {
					_final_callback ();
				}
			}
			
			_CB_signDataAdd = function (aResult) {
				if (__SANDBOX.isFailed(aResult, aErrCallback)) {
					_fn_final ();
				} else {
					var _final_callback = function () {
						aUserCallback (aResult);
					}
					_fn_final (_final_callback);
				}
			}
			
			_signDataAdd = function () {				
				aOption |= XW_SIGNDATA_OPTION_SAME_CERT;
				__SANDBOX.upInterface().signDataAdd (aXgateAddress,
													 aMediaID,
													 "",
													 "",
													 "",
													 aPlain,
													 aOption,
													 _CB_signDataAdd);
			}
			
			_pkcs11_process = function () {
				
				_CB_initializePKCS11FromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataAdd ();
					}
				}
				
				_CB_pkcs11MediaList = function (aResult) {
					var aMediaList = aResult.split("\t\n");
					var aIndex = aMediaID - XW_CERT_LOCATION_PKCS11;
					
					if (aMediaList.length < aIndex) {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					aProviderName = aMediaList[aIndex - 1];
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializePKCS11FromName (aProviderName, _CB_initializePKCS11FromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_PKCS11, 0, 1, _CB_pkcs11MediaList);
			}
			
			_securedisk_process = function () {
				
				_CB_initializeSecureDiskFromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataAdd ();
					}
				}
				
				_CB_getMediaList = function (aResult) {
					
					if (aResult == "") {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					aProviderName = aResult;
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializeSecureDiskFromName (aProviderName, _CB_initializeSecureDiskFromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_SECUREDISK, 0, 1, _CB_getMediaList);
			}
	
			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}
	
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					_pkcs11_process ();
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					_securedisk_process ();
				} else {
					_signDataAdd ();
				}
			}
			
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aMediaID = 0;
				else
					aMediaID = aResult;
				
				if (__SANDBOX.getInputType(aMediaID) == "4pc")
					AnySign.mAnySignEnable = true;
				
				aMediaType = Math.floor(aMediaID / 100) * 100;
				
				__SANDBOX.setAfterAction (function () {
					__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
				}, "");
			}
	
			__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
		}, "");
	},

	SignDataCMSWithCacheCert: function (aXgateAddress,
										aPlain,
										aOption,
										aUserCallback,
										aErrCallback) 
	{
		__SANDBOX.setAfterAction (function () {
			var aMediaID;
			var aMediaType;
			var aProviderName;
			var aGuideModule;
			var aGuideDialog = null;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_show_guidewindow = function ()
	 		{
				aGuideModule = __SANDBOX.loadModule("guidewindow");
	 			aGuideDialog = aGuideModule({
	 				type: "loading",
	 				args: "",
	 				onconfirm: "",
	 				oncancel: function () {aGuideDialog.dispose();}
	 			});
	 			aGuideDialog.show();
	 		}
				
			_fn_final = function (aCallback) {
				var _final_callback = function () {
					if (aGuideDialog) {
	 					aGuideDialog.dispose ();
	 					aGuideDialog = null;
	 				}
						
					if (aCallback)
						aCallback ();
				}
				
				__SANDBOX.cacheSmartCert = false;
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _final_callback);
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aProviderName, _final_callback);
				} else {
					_final_callback ();
				}
			}
			
			_CB_signDataCMS = function (aResult) {
				if (__SANDBOX.isFailed(aResult, aErrCallback)) {
					_fn_final ();
				} else {
					var _final_callback = function () {
						aUserCallback (aResult);
					}
					_fn_final (_final_callback);
				}
			}
			
			_signDataCMS = function () {
				__SANDBOX.upInterface().signDataCMS (aXgateAddress,
													 aMediaID,
													 "",
													 "",
													 "",
													 aPlain,
													 aOption,
													 _CB_signDataCMS);
			}
			
			_pkcs11_process = function () {
				
				_CB_initializePKCS11FromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataCMS ();
					}
				}
				
				_CB_pkcs11MediaList = function (aResult) {
					var aMediaList = aResult.split("\t\n");
					var aIndex = aMediaID - XW_CERT_LOCATION_PKCS11;
					
					if (aMediaList.length < aIndex) {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					var aProviderName = aMediaList[aIndex - 1];
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializePKCS11FromName (aProviderName, _CB_initializePKCS11FromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_PKCS11, 0, 1, _CB_pkcs11MediaList);
			}
			
			_securedisk_process = function () {
				
				_CB_initializeSecureDiskFromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataCMS ();
					}
				}
				
				_CB_getMediaList = function (aResult) {
					
					if (aResult == "") {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					aProviderName = aResult;
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializeSecureDiskFromName (aProviderName, _CB_initializeSecureDiskFromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_SECUREDISK, 0, 1, _CB_getMediaList);
			}
			
			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					_pkcs11_process ();
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					_securedisk_process ();
				} else {
					_signDataCMS ();
				}
			}
			
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aMediaID = 0;
				else
					aMediaID = aResult;
				
				if (__SANDBOX.getInputType(aMediaID) == "4pc")
					AnySign.mAnySignEnable = true;
				
				aMediaType = Math.floor(aMediaID / 100) * 100;
				
				__SANDBOX.setAfterAction (function () {
					if ((Math.floor(aMediaID /100) * 100 == XW_CERT_LOCATION_PKCS11) &&
					(__SANDBOX.cacheSmartCert == true) && (aOption & XW_OPTION_CACHE_SMARTCERT)){
						_show_guidewindow ();
						_signDataCMS ();
					} else {
						__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
					}
				}, "");
			}
			
			__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
		}, "");
	},
	
	SignDataWithVID_CacheCert: function (aXgateAddress,
										 aPlain,
										 aOption,
										 aIdn,
										 aSvrCert,
										 aUserCallback,
										 aErrCallback) 
	{
		__SANDBOX.setAfterAction (function () {
			var aMediaID;
			var aMediaType;
			var aProviderName;
			var aVid;
			var aSignedData = "";
			var aGuideModule;
			var aGuideDialog = null;
			
			aOption |= XW_FVIEW_CREATE_VID;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_show_guidewindow = function ()
	 		{
				if (aGuideDialog) return;
				
				aGuideModule = __SANDBOX.loadModule("guidewindow");
	 			aGuideDialog = aGuideModule({
	 				type: "loading",
	 				args: "",
	 				onconfirm: "",
	 				oncancel: function () {aGuideDialog.dispose();}
	 			});
	 			aGuideDialog.show();
	 		}
			
			_close_guidewindow = function ()
			{
				if (aGuideDialog) {
					aGuideDialog.dispose ();
					aGuideDialog = null;
				}
			}
			
			_fn_final = function (aCallback) {
				var _final_callback = function () {
					_close_guidewindow ();
						
					if (aCallback)
						aCallback ();
				}
				
				__SANDBOX.cacheSmartCert = false;
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _final_callback);
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aProviderName, _final_callback);
				} else {
					_final_callback ();
				}
			}
			
			_CB_envelopIdNum = function (aResult) {
				var _final_callback = function () {
					aUserCallback (aSignedData);
				}
				_fn_final (_final_callback);
			}
			
			_setIdNumCallback = function (aResult) {
				if (__SANDBOX.isFailed(aResult, aErrCallback)) {
					_fn_final ();
				} else {
					__SANDBOX.upInterface().envelopIdNum (aXgateAddress,
														  null,
														  aMediaID,
														  "", 
														  "",
														  "",
														  aSvrCert,
														  _CB_envelopIdNum);
				}
			}
			
			_setVid = function (aVid) {
				__SANDBOX.upInterface().setIdNum (aVid, _setIdNumCallback);
			}
			
			_CB_signDataCMS = function (aResult) {
				if (__SANDBOX.isFailed(aResult, aErrCallback)) {
					_fn_final ();
				} else {
					aSignedData = aResult;
					
					if (aOption & XW_FVIEW_CREATE_VID_NO_IDN) {
						aVid = "";
						_setVid("");
					} else if (aOption & XW_FVIEW_CREATE_VID_FROM_WEB) {
						_setVid(aIdn);
					} else {
						var aInputType = __SANDBOX.getInputType(aMediaID);
						var vidModule = __SANDBOX.loadModule("verifyvid");
						var vidDialog = vidModule({
							width: 350,
							height: 100,
							onconfirm: function(aResult) {
								vidDialog.dispose();
								_setVid(aResult);
							},
							oncancel: function() {
								vidDialog.dispose();
								_fn_final ();
							},
							args: {inputType: aInputType}
						});
						vidDialog.show();
					}
				}
			}
			
			_signDataCMS = function () {
				__SANDBOX.upInterface().signDataCMS (aXgateAddress,
													 aMediaID,
													 "",
													 "",
													 "",
													 aPlain,
													 aOption,
													 _CB_signDataCMS);
			}
			
			_pkcs11_process = function () {
				
				_CB_initializePKCS11FromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataCMS ();
					}
				}
				
				_CB_pkcs11MediaList = function (aResult) {
					var aMediaList = aResult.split("\t\n");
					var aIndex = aMediaID - XW_CERT_LOCATION_PKCS11;
					
					if (aMediaList.length < aIndex) {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					var aProviderName = aMediaList[aIndex - 1];
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializePKCS11FromName (aProviderName, _CB_initializePKCS11FromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_PKCS11, 0, 1, _CB_pkcs11MediaList);
			}
			
			_securedisk_process = function () {
				
				_CB_initializeSecureDiskFromName = function (aResult) {
					if (__SANDBOX.isFailed(aResult, aErrCallback)) {
						_fn_final ();
					} else {
						_signDataCMS ();
					}
				}
				
				_CB_getMediaList = function (aResult) {
					
					if (aResult == "") {
						var aErrorObject = {};
						aErrorObject.code = -1;
						aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE2;
						aErrCallback(aErrorObject);
						return;
					}
					
					aProviderName = aResult;
					
					_show_guidewindow ();
					
					__SANDBOX.upInterface().initializeSecureDiskFromName (aProviderName, _CB_initializeSecureDiskFromName);
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_SECUREDISK, 0, 1, _CB_getMediaList);
			}
			
			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}
				
				if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					_pkcs11_process ();
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					_securedisk_process ();
				} else {
					_signDataCMS ();
				}
			}
			
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aMediaID = 0;
				else
					aMediaID = aResult;
				
				if (__SANDBOX.getInputType(aMediaID) == "4pc")
					AnySign.mAnySignEnable = true;
				
				aMediaType = Math.floor(aMediaID / 100) * 100;
				
				__SANDBOX.setAfterAction (function () {
					if ((Math.floor(aMediaID /100) * 100 == XW_CERT_LOCATION_PKCS11) &&
					(__SANDBOX.cacheSmartCert == true) && (aOption & XW_OPTION_CACHE_SMARTCERT)){
						_show_guidewindow ();
						_signDataCMS ();
					} else {
						__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
					}
				}, "");
			}
			
			__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
		}, "");
	},
	
	SignFileInfo: function (aXgateAddress,
							aCAList,
							aFileInfo,
							aFileHash,
							aOption,
							aDescription,
							aLimitTrial,
							aUserCallback,
							aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		var aPlain = "";
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;
		
		aPlain = aFileInfo + "&" + aFileHash;
		
		aDialogParam.args ={funcname		: "SignFileInfo",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							plain			: aPlain,
							fileInfo		: aFileInfo,
							fileHash		: aFileHash,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	SignFileInfoAdd: function (aXgateAddress,
							   aCAList,
							   aPlain,
							   aOption,
							   aDescription,
							   aLimitTrial,
							   aUserCallback,
							   aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;

		aOption |= XW_OPTION_SIGN_ADD;
		
		aDialogParam.args ={funcname		: "SignFileInfoAdd",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	SignFileInfoWithSerial: function (aXgateAddress,
									  aCAList,
									  aCertSerial,
									  aCertLocation,
									  aFileInfo,
									  aFileHash,
									  aOption,
									  aDescription,
									  aLimitTrial,
									  aUserCallback,
									  aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		var aPlain = "";
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;
		
		aPlain = aFileInfo + "&" + aFileHash;
		
		aDialogParam.args ={funcname		: "SignFileInfoWithSerial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							fileInfo		: aFileInfo,
							fileHash		: aFileHash,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	SignFileInfoWithVID_Serial: function (aXgateAddress,
										  aCAList,
										  aCertSerial,
										  aCertLocation,
										  aFileInfo,
										  aFileHash,
										  aOption,
										  aDescription,
										  aLimitTrial,
										  aIdn,
										  aSvrCert,
										  aUserCallback,
										  aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		var aPlain = "";
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;
		
		aPlain = aFileInfo + "&" + aFileHash;
		aOption |= XW_FVIEW_CREATE_VID;
		
		aDialogParam.args ={funcname		: "SignFileInfoWithVID_Serial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							fileInfo		: aFileInfo,
							fileHash		: aFileHash,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							idn				: aIdn,
							cert			: aSvrCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	InitFileSign: function()
	{
		gPlainFilePath = gSignedFilePath = "";
	},

	SetFilePath: function(aSignFilePath, aSignedFilePath)
	{
		if (aSignFilePath == "")
			return;

		gPlainFilePath = aSignFilePath;

		if (aSignedFilePath == undefined || aSignedFilePath == null || aSignedFilePath == "")
			gSignedFilePath = aSignFilePath + ".sig";
		else
			gSignedFilePath = aSignedFilePath;
	},

	ShowSignFileSelectDialog: function(aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var aFileDialogModule = __SANDBOX.loadModule ("fileselect");
	 
				var aFileDialog = aFileDialogModule ({
					onconfirm: function(aFilePath) { 	 
									 aFileDialog.dispose();
									 aUserCallback(aFilePath);},
					oncancel: function(e) {
									 aFileDialog.dispose();
									 aUserCallback("");},
				args: { searchType:	"",
						extType: 0,
						isPFXFile: false,
						isSaveMode: false,
						defaultName: "" }
			});
			if (aFileDialog) aFileDialog.show();
		}, "");
	},

	SignFile: function (aXgateAddress,
						aCAList,
						aSignFilePath,
						aSignedFilePath,
						aOption,
						aDescription,
						aLimitTrial,
						aUserCallback,
						aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		if (!aSignFilePath || !aSignedFilePath || aSignFilePath == aSignedFilePath)
		{
			alert("[Error] Invalid Parameter.");
			return -1;
		}

		if (aSignFilePath == "")
			return;

		gPlainFilePath = aSignFilePath;

		if (aSignedFilePath == undefined || aSignedFilePath == null || aSignedFilePath == "")
			gSignedFilePath = aSignFilePath + ".sig";
		else
			gSignedFilePath = aSignedFilePath;

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname			: "SignFile",
							xgateAddress		: aXgateAddress,
							caList				: aCAList,
							plainFilePath		: aSignFilePath,
							signedFilePath		: aSignedFilePath,
							option				: aOption,
							description			: aDescription,
							keywordTryLimit		: aLimitTrial,
							userCallback		: aUserCallback,
							errCallback			: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	GetVidInfo: function (aUserCallback, aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getVidInfo(aUserCallback);
		}, "");
	},

	DeleteCertificate: function (aMediaID,
								 aSubjectRDN,
								 aUserCallback,
								 aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			aErrCallback = aErrCallback || gErrCallback_common;
	
			function _confirm() {
				var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
	
				var aCommonDialog = aCommonDialogModule ({
					onconfirm: function(e) { 
											aCommonDialog.dispose(); 
											_delete();
										  },
					oncancel: function(e) {
											aCommonDialog.dispose();
										  },
					args: {dialogType: "confirm",
						   messageType: "deleteCertificate_confirm",
						   postMessage: "<br><br>[" + aSubjectRDN + "]",
						   align: "left"}
				});
	
				if (aCommonDialog) aCommonDialog.show();
			}
	
			function _delete() {
				_CB_deleteCertificate = function (aResult) {
					if (!__SANDBOX.isFailed (aResult, aErrCallback))
						aUserCallback (aResult);
				}
	
				_CB_getCertTree = function (aCertList) {
					if (__SANDBOX.isFailed (aCertList, aErrCallback)) {
						aUserCallback (-1);
						return;
					}
	
					var aCertInfo = aCertList.split("\t\n")[0].split("$");
	
					var aIssuerRDN = aCertInfo[5];
					var aCertSerial = aCertInfo[6];
	 
					__SANDBOX.upInterface().deleteCertificate (aMediaID, 
															   3, /* aCertType */ 
															   aIssuerRDN,
															   aCertSerial,
															   _CB_deleteCertificate);
				}
				
				__SANDBOX.upInterface().getCertTree (aMediaID, 3, 14, 5, aSubjectRDN, "", _CB_getCertTree);
			}
			_confirm();
		}, "");
	},
	
	// 2013.03.11, add, requirment from kook@wooribank.com
	DeleteCertificateFromRevoke: function (aMediaID,
										   aSubjectRDN,
										   aUserCallback,
										   aErrCallback)
	{
		if (aMediaID == 1)
            AnySign.mAnySignEnable = true;
		
		__SANDBOX.setAfterAction (function () {
			aErrCallback = aErrCallback || gErrCallback_common;
	
			function _confirm() {
				var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
	
				var aCommonDialog = aCommonDialogModule ({
					onconfirm: function(e) { 
											aCommonDialog.dispose(); 
											_delete();
										  },
					oncancel: function(e) {
											aCommonDialog.dispose(); 
											//2013.04.06, add
											aUserCallback ();
										  },
					args: {dialogType: "confirm",
						   messageType: "delete_certificate_from_revoke_process",
						   postMessage: "<br><br>[" + aSubjectRDN + "]",
						   align: "left"}
				});
	
				if (aCommonDialog) aCommonDialog.show();
			}
	
			function _delete() {
				_CB_deleteCertificate = function (aResult) {
					if (!__SANDBOX.isFailed (aResult, aErrCallback))
						aUserCallback ();
				}
	
				_CB_getCertTree = function (aCertList) {
					if (aCertList.length < 1) {
						aUserCallback (-1);
						return;
					}
	
					aCertList = aCertList.split("\t\n");

                    var aCertInfo, aFound = false;
                    for (var idx = 0; idx < aCertList.length-1; idx++) {
                        aCertInfo = aCertList[idx].split("$");

                        if (aSubjectRDN == aCertInfo[2]) {
                            aFound = true;
                            break;
                        }
                    }

                    if (!aFound)
                    {
                        aUserCallback(-1);
                        return;
                    }
	
					var aIssuerRDN = aCertInfo[5];
					var aCertSerial = aCertInfo[6];
	
					__SANDBOX.upInterface().deleteCertificate (aMediaID, 
															   3, /* aCertType */ 
															   aIssuerRDN,
															   aCertSerial,
															   _CB_deleteCertificate);
				}
	 
				__SANDBOX.upInterface().getCertTree (aMediaID, 2, 0, 5, "", "", _CB_getCertTree);
			}
	
			_confirm();
		}, "");
	},

	SignDataWithVID_Serial: function (aXgateAddress,
						   				aCAList,
										aCertSerial,
										aCertLocation,
										aPlain,
										aOption,
										aDescription,
										aLimitTrial,
										aIdn,
										aSvrCert,
										aUserCallback,
										aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aOption |= XW_FVIEW_CREATE_VID;
		
		aDialogParam.args ={funcname		: "SignDataWithVID_Serial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							idn				: aIdn,
							cert			: aSvrCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	SignDataAddWithVID_Serial: function (aXgateAddress,
										 aCAList,
										 aCertSerial,
										 aCertLocation,
										 aPlain,
										 aOption,
										 aDescription,
										 aLimitTrial,
										 aIdn,
										 aSvrCert,
										 aUserCallback,
										 aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width = 437;
		aDialogParam.height = 457;
		aDialogParam.type = "sign";
		aDialogParam.args = aDialogArgs;

		aOption |= XW_FVIEW_CREATE_VID;

		aDialogParam.args ={funcname		: "SignDataAddWithVID_Serial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							idn				: aIdn,
							cert			: aSvrCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	SignDataCMSWithSerial: function(aXgateAddress,
									aCAList,
									aCertSerial,
									aCertLocation,
									aPlain,
									aOption,
									aDescription,
									aLimitTrial,
									aUserCallback,
									aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "SignDataCMSWithSerial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);

	},

	SignDataCMSWithHTMLEx: function(aXgateAddress, aCAList, aForm, aData, aCert, aOption, aDescription, aKeywordTryLimit,
								   	aUserCallback, aErrCallback)
   	{
		this.SignDataCMSWithHTMLExAndSerial(aXgateAddress, aCAList, "", 0, aForm, aData, aCert, aOption, aDescription, aKeywordTryLimit,
											aUserCallback, aErrCallback);
   	},

	SignDataCMSWithHTMLExAndSerial: function(aXgateAddress, aCAList, 
							  				 aCertSerial, aCertLocation, 
							  				 aForm, aData, aCert, aOption, aDescription, aKeywordTryLimit,
							  				 aUserCallback, aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 515;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "SignDataCMSWithHTMLExAndSerial",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							form			: aForm,
							data			: aData,
							cert			: aCert,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aKeywordTryLimit,
							htmlData		: "",
                            userCallback	: aUserCallback,
                            errCallback		: aErrCallback}

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	MultiSignTable: new function()
	{
		var __MultiSignTable = new Object();

		return {
			init: function (aMultiSignID)
			{
				if (__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("MultiSignID is already exist");
					return;
				}

				__MultiSignTable[aMultiSignID] = new Object();
				__MultiSignTable[aMultiSignID]['plain'] = new Array();
				__MultiSignTable[aMultiSignID]['plain2'] = new Array();
				__MultiSignTable[aMultiSignID]['signed'] = new Array();
			},

			initValue: function (aMultiSignID)
			{
				var aSize = this.sizeOfPlain(aMultiSignID);
				for (var i = 0; i < aSize; i ++)
					__MultiSignTable[aMultiSignID]['signed'].push("");
			},

			setPlainData: function (aMultiSignID,
								   	aPlainData,
									aPlainData2)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:setPlainData:"+aMultiSignID);
					return;
				}

				__MultiSignTable[aMultiSignID]['plain'].push(aPlainData);
				if (aPlainData2 != undefined)
					__MultiSignTable[aMultiSignID]['plain2'].push(aPlainData2);
			},

			setSignedData: function (aMultiSignID,
								   	aPlainData,
									aIndex)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:setSignedData:"+aMultiSignID);
					return;
				}

				if (typeof aIndex != "undefined")
					__MultiSignTable[aMultiSignID]['signed'][aIndex] = aPlainData;
				else
					__MultiSignTable[aMultiSignID]['signed'].push(aPlainData);
			},

			getPlainData: function (aMultiSignID,
								   	 aIndex)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:getPlainData:"+aMultiSignID);
					return;
				}
				return __MultiSignTable[aMultiSignID]['plain'][aIndex];
			},

			getPlainData2: function (aMultiSignID,
				   	 				 aIndex)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:getPlainData:"+aMultiSignID);
					return;
				}
				return __MultiSignTable[aMultiSignID]['plain2'][aIndex];
			},

			getSignedData: function (aMultiSignID,
								   	 aIndex)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:getSignedData:"+aMultiSignID);
					return;
				}
				return __MultiSignTable[aMultiSignID]['signed'][aIndex];
			},

			clear: function (aMultiSignID)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:clear:"+aMultiSignID);
					return;
				}

				delete __MultiSignTable[aMultiSignID]['signed'];
				delete __MultiSignTable[aMultiSignID]['plain'];
				delete __MultiSignTable[aMultiSignID]['plain2'];
				delete __MultiSignTable[aMultiSignID];
			},

			sizeOfPlain: function (aMultiSignID)
			{
				if (!__MultiSignTable.hasOwnProperty(aMultiSignID))
				{
					alert("Unknown MultiSignID:sizeOfPlain:"+aMultiSignID);
					return;
				}

				return __MultiSignTable[aMultiSignID]['plain'].length;
			}
		}
	},

	MultiSignInit: function ()
	{
		var aMultiSignID = new Date().getTime();

		this.MultiSignTable.init(aMultiSignID);

		return aMultiSignID;
	},

	SetMultiSignData: function (aMultiSignID,
								aPlain,
								aPlain2)
	{
		this.MultiSignTable.setPlainData(aMultiSignID, aPlain, aPlain2);
	},

	MultiSignEx: function (aMultiSignID,
						   aXgateAddress,
						   aCAList,
						   aOption,
						   aDescription,
						   aLimitTrial,
						   aUserCallback,
						   aErrCallback) 
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "MultiSignEx",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	MultiSignExWithSerial: function (aMultiSignID,
									 aXgateAddress,
									 aCAList,
									 aCertSerial,
									 aCertLocation,
									 aOption,
									 aDescription,
									 aLimitTrial,
									 aUserCallback,
									 aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "MultiSignExWithSerial",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};


		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	MultiSignExWithVID_Serial: function (aMultiSignID,
									 aXgateAddress,
									 aCAList,
									 aCertSerial,
									 aCertLocation,
									 aOption,
									 aDescription,
									 aCert,
									 aLimitTrial,
									 aUserCallback,
									 aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;
		
		aOption |= XW_FVIEW_CREATE_VID;

		aDialogParam.args ={funcname		: "MultiSignExWithVID_Serial",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							option			: aOption,
							description		: aDescription,							
							keywordTryLimit	: aLimitTrial,
							cert			: aCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};


		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	MultiFileSign: function (aMultiSignID,
						     aXgateAddress,
							 aCAList,
							 aOption,
							 aDescription,
							 aLimitTrial,
							 aUserCallback,
							 aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values
		aDialogParam.width = 437;
		aDialogParam.height = 457;
		aDialogParam.type = "sign-no-pfx";
		aDialogParam.args = aDialogArgs;

		aDialogParam.args = {funcname			: "MultiFileSign",
							 multiSignID		: aMultiSignID,
							 xgateAddress		: aXgateAddress,
							 caList				: aCAList,
							 option				: aOption,
							 description		: aDescription,
							 keywordTryLimit	: aLimitTrial,
							 userCallback		: aUserCallback,
							 errCallback		: aErrCallback,
							 multiSignTable		: this.MultiSignTable};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	MultiSignFileInfo: function (aMultiSignID,
								 aXgateAddress,
								 aCAList,
								 aOption,
								 aDescription,
								 aLimitTrial,
								 aUserCallback,
								 aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;
		
		aDialogParam.args ={funcname		: "MultiSignFileInfo",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};
		
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	MultiSignFileInfoWithSerial: function (aMultiSignID,
										   aXgateAddress,
										   aCAList,
										   aCertSerial,
										   aCertLocation,
										   aOption,
										   aDescription,
										   aLimitTrial,
										   aUserCallback,
										   aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;
		
		aDialogParam.args ={funcname		: "MultiSignFileInfoWithSerial",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};
		
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	MultiSignFileInfoWithVID_Serial: function (aMultiSignID,
											   aXgateAddress,
											   aCAList,
											   aCertSerial,
											   aCertLocation,
											   aOption,
											   aDescription,
											   aLimitTrial,
											   aIdn,
											   aSvrCert,
											   aUserCallback,
											   aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		var aPlain = "";
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;

		aPlain = aFileInfo + "&" + aFileHash;
		aOption |= XW_FVIEW_CREATE_VID;
		
		aDialogParam.args ={funcname		: "MultiSignFileInfoWithVID_Serial",
							multiSignID		: aMultiSignID,
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							plain			: aPlain,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							idn				: aIdn,
							cert			: aSvrCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback,
							multiSignTable	: this.MultiSignTable};
		
		
		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;
		
		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	GetMultiSignedData: function (aMultiSignID,
								  aIndex)
	{
		return this.MultiSignTable.getSignedData(aMultiSignID, aIndex);
	},

	MultiSignFinal: function (aMultiSignID)
	{
		this.MultiSignTable.clear(aMultiSignID);
	},

	RequestCertificate: function(aCAPort, aCAAddr, aRefNum, aAuthCode, aCAType, aUserCallback, aErrCallback, aUbiKeyUserCallback)
	{
		this.RequestCertificateEx(aCAPort, aCAAddr, aRefNum, aAuthCode, aCAType, 0, "", "", aUserCallback, aErrCallback, aUbiKeyUserCallback);
	},

	RequestCertificateEx: function(aCAPort, aCAAddr, aRefNum, aAuthCode, aCAType, aReqOption, aCAName, aRAName, aUserCallback, aErrCallback, aUbiKeyUserCallback)
	{
		this.RequestCertificateEx2 (aCAPort, aCAAddr, aRefNum, aAuthCode, aCAType, aReqOption, aCAName, aRAName, 0, aUserCallback, aErrCallback, aUbiKeyUserCallback);
	},

	RequestCertificateEx2: function(aCAPort, aCAAddr, aRefNum, aAuthCode, aCAType, aReqOption, aCAName, aRAName, aSaveOption, aUserCallback, aErrCallback, aUbiKeyUserCallback)
	{
		this.RequestCertificateEx2WithWebCMP (aCAPort, null, aCAAddr, null, null, aRefNum, aAuthCode, aCAType, null, null, aReqOption, aCAName, aRAName, aSaveOption, aUserCallback, aErrCallback, aUbiKeyUserCallback);
	},

	RequestCertificateEx2WithWebCMP: function(aCAPort, aCAHTTPPort, aCAAddr, aCAHTTPAddr, aCAHTTPService, aRefNum, aAuthCode, aCAType, aWorkerNum, aWorkerScript, aReqOption, aCAName, aRAName, aSaveOption, aUserCallback, aErrCallback, aUbiKeyUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var aKeyword;
			var aMediaID;
			var aMediaType;
			var aProviderName;
			var aUbiKeyCallback = false;
	
			var aGuideModule;
			var aGuideDialog = null;
			
			if (aErrCallback == undefined)
			{
				aErrCallback = gErrCallback_common;
			}
			
			/******************************************************************************************
			 * guidewindow function 
			 ******************************************************************************************/
			 _show_guidewindow = function ()
 	 		{
 				if (aGuideDialog) return;
 				
 				aGuideModule = __SANDBOX.loadModule("guidewindow");
 	 			aGuideDialog = aGuideModule({
 	 				type: "loading",
 	 				args: "",
 	 				onconfirm: "",
 	 				oncancel: function () {aGuideDialog.dispose();}
 	 			});
 	 			aGuideDialog.show();
 	 		}
 			
 			_close_guidewindow = function ()
 			{
 				if (aGuideDialog) {
 					aGuideDialog.dispose ();
 					aGuideDialog = null;
 				}
 			}
			/******************************************************************************************
			 * final function 
			 ******************************************************************************************/
			_fn_final = function (aCallback)
			{
				var _final_callback = function () {
					_close_guidewindow ();
					
					if (aCallback)
						aCallback ();
				}
				
				if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					__SANDBOX.upInterface().logoutStoreToken(aMediaID, _final_callback);
				} else if (aMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _final_callback);
				} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aProviderName, _final_callback);
				} else {
					_final_callback ();
				}
			}
			/******************************************************************************************
			 * ì¸ì¦ì ì ì¥ ìì¹ ì í
			 ******************************************************************************************/
			var _certsaveloc = function()
			{
				var _certsaveloc_result = function(result) {
					aMediaID = result;
					aMediaType = Math.floor(aMediaID /100) * 100;
		
					if (aMediaType == XW_CERT_LOCATION_PKCS11)
						_hsmselect();
					else if (aMediaType == XW_CERT_LOCATION_SECUREDISK)
						_securedisk();
					else if (aMediaType == XW_CERT_LOCATION_ICCARD)
						_iccardlist();
					else if (aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
						_kepcoiccard();
					else
						_savepasswd();
				}
				
				var certsavelocModule = __SANDBOX.loadModule("certsaveloc");
				var certsavelocDialog = certsavelocModule({
					args: { type: "request" },
					width: 350,
					height: 355,
					onconfirm: function(result) {
						AnySign.SetUITarget (certsavelocDialog.getUITarget());
						certsavelocDialog.dispose();
						_certsaveloc_result(result);
					},
					oncancel: function(e) {
						certsavelocDialog.dispose();
					}
				});
				certsavelocDialog.show();
			}
			/******************************************************************************************
			 * ì¸ì¦ì í¨ì¤ìë ìë ¥
			 ******************************************************************************************/
			var _savepasswd = function()
			{
				var _securedisk_result = function (aLoginResult)
				{
					if (aLoginResult != 0) {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_savepasswd();
						}
						_fn_final (_final_callback);
					} else {
						_request();
					}
				}
				
				var aInputType = __SANDBOX.getInputType(aMediaID);
				
				var savepassModule = __SANDBOX.loadModule("savepasswd");
				var savepassDialog = savepassModule({
					width: 350, height: 190,
					onconfirm: function(result)
					{
						savepassDialog.dispose();
						aKeyword = result;
						
						if (aMediaType == XW_CERT_LOCATION_SECUREDISK)
						{
							_show_guidewindow ();
							
							__SANDBOX.upInterface().loginSecureDiskFromIndex (aMediaID,
																			  aKeyword,
																			  "",
																			  "",
																			  "",
																			  1,
																			  _securedisk_result);
						}
						else
						{
							_request();
						}
					},
					oncancel: function(e) {
						savepassDialog.dispose()
						_fn_final ();
					},
					args: {messageType: "request", inputType: aInputType}
				});
				savepassDialog.show();
			}
			/******************************************************************************************
			 * ìì ëì¤í¬ ì¤ì¹ íì¸
			 ******************************************************************************************/
			var _securedisk = function()
			{
				_securedisk_install = function()
				{
					var aURL = AnySign.mSecureDiskData.mInstallURL;
					var aOption = AnySign.mSecureDiskData.mInstallPageOption;
					if (aURL == null || aURL == undefined || aURL == "")
					{
						if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
							alert (XW_SECUREDISK_NOTABLE_MSG);
						else
							alert (XW_SECUREDISK_NOTABLE_MSG_en);
					}
					else
					{
						var aConfirmMsg;
						if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
							aConfirmMsg = XW_SECUREDISK_INSTALL_MSG;
						else
							aConfirmMsg = XW_SECUREDISK_INSTALL_MSG_en;
						
						if (confirm(aConfirmMsg) == true)
							window.open (aURL, 'DownLoadPage', aOption);
					}
				}
				
				_initializeSecureDiskFromName = function (result)
				{
					if (result == 0)
					{
						_savepasswd();
					}
					else
					{
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						if (aErrorObject.code == XW_ERROR_SECUREDISK_LOAD_FAILED) {
							_securedisk_install ();
						} else {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
						}
					}
					
				}
				
				_getMediaList = function (providerName)
				{
					if (providerName == "")
					{
						_securedisk_install ();
					}
					else
					{
						aMediaID = aMediaID + 1;
						aProviderName = providerName;
						
						__SANDBOX.upInterface().initializeSecureDiskFromName(aProviderName, _initializeSecureDiskFromName);
					}
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_SECUREDISK, 0, 1, _getMediaList);
			}
			/******************************************************************************************
			 * ë³´ìí í° ì¢ë¥ ì í
			 ******************************************************************************************/
			var _hsmselect = function()
			{
				var hsmselectModule = __SANDBOX.loadModule("hsmselect");
				var hsmselectDialog = hsmselectModule({
					width: 335, height: 200,
					onconfirm: function(result, aProviderName)
					{
						aMediaID = aMediaID + result;
						hsmselectDialog.dispose();
						AnySign.SetUITarget(hsmselectDialog.getUITarget());
						if(result < 0){
							return;
						}
						
						_verifyhsm ();
					},
					oncancel: function(e) {hsmselectDialog.dispose()}
				});
				hsmselectDialog.show();
			}
			/******************************************************************************************
			 * ë³´ìí í° íë²í¸ ìë ¥
			 ******************************************************************************************/
			var _verifyhsm = function()
			{
				var _loginPKCS11FromIndex_callback = function(result) {
					_setSecureInput_callback = function ()
					{
						_request();
					}
					
					if(result != 0)
					{
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_verifyhsm ();
						}
						_fn_final (_final_callback);
					}
					else
					{
						__SANDBOX.upInterface().setSecureInput ("", _setSecureInput_callback);
					}
				}
				
				var verifyhsmModule = __SANDBOX.loadModule("verifyhsm");
				var verifyhsmDialog = verifyhsmModule({
						args: {messageType: "request" },
						onconfirm: function(result) {
							verifyhsmDialog.dispose();
							
							_show_guidewindow ();
							
							__SANDBOX.upInterface().loginPKCS11FromIndex(aMediaID, result, _loginPKCS11FromIndex_callback);
						},
						oncancel: function(e) { 
							verifyhsmDialog.dispose();
							_fn_final ();
						}
				});
				verifyhsmDialog.show();
			}
			/******************************************************************************************
			 * ì ì¥í í° ìë ì í
			 ******************************************************************************************/
			var _iccardselect = function() {
				aMediaID = XW_CERT_LOCATION_ICCARD + 1;
				aMediaType = XW_CERT_LOCATION_ICCARD;
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_ICCARD, 0, 1, _iccard_login);
			}
			/******************************************************************************************
			 * ì ì¥í í° ì¢ë¥ ì í
			 ******************************************************************************************/
			var _iccardlist = function() {
				var iccardlistModule = __SANDBOX.loadModule("iccardlist");
				var iccardlistDialog = iccardlistModule({
					args: {},
					onconfirm: function (aResult) {
						iccardlistDialog.dispose();
						aMediaID = XW_CERT_LOCATION_ICCARD + aResult;
						_iccard_login();
					},
					oncancel: function () {
						iccardlistDialog.dispose();
					}
				});
				iccardlistDialog.show();
			}
			/******************************************************************************************
			 * KEPCO IC ì¹´ë ì¤ì¹ íì¸
			 ******************************************************************************************/
			var _kepcoiccard = function () {
				_CB_initStoreToken = function (aResult)
				{
					if (!__SANDBOX.isFailed(aResult, aErrCallback)) {
						aMediaID = XW_CERT_LOCATION_KEPCOICCARD + 1;
						_iccard_login();
					}
				}
				__SANDBOX.upInterface().initStoreToken(XW_CERT_LOCATION_KEPCOICCARD + 1, _CB_initStoreToken);
			}
			/******************************************************************************************
			 * ì ì¥í í° ìí¸ ìë ¥
			 ******************************************************************************************/
			var _iccard_login = function ()
			{
				var loginStoreToken_callback = function (result)
				{
					if (result!= 0) {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_iccard_login();
						}
						_fn_final (_final_callback);
					}
					else
					{
						_savepasswd();
					}
				}
				
				var aICCardType;
				if (aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
					aICCardType = "kepco";
				else
					aICCardType = "iccard";
				
				var iccardModule = __SANDBOX.loadModule("iccard");
				var iccardDialog = iccardModule({
					type: aICCardType,
					args: { },
					onconfirm: function (aPin) {
						iccardDialog.dispose();
						
						_show_guidewindow ();
						
						__SANDBOX.upInterface().loginStoreToken(aMediaID, aPin, 1, loginStoreToken_callback);
					},
					oncancel: function () {
						iccardDialog.dispose();
					}
				});
				iccardDialog.show();
			}
			/******************************************************************************************
			 * UbiKey callback function
			 ******************************************************************************************/
			var UbiKey_callbackFunction = function (result) {
				aUbiKeyUserCallback(result);
			}
			/******************************************************************************************
			 * ì¸ì¦ì ë°ê¸ 
			 ******************************************************************************************/
			var _request = function () {
				
				_requestCallback = function (result)
				{
					_close_guidewindow ();
					
					if (__SANDBOX.isFailed (result, aErrCallback))
					{
						_fn_final ();
					}
					else
					{
						var _final_callback = function () {
							if (aUbiKeyCallback == false)
								aUserCallback (0);
						}
						_fn_final (_final_callback);
					}
				}
				
				_show_guidewindow ();
				
				if(aMediaID == XW_CERT_LOCATION_YESSIGNM + 1 && aUbiKeyUserCallback != undefined) // Ubikey 1101
				{
					if (AnySign.mUbikeyData.mPlatForm == "Linux" || AnySign.mUbikeyData.mPlatForm == "Mac")
					{
						aUbiKeyCallback = true;
						__SANDBOX.setUbiKeyFunction(aUbiKeyUserCallback);
					}
				}
				
				if (!AnySign.mAnySignEnable)
				{
					var tempCAHTTPPort = "";

					if (aCAHTTPPort !== undefined)
					{
						tempCAHTTPPort = ":"
						tempCAHTTPPort += typeof aCAHTTPPort == "string" ? aCAHTTPPort : aCAHTTPPort.toString();
					}

					if (aCAHTTPService !== undefined)
					{
						if (aCAHTTPService.charAt(0) !== "/")
							tempCAHTTPPort += "/" + aCAHTTPService;
						else
							tempCAHTTPPort += aCAHTTPService;
					}
					
					aCAPort = tempCAHTTPPort;
					aCAAddr = aCAHTTPAddr;
				}
				
				__SANDBOX.upInterface().requestCertificate (aCAPort,
															aCAAddr,
															aMediaID,
															aRefNum,
															aAuthCode,
															aCAType,
															aKeyword,
															aWorkerNum,
															aWorkerScript,
															aReqOption,
															aCAName,
															aRAName,
															_requestCallback);
			}
			/******************************************************************************************
			 * Excute
			 ******************************************************************************************/
			if (AnySign.mShowLocationDialog)
			{
				if (aSaveOption == 2)
				{
					aMediaID = XW_CERT_LOCATION_LOCALSTORAGE;
					_savepasswd();
				}					
				else
				{
					_certsaveloc();
				}
			}
			else
				_iccardselect();
		}, "");
	},

	RenewCertificate: function(aCAPort, aCAAddr, aCertLocation, aCAType, aKeywordTryLimit, aUserCallback, aErrCallback) {
		this.RenewCertificateWithSerial (aCAPort, aCAAddr, "", aCertLocation, aCAType, aKeywordTryLimit, aUserCallback, aErrCallback);
	},

	RenewCertificateWithSerial: function(aCAPort, aCAAddr, aCertSerial, aCertLocation, aCAType, aKeywordTryLimit, aUserCallback, aErrCallback) {
		this.RenewCertificateWithSerialWithWebCMP (aCAPort, null, aCAAddr, null, null, aCertSerial, aCertLocation, aCAType, aKeywordTryLimit, null, null, aUserCallback, aErrCallback);
	},

	RenewCertificateWithSerialWithWebCMP: function(aCAPort, aCAHTTPPort, aCAAddr, aCAHTTPAddr, aCAHTTPService, aCertSerial, aCertLocation, aCAType, aKeywordTryLimit, aWorkerNum, aWorkerScript, aUserCallback, aErrCallback) {
		var aDialogParam = {};
		var aDialogArgs = {};
		var aGuideModule;
		var aGuideDialog = null;
		var aMediaID;
		var aMediaType;
		var aProviderName;
		var aTargetMediaID = -1;
		var aTargetMediaType;
		var aTargetProviderName;
		var aShowRenewCertSaveLoc;
		
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}
		
		/******************************************************************************************
		 * guidewindow function 
		 ******************************************************************************************/
		__show_guidewindow = function ()
 		{
			if (aGuideDialog) return;
			
			aGuideModule = __SANDBOX.loadModule("guidewindow");
 			aGuideDialog = aGuideModule({
 				type: "loading",
 				args: "",
 				onconfirm: "",
 				oncancel: function () {aGuideDialog.dispose();}
 			});
 			aGuideDialog.show();
 		}
		
		__close_guidewindow = function ()
		{
			if (aGuideDialog) {
				aGuideDialog.dispose ();
				aGuideDialog = null;
			}
		}
		/******************************************************************************************
		 * final function 
		 ******************************************************************************************/
		__fn_final = function (aCallback)
		{
			var _final_callback = function () {
				__close_guidewindow ();
				
				if (aCallback)
					aCallback ();
			}
			
			var _final_target = function () {
				if (aTargetMediaType == XW_CERT_LOCATION_ICCARD || aTargetMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
					__SANDBOX.upInterface().logoutStoreToken(aTargetMediaID, _final_callback);
				} else if (aTargetMediaType == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aTargetMediaID, _final_callback);
				} else if (aTargetMediaType == XW_CERT_LOCATION_SECUREDISK) {
					__SANDBOX.upInterface().finalizeSecureDiskFromName (aTargetProviderName, _final_callback);
				} else {
					_final_callback ();
				}
			}
			
			if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
				__SANDBOX.upInterface().logoutStoreToken(aMediaID, _final_target);
			} else if (aMediaType == XW_CERT_LOCATION_PKCS11) {
				__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _final_target);
			} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
				__SANDBOX.upInterface().finalizeSecureDiskFromName (aProviderName, _final_target);
			} else {
				_final_target ();
			}
		}
		/******************************************************************************************
		 * renewCertificate callback function 
		 ******************************************************************************************/
		_renewCertificate = function (result)
		{
			if (!__SANDBOX.isFailed(result, aErrCallback))
			{
				var _final_callback = function () {
					aDialogParam.args.userCallback(result);
				}
				__fn_final (_final_callback);
			} else {
				__fn_final ();
			}
		}
		/******************************************************************************************/

		function completeCallback(aDialogParam)
		{
			if (aDialogParam.args.dialog)
				aGuideDialog = aDialogParam.args.dialog;
			else
				__show_guidewindow ();
			
			var caPort, caAddr;
			if (AnySign.mAnySignEnable)
			{
				caPort = aDialogParam.args.caPort;
				caAddr = aDialogParam.args.caAddr;
			}
			else
			{

				var tempCAHTTPPort = "";

				if (aDialogParam.args.caHTTPPort !== undefined)
				{
					tempCAHTTPPort = ":"
					tempCAHTTPPort += typeof aDialogParam.args.caHTTPPort == "string" ? aDialogParam.args.caHTTPPort : aDialogParam.args.caHTTPPort.toString();
				}

				if (aDialogParam.args.caHTTPService !== undefined)
				{
					if (aDialogParam.args.caHTTPService.charAt(0) !== "/")
						tempCAHTTPPort += "/" + aDialogParam.args.caHTTPService;
					else
						tempCAHTTPPort += aDialogParam.args.caHTTPService;
				}
				
				caPort = tempCAHTTPPort;
				caAddr = aDialogParam.args.caHTTPAddr;
			}
			
			if (aTargetMediaID == -1 || aDialogParam.args.mediaID == aTargetMediaID) {
				__SANDBOX.upInterface().renewCertificate (caPort,
														  caAddr,
														  aDialogParam.args.issuerRDN,
														  aDialogParam.args.certSerial,
														  aDialogParam.args.mediaID,
														  aDialogParam.args.caType,
														  aDialogParam.args.oldPasswd,
														  aDialogParam.args.newPasswd,
														  aDialogParam.args.workerNum,
														  aDialogParam.args.workerScript,
														  aDialogParam.args.option,
														  _renewCertificate);
			} else {
				__SANDBOX.upInterface().renewCertificateEx (caPort,
															caAddr,
															aDialogParam.args.issuerRDN,
															aDialogParam.args.certSerial,
															aDialogParam.args.mediaID,
															aTargetMediaID,
															aDialogParam.args.caType,
															aDialogParam.args.oldPasswd,
															aDialogParam.args.newPasswd,
															aDialogParam.args.option,
															_renewCertificate);
			}
		}

		function showSavePasswdDialog(aDialogParam)
		{
			aMediaID = aDialogParam.args.mediaID;
			aMediaType = Math.floor(aMediaID / 100) * 100;
			aShowRenewCertSaveLoc = AnySign.mAnySignEnable && AnySign.mShowRenewCertSaveLoc;
			AnySign.mAnySignLiteSupport = false;
			
			var _loginStoreToken = function (result)
			{
				__close_guidewindow ();
				
				if (!__SANDBOX.isFailed(result, aErrCallback)) {
					if (aShowRenewCertSaveLoc)
						_certsaveloc ();
					else
						_savepasswd_dialog ();
				} else {
					_iccard_pin_dialog ();
				}
			}
			
			var _iccard_pin_dialog = function ()
			{
				if (aMediaType == XW_CERT_LOCATION_KEPCOICCARD)
					aICCardType = "kepco";
				else
					aICCardType = "iccard";
				
				var iccardModule = __SANDBOX.loadModule("iccard");
				var iccardDialog = iccardModule({
					type: aICCardType,
					args: { },
					onconfirm: function (aPin) {
						iccardDialog.dispose();
						__show_guidewindow ();
						__SANDBOX.upInterface().loginStoreToken(aMediaID, aPin, 1, _loginStoreToken);
					},
					oncancel: function () {
						iccardDialog.dispose();
						__fn_final ();
					}
				});
				iccardDialog.show();
			}
			
			var _savepasswd_dialog = function ()
			{
				var aInputType = __SANDBOX.getInputType(aMediaID);
				var savepasswdModule = __SANDBOX.loadModule("savepasswd");
				var savepasswdDialog = savepasswdModule({
					width: 350,
					height: 190,
					onconfirm: function(aResult) {
						savepasswdDialog.dispose();
						aDialogParam.args.newPasswd = aResult;
						aDialogParam.args.completeCallback(aDialogParam);
					},
					oncancel: function() {
						savepasswdDialog.dispose();
						__fn_final ();
					},
					args: {messageType: "renew", inputType: aInputType}
					});
				savepasswdDialog.show();
			}
			
			/******************************************************************************************
			 * ì¸ì¦ì ì ì¥ ìì¹ ì í
			 ******************************************************************************************/
			var _certsaveloc = function()
			{
				var _certsaveloc_result = function(result) {
					aTargetMediaID = result;
					aTargetMediaType = Math.floor(aTargetMediaID /100) * 100;
					
					if (aMediaID == aTargetMediaID) {
						if (aTargetMediaType == XW_CERT_LOCATION_PKCS11 || aTargetMediaType == XW_CERT_LOCATION_SECUREDISK) {
							aDialogParam.args.newPasswd = "";
							aDialogParam.args.completeCallback(aDialogParam);
						}
						else
							_savepasswd();
					}
					else if (aTargetMediaType == XW_CERT_LOCATION_PKCS11)
						_hsmselect();
					else if (aTargetMediaType == XW_CERT_LOCATION_SECUREDISK)
						_securedisk();
					else if (aTargetMediaType == XW_CERT_LOCATION_ICCARD)
						_iccardlist();
					else if (aTargetMediaType == XW_CERT_LOCATION_KEPCOICCARD)
						_kepcoiccard();
					else
						_savepasswd();
				}
				
				var certsavelocModule = __SANDBOX.loadModule("certsaveloc");
				var certsavelocDialog = certsavelocModule({
					args: { type: "request" },
					width: 350,
					height: 355,
					onconfirm: function(result) {
						AnySign.SetUITarget (certsavelocDialog.getUITarget());
						certsavelocDialog.dispose();
						_certsaveloc_result(result);
					},
					oncancel: function(e) {
						certsavelocDialog.dispose();
					}
				});
				certsavelocDialog.show();
			}
			/******************************************************************************************
			 * ì¸ì¦ì í¨ì¤ìë ìë ¥
			 ******************************************************************************************/
			var _savepasswd = function()
			{
				var _securedisk_result = function (aLoginResult)
				{
					if (aLoginResult != 0) {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_savepasswd();
						}
						__fn_final (_final_callback);
					} else {
						aDialogParam.args.completeCallback(aDialogParam);
					}
				}
				
				var aInputType = __SANDBOX.getInputType(aTargetMediaID);
				
				var savepassModule = __SANDBOX.loadModule("savepasswd");
				var savepassDialog = savepassModule({
					width: 350, height: 190,
					onconfirm: function(result)
					{
						savepassDialog.dispose();
						aDialogParam.args.newPasswd = result;
						
						if (aTargetMediaType == XW_CERT_LOCATION_SECUREDISK)
						{
							__show_guidewindow ();
							
							__SANDBOX.upInterface().loginSecureDiskFromIndex (aTargetMediaID,
																			  result,
																			  "",
																			  "",
																			  "",
																			  1,
																			  _securedisk_result);
						}
						else
						{
							aDialogParam.args.completeCallback(aDialogParam);
						}
					},
					oncancel: function(e) {
						savepassDialog.dispose()
						__fn_final ();
					},
					args: {messageType: "request", inputType: aInputType}
				});
				savepassDialog.show();
			}
			/******************************************************************************************
			 * ìì ëì¤í¬ ì¤ì¹ íì¸
			 ******************************************************************************************/
			var _securedisk = function()
			{
				_securedisk_install = function() {
					var aURL = AnySign.mSecureDiskData.mInstallURL;
					var aOption = AnySign.mSecureDiskData.mInstallPageOption;
					if (aURL == null || aURL == undefined || aURL == "") {
						if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
							alert (XW_SECUREDISK_NOTABLE_MSG);
						else
							alert (XW_SECUREDISK_NOTABLE_MSG_en);
					} else {
						var aConfirmMsg;
						if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
							aConfirmMsg = XW_SECUREDISK_INSTALL_MSG;
						else
							aConfirmMsg = XW_SECUREDISK_INSTALL_MSG_en;
						
						if (confirm(aConfirmMsg) == true)
							window.open (aURL, 'DownLoadPage', aOption);
					}
				}
				
				_initializeSecureDiskFromName = function (result) {
					if (result == 0) {
						_savepasswd();
					} else {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						if (aErrorObject.code == XW_ERROR_SECUREDISK_LOAD_FAILED) {
							_securedisk_install ();
						} else {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
						}
					}
					
				}
				
				_getMediaList = function (providerName) {
					if (providerName == "") {
						_securedisk_install ();
					} else {
						aTargetMediaID = aTargetMediaID + 1;
						aTargetProviderName = providerName;
						__SANDBOX.upInterface().initializeSecureDiskFromName(providerName, _initializeSecureDiskFromName);
					}
				}
				
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_SECUREDISK, 0, 1, _getMediaList);
			}
			/******************************************************************************************
			 * ë³´ìí í° ì¢ë¥ ì í
			 ******************************************************************************************/
			var _hsmselect = function()
			{
				var hsmselectModule = __SANDBOX.loadModule("hsmselect");
				var hsmselectDialog = hsmselectModule({
					width: 335, height: 200,
					onconfirm: function(result, providerName) {
						aTargetMediaID = aTargetMediaID + result;
						hsmselectDialog.dispose();
						AnySign.SetUITarget(hsmselectDialog.getUITarget());
						if(result < 0) {
							return;
						}
						_verifyhsm ();
					},
					oncancel: function(e) {hsmselectDialog.dispose()}
				});
				hsmselectDialog.show();
			}
			/******************************************************************************************
			 * ë³´ìí í° íë²í¸ ìë ¥
			 ******************************************************************************************/
			var _verifyhsm = function()
			{
				var _loginPKCS11FromIndex_callback = function(result) {
					if(result != 0) {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_verifyhsm ();
						}
						__fn_final (_final_callback);
					} else {
						aDialogParam.args.newPasswd = "";
						aDialogParam.args.completeCallback(aDialogParam);
					}
				}
				
				var verifyhsmModule = __SANDBOX.loadModule("verifyhsm");
				var verifyhsmDialog = verifyhsmModule({
						args: {messageType: "request" },
						onconfirm: function(result) {
							verifyhsmDialog.dispose();
							__show_guidewindow ();
							__SANDBOX.upInterface().loginPKCS11FromIndex(aTargetMediaID, result, _loginPKCS11FromIndex_callback);
						},
						oncancel: function(e) { 
							verifyhsmDialog.dispose();
							__fn_final ();
						}
				});
				verifyhsmDialog.show();
			}
			/******************************************************************************************
			 * ì ì¥í í° ìë ì í
			 ******************************************************************************************/
			var _iccardselect = function()
			{
				aTargetMediaID = XW_CERT_LOCATION_ICCARD + 1;
				aTargetMediaType = XW_CERT_LOCATION_ICCARD;
				__SANDBOX.upInterface().getMediaList(XW_CERT_LOCATION_ICCARD, 0, 1, _iccard_login);
			}
			/******************************************************************************************
			 * ì ì¥í í° ì¢ë¥ ì í
			 ******************************************************************************************/
			var _iccardlist = function()
			{
				var iccardlistModule = __SANDBOX.loadModule("iccardlist");
				var iccardlistDialog = iccardlistModule({
					args: {},
					onconfirm: function (aResult) {
						iccardlistDialog.dispose();
						aTargetMediaID = XW_CERT_LOCATION_ICCARD + aResult;
						_iccard_login();
					},
					oncancel: function () {
						iccardlistDialog.dispose();
					}
				});
				iccardlistDialog.show();
			}
			/******************************************************************************************
			 * KEPCO IC ì¹´ë ì¤ì¹ íì¸
			 ******************************************************************************************/
			var _kepcoiccard = function ()
			{
				_CB_initStoreToken = function (aResult) {
					if (!__SANDBOX.isFailed(aResult, aErrCallback)) {
						aTargetMediaID = XW_CERT_LOCATION_KEPCOICCARD + 1;
						_iccard_login();
					}
				}
				__SANDBOX.upInterface().initStoreToken(XW_CERT_LOCATION_KEPCOICCARD + 1, _CB_initStoreToken);
			}
			/******************************************************************************************
			 * ì ì¥í í° ìí¸ ìë ¥
			 ******************************************************************************************/
			var _iccard_login = function ()
			{
				var loginStoreToken_callback = function (result) {
					if (result!= 0) {
						var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
						var _final_callback = function () {
							alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));
							_iccard_login();
						}
						__fn_final (_final_callback);
					} else {
						_savepasswd();
					}
				}
				
				var aICCardType;
				if (aTargetMediaType == XW_CERT_LOCATION_KEPCOICCARD)
					aICCardType = "kepco";
				else
					aICCardType = "iccard";
				
				var iccardModule = __SANDBOX.loadModule("iccard");
				var iccardDialog = iccardModule({
					type: aICCardType,
					args: { },
					onconfirm: function (aPin) {
						iccardDialog.dispose();
						__show_guidewindow ();
						__SANDBOX.upInterface().loginStoreToken(aTargetMediaID, aPin, 1, loginStoreToken_callback);
					},
					oncancel: function () {
						iccardDialog.dispose();
					}
				});
				iccardDialog.show();
			}
			/******************************************************************************************/
			
			if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
				_iccard_pin_dialog ();
			} else if (aShowRenewCertSaveLoc) {
				if (aDialogParam.args.dialog) {
					aDialogParam.args.dialog.dispose ();
					aDialogParam.args.dialog = null;
				}
				_certsaveloc ();
			} else {
				if (aMediaType == XW_CERT_LOCATION_PKCS11 || aMediaType == XW_CERT_LOCATION_SECUREDISK) {
					aDialogParam.args.newPasswd = "";
					aDialogParam.args.completeCallback(aDialogParam);
				} else {
					_savepasswd_dialog ();
				}
			}
		}
		
		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 410;
		aDialogParam.type	= "renew";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname			: "RenewCertificate",
							caPort				: aCAPort    ,
							caHTTPPort			: aCAHTTPPort,
							caAddr				: aCAAddr    ,
							caHTTPAddr 			: aCAHTTPAddr,
							caHTTPService 		: aCAHTTPService,
							caType				: aCAType    ,
							certLocation		: aCertLocation,
							workerNum			: aWorkerNum,
							workerScript		: aWorkerScript,
							option				: 0          ,  // aOption : 0
							keywordTryLimit		: aKeywordTryLimit,
							certSerial			: aCertSerial,
							completeCallback	: completeCallback,
							showSavePasswdDialog: showSavePasswdDialog,
                            userCallback		: aUserCallback,
                            errCallback			: aErrCallback}

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

 	RevokeCertificate: function(aCAPort, aCAAddr, aJobCode, aReason, aCAType, aKeywordTryLimit, 
								aUserCallback, aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};
		var aGuideModule;
		var aGuideDialog = null;
		
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}
		
		/******************************************************************************************
		 * guidewindow function 
		 ******************************************************************************************/
		__show_guidewindow = function ()
 		{
			if (aGuideDialog) return;
			
			aGuideModule = __SANDBOX.loadModule("guidewindow");
 			aGuideDialog = aGuideModule({
 				type: "loading",
 				args: "",
 				onconfirm: "",
 				oncancel: function () {aGuideDialog.dispose();}
 			});
 			aGuideDialog.show();
 		}
		
		__close_guidewindow = function ()
		{
			if (aGuideDialog) {
				aGuideDialog.dispose ();
				aGuideDialog = null;
			}
		}
		/******************************************************************************************
		 * final function 
		 ******************************************************************************************/
		__fn_final = function (aCallback)
		{
			var _final_callback = function () {
				__close_guidewindow ();
				
				if (aCallback)
					aCallback ();
			}
			
			var aMediaType = Math.floor(aDialogParam.args.mediaID / 100) * 100;
			
			if (aMediaType == XW_CERT_LOCATION_ICCARD || aMediaType == XW_CERT_LOCATION_KEPCOICCARD) {
				__SANDBOX.upInterface().logoutStoreToken(aDialogParam.args.mediaID, _final_callback);
			} else if (aMediaType == XW_CERT_LOCATION_PKCS11) {
				__SANDBOX.upInterface().finalizePKCS11FromIndex (aDialogParam.args.mediaID, _final_callback);
			} else if (aMediaType == XW_CERT_LOCATION_SECUREDISK) {
				__SANDBOX.upInterface().finalizeSecureDiskFromName (aDialogParam.args.providerName, _final_callback);
			} else {
				_final_callback ();
			}
		}
		/******************************************************************************************
		 * revokeCertificate callback function 
		 ******************************************************************************************/
		_CB_RevokeCertificate = function (aResult)
		{
			if (__SANDBOX.isFailed (aResult, aErrCallback) )
			{
				__fn_final ();
			}
			else
			{
				var _final_callback = function () {
					aUserCallback (0);
				}
				__fn_final (_final_callback);
			}
		}
		/******************************************************************************************/

		function completeCallback(aDialogParam) {
			
			if (aDialogParam.args.dialog)
				aGuideDialog = aDialogParam.args.dialog;
			else
				__show_guidewindow ();
			
			__SANDBOX.upInterface().revokeCertificate (aDialogParam.args.caPort,
													   aDialogParam.args.caAddr,
													   aDialogParam.args.issuerRDN,
													   aDialogParam.args.certSerial,
													   aDialogParam.args.mediaID,
													   aDialogParam.args.jobCode,
													   aDialogParam.args.reason,
													   aDialogParam.args.caType,
													   aDialogParam.args.oldPasswd,
													   _CB_RevokeCertificate);
		}

		aDialogParam.width	= 437;
		aDialogParam.height	= 410;
		aDialogParam.type	= "revoke";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "RevokeCertificate",
							caPort			: aCAPort    ,
							caAddr			: aCAAddr    ,
							jobCode			: aJobCode   ,
							reason			: aReason    ,
							caType			: aCAType    ,
							option			: 0          ,  // aOption : 0
							keywordTryLimit	: aKeywordTryLimit,
							completeCallback: completeCallback,
                            userCallback	: aUserCallback,
                            errCallback		: aErrCallback}

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},

	ShowCertManager: function (aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
			{
				aErrCallback = gErrCallback_common;
			}

			var module = loadModule ("certmanager");
			var dialog = module (
				{
					args: {
						errCallback: aErrCallback
					},
					onconfirm: function () { dialog.dispose (); },
					oncancel:  function () { dialog.dispose (); }
				});
			if (dialog)
				dialog.show();
		}, "");
	},

	ExportCertRelay: function (aErrCallback)
	{
		var aIsMobile = checkMobile();

		if (aIsMobile) {
			window.open(AnySign.mBasePath + "/../MCertRelay/export_relay.html", "ASL-Browser-certificate-certrelay");
		} else {
			__SANDBOX.setAfterAction (function () {
				if (aErrCallback == undefined)
				{
					aErrCallback = gErrCallback_common;
				}

				var module = loadModule ("exportcertrelay");
				var dialog = module (
					{
						args: {
							errCallback: aErrCallback
						},
						onconfirm: function () { dialog.dispose (); },
						oncancel:  function () { dialog.dispose (); }
					});
				if (dialog)
					dialog.show();
			}, "");
		}
	},

	ImportCertRelay: function (aErrCallback)
	{
		var aIsMobile = checkMobile();

		if (aIsMobile) {
			window.open(AnySign.mBasePath + "/../MCertRelay/import_relay.html", "ASL-Browser-certificate-certrelay");
		} else {
			__SANDBOX.setAfterAction (function () {
				if (aErrCallback == undefined)
				{
					aErrCallback = gErrCallback_common;
				}

				var module = loadModule ("importcertrelay");
				var dialog = module (
					{
						args: {
							errCallback: aErrCallback
						},
						onconfirm: function () { dialog.dispose (); },
						oncancel:  function () { dialog.dispose (); }
					});
				if (dialog)
					dialog.show();
			}, "");
		}
	},

	CertSelectRelay: function (aParam)
	{
		var popuplayer = document.createElement('div');
		popuplayer.className = 'asl-cert-pop asl-common';

		var main = document.createElement('div');
		main.setAttribute('id', 'hancomwith-div');
		main.className = 'main-div';

		popuplayer.appendChild(main);
		document.body.insertBefore(popuplayer, document.body.firstChild);

		_getScript = function (path) {
			var _script = document.createElement('script');
			_script.setAttribute('type', 'text/javascript');
			_script.setAttribute('src', path);

			_script.onerror = function () {
			};

			_script.onload = function () {
				if (!aParam[aParam.length-1])
					aParam[aParam.length-1] = gErrCallback_common;
				
				certselect.setParam(aParam);
				certselect.show();
			};

			document.getElementsByTagName ("head")[0].appendChild(_script);
		};

		_getStyle = function (path) {
			var _link = document.createElement('link');
			_link.rel = 'stylesheet';
			_link.type = 'text/css';
			_link.href = path;

			_link.onerror = function () {
			};

			_link.onload = function () {
				_getScript(AnySign.mBasePath + "/../MWebASL/js/certselect.js");
			};

			document.getElementsByTagName ("head")[0].appendChild(_link);
		};

		_getStyle(AnySign.mBasePath + "/../MWebASL/css/common.css");
	},

	InstallCertificate: function (aMediaID,
								  aType,
								  aCertificate,
								  aKeyword,
								  aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			_CB_InstallCertificate = function (result) 
			{
				if (__SANDBOX.isFailed (result, gErrCallback_common))
					return;
	
				aUserCallback (result);
			}
	
			__SANDBOX.upInterface().installCertificate (aMediaID, aType, aCertificate, aKeyword, _CB_InstallCertificate);
		}, "");
	},

	SetIssuerConvertTable: function (aIssuer,
									 aConvertedPool,
									 aComment,
									 aLanguage)
	{
		// AnySign4PC setting
		var aIssuerData = {type: "issuer", param1: aIssuer, param2: aConvertedPool, param3: aComment, param4: aLanguage};
		__SANDBOX.convertTable.push (aIssuerData);
		
		// AnySignLite setting
		if (AnySign.mAnySignLiteSupport)
		{
			var aAnySign = AnySign.mAnySignEnable;
			AnySign.mAnySignEnable = false;
			
			var _setIssuerConvertTable_callback = function (aResult) {
				__SANDBOX.isFailed (aResult, gErrCallback_common);
				AnySign.mAnySignEnable = aAnySign;
			}
			
			__SANDBOX.upInterface().setIssuerConvertTable (aIssuer, aConvertedPool, aComment, aLanguage, _setIssuerConvertTable_callback);
		}
	},

	SetPolicyConvertTable: function (aPolicy,
									 aConvertedPool,
									 aComment,
									 aLanguage)
	{
		// AnySign4PC setting
		var aPolicyData = {type: "policy", param1: aPolicy, param2: aConvertedPool, param3: aComment, param4: aLanguage};
		__SANDBOX.convertTable.push (aPolicyData);
		
		// AnySignLite setting
		if (AnySign.mAnySignLiteSupport)
		{
			var aAnySign = AnySign.mAnySignEnable;
			AnySign.mAnySignEnable = false;
			
			var _setPolicyConvertTable_callback = function (aResult) {
				__SANDBOX.isFailed (aResult, gErrCallback_common);
				AnySign.mAnySignEnable = aAnySign;
			}
			
			__SANDBOX.upInterface().setPolicyConvertTable (aPolicy, aConvertedPool, aComment, aLanguage, _setPolicyConvertTable_callback);
		}
	},

	EnvelopeData: function (aXgateAddress,
						    aCAList,
						    aPlainData,
						    aEnvelopeOption,
						    aEnvelopeKeyword,
						    aEnvelopeCertPEM,
						    aCertSerial,
						    aCertLocation,
						    aDescription,
						    aUserCallback,
						    aErrCallback)
	{
		var aResult;
		var aEnvelopeType;

		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}

		if (aEnvelopeOption & 1)
		{
			if (!aEnvelopeCertPEM)
				aEnvelopeType = "CERT";
			else
				aEnvelopeType = "PEM";
			
		}
		else if (aEnvelopeOption & 2)
		{
			aEnvelopeType = "PASSWD";
		}

		switch(aEnvelopeType)
		{
			case "CERT":
				aResult = this.EnvelopeDataWithCert (aXgateAddress,
													 aCAList,
													 aPlainData,
													 aEnvelopeOption,
													 aCertSerial,
													 aCertLocation,
													 aDescription,
													 aUserCallback,
													 aErrCallback)
				break;	
			case "PEM":
				aResult = this.EnvelopeDataWithPEM (aPlainData,
													aEnvelopeOption,
													aEnvelopeCertPEM,
													aUserCallback,
													aErrCallback);
				break;
			case "PASSWD":
				aResult = this.EnvelopeDataWithPasswd (aPlainData,
													   aEnvelopeOption,
													   aEnvelopeKeyword,
													   aUserCallback,
													   aErrCallback)
				break;
			default:
				alert("Unknown EnvelopeOption");
				return;
		}
	},

	EnvelopeDataWithPEM: function (aPlainData,
								   aEnvelopeOption,
								   aEnvCertPEM,
								   aUserCallback,
								   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			// AnySign4PC ë¡ë© ëì´ ìì¼ë©´ AnySign4PC ì¬ì©
			if (AnySign.mAnySignLoad)
				AnySign.mAnySignEnable = true;
			
			_CB_envelopeDataWithPEM = function (aResult) {
				if (__SANDBOX.isFailed(aResult, aErrCallback))
				{
					return;
				}
	
				aUserCallback(aResult);
			}
	
			__SANDBOX.upInterface().envelopeDataWithPEM(aPlainData,
														aEnvelopeOption,
														aEnvCertPEM,
														_CB_envelopeDataWithPEM);
		}, "");
	},

	EnvelopeDataWithCert: function (aXgateAddress,
								    aCAList,
									aPlainData,
									aEnvelopeOption,
									aCertSerial,
									aCertLocation,
									aDescription,
									aUserCallback,
									aErrCallback)
	{
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}

		var aDialogParam = {};
		var aDialogArgs = {};
		
		var aMediaIDList = "";
		var aIssuerRDNList = "";
		var aCertSerialList = "";
		var aDisablePFX = false;

		//ì¸ì¦ì ì í ë¤ì´ì¼ë¡ê·¸ í¸ì¶ í¨ì
		var _showCertSelect = function(aOption) {
			aDialogParam = {};
			aDialogArgs = {};
			
			var aMulticert = false;
			if(aOption == 1) { // add cert
				if(AnySign.mAnySignEnable) {
					// AnySign4PC
					aCertLocation = 1;
				} else {
					// AnySignLite
					aCertLocation = 2000;
				}
				aMulticert = true;
			}

			// set default values;
			aDialogParam.width	= 437;
			aDialogParam.height	= 457;
			aDialogParam.type	= "envelope";
			aDialogParam.args	= aDialogArgs;

			aDialogParam.args ={funcname		: "EnvelopeDataWithCert",
								multicert		: aMulticert,
								disablePFX		: aDisablePFX,
								xgateAddress	: aXgateAddress,
								caList			: aCAList,
								plain			: aPlainData,
								certSerial		: aCertSerial,
								certLocation	: aCertLocation,
								option			: (aEnvelopeOption & 0x100) ? 0x10 : 0, // ??
								description		: aDescription,
								userCallback	: _showCertSelect_callback,
								errCallback		: aErrCallback};

			aDialogParam.onconfirm =  null;
			aDialogParam.oncancel = null;

			__SANDBOX.showCertselectDialogCommon(aDialogParam);
		}

		//ì¸ì¦ì ì í ë¤ì´ì¼ë¡ê·¸ Callback í¨ì
		var _showCertSelect_callback = function(aResult) {

			aMediaIDList += aResult.mediaID + "\t\n";
			aIssuerRDNList += aResult.issuerRDN + "\t\n";
			aCertSerialList += aResult.certSerial + "\t\n";
				
			if (aEnvelopeOption & XW_OPTION_ENVELOPE_MULTI_CERT)
			{
				if(aResult.mediaID == XW_CERT_LOCATION_MEMORYSTORAGE)
					aDisablePFX = true;
				
				_confirmNextCert();
			}
			else
			{
				_envelopeDataWithCert();
			}
		}

		//ì¸ì¦ì ê³ì ì í íì¸ ë¤ì´ì¼ë¡ê·¸ í¸ì¶
		var _confirmNextCert = function() {
			var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
			AnySign.SetUITarget (aDialogParam.dialog.getUITarget());
			var aCommonDialog = aCommonDialogModule ({
				width: 350,
				height: 0,
				onconfirm: function() { 
										aCommonDialog.dispose(); 
										AnySign.SetUITarget (aCommonDialog.getUITarget());
										_showCertSelect(1); 
									  },
				oncancel: function(e) {
										aCommonDialog.dispose(); 
										_envelopeDataWithCert();
									  },
				args: {dialogType: "confirm",
					   messageType: "envelopeDataWithCert_confirmNextCert"}
			});

			if (aCommonDialog) aCommonDialog.show();
		}

		//ì¤ì  ì ìë´í¬(Cert) í¨ì
		var _envelopeDataWithCert = function() {
			
			var aResultData;
			
			/****************************************************************************************/
			_userCallback = function ()
			{
				aUserCallback(aResultData);
			}
			
			_envelopeCertCallback = function (result)
			{
				if ( __SANDBOX.isFailed(result, aErrCallback) )
					return;
				
				aResultData = result;

				var mediaID;
				var index = aMediaIDList.indexOf("\t\n");
				
				_finalCheck = function ()
				{
					if (index > 0) {
						mediaID = aMediaIDList.substring (0, index);
						aMediaIDList = aMediaIDList.substring (index + 2, aMediaIDList.length);
						index = aMediaIDList.indexOf("\t\n");
						
						if ((Math.floor(mediaID / 100) * 100) == XW_CERT_LOCATION_PKCS11) {
							__SANDBOX.upInterface().finalizePKCS11FromIndex (mediaID, _finalCheck);
						} else {
							_finalCheck ();
						}
					} else {
						_userCallback ();
					}
				}
				
				_finalCheck ();
			}
			/****************************************************************************************/

			__SANDBOX.upInterface().envelopeDataWithCert (aPlainData,
														  aEnvelopeOption,
														  aMediaIDList,
														  aIssuerRDNList,
														  aCertSerialList,
														  _envelopeCertCallback);
		}

		//excute
		_showCertSelect();
	},


	EnvelopeDataWithPasswd: function (aPlainData,
									  aEnvelopeOption,
									  aKeyword,
									  aUserCallback,
									  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			// AnySign4PC ë¡ë© ëì´ ìì¼ë©´ AnySign4PC ì¬ì©
			if (AnySign.mAnySignLoad)
				AnySign.mAnySignEnable = true;
			
			var aResult;
			var aInputType;
			
			if (AnySign.mAnySignEnable)
				aInputType = "4pc";
			else
				aInputType = "lite";
	
			if (aErrCallback == undefined)
			{
				aErrCallback = gErrCallback_common;
			}
	
			_envelopeDataWithPasswd_callback = function (envelopeData)
			{
				if ( __SANDBOX.isFailed(envelopeData, aErrCallback) )
					return;
	
				aUserCallback(envelopeData);
			}
	
			_CB_setSecureInput = function (result) {
				_envelopeDataWithPasswd (aKeyword);
			}
	
			// ë¹ë°ë²í¸ ìë ¥
			var _inputPassword = function ()
			{
				var aPasswordModule = __SANDBOX.loadModule("inputpasswd");
	
				var aInputPasswdDialog = aPasswordModule ({
					width: 350,
					height: 0,
					onconfirm: function (aResult) { 
						aInputPasswdDialog.dispose(); 
						_envelopeDataWithPasswd (aResult);
					},
					oncancel: function (e) {
						aInputPasswdDialog.dispose(); 
					},
					args: {messageType: "common",
						   inputType: aInputType}
				});
	
				if (aInputPasswdDialog) aInputPasswdDialog.show();
			}
	
			// ì ìë´í¬ (Password)
			var _envelopeDataWithPasswd = function (aKeyword)
			{
	
				__SANDBOX.upInterface().envelopeDataWithPasswd (aPlainData,
																aEnvelopeOption,
																aKeyword,
																_envelopeDataWithPasswd_callback);
			}
	
			// excute
			if(!aKeyword)
			{
				_inputPassword();
			}
			else
			{
				__SANDBOX.upInterface().setSecureInput ("", _CB_setSecureInput);
			}
		}, "");
	},

	DeEnvelopeData: function (aXgateAddress,
							  aCAList,
							  aEnvelopedData,
							  aDeEnvOption,
							  aDeEnvKeyword,
							  aDescription,
							  aLimitTrial,
							  aUserCallback,
							  aErrCallback)
	{
		var aResult;

		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}

		if (aDeEnvOption == 1)
		{
			this.DeEnvelopeDataWithCert (aXgateAddress,
										 aCAList,
										 aEnvelopedData,
										 aDescription,
										 aLimitTrial,
										 aUserCallback,
										 aErrCallback)
			
		}
		else
		{
			this.DeEnvelopeDataWithPasswd (aEnvelopedData,
										   aDeEnvKeyword,
										   aUserCallback,
										   aErrCallback)
		}
	},

	DeEnvelopeDataWithCert: function (aXgateAddress,
									  aCAList,
									  aEnvelopedData,
									  aDescription,
									  aLimitTrial,
									  aUserCallback,
									  aErrCallback)
	{
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}


		var aCertSerial = 0;

		//ì¸ì¦ì ì í ë¤ì´ì¼ë¡ê·¸ í¸ì¶ í¨ì
		var _showCertSelect = function() {
			var aDialogParam = {};
			var aDialogArgs = {};

			// set default values;
			aDialogParam.width	= 437;
			aDialogParam.height	= 457;
			aDialogParam.type	= "deenvelope";
			aDialogParam.args	= aDialogArgs;

			aDialogParam.args ={funcname		: "DeEnvelopeDataWithCert",
								xgateAddress	: aXgateAddress,
								caList			: aCAList,
								certSerial		: aCertSerial,
								option			: 0,
								description		: aDescription,
								keywordTryLimit	: aLimitTrial,
								userCallback	: _deEnvelopeDataWithCert,
								errCallback		: aErrCallback};

			aDialogParam.onconfirm =  null;
			aDialogParam.oncancel = null;

			__SANDBOX.showCertselectDialogCommon(aDialogParam);
		}

		//ì¤ì  ì ìë´í¬(Cert) í¨ì
		var _deEnvelopeDataWithCert = function(aResult) {

			var aMediaID = aResult.mediaID,
				aIssuerRDN = aResult.issuerRDN,
				aCertSerial = aResult.certSerial,
				aKeyword = aResult.passwd,
				aResultData;

			/****************************************************************************************/
			_userCallback = function ()
			{
				aUserCallback(aResultData);
			}
			
			_deEnvelopeCertCallback  = function (result)
			{
				if ( __SANDBOX.isFailed(result, aErrCallback) )
					return;
				
				aResultData = result;
				
				if ((Math.floor(aMediaID / 100) * 100) == XW_CERT_LOCATION_PKCS11) {
					__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _userCallback);
				} else {
					_userCallback ();
				}
			}
			/****************************************************************************************/

			__SANDBOX.upInterface().deEnvelopeDataWithCert (aEnvelopedData,
															aMediaID,
															aIssuerRDN,
															aCertSerial,
															aKeyword,
															_deEnvelopeCertCallback);
		}

		//excute
		_showCertSelect();
	},

	DeEnvelopeDataWithCacheCert: function (aXgateAddress,
										   aEnvelopedData,
										   aUserCallback,
										   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var aMediaID;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;

			_deEnvelopeCertCallback = function (aResult) {
				if ( __SANDBOX.isFailed(aResult, aErrCallback) )
					return;
				
				aUserCallback (aResult);
			}

			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}

				__SANDBOX.upInterface().deEnvelopeDataWithCacheCert (aXgateAddress,
																	 aEnvelopedData,
																	 aMediaID,
																	 "",
																	 "",
																	 "",
																	 _deEnvelopeCertCallback);
			}
			
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aMediaID = 0;
				else
					aMediaID = aResult;
				
				if (__SANDBOX.getInputType(aMediaID) == "4pc")
					AnySign.mAnySignEnable = true;
				
				__SANDBOX.setAfterAction (function () {
					__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
				}, "");
			}

			__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
		}, "");
	},
	
	DeEnvelopeDataWithPasswd: function (aEnvelopedData, 
									  	aDeEnvKeyword,
										aUserCallback,
										aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			// AnySign4PC ë¡ë© ëì´ ìì¼ë©´ AnySign4PC ì¬ì©
			if (AnySign.mAnySignLoad)
				AnySign.mAnySignEnable = true;
			
			var aInputType;
			
			if (AnySign.mAnySignEnable)
				aInputType = "4pc";
			else
				aInputType = "lite";
	
			if (aErrCallback == undefined)
			{
				aErrCallback = gErrCallback_common;
			}
	
			var _deEnvelopeDataWithPasswd_callback = function (result)
			{
				if ( __SANDBOX.isFailed(result, aErrCallback) )
				{
					return;
				}
	
				aUserCallback(result);
			}
	
			_CB_setSecureInput = function (result) {
				_deEnvelopeDataWithPasswd (aDeEnvKeyword);
			}
	
			// ë¹ë°ë²í¸ ìë ¥
			var _inputPassword = function ()
			{
				var aPasswordModule = __SANDBOX.loadModule("inputpasswd");
	
				var aInputPasswdDialog = aPasswordModule ({
					width: 350,
					height: 0,
					onconfirm: function (aResult) { 
											_deEnvelopeDataWithPasswd (aResult);
											aInputPasswdDialog.dispose(); 
										  },
					oncancel: function (e) {
											aInputPasswdDialog.dispose(); 
										  },
					args: {messageType: "common",
						   inputType: aInputType}
				});
	
				if (aInputPasswdDialog) aInputPasswdDialog.show();
			}
	
			// ì ìë´í¬ (Password)
			var _deEnvelopeDataWithPasswd = function (aKeyword)
			{
				__SANDBOX.upInterface().deEnvelopeDataWithPasswd (aEnvelopedData,
																  aKeyword,
																  _deEnvelopeDataWithPasswd_callback);
			}
	
			// excute
			if(!aDeEnvKeyword)
			{
				_inputPassword();
			}
			else
			{
				__SANDBOX.upInterface().setSecureInput ("", _CB_setSecureInput);
			}
		}, "");
	},

	SetCharset: function (aCharset, aUserCallback)
	{
		var aAnySign = AnySign.mAnySignEnable;
		AnySign.mCharset = aCharset;
		
		var _setCharset2_callback = function (result) {
			AnySign.mAnySignEnable = aAnySign;
			aUserCallback (0);
		}
		
		var _setCharset1_callback = function (result) {
			if (AnySign.mAnySignLoad) {
				// AnySign4PC setting
				AnySign.mAnySignEnable = true;
				__SANDBOX.upInterface().setCharset (aCharset, _setCharset2_callback);
			} else {
				_setCharset2_callback ();
			}
		}
		
		if (AnySign.mAnySignLiteSupport) {
			// AnySignLite setting
			AnySign.mAnySignEnable = false;
			__SANDBOX.upInterface().setCharset (aCharset, _setCharset1_callback);
		} else {
			_setCharset1_callback ();
		}
	},

	GetLastLocation: function(aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getLastLocation (aUserCallback);
		}, "");
	},

	GetCacheCertLocation: function(aXgateAddress, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getCacheCertLocation (aXgateAddress, aUserCallback);
		}, "");
	},

	GetCacheCertLocationEx: function(aXgateAddress, aOption, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getCacheCertLocationEx(aXgateAddress, aOption, aUserCallback);
		}, "");
	},
	
	ClearCachedData: function(aXgateAddress, aOption, aUserCallback)
	{
		var aAnySign = AnySign.mAnySignEnable;
		
		var _clearCachedData2_callback = function (result) {
			AnySign.mAnySignEnable = aAnySign;
			aUserCallback (0);
		}
		
		var _clearCachedData1_callback = function (result) {
			if (AnySign.mAnySignLoad) {
				// AnySign4PC setting
				AnySign.mAnySignEnable = true;
				__SANDBOX.upInterface().clearCachedData (aXgateAddress, aOption, _clearCachedData2_callback);
			} else {
				_clearCachedData2_callback ();
			}
		}
		
		if (AnySign.mAnySignLiteSupport) {
			// AnySignLite setting
			AnySign.mAnySignEnable = false;
			__SANDBOX.upInterface().clearCachedData(aXgateAddress, aOption, _clearCachedData1_callback);
		} else {
			_clearCachedData1_callback ();
		}
	},

	GetCertInfoEx: function (aSignedData, aOriginalData, aOpOption, aInfoOption, aVerifyOption, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getCertInfoEx (aSignedData, aOriginalData, aOpOption, aInfoOption, aVerifyOption, aUserCallback);
		}, "");
	},

	VerifyData: function (aSignedData, aOriginalData, aOption, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().verifyData (aSignedData, aOriginalData, aOption, aUserCallback);
		}, "");
	},

	Wif: function(aOption, aPEM, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().wif (aOption, aPEM, aUserCallback);
		}, "");
	},

	XecureLink: function(aXgateAddress, aLink)
	{
		var aPath		= null;
		var aHash		= null;
		var aPlain		= null;
		var aCharset	= AnySign.mEncCharset;

		aPath = aLink.pathname;

		if (__SANDBOX.isIE () < 10)
		{
			aPath = "/" + aPath;
		}

		aHash = aLink.hash;

		if (aLink.search.length > 1)
		{
			aPlain = aLink.search.substring (1);
		}
		else
		{
			aPlain = "";
		}

		/***********************************************************************/
		_blockEncCallback = function (result)
		{
			var aURL	= null;
			var aTarget	= null;
			var aData	= null;

			aData = escape_url (result);

			aURL = aPath;
			aURL += aHash;
			aURL += "?q=";
			aURL += aData;

			if (aCharset == "euc-kr")
				aURL += "&charset=EUC-KR";
			else
				aURL += "&charset=UTF-8";

			if (aLink.target == null || aLink.target == "")
			{
				aTarget = "_self";
			}
			else
			{
				aTarget = aLink.target;
			}

			open (aURL, aTarget);
		}
		/***********************************************************************/

		if (aCharset != "euc-kr")
			aCharset = "utf-8";

		__SANDBOX.upInterface ().blockEncAsync (aXgateAddress, aPath, aPlain, "GET", aCharset, _blockEncCallback);
		
		return false;
	},

	XecureSubmit: function(aXgateAddress, form, aSessionKey)
	{
		var aPath		= getPath(form.action);
		var aPlain		= "";
		var cipher		= "";
		var xecure_url	= "";
		var aResult		= "";
		var aCharset	= AnySign.mEncCharset;

		if (aCharset != "euc-kr")
			aCharset = "utf-8";

		qs_begin_index = form.action.indexOf('?');
		if ( qs_begin_index >= 0) {
			aPlain = form.action.substring(qs_begin_index + 1, form.action.length);
		}
	
		document.xecure.target = form.target;
		/********************************************************************************/
		_post_blockEncCallback_next = function (result)
		{
			document.xecure.p.value = result;
			document.xecure.submit();
		}
		/********************************************************************************/

		/********************************************************************************/
		_post_blockEncCallback = function (result)
		{
			var cipher = result;

			if (aCharset == "euc-kr")
				document.xecure.action = aPath + "?q=" + escape_url(result) + "&charset=EUC-KR";
			else
				document.xecure.action = aPath + "?q=" + escape_url(result) + "&charset=UTF-8";

			if (cipher != "") {
				posting_data = XecureMakePlain(form);
				
				if (aSessionKey != undefined && aSessionKey != null && aSessionKey != "") {
					__SANDBOX.upInterface().blockEncConvertAsync (aXgateAddress,
																  aPath,
																  aSessionKey,
																  posting_data,
																  "POST",
																  aCharset,
																  _post_blockEncCallback_next);
				} else {
					__SANDBOX.upInterface().blockEncAsync (aXgateAddress,
														   aPath,
														   posting_data,
														   "POST",
														   aCharset,
														   _post_blockEncCallback_next);
				}
			}
			else {
				_post_blockEncCallback_next (cipher);
			}
		}
		/********************************************************************************/

		/********************************************************************************/
		_get_blockEncCallback = function (result)
		{
			if (aCharset == "euc-kr")
				xecure_url = aPath + "?q=" + escape_url(result) + "&charset=EUC-KR";
			else
				xecure_url = aPath + "?q=" + escape_url(result) + "&charset=UTF-8";

			if (form.target == "" || form.target == null)
				form.target = "_self";

			open (xecure_url, form.target);
		}
		/********************************************************************************/
		
		if (form.method == "get" || form.method == "GET") {
			// Get Method
			
			if (aPlain.length != 0)
				aPlain += "&" + XecureMakePlain(form);
			else
				aPlain = XecureMakePlain(form);
			
			if (aSessionKey != undefined && aSessionKey != null && aSessionKey != "") {
				__SANDBOX.upInterface().blockEncConvertAsync (aXgateAddress,
															  aPath,
															  aSessionKey,
															  aPlain,
															  "GET",
															  aCharset,
															  _get_blockEncCallback);
			} else {
				__SANDBOX.upInterface().blockEncAsync (aXgateAddress,
													   aPath,
													   aPlain,
													   "GET",
													   aCharset,
													   _get_blockEncCallback);
			}
		}
		else {
			// Post Method
			document.xecure.method = "post";
	
			if (aSessionKey != undefined && aSessionKey != null && aSessionKey != "") {
				__SANDBOX.upInterface().blockEncConvertAsync (aXgateAddress,
															  aPath,
															  aSessionKey,
															  aPlain,
															  "GET",
															  aCharset,
															  _post_blockEncCallback);
			}
			else {
				 __SANDBOX.upInterface().blockEncAsync (aXgateAddress,
														aPath,
														aPlain,
														"GET",
														aCharset,
														_post_blockEncCallback);
			}
		}
		
		return false;
	},

	XecureNavigate: function(aXgateAddress, url, aTarget, aFeature)
	{
		var aPlain   = "";
		var aPath    = null;
		var aCipher  = null;
		var aURL     = null;
		var qs_begin_index  = url.indexOf('?');
		var aCharset	= AnySign.mEncCharset;

		if (aCharset != "euc-kr")
			aCharset = "utf-8";

		aPath = getPath(url)

		if (qs_begin_index >= 0) {
			aPlain = url.substring(qs_begin_index + 1, url.length );
		}

		/********************************************************************************/
		_blockEncCallback = function (result)
		{
			result = escape_url (result);          

			aURL = aPath;
			aURL += "?q=";
			aURL += result;

			if (aCharset == "euc-kr")
				aURL += "&charset=EUC-KR";
			else
				aURL += "&charset=UTF-8";

			aFeature = aFeature || undefined;

			open(aURL, aTarget, aFeature);
		}
		/********************************************************************************/

		__SANDBOX.upInterface ().blockEncAsync (aXgateAddress, aPath, aPlain, "GET", aCharset, _blockEncCallback);
		
		return false;
	},

	BlockEnc: function(aXgateAddress, aPath, aPlain, aMethod, aUserCallback) {
		__SANDBOX.upInterface().blockEnc (aXgateAddress, aPath, aPlain, aMethod, aUserCallback);
	},

	BlockEnc2: function(aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback) {
		__SANDBOX.upInterface().blockEnc2 (aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback);
	},

	BlockEncEx: function(aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback, aParam) {
		__SANDBOX.upInterface().blockEncAsync (aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback, aParam);
	},

	BlockDecEx: function(aXgateAddress, aCipher, aCharSet, aElement, aUserCallback, aParam) {
		var aResult = __SANDBOX.upInterface().blockDecEx (aXgateAddress, aCipher, aCharSet, aElement, aUserCallback, aParam);
		return aResult ? aResult : "";
	},

	getKTBScanInfo: function(aServerIP, aServerPort, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().getKTBScanInfo (aServerIP, aServerPort, aUserCallback);
		}, "");
	},

	FileHash: function(aFilePath, aAlg, aUserCallback, aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var _fileHash_callback = function (aResult)
			{
				if (!__SANDBOX.isFailed(aResult, aErrCallback)) {
					aUserCallback (aResult);
				}
			}
	
			__SANDBOX.upInterface().fileHash(aFilePath, aAlg, _fileHash_callback);
		}, "");
	},

	generateRandom: function (aLength, aOption, aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().generateRandom (aLength, aOption, aUserCallback);
		}, "");
	},

	AnySign4PC_installCheck: function (aUserCallback)
	{
		AnySign.mExtensionSetting.mInstallCheck_CB = aUserCallback;
		__SANDBOX.extension.GetWebSocket ();
	},
	
	AnySign4PC_installCallback: function (aUserCallback)
	{
		AnySign.mExtensionSetting.mInstallCheck_CB = aUserCallback;
	},
	
	AnySign4PC_LoadCallback: function (aUserCallback)
	{
		_load_callback = function (aResult) {
			aUserCallback();
		}
		
		AnySign.mExtensionSetting.mImgIntervalError = false;
		AnySign.mExtensionSetting.mLoadCallback.func = _load_callback;
		AnySign.mExtensionSetting.mLoadCallback.param = "";
	},

	setInfoDialog: function (aType, aRightoff)
	{
		if (!AnySign.mShowInfoDialog.enable) return;

		var aElement = document.getElementById('xwup_title_information');
		var aInfoDialog = __SANDBOX.informationDialog;

		if (aType == 'show') 
		{
			if (aElement != null) return;
			if (AnySign.mShowInfoDialog.close) return;

			var module = __SANDBOX.loadModule("information");
			__SANDBOX.informationDialog = module({
					onconfirm: "",
					oncancel: function () {
						__SANDBOX.informationDialog.dispose();
						__SANDBOX.informationDialog = null;
					}
			});

			if (aRightoff) {
				__SANDBOX.informationDialog.append();
			} else {
				setTimeout(function () {
						__SANDBOX.informationDialog.append();
				}, 0);
			}
		}
		else
		{
			if (aElement == null) return;
			__SANDBOX.informationDialog.dispose();
			__SANDBOX.informationDialog = null;
		}
	},

	GetCertPath: function (aUserCallback, aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		// set default values;
		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign-no-pfx";
		aDialogParam.args	= aDialogArgs;

		aDialogParam.args ={funcname		: "GetCertPath",
							xgateAddress	: AnySign.mXgateAddress,
							caList			: AnySign.mCAList,
							plain			: "test",
							option			: 512,
							description		: 0,
							keywordTryLimit	: 3,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam);
	},
	
	// added by leek55 20151203
	setBlockDec_callback: function (aUserCallback, aParam)
	{
		if ( AnySign.mPageBlockDecDone == false )
		{
			var DecCallbackObject = { pageDecCallback : aUserCallback, pageDecCallbackParam : aParam };
			
			AnySign.mExtensionSetting.mPageDecCallback.push(DecCallbackObject);
		}
		else
		{
			if(aParam)
				aUserCallback(aParam);
			else
				aUserCallback();
		}
	},
	// added end by leek55
	
	// FCMS
	SelectFile: function (aInitPath,
						  aFilterString,
						  aOption,
						  aUserCallback)
	{
		__SANDBOX.setAfterAction (function () {
			__SANDBOX.upInterface().selectFile (aInitPath, aFilterString, aOption, aUserCallback);
		}, "");
	},
	
	SignFileEx: function (aXgateAddress,
						  aCAList,
						  aCertSerial,
						  aCertLocation,
						  aLimitTrial,
						  aInFilePath,
						  aOutFilePath,
						  aOption,
						  aDescription,
						  aUserCallback,
						  aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;
		
		aDialogParam.args ={funcname		: "SignFileEx",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							inFilePath		: aInFilePath,
							outFilePath		: aOutFilePath,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam, 2);
	},
	
	SignFileExWithCacheCert: function (aXgateAddress,
									   aInFilePath,
									   aOutFilePath,
									   aOption,
									   aDescription,
									   aUserCallback,
									   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
	
			_CB_signDataCMS = function (aResult) {
				if (!__SANDBOX.isFailed(aResult, aErrCallback))
					aUserCallback (aResult);
			}
	
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aResult = 0;
	
				__SANDBOX.upInterface().signFileEx (aXgateAddress,
													aInFilePath,
													aOutFilePath,
													aResult,
													"",
													"",
													"",
													"",
													aOption,
													aDescription,
													_CB_signDataCMS);
			}
	
			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}
	
				__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
			}
	
			__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
		}, "");
	},
	
	SignFileExWithCacheCert2: function (aXgateAddress,
										aInFilePath,
										aOutFilePath,
										aOption,
										aDescription,
										aUserCallback,
										aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var aParam = {};
			
			aParam = {	funcname		: "SignFileEx",
						xgateAddress	: aXgateAddress,
						option			: aOption,
						description		: aDescription,
						inFilePath		: aInFilePath,
						outFilePath		: aOutFilePath,
						userCallback	: aUserCallback,
						errCallback		: aErrCallback};

			__SANDBOX.processCacheCert(aParam);
		}, "");
	},
	
	ClearCacheCert2: function(aUserCallback)
	{
		if(!aUserCallback)
			aUserCallback = function () {}
		
		var aResult = __SANDBOX.clearCacheCert ();
		
		aUserCallback (aResult);
	},
	
	SignFileExWithVID: function (aXgateAddress,
								 aCAList,
								 aCertSerial,
								 aCertLocation,
								 aLimitTrial,
								 aInFilePath,
								 aOutFilePath,
								 aIdn,
								 aSvrCert,
								 aOption,
								 aDescription,
								 aUserCallback,
								 aErrCallback)
	{
		var aDialogParam = {};
		var aDialogArgs = {};

		aDialogParam.width	= 437;
		aDialogParam.height	= 457;
		aDialogParam.type	= "sign";
		aDialogParam.args	= aDialogArgs;

		aOption |= XW_FVIEW_CREATE_VID;
		
		aDialogParam.args ={funcname		: "SignFileExWithVID",
							xgateAddress	: aXgateAddress,
							caList			: aCAList,
							certSerial		: aCertSerial,
							certLocation	: aCertLocation,
							option			: aOption,
							description		: aDescription,
							keywordTryLimit	: aLimitTrial,
							inFilePath		: aInFilePath,
							outFilePath		: aOutFilePath,
							idn				: aIdn,
							cert			: aSvrCert,
							userCallback	: aUserCallback,
							errCallback		: aErrCallback};

		aDialogParam.onconfirm = null;
		aDialogParam.oncancel = null;

		__SANDBOX.showCertselectDialogCommon(aDialogParam, 2);
	},
	
	SignFileExWithVID_CacheCert: function (aXgateAddress,
										   aInFilePath,
										   aOutFilePath,
										   aIdn,
										   aSvrCert,
										   aOption,
										   aDescription,
										   aUserCallback,
										   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var aMediaID;
			var aVid;
			var aSignedData = "";
			
			aOption |= XW_FVIEW_CREATE_VID;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_envelopIdNum = function (aResult) {
				if (!__SANDBOX.isFailed(aResult, aErrCallback)) {
					aUserCallback (aSignedData);
				}
			}
			
			_CB_signDataCMS = function (aResult) {
				if (!__SANDBOX.isFailed(aResult, aErrCallback)) {
					aSignedData = aResult;
					__SANDBOX.upInterface().envelopIdNumEx (aXgateAddress,
															aMediaID,
															"",
															"",
															"",
															"",
															aVid,
															aSvrCert,
															0,
															_CB_envelopIdNum);
				}
			}
			
			_signDataCMS = function () {
				__SANDBOX.upInterface().signFileEx (aXgateAddress,
													aInFilePath,
													aOutFilePath,
													aMediaID,
													"",
													"",
													"",
													"",
													aOption,
													aDescription,
													_CB_signDataCMS);
			}
			
			_CB_getLastLocation = function (aResult) {
				if (aResult < 0)
					aMediaID = 0;
				else
					aMediaID = aResult;
					
				if (aOption & XW_FVIEW_CREATE_VID_NO_IDN) {
					aVid = "";
					_signDataCMS ();
				} else if (aOption & XW_FVIEW_CREATE_VID_FROM_WEB) {
					aVid = aIdn;
					_signDataCMS ();
				} else {
					var aInputType = __SANDBOX.getInputType(aMediaID);
					var module = __SANDBOX.loadModule("verifyvid");
					var vidDialog = module({
						width: 350,
						height: 100,
						onconfirm: function(aResult) { aVid = aResult; _signDataCMS (); vidDialog.dispose(); },
						oncancel: function() { vidDialog.dispose(); },
						args: {inputType: aInputType}
					});

					vidDialog.show();
				}
			}
				
			_CB_hasCachedData = function (aResult) {
				if (!aResult) {
					var aErrorObject = {};
					aErrorObject.code = -1;
					aErrorObject.msg = XW_ERROR_MSG_SIGNCACHE1;
					aErrCallback(aErrorObject);
					return;
				}
			
				__SANDBOX.upInterface().getLastLocation (_CB_getLastLocation);
			}
			
			__SANDBOX.upInterface().hasCachedData (aXgateAddress, _CB_hasCachedData);
		}, "");
	},
	
	VerifyFile: function (aInFilePath,
						  aSignedData,
						  aOption,
						  aDescription,
						  aUserCallback,
						  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_VerifyFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface ().verifyFile (aInFilePath,
												 aSignedData,
												 aOption,
												 aDescription,
												 _CB_VerifyFile);
		}, "");
	},
	
	VerifyAndSignFile: function (aXgateAddress,
								 aCAList,
								 aCertSerial,
								 aCertLocation,
								 aLimitedTrial,
								 aInFilePath,
								 aOutFilePath,
								 aSignedData,
								 aVerifyOption,
								 aSignOption,
								 aVerifyDescription,
								 aSignDescription,
								 aUserCallback,
								 aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			var fSign = this.SignFileEx;
			
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
		
			aVerifyOption |= XW_OPTION_ADD_SIGN_BUTTON;
			
			AddSign = function ()
			{
				fSign (aXgateAddress,
					   aCAList,
					   aCertSerial,
					   aCertLocation,
					   aLimitedTrial,
					   aInFilePath,
					   aOutFilePath,
					   aSignOption,
					   aSignDescription,
					   aUserCallback,
					   aErrCallback);
			}
			
			SignCancel = function ()
			{
				__SANDBOX.upInterface().setError(XW_ERROR_PLUGINS_SIGN_CANCEL, _CB_errCallback);
			}
			
			_CB_errCallback = function ()
			{
				var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
				aErrCallback (aErrorObject);
			}
			
			_CB_VerifyFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback)) {
					// -1: verify fail, 0: verify success, 1: add sign
					if (result == "-1") {
						var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
						var aCommonDialog = aCommonDialogModule ({
							width: 350,
							height: 0,
							onconfirm: function() { 
													aCommonDialog.dispose();
													AddSign(); 
												  },
							oncancel: function(e) {
													aCommonDialog.dispose(); 
													SignCancel();
												  },
							args: {dialogType: "confirm",
								   messageType: "verifyAndSignFile_confirmSign"}
						});
						if (aCommonDialog) aCommonDialog.show();
					} else if (result == "0") {
						SignCancel();
					} else {
						AddSign();
					}
				}
			}
			
			__SANDBOX.upInterface ().verifyFile (aInFilePath,
												 aSignedData,
												 aVerifyOption,
												 aVerifyDescription,
												 _CB_VerifyFile);
		}, "");
	},
	
	GetVerifiedFileCertInfo: function (aOption,
									   aIndex,
									   aUserCallback,
									   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_GetVerifiedFileCertInfo = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback)) {
					var aCertInfo = result.split ("$");
					aUserCallback (aCertInfo[aIndex]);
				}
			}
			
			__SANDBOX.upInterface ().getVerifiedFileCertInfo (aOption, _CB_GetVerifiedFileCertInfo);
		}, "");
	},
	
	ExtractFile: function (aInFilePath,
						   aOutFilePath,
						   aOption,
						   aDescription,
						   aUserCallback,
						   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_ExtractFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface ().extractFile (aInFilePath,
												  aOutFilePath,
												  aOption,
												  aDescription,
												  _CB_ExtractFile);
		}, "");
	},
	
	EnvelopeFileWithPEM: function (aInFilePath,
								   aOutFilePath,
								   aCertPEM,
								   aOption,
								   aDescription,
								   aUserCallback,
								   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_EnvelopeFileWithPEM = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface ().envelopeFileWithPEM (aInFilePath,
														  aOutFilePath,
														  aCertPEM,
														  aOption,
														  aDescription,
														  _CB_EnvelopeFileWithPEM);
		}, "");
	},
	
	EnvelopeFileWithCert: function (aXgateAddress,
									aCAList,
									aCertSerial,
									aCertLocation,
									aInFilePath,
									aOutFilePath,
									aOption,
									aDescription,
									aUserCallback,
									aErrCallback)
	{
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}
		
		var aDialogParam = {};
		var aDialogArgs = {};
		
		var aMediaIDList = "";
		var aIssuerRDNList = "";
		var aCertSerialList = "";
		
		var _showCertSelect = function() {
			aDialogParam = {};
			aDialogArgs = {};
			
			aDialogParam.width	= 437;
			aDialogParam.height	= 457;
			aDialogParam.type	= "envelope";
			aDialogParam.args	= aDialogArgs;

			aDialogParam.args ={funcname		: "EnvelopeFileWithCert",
								xgateAddress	: aXgateAddress,
								caList			: aCAList,
								certSerial		: aCertSerial,
								certLocation	: aCertLocation,
								option			: aOption,
								description		: aDescription,
								userCallback	: _showCertSelect_callback,
								errCallback		: aErrCallback};

			aDialogParam.onconfirm =  null;
			aDialogParam.oncancel = null;

			__SANDBOX.showCertselectDialogCommon(aDialogParam);
		}
		
		var _showCertSelect_callback = function(aResult) {

			aMediaIDList += aResult.mediaID + "\t\n";
			aIssuerRDNList += aResult.issuerRDN + "\t\n";
			aCertSerialList += aResult.certSerial + "\t\n";

			if ((Math.floor(aResult.mediaID / 100) * 100) == XW_CERT_LOCATION_PKCS11) {
				__SANDBOX.upInterface().finalizePKCS11FromIndex (aResult.mediaID, _CertSelectOrEnvelope);
			} else {
				_CertSelectOrEnvelope ()
			}
		}
		
		var _CertSelectOrEnvelope = function () {
			if (aOption & XW_OPTION_ENVELOPE_MULTI_CERT)
			{
				_confirmNextCert();
			}
			else
			{
				_envelopeFileWithCert();
			}
		} 
		
		var _confirmNextCert = function() {
			var aCommonDialogModule = __SANDBOX.loadModule("commondialog");
			AnySign.SetUITarget (aDialogParam.dialog.getUITarget());
			var aCommonDialog = aCommonDialogModule ({
				width: 350,
				height: 0,
				onconfirm: function() { 
										aCommonDialog.dispose(); 
										AnySign.SetUITarget (aCommonDialog.getUITarget());
										_showCertSelect(); 
									  },
				oncancel: function(e) {
										aCommonDialog.dispose(); 
										_envelopeFileWithCert();
									  },
				args: {dialogType: "confirm",
					   messageType: "envelopeDataWithCert_confirmNextCert"}
			});

			if (aCommonDialog) aCommonDialog.show();
		}
		
		var _envelopeFileWithCert = function() {

			_envelopeCertCallback = function (result)
			{
				if ( __SANDBOX.isFailed(result, aErrCallback) )
					return;
				
				aUserCallback(result);
			}

			__SANDBOX.upInterface().envelopeFileWithCert (aInFilePath,
														  aOutFilePath,
														  aMediaIDList,
														  aIssuerRDNList,
														  aCertSerialList,
														  "",
														  aOption,
														  aDescription,
														  _envelopeCertCallback);
		}
		
		_showCertSelect();
	},
	
	DeEnvelopeFileWithCert: function (aXgateAddress,
									  aCAList,
									  aCertSerial,
									  aCertLocation,
									  aLimitedTrial,
									  aInFilePath,
									  aOutFilePath,
									  aOption,
									  aDescription,
									  aUserCallback,
									  aErrCallback)
	{
		var aMediaID = "";
		var aIssuerRDN = "";
		var aKeyword = "";
		
		if (aErrCallback == undefined)
		{
			aErrCallback = gErrCallback_common;
		}
		
		var _showCertSelect = function() {
			var aDialogParam = {};
			var aDialogArgs = {};
			
			aDialogParam.width	= 437;
			aDialogParam.height	= 457;
			aDialogParam.type	= "deenvelope";
			aDialogParam.args	= aDialogArgs;

			aDialogParam.args ={funcname		: "DeEnvelopeFileWithCert",
								xgateAddress	: aXgateAddress,
								caList			: aCAList,
								certSerial		: aCertSerial,
								certLocation	: aCertLocation,
								option			: aOption,
								description		: aDescription,
								keywordTryLimit	: aLimitedTrial,
								userCallback	: _showCertSelect_callback,
								errCallback		: aErrCallback};

			aDialogParam.onconfirm =  null;
			aDialogParam.oncancel = null;

			__SANDBOX.showCertselectDialogCommon(aDialogParam);
		}
		
		var _showCertSelect_callback = function(aResult) {
			aMediaID = aResult.mediaID;
			aIssuerRDN = aResult.issuerRDN;
			aCertSerial = aResult.certSerial;
				
			if ((Math.floor(aMediaID / 100) * 100) == XW_CERT_LOCATION_PKCS11) {
				aKeyword = aResult.pin;
				__SANDBOX.upInterface().finalizePKCS11FromIndex (aMediaID, _deEnvelopeFileWithCert);
			} else {
				aKeyword = aResult.passwd;
				_deEnvelopeFileWithCert ()
			}
		}
		
		var _deEnvelopeFileWithCert = function() {
			var aResult = "";
			
			_deEnvelopeCertCallback  = function (result)
			{
				if ( __SANDBOX.isFailed(result, aErrCallback) )
					return;
				
				aUserCallback(result);
			}
			
			__SANDBOX.upInterface().deEnvelopeFileWithCert (aInFilePath,
															aOutFilePath,
															aMediaID,
															aIssuerRDN,
															aCertSerial,
															"",
															aKeyword,
															aOption,
															aDescription,
															_deEnvelopeCertCallback);
		}
		
		_showCertSelect();
	},
	
	EnvelopeFileWithPasswd: function (aInFilePath,
									  aOutFilePath,
									  aSymKey,
									  aOption,
									  aDescription,
									  aUserCallback,
									  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_EnvelopeFileWithPasswd = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
				aUserCallback (result);
			}
			
			_CB_setSecureInput = function (result) {
				_envelopeFileWithPasswd (aSymKey);
			}
			
			var _inputPassword = function ()
			{
				var aPasswordModule = __SANDBOX.loadModule("inputpasswd");
	
				var aInputPasswdDialog = aPasswordModule ({
					width: 350,
					height: 0,
					onconfirm: function (result) { 
						aInputPasswdDialog.dispose(); 
						_envelopeFileWithPasswd (result);
					},
					oncancel: function (e) {
						aInputPasswdDialog.dispose(); 
					},
					args: {messageType: "common"}
				});
	
				if (aInputPasswdDialog) aInputPasswdDialog.show();
			}
			
			var _envelopeFileWithPasswd = function (aKeyword)
			{
				__SANDBOX.upInterface ().envelopeFileWithPasswd (aInFilePath,
																 aOutFilePath,
																 aKeyword,
																 aOption,
																 aDescription,
																 _CB_EnvelopeFileWithPasswd);
			}
			
			if (aOption & 1) {
				aOption -= 1; 
				_inputPassword();
			} else {
				__SANDBOX.upInterface().setSecureInput ("", _CB_setSecureInput);
			}
		}, "");
	},
	
	DeEnvelopeFileWithPasswd: function (aInFilePath,
										aOutFilePath,
										aSymKey,
										aOption,
										aDescription,
										aUserCallback,
										aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
		
			_CB_DeEnvelopeFileWithPasswd = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			_CB_setSecureInput = function (result) {
				_deEnvelopeFileWithPasswd (aSymKey);
			}
		
			var _inputPassword = function ()
			{
				var aPasswordModule = __SANDBOX.loadModule("inputpasswd");
				
				var aInputPasswdDialog = aPasswordModule ({
					width: 350,
					height: 0,
					onconfirm: function (result) { 
						aInputPasswdDialog.dispose(); 
						_deEnvelopeFileWithPasswd (result);
					},
					oncancel: function (e) {
						aInputPasswdDialog.dispose(); 
					},
					args: {messageType: "common"}
				});
				
				if (aInputPasswdDialog) aInputPasswdDialog.show();
			}
			
			var _deEnvelopeFileWithPasswd = function (aKeyword)
			{
				__SANDBOX.upInterface ().deEnvelopeFileWithPasswd (aInFilePath,
																   aOutFilePath,
																   aKeyword,
																   aOption,
																   aDescription,
																   _CB_DeEnvelopeFileWithPasswd);
			}
			
			if (aOption & 1) {
				aOption -= 1; 
				_inputPassword();
			} else {
				__SANDBOX.upInterface().setSecureInput ("", _CB_setSecureInput);
			}
		}, "");
	},
	
	GetEnvelopedFileInfo: function (aEnvelopedFile,
									aOption,
									aUserCallback,
									aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_GetEnvelopedFileInfo = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().getEnvelopedFileInfo (aEnvelopedFile,
														  aOption,
														  _CB_GetEnvelopedFileInfo);
		}, "");
	},
	
	UploadFile: function (aXgateAddress,
						  aPath,
						  aQuery,
						  aHostName,
						  aPort,
						  aInFilePath,
						  aOption,
						  aDescription,
						  aUserCallback,
						  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_UploadFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().uploadFile (aXgateAddress,
												aPath,
												aQuery,
												aHostName,
												aPort,
												aInFilePath,
												aOption,
												aDescription,
												_CB_UploadFile);
		}, "");
	},

	UploadFileEx: function (aXgateAddress,
						  aPath,
						  aQuery,
						  aHostName,
						  aPort,
						  aInFilePath,
						  aOption,
						  aDescription,
						  aSID,
						  aCharSet,
						  aUserCallback,
						  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_UploadFileEx = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().uploadFileEx (aXgateAddress,
												aPath,
												aQuery,
												aHostName,
												aPort,
												aInFilePath,
												aOption,
												aDescription,
												aSID,
												aCharSet,
												_CB_UploadFileEx);
		}, "");
	},
	
	DownloadFile: function (aXgateAddress,
							aPath,
							aQuery,
							aHostName,
							aPort,
							aTargetFilePath,
							aDownloadFilePath,
							aOption,
							aDescription,
							aUserCallback,
							aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_DownloadFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().downloadFile (aXgateAddress,
												  aPath,
												  aQuery,
												  aHostName,
												  aPort,
												  aTargetFilePath,
												  aDownloadFilePath,
												  aOption,
												  aDescription,
												  _CB_DownloadFile);
		}, "");
	},

	DownloadFileEx: function (aXgateAddress,
							aPath,
							aQuery,
							aHostName,
							aPort,
							aTargetFilePath,
							aDownloadFilePath,
							aOption,
							aDescription,
							aSID,
							aCharSet,
							aUserCallback,
							aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_DownloadFileEx = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().downloadFileEx (aXgateAddress,
												  aPath,
												  aQuery,
												  aHostName,
												  aPort,
												  aTargetFilePath,
												  aDownloadFilePath,
												  aOption,
												  aDescription,
												  aSID,
												  aCharSet,
												  _CB_DownloadFileEx);
		}, "");
	},
	
	ZipFile: function (aXgateAddress,
					   aSourceFile,
					   aTargetFile,
					   aOption,
					   aDescription,
					   aUserCallback,
					   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_ZipFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().zipFile (aXgateAddress,
											 aSourceFile,
											 aTargetFile,
											 aOption,
											 aDescription,
											 _CB_ZipFile);
		}, "");
	},
	
	UnZipFile: function (aXgateAddress,
						 aSourceFile,
						 aDestDir,
						 aOption,
						 aDescription,
						 aUserCallback,
						 aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_UnZipFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().unZipFile (aXgateAddress,
											   aSourceFile,
											   aDestDir,
											   aOption,
											   aDescription,
											   _CB_UnZipFile);
		}, "");
	},
	
	GetFileInfo: function (aFilePath,
						   aOption,
						   aUserCallback,
						   aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_GetFileInfo = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().getFileInfo (aFilePath,
												 aOption,
												 _CB_GetFileInfo);
		}, "");
	},
	
	ClearTempFile: function (aXgateAddress,
							 aUserCallback,
							 aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_ClearTempFile = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().clearTempFile (aXgateAddress, _CB_ClearTempFile);
		}, "");
	},
	
	GetHomeDir: function (aUserCallback,
						  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_GetHomeDir = function (result) {
				if (!__SANDBOX.isFailed(result, aErrCallback))
					aUserCallback (result);
			}
			
			__SANDBOX.upInterface().getHomeDir (_CB_GetHomeDir);
		}, "");
	},

	GetCertPEM: function (aMediaID,
						  aIssuerRDN,
						  aCertSerial,
						  aOption,
						  aUserCallback,
						  aErrCallback)
	{
		__SANDBOX.setAfterAction (function () {
			if (aErrCallback == undefined)
				aErrCallback = gErrCallback_common;
			
			_CB_getCertPEM = function (aCertPEM) {
				if (!__SANDBOX.isFailed(aCertPEM, aErrCallback))
					aUserCallback (aCertPEM);
			}
			
			__SANDBOX.upInterface().getCertPEM (aMediaID,
												aIssuerRDN,
												aCertSerial,
												aOption,
												_CB_getCertPEM);
		}, "");
	},
	
	XFSLogout: function (aUserCallback)
	{
		__SANDBOX.upInterface().xfsLogout (aUserCallback);
	},

	SetStorage: function (aUserCallback, aParam)
	{
		if (typeof XCrypto == "undefined") {
			if(aUserCallback) aUserCallback();
			return;
		}
		
		if (XCrypto.checkXCrypto() != 0) {
			if(aUserCallback) aUserCallback();
			return ;
		}
		
		var aCallback = function (aReturn) {
			if (aReturn != 0)
			{
				var aInternalErrorMessage = XCrypto.getLastErrInternal();
				var aErrorObject = __SANDBOX.upInterface().setErrCodeAndMsg();
				
				if(typeof aInternalErrorMessage !== "undefined" && aInternalErrorMessage.length > 0 )
					aErrorObject.msg += aInternalErrorMessage;

				if(AnySign.mOpenCertAlertEnable)
				{
					alert(aErrorObject.msg.replace(/\\n/g, '\r\n'));

					if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr")
						alert(XW_OPENCERT_INIT_ERROR_NOTABLE_MSG);
					else
						alert(XW_OPENCERT_INIT_ERROR_NOTABLE_MSG_en);
				}
				else
				{
					console.log(aErrorObject.msg);
				}

				// When setOpenStorage return error, inside xcrypto set used localStorage(or crossStorage).
				// so AnySign.mOpenCertInitFlag set true because secondtime setOpenStorage fail is not return callback. (Be assumed yessign opencert module error.)
				// when yessign can fix that bug, then AnySign.mOpenCertInitFlag can set true if user choose confirm button. The button message is I will continue to use localstorage.
				AnySign.mOpenCertInitFlag = true;
			}
			else
			{
				AnySign.mOpenCertInitFlag = true;
			}

			var aCallback2 = function (aReturn) {
				if (aReturn != 0)
					console.log("[setCrossStorage] fail set Cross Storage URL.");
				
				if (aParam && XCrypto.isMobilePlatform()) {
					AnySign.CertSelectRelay(aParam);
					return;
				}

				if(aUserCallback) aUserCallback();
			}			

			__SANDBOX.upInterface().setCrossStorage(AnySign.mCrossStorageHub, AnySign.mCrossStorageOption, aCallback2);
		}


		if(AnySign.mOpenCertEnable == true && AnySign.mOpenCertInitFlag == false)
		{
			// ê¸ê²°ì ì¸ì¦ì ì ë³´ ëª©ë¡ ë³ê²½ ì´ë²¤í¸ ë¦¬ì¤í°
			var aOpenCertEventListener = function (listener) {
				if (aParam && XCrypto.isMobilePlatform()) {
					certselect.getCertTree();
					return;
				}

				if (!__SANDBOX.isDialogLoaded) return;
				
				var element = document.getElementById('xwup_media_localstorage');
				if (!element) return;

				var loader = document.getElementById('xwup_loader_img');
				if (loader) return;

				if (listener == "connect" || listener == "disconnect" || listener == "removeCertFromTray") 
					element.onclick();
			};
			
			var aGuideModule = __SANDBOX.loadModule("guidewindow");
			__SANDBOX.upInterface().setOpenStorage(AnySign.mOpenApi, [AnySign.mOpenCertJS, AnySign.mOpenCertRelayJS], aOpenCertEventListener, aGuideModule, aCallback);
		}
		else
		{
			aCallback(0);
		}
	}
}

})();


