define(['jquery', 'brandsiteUtils'], function($, utils) {
  var chartData = {
    'topProductsChart': {
      'chart': {
        'style': {
          'fontFamily': 'open sans, sans-serif',
          'color': '#bfbfbf'
        }
      },
      'title': {
        'text': ''
      },
      'xAxis': {
        'type': 'datetime',
        'crosshair': {
          'width': 2
        },
        'labels': {
          'style': {
            'color': '#afafaf',
          }
        }
      },
      'yAxis': {
        'labels': {
          'style': {
            'color': '#afafaf',
            'font': '11px open sans, sans-serif'
          }
        },
        'title': {
          'text': 'Value in Rs.',
          'style': {
            'color': '#333333',
            'fontWeight': 'bold',
            'fontSize': '12px',
            'fontFamily': 'open sans, sans-serif'
          }
        }
      },
      'credits': {
        'enabled': false
      },
      'navigation': {
        'buttonOptions': {
          'enabled': false
        }
      },
      'legend': {
        'enabled': false,
        'symbolWidth': 8,
        'marker': {
          'enabled': true,
          'symbol': 'circle',
        }
      },
      'series': [
        {'color': '#1930b3'},
        {'color': '#00aeef'},
        {'color': '#ed145b'},
        {'color': '#01B140'},
        {'color': '#f26522'},
        {'color': '#fbb03b'}
      ],
      'plotOptions': {
        'series': {
          'pointStart': 0,
          'marker': {
            'enabled': true,
            'symbol': 'circle',
          }
        }
      },
      'tooltip': {
        'shared': true,
        'useHTML': true,
        'pointFormatter': function() {
          return '<tr><td style="color: '
          + this.color + '"><b> '
          + this.series.name + ': </b></td>' + '<td><b>'
          + utils.toCurrency(this.y) + '</b></td></tr>';
        },
        'headerFormat': '<b>' + ' Date : {point.x:%Y-%m-%d} </b><table class= "chart-tooltip-table">',
        'footerFormat': '</table>'
      }
    },
    'sectoralChart': {
      'chart': {
        'spacingLeft': 0,
        'spacingRight': 0,
        'type': 'bar'
      },
      'exporting': {
        'buttons': {
          'contextButton': {
            'enabled': false
          }
        }
      },
      'title': null,
      'xAxis': {
        'categories': [],
        'labels': {
          'enabled': false
        },
        'title': {
          'text': null
        },
        'tickLength': 4
      },
      'yAxis': {
        'min': 0,
        'title': null,
        'labels': {
          'overflow': 'justify'
        }
      },
      'legend': {
        'layout': 'vertical',
        'align': 'right',
        'verticalAlign': 'middle'
      },
      'tooltip': {
        'valueSuffix': ' %'
      },
      'credits': {
        'enabled': false
      },
      'series': [{
        'color': '#0C4DA2',
        'name': 'Funds'
      }, {
        'color': '#F58220',
        'name': 'Benchmark'
      }]
    },
    'dividendChart': {
      'chart': {
        'spacingLeft': 0,
        'spacingRight': 0,
        'type': 'bar'
      },
      'exporting': {
        'buttons': {
          'contextButton': {
            'enabled': false
          }
        }
      },
      'title': null,
      'xAxis': {
        'categories': [],
        'title': {
          'text': null
        },
        'tickLength': 4
      },
      'yAxis': {
        'min': 0,
        'title': null,
        'labels': {
          'overflow': 'justify'
        }
      },
      'legend': {
        'layout': 'vertical',
        'align': 'right',
        'verticalAlign': 'top'
      },
      'credits': {
        'enabled': false
      },
      'plotOptions': {
        'bar': {
          'borderWidth': 1,
          'groupPadding': 0.4,
          'pointPadding': 0
        }
      },
      'series': [{
        'color': '#0C4DA2',
        'name': 'Dividend per unit'
      }]
    },
    'creditChart': {
      'chart': {
        'spacingLeft': 0,
        'spacingRight': 0,
        'type': 'bar'
      },
      'exporting': {
        'buttons': {
          'contextButton': {
            'enabled': false
          }
        }
      },
      'title': null,
      'xAxis': {
        'categories': [],
        'title': {
          'text': null
        },
        'tickLength': 4
      },
      'yAxis': {
        'min': 0,
        'title': null,
        'labels': {
          'overflow': 'justify'
        }
      },
      'credits': {
        'enabled': false
      },
      'plotOptions': {
        'bar': {
          'borderWidth': 1,
          'groupPadding': 0.4,
          'pointPadding': 0
        }
      },
      'series': [{
        'color': '#0C4DA2',
        'name': 'Dividend per unit'
      }]
    },
    'assetChart': {
      'chart': {
        'spacing': [20, 20, 20, 20],
        'plotBackgroundColor': null,
        'plotBorderWidth': null,
        'plotShadow': false,
        'type': 'pie',
        'width': null
      },
      'credits': {
        'enabled': false
      },
      'legend': {
        'align': 'right',
        'itemMarginBottom': 15,
        'itemMarginTop': 15,
        'layout': 'vertical',
        'margin': 100,
        'symbolHeight': 15,
        'symbolRadius': 4,
        'verticalAlign': 'middle'
      },
      'plotOptions': {
        'pie': {
          'allowPointSelect': true,
          'borderColor': null,
          'borderWidth': 2,
          'cursor': 'pointer',
          'dataLabels': {
            'enabled': false
          },
          'states': {
            'hover': {
              'brightness': 0,
              'halo': {
                'animation': 500,
                'opacity': 1,
                'size': 20
              }
            }
          },
          'innerSize': '60%',
          'showInLegend': true,
          'startAngle': 270
        }
      },
      'title': {
        'text': null
      },
      'series': [{
        'colorByPoint': true,
        'data': [
          {'color': '#1930b3'},
          {'color': '#00aeef'},
          {'color': '#ed145b'},
          {'color': '#01B140'},
          {'color': '#f26522'},
          {'color': '#fbb03b'}
        ]
      }]
    },
    'marketChart': {
      'chart': {
        'spacing': [20, 20, 20, 50],
        'plotBackgroundColor': null,
        'plotBorderWidth': null,
        'plotShadow': false,
        'type': 'pie',
        'width': null
      },
      'credits': {
        'enabled': false
      },
      'legend': {
        'align': 'right',
        'itemMarginBottom': 30,
        'layout': 'vertical',
        'margin': 20,
        'symbolHeight': 15,
        'symbolRadius': 4,
        'verticalAlign': 'middle'
      },
      'plotOptions': {
        'pie': {
          'allowPointSelect': true,
          'borderColor': null,
          'borderWidth': 2,
          'cursor': 'pointer',
          'dataLabels': {
            'enabled': false
          },
          'states': {
            'hover': {
              'brightness': 0,
              'halo': {
                'animation': 500,
                'opacity': 1,
                'size': 20
              }
            }
          },
          'innerSize': '60%',
          'showInLegend': true,
          'startAngle': 270
        }
      },
      'title': {
        'text': null
      },
      'series': [{
        'colorByPoint': true,
        'data': [{
          'color': '#0caae1',
        }, {
          'color': '#f05a24',
        }, {
          'color': '#fcb13d',
        }]
      }]
    },
    'cumulativeChart': {
      'chart': {
        'spacing': [20, 40, 20, 20],
        'type': 'column'
      },
      'credits': {
        'enabled': false
      },
      'exporting': {
        'buttons': {
          'contextButton': {
            'enabled': false
          }
        }
      },
      'legend': {
        'margin': 0
      },
      'title': {
        'text': null
      },
      'tooltip': {
        'pointFormat': '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} %</b><br/>'
      },
      'xAxis': {
        'labels': {
          'style': {
            'color': '#afafaf'
          },
          'y': 25
        },
        'crosshair': true,
        'tickLength': 4,

      },
      'yAxis': {
        'labels': {
          'format': '{value} %',
          'style': {
            'color': '#afafaf'
          },
          'y': -2
        },
        'title': {
          'margin': 40,
          'style': {
            'color': '#afafaf'
          },
          'text': 'Value in %'
        }
      },
      'plotOptions': {
        'column': {
          'borderWidth': 1,
          'groupPadding': 0.35,
          'pointPadding': 0
        }
      },
      'legend': {
        'enabled': false
      },
      'series': [
        {'color': '#1930b3'},
        {'color': '#00aeef'},
        {'color': '#ed145b'},
        {'color': '#01B140'},
        {'color': '#f26522'}
      ],
    }
  };
  var getChartData = function(chartType) {
    if (chartType)
      return $.extend({}, chartData[chartType]);
    return $.extend({}, chartData);
  };
  return {
    'getChartData': getChartData
  };
});
