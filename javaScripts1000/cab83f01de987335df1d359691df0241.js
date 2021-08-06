function Main(){'use strict';this.keyboardEventFromOutsidePress=function(keyEvent)
{kp(keyEvent);}
this.keyboardEventFromOutsideDown=function(keyEvent)
{kd(keyEvent);}
this.keyboardEventFromOutside=function(keyEvent)
{kd(keyEvent);}
var pressedKey,frozenKey,secondActive=false,bracketKey,brackets=0,calculator=[],deg=false,memory=0,resBuffer='0',bigger=false,ln=0,buffStr=[],sav=['secondActive','deg','memory','buffStr','resBuffer'],keyBoard={},secondLayer=[['sin','cos','tan','ln','sinh','cosh','tanh','e<sup>x</sup>'],['sin<sup>-1</sup>','cos<sup>-1</sup>','tan<sup>-1</sup>','log<sub>2</sub>','sinh<sup>-1</sup>','cosh<sup>-1</sup>','tanh<sup>-1</sup>','2<sup>x</sup>']],Calculator=function(){this.stack=[],this.num=0,this.res=0,this.buff=[false,false];this.curr=true;this.rank={'=':0,'+':1,'-':1,'/':2,'*':2,'yx':3,'xây':3,'EE':3};};function kd(e)
{var str=resBuffer.replace(/\s/g,''),strLen=str.split('').length-1;if(e.which===8&&calculator[brackets].curr!==true&&calculator[brackets].curr!=='funk'&&str!=='0'){e.preventDefault();while(buffStr.length&&!keyBoard[buffStr[buffStr.length-1]]){buffStr.pop();}
if(buffStr[buffStr.length-1]==='+/â'){doKey('+/â',true);buffStr.pop();}
else if(resBuffer.match(/\-\d$/)||resBuffer.match(/^\d$/)){buffStr.pop();doKey('C',true);render('0');}else{render(str.substring(0,strLen),true);}
buffStr.pop();if(buffStr[buffStr.length-1]==='.'){render(str.substring(0,strLen-1));buffStr.pop()}}
if(e.which===67){buffStr.pop();doKey('C',true);render('0');}
if(e.which===220){keyDown(false,keyBoard['xy']);}
if(e.which===46){keyDown(false,keyBoard['AC']);}
if(e.which===9){toggleCalc(true);e.preventDefault();}}
function kp(e)
{var key=e.which,keyMatch=(',|.|-|â|/|Ã·|*|Ã|#|+/â|x|x!|E|EE|e|ex| |=|r|xây|R|â|p|Ï|^|yx|\'|yx|"|yx|m|mr|v|mc|b|m+|n|m-|'+
's|sin|c|C|tan|S|sin-1|C|cos-1|T|tan-1|d|Deg|Â°|Deg|l|ln|L|log|\\|1/x|X|2x').split('|'),keyMatchHold=('sin|c|sinh|cosh|tan|tanh|m-|Rand|Deg|Rand|sin-1|sinh-1|cos-1|cosh-1|tan-1|tanh-1|'+
'1|1/x|2|x2|3|x3|xây|â|ln|log2|ex|2x').split('|');if(key===13)key=61;key=String.fromCharCode(key);for(var n=0,m=keyMatch.length;n<m;n=n+2)
{if(key===keyMatch[n])
{key=key.replace(key,keyMatch[n+1]);break}}
if(!keyBoard[key])return false;if((key.match(/-1$|log2$|2x$/)&&!secondActive)||(key.match(/h$|n$|cos$|ex$/)&&secondActive)){keyDown(false,keyBoard['2nd']);doKey('2nd',true);}
keyDown(false,keyBoard[key]);doKey(key,true);}
exportRoot.os_btn.on("mousedown",function(){window.open('https://www.online-stopwatch.com','_blank');});Calculator.prototype.calc=function(key,val){var rank=this.rank;if(key==='%'){this.curr='funk';return(this.stack[0]?this.stack[this.num-1][0]/100*val:val/100)+'';}
key=key.replace('Ã','*').replace('Ã·','/').replace('â','-');if(key!=='='){this.buff[1]=key;}else if(this.buff[0]===false){this.buff[0]=val;}
if(key==='='&&!this.stack[0]&&this.curr&&this.buff[1]){return(this.buff[1]==='yx'?Math.pow(val,this.buff[0]):this.buff[1]==='xây'?Math.pow(val,1/this.buff[0]):[1]==='EE'?val*Math.pow(10,this.buff[0]):eval('('+val+')'+this.buff[1]+'('+this.buff[0]+')'))+'';}
if(!this.stack[0]&&key!=='='){this.buff[0]=false;this.stack[this.num++]=[val,key];this.curr=true;return val+'';}
if(this.stack[0]&&this.curr&&this.curr!=='funk'&&key!=='='){this.stack[this.num-1]=[val,key];return val+''}
if(!this.stack[0]){return val+'';}
if(rank[key]<=rank[this.stack[this.num-1][1]]){this.stack[this.num-1]=[this.stack[this.num-1][1]==='yx'?Math.pow(this.stack[this.num-1][0],val):this.stack[this.num-1][1]==='xây'?Math.pow(this.stack[this.num-1][0],1/val):this.stack[this.num-1][1]==='EE'?this.stack[this.num-1][0]*Math.pow(10,val):eval('('+this.stack[this.num-1][0]+')'+this.stack[this.num-1][1]+'('+val+')'),key];}
if(rank[key]>rank[this.stack[this.num-1][1]]){this.stack[this.num++]=[val,key];}else if(this.stack[this.num-2]&&rank[key]<=rank[this.stack[this.num-2][1]]){this.calc(key,this.stack[--this.num][0]);}
this.res=(this.stack[this.num-1]?this.stack[this.num-1][0]:this.res)+'';if(key==='='){this.init('AX');}
this.curr=true;return this.res;};Calculator.prototype.init=function(key)
{if(key.match(/A/)||key==='CE'){this.stack=[];this.num=0;};if(key==='CE'){this.buff=[false,false];}
return '0';};keyBoard["0"]="num0_btn";keyBoard["1"]="num1_btn";keyBoard["2"]="num2_btn";keyBoard["3"]="num3_btn";keyBoard["4"]="num4_btn";keyBoard["5"]="num5_btn";keyBoard["6"]="num6_btn";keyBoard["7"]="num7_btn";keyBoard["8"]="num8_btn";keyBoard["9"]="num9_btn";keyBoard["."]="dot_btn";keyBoard["="]="equal_btn";keyBoard["*"]="multiple_btn";keyBoard["Ã"]="multiple_btn";keyBoard["Ã·"]="divide_btn";keyBoard["+"]="plus_btn";keyBoard["â"]="minus_btn";keyBoard["/"]="divide_btn";keyBoard["C"]="clear_btn";keyBoard["c"]="clear_btn";keyBoard["CE"]="clear_btn";keyBoard["m-"]="mMinus_btn";keyBoard["m+"]="mPlus_btn";keyBoard["mr"]="mr_btn";keyBoard["m-"]="mMinus_btn";keyBoard["mc"]="mc_btn";keyBoard["+/â"]="plusMinus_btn";keyBoard["â"]="sqrt_btn";keyBoard["%"]="percent_btn";keyBoard["1/x"]="oneDivide_btn";for(var i in keyBoard)
{var obj=keyBoard[i];exportRoot[obj].name=obj;exportRoot[obj].addEventListener("mousedown",keyAction)}
calculator[0]=new Calculator();function findByName(val)
{for(var i in keyBoard)
{var obj=keyBoard[i];var property=i;if(obj==val)
{if(i=="C"){i=(exportRoot.c_txt.text=="C")?"C":"CE";}
return{prop:i,elm:exportRoot[obj]};}}}
function keyAction(e)
{var event=e;var elmObj=findByName(e.currentTarget.name);var keyText=elmObj["prop"];var key=elmObj["elm"];key.addEventListener('mouseout',keyUp);key.addEventListener('mouseover',keyDown);if(key){doKey(keyText);}}
function keyDown(e,obj){var event=e,target=obj,key=keyBoard[obj];if(key)
{keyUp();pressedKey=key;key.gotoAndStop(1);}
return false;}
function keyUp()
{if(pressedKey&&pressedKey!==secondActive){pressedKey.gotoAndStop(0);pressedKey=null;}}
function freezeKey(key,del){var obj=(!del||del!==2)?frozenKey:key;if(obj)obj.gotoAndStop(0);if(!del){key.gotoAndStop(1);frozenKey=key;}
return obj;}
function render(val,inp){var regx=/(\d+)(\d{3})/,hasComma=val.match(/\./),tmp,valAbs=Math.abs(+val);if(val.match(/NaN|Inf|Error/)){tmp='Error';}else{resBuffer=val;if(valAbs>=1e+14){val=(+val).toExponential(13)+'';}
if(!bigger&&((!inp||inp==='+/â')&&valAbs!==0)){val=(+val).toPrecision(9);}
tmp=(val+'').split('.');if(tmp[1]){tmp[2]=tmp[1].split('e');if(tmp[2][1]){tmp[1]=tmp[2][0];}
if(!inp||inp==='+/â'){tmp[1]=(((+('1.'+tmp[1])).toPrecision(bigger?14:tmp[2][1]?7:9))+'');if(tmp[1]>=2){tmp[0]=(+tmp[0]+1)+'';}
tmp[1]=tmp[1].substr(2).replace(/0+$/,'');}}
while(regx.test(tmp[0])){tmp[0]=tmp[0].replace(regx,'$1'+' '+'$2');}
tmp=tmp[0]+((tmp[1]||hasComma)?'.'+tmp[1]:'').replace('.undefined','').replace(inp?'':/\.$/,'')+(tmp[2]&&tmp[2][1]?'e'+tmp[2][1]:'');}
if(ln){tmp=tmp.replace(/\./g,'#').replace(/\s/g,ln===1?' ':ln===2?',':'.').replace(/#/g,ln===2?'.':',');}
exportRoot.showscreen_txt.text=tmp;}
function doKey(text,alt)
{var key=exportRoot[keyBoard[text]];if(text==='2nd'){secondActive=secondActive?null:true;}else if(text.match(/^[+|Ã·|Ã|â|\/|*|yx|xây|E]+$/)&&text!=='â'){freezeKey(key);}else if(text.match(/^[\d|\.|Ï]$/)){freezeKey(key,true);exportRoot.c_txt.text="C";}else if(text==='C'){exportRoot.c_txt.text="CE";if(frozenKey)freezeKey(frozenKey);}else if(text.match(/CE|=/)){if(bracketKey)freezeKey(bracketKey,2);freezeKey(key,true);frozenKey=null}else if(text.match(/Deg|Rad/)){radDeg.firstChild.data=deg?'Rad':'Deg';deg=!deg}else if(text==='('){bracketKey=key;freezeKey(bracketKey,2);}else if(text===')'&&brackets===1&&bracketKey){freezeKey(bracketKey,2);}else if(text.match(/^mr$/)&&memory){exportRoot.c_txt.text="C";}
key.removeEventListener('mouseout',keyUp);key.removeEventListener('mouseover',keyDown);evalKey(text);if(!alt){keyUp();}
if(text.match(/^m[c|+|-]/))
{freezeKey(exportRoot[keyBoard["mr"]],2);var frame=(memory?1:0)
exportRoot[keyBoard["mr"]].gotoAndStop(frame);}}
function evalKey(key){var dispVal=resBuffer.replace(/\s/g,'').replace(/Error|â|-â/,'0')+'',_PI=Math.PI,lastKey;if(!key.match(/2nd|Deg|Rad|m/)){buffStr.push(key);if((buffStr[buffStr.length-2]==='='&&key!=='='&&calculator[brackets].curr)||key==='CE'){buffStr=[key];}}
lastKey=buffStr[buffStr.length-2];if(key.match(/^[\d|\.]$/)||key==='+/â'){if(calculator[brackets].curr&&key!=='+/â'||(key==='+/â'&&lastKey&&lastKey.match(/^[+|â|Ã·|Ã|yx|xây|E|^C]+$/))){dispVal='0';calculator[brackets].curr=false;}
if((Math.abs(+(dispVal+key))>(bigger?1e15:1e9)||dispVal.replace(/^-/,'').length>15||(dispVal.replace('-','').replace(/\./g,'').length>(bigger?14:8))||(dispVal.match(/\.|\e\+/)&&key==='.'))&&key!=='+/â'){buffStr.pop();return;}else if(key==='+/â'){render(!(dispVal.replace(/e[\+|\-]/,'')).match('-')?'-'+dispVal:dispVal.replace(/^-/,''),'+/â');}else{render((dispVal+key).replace(/^(-)*?0(\d)$/,'$1'+'$2'),true);}}else if(key.match(/^C|CE/)){render(calculator[brackets].init(key));}else if(key.match(/^[+|â|Ã·|Ã|-|\/|*|yx|xây|%|E]+$/)&&key!=='â'){render(calculator[brackets].calc(key,dispVal));}else{if(brackets>-1){calculator[brackets].curr='funk';}
switch(key){case '=':while(brackets>-1){render(dispVal=calculator[brackets--].calc('=',dispVal));}
brackets=0;calculator[brackets].curr=true;break;case '(':calculator[++brackets]=new Calculator();calculator[brackets].curr=true;break;case ')':if(brackets){render(calculator[brackets--].calc('=',dispVal));}
if(brackets>-1){calculator[brackets].curr=false;}
break;case 'mc':memory=0;break;case 'm+':memory+=+dispVal;break;case 'm-':memory-=+dispVal;break;case 'mr':render(memory+'');break;case '1/x':render((1/dispVal)+'');break;case 'â':render(Math.sqrt(dispVal)+'');break;default:break;}}}}