'use strict';

define(['jquery', 'materialize', 'highcharts', 'chartDefaults', 'brandsiteUtils', 'apiService'],
  function($, _materialize, highcharts, chartDefaults, utils, apiService) {
    var chartList = {};
    var legends = {};
    var legendSelectors = [
      {'deselected': false, 'clickable': false, 'hidden': false},
      {'deselected': false, 'clickable': false, 'hidden': false},
      {'deselected': false, 'clickable': true, 'hidden': false},
      {'deselected': true, 'clickable': true, 'hidden': false},
      {'deselected': true, 'clickable': true, 'hidden': false},
      {'deselected': true, 'clickable': true, 'hidden': false}
    ];

    function toggleClassActive(context) {
      if (!context.hasClass('active')) {
        context.addClass('active');
        context.siblings().removeClass('active');
      }
    }

    function setTableChartSwitch(selector) {
      var targetList = $(selector);
      $.each(targetList, function(_key, element) {
        utils.setShowTargetListner('#' + element.id, 0, toggleClassActive);
      });
    }

    function setCustomLegends(chartId, legendNames) {
      var parentChart = $('[data-parent-fund-id="' + chartId + '"]');
      legends[chartId] = parentChart.find('.js-legend-list');
      // to initialize legends on first call only
      initializeLegends(legendNames, chartId);
    }

    function initializeLegends(legendNames, chartId) {
      var legendList = legends[chartId];
      var currentChart = chartList[chartId];
      if (legendList.data('legendsInitialized')) {
        $.each(legendSelectors, function(key) {
          // deselect legends on reinitialization
          currentChart.series[key].setVisible(!legendList.find('.js-scheme-' + key).hasClass('deselected'), false);
        });
        currentChart.redraw();
      } else {
        // reconfigure legend, and hide series accordingly
        $.each(legendSelectors, function(key, value) {
          var currentLegend, currentSeries;
          currentSeries = currentChart.series[key];
          currentLegend = legendList.find('.js-scheme-' + key);

          // hide empty or hidden series
          if (!currentSeries.data.length || value.hidden)
            currentLegend.hide();
          else {
            // set legend names
            currentLegend.text(legendNames[key]);

            // deselect legends
            if (value.deselected)
              currentLegend.addClass('deselected');
            else
              currentLegend.removeClass('deselected');

            currentSeries.setVisible(!value.deselected, false);
            // add legend click listeners
            if (value.clickable)
              legendList.on('click', ('.js-scheme-' + key),  {'chartId': chartId, 'clickedKey': key}, chartHandler);
          }
        });
        currentChart.redraw();
        // to avoid reinitialization
        legendList.data('legendsInitialized', true);
      }
    }

    function chartHandler(event) {
      var chartId = event.data.chartId;
      var clickedKey = event.data.clickedKey;
      var currentChart = chartList[chartId];
      var currentLegend = legends[chartId];
      $.each(legendSelectors, function(key, value) {
        if (value.clickable && !value.hidden) {
          currentChart.series[key].setVisible(false, false);
          currentLegend.find('.js-scheme-' + key).addClass('deselected');
        }
      });
      $(this).removeClass('deselected');
      currentChart.series[clickedKey].setVisible(true, false);
      currentChart.redraw();
    }

    function setChartApplyCta(callBack) {
      $('.js-chart-apply').on('click', function() {
        var self = $(this);
        var chartId = self.data('chartId');
        if (validateFeild('[data-chart-header="' + chartId + '"] .js-option-amt .js-amt-feild', isCentMultiple)) {
          chartList[chartId].destroy();
          legends[chartId].data('legendsInitialized', false);
          self.addClass('disabled');
          callBack(chartId);
        }
      });
    }

    function getChartHeaders(chartId) {
      var currentChartHeader = $('[data-chart-header=\'' + chartId + '\']');

      var product_id = currentChartHeader.find('.js-product-id').val();
      var dofa_scheme_code = $('#js-dofa-scheme-code').val();
      var is_sip = (currentChartHeader.find('.option-product select').val() === 'true');
      var money_invested = currentChartHeader.find('.option-amt input').val();
      var years = currentChartHeader.find('.js-option-time select').val();
      if (!years)
        years = currentChartHeader.find('.js-option-time option[selected]').val();

      var is_dividend = currentChartHeader.find('.option-dividend input').prop('checked');

      return {
        'product_id': product_id,
        'is_sip': is_sip,
        'money_invested': money_invested,
        'years': years,
        'is_dividend': is_dividend,
        'dofa_scheme_code': dofa_scheme_code
      };
    }

    function validateFeild(selector, validator) {
      var result = validator(selector);
      var labelElement = $(selector).parents('.js-input-feild').find('.js-error-label');
      if (result)
        labelElement.addClass('hide');
      else
        labelElement.removeClass('hide');

      return result;
    }

    function isCentMultiple(selector) {
      var value = $(selector).val();
      return (value >= 0  &&  value % 100 === 0);
    }

    function resetPrincipalStatement(chartId, chartHeaders) {
      var principalStatement = $('[data-parent-fund-id="' + chartId + '"]').find('.js-principal-statement');
      if (chartHeaders.is_sip) {
        principalStatement.removeClass('invisible');
        var installment = chartHeaders.money_invested;
        var noOfInstallments = (chartHeaders.years * 12);
        var principle = noOfInstallments * installment;
        principalStatement.find('.js-amt').text(utils.toCurrency(installment));
        principalStatement.find('.js-installments').text(noOfInstallments);
        principalStatement.find('.js-principal').text(utils.toCurrency(principle));
      } else
        principalStatement.addClass('invisible');
    }

    function getReturnsTableTplString(tableData) {
      var tplStr = '';
      if (!tableData.length)
        tplStr = '<tr> <td colspan="6" class="table-no-data center" >  No data  </td> </tr>';

      $.each(tableData, function() {
        var rowData = this;
        tplStr += '<tr>';

        $.each(rowData, function() {
          tplStr += '<td>' + utils.toCSV(this) + '</td>';
        });

        tplStr += '</tr>';
      });
      return tplStr;
    }

    function makeSchemeReturnsTable(chartId, chartHeaders) {
      var tableSelector = $('[data-parent-fund-id="' + chartId + '"]').find('.js-table-view table tbody');
      apiService.getRequest('GETSCHEMERETURNSTABLE', chartHeaders)
        .done(function(data) {
          var returnsTplStr = getReturnsTableTplString(data);
          tableSelector.html(returnsTplStr);
          tableSelector.addClass('initialized');
        })
        .fail(function(err) {
          window.console.error(err);
        })
        .always(function() {
          tableSelector.removeClass('show-loader');
        });
    }

    var makeTopProductsChart =  function(chartId) {
      var chartHeaders = getChartHeaders(chartId);
      resetPrincipalStatement(chartId, chartHeaders);
      var applyBtn = $('[data-chart-header="' + chartId + '"] .js-chart-apply');
      var loaderWrapper = $('[data-loader-wrapper-id = "' + chartId + '"]');
      loaderWrapper.addClass('show-loader');
      apiService.getRequest('RETURNSCALCULATORCHART', chartHeaders)
      .done(function(data) {
        var chartData = {
          'series': data.series
        };
        var chartOptions = $.extend(true, {}, chartDefaults.getChartData('topProductsChart'));
        $.extend(true, chartOptions, chartData);
        chartList[chartId] = highcharts.chart(chartId + '-container', chartOptions);

        // to store the current chart in action and not to destroy our previous chart as we switch charts in a multi-chart widget.
        setCustomLegends(chartId, data.legends);
      }).fail(function(err) {
        console.error('Chart Data error: ', err);
      })
      .always(function() {
        applyBtn.removeClass('disabled');
        loaderWrapper.removeClass('show-loader');
      });
      makeSchemeReturnsTable(chartId, chartHeaders);
    };

    var makeReturnsCalculator = function() {
      $('select').material_select();
      setChartApplyCta(makeTopProductsChart);
      setTableChartSwitch('.js-switch-view');
    };

    return {
      'makeReturnsCalculator': makeReturnsCalculator,
      'makeTopProductsChart': makeTopProductsChart,
      'getChartHeaders': getChartHeaders,
      'validateFeild': validateFeild,
      'isCentMultiple': isCentMultiple,
      'resetPrincipalStatement': resetPrincipalStatement
    };
  }
);
