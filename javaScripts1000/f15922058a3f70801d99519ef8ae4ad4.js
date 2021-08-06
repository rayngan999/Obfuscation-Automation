
(function (w) {
    /*tagconfig*/
    var a = 

{"pauseButton":true,"maxWidth":400,"playerType":1,"autoContinue":true,"errorLimit":5,"maxImp":9999,"sticky":{"position":"Bottom-Left","size":1,"right":1,"left":10,"bottom":10},"midrolltime":10,"logo":true,"closeButtonStyle":{"position":"Default"},"tagId":"5f7c5bb9512d1c64af1d2c2a","maxRun":9999,"templateType":"1","width":100,"height":0,"channelId":"5f7c5b89222b7422aa4c661f","position":"aniplayer_AV5f7c5bb9512d1c64af1d2c2a","publisherId":"5f280c598c04cd5e910ff0a1","customLogo":{"text":"Ads by","link":"https:\/\/cdn.snigelweb.com\/resources\/img\/logo\/logo-snigel-shell-02.png","clickthrough":"https:\/\/snigel.com\/?utm_source=snigel-pub","height":23,"width":23},"midrolldelay":10,"startdelay":10,"templateId":"5f7c5b7873171862190eca57","loop":true,"scriptId":"AV5f7c5bb9512d1c64af1d2c2a","posDfp1x1":false,"posSelector":"body","vastRetry":5,"timelineMode":"bottom","closeButton":true,"autoPlay":true,"soundButton":true}
var b =
{}

    /*tagconfig*/
    var st = {
        target: function () {
                var ua = navigator.userAgent || navigator.vendor || window.opera;
				var uav = navigator.appVersion ? navigator.appVersion.toLowerCase() : '';
				var op = 2;
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) {
					op = 1;
                } else {
 					if (/web0s|webos|tizen/i.test(uav)) {
						op = 4;
                    }
                }
				for (var i = 0; i < b.length ;i++) {
					var b1 = b[i];
					if (b1.t && b1.t.p && b1.t.p == op && b1.a) {
						a = b1.a;
						break;
					}
				}
        },
        track: function(e, m) {
                if (!this.trackUrl) {
                        this.trackUrl = "https://" + (a.trackDomain || "track1.aniview.com") + "/track?pid=" + a.publisherId + "&cid=" + a.channelId + "&cb=" + Date.now() + "&r=" + location.host + "&stagid=" + (a.tagId || "") + "&stplid=" + (a.templateId || "") + "&e=";
                  }
                  m = m ? m : "";
                  (new Image()).src = this.trackUrl + e + m;
                  
        },
        unique: function() {
            if (!this.win.aniplayerPos)
                this.win.aniplayerPos = {};
            this.win.aniplayerPos[a.position] = true;
            return true;
        },
        findWin: function() {
           try {
                if ((!a.posDfp1x1 && !a.posClass && !a.posSelector && !a.posId && !a.posTag) || (w === top) || !w.frameElement) {
                    this.doc = document;
                    this.win = w;
                } else if (a.posDfp1x1 && w.frameElement) {
                    this.win = parent;
                    this.doc = parent.document;
                } else {
                    this.win = top;
                    this.doc = top.document;
                }
            } catch (f) {
                this.doc = document;
                this.win = w;
            }
        },
        postCreate: function() {
            
        },
        retry: function() {
           if (this.retryCnt++ > this.timeout) {
                this.track("AV_M3", "&prbdres=nopos&sn=" + encodeURIComponent(location.href).slice(0, 400));
                return;
            }
            var that = this;
            setTimeout(function() {
                that.position();
            }, 250);
        },
        create: function(p, n) {
            var d1 = document.createElement("div");
            if(a.scriptId) {
		        d1.className = a.scriptId;
		    }
            d1.style.width = "100%";
            d1.style.margin = "0 auto";
            d1.style.maxWidth = "" + a.maxWidth + "px";
            var d2 = document.createElement("div");
            d2.id = "aniBox";
            d2.style.height = "1px";
            var d3 = document.createElement("div");
            d3.id = "" + a.position;
            if (p === this.doc || p === this.doc.head)
                p = this.doc.body;
            if (n) {
                p.insertBefore(d1, n);
            } else {
                p.appendChild(d1);
            }
            a.refDiv = p;
            d1.appendChild(d2);
            d2.appendChild(d3);
            this.postCreate(d1);
        },
        position: function() {
            var p = this.doc;
            var isScp = false;
            if (a.posSelector) {
                try {
                    var q = this.doc.querySelectorAll(a.posSelector);
                    var l = 0;
                    if(a.posCounter > 0) {
                        l = a.posCounter - 1;
                    }
                    p = q[l];
                } catch (e) {
                    this.track("AV_M3", "&prbdres=badpos&sn=" + encodeURIComponent(location.href).slice(0, 400));
                    return;
                }
                if (!p) {
                    this.retry();
                    return;
                }
            }
            if (a.posId) {
                p = this.doc.getElementById(a.posId);
                if (!p) {
                    this.retry();
                    return;
                }
            }
            if (a.posTag) {
                var c = a.posTag.split("#");
                if (c && c.length == 2) {
                    var e = p.getElementsByTagName(c[0]);
                    if (e.length == 0) {
                        this.retry();
                        return;
                    }
                    p = e[Math.min(c[1] - 1, e.length - 1)];
                }
            }
            if (a.posClass) {
                var c = a.posClass.split("#");
                var e = 1;
                if (c.length == 2) {
                    e = c[1];
                }
                var f = p.getElementsByClassName(c[0]);
                if (f.length > 0) {
                    p = f[Math.min(e - 1, f.length - 1)];
                }
                if (!p) {
                    this.retry();
                    return;
                }
            }
            if (a.posDfp1x1 && window.frameElement) {
                n = window.frameElement.parentNode.parentNode;
                p = n.parentNode;
                if ((frameElement.clientHeight > 5 || document.body.clientHeight > 5) && !a.nohideIframe) {
                    frameElement.style.height = "0px";
                }
                if (a.posType == "after") {
                    n = n.nextElementSibling;
                }
            }
            var n;
            if (p === this.doc) {
                n = this.doc.getElementById(a.scriptId);
                if (n) {
                    n.id += "-used";
                    p = n.parentNode;
                }
            }
            if (p === this.doc.head) {
                n = null;
                p = this.doc;
            }
            if (a.posType && a.posType !== "in" && !n) {
                if (a.posType === "after" && p.nextElementSibling) {
                    p = p.nextElementSibling;
                }
                n = p;
                p = n.parentNode;
            }
            if (p) {
                if (!p.av_setpos) {
                    p.av_setpos = {};
                }
                if (!p.av_setpos[a.position]) {
                    p.av_setpos[a.position] = true;
                    a.position += "-" + Date.now();
                    this.create(p, n);
                    this.load();
                } else {
                    this.track("AV_M3", "&prbdres=duppos&sn=" + encodeURIComponent(location.href).slice(0, 400));
                }
            }
        },
        load: function() {
            var that = this;
            var scp = this.doc.createElement("script");
            scp.src = (a.baseJsUrl || "https://player.aniview.com/script/6.1/") + "player.js";
            scp.onload = function() {
                that.start();
            };
            scp.async = true;
            this.doc.body.appendChild(scp)
        },
        postStart: function(p) {
            
        },
        getAttr: function() {
            if (a.scriptId) {
                var s = document.getElementById(a.scriptId) || document.getElementById(a.scriptId + "-used");
                if (s) {
                    for (var i = 0, t = s.attributes; i < s.attributes.length; i++) {
                            if (t[i].nodeName && t[i].nodeName.indexOf("data-") == 0) {
                                var n = t[i].nodeName.replace(/^data-/, "").replace(/[-_]+?(\w)/g, function (_, letter) {
                                return letter.toUpperCase();
                            }).split(".");
                            var lastProp = n.pop();
                            try {
                                var innerConfig = n.reduce(function (a, prop) {
                                    return a[prop];
                                }, a);
                                innerConfig[lastProp] = t[i].nodeValue;
                            } catch {
                            }
                        }
                    }
                    if (s.src) {
                        var p = s.src.indexOf("?");
                        if (p > 10) {
                            var r = (s.src.substring(p + 1, s.src.length));
                            a.ref1 = (a.ref1 || "") + "&" + (r || "");
                        }
                    }
                }
            }
        },
        start: function() {
            var b;
            try {
                if (this.win.avPlayer) {
                    b = new this.win.avPlayer(a);
                } else if (window.avPlayer) {
                    b = new avPlayer(a);
                } else {
                    b = new top.avPlayer(a);
                }
            } catch (exp) {
                b = new avPlayer(a);
            }
            this.p = b;
            if (this.pbjs && this.pbjs.preparePlayer) {
                this.pbjs.preparePlayer(b, st);
            }
            if(a.playerApi && typeof this.win[a.playerApi] === "function" ) {
               try{
                this.win[a.playerApi](a, b);
               } catch(ex){}
            }
            if (a.templateType != 0)
                b.startTemplate(this.doc.getElementById(a.position).parentNode);
            b.play(a);
            this.postStart(b);
        },
        preRun: function() {
            
        },
        run: function() {
             if(b && b.length > 0) {
                st.target();
            }
            this.getAttr();
            this.a = a;
            this.preRun();
            this.findWin();
            if (!this.doc.body) {
                this.doc.addEventListener("DOMContentLoaded", function() {
                    st.run();
                });
                if (this.bodyRetry > 0) {
                    setTimeout(function(){
                        st.run()
                    }, 250);
                    this.domRetry--;
                }
                return;
            }
            if (a.configApi && typeof this.win[a.configApi] === "function") {
                try {
                    this.win[a.configApi](a);
                } catch (ex) {
                }
            }
            if (this.unique() && !this.loaded) {
                this.loaded = true;
                this.track("playerLoaded");
                this.retryCnt = 0;
                this.timeout = a.posTimeout || 40;
                this.pbjs = window.aniviewRenderer && window.aniviewRenderer.units && window.aniviewRenderer.units[a.scriptId];
                if (this.pbjs && this.pbjs.prepareConfig)
                    this.pbjs.prepareConfig(a, st);
                this.position();
            }
        },
        domRetry: 20
    };
    st.run();
})(window);
