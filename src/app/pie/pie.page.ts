import { Component } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-pie',
  templateUrl: 'pie.page.html',
  styleUrls: ['pie.page.scss'],
})
export class PiePage {
  public pieChart: GoogleChartInterface;
  public pieChart3D: GoogleChartInterface;
  public donutChart: GoogleChartInterface;
  public explodedChart: GoogleChartInterface;
  constructor() {

  }

  ionViewDidEnter() {
    this.loadSimplePieChart();
    this.load3DPieChart();
    this.loadSimpleDonutChart();
    this.loadExplodedChart();
  }

  loadSimplePieChart() {
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      //opt_firstRowIsData: true,
      options: {
        'title': 'Tasks',
        height: 500,
        width: '100%'
      },
    };
  }
  load3DPieChart() {
    this.pieChart3D = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      //opt_firstRowIsData: true,
      options: {
        'title': 'Tasks',
        height: 500,
        width: '100%',
        is3D: true,
      },
    };
  }
  loadSimpleDonutChart() {
    this.donutChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      //opt_firstRowIsData: true,
      options: {
        'title': 'Tasks',
        height: 500,
        width: '100%',
        pieHole: 0.4
      },
    };
  }
  loadExplodedChart() {
    this.explodedChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      //opt_firstRowIsData: true,
      options: {
        'title': 'Tasks',
        height: 500,
        width: '100%',
        slices: {
          1: { offset: 0.3 },
          2: { offset: 0.2 },
          3: { offset: 0.3 },
          4: { offset: 0.1 },
        },
      }
    }
  }

}
