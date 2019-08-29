import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-class-chart',
  templateUrl: './class-chart.component.html',
  styleUrls: ['./class-chart.component.scss']
})
export class ClassChartComponent implements OnInit{

  loading = true;
  @Input() class;
  @Input() data: any;

  pieChartLabels: Label[];
  pieChartData: SingleDataSet;
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [pluginDataLabels];
    pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
      },
    }
  };

  ngOnInit() {
    this.initChartData();
  }

  initChartData() {
    const counter = [];
    this.data
      .map((val) => val[this.class])
      .forEach((obj) => {
        const key = JSON.stringify(obj);
        counter[key] = (counter[key] || 0) + 1;
      });
    this.pieChartLabels = Object.keys(counter);
    this.pieChartData = Object.values(counter);
    this.loading = false;
  }
}
