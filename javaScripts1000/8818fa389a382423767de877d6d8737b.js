function closeSwitch(){function e(){var e=[".header_heightFIX","header.devHeader"];var t=e[0];var n=$(e[1]).height();$(e[0]).height(n)}function n(){if(localStorage.advise!=undefined&&localStorage.advise=="closed"){$(t[0]).hide();e()}else{localStorage.setItem("advise","open");$(t[0]).show();e()}}var t=[".oldsite",".oldsiteClose .close",".header_heightFIX"];$(t[0]+" "+t[1]).click(function(){$(t[0]).slideUp(100,function(){e()});localStorage.setItem("advise","closed")});e();n()}function reset(){console.log("Reseting the localStorage");localStorage.removeItem("advise")}$(function(){closeSwitch()})