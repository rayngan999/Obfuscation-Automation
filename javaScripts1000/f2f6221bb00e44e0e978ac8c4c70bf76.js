/*! SPORT */
!function(){zUtils=window.zUtils||{},zUtils.polls=function(){var objs=[],getByEle=function(a){var b=null;return objs.forEach(function(c){c.ele[0]===a[0]&&(b=c)}),b},formatNumber=function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},updateTotal=function(a,b){b.total=a,$(b.ele.data("poll-total-sel"),b.ele).text(b.ele.data("poll-total-prefix")+formatNumber(a))},updateItem=function(a,b,c){c.options[a.data("poll-item-id")]=b,$(c.ele.data("poll-items"),c.ele).each(function(){var a=c.total?Math.round(c.options[$(this).data("poll-item-id")]/c.total*100):0;$(c.ele.data("poll-item-percent-sel"),$(this)).text(a+c.ele.data("poll-item-percent-sufix")),$(c.ele.data("poll-item-bar-sel"),$(this)).width(a+"%")}),$(c.ele.data("poll-item-votes-sel"),a).text(b+c.ele.data("poll-item-votes-sufix"))},canVotePoll=function(idPoll){var canVote=!0,encObj=null,encPollCookie=zUtils.zCookies.getCookie("user.poll");if(encPollCookie.length>2){'"'==encPollCookie.charAt(0)&&(encPollCookie=encPollCookie.substring(1,encPollCookie.length-1));var bf=new Blowfish("abcdefg"),pollCookie=bf.trimZeros(bf.decrypt(bf.base64Decode(encPollCookie)));pollCookie=pollCookie.match(/(\[[^\]]*\])/)[1];for(var pollCookieArrObj=eval(pollCookie),i=0,enc=!1;i<pollCookieArrObj.length&&!enc;)encObj=pollCookieArrObj[i],encObj.id==idPoll&&(enc=!0),i++;if(enc){var encDate=encObj.voteTime;encDate=encDate.substring(0,4)+encDate.substring(5,7)+encDate.substring(8,10)+encDate.substring(11,13)+encDate.substring(14,16)+encDate.substring(17,19);var fecha=new Date,mes=(fecha.getMonth()+1).toString().length>1?fecha.getMonth()+1:"0"+(fecha.getMonth()+1).toString(),dia=fecha.getDate().toString().length>1?fecha.getDate():"0"+fecha.getDate(),hora=fecha.getHours().toString().length>1?fecha.getHours():"0"+fecha.getHours(),minutos=fecha.getMinutes().toString().length>1?fecha.getMinutes():"0"+fecha.getMinutes(),segundos=fecha.getSeconds().toString().length>1?fecha.getSeconds():"0"+fecha.getSeconds(),fechActual=fecha.getFullYear()+mes+dia+hora+minutos+segundos;fechActual<encDate&&(canVote=!1)}}return canVote},votedView=function(a){$(a.ele.data("poll-vote-sel"),a.ele).hide(),$(a.ele.data("poll-items")+" input",a.ele).each(function(){$(this).prop("disabled",!0)})},load=function(){$('[data-actas="poll"]').each(function(){var a={ele:$(this),total:0,options:{}};getByEle(a.ele)||(objs.push(a),canVotePoll(parseInt(a.ele.data("poll-id")))||votedView(a),$.ajax({type:"GET",url:zUtils.zProperties.pollGetPath+"?POLLID="+a.ele.data("poll-id")+"&hiTarget=/poll-info.jsp&LANGUAGE=es&NOCACHE=false",success:function(b){updateTotal(b.totalVotes,a),$(a.ele.data("poll-items"),a.ele).each(function(){var c=$(this),d=!1;b.options.forEach(function(b){d||b.id===parseInt(c.data("poll-item-id"))&&(d=!0,updateItem(c,b.votes,a))})})},error:function(){}}),$(a.ele.data("poll-vote-sel"),a.ele).click(function(b){var c,d=null;b.preventDefault(),$(a.ele.data("poll-items"),a.ele).each(function(){d||$(":checked",$(this)).length&&(d=$(this))}),d&&(votedView(a),c=d.data("poll-item-id"),$.ajax({type:"POST",url:zUtils.zProperties.pollVotePath+"?POLLID="+a.ele.data("poll-id")+"&LANGUAGE=es&POLLOPTIONID="+c+"&POLLSITE=P_SPORT",dataType:"xml",success:function(b){$(b)&&$(b).find("boolean")&&"true"===$(b).find("boolean").text()&&(updateTotal(a.total+1,a),updateItem(d,a.options[c]+1,a))}}))}))})};return{init:function(){load()}}}()}();