function formErrors(data, form, errorCss) {
  errorCss = errorCss || 'row error';
  var summary = '';
  if (data != '') {
    summary = '<p class="errorbox">';
    $.each(data, function(key, val) {
      $(form + ' #' + key + '_em_').html(val.toString());
      $(form + ' #' + key + '_em_').show();
      $('#' + key)
        .parent()
        .addClass(errorCss);
      summary = summary + '- ' + val.toString() + '<br />';
    });
    summary += '</p>';
  }
  $(form + ' .msgBox').html(summary.toString());
  $(form + ' .msgBox').show();
}

function formSuccess(data, form) {
  var summary = '';
  if (data != '') {
    summary = '<div class="alert-box success">';
    $.each(data, function(key, val) {
      if (key != 'success') {
        $(form + ' #' + key + '_em_').html(val.toString());
        $(form + ' #' + key + '_em_').show();
        $('#' + key)
          .parent()
          .addClass('row success');
        summary = summary + val.toString() + '<br />';
      }
    });
    summary += '</div>';
  }
  $(form + ' .msgBox').html(summary.toString());
  $(form + ' .msgBox').show();

  $('.alert-box')
    .delay(8000)
    .fadeOut(2000);
  // $("[id^='update-button']").show();
  // $(form + ' .errorMessage').hide();//css({display:'none'});
  // $(form + ' .errorMessage').text('');
}

function replaceSuccess(data, form) {
  var summary = '';
  $(form + ' fieldset').html('');
  if (data != '') {
    summary =
      '<div class="alert-box success" style="margin:5px;position:relative">';
    $.each(data, function(key, val) {
      if (key != 'success') {
        $(form + ' #' + key + '_em_').html(val.toString());
        $(form + ' #' + key + '_em_').show();
        $('#' + key)
          .parent()
          .addClass('row success');
        summary = summary + val.toString() + '<br />';
      }
    });
    summary += '</div>';
  }
  $(form + ' fieldset').html(summary.toString());
  $(form + ' fieldset').show();

  // $("[id^='update-button']").show();
  // $(form + ' .errorMessage').hide();//css({display:'none'});
  // $(form + ' .errorMessage').text('');
}

function hideFormErrors(form) {
  // alert (form+"_es_");
  //  	$(form + " .errorMessage").html('');
  // 	$(form + " .errorMessage").hide();
  $(form + ' .errorbox').html('');
  $(form + ' .errorboxe').hide();
  $(form + ' .errorbox-icon').html('');
  $(form + ' .errorbox-icon').hide();
  // $("[id$='_em_']").html('');
}

function parseScript(strcode) {
  var scripts = new Array(); // Array which will store the script's code

  // Strip out tags
  while (strcode.indexOf('<script') > -1 || strcode.indexOf('</script') > -1) {
    var s = strcode.indexOf('<script');
    var s_e = strcode.indexOf('>', s);
    var e = strcode.indexOf('</script', s);
    var e_e = strcode.indexOf('>', e);

    // Add to scripts array
    scripts.push(strcode.substring(s_e + 1, e));
    // Strip from strcode
    strcode = strcode.substring(0, s) + strcode.substring(e_e + 1);
  }

  // Loop through every script collected and eval it
  for (var i = 0; i < scripts.length; i++) {
    try {
      eval(scripts[i]);
    } catch (ex) {
      // do what you want here when a script fails
    }
  }
}

function limitTextArea(text, infoID, charLimit) {
  if (typeof text === 'undefined') {
    return 0;
  }
  var len = text.length;
  var counter = charLimit - len;
  if (counter <= '0') {
    $('#' + infoID).css('color', '#FF0F0F');
  } else {
    $('#' + infoID).css('color', '#000000');
  }
  $('#' + infoID).text(counter);
  return counter;
}
function getLines(eleID) {
  txt = $('#' + eleID).val();
  row = txt.split('\n');
  return row.length;
}
function limitTextAreaRows(areaID, infoID, rowLimit) {
  var allowedNumberOfLines = rowLimit;
  var len = getLines(areaID);
  var counter = allowedNumberOfLines - len;
  if (len >= allowedNumberOfLines) {
    var modifiedText = $('#' + areaID)
      .val()
      .split('\n')
      .slice(0, allowedNumberOfLines);
    $('#' + areaID).val(modifiedText.join('\n'));
  }
  if (counter < 1) {
    $('#' + infoID).css('color', '#FF0F0F');
  } else {
    $('#' + infoID).css('color', '#4f4f4f');
  }
  $('#' + infoID).text(counter);
}
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}
function inArray(target, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
function removeItem(array, item) {
  for (var i in array) {
    if (array[i] == item) {
      array.splice(i, 1);
      break;
    }
  }
}
