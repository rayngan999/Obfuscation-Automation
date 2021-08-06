var is_ok = false;
var err_text;

function on_key_press(key_press) {
    if (is_ok) {
        var KeyCode;
        var CtrlKey;
        var KeyMod;
        if (window.event) {
            KeyCode = window.event.keyCode;
            CtrlKey = window.event.ctrlKey;
            KeyMod = 2;
        }
        else if (parent && parent.event) {
            KeyCode = parent.event.keyCode;
            CtrlKey = parent.event.ctrlKey;
            KeyMod = 2;
        }
        else {
            KeyCode = key_press.keyCode;
            CtrlKey = key_press.ctrlKey;
            if (key_press.modifiers != undefined) {
                KeyMod = key_press.modifiers;
                CtrlKey = 2;
                KeyCode = key_press.which;
            }
            else KeyMod = 2;
        }
        if (CtrlKey && KeyMod == 2 && (KeyCode == 13 || KeyCode == 10)) {
            send_error();
        }
    }
}

function send_error() {

    var wind = (window.name == 'send_frame') ? parent : window;
    var sel_text = null;
    if (wind.getSelection) err_text = wind.getSelection();
    else if (wind.document.getSelection) err_text = wind.document.getSelection();
    else sel_text = wind.document.selection;

    if (sel_text) {
        err_text = sel_text.createRange().text;
        var b_text = sel_text.createRange();
        var a_text = sel_text.createRange();
        sel_text = err_text;
        b_text.moveStart("word", -10);
        b_text.moveEnd("character", -err_text.length);
        a_text.moveStart("character", err_text.length);
        a_text.moveEnd("word", 10);
        sel_text = b_text.text + ' ##' + err_text + '## ' + a_text.text;
    }
    else {
        if (window.document.body != undefined) {
            if (wind.document.body.innerText != undefined)
                sel_text = wind.document.body.innerText;
            else
                sel_text = wind.document.body.innerHTML;

            var nn = sel_text.indexOf(err_text);
            if (nn != -1) {
                var tmp_str = err_text + "";
                sel_text = sel_text.substring(nn - 70, nn) + '<span style="color: red">' + err_text + '</span>' + sel_text.substring(nn + tmp_str.length, nn + tmp_str.length + 70);
            }
            else sel_text = '<span style="color: red">' + err_text + '</span>';
        }
        else sel_text = '<span style="color: red">' + err_text + '</span>';
    }

    if (err_text.length == 0 || err_text == " ") return;


    $.confirm({
        title: '',
        content: "<b>" + content1 + "</b><br><br><hr>..." + sel_text + "...<hr><br>" + content2 + "<br><div style='text-align:center'><img src='/captcha.php?code=error'><br><input type='text' name='img' id='error_captcha' value='' id='captchafield'></div>",
        confirmButton: button1,
        cancelButton: button2,
        animation: 'RotateY',
        confirm: function () {
            $.ajax({
                type: 'post',
                url: '/error.php',
                data: {'URL': decodeURI(wind.document.URL), 'ERR_TEXT': sel_text, 'REF_URL': decodeURI(top.document.URL), 'CAPTCHA': $('#error_captcha').val()},
                success: function (data) {
                    //$.alert('Result: ' + data, 'Result');
                    //alert(data);
                    if (data == 'CAPTCHA Error') {
                        title = title1;
                        content = content3;
                    }

                    if (data == 'Send ok') {
                        title = title2;
                        content = content4;
                    }
                    $.alert({
                        title: title,
                        content: content,
                        confirmButton: button3,
                        animation: 'RotateY'
                    });
                },
                error: function () {
                    $.alert({
                        title: title1,
                        content: content5,
                        animation: 'RotateY'
                    });
                }
            });
        }
    });
}

if (parent)parent.document.onkeypress = on_key_press;
document.onkeypress = on_key_press;
is_ok = true;