/*! SPORT */
function setCookie(a,b,c){for(var d=window.location.hostname,e=d.split(".");e.length>2;)e.shift();var f=e.join("."),g=new Date;g.setTime(g.getTime()+60*c*1e3);var h=a+" = "+escape(b)+"; expires="+g.toGMTString()+"; path=/; domain=."+f;document.cookie=h}function getCookie(a){var b,c,d=null,e=document.cookie.split(";");for(i=0;i<e.length;i++)c=e[i].substr(e[i].indexOf("=")+1),b=e[i].substr(0,e[i].indexOf("=")).replace(/^\s+|\s+$/g,""),b==a&&(d=unescape(c));return d}+function(a){"use strict";!function(){if(window.googletag=googletag||{},googletag.cmd=googletag.cmd||[],"undefined"!=typeof googletag){googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(a){var c=a.slot,d=document.getElementById(c.getSlotElementId());if(null!==d&&(d.style.background="none"),a.size&&1!==a.size[1])if(d&&d.id.includes("mpu")||d&&d.id.includes("sps")){console.log(d.id);var e=a.size;if(null===e)b(0,d);else if(e[1]<=10)setTimeout(function(){b(d.children[0].clientHeight,d)},2e3);else{var f=e[1];b(f,d)}}else(d&&d.id.includes("ldb2")||d&&d.id.includes("btn"))&&setTimeout(function(){console.log(d.id),d.style.height=d.children[0].clientHeight+"px"},2e3)})});var b=function(b,c){b<c.clientHeight&&(c.getBoundingClientRect().top-window.innerHeight>0||"ldb1"==c.id)?(console.log(c.id+" ADVResizeFunction: resize("+c.clientHeight+"=>"+b+")"),c.style.height=b+"px"):a(window).width()>768&&b<c.clientHeight&&(console.log("ADVResizeFunction: resize else desktop("+c.clientHeight+"=>"+b+")"),c.style.height=b+"px")}}}(),a(document).ready(function(){var b='[data-type="selector"]';a(b).bind({click:function(){a(this).toggleClass("open")}});var c='[data-type="menu"]';a(c).bind({click:function(){a('[data-type="nav"]').toggleClass("open"),a(this).toggleClass("cruz")}});var d='[data-type="submenu"]';a(d).bind({click:function(){a('[data-type="subnav"]').toggleClass("open")}});var e='[data-type="logged"]';a(e).bind({click:function(){return a('[data-type="options"]').parent().toggleClass("open"),!1}});var f='[data-type="equipo"]';a(f).bind({click:function(){var b=a(this).attr("data-name");a('[data-type="equipo"]').parent().removeClass("current"),a(this).parent().addClass("current"),a('[data-type="jornada"]').find(".current").removeClass(),a('[data-item="'+b+'"]').parent().addClass("current")}});var g='[data-type="goto"]';a(g).bind({click:function(){var a=jQuery(this).attr("href");jQuery("#items").stop().animate({scrollLeft:jQuery(a).offset().left},1500,"easeOut"),event.preventDefault()}}),a('[data-actas="sticky-bottom"]').each(function(){var b=a(this);googletag.cmd.push(function(){googletag.pubads().addEventListener("slotVisibilityChanged",function(c){"cpm_m"==c.slot.getTargeting("p")[0]&&c.inViewPercentage>50&&setTimeout(function(){a("<a>").addClass("ldb-close").on("click",function(a){a.preventDefault(),b.remove()}).appendTo(b)},1500)})})}),function(){var b=function(b){var c=b.closest(".sp-live"),d=a("a",b).data("filter"),b=null;a(".slidee",c).children().each(function(){a(this).data("target")===d&&(b=a(this))}),b&&zUtils.horizontalScroll.scrollTo(b)};!function(){a(".sp-live .list .item.actual").each(function(){b(a(this))}),a(".sp-live .list .item").click(function(c){var d=a(this).closest(".sp-live"),e=a(".list .item.actual",d);c.preventDefault(),a(this).hasClass("actual")||(b(a(this)),e.removeClass("actual"),a(this).addClass("actual"))})}()}(),function(){a('[data-actas="ign-class"]').each(function(){a("body").addClass(a(this).data("ign-class-name"))})}(),function(){void 0===a("body").data("reload-time")&&zUtils.reload.setReload(660)}(),function(){a(".header-author .hideBio").click(function(){a(this).parent().parent().slideUp()})}(),function(){"#comentarios"===window.location.hash&&(zUtils.disqusComments.scrollAndRender(),window.history.replaceState("",document.title,window.location.pathname+window.location.search))}(),function(){var b=null,c="general",d="individual",e=1,f=function(){var f,g;"general"===c?f=0:b.tipoResultados[c].forEach(function(a,b){a.etapa===e&&(f=b)}),g=b.tipoResultados[c][f][d],a(".results-table").empty();var h=a("<tr>"),i=a("<tbody>");!function(){for(var b=1;g.cabecera["col"+b];){var c=a("<th>"),d=g.cabecera["col"+b];c.html(d),b>3&&c.attr("data-breakpoints","xs"),h.append(c),b++}}(),function(){var b={a:"Ã¡|Ã |Ã£|Ã¢|Ã|Ã|Ã|Ã",e:"Ã©|Ã¨|Ãª|Ã|Ã|Ã",i:"Ã­|Ã¬|Ã®|Ã|Ã|Ã",o:"Ã³|Ã²|Ã´|Ãµ|Ã|Ã|Ã|Ã",u:"Ãº|Ã¹|Ã»|Ã¼|Ã|Ã|Ã|Ã",c:"Ã§|Ã",n:"Ã±|Ã"},c=!1;g.filasDatos.sort(function(a,b){return a.pos-b.pos}),g.filasDatos.forEach(function(d){var e=1,f=a("<tr>");for(c&&f.addClass("odd"),c=!c;g.cabecera["col"+e];){var h=g.cabecera["col"+e],j=a("<td>");if("t. detr&aacute;s"===h)h="tiempoDetras";else{h=a("<span>").html(h).text();for(var k in b)h=h.replace(new RegExp(b[k],"g"),k)}"ciclista"===h?j.append(a("<a>").attr("href","/es/resultados/"+d.ciclistaUrl+"/").html(d[h])):j.html(d[h]),f.append(j),e++}i.append(f)})}(),a(".results-table").append(a("<table>").attr("data-toggle-column","last").append(a("<thead>").append(h)).append(i))};a("body").data("toures-data")&&(a(".cycling .sp-jornadas").hide(),a.ajax({dataType:"text",url:a("body").data("toures-data"),success:function(g){b=a.parseJSON(g),b.tipoResultados.etapas.forEach(function(a){"true"===a.etapaActiva&&(e=a.etapa)}),a("[data-toures-event]").removeClass("select"),a('[data-toures-event="'+e+'"]').addClass("select"),a("[data-toures-type]").click(function(b){b.preventDefault(),c=a(this).data("toures-type"),d="individual",a("[data-toures-filter]").removeClass("selected"),a('[data-toures-filter="individual"]').addClass("selected"),f(),"general"===c?(a(".cycling .sp-jornadas").hide(),a('[data-toures-filter="montana"]').show(),a('[data-toures-filter="sprinter"]').show()):(a(".cycling .sp-jornadas").show(),a('[data-toures-filter="montana"]').hide(),a('[data-toures-filter="sprinter"]').hide(),zUtils.horizontalScroll.scrollTo(a('[data-toures-event="'+e+'"]')))}),a("[data-toures-filter]").click(function(b){b.preventDefault(),d=a(this).data("toures-filter"),b.currentTarget.className.includes("selected")||f()}),a("[data-toures-event]").each(function(){var b=a(this);a("a",b).click(function(a){a.preventDefault(),e=b.data("toures-event"),f()})}),f()}}))}()})}(jQuery),jQuery(document).ready(function(a){a(".nav .nav-item").each(function(){a(this).hasClass("noHover")||window.matchMedia("(max-width: 767px)").matches||a(this).children().length<=1||a(this).hover(function(){a(this).addClass("open")},function(){a(this).removeClass("open")})}),fnTabs(),fnTabsJornadas(),selectItem.init()});var fnTabs=function(){jQuery("ul.tabs li").click(function(){jQuery(this).parent().find(".select").removeClass("select"),jQuery(this).addClass("select"),jQuery(this).parent().parent().parent().find(".item").hide();var a=jQuery(this).find("a").attr("href");return jQuery(a).fadeIn(),!1})},fnTabsJornadas=function(){jQuery("#jornadas .results .slidee li").click(function(){jQuery(this).parent().find(".select").removeClass("select"),jQuery(this).addClass("select"),jQuery('[data-item="jornadas"]').find(".item").hide();var a=jQuery(this).find("a").attr("href");return jQuery(a).fadeIn(),!1})},selectItem={init:function(){for(var a=document.querySelectorAll("[data-select]"),b=0;b<a.length;b++)a[b].addEventListener("click",function(a){nodeOptionContent=this.children;for(var b=0;b<nodeOptionContent.length;b++)nodeOptionContent[b].classList.remove("selected");a.target.className+=" selected"})}};window.onload=function(){openToggle.init(),responsiveMenu.init()};var openToggle={init:function(){for(var a=document.querySelectorAll("[data-open-toggle]"),b=0;b<a.length;b++){var c;a[b].hasAttribute("data-open-event")?(c=a[b].getAttribute("data-open-event").replace(/\s+/g," ").trim().toLowerCase().split(" "),c.includes("mouseover")&&c.push("mouseout")):c=["click"];for(var d in c)a[b].addEventListener(c[d],function(){this.hasAttribute("data-open-parent")&&openToggle.resetOpen(this);var a,b=this.getAttribute("data-open-toggle");if(0!=b.length){a=document.querySelectorAll(b);for(var c=0;c<a.length;c++)a[c].classList.toggle("open");this.classList.toggle("selected")}else this.classList.toggle("open");openToggle.setNavHeight()})}},resetOpen:function(a){for(var b=document.querySelector(a.getAttribute("data-open-parent")),c=b.querySelectorAll(".open"),d=0;d<c.length;d++)c[d]!=a&&c[d].classList.remove("open");for(var e=b.querySelectorAll(".selected"),d=0;d<e.length;d++)e[d].hasAttribute("data-open-toggle")&&e[d].classList.remove("selected")},setNavHeight:function(){if(navObj={nav:document.querySelector(".grid-header > .nav-vertical"),menuLeft:document.querySelector(".grid-header > .nav-vertical > nav"),subMenuOpen:document.querySelectorAll(".grid-header > .nav-vertical .open ~ .more-links")},0!=navObj.subMenuOpen.length){navObj.nav.style.height="auto",navObj.subMenuOpen[0].style.height="auto";var a=window.innerHeight-navObj.nav.getBoundingClientRect().top,b=navObj.menuLeft.offsetHeight;navObj.subMenuOpen.length>0&&navObj.subMenuOpen[0].offsetHeight>navObj.menuLeft.offsetHeight&&(b=navObj.subMenuOpen[0].offsetHeight),b>a&&(b=a,navObj.subMenuOpen[0].style.height="100%"),navObj.nav.style.height=b+"px"}}},responsiveMenu={navContainer:function(){return document.querySelectorAll("[data-responsive-menu]")},stickyInitStatus:document.getElementsByTagName("body")[0].classList.contains("sticky"),stickyRefresh:!1,init:function(){if(0!=this.navContainer().length){var a=[];for(i=0;i<responsiveMenu.navContainer().length;i++){navContainer=responsiveMenu.navContainer()[i],itemsContainer=responsiveMenu.navContainer()[i].querySelectorAll(".itemsContainer")[0],moreNode=Array.prototype.slice.call(itemsContainer.children).filter(function(a){return"LI"==a.tagName&&"more"==a.className}).slice(-1)[0],overflowContainer=moreNode.querySelectorAll(".overflowMenu")[0],currentNode=responsiveMenu.navContainer()[i].querySelectorAll(".current")[0]||null;var b={navContainer:navContainer,itemsContainer:itemsContainer,moreNode:moreNode,overflowContainer:overflowContainer,currentNode:currentNode};b.itemsContainer.style.whiteSpace="nowrap",b.overflowContainer.style.position="absolute",b.navContainer.style.overflow="initial",responsiveMenu.checkDisplayVisibility(b)&&(b.moreNode.firstElementChild.addEventListener("click",function(){this.classList.toggle("open")}),a.push(b),responsiveMenu.generate(b))}window.onresize=function(b){for(i=0;i<a.length;i++)responsiveMenu.checkDisplayVisibility(a[i])&&responsiveMenu.generate(a[i])},window.onscroll=function(b){if(stickyActualStatus=document.getElementsByTagName("body")[0].getAttribute("class").includes("sticky"),responsiveMenu.stickyInitStatus!=stickyActualStatus){for(i=0;i<a.length;i++)responsiveMenu.checkDisplayVisibility(a[i])&&responsiveMenu.generate(a[i]);responsiveMenu.stickyInitStatus=stickyActualStatus}}}},remove:function(a){for(;this.status(a)<-1;){var b=Array.prototype.slice.call(a.itemsContainer.children).filter(function(a){return"LI"==a.tagName&&"more"!=a.className}).slice(-1)[0];a.overflowContainer.prepend(b)}},add:function(a){for(;this.status(a)>0&&a.overflowContainer.children.length>0;){var b=a.overflowContainer.firstElementChild;a.itemsContainer.insertBefore(b,a.moreNode)}this.remove(a)},checkDisplayVisibility:function(a){return a.navContainer.hasAttribute("data-responsive-menu-disableon-xs")&&screen.width<768?(a.moreNode.firstElementChild.style.display="none",a.itemsContainer.style.whiteSpace="normal",this.reset(a),!1):(a.moreNode.firstElementChild.style.display="inline-block",!0)},reset:function(a){for(;a.overflowContainer.children.length>0;)firstItemOverflowContainer=a.overflowContainer.firstElementChild,a.itemsContainer.insertBefore(firstItemOverflowContainer,a.moreNode)},currentItemControl:function(a){var b=a.overflowContainer.querySelectorAll(".current");if(1==b.length&&(0==a.itemsContainer.children.length||"current"!=a.itemsContainer.children[0].classList.value)){var c=b[0].cloneNode(!0);a.itemsContainer.prepend(c),this.generate(a)}},status:function(a){a.overflowContainer.children.length>0?a.moreNode.firstElementChild.style.display="inline-block":a.moreNode.firstElementChild.style.display="none";var b=a.navContainer.offsetWidth,c=a.itemsContainer.offsetWidth;return b-c},generate:function(a){this.status(a)<0?this.remove(a):this.add(a),visibility=!1,a.navContainer.hasAttribute("data-responsive-menu-visibility")&&(visibility=a.navContainer.getAttribute("data-responsive-menu-visibility")),visibility||(a.itemsContainer.style.visibility="visible"),this.currentItemControl(a)}};