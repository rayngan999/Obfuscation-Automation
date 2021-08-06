(function(){
    var scriptSrc = 'https://getscriptjs.com/app.js';
    
    var block = document.createElement('div');
    block.setAttribute('data-ts_site',ts_site);
    block.setAttribute('data-ts_channel',ts_channel);
    block.setAttribute('data-ts_dimension',ts_dimension);
    block.setAttribute('data-ts_width',ts_width);
    block.setAttribute('data-ts_height',ts_height);
    block.setAttribute('data-ts_user', ts_user);
    block.setAttribute('data-ts_palette',ts_palette);
    if (typeof(ts_subid1)!=='undefined')  {
        block.setAttribute('data-ts_subid1', ts_subid1 ? ts_subid1 : '');
        ts_subid1 = '';
    }
    if (typeof(ts_subid2)!=='undefined')  {
        block.setAttribute('data-ts_subid2', ts_subid2 ? ts_subid2 : '');
        ts_subid2 = '';
    }
    if (typeof(ts_subid3)!=='undefined')  {
        block.setAttribute('data-ts_subid3', ts_subid3 ? ts_subid3 : '');
        ts_subid3 = '';
    }
    
    block.className += 'ts-places-elements';

    if (ts_width.toString().indexOf('px')===-1 &&
        ts_width.toString().indexOf('%')===-1 &&
        ts_width.toString().indexOf('auto')===-1
    ) {
        ts_width += 'px';
    }
    
    if (ts_height.toString().indexOf('px')===-1 &&
        ts_height.toString().indexOf('%')===-1 &&
        ts_height.toString().indexOf('auto')===-1
    ) {
        ts_height += 'px';
    }    
    
    block.style.width=ts_width;
    block.style.height=ts_height;

    var script = document.createElement('script');
    var me = document.currentScript;
    
    if (document.body === null) {
        document.body = document.createElement("body");
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.width = ts_width + 'px';
        document.body.style.height = ts_height + 'px';
        
        document.addEventListener('DOMContentLoaded', function () {
            if (document.getElementsByTagName('body').length > 1) {
                document.getElementsByTagName('body')[1].remove();
            }
        });
    }

    if(me!=='undefined' && me != null && me.parentNode !== null){
        var p = (me.closest('body') !== null) ? me.parentNode : document.body; 
        p.appendChild(block);
        
        script.src = scriptSrc;
        script.async = true;
        p.appendChild(script);        
    } else {
        var scripts = document.getElementsByTagName("script");
        var thisScript = scripts[scripts.length - 1];
         thisScript.parentNode.appendChild(block);
         document.write('<script src="'+scriptSrc+'"></scr'+'ript>');

    }
})();

if (!tsFrameMessages) {
    function tsFrameMessages(evt)
    {
        if (evt && evt.data) {
            try {
                var data = JSON.parse(evt.data);
    
                if (data && data.source && data.source=='ts') {
                    const tsBlock = document.getElementById(data.blockId);
                    if (tsBlock) {
                       if (data.blockWidth) {
                            var blockWidth = data.blockWidth;
                            if (blockWidth.toString().indexOf('px')===-1 &&
                                blockWidth.toString().indexOf('%')===-1 &&
                                blockWidth.toString().indexOf('auto')===-1
                            ) {
                                blockWidth += 'px';
                            }    
                           tsBlock.style.width = blockWidth; 
                       }
                       if (data.blockHeight) {
                            var blockHeight = data.blockHeight;
                            if (blockHeight.toString().indexOf('px')===-1 &&
                                blockHeight.toString().indexOf('%')===-1 &&
                                blockHeight.toString().indexOf('auto')===-1
                            ) {
                                blockHeight += 'px';
                            }    

                           tsBlock.style.height = blockHeight; 
                       }
                       if (tsBlock.getElementsByTagName('iframe') && tsBlock.getElementsByTagName('iframe')[0]) {
                           const tsIframe = tsBlock.getElementsByTagName('iframe')[0];
                           if (data.frameWidth) {
                               tsIframe.width = data.frameWidth; 
                           }
                           if (data.frameHeight) {
                               tsIframe.height = data.frameHeight; 
                           }                           
                       }
                    }                    
                }
            } catch (e) {
              
            }
        }
    }
}

if (tsFrameMessages) {
    if (window.addEventListener) {
        window.addEventListener("message", tsFrameMessages, false);
    }
    else {
        window.attachEvent("onmessage", tsFrameMessages);
    }
}
