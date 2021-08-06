ï»¿/***********MOVED FROM XACTWARE.JS BECAUSE NEEDS TO LOAD IN THE PAGE FIRST***************/

function showEstimatesProcessed() {
    var dayDate = estCtrDateTime.split(' at')[0].split(', ');
    var day = dayDate[0];
    var date = dayDate[1] + ", " + dayDate[2];
    var total = estCtrTotalEstimates;
    var dollar = estCtrTotalDollar.split('.')[0];
    document.write("As of <span class='blue'>" + day + "</span>" + date);
    document.write("<br/>Xactware has processed <span>" + total + "</span> estimates");
    document.write("<br/>with a total value of <b>$" + dollar + "</b>");
}