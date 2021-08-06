

<!DOCTYPE html>

<html>
<head><title>
	User account
</title>
    <style>
        * {
            margin: 0; padding: 0;
        }
    </style>
</head>
<body>
    <img alt="TÃ i khoáº£n" title="TÃ i khoáº£n" style="display:inline-block;cursor:pointer" onclick="window.postpopup()"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqxJREFUeNqslUuIUmEUx89cFF+YpJIPSGVEDNNxYTW0FGrTA9rMtG9Vq1bt20YEE7Rodm1r1TZbBC5Sehg+EAVFfOPowhcy+aJzLt8dHMd7r+N04Md9fZ6/3/nOY6vdboOEqZAw8gi5jTgRA9JDykgM+Yx8Q/6KOdkSEVEgT5CXiA3k7Qh5hbxDxssfuRU/8CK/kcM1BciuIG+Qn8g1OZGbyHdkBzazHfb7XTER+gdfESNczC4jXxZ3pGBXJfKRHeoZm8/nkMlkoFKpwGQyAaPRCF6vF6xWq5gQ+fmEhJCJsJPnYiEip5FIBHK5HIxGI/651WpBNBqFQqEgtaMA88uHS428EFuZSCSg3++LfhsMBlJC5FdNIg9YdqwMU61WkzyAarUql3UPSeS+2IrZbMYjZRQ+GbvHscNZaUqlEjQajaQHg8EgJ3KDRBxSK3w+n3jPUanA4XDIiVzlxNJWMLfbzafrsul0OgiHw8BxnJyIgXoXNbtLcispfSl16Yz0ej1YLJZ1i7NPxUjpcV1upVarBbvdzmecWq0+TweoKVhTWynS6XSgXC4DderlWiEhs9kMNpsNnE6nVNh+ULj2WAs4sW63C+l0GprN5lp/lXbp9/vB5XKt+rxPImo2gPiCpP4Uj8c36oyUJKHQqYqgYeWgPR4jr4XwbCpAViwWIZlMLr4iv8dCIN9i1qSo6V3U8vk8NBoNuk0jB4vzZII7eDydTnvwHywWi/XQ1z75PRGhg67X6zm8vcPm9UXsCKNyN5VK5U5Nxmw2Kzz/YiM4cR6v1F5YCv9BblFZ0KwRmic3Ho+X23kFW8YuTr9neL9WDuP6ZjAYfMoEyouJwItgmM6OtEBgikX2Hm+3EaqjD+wghYrss2d6vzccDrc9Hs+hyWSaLvoplUr89Z8AAwATg/tzto8gpwAAAABJRU5ErkJggg=="/>
    
        <script src="https://static.mediacdn.vn/danviet/mob_js/comment.15122020.min.js"></script>
        <script>
            $(document).ready(function () {
                window.postpopup = function(action) {
                    window.parent.postMessage({
                        act: action || 'cnnd_home_popup',
                        isLogged: 0,
                        name: '',
                        email: ''
                    }, '*');
                };
                comment.init();
                window.addEventListener("message", function (event) {
                    if (event.data.act == "cminfo") {
                        window.postpopup();
                        return;
                    }
                    receiveMessage(event);
                }, false);
                setTimeout(function () {
                    window.postpopup('cnnd_home_signal');
                }, 50);
            });
        </script>
    
</body>
</html>
