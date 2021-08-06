ï»¿var domainUtils = "https://utils3.cnnd.vn";
/*
    https://utils3.cnnd.vn/Handlers/RateGoldUsdHandler.ashx?c=gold&type=SJC_Ha_Noi&date=10/8/2020
    https://utils3.cnnd.vn/Handlers/RateGoldUsdHandler.ashx?c=GetRateUsd_v2&bank=["VPBANK","BIDV","vietin","NHNN"]&currency=USD&date=010/08/2020
*/
function GetRateGoldUsd() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    $.ajax({
        url: domainUtils + '/Handlers/RateGoldUsdHandler.ashx?c=gold&type="SJC_Ha_Noi"&date=' + today,
        type: 'GET',
        dataType: 'text',
        success: function (data) {
          
            if (data == null || data == "") {
                return;
            }
            else {
                if ($.trim(data) == "") {
                    return;
                } else {
                    var json = JSON.parse(data);
                    try {
                        var gold = json.data;
                        $('#vang').html(gold[0].price_gold + "/lÆ°á»£ng");
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        },
        error: function (e) {
        }
    });
    $.ajax({
        url: domainUtils + '/Handlers/RateGoldUsdHandler.ashx?c=GetRateUsd_v2&bank=["VPBANK","BIDV","vietin","NHNN"]&currency=USD&date=' + today,
        type: 'GET',
        dataType: 'text',
        success: function (data) {

            if (data == null || data == "") {
                return;
            }
            else {
                if ($.trim(data) == "") {
                    return;
                } else {
                    var json = JSON.parse(data);
                    
                    try {
                        var usd = json.data;
                        if (usd.length) {
                            if (usd[1].price != undefined)
                                $('#dola').html(usd[1].price + " VNÄ");
                            else
                                $('#dola').html(usd[1].buy_cash + " VNÄ");
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        },
        error: function (e) {
        }
    });
}
function WeatherData(instanceName) {

    var outputWeatherImage = '';
    var outputWeather = '';
    var image = '';
    $.ajax({
        type: 'GET',
        url: domainUtils + '/ajax/weatherinfo/' + instanceName + '.htm',
        contentType: 'application/json; charset=utf-8',
        success: function (res) {
            res = JSON.parse(res);
            if (res.Success) {
                var data = res.Data.data;
                if (data != null) {
                    try {

                        var img = convertIconWeather(data.datainfo.status);
                        outputWeather = data.datainfo.temperature + '<sup>o</sup>' + data.datainfo.degree;
                        outputWeatherImage = '<img width="27" src="' + img + '" alt="' + data.datainfo.status + '" />';

                        document.getElementById('divWeatherImage').innerHTML = outputWeatherImage;
                        document.getElementById('divWeather').innerHTML = outputWeather;
                        document.getElementById('divWeatherDesciption').innerText = data.datainfo.status;
                    } catch (err) {

                    }
                }
            }
        }
    });
}

function put(elm) {
    WeatherData(elm.value);
}

function convertIconWeather(status) {
    var type = "";
    status = status.toLowerCase();
    switch (status) {
        case "Ã­t mÃ¢y":
        case "má»t chÃºt mÃ¢y":
        case "cÃ³ mÃ¢y":
            type = "/App_Themes/ThoiTiet/maythaydoi.png";
            break;
        case "mÆ°a nhá»":
        case "mÆ°a":
            type = "/App_Themes/ThoiTiet/muaphun.jpg";
            break;
        case "náº¯ng Äáº¹p":
        case "mÃ¢y vÃ  náº¯ng":
        case "náº¯ng nháº¹":
        case "náº¯ng sau ÄÃ³ cÃ³ Ã­t mÃ¢y":
            type = "/App_Themes/ThoiTiet/itmay.jpg";
            break;
        case "náº¯ng":
            type = "/App_Themes/ThoiTiet/nang.jpg";
            break;
        case "chá»§ yáº¿u náº¯ng":
        case "nhiá»u náº¯ng":
            type = "/App_Themes/ThoiTiet/nang.jpg";
            break;
        case "mÆ°a rÃ o ráº£i rÃ¡c":
        case "cÆ¡n mÆ°a rÃ o":
        case "mÆ°a rÃ o":
        case "mÆ°a rÃ o nhá»":
        case "mÆ°a lá»n":
            type = "/App_Themes/ThoiTiet/mua.png";
            break;
        case "mÆ°a giÃ´ng ráº£i rÃ¡c":
        case "mÆ°a giÃ´ng":
        case "mÆ°a giÃ´ng lá»n":
        case "mÆ°a dÃ´ng":
        case "mÆ°a dÃ´ng lá»n":
        case "mÆ°a rÃ o cÃ³ sáº¥m":
            type = "/App_Themes/ThoiTiet/mua.png";
            break;
        case "sáº¥m sÃ©t":
            type = "/App_Themes/ThoiTiet/mua.png";
            break;
        case "nhiá»u mÃ¢y":
            type = "/App_Themes/ThoiTiet/nhieumay.gif";
            break;
        case "trong xanh":
        case "trá»i quang":
        case "quang mÃ¢y":
            type = "/Images/thoiTiet/it-may.png";
            break;
        case "áº£m Äáº¡m":
        case "náº¯ng cÃ³ sÆ°Æ¡ng má»":
        case "cÃ³ sÆ°Æ¡ng mÃ¹":
        case "mÃ¢y mÃ¹":
        case "sÆ°Æ¡ng mÃ¹ nháº¹":
        case "sÆ°Æ¡ng mÃ¹ dÃ y Äáº·c":
            type = "/Images/thoiTiet/it-may.png";
            break;
        default:
            type = "/Images/thoiTiet/it-may.png";
            break;
    }
    return type;
}