BrightTag.site('4DPyaxM',function(s){
s.script('//www.googletagmanager.com/gtag/js?id\x3dDC-2195488').script('//www.googletagmanager.com/gtag/js?id\x3dDC-8632166').script('//s.btstatic.com/lib/745abcebb4573a60dc1dc7f5d132864d1c23e738.js?v\x3d2').script('//s.btstatic.com/lib/c8c3096e256a91eaf614d7c9433aad0eb1322fcd.js?v\x3d2').script('//6249496.collect.igodigital.com/collect.js').script('//s.btstatic.com/btprivacy.js').wait(function(){
s.dbe('customer | id', 'pageData.customerDetails.customerID',{pageId:2869214});
s.dbe('customer | sha1 hashed email', 'pageData.customerDetails.emailHashSHA1',{pageId:2869214});
s.dbe('customer | signal 3rd party id - 365 days', '\x278739401195850672291\x27');
s.dbe('customer | signal 1st party id - session', '\x27928573031052110986\x27');
s.dbe('customer | md5 hashed email', 'pageData.customerDetails.emailHashMD5 \x3d\x3d \x22N/A\x22 ? \x22\x22 : pageData.customerDetails.emailHashMD5',{pageId:2869214});
s.dbe('customer | signal 1st party id - 365 days', '\x272939958834054188586\x27');
s.dbe('customer | signal 3rd party id - session', '\x27622571087227098460\x27');
s.dbe('customer | sha256 hashed email', 'pageData.customerDetails.emailHashSHA256',{pageId:2869214});
s.dbe('utility | channel', '(function() {\r\n\tif (document.URL.indexOf(\x22www.kohls.com\x22) \x3e -1) {\r\n\t\treturn \x22d\x22;\r\n\t\t} else if (document.URL.indexOf(\x22m.kohls.com\x22) \x3e -1) {\r\n\t\treturn \x22m\x22;\r\n\t} else if (document.URL.indexOf(\x22mobile.kohls.com\x22) \x3e -1) {\r\n\t\treturn \x22t\x22;\r\n}\r\n})();',{pageId:2869214});
s.dbe('timestamp ms', '\x271627940576778\x27');
s.dbe('customer | login status', 'pageData.customerDetails.isLoggedIn',{pageId:2869214});
s.dbe('signal universal id', '\x27FEoX2ipG1bgKXytoYjlCbe67w/udLa+ae8crQmzalFc\\x3d\x27');
s.dbe('timestamp', '\x272021-08-02T21:42:56.778Z\x27');
s.events.on('mobile: checkout - order confirmation').evaluate('((bt_data(\x27customer | login status\x27) \x3d\x3d \x22true\x22 || bt_data(\x27customer | login status\x27) \x3d\x3d true) \x26\x26 (bt_data(\x27customer | md5 hashed email\x27) !\x3d \x22N/A\x22 \x26\x26 bt_data(\x27customer | sha1 hashed email\x27) !\x3d \x22N/A\x22 \x26\x26 bt_data(\x27customer | sha256 hashed email\x27) !\x3d \x22N/A\x22))').fire(6029513).appendData('timestamp ms').appendData('customer | md5 hashed email').appendData('customer | sha1 hashed email').appendData('customer | sha256 hashed email').appendData('customer | id');
s.domready(function(){
BrightTag.Content.image("https://i.liadm.com/s/63989");
BrightTag.Content.image("https://sync.mathtag.com/sync/js?gdpr=0&redir=https%3A%2F%2Fs.thebrighttag.com%2Fcs%3Ftp%3Dmm%26uid%3D%5BMM_UUID%5D%26btt%3DjFjjC09x_z50BN80AvvGfkED6RwPTNrB-GAJhgX22mc");
BrightTag.Content.image("https://dpm.demdex.net/ibs:dpid=399555&dpuuid=5cc6a9b6-8d2b-443a-acc0-679e5c8cbbdb&redir=https%3A%2F%2Fs.thebrighttag.com%2Fcs%3Faam_uuid%3D%24%7BDD_UUID%7D%26btt%3D0%26tp%3DdT9Y2Vu%26gdpr%3D0");s.secondary(function(c){
c.when('((bt_data(\x27customer | login status\x27) \x3d\x3d \x22true\x22 || bt_data(\x27customer | login status\x27) \x3d\x3d true) \x26\x26 (bt_data(\x27customer | sha1 hashed email\x27) !\x3d \x22N/A\x22 \x26\x26 bt_data(\x27customer | sha256 hashed email\x27) !\x3d \x22N/A\x22 \x26\x26 bt_data(\x27customer | md5 hashed email\x27) !\x3d \x22N/A\x22))').fire(6029513).appendData('timestamp ms').appendData('customer | md5 hashed email').appendData('customer | sha1 hashed email').appendData('customer | sha256 hashed email').appendData('customer | id');
c.when('!!bt_data(\x27uid-loyalty-number\x27)').fire(7180).appendData('atg-id').appendData('signal universal id').appendData('utility | channel').appendData('timestamp');
c.when('!!bt_data(\x27atg-id\x27)').fire(12296).appendData('signal universal id').appendData('master-persona-id').appendData('atg-id').appendData('timestamp').appendData('timestamp ms');
c.when('true').fire(4847939);
});
});
});
});
