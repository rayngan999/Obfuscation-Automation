setTimeout(function() {
               if (typeof intervalIDscKlr ==="undefined")
               {
                    intervalIDscKlr = setInterval( load_informerscKlr , 300);
               }
               function load_informerscKlr()
               {
                    var block = document.getElementById("MIXADV_4084");
                    if( block )
                    {
                         var offset = getCoordsBlock4084(block);
                         var screen_height = window.innerHeight;
                         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                         if(offset.top < screen_height + scrollTop )
                         {
                              ban_teaser = take_ban_teaserscKlr();
                              if( ban_teaser === false )
                              {   
                                   return;
                              }
                              var host = window.location.hostname; 
                              var ref = document.referrer;          
                              block.innerHTML = ".";
                              clearInterval(intervalIDscKlr);
                              var script = document.createElement("script"); 
                              script.src = "https://m.mixadvert.com/show/load/?id=4084&id_name=scKlr&teaser_name=KpQYtrE&block_name=cyTjGE&ban_teaser="+ban_teaser+"&r="+Math.random()+"&host="+host+"&ref="+ref; 
                              block.parentNode.appendChild(script);
                         }
                    }
               }

               function getCoordsBlock4084(elem) 
               {
                    var box = elem.getBoundingClientRect();
                    var body = document.body;
                    var docEl = document.documentElement;

                    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

                    var clientTop = docEl.clientTop || body.clientTop || 0;
                    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  
                    var top = box.top + scrollTop - clientTop;
                    var left = box.left + scrollLeft - clientLeft;

                    return { top: top, left: left };
               }}, 0)
          function take_ban_teaserscKlr()
          {
               var ban_teaser="";
               informer = document.getElementsByClassName("MIXADVERT_NET");  
               for(var i=0; i < informer.length; i++) 
               {          
                    if( ( informer[i].id != 4084 ) && ( informer[i].innerHTML == "." ) )
                    {
                         return false;
                    }
                    var link = informer[i].getElementsByTagName("img");
                    for(var j=0; j < link.length; j++)
                    {   
                              prev_link = link[j].name;
                              teaser = getUrlVarsscKlr(prev_link);
                              if( teaser != "" && teaser != "." )
                              {
                                   if( ban_teaser =="")   
                                   {                 
                                        ban_teaser = teaser;
                                   } else {
                                        ban_teaser = ban_teaser+","+teaser;
                                   }
                              }
                          
                    }
               } 
               return ban_teaser; 
          }

          function getUrlVarsscKlr(link)
          {   
               var hash;
               var hashes = link.slice(link.indexOf("?") + 1).split("&");
               for(var i = 0; i < hashes.length; i++)
               {
                    hash = hashes[i].split("=");
                    if(hash[0] == "t" ) 
                    {
                         return hash[1];
                    }
               }
               return "";
          }