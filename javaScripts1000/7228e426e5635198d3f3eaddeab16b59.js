var firefox=navigator.userAgent.toLowerCase().indexOf('firefox')>-1;if(firefox&&createjs)
{createjs.Text.prototype._drawTextLine=function(ctx,text,y)
{if(this.textBaseline==="top")
{var lineHeight=this.lineHeight||this.getMeasuredLineHeight();y+=lineHeight*0.1;}
if(this.outline){ctx.strokeText(text,0,y,this.maxWidth||0xFFFF);}
else{ctx.fillText(text,0,y,this.maxWidth||0xFFFF);}};}