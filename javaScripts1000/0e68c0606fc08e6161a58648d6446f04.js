//tealium universal tag - utag.72 ut4.0.202102172355, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var _oiqq=_oiqq||[];var _oiq_lifecycle;var oiq_doctitle;try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={"view":1};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"tagtype":"analytics","pcode":"eaza06","pagelifecycle":"9ibm","order_id":"","order_subtotal":"","order_tax":"","customer_id":"","product_id":[],"product_name":[],"product_sku":[],"product_brand":[],"product_category":[],"product_quantity":[],"product_unit_price":[]};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_tax=u.data.order_tax||b._ctax||"0";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
_oiq_lifecycle=u.data.pagelifecycle;_oiqq.push(['oiq_addPageLifecycle',_oiq_lifecycle]);if(u.data.tagtype==="conversion"){var idx=1;var totalQty=0;for(f=0;f<u.data.product_id.length;f++){_oiqq.push(["oiq_addCustomKVP",["title_"+idx,u.data.product_name[f]||""]]);_oiqq.push(["oiq_addCustomKVP",["id_"+idx,u.data.product_id[f]||""]]);_oiqq.push(["oiq_addCustomKVP",["brand_"+idx,u.data.product_brand[f]||""]]);_oiqq.push(["oiq_addCustomKVP",["price_"+idx,parseFloat(u.data.product_unit_price[f]).toFixed(2)]]);_oiqq.push(["oiq_addCustomKVP",["quantity_"+idx,parseInt(u.data.product_quantity[f])]]);totalQty=totalQty+parseInt(u.data.product_quantity[f]);if(u.data.gtin){_oiqq.push(["oiq_addCustomKVP",["gtin_"+idx,u.data.gtin[f]||""]]);}
if(u.data.mpn){_oiqq.push(["oiq_addCustomKVP",["mpn_"+idx,u.data.mpn[f]||""]]);}
if(u.data.product_type){_oiqq.push(["oiq_addCustomKVP",["product_type_"+idx,u.data.product_type[f]||""]]);}
if(u.data.product_category){_oiqq.push(["oiq_addCustomKVP",["google_product_category_"+idx,u.data.product_category[f]||""]]);}
idx++;}
_oiqq.push(["oiq_addCustomKVP",["total_cost_notax",parseFloat(u.data.order_subtotal).toFixed(2)]]);var totalWithTax=(parseFloat(u.data.order_subtotal)+((parseFloat(u.data.order_subtotal)*parseFloat(u.data.order_tax))/100)).toFixed(2);_oiqq.push(["oiq_addCustomKVP",["total_cost_tax",totalWithTax]]);_oiqq.push(["oiq_addCustomKVP",["total_quantity",parseInt(totalQty)]]);if(u.data.cc_type){_oiqq.push(["oiq_addCustomKVP",["cc_type",u.data.cc_type]]);}
if(u.data.order_id){_oiqq.push(["oiq_addCustomKVP",["order_id",u.data.order_id]]);}
if(u.data.customer_type){_oiqq.push(["oiq_addCustomKVP",["customer_type",u.data.customer_type]]);}
if(u.data.customer_value){_oiqq.push(["oiq_addCustomKVP",["customer_value",u.data.customer_value]]);}
if(u.data.customer_id!==""){_oiqq.push(["oiq_addCustomKVP",["customer_id",u.data.customer_id]]);}
if(u.data.cust1){_oiqq.push(["oiq_addCustomKVP",["cust1",u.data.cust1]]);}
if(u.data.cust2){_oiqq.push(["oiq_addCustomKVP",["cust2",u.data.cust2]]);}
if(u.data.cust3){_oiqq.push(["oiq_addCustomKVP",["cust3",u.data.cust3]]);}
if(u.data.cust4){_oiqq.push(["oiq_addCustomKVP",["cust4",u.data.cust4]]);}}
_oiqq.push(['oiq_doTag']);(function(){var s=document.getElementsByTagName("script")[0];var oiq=document.createElement("script");oiq.type="text/javascript";oiq.async=true;oiq.src=document.location.protocol+"//px.owneriq.net/stas/s/"+u.data.pcode+".js";s.parentNode.insertBefore(oiq,s);if(u.data.tagtype==="conversion"||u.data.tagtype==="basic"){oiq_doctitle="Default Conversion - do not edit";if(typeof document!="undefined"&&document){if(document.title!=null&&document.title!=""){oiq_doctitle=document.title;}}
var oiq_conv=document.createElement("script");oiq_conv.type="text/javascript";oiq_conv.async=true;oiq_conv.src=document.location.protocol+"//px.owneriq.net/j?pt="+u.data.pcode+"&s="+_oiq_lifecycle+"&sConvTitle="+oiq_doctitle+"&cnv=true";s.parentNode.insertBefore(oiq_conv,s);}})();}};utag.o[loader].loader.LOAD(id);}("72","aeropostale.aero"));}catch(error){utag.DB(error);}
