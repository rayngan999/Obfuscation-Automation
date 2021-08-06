
    function resolveIp(ip,targetID) {
        $.get( "/ajax/resolve.php?ip="+ip+"&time"+Date.now(), function( data ) {
            if (targetID) {
                $( "#"+targetID ).html( data.resolved );
            }
        });
    }
    
    function evaluateIP(ip,targetID) {
        $.get( "/ajax/georesolve.php?ip="+ip+"&time"+Date.now(), function( data ) {
            if (targetID) {
                if (data.evalutation)
                {
                    $( "#"+targetID ).html( data.evalutation );
                    document.getElementById('ipdiscrepancy_detection').classList.remove('hidden')
                    
                }
            }
        });
    }

    function copyToClipboard (str) {
        console.log('copyToClipboard',str)
      const el = document.createElement('textarea');  // Create a <textarea> element
      el.value = str;                                 // Set its value to the string that you want copied
      el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
      el.style.position = 'absolute';                 
      el.style.left = '-9999px';                      // Move outside the screen to make it invisible
      document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
      const selected =            
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0)     // Store selection if found
          : false;                                    // Mark as false to know no selection existed before
      el.select();                                    // Select the <textarea> content
      document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el);                  // Remove the <textarea> element
      if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
        document.getSelection().addRange(selected);   // Restore the original selection
      }
    };

    $(document).ready(function()
    {
        var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage );
        $('#brlng').html(lang);
        $('#reso').html(window.screen.width+' x '+window.screen.height+ 'pixels');
        $('#resus').html(window.screen.availWidth+' x '+window.screen.availHeight+ 'pixels');
    });
