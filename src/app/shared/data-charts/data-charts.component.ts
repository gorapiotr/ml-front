import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent {

  @Input() class = 'species';
  @Input() data: any;
  @Input() properties = ['sepalLength', 'sepalWidth', 'petalLength', 'petalWidth'];
}
