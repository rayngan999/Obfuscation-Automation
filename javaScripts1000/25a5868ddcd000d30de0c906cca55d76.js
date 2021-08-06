Cube("datav:/npm/color-string/1.5.2",["datav:/npm/color-name/1.1.3","datav:/npm/simple-swizzle/0.2.2"],function(a,b,c){function d(a,b,c){return Math.min(Math.max(b,a),c)}function e(a){var b=a.toString(16).toUpperCase();return 2>b.length?"0"+b:b}var f=Math.round,g=c("datav:/npm/color-name/1.1.3"),h=c("datav:/npm/simple-swizzle/0.2.2"),i={};for(var j in g)g.hasOwnProperty(j)&&(i[g[j]]=j);var k=a.exports={to:{}};return k.get=function(a){var b,c,d=a.substring(0,3).toLowerCase();return"hsl"===d?(b=k.get.hsl(a),c="hsl"):"hwb"===d?(b=k.get.hwb(a),c="hwb"):(b=k.get.rgb(a),c="rgb"),b?{model:c,value:b}:null},k.get.rgb=function(a){if(!a)return null;var b,c,e,h=/^#([a-f0-9]{3,4})$/i,i=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,j=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,k=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,l=/(\D+)/,m=[0,0,0,1];if(b=a.match(i)){for(e=b[2],b=b[1],c=0;3>c;c++){var n=2*c;m[c]=parseInt(b.slice(n,n+2),16)}e&&(m[3]=f(100*(parseInt(e,16)/255))/100)}else if(b=a.match(h)){for(b=b[1],e=b[3],c=0;3>c;c++)m[c]=parseInt(b[c]+b[c],16);e&&(m[3]=f(100*(parseInt(e+e,16)/255))/100)}else if(b=a.match(j)){for(c=0;3>c;c++)m[c]=parseInt(b[c+1],0);b[4]&&(m[3]=parseFloat(b[4]))}else if(b=a.match(k)){for(c=0;3>c;c++)m[c]=f(2.55*parseFloat(b[c+1]));b[4]&&(m[3]=parseFloat(b[4]))}else return(b=a.match(l))?"transparent"===b[1]?[0,0,0,0]:(m=g[b[1]],!m)?null:(m[3]=1,m):null;for(c=0;3>c;c++)m[c]=d(m[c],0,255);return m[3]=d(m[3],0,1),m},k.get.hsl=function(b){if(!b)return null;var c=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,e=b.match(c);if(e){var f=parseFloat(e[4]),g=(parseFloat(e[1])%360+360)%360,h=d(parseFloat(e[2]),0,100),i=d(parseFloat(e[3]),0,100),j=d(isNaN(f)?1:f,0,1);return[g,h,i,j]}return null},k.get.hwb=function(c){if(!c)return null;var e=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,f=c.match(e);if(f){var g=parseFloat(f[4]),i=(parseFloat(f[1])%360+360)%360,h=d(parseFloat(f[2]),0,100),j=d(parseFloat(f[3]),0,100),b=d(isNaN(g)?1:g,0,1);return[i,h,j,b]}return null},k.to.hex=function(){var a=h(arguments);return"#"+e(a[0])+e(a[1])+e(a[2])+(1>a[3]?e(f(255*a[3])):"")},k.to.rgb=function(){var a=h(arguments);return 4>a.length||1===a[3]?"rgb("+f(a[0])+", "+f(a[1])+", "+f(a[2])+")":"rgba("+f(a[0])+", "+f(a[1])+", "+f(a[2])+", "+a[3]+")"},k.to.rgb.percent=function(){var a=h(arguments),c=f(100*(a[0]/255)),d=f(100*(a[1]/255)),e=f(100*(a[2]/255));return 4>a.length||1===a[3]?"rgb("+c+"%, "+d+"%, "+e+"%)":"rgba("+c+"%, "+d+"%, "+e+"%, "+a[3]+")"},k.to.hsl=function(){var a=h(arguments);return 4>a.length||1===a[3]?"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)":"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+a[3]+")"},k.to.hwb=function(){var b=h(arguments),c="";return 4<=b.length&&1!==b[3]&&(c=", "+b[3]),"hwb("+b[0]+", "+b[1]+"%, "+b[2]+"%"+c+")"},k.to.keyword=function(a){return i[a.slice(0,3)]},a.exports});