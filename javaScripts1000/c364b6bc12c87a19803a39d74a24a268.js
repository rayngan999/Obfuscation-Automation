<html>
<head>
<script>
      var hashArr = window.location.hash.replace('#','').split('|');
      var juNum = hashArr[0];
      var _ju_dt = hashArr[1];
      var sha1 = hashArr[2];
      var sha256 = hashArr[3];
      var md5 = hashArr[4];

      if (_ju_dt!='' && _ju_dt.indexOf('-')!=-1) {
        //console.log('writing to storage')
        writeStore();
        if (sha1!='' && sha256!='' && md5!='') writeStorage();
      }

      savedInfo = {
        _ju_dt:readStore(),
        userInfo:readStorage(),
        acow:readAccess()
      }

      if (savedInfo._ju_dt!='' || savedInfo.userInfo!='') {
        //console.log('savedInfo',savedInfo)
        parent.postMessage(savedInfo,"*");
      }
      function readStore() {
        try{
          var store = window.sessionStorage.getItem(juNum);
          return store || '';
        }catch(er){
          return '';
        }
      }
      function readAccess() {
        try{
          var access = window.localStorage.getItem(window.btoa(juNum+'admin'));
          return (access && access!='' ? true : false);
        }catch(er){
          return false;
        }
      }
      function writeStore() {
        try{
          window.sessionStorage.setItem(juNum, _ju_dt);
        }catch(er){
          // do nothing
        }
      }
      function readStorage() {
        try{
          var storage = window.localStorage.getItem('ua');
          return storage || '';
        }catch(er){
          return '';
        }
      }
      function writeStorage() {
        try{
          window.localStorage.setItem('ua', sha1+'|'+sha256+'|'+md5);
        }catch(er){
          // do nothing
        }
      }
    </script>
</head>
<body></body>
</html>