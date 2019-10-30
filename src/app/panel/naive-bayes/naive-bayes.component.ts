import {Component, OnInit} from '@angular/core';
import {NeuralNetworkConfig} from '../neural-network/utils/neural-network';

@Component({
  selector: 'app-naive-bayes',
  templateUrl: './naive-bayes.component.html',
  styleUrls: ['./naive-bayes.component.scss']
})
export class NaiveBayesComponent implements OnInit {

  data: any;

  pred = {};
  config: NeuralNetworkConfig;
  testResults: any;
  result: 'result';


  ngOnInit() {
  }

  setUpProperties(event: any) {
    this.config = event;

    this.train();
  }

  loadFile(event: any) {
    this.data = event;
  }

  train() {

    this.pred = {};

    this.data.slice(0, this.config.trainGroup).map((item) => {
      return item[this.config.predictClass];
    }).forEach((x) => {
      this.pred[x] = (this.pred[x] || 0) + 1;
    });

    Object.keys(this.pred).forEach((item) => {
      this.pred[item] = {value: this.pred[item]};
      Object.keys(this.data[0]).forEach((key) => {
        if (key != this.config.predictClass) {
          this.pred[item][key] = {};
        }
      });
    });

    console.log(this.data.slice(0, this.config.trainGroup));
    this.data.slice(0, this.config.trainGroup).forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key != this.config.predictClass) {
          this.pred[item[this.config.predictClass]][key][item[key]] = (this.pred[item[this.config.predictClass]][key][item[key]] || 0) + 1;
        }
      });
    });

    Object.keys(this.pred).forEach((cl) => {
      Object.keys(this.pred[cl]).forEach((pr) => {
        Object.keys(this.pred[cl][pr]).forEach((res) => {
          if (res != 'value') {
            this.pred[cl][pr][res] = this.pred[cl][pr][res] / this.pred[cl].value;
          }
        });
      });
    });

    console.log(this.pred);

    this.prediction();
  }

  computeResult(object: any) {

    let predictions = {};

    Object.keys(this.pred).forEach((item) => {
      predictions[item] = {};
      Object.keys(object).forEach((key) => {
        if (key != this.config.predictClass) {
          predictions[item][key] = {};
        }
      });
    });

    Object.keys(predictions).forEach((item) => {
      Object.keys(object).forEach((key) => {
        if (key != this.config.predictClass) {
          predictions[item][key] = this.pred[item][key][object[key]];
        }
      });
    });


    Object.keys(predictions).forEach((item) => {
      predictions[item].px = Object.values(predictions[item]).reduce((x: any, y:any ) => x * y);

      predictions[item].value = predictions[item].px * this.pred[item].value / this.data.slice(0, this.config.trainGroup).length;

      if (isNaN(predictions[item].value)) {
        predictions[item].value = 0;
      }
    });


    const sum = 0;
    Object.keys(predictions).forEach((item) => {
      sum += predictions[item].value;
    });

    if (sum == 0) {
      Object.keys(predictions).forEach((item) => {
        let rep = {}
        Object.values(predictions[item]).forEach(function (x) {
          rep[x] = (rep[x] || 0) + 1;
        });
        predictions[item].value = 1 / rep['undefined'];
      });
    }

    const result = Object.keys(predictions).reduce((a, b) => predictions[a].value > predictions[b].value ? a : b);

    return result;
  }

  prediction() {
    this.testResults = this.data.slice(this.config.trainGroup, this.data.length).map((item) => {
      item['result'] = this.computeResult(item);
      return item;
    });
  }

}
