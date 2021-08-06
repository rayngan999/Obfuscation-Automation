/*
	=================================================
	:::::::::::::::::::::::::::::::::::::::::::::::::
	========= COMPONENT UNIQUE ID GENERATOR =========
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
	\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\
*/
!function(){var n,t=[],r="";function u(){}function e(){return n=Math.random().toString(36).substring(2,8),r+n}u.prototype.generate=function(u){u?u+="-":u="",r=u;for(var i=e();t.indexOf(r+n)>=0;)i=e();return t.push(i),i},this.Rexus.cuid=new u}();