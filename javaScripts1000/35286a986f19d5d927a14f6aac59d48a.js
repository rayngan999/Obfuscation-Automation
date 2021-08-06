var coin = 0;

function getKeyCoin()
{
    var url = "/getKeyCoin";
    $.get(url, function(response){
        if(response.result != null)
        {
            $('.showcoin').attr('data-item', response.result.coin);
            $('.showkey').attr('data-item', response.result.key);
            $('.showcoin').empty().text(response.result.coin);  
            $('.showkey').empty().text(response.result.key);
            $('#unlock_coin').attr('data-coin', response.result.coin);
            $('#unlock_key').attr('data-key', response.result.key);   

            if(response.result.key < 5)
            {
                $('.countdown-key').empty().show();
                generateCountDownKey(response.result.secondsUntilNextKey);
            }
            else
            {
                $('.countdown-key').empty().hide();
            }

            coin = response.result.coin;
        }
    });
}

function getCoin(target) {
    var url = "getBalanceByMember";
    $.get(url, function (response) {
        if (response.coin != null) {
            $(target).text(response.coin);
        }
    });
}

function generateCountDownKey(time) 
{
    var timer = time;
    var minutes = 0;
    var seconds = 0;
    var _this = setInterval(function () {
            
        minutes = parseInt((timer / 60) %60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(( minutes + "." + seconds ) == "00.00")
        {
            $('.countdown-key').empty().text("").hide();
            getKeyCoin();
            clearInterval(_this);
        }
        $('.countdown-key').text(minutes + "." + seconds);
        --timer;
           
    }, 1000);
}