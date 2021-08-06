<script type="text/javascript">
//åå¾uuid ç¡åç¢ç
if( ! get_cookie( "uuid" ) )
{
    var uuid = gen_webuserid();
    set_cookie("uuid", uuid);
    set_cookie("AviviD_uuid", uuid);
}


//postMessage uuid
parent.postMessage( get_cookie( "uuid" ), "*");


/**
 * å¯«å¥cookie(å¤©æ¸)
 * é è¨­ 3650å¤©(10å¹´)
 */
function set_cookie(name, value, days)
{
    var domain = get_top_domain();
    var Days = days || 3650;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=" + domain + ";path=/" + ";SameSite=None; Secure;";
};

/**
 * åå¾cookie
 */
function get_cookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
    {
        return unescape(arr[2]);
    }
    return null;
};
/**
 * ç¢çwebuserid
 */
function gen_webuserid()
{
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function')
    {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

/**
 * åå¾é ç´ç¶²å
 */
function get_top_domain()
{
    var domain = window.location.host;
    var length = domain.split('.').length;
    var domain_split_reverse = domain.split('.').reverse();
    if (length <= '2')
    {
        return domain;
    }
    else if (length == '3')
    {
        if(domain_split_reverse[1] === 'com')
        {
            return domain;
        }
        else
        {
            return domain_split_reverse[1] + "." + domain_split_reverse[0];
        }
    }
    else if (length == '4')
    {
        if(domain_split_reverse[0] === 'com')
        {
            return domain_split_reverse[1] + "." + domain_split_reverse[0];
        }
        else
        {
            return domain_split_reverse[2] + "." + domain_split_reverse[1] + "." + domain_split_reverse[0];
        }
    }
    else
    {
        return domain_split_reverse[2] + "." + domain_split_reverse[1] + "." + domain_split_reverse[0];
    }
};
</script>
