import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-properties-chart',
  templateUrl: './properties-chart.component.html',
  styleUrls: ['./properties-chart.component.scss']
})
export class PropertiesChartComponent implements OnInit {

  loading = true;

  @Input() data: any;
  @Input() properties: string[];

  selectedProperty: string;


  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];
  barChartData: ChartDataSets[];

  constructor() {
  }

  ngOnInit() {
    this.selectedProperty = this.properties[0];
    this.initChartData();
  }

  initChartData() {
    const counter = [];
    this.data
      .map((val) => val[this.selectedProperty])
      .forEach((obj) => {
        const key = JSON.stringify(obj);
        counter[key] = (counter[key] || 0) + 1;
      });

    this.barChartLabels = Object.keys(counter);
    this.barChartData = [
      {data: Object.values(counter), label: this.selectedProperty},
    ];
    this.loading = false;
  }

  changeProperty(property: string) {
    this.selectedProperty = property;
    this.initChartData();
  }
}
