(function(){
    if(!window.LDBlogPopularArticlesWithImagePlugin){
        //Utility
        var $ = {
            bind: function(obj, type, fn){
                obj.addEventListener ?
                    obj.addEventListener(type, fn, false) :
                    obj.attachEvent('on'+type, fn);
            },
            get: function(id){
                return document.getElementById(id);
            },
            map: function(array, fn){
                var res = [];
                $.each(array, function(i, v, a){
                    res.push(fn(i, v, a));
                });
                return res;
            },
            filter: function(array, fn){
                var res = [];
                $.each(array, function(i, v, a){
                    if(fn(i, v, a)){res.push(v)};
                });
                return res;
            },
            hasClass: function (el, className) {
                var reg = new RegExp('(^|\\s+)' + className + '($|\\s+)');
                return reg.test(el.className);
            },
            find: function(el, tagName, className) {
                var c = el.getElementsByTagName(tagName || '*');
                if (className) {
                    return $.filter(c, function(_, e){
                        return $.hasClass(e, className);
                    });
                } else {
                    return c;
                }
            },
            each: function(ary, callback) {
                for ( var i = 0, l = ary.length; i < l; i++ ) {
                    callback(i, ary[i], ary);
                }
            },
            // Simple JavaScript Templating
            // original by John Resig http://ejohn.org/ 'JavaScript Micro-Templating'
            //- MIT Licensed.
            tmpl: function(tmplId, data){
                var tmpl = document.getElementById(tmplId).innerHTML;
                var fn =
                    new Function("obj",
                                 "var p=[];" +
                             
                                 // Introduce the data as local variables using with(){}
                                 "with(obj){p.push('" +
                                 
                                 // Convert the template into pure JavaScript
                                 tmpl
                                 .replace(/[\r\t\n]/g, " ")
                                 .split("<%").join("\t")
                                 .replace(/(^|%>)[^\t]*?(\t|$)/g,
                                          function(){
                                              return arguments[0].split("'").join("\\'");
                                          })
                                 .replace(/\t==(.*?)%>/g,"',$1,'")
                                 .replace(/\t=(.*?)%>/g,
                                          "',(($1)+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;'),'")
                                 .split("\t").join("');")
                                 .split("%>").join("p.push('")
                                 + "');}return p.join('');");
                
                // Provide some basic currying to the user
                return fn( data );
            },
            
            jsonp : function (api_url, callback) {
                var uniq_name = "popular_articles_with_image_plugin_" + Math.random().toString(36).slice(2);
                var scr = document.createElement("script");
                scr.type = "text/javascript";
                scr.charset = "utf-8";
                scr.src = api_url + '&callback=' + uniq_name;
                scr.id = uniq_name;
                var obj = this;
                window[uniq_name] = function (json) {
                    callback(json);
                    var u_name = uniq_name;
                    setTimeout(function() {
                        obj.head.removeChild(document.getElementById(u_name));
                        try{
                            window[u_name] = null;
                            delete window[u_name];
                        } catch (e) {};
                    }, 200);
                };
                obj.head = document.getElementsByTagName("head").item(0);
                setTimeout(function(){
                    obj.head.appendChild(scr);
                }, 100);
            },
            
            json: function(method, url, success, fail){
                var obj = this;
                var xhr = this.xhr();
                if (!xhr){
                    return;
                }
                xhr.open(method, url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200 && xhr.responseText) {
                            eval('var json = ' + xhr.responseText);
                            if (success){
                                success(json);
                            }
                        } else if (fail) {
                            fail(xhr);
                        }
                    }
                    
                };
                xhr.send();
            },
            
            xhr: function () {
                if (window.XMLHttpRequest)
                    return new XMLHttpRequest();
                else {
                    var msxml = [
                        "Msxml2.ServerXMLHTTP.6.0", "Msxml2.ServerXMLHTTP.5.0",
                        "Msxml2.ServerXMLHTTP.4.0", "Msxml2.ServerXMLHTTP.3.0",
                        "Msxml2.ServerXMLHTTP", "Microsoft.ServerXMLHTTP",
                        "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0",
                        "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0",
                        "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"
                    ];
                    for (var i = 0; i<msxml.length; i++ ){
                        try {
                            return new ActiveXObject(msxml[i]);
                        }
                        catch(e) { }
                    }
                    return null;
                }
            }
        };

        var defaultImageSize = {
            A: {
                imageWidth: 150,
                imageHeight: 112
            },
            B: {
                imageWidth: 60,
                imageHeight: 60
            },
            C: {
                imageWidth: null,
                imageHeight: null
            }
        };
        
        var defaultColor = {
            foreground: 'white',
            background: 'black'
        };

        LDBlogPopularArticlesWithImagePlugin = function(opts){
            this.id = opts.id;
            this.type = opts.type.match('^(A|B|C)$') ? opts.type : 'A';
            this.asPlugin = opts.asPlugin || false;
            this.offset = opts.offset || 0;
            this.count = Number(opts.count) || 4;
            this.width = Number(opts.width) || null;
            this.retweet = opts.retweet;
            this.comment = opts.comment;
            this.pv = opts.pv;

            this.rangeType = opts.rangeType || 'week0';
            if (this.rangeType == 'custom') {
                this.from = opts.from || null;
                this.range = opts.range || null;
            }
            
            var d = defaultImageSize[this.type];
            this.imageWidth = Number(opts.imageWidth) || d.imageWidth;
            this.imageHeight = Number(opts.imageHeight) || d.imageHeight;
            this.categoryId = opts.categoryId || null;

            var oc = opts.color;
            if (oc && (oc.foreground || oc.background)) {
                this.color = {};
                if (oc.foreground){
                    this.color.foreground = oc.foreground;
                }
                if (oc.background){
                    this.color.background = oc.background;
                }
            } else {
                if (this.type == 'A' || ! this.asPlugin) {
                    this.color = defaultColor;
                } else {
                    this.color = null;
                }
            }
        };
        
        LDBlogPopularArticlesWithImagePlugin.prototype = {
            init: function(){
                var self = this;

                if (self.width) {
                    $.get(self.id).style.width = self.width + 'px';
                }
                
                self.load();
            },
            load: function(){
                var self = this;
                var useImage = (self.type == 'A' || self.type == 'B') ? 1 : 0;
                
                //offset, limit,
                var param = ['limit=' + self.count];
                if(self.offset){
                    param.push('offset=' + self.offset);
                }

                //with_image, image_width, image_height,
                param.push('with_image=' + useImage);
                if (useImage) {
                    param.push('image_width=' + self.imageWidth);
                    param.push('image_height=' + self.imageHeight);
                }

                if (self.categoryId) {
                    param.push('category_id=' + self.categoryId);
                }

                //range_type, from, range
                if(self.rangeType){
                    param.push('rangetype=' + self.rangeType);
                    if (self.rangeType == 'custom') {
                        if (self.from) {
                            param.push('from=' + self.from);
                        }
                        if (self.range) {
                            param.push('range=' + self.range);
                        }
                    }
                }
                
                var url = ld_blog_vars.url +
                    'archives/popular_articles.json?' + param.join('&');
                
                $.json('GET', url,
                       function(json){
                           self.popularArticles = json.articles;
                           self.build();
                       });
            },
            build: function(){
                var self = this;
                var div = $.get(self.id);
                var ul = div.getElementsByTagName('ul')[0];
                var articles = [];
                $.each(self.popularArticles, function(_, article){
                    if (! article.image) {
                        article.image = {};
                    }
                    var html = $.tmpl('tmpl-'+self.id,
                                      {article: article,
                                       retweet: self.retweet,
                                       comment: self.comment,
                                       pv: self.pv
                                      });
                    articles.push(html);
                });
                ul.innerHTML = articles.join('');

                $.each(self.popularArticles, function(_, article){
                    var title = $.get(['title', self.id, article.id].join("-"));
                    var parent = title.parentNode;

                    if(self.type == 'A') {
                        //for IE
                        parent.style.width = self.imageWidth + "px";
                        parent.style.height = self.imageHeight + "px";
                        title.style.width = (self.imageWidth - 4) + "px";

                        if (self.color){
                            try{
                                title.style.color = self.color.foreground;
                                title.style.backgroundColor = self.color.background;
                                // div border
                                parent.style.borderColor = self.color.background;
                            } catch(e) {
                            }
                        }
                    }

                    if (self.pv && self.color) {
                        try{
                            self.pvColor(($.find(parent, 'div', 'pv'))[0]);
                        } catch(e) {
                        }
                    }
                    
                    var img = $.get(['image', self.id, article.id].join("-"));                    
                    if (img) {
                        var parentDiv = img.parentNode;
                        $.bind(img, 'error', function(){
                            parentDiv.className += " noimage";
                            parentDiv.removeChild(img);
                        });
                    }
                });

                if (self.comment) {
                    self.loadCommentCount();
                } else if (!self.pv && self.retweet) {
                    self.loadRetweetCount();
                }
            },
            pvColor: function(pv){
                var self = this;
                pv.style.color = self.color.foreground;
                pv.style.backgroundColor = self.color.background;
            },
            loadRetweetCount: function(){
                var self = this;
                var baseUrl = 'http://urls.api.twitter.com/1/urls/count.json?url='
                $.each(self.popularArticles, function(_, article){
                    var u = encodeURIComponent(article.url);
                    
                    $.jsonp(baseUrl + u, function(json){

                        var c = Number(json.count);
                        var div = $.get(['retweet', self.id, article.id].join("-"));
                        div.innerHTML = c + 'RT';
                        $.bind(div, 'click', function(e){
                            window.open('https://twitter.com/search?q='+u, null);
                            if (e && e.preventDefault) {
                                e.preventDefault();
                            } else {
                                var event = e || window.event;
                                event.returnValue = false;
                            }
                        });

                        if(self.color){
                            try {
                                div.style.color = self.color.foreground;
                                div.style.backgroundColor = self.color.background;
                            } catch(e) {
                            }
                        }
                        div.style.display = 'block';
                    })
                });
            },
            loadCommentCount: function(){
                var self = this;
                var baseUrl = ld_blog_vars.url + 'archives/';

                var writeComment = function(id, count){
                    var div = $.get(id);
                    if (self.color) {
                        try{
                            div.style.color = self.color.foreground;
                            div.style.backgroundColor = self.color.background;
                        } catch(e) {
                        }
                    }
                    div.innerHTML = Number(count) + '\u30B3\u30E1\u30F3\u30C8';
                    div.style.display = 'block';
                };
                
                $.each(self.popularArticles, function(_, article){
                    var url = baseUrl + article.id + '/info.json';
                    var id = ['comment', self.id, article.id].join("-");
                    $.json('GET', url,
                           function(json){
                               writeComment(id, json.comment_count);
                           },
                           function(xhr) {
                               writeComment(id, 0);
                           });
                });
            }
        };
    }
    
})();
