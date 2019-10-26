import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-confusion-matrix',
  templateUrl: './confusion-matrix.component.html',
  styleUrls: ['./confusion-matrix.component.scss']
})
export class ConfusionMatrixComponent implements OnInit, OnChanges {

  @Input() class;
  @Input() data: any;
  loading = true;
  correctAnswers = 0;
  showJSONData = false;

  historicalData: any[] = [];


  confusionMatrix: any[] = [[0, 0], [0, 0]];

  sensitivity = 0;
  specificity = 0 ;
  precision = 0;
  accuracy = 0;

  classes = ['tested_positive', 'tested_negative'];

  constructor() {
  }

  ngOnInit() {
    //this.compute();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.compute();
  }

  compute() {

    this.correctAnswers = this.data.filter((item) => {
      return item.result == item[this.class];
    }).length;

    this.confusionMatrix = [[0,0], [0,0]];

    this.data.map((item) => {
      switch(String(item[this.class]) + String(item['result'])) {
        case(this.classes[0] + this.classes[0]):
          this.confusionMatrix[0][0]++;
          break;
        case(this.classes[1] + this.classes[0]):
          this.confusionMatrix[0][1]++;
          break;
        case(this.classes[0] + this.classes[1]):
          this.confusionMatrix[1][0]++;
          break;
        case(this.classes[1] + this.classes[1]):
          this.confusionMatrix[1][1]++;
          break;
        default:
          break;
      }
    });

    const tp = this.confusionMatrix[0][0];
    const fn = this.confusionMatrix[0][1];
    const fp = this.confusionMatrix[1][0];
    const tn = this.confusionMatrix[1][1];

    const p = tp + fn;
    const n = fp + tn;

    this.sensitivity = tp / (tp + fn);
    this.specificity = tn / (tn + fp);
    this.precision = tp / (tp + fp);
    this.accuracy = (tp + tn) / (p + n);

    this.loading = false;

    this.historicalData.push(
      {
        wrong: this.data.length - this.correctAnswers,
        correct: this.correctAnswers,
        tp: tp,
        fp: fp,
        tn: tn,
        fn: fn
      });
  }

}
