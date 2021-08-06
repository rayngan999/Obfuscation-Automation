(function(){var i,q=[];
function wait(p){
  if (p||document.body){q.forEach(add);clearInterval(i)}
  else if (!i){i = setInterval(wait, 20)}
}
function add(s,p){
  if(p||document.body){(p||document.body).appendChild(s)}
  else{q.push(s);wait()}
}
function addScript(s,o){var t=document.createElement('script');t.async=1;t.src=s;add(Object.assign(t,o||{}))}
function addImg(s,d){var t=document.createElement('img');t.src=s;t.style.cssText='height:0;width:0;border:0;display:none;';t.alt=d;add(t)}
function addIframe(s,d,o,p){var t=document.createElement('iframe');t.src=s;t.style.cssText='height:0;width:0;display:none;visibility:hidden;';t.title=d;add(Object.assign(t,o||{}),p)}

window._oiqq = window._oiqq || [];
_oiqq.push(['oiq_addPageCat','Fitness & Sports']);
_oiqq.push(['oiq_addPageLifecycle', 'inte']);
_oiqq.push(['oiq_doTag']);

addScript('https://px.owneriq.net/stas/s/sholic.js');


addImg("https://sync.crwdcntrl.net/map/c=9193/tp=SHLC/tpid=94e4c6fc-ae6a-41b6-ae16-b39f93453887","crwdcntrl");

(function (w,d) {
  _ml = w._ml || {};
  _ml.nq = w._ml.nq || [];
  _ml.nq.push(['track', '51840']);
  var s, cd, tag; cd = new Date();
  tag = addScript('https://ml314.com/taglw.aspx?' + cd.getDate() + cd.getMonth());
})(window,document);

window._comscore = window._comscore || [];
_comscore.push({ c1: "7", c2: "19376307" ,c3: "1" });
addScript("https://sb.scorecardresearch.com/beacon.js");

(function() {
  var bkInt = setInterval(function(){
    if(document.body){
      clearInterval(bkInt);
      var bkframe = document.createElement('iframe');
      bkframe.style.display = 'none';
      bkframe.src = 'about:blank';
      bkframe.name = '__bkframe';
      bkframe.height = 0;
      bkframe.width = 0;
      bkframe.frameborder = 0;
      bkframe.style.position = 'absolute';
      bkframe.style.clip = 'rect(0px 0px 0px 0px)';
      document.body.appendChild(bkframe);
      var bksrc = document.createElement('script');
      bksrc.src = '//tags.bkrtx.com/js/bk-coretag.js';
      bksrc.onload = function() {
                bk_addPageCtx("sh001", "24816685");
                bk_addPageCtx("sh004", "10813337");
                bk_addPageCtx("sh004", "10813269");
                bk_addPageCtx("sh004", "10813248");
                bk_addPageCtx("sh001", "13594596");
                bk_addPageCtx("sh004", "10813254");
                bk_addPageCtx("sh005", "1112563");
                bk_addPageCtx("sh001", "10930608");
                bk_addPageCtx("sh004", "10813255");
                bk_addPageCtx("sh004", "10813351");
                bk_addPageCtx("sh005", "1112565");
                bk_addPageCtx("sh001", "24816096");
                bk_addPageCtx("sh004", "10813253");
                bk_addPageCtx("sh005", "1111752");
                bk_addPageCtx("sh005", "1112544");
                bk_addPageCtx("sh001", "12644448");
                bk_addPageCtx("sh001", "12644441");
                bk_addPageCtx("sh001", "10930641");
                bk_addPageCtx("sh005", "9326394");
                bk_addPageCtx("sh001", "12644393");
                bk_addPageCtx("sh005", "1112560");
                bk_addPageCtx("sh001", "12644395");
                bk_addPageCtx("sh004", "8762415");
                bk_doJSTag(41110, 1);
      };
      document.body.appendChild(bksrc);
    }
  }, 1);
})();

(function(){try{var s,w=window.top;w.Tynt=w.Tynt||[];
w.Tynt.push('sh!sh');addScript('https://cdn.tynt.com/afsh.js');
}catch(e){}})();


(function (w,d) {
  _ml = w._ml || {};
  _ml.nq = w._ml.nq || [];

  _ml.nq.push(['track', '51840', {
    redirect: 'https://pixel.shareaholic.com/rsync.gif?p=24&u=[PersonID]&s=94e4c6fc-ae6a-41b6-ae16-b39f93453887'
  }]);

  var s, cd, tag; cd = new Date();
  addScript('https://ml314.com/taglw.aspx?' + cd.getDate() + cd.getMonth());
})(window,document);
})();