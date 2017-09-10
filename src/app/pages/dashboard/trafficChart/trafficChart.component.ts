import {Component, OnInit} from '@angular/core';

import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';
import {BaThemeConfigProvider} from "../../../theme/theme.configProvider";
import {colorHelper} from "../../../theme/theme.constants";

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart implements OnInit {

  public doughnutData: Array<Object>;

  constructor(private trafficChartService: TrafficChartService, private _baConfig: BaThemeConfigProvider) {
  }

  ngOnInit(): void {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    this.trafficChartService.getTweetsPerParty().subscribe((data) => {

      this.doughnutData = [
        {
          value: data.parties['SVP'],
          color: dashboardColors.white,
          highlight: colorHelper.shade(dashboardColors.white, 15),
          label: 'SVP',
          percentage: calcPercentage('SVP'),
          order: 1,
        }, {
          value: data.parties['SP'],
          color: dashboardColors.gossip,
          highlight: colorHelper.shade(dashboardColors.gossip, 15),
          label: 'SP',
          percentage: calcPercentage('SP'),
          order: 4,
        }, {
          value: data.parties['CVP'],
          color: dashboardColors.silverTree,
          highlight: colorHelper.shade(dashboardColors.silverTree, 15),
          label: 'CVP',
          percentage: calcPercentage('CVP'),
          order: 3,
        }, {
          value: data.parties['GLP'],
          color: dashboardColors.surfieGreen,
          highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
          label: 'GLP',
          percentage: calcPercentage('GLP'),
          order: 2,
        }, {
          value: data.parties['GPS'],
          color: dashboardColors.blueStone,
          highlight: colorHelper.shade(dashboardColors.blueStone, 15),
          label: 'GPS',
          percentage: calcPercentage('GPS'),
          order: 0,
        },
      ];
      this._loadDoughnutCharts();

      function calcPercentage(party) {
        return Math.round(100 / data.total * data.parties[party]);
      }

    });

  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout: 64,
      responsive: true
    });
  }




}
