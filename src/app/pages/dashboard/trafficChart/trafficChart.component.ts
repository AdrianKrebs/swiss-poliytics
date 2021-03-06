import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';
import {BaThemeConfigProvider} from '../../../theme/theme.configProvider';
import {ColorHelper} from '../../../theme/theme.constants';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss'],
})


export class TrafficChart implements OnInit {

  @Output() onNavigateToParty = new EventEmitter();
  public doughnutData: Array<Object>;
  public total: Number;

  constructor(private trafficChartService: TrafficChartService, private _baConfig: BaThemeConfigProvider) {
  }

  navigateToParty(item) {
    this.onNavigateToParty.emit(item.label)
  }

  ngOnInit(): void {
    const dashboardColors = this._baConfig.get().colors.dashboard;

    this.trafficChartService.getTweetsPerParty().subscribe((data) => {

      this.total = data.total;
      this.doughnutData = [
        {
          value: data.parties['SP'],
          color: dashboardColors.spRed,
          highlight: ColorHelper.shade(dashboardColors.spRed, 15),
          label: 'SP',
          percentage: calcPercentage('SP'),
          order: 1,
        },
        {
          value: data.parties['SVP'],
          color: dashboardColors.svpGreen,
          highlight: ColorHelper.shade(dashboardColors.svpGreen, 15),
          label: 'SVP',
          percentage: calcPercentage('SVP'),
          order: 3,
        },
        {
          value: data.parties['FDP'],
          color: dashboardColors.fdpBlue,
          highlight: ColorHelper.shade(dashboardColors.fdpBlue, 15),
          label: 'FDP',
          percentage: calcPercentage('FDP'),
          order: 2,
        }, {
          value: data.parties['CVP'],
          color: dashboardColors.cvpOrange,
          highlight: ColorHelper.shade(dashboardColors.cvpOrange, 15),
          label: 'CVP',
          percentage: calcPercentage('CVP'),
          order: 4,
        },
        {
          value: data.parties['GLP'],
          color: dashboardColors.glpGreen,
          highlight: ColorHelper.shade(dashboardColors.glpGreen, 15),
          label: 'GLP',
          percentage: calcPercentage('GLP'),
          order: 6,
        },
         {
          value: data.parties['GPS'],
          color: dashboardColors.gpsGreen,
          highlight: ColorHelper.shade(dashboardColors.gpsGreen, 15),
          label: 'GPS',
          percentage: calcPercentage('GPS'),
          order: 7,
        },
        {
          value: data.parties['BDP'],
          color: dashboardColors.bdpYellow,
          highlight: ColorHelper.shade(dashboardColors.bdpYellow, 15),
          label: 'BDP',
          percentage: calcPercentage('BDP'),
          order: 5,
        },
      ];
      this._loadDoughnutCharts();

      function calcPercentage(party) {
        return Math.round(100 / data.total * data.parties[party]);
      }

    });

  }

  private _loadDoughnutCharts() {
    const el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout: 64,
      responsive: true,
    });
  }


}
