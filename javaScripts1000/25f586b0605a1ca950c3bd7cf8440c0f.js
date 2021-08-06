<script language="JavaScript" src="/js/jquery-1.7.1.js?__VERSION=012320120203"></script>
<script>
// Ex: c21.com
document.domain = location.hostname.split('.').slice(-2).join('.');

parent.proxyAjax = function(o) {
   // TODO: Find method to use parent frame's jQuery include 
   //var jQueryHere = parent.$.sub();

   $.ajax({
      url : o.url,
      data: o.data,
      success : function(response, textStatus, XMLHttpRequest) {
         if (!o.callback) return;

         // This is insane, but required
         // document.location will apparently default to the iframe's domain
         // for relative locations... which is bad because the user is
         // never supposed to be on the personal domain (ex: my.century21.com)
         parent.portalAjax.callThisFrame(function() {
            o.callback.call(o.context, response, textStatus, XMLHttpRequest);
         });
      },
      context: o.context,
      cache: o.cache ? true : false,
      type: o.requestType
   });
}
</script>
