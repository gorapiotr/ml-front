import {Component, Input, OnInit} from '@angular/core';
import {NeuralNetworkConfig} from '../../panel/neural-network/utils/neural-network';

@Component({
  selector: 'app-training-result',
  templateUrl: './training-result.component.html',
  styleUrls: ['./training-result.component.scss']
})
export class TrainingResultComponent implements OnInit {

  @Input() data: any;
  @Input() config: NeuralNetworkConfig;
  loading = true;
  page = 1;
  pageSize = 10;
  collectionSize: number;

  constructor() {
  }

  ngOnInit() {
    this.collectionSize = this.data.length;
    this.loading = false;
  }

  getData(): any {
    this.collectionSize = this.data.length;
    return this.data
      .map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
