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

document.write("<!-- AnySign stylesheet -->");
document.write("<link rel='stylesheet' id='anySignCSS' type='text/css' href='/AnySign4PC/AnySign4PC/css/common.css' />");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/promise-6.1.0.js\"></scr"+"ipt>");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/crossStorageClient.min.js\"></scr"+"ipt>");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/xcryptoCore_min.js\"></scr"+"ipt>");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/SecureProto.js\"></scr"+"ipt>");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/xcrypto_min.js\"></scr"+"ipt>");
document.write("<script type=\"text/javascript\" src=\"" + "/AnySign4PC/AnySign4PC/ext/FileSaver.min.js\"></scr"+"ipt>");

function AnySignInitialize ()
{
	/*------------------------------------------------------------------------
	 * AnySign ê¸°ë³¸ ì¤ì .
	 *----------------------------------------------------------------------*/
	var aProtocol = document.location.protocol; // window.location.protocol (http:)
	var aDownloadURL = "//download.softforum.com/Published/AnySign/v"; // CDN ê²½ë¡
	var aPort = document.location.port; // window.location.port (port)
	var aHostName;

	if (aPort == "")
	{
		aHostName = document.location.hostname;
	}
	else
	{
		aHostName = document.location.host;
	}

	// AnySign ëë í ë¦¬ ì¤ì¹ê²½ë¡.
	// ex)aBasePath = window.location.protocol + "//reaver.softforum.com/...";
	//var aBasePath = window.location.protocol + "";
	var aBasePath = aProtocol + "//" + aHostName + "/AnySign4PC/AnySign4PC";

	// TransKey ëë í ë¦¬ ì¤ì¹ê²½ë¡.
	var aTransKeyPath = "/XecureDemo/transkeyServlet";

	// Inca Keypad ì´ë¯¸ì§ ê²½ë¡
	var aIncaNOSv10KeypadImgPath = "";

	// AnySignì Security Context ì ë³´.
	var aSecurityContext = "";

	// AnySignì License ì ë³´.
	var aLicense = "";

	//AnySign FCMS License ì ë³´
	var aLicense2 = "";

	if(aHostName == "10.99.7.159:9110") {
		  aLicense = "30820a3206092a864886f70d010702a0820a2330820a1f020101310b300906052b0e03021a05003082039a06092a864886f70d010701a082038b04820387313a31302e39392e372e3135393a393131303a67657443657274547265652c6765744d656469614c6973742c7369676e44617461434d532c73657449644e756d2c76657269667950617373776f72642c766572696679436572742c766572696679436572744f776e65722c766572696679526f6f744361436572742c64656c65746543657274696669636174652c6368616e67654365727450617373776f72642c636865636b5046585077642c696d706f7274436572742c6578706f7274436572742c676574504658466f6c6465724c6973742c73617665436572742c626c6f636b446563436f6e7374616e742c7265717565737443657274696669636174652c72656e657743657274696669636174652c7265766f6b6543657274696669636174652c656e76656c6f7049644e756d2c676574566964496e666f2c7365744c616e67756167652c696e7374616c6c43657274696669636174652c736574497373756572436f6e766572745461626c652c736574506f6c696379436f6e766572745461626c652c656e76656c6f7065446174615769746850454d2c656e76656c6f70654461746157697468436572742c656e76656c6f706544617461576974685061737377642c6465456e76656c6f70654461746157697468436572742c6465456e76656c6f706544617461576974685061737377642c6765744c6173744c6f636174696f6e2c6c6f67696e504b4353313146726f6d496e6465782c6c6f67696e504b4353313146726f6d4e616d652c676574504b4353313144656661756c7450726f76696465722c7369676e44617461576974685046582c67657450465841636365737361626c654d656469614c6973742c7769662c66696e616c697a65504b4353313146726f6d4e616d652c696e697469616c697a65504b4353313146726f6d4e616d652c68736d4472697665724d616e616765722c636865636b50617373776f72644c656e2c67657443657274496e666f45782c6765744361636865436572744c6f636174696f6e2c626c6f636b456e632c626c6f636b44656345782c67657450465841636365737361626c654d656469614c697374496e636c75646553797374656d44726976652c676574504658466f6c6465724c697374496e636c75646553797374656d44726976652c676574466f6c6465724c697374496e636c75646553797374656d44726976652c656e76656c6f7049644e756d2c616e797369676e6c697465a0820467308204633082034ba003020102020107300d06092a864886f70d01010505003077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d301e170d3034303431393030303030305a170d3333303131333030303030305a308192310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e311e301c060355040b1315536563757269747920524e44204469766973696f6e311c301a06035504031313536f6674666f72756d205075626c69632043413125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d30820121300d06092a864886f70d01010105000382010e00308201090282010043340b4e1f2f30d6634c818e9fa4b35c199e0628503dbe0d1f5ad2c05890a918408dc330c991083bc7cdfc50021303c04afab4cb522d22fced11d1be6559835f1f000d466120cff97a2a80e4fdf972ac127f9bb8e8ddb84974323e4cb822c5f15b22f82da3de6ef61a0b6798ca49a85af3d8f8298912b4d26411e2e1635c081a3306931716c5e56b279c4d36068a4b645c10aa582693086e14132ba67fb03526312790261f9c641993e2ffc3fd9e8df3efebfddecd722e874d6366ad1252ac0d8bddb5674533cc2717a7342e5cfb18f8a301e7196ca33d6c3bb7e1f1e4bee34f5358af6ae0fd52a9fc3bdd4925f5eab7db6628e24738f6c882bb0aaa0e10afbf0203010001a381de3081db301f0603551d2304183016801409b5e27e7d2ac24a8f56bb67accebb93f5318fd3301d0603551d0e041604142e49ab278ae8c8af977537de8b74bb240e0d275f300e0603551d0f0101ff04040302010630120603551d130101ff040830060101ff02010030750603551d1f046e306c306aa068a06686646c6461703a2f2f6c6461702e736f6674666f72756d2e636f6d3a3338392f434e3d58656375726543524c505542432c4f553d536563757269747920524e44204469766973696f6e2c4f3d536f6674666f72756d20436f72706f726174696f6e2c433d4b52300d06092a864886f70d010105050003820101003ce700a0492b225b1665d9c73d84c34f7a5faad7b397ed49231f030e4e0e91953a607bd9006425373d490ef3ba1cf47810ca8c22fabe0c609f93823efdede64744458e910267f9f857c907318e286da6c131c9dd5fada43fd8cfdf6bd1b1b239338cea83eb6b6893b88fbcfd8e86a677b7270ad96be5a82b40569efc2dda6df4bcd642d067183186d6cace6c8f73b80f30b57acb3bcd5cbbc51307922d5edb38cb0d90c3917a8e37534183ba10f403c1c034287f39442df795050f39d78ddad97da8a43f02d7641549af9b5d68908e49faa8a1597cfed4a43baadd42c8fe4fd44c96d314df56147b8a7fa6ba65ffdee9ed3a5da52ef9ac7f9ca5afb633e1ccdf31820202308201fe020101307c3077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d020107300906052b0e03021a0500a05d301806092a864886f70d010903310b06092a864886f70d010701301c06092a864886f70d010905310f170d3231303130353037303533395a302306092a864886f70d010904311604140f1f16d6c46d9320bf9737a0eeb63a4d7e068dcb300d06092a864886f70d0101010500048201000b8417694258498173bceb205ed9fd04dc43651812cebe452219e07eb52e36fcda868cde0ecf08010b73c26c109b0fa8b179c40a2fd859e04daa8369493289ba75c4db181ee2839427cdf63ab72af28da655efe4acd0cbcdc20cecd7c6fece07f31af0da54b122f558ce2d8ebaa3a5371b4ef1603b18cd3361f5428d12d6b638fc576aaa824eeff618bbf645891aa9182adcf39a209feb8ce1c7ef344452fc34b393f2d4d705ebffb60d6b00be27bbe04b90fcf2cce71afc846cab5be7440bdcfed34a59cc97b643add3b6ad8efd33e4c85b1e3581f7a8c8b819d33c8370a57519429fdd56225ff70ebee3615e9501260bef718737d6089950a952c392008e3b";
		  aLicense2 = "";
	}
	else if(aHostName == "www.eps.go.kr") {
		  aLicense = "30820a2f06092a864886f70d010702a0820a2030820a1c020101310b300906052b0e03021a05003082039706092a864886f70d010701a082038804820384313a7777772e6570732e676f2e6b723a67657443657274547265652c6765744d656469614c6973742c7369676e44617461434d532c73657449644e756d2c76657269667950617373776f72642c766572696679436572742c766572696679436572744f776e65722c766572696679526f6f744361436572742c64656c65746543657274696669636174652c6368616e67654365727450617373776f72642c636865636b5046585077642c696d706f7274436572742c6578706f7274436572742c676574504658466f6c6465724c6973742c73617665436572742c626c6f636b446563436f6e7374616e742c7265717565737443657274696669636174652c72656e657743657274696669636174652c7265766f6b6543657274696669636174652c656e76656c6f7049644e756d2c676574566964496e666f2c7365744c616e67756167652c696e7374616c6c43657274696669636174652c736574497373756572436f6e766572745461626c652c736574506f6c696379436f6e766572745461626c652c656e76656c6f7065446174615769746850454d2c656e76656c6f70654461746157697468436572742c656e76656c6f706544617461576974685061737377642c6465456e76656c6f70654461746157697468436572742c6465456e76656c6f706544617461576974685061737377642c6765744c6173744c6f636174696f6e2c6c6f67696e504b4353313146726f6d496e6465782c6c6f67696e504b4353313146726f6d4e616d652c676574504b4353313144656661756c7450726f76696465722c7369676e44617461576974685046582c67657450465841636365737361626c654d656469614c6973742c7769662c66696e616c697a65504b4353313146726f6d4e616d652c696e697469616c697a65504b4353313146726f6d4e616d652c68736d4472697665724d616e616765722c636865636b50617373776f72644c656e2c67657443657274496e666f45782c6765744361636865436572744c6f636174696f6e2c626c6f636b456e632c626c6f636b44656345782c67657450465841636365737361626c654d656469614c697374496e636c75646553797374656d44726976652c676574504658466f6c6465724c697374496e636c75646553797374656d44726976652c676574466f6c6465724c697374496e636c75646553797374656d44726976652c656e76656c6f7049644e756d2c616e797369676e6c697465a0820467308204633082034ba003020102020107300d06092a864886f70d01010505003077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d301e170d3034303431393030303030305a170d3333303131333030303030305a308192310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e311e301c060355040b1315536563757269747920524e44204469766973696f6e311c301a06035504031313536f6674666f72756d205075626c69632043413125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d30820121300d06092a864886f70d01010105000382010e00308201090282010043340b4e1f2f30d6634c818e9fa4b35c199e0628503dbe0d1f5ad2c05890a918408dc330c991083bc7cdfc50021303c04afab4cb522d22fced11d1be6559835f1f000d466120cff97a2a80e4fdf972ac127f9bb8e8ddb84974323e4cb822c5f15b22f82da3de6ef61a0b6798ca49a85af3d8f8298912b4d26411e2e1635c081a3306931716c5e56b279c4d36068a4b645c10aa582693086e14132ba67fb03526312790261f9c641993e2ffc3fd9e8df3efebfddecd722e874d6366ad1252ac0d8bddb5674533cc2717a7342e5cfb18f8a301e7196ca33d6c3bb7e1f1e4bee34f5358af6ae0fd52a9fc3bdd4925f5eab7db6628e24738f6c882bb0aaa0e10afbf0203010001a381de3081db301f0603551d2304183016801409b5e27e7d2ac24a8f56bb67accebb93f5318fd3301d0603551d0e041604142e49ab278ae8c8af977537de8b74bb240e0d275f300e0603551d0f0101ff04040302010630120603551d130101ff040830060101ff02010030750603551d1f046e306c306aa068a06686646c6461703a2f2f6c6461702e736f6674666f72756d2e636f6d3a3338392f434e3d58656375726543524c505542432c4f553d536563757269747920524e44204469766973696f6e2c4f3d536f6674666f72756d20436f72706f726174696f6e2c433d4b52300d06092a864886f70d010105050003820101003ce700a0492b225b1665d9c73d84c34f7a5faad7b397ed49231f030e4e0e91953a607bd9006425373d490ef3ba1cf47810ca8c22fabe0c609f93823efdede64744458e910267f9f857c907318e286da6c131c9dd5fada43fd8cfdf6bd1b1b239338cea83eb6b6893b88fbcfd8e86a677b7270ad96be5a82b40569efc2dda6df4bcd642d067183186d6cace6c8f73b80f30b57acb3bcd5cbbc51307922d5edb38cb0d90c3917a8e37534183ba10f403c1c034287f39442df795050f39d78ddad97da8a43f02d7641549af9b5d68908e49faa8a1597cfed4a43baadd42c8fe4fd44c96d314df56147b8a7fa6ba65ffdee9ed3a5da52ef9ac7f9ca5afb633e1ccdf31820202308201fe020101307c3077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d020107300906052b0e03021a0500a05d301806092a864886f70d010903310b06092a864886f70d010701301c06092a864886f70d010905310f170d3231303130353037303632355a302306092a864886f70d01090431160414521383a90e84e3be84fcfe75a6b8d0e2dcf2de3e300d06092a864886f70d0101010500048201003eb27fee53cf663d57d82089df5c77d688066252770a7fd328762e722e6dfeb3f7652ad05879ee2fe9f9ee70477e0cdbd9cf12f72f2300d0377397b36ba355f58cc81a1b42654174c971ec8a1ba0f34136ed7836a8f22fa6a65b8457d3400426c2dae4839cf39f4dd70f4c15bd778bbe4f00f5c074d69f786e254fc6d76d31acc76223c820694fd4a2dd93e09ace2e0188ed0a8b5eaed5a9a1c810b640ee25ad3c860ff6eac0512a688e969a67547e380d32373e6785807f711e78039fbb5302d20ba99ed2e370ea4950ec3b8a7bedaec5f3bc101e5bf99ceca8d1ef3b8c27f63a2c7ac9bb2c8782cb557f4a1d787c802a9b34e6ddbb0daaeda4c9100ce0e748";
		  aLicense2 = "";
	}
	else if(aHostName == "eps.go.kr") {
		aLicense = "30820a2b06092a864886f70d010702a0820a1c30820a18020101310b300906052b0e03021a05003082039306092a864886f70d010701a082038404820380313a6570732e676f2e6b723a67657443657274547265652c6765744d656469614c6973742c7369676e44617461434d532c73657449644e756d2c76657269667950617373776f72642c766572696679436572742c766572696679436572744f776e65722c766572696679526f6f744361436572742c64656c65746543657274696669636174652c6368616e67654365727450617373776f72642c636865636b5046585077642c696d706f7274436572742c6578706f7274436572742c676574504658466f6c6465724c6973742c73617665436572742c626c6f636b446563436f6e7374616e742c7265717565737443657274696669636174652c72656e657743657274696669636174652c7265766f6b6543657274696669636174652c656e76656c6f7049644e756d2c676574566964496e666f2c7365744c616e67756167652c696e7374616c6c43657274696669636174652c736574497373756572436f6e766572745461626c652c736574506f6c696379436f6e766572745461626c652c656e76656c6f7065446174615769746850454d2c656e76656c6f70654461746157697468436572742c656e76656c6f706544617461576974685061737377642c6465456e76656c6f70654461746157697468436572742c6465456e76656c6f706544617461576974685061737377642c6765744c6173744c6f636174696f6e2c6c6f67696e504b4353313146726f6d496e6465782c6c6f67696e504b4353313146726f6d4e616d652c676574504b4353313144656661756c7450726f76696465722c7369676e44617461576974685046582c67657450465841636365737361626c654d656469614c6973742c7769662c66696e616c697a65504b4353313146726f6d4e616d652c696e697469616c697a65504b4353313146726f6d4e616d652c68736d4472697665724d616e616765722c636865636b50617373776f72644c656e2c67657443657274496e666f45782c6765744361636865436572744c6f636174696f6e2c626c6f636b456e632c626c6f636b44656345782c67657450465841636365737361626c654d656469614c697374496e636c75646553797374656d44726976652c676574504658466f6c6465724c697374496e636c75646553797374656d44726976652c676574466f6c6465724c697374496e636c75646553797374656d44726976652c656e76656c6f7049644e756d2c616e797369676e6c697465a0820467308204633082034ba003020102020107300d06092a864886f70d01010505003077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d301e170d3034303431393030303030305a170d3333303131333030303030305a308192310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e311e301c060355040b1315536563757269747920524e44204469766973696f6e311c301a06035504031313536f6674666f72756d205075626c69632043413125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d30820121300d06092a864886f70d01010105000382010e00308201090282010043340b4e1f2f30d6634c818e9fa4b35c199e0628503dbe0d1f5ad2c05890a918408dc330c991083bc7cdfc50021303c04afab4cb522d22fced11d1be6559835f1f000d466120cff97a2a80e4fdf972ac127f9bb8e8ddb84974323e4cb822c5f15b22f82da3de6ef61a0b6798ca49a85af3d8f8298912b4d26411e2e1635c081a3306931716c5e56b279c4d36068a4b645c10aa582693086e14132ba67fb03526312790261f9c641993e2ffc3fd9e8df3efebfddecd722e874d6366ad1252ac0d8bddb5674533cc2717a7342e5cfb18f8a301e7196ca33d6c3bb7e1f1e4bee34f5358af6ae0fd52a9fc3bdd4925f5eab7db6628e24738f6c882bb0aaa0e10afbf0203010001a381de3081db301f0603551d2304183016801409b5e27e7d2ac24a8f56bb67accebb93f5318fd3301d0603551d0e041604142e49ab278ae8c8af977537de8b74bb240e0d275f300e0603551d0f0101ff04040302010630120603551d130101ff040830060101ff02010030750603551d1f046e306c306aa068a06686646c6461703a2f2f6c6461702e736f6674666f72756d2e636f6d3a3338392f434e3d58656375726543524c505542432c4f553d536563757269747920524e44204469766973696f6e2c4f3d536f6674666f72756d20436f72706f726174696f6e2c433d4b52300d06092a864886f70d010105050003820101003ce700a0492b225b1665d9c73d84c34f7a5faad7b397ed49231f030e4e0e91953a607bd9006425373d490ef3ba1cf47810ca8c22fabe0c609f93823efdede64744458e910267f9f857c907318e286da6c131c9dd5fada43fd8cfdf6bd1b1b239338cea83eb6b6893b88fbcfd8e86a677b7270ad96be5a82b40569efc2dda6df4bcd642d067183186d6cace6c8f73b80f30b57acb3bcd5cbbc51307922d5edb38cb0d90c3917a8e37534183ba10f403c1c034287f39442df795050f39d78ddad97da8a43f02d7641549af9b5d68908e49faa8a1597cfed4a43baadd42c8fe4fd44c96d314df56147b8a7fa6ba65ffdee9ed3a5da52ef9ac7f9ca5afb633e1ccdf31820202308201fe020101307c3077310b3009060355040613024b52311e301c060355040a1315536f6674666f72756d20436f72706f726174696f6e3121301f06035504031318536f6674666f72756d20526f6f7420417574686f726974793125302306092a864886f70d010901161663616d617374657240736f6674666f72756d2e636f6d020107300906052b0e03021a0500a05d301806092a864886f70d010903310b06092a864886f70d010701301c06092a864886f70d010905310f170d3231303131333038353734345a302306092a864886f70d01090431160414dfdbc09a772061481b0ee6772b48cbccce50801b300d06092a864886f70d0101010500048201003d3d368b06d7e4fb21a6a4fb58310880b9c141e0f97931f10b48e1893df68188a770c9122eca5a9a783785b9702a0fc80a687293871349c0e046e753f7742140c8cbb0d0b4f7c0f86a5985bf439e228bcd9a626a86d35d6c1f1eac646adffaf4c38682c65044f46d3cd3065379e8ae1a94ed422ac0003e57de604c382af92326a44b4b66392d1e53fb4690b5feb4d85bf2af38664b0382386f90566a0bd2cb64624717b85a532c9867992a8557bc7980b4d0c14bf581edcef7ed0204c398a442e604818d8294ed3b3035405d753165ee61fe03f9f1adbac03bf758d6d4ffb7b6dfdfab96742a067b0c03008143b2cbdff1cb307190b14f09647a6fc968eea6b8";
		aLicense2 = "";
	}
	else {
		  // localhost
		  aLicense = "";
		  aLicense2 = "";
	}

	if(navigator.platform.indexOf ("Linux") != -1)
	{
		aLicense2 = "";
	}

	// ì¬ì´í¸ìì ì¬ì©í  AnySign ë²ì .
	var aVersion = "1.1.2.7";

	// support ko-KR and en-US
	var aLanguage = "ko-KR";

	// support euc-kr and utf-8
	var aCharset = "utf-8";

	// blockEnc, blockDec ì¸ì½ë© ì ë³´, euc-kr ì¸ì½ë©ì ìí  ê²½ì° ì¤ì 
	var aEncCharset = "";

	// TransKey ì²´í¬ë°ì¤ ì¬ì© ì¬ë¶.(xcë ë¯¸ì§ì)
	//20190417 ë¼ì¨ìíì´ ì´ì í¸ëë¦¬ì íìíì¬ aTransKeyCheckBoxEnable ì§ììíê¸°ë¡ í¨
	var aTransKeyCheckBoxEnable = false;

	// TransKey ì¬ì© ì¬ë¶.
	var aTransKeyEnable = false;

	//TransKey ìë ì¢í ìì¹ ì¡°ì ê°, ex)"30 30"
	var aTransKeyXY = "";

	// TouchEnKey ì¬ì© ì¬ë¶.
	var aTouchEnKeyEnable = false;

	// í¤ë³´ëë³´ì/ê°ìí¤í¨ëë¥¼ ì¬ì©íì§ ìë ì¼ë° í¤ë³´ë ìë ¥ íì© ì¬ë¶
	var aAllowNativeInput = true;

	// Openkeyboard ì¬ì© ì¬ë¶.
	var aOpenkeyboardEnable = false;

	// K-Defense ì¬ì© ì¬ë¶.
	var aKDefenseEnable = false;

	// K-Defense E2E ì ì© ì Prefix
	var aKDefenseE2EPrefix = "xk";

	// ìì¹´ VKeypad ì¬ì© ì¬ë¶.
	var aVKeypadEnable = false;

	// ìì¹´ KeyCrypt_HTML5 ì¬ì© ì¬ë¶.
	var aKeyCryptHTML5Enable = false;

	// XecureKeyPad ì¬ì© ì¬ë¶.
	var aXecureKeyPadEnable = false;

	// ASTx ì¬ì© ì¬ë¶.
	var aASTxEnable = false;

	// TouchEn nxKey ì¬ì© ì¬ë¶.
	var aTouchEnnxKeyEnable = false;

	// TouchEn nxKey Macì© ì§ì ì¬ë¶, Macì© í¤ë³´ëë³´ì ì ê³µ ì trueë¡ ì¤ì 
	var aTouchEnnxKeyMacEnable = false;

	// ìì¹´ NOS(nProtect Online Security V1.0) (í¤ë³´ëë³´ì)
	var aIncaNOSv10Enable = false;

	// ìì¹´ NOS(nProtect Online Security V1.0) (ê°ìí¤í¨ë)
	var aIncaNOSv10KeypadEnable = false;

	// Kings Non-activeX í¤ë³´ëë³´ì ì¬ì© ì¬ë¶
	var aKOSKeyEnable = false;

	// ìíí¸ì¼ë ë¸ ezKeytec í¤ë³´ë ë³´ì ì¬ì© ì¬ë¶
	var aEzKeyTecEnable = false;

	/*------------------------------------------------------------------------
	 * AnySignLite ì¤ì .
	 *----------------------------------------------------------------------*/
	// AnySignLite ì§ì ë¸ë¼ì°ì  (XCrypto.js ì§ì)
	// Firefox 3.6 ì´ì, Chrome 7 ì´ì, IE 10 ì´ì, Opera 12.02 ì´ì, Safari 6.0.2 ì´ì

	// AnySignLite ì¬ì© ì¬ë¶.
	var aAnySignLiteEnable = true;

	//ê¸ê²°ì ê³µëì ì¥ì ì¬ì©

	var aOpenCertEnable = false;
	if (typeof XDomainRequest != "undefined")
	{
		aOpenCertEnable = false;

	}

	//var aOpenApi = "dXug9cRuOS5_s9igETtOqw321CwsyiI2zN_k0poyaE4";
	var aOpenApi = "";

	//ê¸ê²°ì ê³µëì ì¥ì init ì¤í¨ ì ìë´ë©ìì§ ì¶ë ¥ ì¬ë¶
	var aOpenCertAlertEnable = true;
	var aOpenCertInitFlag = false;

	var aOpenCertVersion = createOpenCertJSVersion ();
	var aOpenCertCorp = 'hsecure';

	//ê¸ê²°ì ì¤í¬ë¦½í¸ ê²½ë¡, íì¤í¸
	var aOpenCertJS = "https://fidoweb.yessign.or.kr:3100/v2/opencert.js" + "?dt=" + aOpenCertVersion + "&corp=" + aOpenCertCorp;
	var aOpenCertRelayJS = "https://fidoweb.yessign.or.kr:3100/v2/relay.js" + "?dt=" + aOpenCertVersion + "&corp=" + aOpenCertCorp;

	//ê¸ê²°ì ì¤í¬ë¦½í¸ ê²½ë¡ , ì´ì
	//var aOpenCertJS = "https://yessign.or.kr:3100/v2/opencert.js" + "?dt=" + aOpenCertVersion + "&corp=" + aOpenCertCorp;
	//var aOpenCertRelayJS = "https://yessign.or.kr:3100/v2/relay.js" + "?dt=" + aOpenCertVersion + "&corp=" + aOpenCertCorp;

	// 'ë¸ë¼ì°ì  ì¸ì¦ì' ì´ë ê¸°ë¥ (ìë² URL)
	var aCertRelayFromBrowserServerUrl = "https://reaver.softforum.com:8443/xcs/";
	var aMobileWebImportOption = ["web"] //["web","app"]

	// hConvert2pfx.exe ë¤ì´ë¡ë ê²½ë¡ (PFX ì¸ì¦ì ë³í íë¡ê·¸ë¨)
	var aHConvert2pfxDownloadURL = aBasePath + "/download/hConvert2pfx.exe";

	var aCrossStorageHub = "";
	//var aCrossStorageHub = "https://reaver.softforum.com/XecureDemo/up/anySign_dev/AnySign4PC/ext/crossStorageHub.html";
	var aCrossStorageOption = null;
	//var aCrossStorageOption = { timeout: 5000, frameId: 'storageFrame', promise: includePromiseObject };

	// ë¸ë¼ì°ì  ì¸ì¦ì ë´ë³´ë´ê¸° ê¸°ë¥ ì§ì
	// 1) FileSaver : Javascript library (FileSaver.min.js)
	//    Chrome 14, Firefox 20.0, IE 13(Edge 13), Opera 15, Safari(ë¯¸ì§ì)
	//    IE 10 ~ 11
	// 2) HTML <a> download Attribute
	//    Chrome 14, Firefox 20.0, IE 13(Edge 13), Opera 15, Safari(ë¯¸ì§ì)
	//    IE 10 ~ 11 (ë¯¸ì§ì)

	// * Downloadify -> FileSaver ë¡ ëì²´ëì´ ì¬ì©ìí¨
	// - Downloadify : Javascript + Flash library (swfobject.js, downloadify.min.js)
	//   Flash 10 ì´ì ì¤ì¹ íì (Safari ë¯¸ì§ì)
	var aExportCertDownloadify = {
		// Downloadify ì¤ì 
		swf: aBasePath + "/swf/downloadify.swf",
		btnImg_koKR: aBasePath + "/img/btn_complete.png",
		btnImgWidth_koKR: 52,
		btnImgHeight_koKR: 25,
		btnImg_enUS: aBasePath + "/img/btn_complete_eng.png",
		btnImgWidth_enUS: 80,
		btnImgHeight_enUS: 25
	}

	// XecureKeyPad HTML5 ì¬ì© ì¬ë¶.
	var aXecureKeyPadHTML5Enable = false;

	var aXecureKeyPadMobileEnable = false;
	/*----------------------------------------------------------------------*/

	// AnySign ì¬ì© ì¬ë¶.
	var aAnySignEnable = true;

	// AnySign ë¡ë© ì¬ë¶. ë¡ë©ì´ ì±ê³µíë©´ trueë¡ ë³ê²½.
	var aAnySignLoad = false;

	// AnySign ë¡ë© ì´ë¯¸ì§ ì¬ì© ì¬ë¶.
	var aAnySignShowImg = {
		showImg: false,
		//showUpdateImg: true,
		showDiv: true,
		zIndex: 530000,
		endImgAfterDec: false
	}

	// AnySign Live Update.
	var aAnySignLiveUpdate = false;

	// AnySign JSESSIONID.
	var aAnySignSID = window.location.host;

	// AnySign IntegrityID
	var aAnySignITGT = "";

	// íë©´ ë´ DIV ìì­ì¼ë¡ ì¸ì¦ì ì íì°½ UI ìì¹
	// 0 : pop(default), 1 : wide, 2 : mini
	var aDivInsertOption = false;

	// EN_FINAANCIAL = 0, EN_KEB = 1 (ICì¹´ë)
	var aFinancialType = 0;

	// ì í¨ê¸°ê° ë§ë£ë ì¸ì¦ì ë³´ì´ê¸°
	var aShowExpiredCert = false;

	// certsaveloc dialog
	// 0 : none(ì¸ì¦ì ë°ê¸ ì ICì¹´ëë¡ ë°ê¸), 1 : display
	var aShowLocationDialog = 1;

	// ì¸ì¦ì ê°±ì  ì ë¤ë¥¸ ì ì¥ë§¤ì²´ì ì ì¥
	var aShowRenewCertSaveLoc = false;

	// WBì¤íì¼ ì ì©
	var aWBStyleApply = false;

	// AnySign ìí¸í íì´ì§ ë³µí¸í(BlockDec) ìë£ ì¬ë¶.
	var aPageBlockDecDone = false;

	// AnySign ì¤ì¹ íì´ì§ ìì°½ì¼ë¡ ì¤í ì¬ë¶.
	var aInstallPageNewOpen = false;

	// ê°íë ë¹ë°ë²í¸ ì ì± ì ì© ë²ì
	// ìë¦¿ì 10ìë¦¬ ì´ì, ì«ì/ìë¬¸/í¹ìë¬¸ì(space í¬í¨) ë°ëì í¬í¨, í¹ìë¬¸ì 4ì¢ ì ì¸(' " | \)
	var aEnhancedPW = {
		_change: true,
		_export: true,
		_import: true,
		_copy: false
	}

	var aShowInfoDialog = {
        enable: false,
        close: false,
        link: aBasePath + "/download/browserCertificate_user_guide.pdf",
        link_type: "window.open", //href or window.open or download
        target: "_blank", // href property
        name: "_blank", // window.open property
        option: "width=800,height=800" // window.open property
    };

	// SignDataCMSWithHTMLEx
    var aUseIframeData = true;

	// UBIKey
	var aUbikeyDataList =
	[
		{
			mSite : "INFOVINE",
			mLiveUpdate : "NULL",
			mSecurity : "SOFTFORUM",
			mKeyboardSecurity : "NULL",
			mInstallURL : "http://www.ubikey.co.kr/infovine/download.html",
			mInstallPageOption : "width=450,height=400,left=10,top=10",
			mPlatForm : "Linux",
			mVersion : "1,0,0,1"
		},
		{
			mSite : "INFOVINE",
			mLiveUpdate : "NULL",
			mSecurity : "SOFTFORUM",
			mKeyboardSecurity : "NULL",
			mInstallURL : "http://www.ubikey.co.kr/infovine/download.html",
			mInstallPageOption : "width=450,height=400,left=10,top=10",
			mPlatForm : "Mac",
			mVersion : "1,0,0,1"
		},
		{
			mSite : "EPS",
			mLiveUpdate : "NULL",
			mSecurity : "SOFTFORUM",
			mKeyboardSecurity : "KINGS_INFOVINE",
			mInstallURL : window.location.protocol + "//" + window.location.host + "/infovine/download.html",
			mInstallPageOption : "width=450,height=400,left=10,top=10",
			mPlatForm : "Win32",
			mVersion : "1,4,1,6"
		},
		{
			mSite : "EPS",
			mLiveUpdate : "NULL",
			mSecurity : "SOFTFORUM",
			mKeyboardSecurity : "KINGS_INFOVINE",
			mInstallURL : window.location.protocol + "//" + window.location.host + "/infovine/download.html",
			mInstallPageOption : "width=450,height=400,left=10,top=10",
			mPlatForm : "Win64",
			mVersion : "1,4,1,6"
		}
	]

	// MobiSign URL
	var aMobiSignData = { mSite : "123456",
						  mInstallURL : "http://www.mobisign.kr/mobisigndll.htm",
						  mInstallPageOption : "width=450,height=400,left=10,top=10",
						  mVersion : "5.0.3.7" }

	// ì¤ë§í¸ì¸ì¦, aStorage = SMARTCERT
	var aSmartCertEnable = true; // true ì¤ì  ì ë³´ìí í° ë¦¬ì¤í¸ì ìë³´ì
	var aSmartCertDataList =
	[
		{
			// DreamSecurity
			mProvider : "Mobile_SmartCert",
			mDriverName : "USIM_0002",
			mInstallURL : "http://ids.smartcert.kr", // http://download.smartcert.kr/
			mInstallPageOption : "width=500, height=380", // width=595,height=288
			mSiteDomainURL : window.location.hostname,
			mServiceServerIP : "center.smartcert.kr",
			mServiceServerPort : "443",
			mSiteCode : "",				// ì¬ì© ìí¨
			mMagicNum : "19579238",
			mPlainDataView : "NO",		// ì ììëª ì í´ëí°ìì ìë¬¸íì¸ (YES or NO) *SignedAttributes ìµì íì
			mFilterShowExpired : "1",	// ì í¨ê¸°ê° ë§ë£ë ì¸ì¦ì íì ì¬ë¶ (0:ë³´ì¬ì¤, 1:ìë³´ì¬ì¤)
			mFilterOIDList : "",		// OID ë¡ ì¸ì¦ì íí°ë§ (êµ¬ë¶ì:|)
			mFilterCACert : "",			// CA SubjectDNëª©ë¡ì¼ë¡ ì¸ì¦ì íí°ë§ (êµ¬ë¶ì:|)
			mFilterUserCert : "",		// ì¬ì©ì ì¸ì¦ì íí°ë§ (í¬ë§·: subject=íê¸¸ë,issuer=yessign,serial=132411FF)
			mLoginOrder : "1"			// 0:ë¡ê·¸ì¸->ì¸ì¦ì ì í, 1:ì¸ì¦ì ì í->ë¡ê·¸ì¸
		},
		{
			// RaonSecure
			mProvider : "Mobile_USIMsmartCERT",
			mDriverName : "USIM_0001",
			mInstallURL : "http://www.usimcert.com/popup/pop_install.html",
			mInstallPageOption : "width=516,height=419,left=0,top=0",
			mSiteDomainURL : window.location.hostname,
			mServiceServerIP : "",
			mServiceServerPort : "",
			mSiteCode : "6|000000000",	// ModCode|SiteCode
			mMagicNum : "19579238",
			mPlainDataView : "NO",		// ë¯¸ì§ì
			mFilterShowExpired : "1",	// ì í¨ê¸°ê° ë§ë£ë ì¸ì¦ì íì ì¬ë¶ (0:ë³´ì¬ì¤, 1:ìë³´ì¬ì¤)
			mFilterOIDList : "",		// OID ë¡ ì¸ì¦ì íí°ë§ (êµ¬ë¶ì:|)
			mFilterCACert : "",			// CA SubjectDNëª©ë¡ì¼ë¡ ì¸ì¦ì íí°ë§ (êµ¬ë¶ì:|)
			mFilterUserCert : "",		// ì¬ì©ì ì¸ì¦ì íí°ë§ (í¬ë§·: IssuerDN $ SubjectDN $ Serial)
										// ììëë¡ ìë ¥íê³  ê°ì´ ìì¼ë©´ NONEì ìë ¥ (ì: yessign$íê¸¸ë$132411FF, NONE$íê¸¸ë)
			mLoginOrder : "1"			// 0:ë¡ê·¸ì¸->ì¸ì¦ì ì í, 1:ì¸ì¦ì ì í->ë¡ê·¸ì¸
		}
	]

	// Ubikey ë³´ìí í°
	var aUbikeyPKCS11Enable = false; // true ì¤ì  ì ì¤ì¹ ì ë¬´ì ìê´ìì´ ë³´ìí í° ë¦¬ì¤í¸ì ë³´ì
	var aUbikeyPKCS11Data = {
	 		mProvider : "UBIKey_USIM",
	 		mSite : "WOORIBANK",
	 		mLiveUpdate : "https://spib.wooribank.com/pib/Dream?withyou=CMCOM0151|1|jsp|714|384|22",
	 		mSecurity : "SOFTFORUM",
	 		mKeyboardSecurity : "SOFTFORUM",
	 		mInstallURL : "./Dream?withyou=CTCER0069",
	 		mInstallPageOption : "width=450,height=400,left=10,top=10"
	}

	// ìì ëì¤í¬, aStorage = SECUREDISK
	var aSecureDiskEnable = true; // true ì¤ì  ì ë³´ìí í° ë¦¬ì¤í¸ì ìë³´ì
	var aSecureDiskData = {
		mProvider : "SecureDisk",
		mInstallURL : "../securedisk/install.html",
		mInstallPageOption : "width=450,height=400,left=10,top=10"
	}

	// XecureFreeSign : aStorage = XFS
	var aXecureFreeSignEnable = false;
	var aXecureFreeSignData = {
		serviceURL : "https://xfs.hsecure.co.kr:8070/xfs/api/", // OpenAPI default URL
		registURL : "https://xfs.hsecure.co.kr:8081/portal/index.html#/main/", // íì ê°ì URL (ìì°½ ì´ë¦¼)
		serviceKey : "2",		// ìë¹ì¤ í¤
		loginPass2 : true,		// 2ì°¨ ì¸ì¦ ì¬ì© ì ë¬´
		signType : 0,			// ìëª ë°©ë² - 0: ìë² ìëª(default), 1: ìë² í´ì¬(ìë¬¸) ìëª, 2: í´ë¼ì´ì¸í¸ ìëª(ì¸ì¦ì ë¡ë°)
		signOption : 0,			// ìëª ìµì
		asyncOption: 2			// í¸ì¶ ë°©ì - 0: ëê¸° ë°©ì(ì§íì°½ X), 1: ë¹ëê¸° ë°©ì(ì§íì°½ O), 2: ìë
	}

	// WebPage : aStorage = WEBPAGE
	var aWebPageStorageEnable = false;
	var aWebPageStorageData = {
		type : 0, // type - 0:value(certList), 1:DOM(storageElementID)
		certList : "",
		storageElementID : "AnySignCertInfo"
	}

	// XecureKeyPad E2E ì¬ì© ì¬ë¶ (XecureFreeSign, WebPage ì ì¥ë§¤ì²´ì ì ì©)
	var aXecureKeyPadE2EEnable = false;

	// Default Xgate Address.
	var aXgateAddress = window.location.hostname + ":1443:18080";

	// Xgate ì ì ë°©ì (0: direct->proxy, 1:proxy, 2:proxy->direct)
	var aProxyUsage = "";

	// Default í¨ì¤ìë íë¦°íì.
	var aLimitedTrial = 3;

	// Default CA list.
	//var aCAList	= "Root CA,XecurePKI51 ca,cn=CA131000010,pki50ca,pki70_test_CA";
	//aCAList		+= ",CA131000002Test,CA131000002,CA131000010,Softforum CA 3.0";
	//aCAList		+= ",SoftforumCA,yessignCA-OCSP,signGATE CA,signGATE CA4,SignKorea CA,SignKorea CA2,CrossCertCA,CrossCertCA2";
	//aCAList		+= ",CrossCertCA-Test2,3280TestCAServer,NCASignCA,TradeSignCA,TradeSignCA2,yessignCA-TEST";
	//aCAList		+= ",lotto test CA,NCATESTSign,SignGateFTCA,SignKorea Test CA,SignKorea Test CA2,TestTradeSignCA";
	//aCAList		+= ",Softforum Demo CA,mma ca,ë³ë¬´ì²­ ì¸ì¦ê¸°ê´,MND CA,signGATE FTCA02";
	//aCAList		+= ",.ROOT.CA.KT.BCN.BU,CA974000001,setest CA,3280TestCAServer";
	//aCAList		+= ",yessignCA-Test Class 0,yessignCA-Test Class 1,yessignCA-Test Class 2,yessignCA-Test Class 3,yessignCA-Test Class 4,TradeSignCA2009Test2,CrossCertTestCA2,1024TestCA";
	//aCAList		+= ",yessignCA,yessignCA Class 1,yessignCA Class 2";
	//aCAList		+= ",CA130000031T,CA131000031T,CA131100001,CA134040001,Test1024CA,subca,subca_02,MMACA001";
	var aCAList="";
	// real
	//ê¸ìµê²°ì ì
	aCAList += "yessignCA Class 1";
	aCAList+=":1.2.410.200005.1.1.1";
	aCAList+=":1.2.410.200005.1.1.2";
	aCAList+=":1.2.410.200005.1.1.4";
	aCAList+=":1.2.410.200005.1.1.5";
	aCAList+=":1.2.410.200005.1.1.6.1";

	aCAList += ",yessignCA Class 2";
	aCAList+=":1.2.410.200005.1.1.1";
	aCAList+=":1.2.410.200005.1.1.2";
	aCAList+=":1.2.410.200005.1.1.4";
	aCAList+=":1.2.410.200005.1.1.5";
	aCAList+=":1.2.410.200005.1.1.6.1";

	//íêµ­ì ë³´ì¸ì¦
	aCAList += ",signGATE CA4";
	aCAList+=":1.2.410.200004.5.2.1.1";
	aCAList+=":1.2.410.200004.5.2.1.2";
	aCAList+=":1.2.410.200004.5.2.1.7.1";
	aCAList+=":1.2.410.200004.5.2.1.7.2";

	aCAList += ",signGATE CA5";
	aCAList+=":1.2.410.200004.5.2.1.1";
	aCAList+=":1.2.410.200004.5.2.1.2";
	aCAList+=":1.2.410.200004.5.2.1.7.1";
	aCAList+=":1.2.410.200004.5.2.1.7.2";

	//íêµ­ì¦ê¶ì ì°(ì½ì¤ì½¤)
	aCAList += ",SignKorea CA2";
	aCAList+=":1.2.410.200004.5.1.1.5"; // platinum(ë²ì©) ê°ì¸
	aCAList+=":1.2.410.200004.5.1.1.7"; // platinum(ë²ì©) ë²ì¸
	aCAList+=":1.2.410.200004.5.1.1.9"; // gold(ì©ëì í) ê°ì¸-ì¦ê¶ë³´í (ê°ì¸ ì©ëì íì©ì ì ìë¯¼ììë¬´ ê°ë¥í¨ 131001)
	aCAList+=":1.2.410.200004.5.1.1.9.2"; // gold(ì©ëì í) ê°ì¸-ì ì©ì¹´ëì© (ê°ì¸ ì©ëì íì©ì ì ìë¯¼ììë¬´ ê°ë¥í¨ 131001)
	aCAList+=":1.2.410.200004.5.1.1.10"; // ê³¨ë ë²ì¸ìë²
	aCAList+=":1.2.410.200004.5.1.1.11"; // silver(ì©ëì í) ê°ì¸ (ê¸ìµê±°ë ë¶ê°, ì ìì ë¶ë¯¼ììë¹ì¤ìë ì¬ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.1.1.12"; // silver(ì©ëì í) ë²ì¸ (í¹ì  ìë¹ì¤ë±ì ì íë ì©ëë¡ ì¬ì©ë ì ìì. ì ìì ë¶ë¯¼ììë¹ì¤ìë ì¬ì©)

	aCAList += ",SignKorea CA3";
	aCAList+=":1.2.410.200004.5.1.1.5"; // platinum(ë²ì©) ê°ì¸
	aCAList+=":1.2.410.200004.5.1.1.7"; // platinum(ë²ì©) ë²ì¸
	aCAList+=":1.2.410.200004.5.1.1.9"; // gold(ì©ëì í) ê°ì¸-ì¦ê¶ë³´í (ê°ì¸ ì©ëì íì©ì ì ìë¯¼ììë¬´ ê°ë¥í¨ 131001)
	aCAList+=":1.2.410.200004.5.1.1.9.2"; // gold(ì©ëì í) ê°ì¸-ì ì©ì¹´ëì© (ê°ì¸ ì©ëì íì©ì ì ìë¯¼ììë¬´ ê°ë¥í¨ 131001)
	aCAList+=":1.2.410.200004.5.1.1.10"; // ê³¨ë ë²ì¸ìë²
	aCAList+=":1.2.410.200004.5.1.1.11"; // silver(ì©ëì í) ê°ì¸ (ê¸ìµê±°ë ë¶ê°, ì ìì ë¶ë¯¼ììë¹ì¤ìë ì¬ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.1.1.12"; // silver(ì©ëì í) ë²ì¸ (í¹ì  ìë¹ì¤ë±ì ì íë ì©ëë¡ ì¬ì©ë ì ìì. ì ìì ë¶ë¯¼ììë¹ì¤ìë ì¬ì©)

	//íêµ­ì ìì¸ì¦
	aCAList += ",CrossCertCA2";
	aCAList+=":1.2.410.200004.5.4.1.1"; // ë²ì©(ê°ì¸) (ëª¨ë  ì ìê±°ë ì´ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.2"; // ë²ì©(ê°ì¸) (ëª¨ë  ì ìê±°ë ì´ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.101"; // ìí/ë³´íì© (ì ìë¯¼ìê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.102"; // ì¦ê¶ê±°ëì© (ì ìë¯¼ìê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.104"; // ì ìë¯¼ìì©

	aCAList += ",CrossCertCA3";
	aCAList+=":1.2.410.200004.5.4.1.1"; // ë²ì©(ê°ì¸) (ëª¨ë  ì ìê±°ë ì´ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.2"; // ë²ì©(ê°ì¸) (ëª¨ë  ì ìê±°ë ì´ì©ê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.101"; // ìí/ë³´íì© (ì ìë¯¼ìê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.102"; // ì¦ê¶ê±°ëì© (ì ìë¯¼ìê°ë¥)
	aCAList+=":1.2.410.200004.5.4.1.104"; // ì ìë¯¼ìì©

	//íêµ­ë¬´ì­ì ë³´íµì (KTNet)
	aCAList += ",TradeSignCA2";
	aCAList+=":1.2.410.200012.1.1.1";
	aCAList+=":1.2.410.200012.1.1.3";
	aCAList+=":1.2.410.200012.1.1.101";
	aCAList+=":1.2.410.200012.1.1.103";

	aCAList += ",TradeSignCA3";
	aCAList+=":1.2.410.200012.1.1.1";
	aCAList+=":1.2.410.200012.1.1.3";
	aCAList+=":1.2.410.200012.1.1.101";
	aCAList+=":1.2.410.200012.1.1.103";

	//ì´ëí(INIPASS)
	aCAList += ",INIPASS CA";
	// dev
	aCAList += ",yessignCA-Test Class 4";
	aCAList += ",SignKorea Test CA5";
	aCAList += ",signGATE FTCA06";
	aCAList += ",CrossCertTestCA2";
	aCAList += ",TradeSignCA2009Test2";
	aCAList += ",INIPASS TEST CA2";
	aCAList += ",subca,subca_02";

	// Storage ì ë³´.
	var aStorage = "HARD,REMOVABLE,ICCARD,PKCS11,USBTOKEN,MPHONE";

	// ì ì¥ë§¤ì²´ ë²í¼(ì¸ì¦ì ìì¹) ì¬ì© ì¬ë¶.
	var aStorageEnable = true;

	// ê¸°ë³¸ ì í ì ì¥ë§¤ì²´ë¥¼ CertLocation ì¤ì ê°ê³¼ ëì¼í ê°ì¼ë¡ ì¤ì  ê°ë¥. 0 ì ìµì ë¹íì±í. API ì¸ìë¡ aCertLocation ì¤ì ìë í´ë¹ ì¤ì ì´ ì°ì ë¨.
	var aDefaultCertLocation = 0;

	// Security Option ì ë³´.
	var aSecurityOption = "0:browser:hard:removable:pkcs11:mphone";

	// Security Key ì ë³´.
	var aSecurityKey = "XW_SKS_SFVIRTUAL_DRIVER";

	// ì¸ì¦ì ì íì ë§ë£ì¼ ê²½ê³ ì°½ ì¤ì  (Alert)
	var aExpireDateAlert = false;

	// SignDataCMSWithHTMLEx ì¤ì 
	var aSignHTMLOption = { aDelimiter: "&",
							aStringFormat: "%s" };

	// AnySignLite WebCMP RelayServer ì ë³´.
	var aWebCMPRelayServerInfo = { aAddress: window.location.protocol + "//" + window.location.hostname,
							   	   aPort: window.location.protocol.indexOf("https") !== -1 ? "7072" : "7071" };

	// ì¸ì¦ì ê´ë¦¬ìì ìì ì ê²ì¦ ë²í¼ ì¬ì© ì¬ë¶
	var aVerifyCertOwnerBtn = true;

	// ì¸ì¦ì ë°ê¸, ê°±ì ì Web Worker ë¥¼ ì¬ì©íë ê²½ì° ì¬ì©ë  Worker ê°¯ì. 0ì´ë©´ Web Worker ì¬ì© ìí¨.
	var aWebWorkerNumber = 0;

	// ì¸ì¦ì ë°ê¸, ê°±ì ì Web Worker ë¥¼ ì¬ì©íë ê²½ì° ì¬ì©ë  Worker script URL ê²½ë¡.
	var aWebWorkerScriptURL = aBasePath + "/ext/worker.min.js";

	// Extension ê´ë ¨ ì¤ì 
	var aExtensionSetting = {
		mEncCallback: "",
		mLoadCallback: {func:null, param:null},
		mExternalCallback: {func:null, result:-1},
		mPageDecCallback: [],
		mPort: 31026,
		mDirectPort: 10530,
		mTrialPortRange: 1,
		mDialog: "", // guidewindow
		mInstallCheck_CB: null,
		mInstallCheck_State: null,
		mInstallCheck_Level: 0,
		mIntegrityPageURL: aBasePath + "/../test/check_integrity.jsp",
		mIgnoreInstallPage: false,
		mImgIntervalFunc: null,
		mImgIntervalError: false,
		mIsIE7: false,
		mInstallMsg_KR : "[AnySign for PC] ì¸ì¦ ë³´ì íë¡ê·¸ë¨ ì¤ì¹ê° íìí©ëë¤.\n[íì¸]ì ì ííìë©´ ì¤ì¹íì´ì§ë¡ ì°ê²°ë©ëë¤.",
		mInstallMsg_EN : "[AnySign for PC] Installation of certified authentication security program is required.\nIf you select OK to go to the installation page."
	};

	var aUISettings = {
		mCSSDefault : ""
	}

	return new UnifiedPluginInterface (aBasePath,
									   aTransKeyPath,
									   aTransKeyEnable,
									   aTransKeyXY,
									   aTransKeyCheckBoxEnable,
									   aTouchEnKeyEnable,
									   aAllowNativeInput,
									   aOpenkeyboardEnable,
									   aKDefenseEnable,
									   aVKeypadEnable,
									   aKeyCryptHTML5Enable,
									   aXecureKeyPadEnable,
									   aXecureKeyPadHTML5Enable,
									   aXecureKeyPadMobileEnable,
									   aXecureKeyPadE2EEnable,
									   aASTxEnable,
									   aTouchEnnxKeyEnable,
									   aTouchEnnxKeyMacEnable,
									   aIncaNOSv10Enable,
									   aIncaNOSv10KeypadEnable,
									   aIncaNOSv10KeypadImgPath,
									   aKOSKeyEnable,
									   aEzKeyTecEnable,
									   aAnySignEnable,
									   aAnySignLiteEnable,
									   aOpenCertEnable,
									   aOpenCertInitFlag,
									   aOpenCertAlertEnable,
									   aOpenApi,
									   aOpenCertJS,
									   aOpenCertRelayJS,
									   aCertRelayFromBrowserServerUrl,
									   aMobileWebImportOption,
									   aHConvert2pfxDownloadURL,
									   aCrossStorageHub,
									   aCrossStorageOption,
									   aExportCertDownloadify,
									   aAnySignLoad,
									   aAnySignShowImg,
									   aAnySignLiveUpdate,
									   aAnySignSID,
									   aAnySignITGT,
									   aKDefenseE2EPrefix,
									   aUbikeyDataList,
									   aMobiSignData,
									   aVersion,
									   aDownloadURL,
									   aProtocol,
									   aXgateAddress,
									   aProxyUsage,
									   aLimitedTrial,
									   aCAList,
									   aStorage,
									   aSecurityOption,
									   aSecurityKey,
									   aSecurityContext,
									   aLicense,
									   aLicense2,
									   aLanguage,
									   aCharset,
									   aEncCharset,
									   aExpireDateAlert,
									   aSignHTMLOption,
									   aExtensionSetting,
									   aUISettings,
									   aDivInsertOption,
									   aFinancialType,
									   aShowExpiredCert,
									   aShowLocationDialog,
									   aShowRenewCertSaveLoc,
									   aWBStyleApply,
									   aPageBlockDecDone,
									   aInstallPageNewOpen,
									   aEnhancedPW,
									   aShowInfoDialog,
									   aUseIframeData,
									   aSmartCertEnable,
									   aSmartCertDataList,
									   aUbikeyPKCS11Enable,
									   aUbikeyPKCS11Data,
									   aSecureDiskEnable,
									   aSecureDiskData,
									   aWebCMPRelayServerInfo,
									   aVerifyCertOwnerBtn,
									   aXecureFreeSignEnable,
									   aXecureFreeSignData,
									   aWebPageStorageEnable,
									   aWebPageStorageData,
									   aStorageEnable,
									   aDefaultCertLocation,
									   aWebWorkerNumber,
									   aWebWorkerScriptURL);
}

function UnifiedPluginInterface (aBasePath,
								 aTransKeyPath,
								 aTransKeyEnable,
								 aTransKeyXY,
								 aTransKeyCheckBoxEnable,
								 aTouchEnKeyEnable,
								 aAllowNativeInput,
								 aOpenkeyboardEnable,
								 aKDefenseEnable,
								 aVKeypadEnable,
								 aKeyCryptHTML5Enable,
								 aXecureKeyPadEnable,
								 aXecureKeyPadHTML5Enable,
								 aXecureKeyPadMobileEnable,
								 aXecureKeyPadE2EEnable,
								 aASTxEnable,
								 aTouchEnnxKeyEnable,
								 aTouchEnnxKeyMacEnable,
								 aIncaNOSv10Enable,
								 aIncaNOSv10KeypadEnable,
								 aIncaNOSv10KeypadImgPath,
								 aKOSKeyEnable,
								 aEzKeyTecEnable,
								 aAnySignEnable,
								 aAnySignLiteEnable,
								 aOpenCertEnable,
								 aOpenCertInitFlag,
								 aOpenCertAlertEnable,
								 aOpenApi,
								 aOpenCertJS,
								 aOpenCertRelayJS,
								 aCertRelayFromBrowserServerUrl,
								 aMobileWebImportOption,
								 aHConvert2pfxDownloadURL,
								 aCrossStorageHub,
								 aCrossStorageOption,
								 aExportCertDownloadify,
								 aAnySignLoad,
								 aAnySignShowImg,
								 aAnySignLiveUpdate,
								 aAnySignSID,
								 aAnySignITGT,
								 aKDefenseE2EPrefix,
								 aUbikeyDataList,
								 aMobiSignData,
								 aVersion,
								 aDownloadURL,
								 aProtocol,
								 aXgateAddress,
								 aProxyUsage,
								 aLimitedTrial,
								 aCAList,
								 aStorage,
								 aSecurityOption,
								 aSecurityKey,
								 aSecurityContext,
								 aLicense,
								 aLicense2,
								 aLanguage,
								 aCharset,
								 aEncCharset,
								 aExpireDateAlert,
								 aSignHTMLOption,
								 aExtensionSetting,
								 aUISettings,
								 aDivInsertOption,
								 aFinancialType,
								 aShowExpiredCert,
								 aShowLocationDialog,
								 aShowRenewCertSaveLoc,
								 aWBStyleApply,
								 aPageBlockDecDone,
								 aInstallPageNewOpen,
								 aEnhancedPW,
								 aShowInfoDialog,
								 aUseIframeData,
								 aSmartCertEnable,
								 aSmartCertDataList,
								 aUbikeyPKCS11Enable,
								 aUbikeyPKCS11Data,
								 aSecureDiskEnable,
								 aSecureDiskData,
								 aWebCMPRelayServerInfo,
								 aVerifyCertOwnerBtn,
								 aXecureFreeSignEnable,
								 aXecureFreeSignData,
								 aWebPageStorageEnable,
								 aWebPageStorageData,
								 aStorageEnable,
								 aDefaultCertLocation,
								 aWebWorkerNumber,
								 aWebWorkerScriptURL)
{
	this.mAnySignForPC = (function() {
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

			var path = aBasePath + "/AnySign4PC.js?version=" + year + month + day + hour + minutes;
			req.open ('GET', path, false);
			req.send (null);
			return eval(GetSafeResponse(req.responseText));
		})();


	this.mPlatformList =
	[
		{
			aName				: "linux",
			aSearchWord			: "Linux",
			aAnySignInstallPath	:
			[
				aProtocol + aDownloadURL + aVersion + "/anysign4pc_linux_i386.deb",
				aProtocol + aDownloadURL + aVersion + "/anysign4pc_linux_i386.rpm",
				aProtocol + aDownloadURL + aVersion + "/anysign4pc_linux_x86_64.deb",
				aProtocol + aDownloadURL + aVersion + "/anysign4pc_linux_x86_64.rpm"
			],
			aInstallPage		: "/eo/InstallAnySign.eo"
		},
		{
			aName				: "mac universal",
			aSearchWord			: "Mac",
			aAnySignInstallPath	: aProtocol + aDownloadURL + aVersion + "/anysign4pc_mac_universal.pkg",
			aInstallPage		: "/eo/InstallAnySign.eo"
		},
		{
			aName				: "windows 32bit",
			aSearchWord			: "Win32",
			aCABInstallPath		: "../install/xwcup_install_windows_x86.cab",
			aInstallPath		: "../install/xwcup_install_windows_x86.exe",
			//aAnySignInstallPath	: aProtocol + aDownloadURL + aVersion + "/AnySign_Installer.exe",
			aAnySignInstallPath	: "/AnySign4PC/install/v1.1.2.7/AnySign_Installer.exe",
			aInstallPage		: "/eo/InstallAnySign.eo"
		},
		{
			aName				: "windows 64bit",
			aSearchWord			: "Win64",
			aCABInstallPath		: "../install/xwcup_install_windows_x64.cab",
			aInstallPath		: "../install/xwcup_install_windows_x64.exe",
			//aAnySignInstallPath	: aProtocol + aDownloadURL + aVersion +"/AnySign_Installer.exe",
			aAnySignInstallPath	: "/AnySign4PC/install/v1.1.2.7/AnySign_Installer.exe",
			aInstallPage		: "/eo/InstallAnySign.eo"
		},
		{
			aName				: "etc",
			aSearchWord			: "Android,iPhone,iPad,iPod...",
			aCABInstallPath		: "",
			aInstallPage		: "",
			aAnySignInstallPath : "",
			aInstallPage		: ""
		}
	]

	this.mBrowserList =
	[
		{
			aName			: "opera",
			aSearchWord		: "OPR",
			aSearchLength	: 4,
			aMinVersion		: "20.00",
			aMaxVersion		: "99.00"
		},
		{
			aName			: "explorer",
			aSearchWord		: "Edge",
			aSearchLength	: 5,
			aMinVersion		: "12.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "Edg",
			aSearchWord		: "Edg",
			aSearchLength	: 4,
			aMinVersion		: "12.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "chrome",
			aSearchWord		: "Chrome",
			aSearchLength	: 7,
			aMinVersion		: "24.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "firefox",
			aSearchWord		: "Firefox",
			aSearchLength	: 8,
			aMinVersion		: "27.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "safari",
			aSearchWord		: "Safari",
			aSearchWord2	: "Version",
			aSearchLength	: 8,
			aMinVersion		: "5.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "opera",
			aSearchWord		: "Opera",
			aSearchWord2	: "Version",
			aSearchLength	: 8,
			aMinVersion		: "20.00",
			aMaxVersion		: "99.00"
		},
		{
			aName			: "explorer",
			aSearchWord		: "MSIE",
			aSearchLength	: 5,
			aMinVersion		: "6.0",
			aMaxVersion		: "99.0"
		},
		{
			aName			: "explorer",
			aSearchWord		: "Trident",
			aSearchWord2	: "rv",
			aSearchLength	: 3,
			aMinVersion		: "6.0",
			aMaxVersion		: "99.0"
		}
	]

	this.mCAInfoList =
	[
		{
			 aName 			: "Yessign",
			 aType 			: 10,
			 aCAType		: 1,
			 aCAIPAddress 	: "203.233.91.71;yessignCA Class 2",
			 aCAHTTPAddress : "https://www.yessign.or.kr",
			 aCAPort 		: 4512 ,
			 aCAHTTPPort 	: 4512,
			//aCAHTTPService	: "/XFS/yessign/processCmp"		// hancomsecure WebCMP relay Server api path
			aCAHTTPService  : "/cmp"							// yessign WebCMP Server api path
		 },
		 {
			 aName 			: "Yessign Test",
			 aType 			: 13,
			 aCAType 		: 11,
			 aCAIPAddress 	: "203.233.91.231;yessignCA-Test Class 4",
			 aCAHTTPAddress : "https://fidoweb.yessign.or.kr",
			 aCAPort		: 4512 ,
			 aCAHTTPPort 	: 4512,
			 //aCAHTTPService	: "/XFS/yessign/processCmp"		// hancomsecure WebCMP relay Server api path
			aCAHTTPService  : "/cmp"							// yessign WebCMP Server api path
		 },
		/* {
			aName			: "Yessign test 1024",
			aType			: 10,
			aCAType			: 11,
			aCAIPAddress	: "203.233.91.234",
			aCAPort			: 4512
		},*/
		{
			aName			: "XecureCA RSA",
			aType			: 11,
			aCAType			: 101,
			aCAIPAddress	: "192.168.0.26;1024TestCA",
			aCAPort			: 29211
		},
		{
			aName			: "XecureCA KCDSA",
			aType			: 12,
			aCAType			: 102,
			aCAIPAddress	: "192.168.0.26;1024TestCA",
			aCAPort			: 29211
		},
		/*{
			aName			: "Yessign test 2048",
			aType			: 13,
			aCAType			: 11,
			aCAIPAddress	: "203.233.91.231",
			aCAHTTPAddress  : "https://fidoweb.yessign.or.kr",
			aCAPort			: 4512,
			aCAHTTPPort     : 4512,
			//aCAHTTPService	: "/XFS/yessign/processCmp"		// hancomsecure WebCMP relay Server api path
			aCAHTTPService  : "/cmp"							// yessign WebCMP Server api path
		},*/
		{
			aName			: "XecureCA 2048 RSA",
			aType			: 14,
			aCAType			: 101,	//101 + 256, // 256-Issue only Sign Cert.
			aCAIPAddress	: "192.168.0.4;subca",
			aCAPort			: 21201,
			aCAHTTPService  : "/XFS/xecureca/processCmp"
		},
		{
			aName			: "XecureCA 2048 KCDSA",
			aType			: 15,
			aCAType			: 102,	//102 + 256, // 256-Issue only Sign Cert.
			aCAIPAddress	: "192.168.0.4;CA974000031,Test2048CA",
			aCAPort			: 21201,
			aCAHTTPService  : "/XFS/xecureca/processCmp"
		},
		{
			aName			: "SignKorea",
			aType			: 16,
			aCAType			: 3,
			aCAIPAddress	: "211.175.81.101",
			aCAPort			: 4099
		},
		{
			aName			: "SignKorea test",
			aType			: 17,
			aCAType			: 13,
			aCAIPAddress	: "211.175.81.101",
			aCAPort			: 4099
		},
		{
			aName			: "Yessign MPKI test",
			aType			: 18,
			aCAType			: 110,
			aCAIPAddress	: "192.168.0.43",
			aCAPort			: 5302
		}
	]

	this.mRAList =
	[
	 	{
	 		aOU				: "KFTC",
	 		aKRName			: "ê¸ìµê²°ì ì",
	 		aUSName			: "Korea Financial Telecommunications & Clearings Institute"
	 	},
	 	{
	 		aOU				: "ì°ììí",
	 		aKRName			: "KDB",
	 		aUSName			: "Korea Development Bank"
	 	},
	 	{
	 		aOU				: "IBK",
	 		aKRName			: "ê¸°ììí",
	 		aUSName			: "Industrial Bank of Korea"
	 	},
	 	{
	 		aOU				: "KMB",
	 		aKRName			: "êµ­ë¯¼ìí",
	 		aUSName			: "Kookmin Bank"
	 	},
	 	{
	 		aOU				: "KEB",
	 		aKRName			: "ì¸íìí",
	 		aUSName			: "Korea Exchange Bank"
	 	},
	 	{
	 		aOU				: "NFFC",
	 		aKRName			: "ìíìí",
	 		aUSName			: "National Federation of Fisheries Cooperatives"
	 	},
	 	{
	 		aOU				: "NACF",
	 		aKRName			: "ëíìí",
	 		aUSName			: "National Agricultural Cooperatives Foundation"
	 	},
	 	{
	 		aOU				: "WOORI",
	 		aKRName			: "ì°ë¦¬ìí",
	 		aUSName			: "Woori Bank"
	 	},
	 	{
	 		aOU				: "CHB",
	 		aKRName			: "ì¡°í¥ìí",
	 		aUSName			: "Chohung Bank"
	 	},
	 	{
	 		aOU				: "KFB",
	 		aKRName			: "ì ì¼ìí",
	 		aUSName			: "Standard Chartered Bank Korea Limited"
	 	},
	 	{
	 		aOU				: "SEOULBANK",
	 		aKRName			: "ìì¸ìí",
	 		aUSName			: "Seoul Bank"
	 	},
	 	{
	 		aOU				: "SHB",
	 		aKRName			: "ì íìí",
	 		aUSName			: "Shinhan Bank"
	 	},
	 	{
	 		aOU				: "KAB",
	 		aKRName			: "íë¯¸ìí",
	 		aUSName			: "KorAm Bank"
	 	},
	 	{
	 		aOU				: "DGB",
	 		aKRName			: "ëêµ¬ìí",
	 		aUSName			: "Daegu Bank"
	 	},
	 	{
	 		aOU				: "PSB",
	 		aKRName			: "ë¶ì°ìí",
	 		aUSName			: "Busan Bank"
	 	},
	 	{
	 		aOU				: "KJB",
	 		aKRName			: "ê´ì£¼ìí",
	 		aUSName			: "Kwangju Bank"
	 	},
	 	{
	 		aOU				: "CJB",
	 		aKRName			: "ì ì£¼ìí",
	 		aUSName			: "Jeju Bank"
	 	},
	 	{
	 		aOU				: "JBB",
	 		aKRName			: "ì ë¶ìí",
	 		aUSName			: "Jeonbuk Bank"
	 	},
	 	{
	 		aOU				: "KNBBANK",
	 		aKRName			: "ê²½ë¨ìí",
	 		aUSName			: "Kyongnam Bank"
	 	},
	 	{
	 		aOU				: "KFCC",
	 		aKRName			: "ìë§ìê¸ê³ ",
	 		aUSName			: "Korean Federation of Community Credit Cooperative"
	 	},
	 	{
	 		aOU				: "CUBANK",
	 		aKRName			: "ì í",
	 		aUSName			: "National Credit Union Federation of Korea"
	 	},
	 	{
	 		aOU				: "CITI",
	 		aKRName			: "ì¨í°ìí",
	 		aUSName			: "Citibank"
	 	},
	 	{
	 		aOU				: "HSBC",
	 		aKRName			: "íì½©ìíì´ìí",
	 		aUSName			: "Hongkong and Shanghai Banking Corporation"
	 	},
	 	{
	 		aOU				: "DEUT",
	 		aKRName			: "ëì´ì¹ë±í¬",
	 		aUSName			: "Deutsche Bank"
	 	},
	 	{
	 		aOU				: "BANA",
	 		aKRName			: "Bank of America",
	 		aUSName			: "Bank of America"
	 	},
	 	{
	 		aOU				: "HNB",
	 		aKRName			: "íëìí",
	 		aUSName			: "Hana Bank"
	 	},
		{
			aOU : "KABANG",
			aKRName : "ì¹´ì¹´ì¤ë±í¬",
			aUSName : "Kakao Bank"
		},
		{
			aOU : "KBANK",
			aKRName : "ì¼ì´ë±í¬",
			aUSName : "K Bank"
		},
	 	{
	 		aOU				: "SOFTFORUM",
	 		aKRName			: "ìíí¸í¬ë¼",
	 		aUSName			: "SoftForum"
	 	}
	]

	try
	{
		this.mID = "XWCDataPlugin";
		this.mMimeType = "application/xecureweb-unified-plugin";
		this.mClassID = "CLSID:02CD96E4-8C5B-451C-AEE8-FE89D83BFC58";
		this.mVersion = aVersion;
		this.mAnySignVersion = aVersion;
		this.mXgateAddress = aXgateAddress;
		this.mProxyUsage = aProxyUsage;
		this.mLimitedTrial = aLimitedTrial;
		this.mCAList = aCAList;
		this.mStorage = aStorage;
		this.mSecurityOption = aSecurityOption;
		this.mSecurityKey = aSecurityKey;
		this.mSecurityContext = aSecurityContext;
		this.mLicense = aLicense;
		this.mLicense2 = aLicense2;
		this.mLanguage = aLanguage;
		this.mCharset = aCharset;
		this.mEncCharset = aEncCharset;
		this.mBasePath = aBasePath;
		this.mTransKeyPath = aTransKeyPath;
		this.mTransKeyEnable = aTransKeyEnable;
		this.mTransKeyXY = aTransKeyXY;
		this.mTransKeyCheckBoxEnable = aTransKeyCheckBoxEnable;
		this.mTransKeyIsXC = false;
		this.mTouchEnKeyEnable = aTouchEnKeyEnable;
		this.mUbikeyData = this.GetUbiKeyData (aUbikeyDataList);
		this.mMobiSignData = aMobiSignData;
		this.mExpireDateAlert = aExpireDateAlert;
		this.mSignHTMLOption = aSignHTMLOption;
		this.mPlatform = this.GetPlatform ();
		this.mExtensionSetting = aExtensionSetting;
		this.mUISettings= aUISettings;
		this.mAllowNativeInput = aAllowNativeInput;
		this.mOpenkeyboardEnable = aOpenkeyboardEnable;
		this.mKDefenseEnable = aKDefenseEnable;
		this.mVKeypadEnable = aVKeypadEnable;
		this.mKeyCryptHTML5Enable = aKeyCryptHTML5Enable;
		this.mXecureKeyPadEnable = aXecureKeyPadEnable;
		this.mXecureKeyPadHTML5Enable = aXecureKeyPadHTML5Enable;
		this.mXecureKeyPadMobileEnable = aXecureKeyPadMobileEnable;
		this.mXecureKeyPadE2EEnable = aXecureKeyPadE2EEnable;
		this.mASTxEnable = aASTxEnable;
		this.mTouchEnnxKeyEnable = aTouchEnnxKeyEnable;
		this.mTouchEnnxKeyMacEnable = aTouchEnnxKeyMacEnable;
		this.mIncaNOSv10Enable = aIncaNOSv10Enable;
		this.mIncaNOSv10KeypadEnable = aIncaNOSv10KeypadEnable;
		this.mIncaNOSv10KeypadImgPath = aIncaNOSv10KeypadImgPath;
		this.mKOSKeyEnable = aKOSKeyEnable;
		this.mEzKeyTecEnable = aEzKeyTecEnable;
		this.mAnySignEnable = aAnySignEnable;
		this.mAnySignLiteEnable = aAnySignLiteEnable;
		this.mAnySignLiteSupport = aAnySignLiteEnable;
		this.mOpenCertEnable = aOpenCertEnable;
		this.mOpenCertInitFlag = aOpenCertInitFlag;
		this.mOpenCertAlertEnable = aOpenCertAlertEnable;
		this.mOpenApi = aOpenApi;
		this.mOpenCertJS = aOpenCertJS;
		this.mOpenCertRelayJS = aOpenCertRelayJS;
		this.mCertRelayFromBrowserServerUrl = aCertRelayFromBrowserServerUrl;
		this.mMobileWebImportOption = aMobileWebImportOption;
		this.mHConvert2pfxDownloadURL = aHConvert2pfxDownloadURL;
		this.mCrossStorageHub = aCrossStorageHub;
		this.mCrossStorageOption = aCrossStorageOption;
		this.mExportCertDownloadify = aExportCertDownloadify;
		this.mStartAnySign = false;
		this.mAnySignLoad = aAnySignLoad;
		this.mAnySignShowImg = aAnySignShowImg;
		this.mAnySignLiveUpdate = aAnySignLiveUpdate;
		this.mAnySignSID = aAnySignSID;
		this.mAnySignITGT = aAnySignITGT;
		this.mKDefenseE2EPrefix = aKDefenseE2EPrefix;
		this.mDivInsertOption = aDivInsertOption;
		this.mFinancialType = aFinancialType;
		this.mShowExpiredCert = aShowExpiredCert;
		this.mShowLocationDialog = aShowLocationDialog;
		this.mShowRenewCertSaveLoc = aShowRenewCertSaveLoc;
		this.mWBStyleApply = aWBStyleApply;
		this.mPageBlockDecDone = aPageBlockDecDone;
		this.mInstallPageNewOpen = aInstallPageNewOpen;
		this.mEnhancedPW = aEnhancedPW;
		this.mShowInfoDialog = aShowInfoDialog;
		this.mUseIframeData = aUseIframeData;
		this.mSmartCertEnable = aSmartCertEnable;
		this.mSmartCertDataList = aSmartCertDataList;
		this.mUbikeyPKCS11Enable = aUbikeyPKCS11Enable;
		this.mUbikeyPKCS11Data = aUbikeyPKCS11Data;
		this.mSecureDiskEnable = aSecureDiskEnable;
		this.mSecureDiskData = aSecureDiskData;
		this.mWebCMPRelayServerInfo = aWebCMPRelayServerInfo;
		this.mVerifyCertOwnerBtn = aVerifyCertOwnerBtn;
		this.mXecureFreeSignEnable = aXecureFreeSignEnable;
		this.mXecureFreeSignSupport = aXecureFreeSignEnable;
		this.mXecureFreeSignData = aXecureFreeSignData;
		this.mWebPageStorageEnable = aWebPageStorageEnable;
		this.mWebPageStorageSupport = aWebPageStorageEnable;
		this.mWebPageStorageData = aWebPageStorageData;
		this.mStorageEnable = aStorageEnable;
		this.mDefaultCertLocation = aDefaultCertLocation;
		this.mWebWorkerNumber = aWebWorkerNumber;
		this.mWebWorkerScriptURL = aWebWorkerScriptURL;
		this.mBrowser = this.GetBrowser ();
		this.mBrowser.aVersion = this.GetBrowserVersion ();
	}
	catch (aException)
	{
		var aMessage = null;

		switch (aException)
		{
			case "UPE_UNKNOWN_PLATFORM":
				aMessage = "Unknown Platform";
				break;
			case "UPE_UNKNOWN_BROWSER":
				aMessage = "Unknown Browser";
				break;
			case "UPE_BROWSER_SEARCHWORD_FAIL":
				aMessage = "Set Browser Search Word";
				break;
			default:
				aMessage = "Unknown Exception";
				break;
		}

		alert ("EXCEPTION\n" + aMessage);
	}
}

UnifiedPluginInterface.prototype.GetUbiKeyData = function (aUbikeyDataList)
{
	var aResult = null;
	if (checkMobile())
		return aResult;

	var aIter = 0;
	var aStartPosition = 0;

	for (aIter = 0; aIter < aUbikeyDataList.length; ++aIter)
	{
		aStartPosition = navigator.platform.indexOf (aUbikeyDataList[aIter].mPlatForm);
		if (aStartPosition == -1)
			continue;

		aResult = aUbikeyDataList[aIter];
		break;
	}

	if (aResult == null)
		throw ("UPE_UNKNOWN_UBIKEYDATA");

	return aResult;
}

UnifiedPluginInterface.prototype.GetPlatform = function ()
{
	var aResult = null;

	var aIter = 0;
	var aStartPosition = 0;

	for (aIter = 0; aIter < this.mPlatformList.length; ++aIter)
	{
		aStartPosition = navigator.platform.indexOf (this.mPlatformList [aIter].aSearchWord);
		if (aStartPosition == -1)
		{
			continue;
		}

		aResult = this.mPlatformList [aIter];
	}

	if (aResult == null)
	{
		//throw ("UPE_UNKNOWN_PLATFORM");
		aResult = this.mPlatformList [this.mPlatformList.length-1];
	}

	return aResult;
}

UnifiedPluginInterface.prototype.GetBrowser = function ()
{
	var aResult = null;
	var aIter = 0;
	var aCurrentBrowser = 0;
	var aStartPosition = 0;

	for (aIter = 0; aIter < this.mBrowserList.length; ++aIter)
	{
		aStartPosition = navigator.userAgent.indexOf (this.mBrowserList [aIter].aSearchWord);

		if (aStartPosition == -1)
		{
			continue;
		}

		aResult = this.mBrowserList [aIter];
		break;
	}

	if (aResult == null)
	{
		throw ("UPE_UNKNOWN_BROWSER");
	}

	return aResult;
}

UnifiedPluginInterface.prototype.GetBrowserVersion = function ()
{
	var aResult = null;
	if (checkMobile())
		return aResult;

	var aStartPosition = 0;
	var aEndPosition = 0;

	if (this.mBrowser.aSearchWord2 != undefined)
	{
		aStartPosition = navigator.userAgent.indexOf (this.mBrowser.aSearchWord2);
	}
	else
	{
		aStartPosition = navigator.userAgent.indexOf (this.mBrowser.aSearchWord);
	}

	if (aStartPosition == -1)
	{
		throw ("UPE_BROWSER_SEARCHWORD_FAIL");
	}

	aStartPosition += this.mBrowser.aSearchLength;
	aResult = navigator.userAgent.substr (aStartPosition);

	if( this.mBrowser.aSearchWord.indexOf("MSIE") == -1 )
	{
		aEndPosition = aResult.indexOf (" ");
	}
	else
	{
		aEndPosition = aResult.indexOf (";");
	}

	if (aEndPosition == -1)
	{
		aResult = aResult.substr (0);
	}
	else
	{
		aResult = aResult.substring (0, aEndPosition);
	}

	aResult = aResult.replace (";", "");
	aResult = aResult.replace (")", "");

	return aResult;
}

UnifiedPluginInterface.prototype.IsSupportedBrowser = function ()
{
	var aResult = false;
	var aRoopCount = 0;
	var aIter = 0;
	var aLocalVersion = null;
	var aMinVersion = null;
	var aMaxVersion = null;

	aLocalVersion = this.mBrowser.aVersion.split (".");
	aMinVersion = this.mBrowser.aMinVersion. split (".");
	aMaxVersion = this.mBrowser.aMaxVersion. split (".");

	if (aLocalVersion.length - aMinVersion.length > 0)
	{
		aRoopCount = aLocalVersion.length;
	}
	else
	{
		aRoopCount = aMinVersion.length;
	}

	for (aIter = 0;aRoopCount > aIter;aIter++)
	{
		if (aLocalVersion [aIter] == undefined)
		{
			aLocalVersion [aIter] = '0';
		}

		if (aMinVersion [aIter] == undefined)
		{
			aMinVersion [aIter] = '0';
		}

		if (aLocalVersion [aIter] - aMinVersion [aIter] < 0)
		{
			aResult = false;
			break;
		}

		if (aLocalVersion [aIter] - aMinVersion [aIter] > 0)
		{
			aResult = true;
			break;
		}

		if (aRoopCount - 1 == aIter)
		{
			aResult = true;
		}
	}

	if (aResult == false)
	{
		return aResult;
	}

	if (aLocalVersion.length - aMaxVersion.length > 0)
	{
		aRoopCount = aLocalVersion.length;
	}
	else
	{
		aRoopCount = aMaxVersion.length;
	}

	for (aIter = 0;aRoopCount > aIter;aIter++)
	{
		if (aLocalVersion [aIter] == undefined)
		{
			aLocalVersion [aIter] = '0';
		}

		if (aMaxVersion [aIter] == undefined)
		{
			aMaxVersion [aIter] = '0';
		}

		if (aLocalVersion [aIter] - aMaxVersion [aIter] > 0)
		{
			aResult = false;
			break;
		}

		if (aLocalVersion [aIter] - aMaxVersion [aIter] < 0)
		{
			aResult = true;
			break;
		}

		if (aRoopCount - 1 == aIter)
		{
			aResult = true;
		}
	}

	return aResult;
}

UnifiedPluginInterface.prototype.IsNull = function (aCheckValue,
	   												aDefaultValue)
{
	var aResult = null;

	if (aCheckValue == null || aCheckValue.length == 0)
	{
		aResult = aDefaultValue;
	}
	else
	{
		aResult = aCheckValue;
	}

	return aResult;
}

UnifiedPluginInterface.prototype.SetUITarget = function (aElement)
{
	if (AnySign.mDivInsertOption == true || AnySign.mDivInsertOption > 0) {
		AnySign.mUISettings.mUITarget = aElement;
	}
}

UnifiedPluginInterface.prototype.GetUITarget= function ()
{
	return AnySign.mUISettings.mUITarget;
}

UnifiedPluginInterface.prototype.LoadExtension= function (aName)
{
	return this.mAnySignForPC.LoadExtension(aName);
}

UnifiedPluginInterface.prototype.StartAnySign = function (aIgnoreInstallpage, aTargetElement)
{
	var aAnySignModule,
		aConnectPort = AnySign.mExtensionSetting.mDirectPort+1,
		aName = "Unknown",
		aURL;

	// ì¤ë³µ í¸ì¶ ë°©ì§
	/*
	if (AnySign.mStartAnySign == true)
		return;
	*/
	if (AnySign.mAnySignLoad == true)
		return;

	AnySign.mStartAnySign = true;

	if (this.IsSupportedBrowser () == false)
	{
		alert (this.mBrowser.aName + " " + this.mBrowser.aVersion +
			   "ì(ë) ì§ìíì§ ìë ë¸ë¼ì°ì ìëë¤.\nìµì ë²ì ì¼ë¡ ìë°ì´í¸íìê¸° ë°ëëë¤.");
		return;
	}

	try {
		if (typeof WebSocket != "undefined") {
			if (this.mBrowser.aName == "explorer") {
				aURL = "wss://127.0.0.1:";
			} else {
				aURL = "wss://localhost:";
			}
			aURL = aURL + aConnectPort;
			var aWS = new WebSocket(aURL);
			aName = "AnySign.js";
			aWS.close();
		} else if (typeof XDomainRequest != "undefined") {
			if (window.location.protocol.indexOf("http:") != 0) {
				aURL = "https://127.0.0.1:" + aConnectPort;
			} else {
				aURL = "http://127.0.0.1:" + aConnectPort;
			}
				var aXDR = new XDomainRequest();
				aXDR.open("POST", aURL);
				aName = "AnySignAjax.js";
		} else {
			AnySign.mExtensionSetting.mIsIE7 = true;
			aName = "AnySignJSONP.js";
		}
	} catch (e) {
		if (aName == "Unknown") {
			aName = "AnySignJSONP.js";
		}
	}

	AnySign.mExtensionSetting.mIgnoreInstallPage = aIgnoreInstallpage;
	if (AnySign.mAnySignShowImg.showImg)
		AnySign.mExtensionSetting.mImgIntervalFunc = setInterval(showAnySignLoadingImg, 50);

	console.log ("[AnySign4PC] " + this.mBrowser.aName + ": " + this.mBrowser.aVersion);
	console.log ("[AnySign4PC] Extension Module Type: " + aName);

	if (aName != "AnySignJSONP.js") {
		try {
			var JSONData = {"anySign":[{"module":"ext"}]}
			var JSONResult = JSON.stringify (JSONData);
		} catch (e) {
			aAnySignModule = this.LoadExtension ("json2.js");
		}
	}

	aAnySignModule = this.LoadExtension (aName);
	this.mAnySignForPC.SetExtension(aAnySignModule);
}

UnifiedPluginInterface.prototype.setAnySignLite = function(aEnableLite, aEnableXFS)
{
	// AnySignLite setting
	if (aEnableLite == false) {
		this.mAnySignLiteSupport = false;
	} else {
		this.mAnySignLiteSupport = this.mAnySignLiteEnable;
	}

	// XecureFreeSign, WebPage Storage setting
	if (aEnableXFS == false) {
		this.mXecureFreeSignSupport = false;
		this.mWebPageStorageSupport = false;
	} else {
		this.mXecureFreeSignSupport = this.mXecureFreeSignEnable;
		this.mWebPageStorageSupport = this.mWebPageStorageEnable;
	}

	if (!this.mAnySignLiteSupport && !this.mXecureFreeSignSupport && !this.mWebPageStorageSupport) {
		this.mAnySignEnable = true;
		return false;
	}

	if (typeof XCrypto == "undefined") {
		this.mAnySignEnable = true;
		this.mAnySignLiteSupport = false;
		this.mXecureFreeSignSupport = false;
		this.mWebPageStorageSupport = false;
		return false;
	}

	if (XCrypto.checkXCrypto() != 0) {
		this.mAnySignEnable = true;
		this.mAnySignLiteSupport = false;
		this.mXecureFreeSignSupport = false;
		this.mWebPageStorageSupport = false;
		return false;
	}

/*	var aCallback = function (aReturn) {
		if (aReturn != 0)
			console.log("[XCrypto.setCrossStorage] fail set Cross Storage URL.")
	}

	XCrypto.setCrossStorage(this.mCrossStorageHub, this.mCrossStorageOption, aCallback);
	*/
	// AnySignLite or XecureFreeSign support
	this.mAnySignEnable = false;
	return true;
}

UnifiedPluginInterface.prototype.GetDefaultLocation = function (aCertLocation)
{
	function _getDefaultLocation() {
		if (AnySign.mAnySignLiteSupport) {
			AnySign.mAnySignEnable = false;
			return 2000;	// localstorage
		} else if (AnySign.mXecureFreeSignSupport) {
			AnySign.mAnySignEnable = false;
			return 2300;	// XecureFreeSign
		} else {
			AnySign.mAnySignEnable = true;
			return 1;		// hdd
		}
	}

	// null
	if (aCertLocation == undefined || aCertLocation == null || aCertLocation == "" || aCertLocation.length == 0 || aCertLocation < 0) {
		return _getDefaultLocation();
	}

	AnySign.mDefaultCertLocation = 0;

	// lite
	if (aCertLocation == 2000 || aCertLocation == 2100 || aCertLocation == 2200) {
		return _getDefaultLocation();
	}

	// XecureFreeSign
	if (aCertLocation == 2300) {
		if (!this.mXecureFreeSignSupport) {
			return _getDefaultLocation();
		}
		this.mAnySignEnable = false;
		return 2300;
	}

	// 4pc
	this.mAnySignEnable = true;
	return aCertLocation;
}

UnifiedPluginInterface.prototype.GetCertPath = function (aUserCallback, aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.GetCertPath (aUserCallback, aErrCallback);
}

UnifiedPluginInterface.prototype.SignDataCMS = function (aXgateAddress,
														 aCAList,
														 aPlain,
														 aOption,
														 aDescription,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		that.mAnySignForPC.SignDataCMS (aXgateAddress,
										aCAList,
										aPlain,
										aOption,
										aDescription,
										aLimitedTrial,
										aUserCallback,
										aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback,
								  ['SignDataCMS', aPlain, aOption, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataAdd = function (aXgateAddress,
														 aCAList,
														 aPlain,
														 aOption,
														 aDescription,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ì§ì
	if (this.mXecureFreeSignData.signType != 2)
		this.setAnySignLite(true, false);
	else
		this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		that.mAnySignForPC.SignDataAdd (aXgateAddress,
										aCAList,
										aPlain,
										aOption,
										aDescription,
										aLimitedTrial,
										aUserCallback,
										aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataAddWithCacheCert = function (aOption,
																	  aPlain,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.SignDataAddWithCacheCert (that.mXgateAddress,
													 aOption,
													 aPlain,
													 aUserCallback,
													 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataCMSWithCacheCert = function (aXgateAddress,
																	  aPlain,
																	  aOption,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);

		that.mAnySignForPC.SignDataCMSWithCacheCert (aXgateAddress,
													 aPlain,
													 aOption,
													 aUserCallback,
													 aErrCallback);
	}
	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignFile = function (aXgateAddress,
													  aCAList,
													  aPlainFilePath,
													  aSignedFilePath,
													  aOption,
													  aDescription,
													  aLimitedTrial,
													  aUserCallback,
													  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.SignFile (aXgateAddress,
								 aCAList,
								 aPlainFilePath,
								 aSignedFilePath,
								 aOption,
								 aDescription,
								 aLimitedTrial,
								 aUserCallback,
								 aErrCallback);
}

UnifiedPluginInterface.prototype.ShowSignFileSelectDialog = function (aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.ShowSignFileSelectDialog (aUserCallback);
}

UnifiedPluginInterface.prototype.SignDataCMSWithSerial = function (aXgateAddress,
																   aCAList,
																   aCertSerial,
																   aCertLocation,
																   aPlain,
																   aOption,
																   aDescription,
																   aLimitedTrial,
																   aUserCallback,
																   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		that.mAnySignForPC.SignDataCMSWithSerial (aXgateAddress,
												  aCAList,
												  aCertSerial,
												  aCertLocation,
												  aPlain,
												  aOption,
												  aDescription,
												  aLimitedTrial,
												  aUserCallback,
												  aErrCallback);
	}
	this.mAnySignForPC.SetStorage( _resultcallback,
								  ['SignDataCMSWithSerial', aCertSerial, aPlain, aOption, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataCMSWithSerial_Location = function (aXgateAddress,
																			aCAList,
																			aCertSerial,
																			aCertLocation,
																			aPlain,
																			aOption,
																			aDescription,
																			aLimitedTrial,
																			aUserCallback,
																			aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.SignDataCMSWithSerial (aXgateAddress,
														 aCAList,
														 aCertSerial,
														 aCertLocation,
														 aPlain,
														 aOption,
														 aDescription,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback,
								  ['SignDataCMSWithSerial', aCertSerial, aPlain, aOption, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataCMSWithHTMLEx = function (aXgateAddress,
																   aCAList,
																   aForm,
																   aPlain,
																   aCert,
																   aOption,
																   aDescription,
																   aLimitedTrial,
																   aUserCallback,
																   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		that.mAnySignForPC.SignDataCMSWithHTMLEx (aXgateAddress,
												  aCAList,
												  aForm,
												  aPlain,
												  aCert,
												  aOption,
												  aDescription,
												  aLimitedTrial,
												  aUserCallback,
												  aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataCMSWithHTMLExAndSerial = function (aXgateAddress,
																			aCAList,
																			aCertSerial,
																			aCertLocation,
																			aForm,
																			aPlain,
																			aCert,
																			aOption,
																			aDescription,
																			aLimitedTrial,
																			aUserCallback,
																			aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		that.mAnySignForPC.SignDataCMSWithHTMLExAndSerial (aXgateAddress,
														   aCAList,
														   aCertSerial,
														   aCertLocation,
														   aForm,
														   aPlain,
														   aCert,
														   aOption,
														   aDescription,
														   aLimitedTrial,
														   aUserCallback,
														   aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataCMSWithHTMLExAndSerial_Location = function (aXgateAddress,
																					 aCAList,
																					 aCertSerial,
																					 aCertLocation,
																					 aForm,
																					 aPlain,
																					 aCert,
																					 aOption,
																					 aDescription,
																					 aLimitedTrial,
																					 aUserCallback,
																					 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.SignDataCMSWithHTMLExAndSerial (aXgateAddress,
																  aCAList,
																  aCertSerial,
																  aCertLocation,
																  aForm,
																  aPlain,
																  aCert,
																  aOption,
																  aDescription,
																  aLimitedTrial,
																  aUserCallback,
																  aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataWithVID = function (aXgateAddress,
															 aCAList,
															 aPlain,
															 aOption,
															 aDescription,
															 aLimitedTrial,
															 aIdn,
															 aSvrCert,
															 aUserCallback,
															 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		AnySignForPC.SignDataWithVID_Serial (aXgateAddress,
											 aCAList,
											 null,
											 null,
											 aPlain,
											 aOption,
											 aDescription,
											 aLimitedTrial,
											 aIdn,
											 aSvrCert,
											 aUserCallback,
											 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback,
								 ['SignDataWithVID', aPlain, aOption, aIdn, aSvrCert, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataAddWithVID = function (aXgateAddress,
																aCAList,
																aPlain,
																aOption,
																aDescription,
																aLimitedTrial,
																aIdn,
																aSvrCert,
																aUserCallback,
																aErrCallback)
{
	// AnySignLite ì§ì
	if (this.mXecureFreeSignData.signType != 2)
		this.setAnySignLite(true, false);
	else
		this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress = that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList   = that.IsNull (aCAList, that.mCAList);
		aDescription = that.IsNull (aDescription, "");
		aLimitedTrial = that.IsNull (aLimitedTrial, that.mLimitedTrial);

		AnySignForPC.SignDataAddWithVID_Serial (aXgateAddress,
												aCAList,
												null,
												null,
												aPlain,
												aOption,
												aDescription,
												aLimitedTrial,
												aIdn,
												aSvrCert,
												aUserCallback,
												aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignDataWithVID_Serial = function (aXgateAddress,
																	aCAList,
																	aCertSerial,
																	aCertLocation,
																	aPlain,
																	aOption,
																	aDescription,
																	aLimitedTrial,
																	aIdn,
																	aSvrCert,
																	aUserCallback,
																	aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aOption			= that.IsNull (aOption, 0);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		AnySignForPC.SignDataWithVID_Serial (aXgateAddress,
											 aCAList,
											 aCertSerial,
											 aCertLocation,
											 aPlain,
											 aOption,
											 aDescription,
											 aLimitedTrial,
											 aIdn,
											 aSvrCert,
											 aUserCallback,
											 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback,
								 ['SignDataWithVID_Serial', aCertSerial, aPlain, aOption, aIdn, aSvrCert, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataWithVID_Serial_Location = function (aXgateAddress,
																			 aCAList,
																			 aCertSerial,
																			 aCertLocation,
																			 aPlain,
																			 aOption,
																			 aDescription,
																			 aLimitedTrial,
																			 aIdn,
																			 aSvrCert,
																			 aUserCallback,
																			 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aOption			= that.IsNull (aOption, 0);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.SignDataWithVID_Serial (aXgateAddress,
														  aCAList,
														  aCertSerial,
														  aCertLocation,
														  aPlain,
														  aOption,
														  aDescription,
														  aLimitedTrial,
														  aIdn,
														  aSvrCert,
														  aUserCallback,
														  aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback,
								 ['SignDataWithVID_Serial', aCertSerial, aPlain, aOption, aIdn, aSvrCert, aUserCallback, aErrCallback]);
}

UnifiedPluginInterface.prototype.SignDataWithVID_CacheCert = function (aXgateAddress,
																	   aPlain,
																	   aOption,
																	   aIdn,
																	   aSvrCert,
																	   aUserCallback,
																	   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		if (aSvrCert == null || aSvrCert.length == 0)
		{
			alert ("[SignDataWithVID_CacheCert] invalid parameters");
			return;
		}
		/*
		if (!((aOption & 0x08) || (aOption & 0x10)))
		{
			alert("[SignDataWithVID_CacheCert] invalid option.");
			return;
		}
		*/
		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);

		AnySignForPC.SignDataWithVID_CacheCert (aXgateAddress,
												aPlain,
												aOption,
												aIdn,
												aSvrCert,
												aUserCallback,
												aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SignFileInfo = function (aXgateAddress,
														  aCAList,
														  aFileInfo,
														  aFileHash,
														  aOption,
														  aDescription,
														  aLimitedTrial,
														  aUserCallback,
														  aErrCallback)
{
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("[SignFileInfo] invalid parameters.");
		return;
	}

	var aFileInfoArray = aFileInfo.split("|");
	var aFileHashArray = aFileHash.split("|");
	if (aFileInfoArray[1] == undefined || aFileInfoArray[1] == "" || aFileHashArray[1] == undefined || aFileHashArray[1] == "")
	{
		alert("[SignFileInfo] invalid parameters.");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.SignFileInfo (aXgateAddress,
									 aCAList,
									 aFileInfo,
									 aFileHash,
									 aOption,
									 aDescription,
									 aLimitedTrial,
									 aUserCallback,
									 aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileInfoAdd = function (aXgateAddress,
															 aCAList,
															 aPlain,
															 aOption,
															 aDescription,
															 aLimitedTrial,
															 aUserCallback,
															 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aPlain == undefined || aPlain == "")
	{
		alert("[SignFileInfoAdd] invalid parameters.");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.SignFileInfoAdd (aXgateAddress,
										aCAList,
										aPlain,
										aOption,
										aDescription,
										aLimitedTrial,
										aUserCallback,
										aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileInfoWithSerial = function (aXgateAddress,
																	aCAList,
																	aCertSerial,
																	aCertLocation,
																	aFileInfo,
																	aFileHash,
																	aOption,
																	aDescription,
																	aLimitedTrial,
																	aUserCallback,
																	aErrCallback)
{
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("[SignFileInfoWithSerial] invalid parameters.");
		return;
	}

	var aFileInfoArray = aFileInfo.split("|");
	var aFileHashArray = aFileHash.split("|");
	if (aFileInfoArray[1] == undefined || aFileInfoArray[1] == "" || aFileHashArray[1] == undefined || aFileHashArray[1] == "")
	{
		alert("[SignFileInfoWithSerial] invalid parameters.");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	aCertLocation	= this.GetDefaultLocation (aCertLocation);

	this.mAnySignForPC.SignFileInfoWithSerial (aXgateAddress,
											   aCAList,
											   aCertSerial,
											   aCertLocation,
											   aFileInfo,
											   aFileHash,
											   aOption,
											   aDescription,
											   aLimitedTrial,
											   aUserCallback,
											   aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileInfoWithVID = function (aXgateAddress,
																 aCAList,
																 aFileInfo,
																 aFileHash,
																 aOption,
																 aDescription,
																 aLimitedTrial,
																 aIdn,
																 aSvrCert,
																 aUserCallback,
																 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("[SignFileInfoWithVID] invalid parameters.");
		return;
	}

	var aFileInfoArray = aFileInfo.split("|");
	var aFileHashArray = aFileHash.split("|");
	if (aFileInfoArray[1] == undefined || aFileInfoArray[1] == "" || aFileHashArray[1] == undefined || aFileHashArray[1] == "")
	{
		alert("[SignFileInfoWithVID] invalid parameters.");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.SignFileInfoWithVID_Serial (aXgateAddress,
												   aCAList,
												   null,
												   null,
												   aFileInfo,
												   aFileHash,
												   aOption,
												   aDescription,
												   aLimitedTrial,
												   aIdn,
												   aSvrCert,
												   aUserCallback,
												   aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileInfoWithVID_Serial = function (aXgateAddress,
																		aCAList,
																		aCertSerial,
																		aCertLocation,
																		aFileInfo,
																		aFileHash,
																		aOption,
																		aDescription,
																		aLimitedTrial,
																		aIdn,
																		aSvrCert,
																		aUserCallback,
																		aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("[SignFileInfoWithVID_Serial] invalid parameters.");
		return;
	}

	var aFileInfoArray = aFileInfo.split("|");
	var aFileHashArray = aFileHash.split("|");
	if (aFileInfoArray[1] == undefined || aFileInfoArray[1] == "" || aFileHashArray[1] == undefined || aFileHashArray[1] == "")
	{
		alert("[SignFileInfoWithVID_Serial] invalid parameters.");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	aCertLocation	= this.GetDefaultLocation (aCertLocation);

	this.mAnySignForPC.SignFileInfoWithVID_Serial (aXgateAddress,
												   aCAList,
												   aCertSerial,
												   aCertLocation,
												   aFileInfo,
												   aFileHash,
												   aOption,
												   aDescription,
												   aLimitedTrial,
												   aIdn,
												   aSvrCert,
												   aUserCallback,
												   aErrCallback);
}

UnifiedPluginInterface.prototype.MultiSignFileInfo = function (aMultiSignID,
															   aXgateAddress,
															   aCAList,
															   aOption,
															   aDescription,
															   aLimitedTrial,
															   aUserCallback,
															   aErrCallback)
{
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.MultiSignFileInfo (aMultiSignID,
										  aXgateAddress,
										  aCAList,
										  aOption,
										  aDescription,
										  aLimitedTrial,
										  aUserCallback,
										  aErrCallback);
}

UnifiedPluginInterface.prototype.MultiSignFileInfoWithSerial = function (aMultiSignID,
																		 aXgateAddress,
																		 aCAList,
																		 aCertSerial,
																		 aCertLocation,
																		 aOption,
																		 aDescription,
																		 aLimitedTrial,
																		 aUserCallback,
																		 aErrCallback)
{
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	aCertLocation	= this.GetDefaultLocation (aCertLocation);

	this.mAnySignForPC.MultiSignFileInfoWithSerial (aMultiSignID,
													aXgateAddress,
													aCAList,
													aCertSerial,
													aCertLocation,
													aOption,
													aDescription,
													aLimitedTrial,
													aUserCallback,
													aErrCallback);
}

UnifiedPluginInterface.prototype.MultiSignFileInfoWithVID = function (aMultiSignID,
																	  aXgateAddress,
																	  aCAList,
																	  aOption,
																	  aDescription,
																	  aLimitedTrial,
																	  aIdn,
																	  aSvrCert,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.MultiSignFileInfoWithVID_Serial (aMultiSignID,
														aXgateAddress,
														aCAList,
														null,
														null,
														aOption,
														aDescription,
														aLimitedTrial,
														aIdn,
														aSvrCert,
														aUserCallback,
														aErrCallback);
}

UnifiedPluginInterface.prototype.MultiSignFileInfoWithVID_Serial = function (aMultiSignID,
																			 aXgateAddress,
																			 aCAList,
																			 aCertSerial,
																			 aCertLocation,
																			 aOption,
																			 aDescription,
																			 aLimitedTrial,
																			 aIdn,
																			 aSvrCert,
																			 aUserCallback,
																			 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite();

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aCertSerial		= this.IsNull (aCertSerial, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	aCertLocation	= this.GetDefaultLocation (aCertLocation);

	this.mAnySignForPC.MultiSignFileInfoWithVID_Serial (aMultiSignID,
														aXgateAddress,
														aCAList,
														aCertSerial,
														aCertLocation,
														aOption,
														aDescription,
														aLimitedTrial,
														aIdn,
														aSvrCert,
														aUserCallback,
														aErrCallback);
}

UnifiedPluginInterface.prototype.GetVidInfo = function (aUserCallback, aErrCallback)
{
	// AnySignLite ì§ì

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	return AnySignForPC.GetVidInfo (aUserCallback, aErrCallback);
}

UnifiedPluginInterface.prototype.DeleteCertificate = function (aSubjectRDN,
															   aUserCallback,
															   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		return AnySignForPC.DeleteCertificate (1,
											   aSubjectRDN,
											   aUserCallback,
											   aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.DeleteCertificateFromRevoke = function (aMediaID,
																		 aSubjectRDN,
																		 aUserCallback,
																		 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		return AnySignForPC.DeleteCertificateFromRevoke (aMediaID,
														 aSubjectRDN,
														 aUserCallback,
														 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.EnvelopData = function (aXgateAddress,
														 aCAList,
														 aPlainData,
														 aOption,
														 aEnvKeyword,
														 aEnvCertPEM,
														 aCertSerial,
														 aCertLocation,
														 aDescription,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aOption			= that.IsNull (aOption, 0);
		aDescription	= that.IsNull (aDescription, "");

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		AnySignForPC.EnvelopeData (aXgateAddress,
								   aCAList,
								   aPlainData,
								   aOption,
								   aEnvKeyword,
								   aEnvCertPEM,
								   aCertSerial,
								   aCertLocation,
								   aDescription,
								   aUserCallback,
								   aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.EnvelopData_Location = function (aXgateAddress,
																  aCAList,
																  aPlainData,
																  aOption,
																  aEnvKeyword,
																  aEnvCertPEM,
																  aCertSerial,
																  aCertLocation,
																  aDescription,
																  aUserCallback,
																  aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aOption			= that.IsNull (aOption, 0);
		aDescription	= that.IsNull (aDescription, "");

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.EnvelopeData (aXgateAddress,
												aCAList,
												aPlainData,
												aOption,
												aEnvKeyword,
												aEnvCertPEM,
												aCertSerial,
												aCertLocation,
												aDescription,
												aUserCallback,
												aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.DeEnvelopData = function (aXgateAddress,
														   aCAList,
														   aEnvelopedData,
														   aDeEnvOption,
														   aDeEnvKeyword,
														   aDescription,
														   aLimitedTrial,
														   aUserCallback,
														   aErrCallback)
{
	// AnySignLite ì§ì
	if (aDeEnvOption == 1 && this.mXecureFreeSignData.signType != 2)
		this.setAnySignLite(true, false);
	else
		this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDeEnvOption	= that.IsNull (aDeEnvOption, 0);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial		= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		AnySignForPC.DeEnvelopeData (aXgateAddress,
									 aCAList,
									 aEnvelopedData,
									 aDeEnvOption,
									 aDeEnvKeyword,
									 aDescription,
									 aLimitedTrial,
									 aUserCallback,
									 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.DeEnvelopDataWithCacheCert = function (aXgateAddress,
																		aEnvelopedData,
																		aUserCallback,
																		aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);

		AnySignForPC.DeEnvelopeDataWithCacheCert (aXgateAddress,
												  aEnvelopedData,
												  aUserCallback,
												  aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.GetCAInfo = function (aType)
{
	var aIter = 0;
	var aCAInfo = null;
	var fCAHTTPAddressEnable = false;
	var fCAHTTPPortEnable = false;

	for (aIter = 0; aIter < this.mCAInfoList.length; ++aIter)
	{
		if (this.mCAInfoList [aIter].aType != aType)
		{
			continue;
		}

		aCAInfo = this.mCAInfoList [aIter];
		break;
	}

	if (aCAInfo == null)
	{
		return null;
	}

	if (aCAInfo.aCAName == undefined)
	{
		aCAInfo.aCAName = "";
	}

	if (aCAInfo.aRAName == undefined)
	{
		aCAInfo.aRAName = "";
	}

	fCAHTTPAddressEnable = 'aCAHTTPAddress' in aCAInfo;
	fCAHTTPPortEnable = 'aCAHTTPPort' in aCAInfo;

	if (fCAHTTPAddressEnable == false)
	{
		if (typeof this.mWebCMPRelayServerInfo.aAddress != "undefined" && this.mWebCMPRelayServerInfo.aAddress != "")
			aCAInfo.aCAHTTPAddress = this.mWebCMPRelayServerInfo.aAddress;
	}

	if (fCAHTTPPortEnable == false)
	{
		if (fCAHTTPAddressEnable == false)
		{
			if (typeof this.mWebCMPRelayServerInfo.aPort != "undefined")
			{
				if (this.mWebCMPRelayServerInfo.aPort != "80" && this.mWebCMPRelayServerInfo.aPort != 80)
				{
					aCAInfo.aCAHTTPPort = typeof this.mWebCMPRelayServerInfo.aPort == "string" ? this.mWebCMPRelayServerInfo.aPort : this.mWebCMPRelayServerInfo.aPort.toString();
				}
			}

		}

	}

	return aCAInfo;
}

UnifiedPluginInterface.prototype.RequestCertificate = function (aType,
																aReferenceNumber,
																aAuthenticationCode,
																aOption,
																aUserCallback,
																aErrCallback,
																aUbiKeyUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite(true, false);

	var aCAInfo = null;

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		AnySign.mDivInsertOption = 0;

		var aWorkerNumber = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		that.mAnySignForPC.RequestCertificateEx2WithWebCMP (aCAInfo.aCAPort,
															aCAInfo.aCAHTTPPort,
															aCAInfo.aCAIPAddress,
															aCAInfo.aCAHTTPAddress,
															aCAInfo.aCAHTTPService,
															aReferenceNumber,
															aAuthenticationCode,
															aCAInfo.aCAType,
															aWorkerNumber,
											 				aWorkerScript,
															aOption,
															aCAInfo.aCAName,
															aCAInfo.aRAName,
															0,
															aUserCallback,
															aErrCallback,
															aUbiKeyUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.RequestCertificate2 = function (aType,
																aReferenceNumber,
																aAuthenticationCode,
																aOption,
																aSaveOption,
																aUserCallback,
																aErrCallback,
																aUbiKeyUserCallback)
{
	if(aSaveOption == 1)
		this.setAnySignLite(false, false);
	else
		this.setAnySignLite(true, false);

	var aCAInfo = null;

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		AnySign.mDivInsertOption = 0;

		var aWorkerNumber = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		that.mAnySignForPC.RequestCertificateEx2WithWebCMP (aCAInfo.aCAPort,
															aCAInfo.aCAHTTPPort,
															aCAInfo.aCAIPAddress,
															aCAInfo.aCAHTTPAddress,
															aCAInfo.aCAHTTPService,
															aReferenceNumber,
															aAuthenticationCode,
															aCAInfo.aCAType,
															aWorkerNumber,
											 				aWorkerScript,
															aOption,
															aCAInfo.aCAName,
															aCAInfo.aRAName,
															aSaveOption,
															aUserCallback,
															aErrCallback,
															aUbiKeyUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}


UnifiedPluginInterface.prototype.RenewCertificate = function (aType,
															  aCertLocation,
															  aOption,
															  aLimitedTrial,
															  aUserCallback,
															  aErrCallback)
{
	// AnySignLite ì§ì
	var aAnySignLite = this.setAnySignLite(true, false);

	var aCAInfo = null;

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		var aWorkerNum = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		that.mAnySignForPC.RenewCertificateWithSerialWithWebCMP (aCAInfo.aCAPort,
																 aCAInfo.aCAHTTPPort,
																 aCAInfo.aCAIPAddress,
																 aCAInfo.aCAHTTPAddress,
																 aCAInfo.aCAHTTPService,
																 "",
																 aCertLocation,
																 aCAInfo.aCAType,
																 aLimitedTrial,
																 aWorkerNum,
															 	 aWorkerScript,
																 aUserCallback,
																 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.RenewCertificate_Location = function (aType,
																	   aCertLocation,
																	   aOption,
																	   aLimitedTrial,
																	   aUserCallback,
																	   aErrCallback)
{
	// AnySignLite ì§ì
	var aAnySignLite = this.setAnySignLite(true, false);

	var aCAInfo = null;

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}


		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		var aWorkerNum = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.RenewCertificateWithSerialWithWebCMP (aCAInfo.aCAPort,
																		aCAInfo.aCAHTTPPort,
																		aCAInfo.aCAIPAddress,
																		aCAInfo.aCAHTTPAddress,
																		aCAInfo.aCAHTTPService,
																		"",
																		aCertLocation,
																		aCAInfo.aCAType,
																		aLimitedTrial,
																		aWorkerNum,
																		aWorkerScript,
																		aUserCallback,
																		aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.RenewCertificateWithSerial = function (aType,
																	    aCertSerial,
																		aCertLocation,
																	    aOption,
																	    aLimitedTrial,
																	    aUserCallback,
																	    aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite(true, false);

	var aCAInfo = null;
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		var aWorkerNum = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		that.mAnySignForPC.RenewCertificateWithSerialWithWebCMP (aCAInfo.aCAPort,
																 aCAInfo.aCAHTTPPort,
																 aCAInfo.aCAIPAddress,
																 aCAInfo.aCAHTTPAddress,
																 aCAInfo.aCAHTTPService,
																 aCertSerial,
																 aCertLocation,
																 aCAInfo.aCAType,
																 aLimitedTrial,
																 aWorkerNum,
														     	 aWorkerScript,
																 aUserCallback,
																 aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.RenewCertificateWithSerial_Location = function (aType,
																				 aCertSerial,
																				 aCertLocation,
																				 aOption,
																				 aLimitedTrial,
																				 aUserCallback,
																				 aErrCallback)
{
	// AnySignLite ì§ì
	var aAnySignLite = this.setAnySignLite(true, false);

	var aCAInfo = null;

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aCAInfo = that.GetCAInfo (aType);
		if (aCAInfo == null)
		{
			alert ("cainfo error");
			return null;
		}

		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		var aWorkerNum = that.mWebWorkerNumber;
		var aWorkerScript = that.mWebWorkerScriptURL;

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.RenewCertificateWithSerialWithWebCMP (aCAInfo.aCAPort,
																		aCAInfo.aCAHTTPPort,
																		aCAInfo.aCAIPAddress,
																		aCAInfo.aCAHTTPAddress,
																		aCAInfo.aCAHTTPService,
																		aCertSerial,
																		aCertLocation,
																		aCAInfo.aCAType,
																		aLimitedTrial,
																		aWorkerNum,
																    	aWorkerScript,
																		aUserCallback,
																		aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.RevokeCertificate = function (aType,
															   aJobCode,
															   aReason,
															   aLimitedTrial,
															   aUserCallback,
															   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	var aCAInfo = null;

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aCAInfo = this.GetCAInfo (aType);
	if (aCAInfo == null)
	{
		alert ("cainfo error");
		return null;
	}

	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.RevokeCertificate (aCAInfo.aCAPort,
										  aCAInfo.aCAIPAddress,
										  aJobCode,
										  aReason,
										  aCAInfo.aCAType,
										  aLimitedTrial,
										  aUserCallback,
										  aErrCallback);
}

UnifiedPluginInterface.prototype.ShowCertManager = function (aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	AnySign.mDivInsertOption = 0;
	var  that = this;
	var _resultcallback = function ()
	{
		that.mAnySignForPC.ShowCertManager (aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.ExportCertRelay = function (aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	AnySign.mDivInsertOption = 0;
	var  that = this;
	var _resultcallback = function ()
	{
		that.mAnySignForPC.ExportCertRelay (aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.ImportCertRelay = function (aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	AnySign.mDivInsertOption = 0;
	var  that = this;
	var _resultcallback = function ()
	{
		that.mAnySignForPC.ImportCertRelay (aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.CertSelectRelay = function (aParam)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	this.mAnySignForPC.CertSelectRelay(aParam);
}

UnifiedPluginInterface.prototype.MultiSignInit = function ()
{
	return this.mAnySignForPC.MultiSignInit();
}

UnifiedPluginInterface.prototype.SetMultiSignData = function (aMultiSignID, aPlain, aPlain2)
{
	this.mAnySignForPC.SetMultiSignData (aMultiSignID, aPlain, aPlain2);
}

UnifiedPluginInterface.prototype.MultiSignEx = function (aMultiSignID,
														 aXgateAddress,
														 aCAList,
														 aOption,
														 aDescription,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		that.mAnySignForPC.MultiSignEx (aMultiSignID,
										aXgateAddress,
										aCAList,
										aOption,
										aDescription,
										aLimitedTrial,
										aUserCallback,
										aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.MultiSignExWithSerial = function (aMultiSignID,
																   aXgateAddress,
																   aCAList,
																   aCertSerial,
																   aCertLocation,
																   aOption,
																   aDescription,
																   aLimitedTrial,
																   aUserCallback,
																   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		that.mAnySignForPC.MultiSignExWithSerial (aMultiSignID,
												  aXgateAddress,
												  aCAList,
												  aCertSerial,
												  aCertLocation,
												  aOption,
												  aDescription,
												  aLimitedTrial,
												  aUserCallback,
												  aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.MultiSignExWithVID_Serial = function (aMultiSignID,
																   aXgateAddress,
																   aCAList,
																   aCertSerial,
																   aCertLocation,
																   aOption,
																   aDescription,
																   aSvrCert,
																   aLimitedTrial,
																   aUserCallback,
																   aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		aCertLocation	= that.GetDefaultLocation (aCertLocation);

		that.mAnySignForPC.MultiSignExWithVID_Serial (aMultiSignID,
												  aXgateAddress,
												  aCAList,
												  aCertSerial,
												  aCertLocation,
												  aOption,
												  aDescription,
												  aSvrCert,
												  aLimitedTrial,
												  aUserCallback,
												  aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.MultiSignExWithSerial_Location = function (aMultiSignID,
																		    aXgateAddress,
																			aCAList,
																			aCertSerial,
																			aCertLocation,
																			aOption,
																			aDescription,
																			aLimitedTrial,
																			aUserCallback,
																			aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.MultiSignExWithSerial (aMultiSignID,
														 aXgateAddress,
														 aCAList,
														 aCertSerial,
														 aCertLocation,
														 aOption,
														 aDescription,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.MultiSignExWithVID_Serial_Location = function (aMultiSignID,
																		    aXgateAddress,
																			aCAList,
																			aCertSerial,
																			aCertLocation,
																			aOption,
																			aDescription,
																			aSvrCert,
																			aLimitedTrial,
																			aUserCallback,
																			aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		aXgateAddress	= that.IsNull (aXgateAddress, that.mXgateAddress);
		aCAList			= that.IsNull (aCAList, that.mCAList);
		aCertSerial		= that.IsNull (aCertSerial, "");
		aDescription	= that.IsNull (aDescription, "");
		aLimitedTrial	= that.IsNull (aLimitedTrial, that.mLimitedTrial);

		_CB_getLastLocation = function (aResult)
		{
			if (aResult) aCertLocation = aResult;

			aCertLocation = AnySign.GetDefaultLocation (aCertLocation);

			AnySign.mAnySignForPC.MultiSignExWithVID_Serial (aMultiSignID,
														 aXgateAddress,
														 aCAList,
														 aCertSerial,
														 aCertLocation,
														 aOption,
														 aDescription,
														 aSvrCert,
														 aLimitedTrial,
														 aUserCallback,
														 aErrCallback);
		}

		that.mAnySignForPC.GetLastLocation (_CB_getLastLocation);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.MultiFileSign = function (aMultiSignID,
														   aXgateAddress,
														   aCAList,
														   aOption,
														   aDescription,
														   aLimitedTrial,
														   aUserCallback,
														   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aDescription	= this.IsNull (aDescription, "");
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);

	this.mAnySignForPC.MultiFileSign (aMultiSignID,
									  aXgateAddress,
									  aCAList,
									  aOption,
									  aDescription,
									  aLimitedTrial,
									  aUserCallback,
									  aErrCallback);
}

UnifiedPluginInterface.prototype.GetMultiSignedData = function (aMultiSignID, aIndex)
{
	return this.mAnySignForPC.GetMultiSignedData (aMultiSignID, aIndex);
}

UnifiedPluginInterface.prototype.MultiSignFinal = function (aMultiSignID)
{
	this.mAnySignForPC.MultiSignFinal (aMultiSignID);
}

UnifiedPluginInterface.prototype.InstallCertificate = function (aCertType, aCertificate, aUserCallback)

{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.InstallCertificate (1, /* aMediaID */
										   aCertType,
										   aCertificate,
										   "", /* aPassword */
										   aUserCallback);
}

UnifiedPluginInterface.prototype.SetIssuerConvertTableFirst = function (aIssuer, aConvertedPool, aComment, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aIssuer == undefined) return;
		if (aConvertedPool == undefined) return;

		aComment = that.IsNull (aComment, "");

		that.mAnySignForPC.SetIssuerConvertTable (aIssuer, aConvertedPool, aComment, 0, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SetIssuerConvertTableNext = function (aIssuer, aConvertedPool, aComment, aLanguage, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aIssuer == undefined) return;
		if (aConvertedPool == undefined) return;

		aComment = that.IsNull (aComment, "");

		that.mAnySignForPC.SetIssuerConvertTable (aIssuer, aConvertedPool, aComment, 0, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SetIssuerConvertTableFinal = function ()
{
	return 0;
}

UnifiedPluginInterface.prototype.SetPolicyConvertTableFirst = function (aPolicy, aConvertedPool, aComment)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aPolicy == undefined) return;
		if (aConvertedPool == undefined) return;

		aComment = that.IsNull (aComment, "");

		that.mAnySignForPC.SetPolicyConvertTable (aPolicy, aConvertedPool, aComment, 0);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SetPolicyConvertTableNext = function (aPolicy, aConvertedPool, aComment, aLanguage)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aPolicy == undefined) return;
		if (aConvertedPool == undefined) return;

		aComment = that.IsNull (aComment, "");

		that.mAnySignForPC.SetPolicyConvertTable (aPolicy, aConvertedPool, aComment, 0);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.SetPolicyConvertTableFinal = function ()
{
	return 0;
}

UnifiedPluginInterface.prototype.GetLastLocation = function (aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();
	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.GetLastLocation(aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.GetCacheCertLocation = function (aXgateAddress, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.GetCacheCertLocation(aXgateAddress, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.GetCacheCertLocationEx = function (aXgateAddress, aOption, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.GetCacheCertLocationEx (aXgateAddress, aOption, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.ClearCachedData = function (aXgateAddress, aOption, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.ClearCachedData (aXgateAddress, aOption, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.GetCertInfo = function (aSignedData, aOpOption, aInfoOption, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.GetCertInfoEx (aSignedData, "", aOpOption, aInfoOption, 0, aUserCallback);
}

UnifiedPluginInterface.prototype.VerifyData = function (aSignedData, aOriginalData, aOption, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.VerifyData (aSignedData, aOriginalData, aOption, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.Wif = function (aOption, aPEM, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.Wif(aOption, aPEM, aUserCallback);
}

UnifiedPluginInterface.prototype.SetCharset = function (aCharset, aUserCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		that.mAnySignForPC.SetCharset(aCharset, aUserCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.XecureLink = function (link)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	var aXgateAddress	= this.mXgateAddress;

	return this.mAnySignForPC.XecureLink (aXgateAddress, link);
}

UnifiedPluginInterface.prototype.XecureSubmit = function (form, aSessionKey)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	var aXgateAddress	= this.mXgateAddress;

	return this.mAnySignForPC.XecureSubmit (aXgateAddress, form, aSessionKey);
}

UnifiedPluginInterface.prototype.XecureNavigate = function (url, aTarget, aFeature)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	var aXgateAddress   = this.mXgateAddress;

	return this.mAnySignForPC.XecureNavigate (aXgateAddress, url, aTarget, aFeature);
}

UnifiedPluginInterface.prototype.BlockEnc = function (aPath, aPlain, aMethod, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}
	var aXgateAddress = this.mXgateAddress;

	this.mAnySignForPC.BlockEnc (aXgateAddress, aPath, aPlain, aMethod, aUserCallback);
}

UnifiedPluginInterface.prototype.BlockEnc2 = function (aPath, aPlain, aMethod, aCharset, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	var aXgateAddress = this.mXgateAddress;

	this.mAnySignForPC.BlockEnc2 (aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback);
}

UnifiedPluginInterface.prototype.BlockEncEx = function (aPath, aPlain, aMethod, aCharset, aUserCallback, aParam)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	var aXgateAddress = this.mXgateAddress;

	this.mAnySignForPC.BlockEncEx (aXgateAddress, aPath, aPlain, aMethod, aCharset, aUserCallback, aParam);
}

UnifiedPluginInterface.prototype.BlockDec = function (aCipher, aElement, aUserCallback, aParam)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	var aXgateAddress = this.mXgateAddress;

	if (this.mEncCharset)
		return this.mAnySignForPC.BlockDecEx(aXgateAddress, aCipher, this.mEncCharset, aElement, aUserCallback, aParam);
	else
		return this.mAnySignForPC.BlockDecEx(aXgateAddress, aCipher, "utf-8", aElement, aUserCallback, aParam);
}

UnifiedPluginInterface.prototype.FileHash = function (aPath, aAlg, aUserCallback, aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.FileHash (aPath, aAlg, aUserCallback, aErrCallback);
}

UnifiedPluginInterface.prototype.getKTBScanInfo = function (aServerIP, aServerPort, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.getKTBScanInfo(aServerIP, aServerPort, aUserCallback);
}

UnifiedPluginInterface.prototype.GenerateRandom = function (aLength, aOption, aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.generateRandom(aLength, aOption, aUserCallback);
}

UnifiedPluginInterface.prototype.GetCertPEM = function (aMediaID,
														aIssuerRDN,
														aCertSerial,
														aOption,
														aUserCallback,
														aErrCallback)
{
	// AnySignLite ì§ì
	this.setAnySignLite();

	var  that = this;
	var _resultcallback = function ()
	{
		if (aUserCallback == undefined)
		{
			alert ("callback error");
			return;
		}

		if (aMediaID == null ||
			aIssuerRDN == null || aIssuerRDN.length == 0 ||
			aCertSerial == null || aCertSerial.length == 0)
		{
			alert("[GetCertPEM] invalid parameters.");
			return;
		}

		aOption = that.IsNull (aOption, 0);

		that.mAnySignForPC.GetCertPEM (aMediaID,
									   aIssuerRDN,
									   aCertSerial,
									   aOption,
									   aUserCallback,
									   aErrCallback);
	}

	this.mAnySignForPC.SetStorage( _resultcallback);
}

UnifiedPluginInterface.prototype.AnySign4PC_installCheck = function (aUserCallback)
{
	this.mAnySignForPC.AnySign4PC_installCheck (aUserCallback);
}

UnifiedPluginInterface.prototype.AnySign4PC_installCallback = function (aUserCallback)
{
	this.mAnySignForPC.AnySign4PC_installCallback (aUserCallback);
}

UnifiedPluginInterface.prototype.AnySign4PC_LoadCallback = function (aUserCallback)
{
	this.mAnySignForPC.AnySign4PC_LoadCallback (aUserCallback);
}

UnifiedPluginInterface.prototype.setBlockDec_callback = function  (aUserCallback, aParam)
{
	this.mAnySignForPC.setBlockDec_callback  (aUserCallback, aParam);
}

UnifiedPluginInterface.prototype.setInfoDialog = function (aType, aRightoff)
{
    this.mAnySignForPC.setInfoDialog(aType, aRightoff);
}

// FCMS
UnifiedPluginInterface.prototype.SelectFile = function (aInitPath,
														aFilterString,
														aOption,
														aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	aInitPath		= this.IsNull (aInitPath, "");
	aFilterString	= this.IsNull (aFilterString, "");

	this.mAnySignForPC.SelectFile (aInitPath,
								   aFilterString,
								   aOption,
								   aUserCallback);
}

UnifiedPluginInterface.prototype.SignFileEx = function (aXgateAddress,
														aCAList,
														aLimitedTrial,
														aInFilePath,
														aOutFilePath,
														aOption,
														aDescription,
														aUserCallback,
														aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileEx (aXgateAddress,
								   aCAList,
								   "",
								   "",
								   aLimitedTrial,
								   aInFilePath,
								   aOutFilePath,
								   aOption,
								   aDescription,
								   aUserCallback,
								   aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithSerial = function (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aCertLocation	= this.IsNull (aCertLocation, 1);	 // 1 hdd
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileEx (aXgateAddress,
								   aCAList,
								   aCertSerial,
								   aCertLocation,
								   aLimitedTrial,
								   aInFilePath,
								   aOutFilePath,
								   aOption,
								   aDescription,
								   aUserCallback,
								   aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithCacheCert = function (aXgateAddress,
																	 aInFilePath,
																	 aOutFilePath,
																	 aOption,
																	 aDescription,
																	 aUserCallback,
																	 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileExWithCacheCert (aXgateAddress,
												aInFilePath,
												aOutFilePath,
												aOption,
												aDescription,
												aUserCallback,
												aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithCacheCert2 = function (aXgateAddress,
																	  aInFilePath,
																	  aOutFilePath,
																	  aOption,
																	  aDescription,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileExWithCacheCert2 (aXgateAddress,
												 aInFilePath,
												 aOutFilePath,
												 aOption,
												 aDescription,
												 aUserCallback,
												 aErrCallback);
}

UnifiedPluginInterface.prototype.ClearCacheCert2 = function (aUserCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	this.mAnySignForPC.ClearCacheCert2 (aUserCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithVID = function (aXgateAddress,
															   aCAList,
															   aLimitedTrial,
															   aInFilePath,
															   aOutFilePath,
															   aIdn,
															   aSvrCert,
															   aOption,
															   aDescription,
															   aUserCallback,
															   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aSvrCert == null || aSvrCert.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aIdn			= this.IsNull (aIdn, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileExWithVID (aXgateAddress,
										  aCAList,
										  "",
										  "",
										  aLimitedTrial,
										  aInFilePath,
										  aOutFilePath,
										  aIdn,
										  aSvrCert,
										  aOption,
										  aDescription,
										  aUserCallback,
										  aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithVID_Serial = function (aXgateAddress,
																	  aCAList,
																	  aCertSerial,
																	  aCertLocation,
																	  aLimitedTrial,
																	  aInFilePath,
																	  aOutFilePath,
																	  aIdn,
																	  aSvrCert,
																	  aOption,
																	  aDescription,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aSvrCert == null || aSvrCert.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aCertLocation	= this.IsNull (aCertLocation, 1);	 // 1 hdd
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aIdn			= this.IsNull (aIdn, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.SignFileExWithVID (aXgateAddress,
										  aCAList,
										  aCertSerial,
										  aCertLocation,
										  aLimitedTrial,
										  aInFilePath,
										  aOutFilePath,
										  aIdn,
										  aSvrCert,
										  aOption,
										  aDescription,
										  aUserCallback,
										  aErrCallback);
}

UnifiedPluginInterface.prototype.SignFileExWithVID_CacheCert = function (aXgateAddress,
																		 aInFilePath,
																		 aOutFilePath,
																		 aIdn,
																		 aSvrCert,
																		 aOption,
																		 aDescription,
																		 aUserCallback,
																		 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("[SignFileExWithVID_CacheCert] invalid parameters");
		return;
	}

	if (aSvrCert == null || aSvrCert.length == 0)
	{
		alert ("[SignFileExWithVID_CacheCert] invalid parameters");
		return;
	}
	/*
	if (!((aOption & 0x08) || (aOption & 0x10)))
	{
		alert("[SignFileExWithVID_CacheCert] invalid option.");
		return;
	}
	*/
	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aIdn			= this.IsNull (aIdn, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	AnySignForPC.SignFileExWithVID_CacheCert (aXgateAddress,
											  aInFilePath,
											  aOutFilePath,
											  aIdn,
											  aSvrCert,
											  aOption,
											  aDescription,
											  aUserCallback,
											  aErrCallback);
}

UnifiedPluginInterface.prototype.VerifyFile = function (aInFilePath,
														aSignedData,
														aOption,
														aDescription,
														aUserCallback,
														aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aSignedData		= this.IsNull (aSignedData, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.VerifyFile (aInFilePath,
								   aSignedData,
								   aOption,
								   aDescription,
								   aUserCallback,
								   aErrCallback);
}

UnifiedPluginInterface.prototype.VerifyAndSignFile = function (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aCertLocation	= this.IsNull (aCertLocation, 1);
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aSignedData		= this.IsNull (aSignedData, "");
	aVerifyOption	= this.IsNull (aVerifyOption, 0);
	aSignOption		= this.IsNull (aSignOption, 0);
	aDescription	= this.IsNull (aVerifyDescription, "");
	aDescription	= this.IsNull (aSignDescription, "");

	this.mAnySignForPC.VerifyAndSignFile (aXgateAddress,
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
										  aErrCallback);
}

UnifiedPluginInterface.prototype.GetVerifiedFileCertInfo = function (aOption,
																 	 aIndex,
																 	 aUserCallback,
																 	 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aIndex < 0)
	{
		alert ("invalid parameters");
		return;
	}

	aOption			= this.IsNull (aOption, 0);

	this.mAnySignForPC.GetVerifiedFileCertInfo (aOption,
												aIndex,
												aUserCallback,
												aErrCallback);
}

UnifiedPluginInterface.prototype.ExtractFile = function (aInFilePath,
														 aOutFilePath,
														 aOption,
														 aDescription,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.ExtractFile (aInFilePath,
									aOutFilePath,
									aOption,
									aDescription,
									aUserCallback,
									aErrCallback);
}

UnifiedPluginInterface.prototype.EnvelopeFileWithPEM = function (aInFilePath,
																 aOutFilePath,
																 aCertPEM,
																 aOption,
																 aDescription,
																 aUserCallback,
																 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.EnvelopeFileWithPEM (aInFilePath,
											aOutFilePath,
											aCertPEM,
											aOption,
											aDescription,
											aUserCallback,
											aErrCallback);
}

UnifiedPluginInterface.prototype.EnvelopeFileWithCert = function  (aXgateAddress,
																   aCAList,
																   aInFilePath,
																   aOutFilePath,
																   aOption,
																   aDescription,
																   aUserCallback,
																   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.EnvelopeFileWithCert (aXgateAddress,
											 aCAList,
											 null,
											 null,
											 aInFilePath,
											 aOutFilePath,
											 aOption,
											 aDescription,
											 aUserCallback,
											 aErrCallback);
}

UnifiedPluginInterface.prototype.EnvelopeFileWithCert_Serial = function  (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aCertLocation	= this.IsNull (aCertLocation, 1);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.EnvelopeFileWithCert (aXgateAddress,
											 aCAList,
											 aCertSerial,
											 aCertLocation,
											 aInFilePath,
											 aOutFilePath,
											 aOption,
											 aDescription,
											 aUserCallback,
											 aErrCallback);
}

UnifiedPluginInterface.prototype.DeEnvelopeFileWithCert = function (aXgateAddress,
																	aCAList,
																	aLimitedTrial,
																	aInFilePath,
																	aOutFilePath,
																	aOption,
																	aDescription,
																	aUserCallback,
																	aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.DeEnvelopeFileWithCert (aXgateAddress,
											   aCAList,
											   null,
											   null,
											   aLimitedTrial,
											   aInFilePath,
											   aOutFilePath,
											   aOption,
											   aDescription,
											   aUserCallback,
											   aErrCallback);
}

UnifiedPluginInterface.prototype.DeEnvelopeFileWithCert_Serial = function (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aCAList			= this.IsNull (aCAList, this.mCAList);
	aCertSerial		= this.IsNull (aCertSerial, "");
	aCertLocation	= this.IsNull (aCertLocation, 1);
	aLimitedTrial	= this.IsNull (aLimitedTrial, this.mLimitedTrial);
	aOutFilePath	= this.IsNull (aOutFilePath, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.DeEnvelopeFileWithCert (aXgateAddress,
											   aCAList,
											   aCertSerial,
											   aCertLocation,
											   aLimitedTrial,
											   aInFilePath,
											   aOutFilePath,
											   aOption,
											   aDescription,
											   aUserCallback,
											   aErrCallback);
}

UnifiedPluginInterface.prototype.EnvelopeFileWithPasswd = function (aInFilePath,
																	aOutFilePath,
																	aSymKey,
																	aOption,
																	aDescription,
																	aUserCallback,
																	aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (!(aOption & 1))
	{
		if (aSymKey == null || aSymKey.length == 0)
		{
			alert ("invalid parameters");
			return;
		}
	}
	else
	{
		aSymKey = "";
	}

	aOutFilePath 	= this.IsNull (aOutFilePath, "");
	aSymKey 		= this.IsNull (aSymKey, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.EnvelopeFileWithPasswd (aInFilePath,
											   aOutFilePath,
											   aSymKey,
											   aOption,
											   aDescription,
											   aUserCallback,
											   aErrCallback);
}

UnifiedPluginInterface.prototype.DeEnvelopeFileWithPasswd = function (aInFilePath,
																	  aOutFilePath,
																	  aSymKey,
																	  aOption,
																	  aDescription,
																	  aUserCallback,
																	  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (!(aOption & 1))
	{
		if (aSymKey == null || aSymKey.length == 0)
		{
			alert ("invalid parameters");
			return;
		}
	}
	else
	{
		aSymKey = "";
	}

	aOutFilePath 	= this.IsNull (aOutFilePath, "");
	aSymKey 		= this.IsNull (aSymKey, "");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.DeEnvelopeFileWithPasswd (aInFilePath,
												 aOutFilePath,
												 aSymKey,
												 aOption,
												 aDescription,
												 aUserCallback,
												 aErrCallback);
}

UnifiedPluginInterface.prototype.GetEnvelopedFileInfo = function (aEnvelopedFile,
		  														  aOption,
		  														  aUserCallback,
		  														  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	this.mAnySignForPC.GetEnvelopedFileInfo (aEnvelopedFile,
											 aOption,
											 aUserCallback,
											 aErrCallback);
}

UnifiedPluginInterface.prototype.UploadFile = function (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aPath == null || aPath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aHostName == null || aHostName.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aQuery			= this.IsNull (aQuery, "");
	aPort 			= this.IsNull (aPort, "80");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.UploadFile (aXgateAddress,
								   aPath,
								   aQuery,
								   aHostName,
								   aPort,
								   aInFilePath,
								   aOption,
								   aDescription,
								   aUserCallback,
								   aErrCallback);
}

UnifiedPluginInterface.prototype.UploadFileEx = function (aXgateAddress,
		  												aPath,
		  												aQuery,
		  												aHostName,
		  												aPort,
		  												aInFilePath,
		  												aOption,
														aDescription,
														aSID,
														aCharset,
														aUserCallback,
														aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aPath == null || aPath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aHostName == null || aHostName.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aInFilePath == null || aInFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aSID = aSID || document.cookie;
	if (aSID == null || aSID.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aCharset == null || aCharset.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aQuery			= this.IsNull (aQuery, "");
	aPort 			= this.IsNull (aPort, "80");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.UploadFileEx (aXgateAddress,
								   aPath,
								   aQuery,
								   aHostName,
								   aPort,
								   aInFilePath,
								   aOption,
								   aDescription,
								   aSID,
								   aCharset,
								   aUserCallback,
								   aErrCallback);
}
UnifiedPluginInterface.prototype.DownloadFile = function (aXgateAddress,
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
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aPath == null || aPath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aHostName == null || aHostName.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aTargetFilePath == null || aTargetFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aQuery 			= this.IsNull (aQuery, "");
	aPort 			= this.IsNull (aPort, "80");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.DownloadFile (aXgateAddress,
									 aPath,
									 aQuery,
									 aHostName,
									 aPort,
									 aTargetFilePath,
									 aDownloadFilePath,
									 aOption,
									 aDescription,
									 aUserCallback,
									 aErrCallback);
}

UnifiedPluginInterface.prototype.DownloadFileEx = function (aXgateAddress,
														  aPath,
														  aQuery,
														  aHostName,
														  aPort,
														  aTargetFilePath,
														  aDownloadFilePath,
														  aOption,
														  aDescription,
														  aSID,
														  aCharset,
														  aUserCallback,
														  aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aPath == null || aPath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aHostName == null || aHostName.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aTargetFilePath == null || aTargetFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aSID = aSID || document.cookie;
	if (aSID == null || aSID.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	if (aCharset == null || aCharset.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aQuery 			= this.IsNull (aQuery, "");
	aPort 			= this.IsNull (aPort, "80");
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.DownloadFileEx (aXgateAddress,
									 aPath,
									 aQuery,
									 aHostName,
									 aPort,
									 aTargetFilePath,
									 aDownloadFilePath,
									 aOption,
									 aDescription,
									 aSID,
									 aCharset,
									 aUserCallback,
									 aErrCallback);
}

UnifiedPluginInterface.prototype.ZipFile = function (aXgateAddress,
													 aSourceFile,
													 aTargetFile,
													 aOption,
													 aDescription,
													 aUserCallback,
													 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aSourceFile == null || aSourceFile.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.ZipFile (aXgateAddress,
								aSourceFile,
								aTargetFile,
								aOption,
								aDescription,
								aUserCallback,
								aErrCallback);
}

UnifiedPluginInterface.prototype.UnZipFile = function (aXgateAddress,
													   aSourceFile,
													   aDestDir,
													   aOption,
													   aDescription,
													   aUserCallback,
													   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aSourceFile == null || aSourceFile.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aXgateAddress	= this.IsNull (aXgateAddress, this.mXgateAddress);
	aOption			= this.IsNull (aOption, 0);
	aDescription	= this.IsNull (aDescription, "");

	this.mAnySignForPC.UnZipFile (aXgateAddress,
								  aSourceFile,
								  aDestDir,
								  aOption,
								  aDescription,
								  aUserCallback,
								  aErrCallback);
}

UnifiedPluginInterface.prototype.GetFileInfo = function (aFilePath,
														 aOption,
														 aUserCallback,
														 aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	if (aFilePath == null || aFilePath.length == 0)
	{
		alert ("invalid parameters");
		return;
	}

	aOption			= this.IsNull (aOption, 0);

	this.mAnySignForPC.GetFileInfo (aFilePath,
									aOption,
									aUserCallback,
									aErrCallback);
}

UnifiedPluginInterface.prototype.ClearTempFile = function (aXgateAddress,
														   aUserCallback,
														   aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.ClearTempFile (aXgateAddress,
									  aUserCallback,
									  aErrCallback);
}

UnifiedPluginInterface.prototype.GetHomeDir = function (aUserCallback,
														aErrCallback)
{
	// AnySignLite ë¯¸ì§ì
	this.setAnySignLite(false, false);

	if (aUserCallback == undefined)
	{
		alert ("callback error");
		return;
	}

	this.mAnySignForPC.GetHomeDir (aUserCallback,
									  aErrCallback);
}

UnifiedPluginInterface.prototype.XFSLogout = function (aUserCallback)
{
	if (aUserCallback == undefined)
	{
		aUserCallback = function (){};
	}

	return this.mAnySignForPC.XFSLogout (aUserCallback);
}

var AnySign = AnySignInitialize ();

PrintObjectTag = function (aIgnoreInstallpage, aTargetElement)
{
	AnySign.StartAnySign (aIgnoreInstallpage, aTargetElement);
}

/*
 * Error Callback
 */

function SignDataCMS_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function SignDataCMSWithSerial_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function SignDataCMSWithHTMLEx_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function SignDataWithVID_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function SignDataWithVID_Serial_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function MultiSignEx_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function MultiFileSign_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function MultiSignExWithSerial_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function MultiSignFileInfo_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function MultiSignFileInfoWithSerial_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function ShowCertManager_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function RequestCertificate_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function RenewCertificate_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function RevokeCertificate_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function GetVidInfo_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function FileHash_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function EnvelopData_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

function DeEnvelopData_ErrCallback(aResult)
{
	alert("ErrCode [" + aResult.code + "] ErrMsg [" +aResult.msg+"]");
}

/*
 * ì¸ì¦ì ê´ë¦¬ì
 */
ShowCertManager = function ()
{
	AnySign.ShowCertManager (ShowCertManager_ErrCallback);
}

/*
 * ìëª í¨ì
 */
Sign_with_option = function (aOption,
	   						 aPlain,
							 aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	AnySign.SignDataCMS (null,
						 null,
						 aPlain,
						 aOption,
						 null,
						 null,
						 aUserCallback,
						 SignDataCMS_ErrCallback);
}

Sign_with_serial = function (aCertSerial,
							 aCertLocation,
							 aPlain,
							 aOption,
							 aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	AnySign.SignDataCMSWithSerial (null,
								   null,
								   aCertSerial,
								   aCertLocation,
								   aPlain,
								   aOption,
								   null,
								   null,
								   aUserCallback,
								   SignDataCMSWithSerial_ErrCallback);
}

Sign_with_vid_user= function (aOption,
	   						  aPlain,
							  aSvrCert,
							  aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	aOption = aOption +4;
	AnySign.SignDataWithVID_Serial (null,
									null,
									null,
									null,
									aPlain,
									aOption,
									null,
									null,
									null,
									aSvrCert,
									aUserCallback,
									SignDataWithVID_ErrCallback);
}

Sign_with_vid_web = function (aOption,
	   						  aPlain,
	   						  aIdn,
							  aSvrCert,
							  aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	aOption = aOption +12;
	AnySign.SignDataWithVID_Serial (null,
									null,
									null,
									null,
									aPlain,
									aOption,
									null,
									null,
									aIdn,
									aSvrCert,
									aUserCallback,
									SignDataWithVID_ErrCallback);
}

Sign_without_vid_web = function (aOption,
								 aPlain,
								 aSvrCert,
								 aIdn,
								 aUserCallback,
								 aErrorCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	aOption = aOption + 20;
	AnySign.SignDataWithVID_Serial (null,
									null,
									null,
									null,
									aPlain,
									aOption,
									null,
									null,
									aIdn,
									aSvrCert,
									aUserCallback,
									aErrorCallback,
									SignDataWithVID_ErrCallback);
}

Sign_with_vid_user_serial = function (aCertSerial,
									  aCertLocation,
									  aOption,
									  aPlain,
									  aSvrCert,
									  aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	aOption = aOption +4;
	AnySign.SignDataWithVID_Serial (null,
									null,
									aCertSerial,
									aCertLocation,
									aPlain,
									aOption,
									null,
									null,
									null,
									aSvrCert,
									aUserCallback,
									SignDataWithVID_Serial_ErrCallback);
}

Sign_with_vid_web_serial = function (aCertSerial,
									 aCertLocation,
									 aOption,
									 aPlain,
									 aSvrCert,
									 aIdn,
									 aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	aOption = aOption +12;
	AnySign.SignDataWithVID_Serial (null,
									null,
									aCertSerial,
									aCertLocation,
									aPlain,
									aOption,
									null,
									null,
									aIdn,
									aSvrCert,
									aUserCallback,
									SignDataWithVID_Serial_ErrCallback);
}

Sign_with_option_htmlex = function (aOption,
									aForm,
									aPlain,
									aCert,
									aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	AnySign.SignDataCMSWithHTMLEx (null,
								   null,
								   aForm,
								   aPlain,
								   aCert,
								   aOption,
								   null,
								   null,
								   aUserCallback,
								   SignDataCMSWithHTMLEx_ErrCallback);
}

Sign_with_option_htmlex_Serial = function (aOption,
										   aForm,
										   aPlain,
										   aCert,
										   aCertSerial,
										   aCertLocation,
										   aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	AnySign.SignDataCMSWithHTMLExAndSerial (null,
											null,
											aCertSerial,
											aCertLocation,
											aForm,
											aPlain,
											aCert,
											aOption,
											null,
											null,
											aUserCallback,
											SignDataCMSWithHTMLEx_ErrCallback);
}

/*
 * CMP
 */
RequestCertificate = function (aType,
							   aReferenceNumber,
							   aAuthenticationCode,
							   aUserCallback,
							   aUbiKeyUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	var aOption = 2;

	AnySign.RequestCertificate (aType,
								aReferenceNumber,
								aAuthenticationCode,
								aOption,
								aUserCallback,
								RequestCertificate_ErrCallback,
								aUbiKeyUserCallback);
}

RequestCertificate2 = function (aType,
							   aReferenceNumber,
							   aAuthenticationCode,
							   aBrowserMedia,
							   aUserCallback,
							   aUbiKeyUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	var aOption = 2;

	AnySign.RequestCertificate2 (aType,
								aReferenceNumber,
								aAuthenticationCode,
								aOption,
								aBrowserMedia,
								aUserCallback,
								RequestCertificate_ErrCallback,
								aUbiKeyUserCallback);
}

RenewCertificate = function (aType,
							 aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	var aOption = 0;

	AnySign.RenewCertificate (aType,
							  null,
							  aOption,
							  null,
							  aUserCallback,
							  RenewCertificate_ErrCallback);
}

RenewCertificateWithSerial = function (aType,
									   aCertSerial,
									   aCertLocation,
							 		   aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	var aOption = 0;

	AnySign.RenewCertificateWithSerial (aType,
										aCertSerial,
										aCertLocation,
										aOption,
										null,
										aUserCallback,
										RenewCertificate_ErrCallback);
}

RevokeCertificate = function (aType,
							  aJobCode,
							  aReason,
							  aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Don't return result.
	 *----------------------------------------------------------------------*/
	AnySign.RevokeCertificate (aType,
							   aJobCode,
							   aReason,
							   null,
							   aUserCallback,
							   RevokeCertificate_ErrCallback);
}

MultiSign = function (aTotal,
					  aPlainMsg,
					  aDelimeter,
					  aUserCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aPlainPointer = aPlainMsg;
	var aIndex= "";
	var aLength = "";
	var aSigned = "";

	if (aTotal <= 0 || aPlainMsg == undefined || aPlainMsg == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength = aPlainPointer.length;
		aIndex = aPlainPointer.indexOf(aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID,aPlainPointer.substring(0,aIndex));
		aPlainPointer = aPlainPointer.substring (aIndex+1,aLength);
	}

	MultiSign_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}
		} else {
			aSigned = AnySign.GetMultiSignedData (aMultiSignID, 0);
			aSignedMsg = aSigned + aDelimeter;
		}

		aUserCallback(aSignedMsg);
		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignEx(aMultiSignID,
						null,
						null,
						0,
						null,
						3,
						MultiSign_closure_callback,
						MultiSignEx_ErrCallback);
}

MultiSignWithSerial = function (aTotal,
								aPlainMsg,
								aDelimeter,
								aCertSerial,
								aCertLocation,
								aUserCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aPlainPointer = aPlainMsg;
	var aIndex= "";
	var aLength = "";
	var aSigned = "";

	if (aTotal <= 0 || aPlainMsg == undefined || aPlainMsg == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength = aPlainPointer.length;
		aIndex = aPlainPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID,aPlainPointer.substring(0,aIndex));
		aPlainPointer = aPlainPointer.substring (aIndex+1,aLength);
	}

	MultiSignWithSerial_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}
		} else {
			aSigned = AnySign.GetMultiSignedData (aMultiSignID, 0);
			aSignedMsg = aSigned + aDelimeter;
		}

		aUserCallback(aSignedMsg);
		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignExWithSerial (aMultiSignID,
								   null,
								   null,
								   aCertSerial,
								   aCertLocation,
								   0,
								   null,
								   null,
								   MultiSignWithSerial_closure_callback,
								   MultiSignExWithSerial_ErrCallback);
}

MultiSignWithVID_Serial = function (aTotal,
								aPlainMsg,
								aDelimeter,
								aCertSerial,
								aCertLocation,
								aSvrCert,
								aUserCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aPlainPointer = aPlainMsg;
	var aIndex= "";
	var aLength = "";
	var aSigned = "";

	if (aTotal <= 0 || aPlainMsg == undefined || aPlainMsg == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength = aPlainPointer.length;
		aIndex = aPlainPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID,aPlainPointer.substring(0,aIndex));
		aPlainPointer = aPlainPointer.substring (aIndex+1,aLength);
	}

	MultiSignWithSerial_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}
		} else {
			aSigned = AnySign.GetMultiSignedData (aMultiSignID, 0);
			aSignedMsg = aSigned + aDelimeter;
		}

		aUserCallback(aSignedMsg);
		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignExWithVID_Serial (aMultiSignID,
								   null,
								   null,
								   aCertSerial,
								   aCertLocation,
								   0,
								   null,
								   aSvrCert,
								   null,
								   MultiSignWithSerial_closure_callback,
								   MultiSignExWithSerial_ErrCallback);
}

MultiFileSign = function (aTotal,
						  aPlainMsg,
						  aDelimeter,
						  aUserCallback)
{
	var aSignedFiles = "";
	var aSignedPath = "";
	var aMultiSignID = "";
	var aPlainPointer = aPlainMsg;
	var aIndex= "";
	var aLength = "";

	if (aTotal <= 0 || aPlainMsg == undefined || aPlainMsg == "")
	{
		alert("[MultiFileSign] invalid parameters.");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit ();

	for (i = 0; i < aTotal; i++)
	{
		aLength = aPlainPointer.length;
		aIndex = aPlainPointer.indexOf(aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID,aPlainPointer.substring(0,aIndex));
		aPlainPointer = aPlainPointer.substring (aIndex+1,aLength);
	}

	MultiFileSign_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSignedPath = AnySign.GetMultiSignedData (aMultiSignID, i);
				if (aSignedPath == "")
					continue;

				aSignedFiles += aSignedPath + aDelimeter;
			}
			aUserCallback(aSignedFiles);
		}
		AnySign.MultiSignFinal(aMultiSignID);
	}
	AnySign.MultiFileSign(aMultiSignID,
						  null,
						  null,
						  0,
						  null,
						  3,
						  MultiFileSign_closure_callback,
						  MultiFileSign_ErrCallback);
}

MultiSignFileInfo = function (aXgateAddress,
							  aCAList,
							  aTotal,
							  aDelimeter,
							  aFileInfo,
							  aFileHash,
							  aOption,
							  aDescription,
							  aLimitedTrial,
							  aUserCallback,
							  aErrCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aFileInfoPointer = aFileInfo;
	var aFileHashPointer = aFileHash;
	var aIndex1= "";
	var aIndex2= "";
	var aLength1 = "";
	var aLength2 = "";
	var aSigned = "";

	if (aTotal <= 0 || aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength1 = aFileInfoPointer.length;
		aIndex1 = aFileInfoPointer.indexOf (aDelimeter);

		aLength2 = aFileHashPointer.length;
		aIndex2 = aFileHashPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID, aFileInfoPointer.substring(0,aIndex1), aFileHashPointer.substring(0,aIndex2));
		aFileInfoPointer = aFileInfoPointer.substring (aIndex1+1,aLength1);
		aFileHashPointer = aFileHashPointer.substring (aIndex2+1,aLength2);
	}

	MultiSignFileInfo_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}

			aUserCallback(aSignedMsg);
		}

		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignFileInfo (aMultiSignID,
							   aXgateAddress,
							   aCAList,
							   aOption,
							   aDescription,
							   aLimitedTrial,
							   MultiSignFileInfo_closure_callback,
							   aErrCallback);
}

MultiSignFileInfoWithSerial = function (aXgateAddress,
										aCAList,
										aCertSerial,
										aCertLocation,
										aTotal,
										aDelimeter,
										aFileInfo,
										aFileHash,
										aOption,
										aDescription,
										aLimitedTrial,
										aUserCallback,
										aErrCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aFileInfoPointer = aFileInfo;
	var aFileHashPointer = aFileHash;
	var aIndex1= "";
	var aIndex2= "";
	var aLength1 = "";
	var aLength2 = "";
	var aSigned = "";

	if (aTotal <= 0 || aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength1 = aFileInfoPointer.length;
		aIndex1 = aFileInfoPointer.indexOf (aDelimeter);

		aLength2 = aFileHashPointer.length;
		aIndex2 = aFileHashPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID, aFileInfoPointer.substring(0,aIndex1), aFileHashPointer.substring(0,aIndex2));
		aFileInfoPointer = aFileInfoPointer.substring (aIndex1+1,aLength1);
		aFileHashPointer = aFileHashPointer.substring (aIndex2+1,aLength2);
	}

	MultiSignFileInfoWithSerial_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}

			aUserCallback(aSignedMsg);
		}

		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignFileInfoWithSerial (aMultiSignID,
										 aXgateAddress,
										 aCAList,
										 aCertSerial,
										 aCertLocation,
										 aOption,
										 aDescription,
										 aLimitedTrial,
										 MultiSignFileInfoWithSerial_closure_callback,
										 aErrCallback);
}

MultiSignFileInfoWithVID = function (aXgateAddress,
									 aCAList,
									 aTotal,
									 aDelimeter,
									 aFileInfo,
									 aFileHash,
									 aOption,
									 aDescription,
									 aLimitedTrial,
									 aIdn,
									 aSvrCert,
									 aUserCallback,
									 aErrCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aFileInfoPointer = aFileInfo;
	var aFileHashPointer = aFileHash;
	var aIndex1= "";
	var aIndex2= "";
	var aLength1 = "";
	var aLength2 = "";
	var aSigned = "";

	if (aTotal <= 0 || aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength1 = aFileInfoPointer.length;
		aIndex1 = aFileInfoPointer.indexOf (aDelimeter);

		aLength2 = aFileHashPointer.length;
		aIndex2 = aFileHashPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID, aFileInfoPointer.substring(0,aIndex1), aFileHashPointer.substring(0,aIndex2));
		aFileInfoPointer = aFileInfoPointer.substring (aIndex1+1,aLength1);
		aFileHashPointer = aFileHashPointer.substring (aIndex2+1,aLength2);
	}

	MultiSignFileInfoWithVID_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}

			aUserCallback(aSignedMsg);
		}

		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignFileInfoWithVID (aMultiSignID,
									  aXgateAddress,
									  aCAList,
									  aOption,
									  aDescription,
									  aLimitedTrial,
									  aIdn,
									  aSvrCert,
									  MultiSignFileInfoWithVID_closure_callback,
									  aErrCallback);
}

MultiSignFileInfoWithVID_Serial = function (aXgateAddress,
											aCAList,
											aCertSerial,
											aCertLocation,
											aTotal,
											aDelimeter,
											aFileInfo,
											aFileHash,
											aOption,
											aDescription,
											aLimitedTrial,
											aIdn,
											aSvrCert,
											aUserCallback,
											aErrCallback)
{
	var aSignedMsg = "";
	var aMultiSignID = "";
	var aFileInfoPointer = aFileInfo;
	var aFileHashPointer = aFileHash;
	var aIndex1= "";
	var aIndex2= "";
	var aLength1 = "";
	var aLength2 = "";
	var aSigned = "";

	if (aTotal <= 0 || aFileInfo == undefined || aFileInfo == "" || aFileHash == undefined || aFileHash == "")
	{
		alert("input err");
		return "";
	}

	aMultiSignID = AnySign.MultiSignInit();

	for(i =0;i < aTotal ;i++)
	{
		aLength1 = aFileInfoPointer.length;
		aIndex1 = aFileInfoPointer.indexOf (aDelimeter);

		aLength2 = aFileHashPointer.length;
		aIndex2 = aFileHashPointer.indexOf (aDelimeter);

		AnySign.SetMultiSignData (aMultiSignID, aFileInfoPointer.substring(0,aIndex1), aFileHashPointer.substring(0,aIndex2));
		aFileInfoPointer = aFileInfoPointer.substring (aIndex1+1,aLength1);
		aFileHashPointer = aFileHashPointer.substring (aIndex2+1,aLength2);
	}

	MultiSignFileInfoWithVIDSerial_closure_callback = function (aResult)
	{
		if (aResult == 0)
		{
			for(i = 0; i < aTotal ; i++)
			{
				aSigned = AnySign.GetMultiSignedData (aMultiSignID, i);
				aSignedMsg += aSigned + aDelimeter;
			}

			aUserCallback(aSignedMsg);
		}

		AnySign.MultiSignFinal(aMultiSignID);
	}

	AnySign.MultiSignFileInfoWithVID_Serial (aMultiSignID,
											 aXgateAddress,
											 aCAList,
											 aCertSerial,
											 aCertLocation,
											 aOption,
											 aDescription,
											 aLimitedTrial,
											 aIdn,
											 aSvrCert,
											 MultiSignFileInfoWithVIDSerial_closure_callback,
											 aErrCallback);
}

send_vid_info = function (aUserCallback)
{
	/*------------------------------------------------------------------------
	 * Should have a function(aUserCallback)
	 *----------------------------------------------------------------------*/
	return AnySign.GetVidInfo (aUserCallback, GetVidInfo_ErrCallback);
}

XecureLink = function (link)
{
	return AnySign.XecureLink (link);
}

XecureSubmit = function (form, aSessionKey)
{
	return AnySign.XecureSubmit (form, aSessionKey);
}

XecureNavigate = function (url, aTarget, aFeature)
{
	return AnySign.XecureNavigate (url, aTarget, aFeature);
}

BlockEnc = function (aPlain, aMethod, aUserCallback)
{
	AnySign.BlockEnc("/", aPlain, aMethod, aUserCallback);
}

BlockEnc2 = function (aPlain, aMethod, aCharset, aUserCallback)
{
	AnySign.BlockEnc2("/", aPlain, aMethod, aCharset, aUserCallback);
}

BlockEncEx = function (aPlain, aMethod, aCharset, aUserCallback, aParam)
{
	AnySign.BlockEncEx ("/", aPlain, aMethod, aCharset, aUserCallback, aParam);
}

BlockDec = function (aCipher, aElement, aUserCallback, aParam)
{
	return AnySign.BlockDec(aCipher, aElement, aUserCallback, aParam);
}

FileHash = function (aPath, aAlg, aUserCallback)
{
	AnySign.FileHash (aPath, aAlg, aUserCallback, FileHash_ErrCallback);
}

function vKeypadOK(type, formName, decInputName ) {}

function GetSafeResponse(aText) { return aText; }

function setExtension_encCallback (aUserCallback)
{
	if (AnySign.mAnySignEnable)
		AnySign.mExtensionSetting.mEncCallback = aUserCallback;
	else
		aUserCallback ();
}

function setBlockDec_callback (aUserCallback, aParam)
{
	if (AnySign.mAnySignEnable)
		AnySign.setBlockDec_callback(aUserCallback, aParam);
	else
		aUserCallback (aParam);
}

function setExternal_callback (aUserCallback)
{
	AnySign.mExtensionSetting.mExternalCallback.func = aUserCallback;
}

function getIEVersion () {
	var aUserAgent = navigator.userAgent,
		aBrowserVersion,
		aRegExp;

	if (aUserAgent.indexOf("MSIE") >= 0 || aUserAgent.indexOf("Trident") >= 0)
	{
		if(document.documentMode) {
			aBrowserVersion = document.documentMode;
		} else {
			aRegExp  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		}
	}

	if (aRegExp && aRegExp.exec(aUserAgent) != null)
		aBrowserVersion = parseFloat( RegExp.$1 );

	return aBrowserVersion;
}

SetConvertTable = function ()
{
	AnySign.SetPolicyConvertTableFirst("1.2.410.200005.1.1.1", "ë²ì©ê°ì¸", "");		//ìí,ì¹´ë

	AnySign.SetPolicyConvertTableNext("1.2.410.200004.2.201", "ë²ì©ê°ì¸", "");		//ìí,ì¹´ë

	AnySign.SetPolicyConvertTableNext("1.2.410.200004.5.1.1.5", "ë²ì©ê°ì¸", "");		//ìí,ì¹´ë
}

function showAnySignLoadingImg (aType) {
	var aImageSRC;
	var aElement1 = document.getElementById("AnySign4PCLoadingImg");
	var aElement2 = document.getElementById("AnySign4PCLoadingImg_overlay");
	//KB927917 ì¤ë¥ ê´ë ¨
	//íì´ì§ ìë¨ì AnySign4PCLoadElement IDë¡ ë DIVê° íìí¨
	var aElement3 = document.getElementById("AnySign4PCLoadElement");

	if (document.body != null && aElement1 == null)
	{
		if (AnySign.mAnySignShowImg.showDiv) {
			var aOverlay = document.createElement('div');
			var _resizeOverlayFunction;
			aOverlay.style.zIndex = AnySign.mAnySignShowImg.zIndex + 100;
			aOverlay.style.backgroundImage = 'none';
			aOverlay.style.marginLeft = '0px';
			aOverlay.style.cursor = 'auto';
			aOverlay.onclick = null;
			aOverlay.id = "AnySign4PCLoadingImg_overlay";
			aOverlay.style.position = 'fixed';
			aOverlay.style.width = '100%';
			aOverlay.style.height = '100%';
			aOverlay.style.top = '0';
			aOverlay.style.left = '0';

			var aBrowserVersion = parseInt(AnySign.mBrowser.aVersion);

			if (aBrowserVersion < 9) {
				aOverlay.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+AnySign.mBasePath+"/img/gray.png', sizingMethod='scale')";
			}
			else if(AnySign.mBrowser.aName == "chrome" && aBrowserVersion > 9) {
				aOverlay.style.background = '-webkit-radial-gradient(rgba(127, 127, 127, 0.5), rgba(127, 127, 127, 0.5) 35%, rgba(0, 0, 0, 0.7))';
			}
			else if(AnySign.mBrowser.aName == "firefox")
			{
				aOverlay.style.background = '-moz-radial-gradient(rgba(127, 127, 127, 0.5), rgba(127, 127, 127, 0.5) 35%, rgba(0, 0, 0, 0.7))';
			}
			else {
				aOverlay.style.backgroundColor = '#333333';
				aOverlay.style.opacity = '0.2';
			}

			if (aElement3 != null) {
				aElement3.appendChild (aOverlay);
			} else {
				document.body.appendChild (aOverlay);
			}
		}

		if (aType == "update") {
			aImageSRC = "loading_update";
		} else {
			aImageSRC = "loading";
		}

		var aImage = document.createElement("img");
		if (typeof AnySign.mLanguage === 'string' && AnySign.mLanguage.toLowerCase() == "ko-kr") {
			aImage.src = AnySign.mBasePath + "/img/" + aImageSRC + ".gif";
		}
		else {
			aImage.src = AnySign.mBasePath + "/img/" + aImageSRC + "_en.gif";
		}

		aImage.style.width = 'auto';
		aImage.style.height= 'auto';
		aImage.style.position = 'fixed';
		aImage.style.top = '20%';
		aImage.style.left= '50%';
		aImage.style.marginLeft = '-150px';
		aImage.style.zIndex = AnySign.mAnySignShowImg.zIndex + 1000;
		aImage.id = 'AnySign4PCLoadingImg';

		if (aElement3 != null) {
			aElement3.appendChild (aImage);
		} else {
			document.body.appendChild (aImage);
		}
	}

	if ((AnySign.mAnySignLoad == true && (AnySign.mAnySignShowImg.endImgAfterDec ? AnySign.mPageBlockDecDone == true : true) && aElement1 != null)
		|| AnySign.mExtensionSetting.mImgIntervalError == true)
	{
		if (aElement1) {
			clearInterval (AnySign.mExtensionSetting.mImgIntervalFunc);
			if (aElement3 != null) {
				aElement3.removeChild (aElement1);
			} else {
				document.body.removeChild (aElement1);
			}

			if (aElement2) {
				if (aElement3 != null) {
					aElement3.removeChild (aElement2);
				} else {
					document.body.removeChild (aElement2);
				}
			}
		}
	}
}

function AnySign4PC_installCheck (aUserCallback) {
	AnySign.mExtensionSetting.mImgIntervalError = true;
	AnySign.AnySign4PC_installCheck (aUserCallback);
}

function AnySign4PC_installCallback (aUserCallback) {
	AnySign.AnySign4PC_installCallback (aUserCallback);
}

function AnySign4PC_LoadCallback (aUserCallback) {
	AnySign.AnySign4PC_LoadCallback (aUserCallback);
}

function createOpenCertJSVersion () {
	var d = new Date();
	var year = d.getFullYear().toString();
	var month = (d.getMonth()+1).toString();
	var day = d.getDate().toString();

	if (month.length == 1)
		month = "0" + month;

	if (day.length == 1)
		day = "0" + day;

	return year + month + day;
}

function checkMobile() {
	var agentKind = "etc";
	var agent = navigator.userAgent;

	if (agent.indexOf("AppleWebKit") != -1 || agent.indexOf("Opera") != -1) {
		if (agent.indexOf("Android") != -1 || agent.indexOf("J2ME/MIDP") != -1) {
			agentKind = "android";
		} else if (agent.indexOf("iPhone") != -1) {
			agentKind = "iphone";
		} else if (agent.indexOf("iPad") != -1) {
			agentKind = "iphone";
		}
	} else {
		agentKind = "etc";
	}

	if (agentKind != "etc") {
		return true; //etcê° ìëê²½ì°, ëª¨ë°ì¼
	} else {
		return false;
	}
}
