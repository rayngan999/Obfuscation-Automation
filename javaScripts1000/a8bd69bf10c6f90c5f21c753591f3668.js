BrightTag.site('oyqH7LG',function(s){
s.domready(function(){
s.tag('\x3cscript\x3e\n        (function() {\n          var customVars \x3d [],\n          url \x3d new BrightTag.HTTP.URL(\x27https://googleads.g.doubleclick.net/pagead/viewthroughconversion/\x27 +\n            "925344444"+\x27/\x27).appendParams({\n              \x27value\x27: \x270\x27,\n              \x27label\x27: \x27\x27,\n              \x27guid\x27: \x27ON\x27,\n              \x27script\x27: \x270\x27\n            });\n\n          BrightTag.each([], function(prop) {\n            if (BrightTag.Types.isArray(prop.value)) {\n              prop.value \x3d prop.value.join(\x27,\x27);\n            }\n\n            BrightTag.pushIfDefined(customVars, prop.key + \x22\x3d\x22 + prop.value);\n          });\n\n          url.appendParam(\x22data\x22, customVars.join(\x22;\x22));\n\n          new Image().src \x3d url.toString();\n        }());\n      \x3c/script\x3e',{tagId:5283778,group:'yjss'});
s.tag('\x3cscript\x3e\n        (function() {\n          var customVars \x3d [],\n          url \x3d new BrightTag.HTTP.URL(\x27https://googleads.g.doubleclick.net/pagead/viewthroughconversion/\x27 +\n            "946738527"+\x27/\x27).appendParams({\n              \x27value\x27: \x270\x27,\n              \x27label\x27: \x27\x27,\n              \x27guid\x27: \x27ON\x27,\n              \x27script\x27: \x270\x27\n            });\n\n          BrightTag.each([], function(prop) {\n            if (BrightTag.Types.isArray(prop.value)) {\n              prop.value \x3d prop.value.join(\x27,\x27);\n            }\n\n            BrightTag.pushIfDefined(customVars, prop.key + \x22\x3d\x22 + prop.value);\n          });\n\n          url.appendParam(\x22data\x22, customVars.join(\x22;\x22));\n\n          new Image().src \x3d url.toString();\n        }());\n      \x3c/script\x3e',{tagId:5283799,group:'yjss'});
s.tag('\x3cimg border\x3d\x220\x22 src\x3d\x22https://r.turn.com/r/beacon?b2\x3d6Udehoa5M47nlbEDWDPqLbd-4xoZQe0QulF8QDc47EqRVjCT2xdVHck151bm7Z3HMT3xcGTh5Tgv9mQVKmfCvg\x26cid\x3d\x22 alt\x3d\x22\x22\x3e',{tagId:7251519});
s.tag('\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://cb2.collect.igodigital.com/collect.js\x22\x3e\n\x3c/script\x3e\n\x3cscript type\x3d\x22text/javascript\x22\x3e\n\nfunction execTag(e) {\n    var hash \x3d \x22\x22;\n    if (digitalData.user \x26\x26 Array.isArray(digitalData.user) \x26\x26 digitalData.user.length \x3e 0) {\n        if (digitalData.user[0].profile \x26\x26 Array.isArray(digitalData.user[0].profile) \x26\x26 digitalData.user[0].profile.length \x3e 0) {\n            if (digitalData.user[0].profile[0].attributes) {\n                hash \x3d digitalData.user[0].profile[0].attributes.emailHash || digitalData.user[0].profile[0].attributes.loggedInEmailHash || \x22\x22;\n            }\n        }\n    }\n    \n   _etmc.push([\x22setOrgId\x22, \x22cb2\x22]);\n   _etmc.push([\x22setUserInfo\x22, { \x22email\x22: hash }]);\n   _etmc.push([\x22trackPageView\x22]);\n}\n\nif (digitalData.event \x26\x26 Array.isArray(digitalData.event) \x26\x26 digitalData.event.some(function(e) { \n    return e \x26\x26 e.eventInfo \x26\x26 e.eventInfo.type \x3d\x3d\x3d \x22identify\x22; \n})) {\n  execTag();\n} else {\n\tCrate.DigitalDataLayer.on(\x22identify\x22, execTag);\n}\n\x3c/script\x3e',{tagId:7444057});
s.tag('\x3cscript\x3e\n  window.dataLayer \x3d window.dataLayer || [];\n  window.gtag \x3d window.gtag || function(){dataLayer.push(arguments);}\n\n  function execDcTag(e) {\n    var email \x3d \x22\x22;\n    var loggedIn \x3d \x22N\x22;\n    var site \x3d \x22US\x22;\n    var sendTo \x3d \x22DC-8494727/usbro0/cb2-h0+unique\x22;\n\n    if (Array.isArray(digitalData.user) \x26\x26 digitalData.user.length \x3e 0) {\n      if (Array.isArray(digitalData.user[0].profile) \x26\x26 digitalData.user[0].profile.length \x3e 0) {\n        if (digitalData.user[0].profile[0].attributes) {\n          email \x3d digitalData.user[0].profile[0].attributes.emailHash || digitalData.user[0].profile[0].attributes.loggedInEmailHash || \x22\x22;\n          loggedIn \x3d digitalData.user[0].profile[0].attributes.isLoggedIn ? \x22Y\x22 : \x22N\x22;\n        }\n      }\n    }\n\n    var hpRequest \x3d {\n      \x27allow_custom_scripts\x27: true,\n      \x27u8\x27: loggedIn,\n      \x27u9\x27: site,\n      \x27send_to\x27: sendTo\n    };\n\n    if (email)\n      hpRequest[\x27u1\x27] \x3d email;\n\n    window.gtag(\x27event\x27, \x27conversion\x27, hpRequest);\n  }\n\n  if (digitalData.event \x26\x26 Array.isArray(digitalData.event) \x26\x26 digitalData.event.some(function(e) {\n    return e \x26\x26 e.eventInfo \x26\x26 e.eventInfo.type \x3d\x3d\x3d \x22identify\x22;\n  })) {\n    execDcTag();\n  } else {\n    Crate.DigitalDataLayer.on(\x22identify\x22, execDcTag);\n  }\n\x3c/script\x3e',{tagId:7463235});
});
});