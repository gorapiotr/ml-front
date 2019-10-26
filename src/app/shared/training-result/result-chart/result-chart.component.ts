import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Label, SingleDataSet} from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.scss']
})
export class ResultChartComponent implements OnInit, OnChanges {

  loading = true;
  @Input() class;
  @Input() data: any;
  correctAnswers;

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
    //this.initChartData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.initChartData();
    }
  }

  initChartData() {
    this.correctAnswers = this.data.filter((item) => {
      return item.result == item[this.class];
    }).length;

    this.pieChartLabels = ['Wrong', 'Correct'];
    this.pieChartData = [this.data.length - this.correctAnswers, this.correctAnswers];
    this.loading = false;
  }
}
