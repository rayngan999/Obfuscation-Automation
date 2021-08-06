/*
 *  Speedtest.pl APP Graphic
 */
var speedtestGraphic = function (sp, DEBUG_LEVEL) {
    thatg = this;
    _.bindAll(this);
    this.DEBUG_LEVEL = typeof DEBUG_LEVEL !== 'undefined' ? DEBUG_LEVEL : logger.ERROR;
    this.sp = sp;
    this.log = new logger('GRAPHIC', this.DEBUG_LEVEL);

    this.drawInterval = null;
    this.drawTime = 250;
    this.drawStep = 1;
    this.currentAngle = 0;
    this.dstAngle = 0;
    this.graphData = new Array();
    this.graphPart = 0;

};
speedtestGraphic.prototype.initialize = function () {

    this.log.info('Initializing APP Graphic');

    this.graphData['latency'] = new Array();
    this.graphData['download'] = new Array();
    this.graphData['upload'] = new Array();

    this.stageControl('start');
    /*
    this.stageControl('testing');
    this.meterStatusControl('ping');
    $("#meter-news").hide();
    */

    this.drawScale('inact');
    this.drawScale('act');

    statsEventHtml5('loaded');

    $("#server-list").html('');
    var c = '';
    var s = '';
    for (var i in this.sp.configuration['mservers']) {
        if (this.sp.configuration['mselected'] == this.sp.configuration['mservers'][i].id) {
            s = 'selected';
            $('#start-stage #select-server #selected-server').html(this.sp.configuration['mservers'][i].city + ' - ' + this.sp.configuration['mservers'][i].name);
        } else {
            s = '';
        }
        c = '';
        c += '<div server-id="' + this.sp.configuration['mservers'][i].id + '" class="server-entry ' + s + '">';
        c += '<div class="city">' + this.sp.configuration['mservers'][i].city + '</div>';
        c += '<div class="name">' + this.sp.configuration['mservers'][i].name + '</div>';
        c += '<div class="clear"></div>';
        c += '</div>';
        $("#server-list").html($("#server-list").html() + c);
    }

    $(".meter-area #testing-stage #server-name").html(this.sp.configuration['mservers'][0].city + " - " + this.sp.configuration['mservers'][0].name);
    if (this.sp.configuration['mselected'] > 0) {
        $(".meter-area #servers-stage #server-remember").attr('checked', 'checked');
        var i = 0;
        thatg.sp.configuration['mservers'].map(function (obj, index) {
            if (obj.id == thatg.sp.configuration['mselected']) {
                i = index;
            }
        });
        if (i > 0) {
            this.sp.configuration['servers'] = [];
            this.sp.configuration['servers'][0] = this.sp.configuration['mservers'][i];
            $(".meter-area #testing-stage #server-name").html(this.sp.configuration['mservers'][i].city + " - " + this.sp.configuration['mservers'][i].name);
        }
    }
    $('.meter #start-btn').click(function () {
        $("#meter-news").hide();
        thatg.clearAllResults();
        //thatg.sp.checkLocation();
        thatg.start();
        statsEventHtml5('start');
        return false;
    });

    $('.meter #servers-close').click(function () {
        thatg.stageControl('start');
        return false;
    });

    $('.meter #select-server').click(function () {
        thatg.stageControl('servers');
        return false;
    });

    $('.meter #servers-stage .scrollbar-inner').scrollbar();

    $('.meter-area #servers-stage #server-remember').change(function () {
        var id = thatg.sp.configuration['mselected'];
        if ($(this).is(":checked") && id > 0) {
            utils.setCookie('fpSelServId', id, 7);
        } else {
            utils.setCookie('fpSelServId', 0, 7);
        }
        statsEventHtml5('server remember');
        return false;
    });

    $('#server-list .server-entry').click(function () {

        $('#server-list .server-entry').removeClass('selected');
        $(this).addClass('selected');
        var sid = $(this).attr('server-id');
        var i = 0;
        thatg.sp.configuration['mservers'].map(function (obj, index) {
            if (obj.id == sid) {
                i = index;
            }
        });

        thatg.sp.configuration['servers'] = [];

        if (sid > 0) {
            thatg.sp.configuration['servers'][0] = thatg.sp.configuration['mservers'][i];
            $(".meter-area #testing-stage #server-name").html(thatg.sp.configuration['mservers'][i].city + " - " + thatg.sp.configuration['mservers'][i].name);
            var s = thatg.sp.configuration['mservers'][i].city + ' - ' + thatg.sp.configuration['mservers'][i].name;
            statsEventHtml5('server custom');
        } else {
            thatg.sp.configuration['servers'] = thatg.sp.configuration['defaultServers'];
            $(".meter-area #testing-stage #server-name").html(thatg.sp.configuration['mservers'][0].city + " - " + thatg.sp.configuration['mservers'][0].name);
            var s = thatg.sp.configuration['mservers'][0].city + ' - ' + thatg.sp.configuration['mservers'][0].name;
            statsEventHtml5('server default');
        }

        that.log.info('New server(s) selected');
        for (var i in thatg.sp.configuration['servers']) {
            that.log.info('Selected to test: ' + (thatg.sp.configuration['servers'][i].city || "n/a") + " - " + thatg.sp.configuration['servers'][i].name + " (" + (thatg.sp.configuration.servers[i].id || "n/a") + ")");
        }

        if ($(".meter-area #servers-stage #server-remember").is(":checked")) {
            utils.setCookie('fpSelServId', sid, 7);
        } else {
            utils.setCookie('fpSelServId', 0, 7);
        }

        thatg.sp.configuration['mselected'] = sid;
        $('#start-stage #select-server #selected-server').html(s);
        thatg.stageControl('start');
        return false;

    });

    this.setIpIsp(this.sp.results['ip'], this.sp.results['isp']);

};
speedtestGraphic.prototype.locationX = function () {
    switch (utils.getCookie('fploc')) {
        case '1':
            this.stageControl('loading');
            this.sp.checkLocation();
            setTimeout(this.sp.startCheckServers, 1000);
            break;
        case '2':
            this.stageControl('loading');
            setTimeout(this.sp.startCheckServers, 1000);
            break;
        default:
            this.stageControl('location');
            $(".meter #location-stage .loading-text .allow").click(function () {
                utils.setCookie('fploc', '1', 1000);
                statsEventHtml5('location-allow-v1');
                thatg.stageControl('loading');
                thatg.sp.checkLocation();
                setTimeout(thatg.sp.startCheckServers, 1000);
                return false;
            });
            $(".meter #location-stage .loading-text .disallow").click(function () {
                utils.setCookie('fploc', '2', 7);
                statsEventHtml5('location-disallow-v1');
                thatg.stageControl('loading');
                setTimeout(thatg.sp.startCheckServers, 1000);
                return false;
            });
    }
};

speedtestGraphic.prototype.initPhase = function (action) {
    switch (action) {
        case 'latency':
            this.stageControl('testing');
            this.meterStatusControl('ping');
            this.sp.graphicResponse('latency');
            break;
        case 'download':
            this.meterStatusControl('download');
            this.sp.graphicResponse('download');
            break;
        case 'upload':
            this.meterStatusControl('upload');
            this.sp.graphicResponse('upload');
            break;
        case 'results':
            this.stageControl('saving');
            //$("#meter-news").show();
            this.sp.graphicResponse('results');
            break;
    }
    ;
};
speedtestGraphic.prototype.start = function () {
    thatg.sp.start();
};
speedtestGraphic.prototype.showProgress = function (action, isEnd) {
    isEnd = typeof isEnd !== 'undefined' ? isEnd : false;

    switch (action) {
        case 'latency':
            var actPercent = Math.min(this.sp.configuration['ltCount'] * this.sp.configuration['resultsRefresh'] / this.sp.configuration['latencyTime'], 1);
            break;
        case 'download':
            var actPercent = Math.min(this.sp.configuration['dtCount'] * this.sp.configuration['resultsRefresh'] / this.sp.configuration['downloadTime'], 1);
            break;
        case 'upload':
            var actPercent = Math.min(this.sp.configuration['utCount'] * this.sp.configuration['resultsRefresh'] / this.sp.configuration['uploadTime'], 1);
            break;
    }

    var correction = 1;
    var shake = 0;
    var shakeRange = 0;

    if (actPercent < 0.1) {
        correction = actPercent / 0.1;
    } else {
        correction = 1;
    }

    switch (action) {
        case 'latency':
            if (this.sp.results['latencyResult'] > 1) {
                shake = Math.random() * 2 - 1;
            } else {
                shake = 0;
            }
            if (this.sp.results['latencyResult'] > -1) {
                this.meterResultControl('ping', Math.round(this.sp.results['latencyResult'] + shake));
            } else {
                this.meterResultControl('ping', -1);
            }
            if (isEnd) {
                if (this.sp.results['latencyResult'] > -1) {
                    this.meterResultControl('ping', Math.round(this.sp.results['latencyResult']));
                } else {
                    this.meterResultControl('ping', -2);
                    statsEventHtml5('error_latency');
                }
                this.graphData['latency'] = this.sp.results['latencyTimes'];
                this.refreshGraphData('latency', Math.round(this.sp.results['latencyResult']));
                this.setScaleResult(0);
                statsEventHtml5('latency');
                setTimeout(this.gotoDownload, 1000);
            }
            break;
        case 'download':

            this.setProgress(actPercent * 100);

            shakeRange = 0.05;
            if (this.sp.results['downloadResult'] > shakeRange) {
                shake = Math.random() * shakeRange * 2 - shakeRange;
            } else {
                shake = Math.random() * shakeRange / 2;
            }

            if (this.sp.results['downloadResult'] < 0) {
                this.meterResultControl('download', -1);
            } else {
                this.meterResultControl('download', ((this.sp.results['downloadResult'] + shake) * correction).toFixed(2));
                if (actPercent && (actPercent * 100) > (100 / 38) * this.graphPart) {
                    this.graphData['download'].push(this.sp.results['downloadRawResult'] * correction);
                    this.refreshGraphData('download');
                    this.graphPart++;
                }
            }

            if (isEnd) {

                if (this.sp.results['downloadResult'] < 0) {
                    this.meterResultControl('download', -2);
                    statsEventHtml5('error_download');
                } else {
                    this.meterResultControl('download', (this.sp.results['downloadResult']).toFixed(2));
                }
                statsEventHtml5('download');
                this.setScaleResult(0);
                setTimeout(this.gotoUpload, 1000);

            }
            break;
        case 'upload':

            this.setProgress(actPercent * 100);

            shakeRange = 0.05;
            if (this.sp.results['uploadResult'] > shakeRange) {
                shake = Math.random() * shakeRange * 2 - shakeRange;
            } else {
                shake = Math.random() * shakeRange / 2;
            }

            if (this.sp.results['uploadResult'] < 0) {
                this.meterResultControl('upload', -1);
            } else {
                this.meterResultControl('upload', ((this.sp.results['uploadResult'] + shake) * correction).toFixed(2));
                if (actPercent && (actPercent * 100) > (100 / 38) * this.graphPart) {
                    this.graphData['upload'].push(this.sp.results['uploadRawResult'] * correction);
                    this.refreshGraphData('upload');
                    this.graphPart++;
                }
            }

            if (isEnd) {

                if (this.sp.results['uploadResult'] < 0) {
                    this.meterResultControl('upload', -2);
                    statsEventHtml5('error_upload');
                } else {
                    this.meterResultControl('upload', (this.sp.results['uploadResult']).toFixed(2));
                }
                statsEventHtml5('upload');

                this.setScaleResult(0);
                setTimeout(this.gotoResults, 1000);

            }
            break;
    }
    ;
};
speedtestGraphic.prototype.gotoDownload = function () {
    this.initPhase('download');
};
speedtestGraphic.prototype.gotoUpload = function () {
    this.initPhase('upload');
};
speedtestGraphic.prototype.gotoResults = function () {
    this.initPhase('results');
};
speedtestGraphic.prototype.gotoError = function (stage) {
    //this.stageControl('error');
    statsEventHtml5('test_error_' + stage);
};
speedtestGraphic.prototype.resultsLoaded = function () {

    this.myiIteration = 0;
    this.myi = setInterval(function () {
        if (thatg.sp.results['saved'] === 3 || thatg.myiIteration >= 5) {
            clearInterval(thatg.myi);
            if (thatg.sp.results['resultId']) {
                if (sdebug || thatg.sp.configuration['simple']) {
                    thatg.graphData['latency'] = new Array();
                    thatg.graphData['download'] = new Array();
                    thatg.graphData['upload'] = new Array();
                    $("#meter-news").show();
                    thatg.stageControl('start');
                } else {
                    setTimeout(function () {
                        console.log('Reloading to result page: ' + thatg.sp.results['resultId']);
                        window.location = window.location.protocol + '//www.speedtest.pl/wynik/' + thatg.sp.results['resultId'] + "/" + thatg.sp.results['resultIdS'];
                    }, 1000);
                }
            } else {
                thatg.stageControl('start');
            }
        } else {
            console.log('Stats not send yet. Waiting...');
        }
        thatg.myiIteration++;
    }, 500);

};

// ###############

speedtestGraphic.prototype.stageControl = function (stage) {
    $(".meter [id*='-stage']").hide();
    $(".meter [id*='" + stage + "-stage']").show();
};
speedtestGraphic.prototype.setIpIsp = function (ip, isp) {
    $(".ip-isp #ip-address").html(ip);
    $(".ip-isp #isp-name").html(isp);
};
speedtestGraphic.prototype.meterStatusControl = function (partial) {
    $(".meter-status [id*='-icon']").hide();
    $(".meter-status #" + partial + "-icon").show();
    this.graphPart = 0;
    switch (partial) {
        case 'ping':
            $(".meter-status #meter-test-name").html('Ping');
            break;
        case 'download':
            $(".meter-status #meter-test-name").html('Download');
            break;
        case 'upload':
            $(".meter-status #meter-test-name").html('Upload');
            break;
        default:
            $(".meter-status #meter-test-name").html("...");
    }
};
speedtestGraphic.prototype.meterResultControl = function (partial, value) {
    switch (partial) {
        case 'ping':
            $(".meter #meter-legend").html('ms');
            if (value >= 0) {
                this.setScaleResult(value);
            }
            break;
        case 'download':
        case 'upload':
            $(".meter #meter-legend").html('Mb/s');
            if (value >= 0) {
                this.setScaleResult(value);
            }
            break;
        default:
            $(".meter #meter-legend").html('...');
    }
    if (value < 0) {
        switch (value) {
            case -2:
                value = "b/d";
                break;
            default:
                value = "...";
        }
    }
    $(".meter #meter-result").html(value);
    $(".meter .box-value #" + partial + "-result").html(value);
};
speedtestGraphic.prototype.clearAllResults = function () {
    $(".meter .box-value [id*='-result']").html("...");
    $(".meter #meter-result").html("...");
    $(".meter #meter-legend").html('...');
    $(".meter-status [id*='-icon']").hide();
    $(".meter-status #meter-test-name").html("...");
    this.setScaleResult(0);
    this.setProgress(0);
    this.graphData['latency'] = new Array();
    this.graphData['download'] = new Array();
    this.graphData['upload'] = new Array();
    this.refreshGraphData('latency');
    this.refreshGraphData('download');
    this.refreshGraphData('upload');
};
speedtestGraphic.prototype.setProgress = function (percent) {
    if (percent < 0 || !percent) percent = 0;
    if (percent > 100) percent = 100;
    var indicatorZeroPos = -15;
    var progressWidth = 170;
    $(".meter .meter-progress #meter-progress-active").css('width', Math.ceil(progressWidth * percent / 100) + 'px');
    $(".meter .meter-progress #meter-progress-info").css('left', indicatorZeroPos + Math.ceil(progressWidth * percent / 100) + 'px');
    $(".meter .meter-progress #meter-progress-info #meter-progress-value").html(Math.ceil(percent));
};
speedtestGraphic.prototype.drawScaleLine = function (id, size, weight, angle, stage) {
    $(".meter #scale-draw-" + stage).append('<div id="line-' + id + '" class="scale-line-container"><div class="scale-line line-' + size + ' line-' + weight + '"></div></div>');
    $(".meter #scale-draw-" + stage + " #line-" + id).css('-ms-transform', 'rotate(' + angle + 'deg)');
    $(".meter #scale-draw-" + stage + " #line-" + id).css('-webkit-transform', 'rotate(' + angle + 'deg)');
    $(".meter #scale-draw-" + stage + " #line-" + id).css('transform', 'rotate(' + angle + 'deg)');
};
speedtestGraphic.prototype.drawScaleLegend = function (stage) {
    var scaleArray = new Array();
    var weight = 'thin';
    scaleArray[0] = {value: 0, top: 305, left: 13};
    scaleArray[1] = {value: 5, top: 204, left: -14};
    scaleArray[2] = {value: 10, top: 101, left: 10};
    scaleArray[3] = {value: 25, top: 23, left: 86};
    scaleArray[4] = {value: 50, top: -2, left: 189};
    scaleArray[5] = {value: 100, top: 23, left: 291};
    scaleArray[6] = {value: 250, top: 101, left: 374};
    scaleArray[7] = {value: 500, top: 204, left: 400};
    scaleArray[8] = {value: 1000, top: 310, left: 379};
    switch (stage) {
        case 'act':
            weight = 'thick';
            break;
        case 'inact':
            weight = 'thin';
            break;
    }
    for (var id in scaleArray) {
        $(".meter #scale-draw-" + stage).append('<div id="legend-' + id + '" class="scale-legend legend-' + weight + '">' + scaleArray[id].value + '</div>');
        $(".meter #scale-draw-" + stage + " #legend-" + id).css('top', scaleArray[id].top + 'px');
        $(".meter #scale-draw-" + stage + " #legend-" + id).css('left', scaleArray[id].left + 'px');
    }
};
speedtestGraphic.prototype.setScaleResult = function (value) {
    var angle = 0;

    if (value <= 5) {
        angle = Math.round((value - 0) / (5 - 0) * 30) + 0 * 30;
    } else if (value <= 10) {
        angle = Math.round((value - 5) / (10 - 5) * 30) + 1 * 30;
    } else if (value <= 25) {
        angle = Math.round((value - 10) / (25 - 10) * 30) + 2 * 30;
    } else if (value <= 50) {
        angle = Math.round((value - 25) / (50 - 25) * 30) + 3 * 30;
    } else if (value <= 100) {
        angle = Math.round((value - 50) / (100 - 50) * 30) + 4 * 30;
    } else if (value <= 250) {
        angle = Math.round((value - 100) / (250 - 100) * 30) + 5 * 30;
    } else if (value <= 500) {
        angle = Math.round((value - 250) / (500 - 250) * 30) + 6 * 30;
    } else if (value <= 1000) {
        angle = Math.round((value - 500) / (1000 - 500) * 30) + 7 * 30;
    } else {
        angle = 240;
    }

    this.drawScaleArc(angle);
};
speedtestGraphic.prototype.setScaleActiveAngle = function (angle) {
    for (var i = 0; i <= 40; i++) {
        $(".meter #scale-draw-act #line-" + i + " .scale-line").attr('class', 'scale-line line-' + (i % 5 == 0 ? 'big' : 'small') + ' line-' + (angle >= i * 6 ? 'thick' : 'thin'));
    }
};
speedtestGraphic.prototype.drawScale = function (stage) {
    var step = 6;
    var start = -120;
    var weight = 'thin';
    $(".meter #scale-draw-" + stage).html("");
    for (var i = 0; i <= 40; i++) {
        this.drawScaleLine(i, i % 5 == 0 ? 'big' : 'small', weight, start + (step * i), stage);
    }
    this.drawScaleLegend(stage);
};
speedtestGraphic.prototype.drawScaleArcPart = function (start, angle) {
    var c = document.getElementById("scale-canvas");
    var ctx = c.getContext("2d");
    var back = false;
    var line = 5;
    var color = "#00aaff";
    if (angle < 0) {
        back = true;
        line = 7;
        color = "#fcfcfc";
        angle--;
    } else {
        if (start > 0) {
            start--;
        }
    }
    var offset = (150 + start) / 360 * 2 * Math.PI;
    ctx.beginPath();

    ctx.arc(208, 214, 164, offset, offset + angle / 360 * 2 * Math.PI, back);
    ctx.strokeStyle = color;
    ctx.lineWidth = line;
    ctx.stroke();
};
speedtestGraphic.prototype.drawScaleArc = function (angle) {
    this.dstAngle = angle;
    var direction = 1;
    if (this.dstAngle < this.currentAngle) direction = -1;
    clearInterval(this.drawInterval);
    this.drawInterval = setInterval(function () {
        if (thatg.currentAngle != thatg.dstAngle + direction) {
            thatg.drawScaleArcPart(thatg.currentAngle, thatg.drawStep * direction);
            $(".meter #scale-indicator").css('-ms-transform', 'rotate(' + (thatg.currentAngle - 120) + 'deg)');
            $(".meter #scale-indicator").css('-webkit-transform', 'rotate(' + (thatg.currentAngle - 120) + 'deg)');
            $(".meter #scale-indicator").css('transform', 'rotate(' + (thatg.currentAngle - 120) + 'deg)');
            thatg.setScaleActiveAngle(thatg.currentAngle);
            thatg.currentAngle += thatg.drawStep * direction;
        } else {
            clearInterval(thatg.drawInterval);
        }
    }, Math.round(this.drawTime / (Math.abs(this.dstAngle - this.currentAngle) * this.drawStep)));
};
speedtestGraphic.prototype.refreshGraphData = function (partial, latency) {

    var max;
    var results = this.graphData[partial];
    var cnt;
    var i;
    var height = 30;
    var subheight = 0;
    var count;

    switch (partial) {
        case 'latency':
            cnt = '.ping-box #ping-graph';
            height = 3;
            if (latency > 75) {
                subheight = 27;
            } else {
                subheight = Math.round((latency / 75) * 27);
            }
            count = 19;
            break;
        case 'download':
            cnt = '.download-box #download-graph';
            count = 38;
            break;
        case 'upload':
            cnt = '.upload-box #upload-graph';
            count = 38;
            break;
    }

    max = Math.max.apply(null, results);

    $(cnt).html('');
    for (i = 0; i < count; i++) {
        let currentResult = results[i];

        if (currentResult > 0 || partial == 'latency') {
            if (max === 0) {
                max = 1;
            }

            $(cnt).html($(cnt).html() + '<div class="graph-bar" style="height: ' + (subheight + Math.floor(height * currentResult / max)) + 'px;"></div>');
        } else {
            $(cnt).html($(cnt).html() + '<div class="graph-bar"></div>');
        }
    }

};