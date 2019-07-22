import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-scatter',
  templateUrl: 'scatter.page.html',
  styleUrls: ['scatter.page.scss'],
})
export class ScatterPage {
  public scatterChart: GoogleChartInterface;
  public customScatterChart: GoogleChartInterface;
  public trendline: GoogleChartInterface;

  constructor() {

  }

  ionViewDidEnter() {
    this.loadScatterChart();
    this.loadCustomScatterChart();
    this.loadTrendlineChart();
  }

  loadScatterChart() {
    this.scatterChart = {
      chartType: 'ScatterChart',
      dataTable: [['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 500,
        chartArea: { height: '400' },
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none'
      },
    };
  }

  loadCustomScatterChart() {
    this.customScatterChart = {
      chartType: 'ScatterChart',
      dataTable: [['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 500,
        chartArea: { height: '400' },
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
        colors: ['#ff0000'],
        pointShape: 'star',
        pointSize: 18,
        animation: {
          duration: 200,
          easing: 'inAndOut',
        }
      },
    };
  }

  loadTrendlineChart() {
    this.trendline = {
      chartType: 'ScatterChart',
      dataTable: [['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 500,
        chartArea: { height: '400' },
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
        colors: ['#ff0000'],
        pointShape: 'star',
        pointSize: 18,
        animation: {
          duration: 200,
          easing: 'inAndOut',
        },
        trendlines: {
          0: { type: 'exponential', color: '#333', opacity: 1 }
        }
      },
    };
  }

}
