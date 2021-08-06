//tealium universal tag - utag.86172 ut4.0.202007222033, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim='&';u.kvp_delim='=';u.o={};u.sale_parts='';u.merchant="5369";u.base_url="//www.dwin1.com/"+u.merchant+".js";u.map={"aw_hotel_and_checkout":"p1","_awin_iata":"commission_group"};u.extend=[function(a,b){try{if((b['page_type']=='purchase_confirmation'&&typeof b['number_of_rooms']!='undefined'&&b['number_of_rooms']!='')){b['_cquan']=b['number_of_rooms']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){b['_ccurrency']='USD'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['sc_channel']!='undefined'&&typeof b['sc_channel']!='undefined'&&b['sc_channel']!='')){try{b['sc_channel']=utag.data.sc_channel.toLowerCase().replace(/[^a-z]/g,"");}catch(e){}}}catch(e){utag.DB(e);}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'&&b[d]!=''){e=u.map[d].split(',');for(f=0;f<e.length;f++){if(e[f]=='commission_group'){u.sale_parts=b[d]}else{u.o[e[f]]=b[d];}}}}
if(u.o.orderRef||b._corder){window.AWIN={};window.AWIN.Tracking={};window.AWIN.Tracking.Sale=u.o;u.o.amount=(u.o.amount?u.o.amount:b._csubtotal);u.o.orderRef=(u.o.orderRef?u.o.orderRef:b._corder);u.o.currency=(u.o.currency?u.o.currency:b._ccurrency);u.o.voucher=(u.o.voucher?u.o.voucher:b._cpromo);u.o.test=(u.o.test?"1":"0");if(u.sale_parts==''){u.sale_parts='DEFAULT';}
if(typeof u.o.parts=="undefined"){u.o.parts=u.sale_parts+':'+u.o.amount;}
e='<form style="display:none;" name="aw_basket_form">\n';e+='<textarea wrap="physical" id="aw_basket">\n';for(f=0;f<b._cprod.length;f++){e+='AW:P|'
+u.merchant+'|'
+u.o.orderRef+'|'
+b._cprod[f]+'|'
+b._cprodname[f]+'|'
+b._cprice[f]+'|'
+b._cquan[f]+'|'
+b._csku[f]+'|'
+u.sale_parts+'|'
+b._ccat[f]+'\n';}
e+='</textarea>\n';e+='</form>\n';d=document.createElement("div");d.innerHTML=e;document.getElementsByTagName("body")[0].appendChild(d);}
u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url+c.join(u.qsp_delim);u.s.parentNode.insertBefore(u.scr,u.s);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('86172','hyatt.main');}catch(e){}
