//tealium universal tag - utag.329 ut4.0.202107272208, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var certona=certona||{};try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.map={"certona_clientid":"cid","certona_domain":"domain","certona_pagetype":"page_type","certona_customer_uuid":"customer_id","di_email_key":"emailcustomerid","category_id":"categoryid","division_id":"divisionid","subdivision_id":"subdivisionid","product_brand":"brand","brand_code":"site","certona_recs":"recommendations","language_code":"language_code","certona_oos_pid":"product_id","store_name_new":"newstorename","store_number_new":"newstorenumber","certona_divpref":"divpref","certona_catpref":"catpref","certona_girls_at_flag":"girls_flag","certona_at_rec_pur_sku":"at_purchased_sku","certona_br_rec_per_sku":"br_purchased_sku","certona_on_rec_pur_sku":"on_purchased_sku","certona_gap_rec_pur_sku":"gap_purchased_sku","certona_spus":"certona_spus","badge_list":"badge_list","optly_experiment_list":"segments","certona_clus":"certona_clus"};u.extend=[function(a,b){try{if(1){if(b['qp.pwa']&&b['qp.pwa']=='true'){b['certona_domain']='oldnavy.gap.com';}
if(b['ut.env']=='qa'||b['ut.env']=='dev'){b['certona_domain']=b['certona_staging_domain'];}
if(b['ut.env']=='qa'||b['ut.env']=='dev'){if(typeof gap!=='undefined'&&typeof gap.buildVersion!=='undefined'&&gap.buildVersion['sitewide-app']!=='undefined'){b['is_mfe']='true';}}
if((b['page_type']!=='Information')&&(b['page_type']!=='CustomerService')&&(b['page_type']!=='Info')){if(b['is_mfe']=='true'||(b['page_type']==='Division'&&b['is_react']!==undefined)||(b['page_type']==='OutOfStockNoResults'&&b['is_react']!==undefined)){if(b['ut.profile']=='usgap'){b['certona_domain']='www.gap.com';}else if(b['ut.profile']=='cagap'){b['certona_domain']='www.gapcanada.ca';}else if(b['ut.profile']=='usfactory'){b['certona_domain']='www.gapfactory.com';}
if(b['ut.profile']=='usgap'||b['ut.profile']=='cagap'||b['ut.profile']=='usfactory'){if(b['ut.env']=='qa'||b['ut.env']=='dev'){b['certona_domain']=b['certona_domain']+'_staging';}}}}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['page_type'];if(typeof d=='undefined')return;c=[{'Home':'HOME'},{'Division':'DIVISION'},{'Category':'CATEGORY'},{'Search':'SEARCH'},{'Product':'PRODUCT'},{'Profile':'ACCOUNT'},{'ShoppingBag':'CART'},{'OrderConfirmation':'PURCHASE'},{'Information':'CUSTOMERLANDING'},{'OutOfStockNoResults':'OUTOFSTOCK'},{'StoreLocator':'STORELOCATOR'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['certona_pagetype']=c[e][f];m=true};};if(m)break};if(!m)b['certona_pagetype']='';}},function(a,b){try{if(1){if(b.page_type){if(b.page_type=="Division"&&b.business_unit_id==35){b.certona_pagetype="CATEGORYLANDING";}
if(b.page_type=="Search"&&b.internal_search_results==0){b.certona_pagetype="NOSEARCH";}
if(b.page_type=="Profile"&&b.page_name&&b.page_name.indexOf("Order History")>-1){b.certona_pagetype="ORDERHISTORY";}
if(b.page_type=="Profile"&&b.page_name&&b.page_name.indexOf(":Favorites")>-1){b.certona_pagetype="WISHLIST";}
if(b.page_type=="InlineBagAdd"&&b.is_react){b.certona_pagetype="ADDTOCART";}}
if(b['dom.url']&&b['dom.url'].indexOf("OutOfStockNoResults.do")>-1){b.certona_pagetype="OUTOFSTOCK";}
if(b.business_unit_id==1&&b["qp.cid"]=="1109097"){b.certona_pagetype="DENIM";}
if(b.business_unit_id==10&&b["qp.cid"]=="1131843"){b.certona_pagetype="PRODUCTFINDER";}
if(b.business_unit_id==10&&b["qp.cid"]=="1127248"){b.certona_pagetype="QUIZENTRY";}
if(b.tealium_profile=="usgap"&&b.page_type=="CustomerService"){b.certona_pagetype="CUSTOMERSERVICE";}
if((b.business_unit_id==1||b.business_unit_id==7)&&b["qp.cid"]=="1135579"){b.certona_pagetype="CUSTOMERLANDING2";}
if((b.business_unit_id==3||b.business_unit_id==9)&&b["qp.cid"]=="56526"){b.certona_pagetype="CUSTOMERLANDING2";}
if((b.business_unit_id==2)&&b["qp.cid"]=="1066225"){b.certona_pagetype="CUSTOMERLANDING2";}
if((b.business_unit_id==34)&&b["qp.cid"]=="1139739"){b.certona_pagetype="CUSTOMERLANDING2";}
if((b.business_unit_id==9)&&b["qp.cid"]=="1104520"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==1)&&b["qp.cid"]=="1139737"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==10)&&b["qp.cid"]=="82634"){b.certona_pagetype="ACCOUNT2";}
if((b.business_unit_id==1)&&b["qp.cid"]=="1141805"){b.certona_pagetype="CUSTOMERLANDING";}
if((b.business_unit_id==1)&&b["qp.cid"]=="1105989"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==34)&&b["qp.cid"]=="1141806"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==10)&&b["qp.cid"]=="1141763"){b.certona_pagetype="CUSTOMERLANDING2";}
if(((b.business_unit_id==3)&&b["qp.cid"]=="1155826")||((b.business_unit_id==1)&&b["qp.cid"]=="1157114")){b.certona_pagetype="CUSTOMERLANDING5";}
if(((b.business_unit_id==2)&&b["qp.cid"]=="1157923")||((b.business_unit_id==3)&&b["qp.cid"]=="1157924")||((b.business_unit_id==1)&&b["qp.cid"]=="1157925")||((b.business_unit_id==10)&&b["qp.cid"]=="1157926")){b.certona_pagetype="CROSSBRANDLANDING";}
if((b.business_unit_id==1&&b['qp.cid']=='1165243')||(b.business_unit_id==2&&b['qp.cid']=='1165238')||(b.business_unit_id==3&&b['qp.cid']=='1165246')||(b.business_unit_id==10&&b['qp.cid']=='1165237')){b.certona_pagetype='CROSSBRANDTWO';}
if((b.business_unit_id==1)&&b["qp.cid"]=="1158915"){b.certona_pagetype="CUSTOMERLANDING6";}
if((b.business_unit_id==3)&&b["qp.cid"]=="1156830"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==2)&&b["qp.cid"]=="1159919"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==1)&&b["qp.cid"]=="1161798"){b.certona_pagetype="CUSTOMERSERVICE2";}
if((b.business_unit_id==25)&&b["qp.cid"]=="1112405"){b.certona_pagetype="CUSTOMERLANDING";}
if((b.business_unit_id==35)&&b["qp.cid"]=="1164956"){b.certona_pagetype="CUSTOMERLANDING2";}
if((b.business_unit_id==2)&&b["qp.cid"]=="1167227"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==2)&&b["qp.cid"]=="1167228"){b.certona_pagetype="CUSTOMERLANDING7";}
if((b.business_unit_id==35)&&b["qp.cid"]=="1167229"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==35)&&b["qp.cid"]=="1167230"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==3||b.business_unit_id==9)&&b["qp.cid"]=="1166554"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==3)&&b["qp.cid"]=="1166555"){b.certona_pagetype="CUSTOMERLANDING7";}
if((b.business_unit_id==9)&&b["qp.cid"]=="1166555"){b.certona_pagetype="CUSTOMERLANDING5";}
if((b.business_unit_id==10)&&b["qp.cid"]=="1168471"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==2)&&b["qp.cid"]=="1173825"){b.certona_pagetype="CUSTOMERLANDING8";}
if((b.business_unit_id==3)&&b["qp.cid"]=="1176721"){b.certona_pagetype="CUSTOMERLANDING8";}
if((b.business_unit_id==9)&&b["qp.cid"]=="1176721"){b.certona_pagetype="CUSTOMERLANDING6";}
if((b.business_unit_id==1)&&b["qp.cid"]=="1177736"){b.certona_pagetype="MARKETINGLANDING";}
if((b.business_unit_id==34)&&b["qp.cid"]=="1178485"){b.certona_pagetype="CUSTOMERLANDING4";}
if((b.business_unit_id==10)&&b["qp.cid"]=="1058735"){b.certona_pagetype="CUSTOMERLANDING3";}
if((b.business_unit_id==10)&&b["qp.cid"]=="1178088"){b.certona_pagetype="CUSTOMERLANDING7";}
if((b.business_unit_id==35)&&b["qp.cid"]=="1179671"){b.certona_pagetype="CUSTOMERLANDING5";}
if((b.business_unit_id==9)&&b["qp.cid"]=="1156830"){b.certona_pagetype="PROFILE2";}
if((b.business_unit_id==39)&&b["qp.cid"]=="1137353"){b.certona_pagetype="CUSTOMERLANDING";}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['certona_pagetype'];if(typeof d=='undefined')return;c=[{'HOME':'true'},{'PRODUCT':'true'},{'CART':'true'},{'CUSTOMERLANDING':'true'},{'CATEGORYLANDING':'true'},{'CATEGORY':'true'},{'DIVISION':'true'},{'DENIM':'true'},{'OUTOFSTOCK':'true'},{'ADDTOCART':'true'},{'STORELOCATOR':'true'},{'CUSTOMERSERVICE':'true'},{'NOSEARCH':'true'},{'CUSTOMERLANDING2':'true'},{'CUSTOMERLANDING3':'true'},{'ACCOUNT2':'true'},{'CUSTOMERLANDING4':'true'},{'CUSTOMERLANDING5':'true'},{'CUSTOMERLANDING6':'true'},{'CUSTOMERLANDING7':'true'},{'CUSTOMERLANDING8':'true'},{'CUSTOMERLANDING9':'true'},{'CUSTOMERLANDING10':'true'},{'CROSSBRANDLANDING':'true'},{'CUSTOMERSERVICE2':'true'},{'CROSSBRANDTWO':'true'},{'MARKETINGLANDING':'true'},{'PROFILE2':'true'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['certona_recs']=c[e][f];m=true};};if(m)break};if(!m)b['certona_recs']='false';}},function(a,b){try{if(1){b.certona_girls_at_flag='';b.badge_list=[];b.optly_experiment_list=[];var tealLocal=JSON.parse(window.localStorage.getItem("tealium_va"));var tealBadges={};var tealProperties={};if(tealLocal&&typeof tealLocal=='object'){tealBadges=tealLocal.badges;tealProperties=tealLocal.properties;}
if(b.ab_string){var ab_string=b.ab_string
if(ab_string.indexOf("Certona_Control_Segment")>-1){b.optly_experiment_list.push("Control");}else if(ab_string.indexOf("Certona_Variation1_Segment")>-1){b.optly_experiment_list.push("Variation1");}else if(ab_string.indexOf("Certona_Variation2_Segment")>-1){b.optly_experiment_list.push("Variation2");}else if(ab_string.indexOf("Certona_Variation3_Segment")>-1){b.optly_experiment_list.push("Variation3");}else if(ab_string.indexOf("Certona_Variation4_Segment")>-1){b.optly_experiment_list.push("Variation4");}else if(ab_string.indexOf("Certona_Variation5_Segment")>-1){b.optly_experiment_list.push("Variation5");}}
var check_badges=function(object,id){return object.hasOwnProperty(id);}
if(b.business_unit_id&&b.business_unit_id==10){var girl_badges=function(){var certona_girl_badge_array=["228157","228767","41028","50780","138201"];var badge_exists=false;certona_girl_badge_array.forEach(function(item,index){badge_exists=check_badges(tealBadges,item);if(badge_exists){b.certona_girls_at_flag='GIRL';}});}
girl_badges();}
var certona_badges=function(){var certona_badge_array=["56891","73473","134305","31876","114583","75004","41022","41024","39133","138201","41034","41036","222963","222965","222967","222969","222971","223367","223369","51450","138203","50444","48444","137825","50442","613131","613133","343243","644965","671444","671446","671448","671450","671452","671454","671456","671458","671460","671462","671464","671466","671468","671470","671472","671474","671476","671478","719399","719401","719403"];var badge_exists=false;certona_badge_array.forEach(function(item,index){badge_exists=check_badges(tealBadges,item);if(badge_exists){b.badge_list.push(item);}});}
certona_badges();}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof(window.certonaRecommendations)=="undefined"){window.certonaRecommendations=function(response){}}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"base_url":"//edge1.certona.net/cd/##utag_cid##/##utag_domain##/scripts/resonance.js","cid":"","domain":"","event":"","page_type":"NONE","filter":{},"product_id":[],"product_category":[],"product_quantity":[],"product_unit_price":[],};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.transactionid||u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.total||u.data.order_subtotal||b._csubtotal||"";u.data.customer_id=u.data.customerid||u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){if(typeof u.data.itemid==="undefined"){if(b._csku!=="undefined"&&b._csku.length>0){u.data.product_id=b._csku.slice(0);}else if(b['qp.pid']!==undefined){var wcdPid=b['qp.pid'].substr(0,9);u.data.product_id=[wcdPid];}else{u.data.product_id=b._cprod.slice(0);}}else{u.data.product_id=u.data.itemid.slice(0);}}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){if(typeof u.data.qty==="undefined"){u.data.product_quantity=b._cquan.slice(0);}else{u.data.product_quantity=u.data.qty.slice(0);}}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){if(typeof u.data.price==="undefined"){u.data.product_unit_price=b._cprice.slice(0);}else{u.data.product_unit_price=u.data.price.slice(0);}}
if(u.data.site){certona.site=u.data.site;}
certona.filter={};certona.purchased_sku={};certona.segments=[];if(u.data.divpref){certona.filter.gender=u.data.divpref;}
if(u.data.catpref){certona.filter.category=u.data.catpref;}
if(u.data.newstorenumber){certona.filter.storenumber=u.data.newstorenumber;}
if(u.data.newstorename){certona.filter.storename=u.data.newstorename;}
if(u.data.girls_flag=="GIRL"){if(certona.filter.gender){certona.filter.gender="GIRL;"+certona.filter.gender;}else{certona.filter.gender="GIRL";}}
if(u.data.badge_list){certona.badges=u.data.badge_list;}
if(u.data.segments){certona.segments=u.data.segments;}
if(u.data.certona_spus){certona.filter.SPUS=u.data.certona_spus;}
if(u.data.certona_clus){certona.filter.CLUS=u.data.certona_clus;}
if(u.data.at_purchased_sku){certona.purchased_sku.at=u.data.at_purchased_sku;}
if(u.data.br_purchased_sku){certona.purchased_sku.br=u.data.br_purchased_sku;}
if(u.data.gap_purchased_sku){certona.purchased_sku.gap=u.data.gap_purchased_sku;}
if(u.data.on_purchased_sku){certona.purchased_sku.on=u.data.on_purchased_sku;}
if(u.data.page_type==="OTHER"){utag.DB("Warning: You've selected other as a page type and haven't overridden it in mapping.");}
if(u.data.page_type!=="NONE"){certona.pagetype=u.data.page_type;}
if(u.data.customer_id){certona.customerid=u.data.customer_id;}
if(u.data.page_type==="PURCHASE"||u.data.order_id){certona.pagetype="PURCHASE";certona.itemid=u.data.product_id.join(";");certona.qty=u.data.product_quantity.join(";");certona.brand=u.data.brand.join(";");certona.transactionid=u.data.order_id;var subtotal=0;for(var i=0;i<u.data.product_unit_price.length;i++){u.data.product_unit_price[i]=(parseFloat(u.data.product_unit_price[i])*parseFloat(u.data.product_quantity[i])).toFixed(2);subtotal+=parseFloat(u.data.product_unit_price[i]);}
certona.price=u.data.product_unit_price.join(";");certona.total=u.data.order_subtotal||subtotal;}else if(u.data.page_type==="PRODUCT"||u.data.page_type==="OUTOFSTOCK"){certona.itemid=u.data.product_id[0];}else if(u.data.page_type==="CART"){certona.itemid=u.data.product_id.join(";");certona.brand=u.data.brand.join(";");}else if(u.data.page_type==="CATEGORYLANDING"||u.data.page_type==="CATEGORY"||u.data.page_type==="DIVISION"){certona.categoryid=u.data.product_category[0]||u.data.categoryid||"";certona.divisionid=u.data.divisionid||"";certona.subdivisionid=u.data.subdivisionid||"";}
if(u.data.recommendations==="true"){certona.recommendations=true;}else{certona.recommendations=false;}
if(u.data.emailcustomerid){certona.emailcustomerid=u.data.emailcustomerid;}else{certona.emailcustomerid="";}
if(u.data.language_code){certona.languagecode=u.data.language_code;}
u.data.base_url=u.data.base_url.replace("##utag_cid##",u.data.cid);u.data.base_url=u.data.base_url.replace("##utag_domain##",u.data.domain);u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":'utag_329'});}};utag.o[loader].loader.LOAD(id);}("329","gapinc.cagap"));}catch(error){utag.DB(error);}
