import { Component, OnInit } from '@angular/core';
import { colorHelper, layoutPaths } from '../../../../theme';
import { BaThemeConfigProvider } from '../../../../theme/theme.configProvider';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.scss']
})
export class SentimentsComponent implements OnInit {
  private baConfig: BaThemeConfigProvider;
  sentiments: Object;

  constructor(baconfig: BaThemeConfigProvider) {
    this.baConfig = baconfig;
  }

  ngOnInit() {
    this.sentiments = this.getData();
    let foo = 'bar';
  }

  initChart(chart: any) {
    const zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }


  private getData() {

    const layoutColors = this.baConfig.get().colors;
    const graphColor = this.baConfig.get().colors.custom.dashboardLineChart;

    return {
      simpleLineOptions: {
        color: this.baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '300px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [20, 20, 12, 45, 50],
          [10, 45, 30, 14, 12],
          [34, 12, 12, 40, 50],
          [10, 43, 25, 22, 16],
          [3, 6, 30, 33, 43]
        ]
      },
      areaLineData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [5, 9, 7, 8, 5, 3, 5, 4]
        ]
      },
      areaLineOptions: {
        fullWidth: true,
        height: '300px',
        low: 0,
        showArea: true
      },
      biLineData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [1, 2, 3, 1, -2, 0, 1],
          [-2, -1, -2, -1, -2.5, -1, -2],
          [0, 0, 0, 1, 2, 2.5, 2],
          [2.5, 2, 1, 0.5, 1, 0.5, -1]
        ]
      },

      biLineOptions: {
        height: '300px',
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
          showGrid: false
        }
      },
      simpleBarData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
          [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
        ]
      },
      simpleBarOptions: {
        fullWidth: true,
        height: '300px'
      },
      multiBarData: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
          [5, 4, 3, 7],
          [3, 2, 9, 5],
          [1, 5, 8, 4],
          [2, 3, 4, 6],
          [4, 1, 2, 1]
        ]
      },
      multiBarOptions: {
        fullWidth: true,
        height: '300px',
        stackBars: true,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value.split(/\s+/).map(function (word) {
              return word[0];
            }).join('');
          }
        },
        axisY: {
          offset: 20
        }
      },
      multiBarResponsive: [
        ['screen and (min-width: 400px)', {
          reverseData: true,
          horizontalBars: true,
          axisX: {
            labelInterpolationFnc: (n) => n
          },
          axisY: {
            offset: 60
          }
        }],
        ['screen and (min-width: 700px)', {
          stackBars: false,
          reverseData: false,
          horizontalBars: false,
          seriesBarDistance: 15
        }]
      ],
      stackedBarData: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
          [800000, 1200000, 1400000, 1300000],
          [200000, 400000, 500000, 300000],
          [100000, 200000, 400000, 600000]
        ]
      },
      stackedBarOptions: {
        fullWidth: true,
        height: '300px',
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
          }
        }
      },
      simplePieData: {
        series: [5, 3, 4]
      },
      simplePieOptions: {
        fullWidth: true,
        height: '300px',
        weight: '300px',
        labelInterpolationFnc: function (value) {
          return Math.round(value / 12 * 100) + '%';
        }
      },
      labelsPieData: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
      },
      labelsPieOptions: {
        fullWidth: true,
        height: '300px',
        weight: '300px',
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      },
      simpleDonutData: {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
      },
      simpleDonutOptions: {
        fullWidth: true,
        donut: true,
        height: '300px',
        weight: '300px',
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    };
  }

}
