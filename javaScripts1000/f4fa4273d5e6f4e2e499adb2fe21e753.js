// if user is running mozilla then use it's built-in WebSocket
function connectSocket(url) {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    const CONNECT = {
        url: checkEnv(),
        request: url + '/api/user'
    };
    var connection = new WebSocket(CONNECT.url);

    // get user info
    $.ajax({
       url: CONNECT.request,
       type: 'get',
       dataType: 'json',
       success: function (response) {
           var url = window.location.href;
           var result = checkUrl(url);
           if (result === null) {
               result = 'other';
           }
           var login = false;
           if (response.success) {
               login = true;
               response.data['href'] = window.location.href;
           }
           var data = {
               url : url,
               login: login,
               user : response,
               course : result
           };
           var idInterval = setInterval(function () {
               if (connection.readyState) {
                   connection.send(JSON.stringify(data));
                   clearInterval(idInterval);
               }
           });
       }
    });

    /**
     * check nguoi dung dang truy cap vao url nao
     * @param url
     * @returns {*}
     */
    function checkUrl(url) {
        url = url.toLowerCase();
        var result = null;
        const REGEX = {
            n1 : new RegExp('khoa-n1'),
            n2 : new RegExp('khoa-n2'),
            n3 : new RegExp('khoa-n3'),
            n4 : new RegExp('khoa-n4'),
            n5 : new RegExp('khoa-n5'),
            eju :new RegExp('eju')
        }

        for (var i in REGEX) {
            var matchs = url.match(REGEX[i]);
            if (matchs !== null) {
                result = i;
            }
        }
        return result;

    }

    /**
     * check env
     * @returns {string}
     */
    function checkEnv() {
        var host = window.location.origin;
        var Reg = new RegExp('dungmori.com');
        var matchs = host.match(Reg);

        if (matchs === null) {
            return 'ws://127.0.0.1:1337';
        } else {
            return 'wss://socket.dungmori.com';
        }
    }

}
//# sourceMappingURL=counter.js.map
