google.maps.__gjsload__('overlay', function(_){var Iy=function(a){this.g=a},eba=function(){},Jy=function(a){a.Uh=a.Uh||new eba;return a.Uh},Ky=function(a){this.Ha=new _.Hi(function(){var b=a.Uh;if(a.getPanes()){if(a.getProjection()){if(!b.jh&&a.onAdd)a.onAdd();b.jh=!0;a.draw()}}else{if(b.jh)if(a.onRemove)a.onRemove();else a.remove();b.jh=!1}},0)},fba=function(a,b){function c(){return _.Ii(e.Ha)}var d=Jy(a),e=d.yg;e||(e=d.yg=new Ky(a));_.B(d.Da||[],_.M.removeListener);var f=d.Ka=d.Ka||new _.Bv,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.jk=d.jk||new Iy(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Da=[_.M.addListener(a,"panes_changed",c),_.M.addListener(g,"zoom_changed",c),_.M.addListener(g,"offset_changed",c),_.M.addListener(b,"projection_changed",c),_.M.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.bg&&(_.P(b,"Ox"),
_.bo("Ox","-p",a))},Oy=function(a){if(a){var b=a.getMap();if(gba(a)!==b&&b&&b instanceof _.bg){var c=b.__gm;c.overlayLayer?a.__gmop=new Ly(b,a,c.overlayLayer):c.i.then(function(d){d=d.mb;var e=new My(b,d);d.lb(e);c.overlayLayer=e;Ny(a);Oy(a)})}}},Ny=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,_.co("Ox","-p",b.g),b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.j.nd(b),b.i&&(b.i=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},gba=function(a){return(a=a.__gmop)?a.map:null},
Ly=function(a,b,c){this.map=a;this.g=b;this.j=c;this.i=!1;_.P(this.map,"Ox");_.bo("Ox","-p",this.g);c.hd(this)},Py=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},My=function(a,b){this.o=a;this.j=b;this.g=null;this.i=[]};_.A(Iy,_.N);
Iy.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Le(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var Qy={};_.A(Ky,_.N);Qy.hd=function(a){if(a){var b=a.getMap();(Jy(a).Vj||null)!==b&&(b&&fba(a,b),Jy(a).Vj=b)}};Qy.nd=function(a){var b=Jy(a),c=b.Ka;c&&c.unbindAll();(c=b.jk)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Da&&_.B(b.Da,_.M.removeListener);b.Da=null;b.yg&&(b.yg.Ha.Ob(),b.yg=null);_.co("Ox","-p",a);delete Jy(a).Vj};var Ry={};Ly.prototype.draw=function(){this.i||(this.i=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};My.prototype.dispose=function(){};My.prototype.Sb=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.yq(this.o,this.j,function(){});k.Sb(a,b,c,d,e,f,g,h);a=_.p(this.i);for(b=a.next();!b.done;b=a.next())b=b.value,Py(b,k),b.draw()};My.prototype.hd=function(a){this.i.push(a);this.g&&Py(a,this.g);this.j.refresh()};My.prototype.nd=function(a){_.Wa(this.i,a)};Ry.hd=Oy;Ry.nd=Ny;_.If("overlay",{Ui:function(a){if(a){(0,Qy.nd)(a);(0,Ry.nd)(a);var b=a.getMap();b&&(b instanceof _.bg?(0,Ry.hd)(a):(0,Qy.hd)(a))}},preventMapHitsFrom:function(a){_.sr(a,{onClick:function(b){return _.Oq(b.event)},Ib:function(b){return _.Lq(b)},Vd:function(b){return _.Mq(b)},Zb:function(b){return _.Mq(b)},Lb:function(b){return _.Nq(b)}}).Ae(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Mf);a.addEventListener("contextmenu",_.Mf);a.addEventListener("dblclick",_.Mf);a.addEventListener("mousedown",
_.Mf);a.addEventListener("mousemove",_.Mf);a.addEventListener("MSPointerDown",_.Mf);a.addEventListener("pointerdown",_.Mf);a.addEventListener("touchstart",_.Mf);a.addEventListener("wheel",_.Mf)}});});