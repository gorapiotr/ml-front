import {Observable, Subject} from 'rxjs';

const tf = require('@tensorflow/tfjs');

export class NeuralNetwork {

  config: NeuralNetworkConfig;
  data: any;
  private _model: any;
  classes: [];

  trainSubject: Subject<string> = new Subject<string>();
  testSubject: Subject<any> = new Subject<any>();

  constructor(configuration: NeuralNetworkConfig, data: any) {
    this.config = configuration;
    this.data = data;
    this._model = this.initModel();
  }

  getTrainSubject(): Observable<string> {
    return this.trainSubject;
  }

  getTestSubject(): Observable<any> {
    return this.testSubject;
  }

  get trainingData() {
    return tf.tensor2d(this.getPropertiesAsValues(
      this.data.slice(0, this.config.trainGroup)),
      [this.config.trainGroup, this.config.trainingProperties.length]);
  }

  getPropertiesAsValues(data: any) {
    return data.map((item) => {
        return this.config.trainingProperties.map((prop) => {
          return item[prop];
        });
      }
    );
  }

  get testData() {
    return tf.tensor2d(this.getPropertiesAsValues(
      this.data.slice(this.config.trainGroup)),
      [this.config.testGroup, this.config.trainingProperties.length]);
  }


  get outputData() {

    const tensorData = this.data.slice(0, this.config.trainGroup).map(item => {
      let array = Array.from({length: this.classes.length}, (v, k) => 0);
      array[this.classes.indexOf(item[this.config.predictClass])]  = 1;
      return array;
    });

    console.log(tensorData);
    return tf.tensor2d(tensorData, [this.config.trainGroup, this.classes.length]);
  }

  getClasses() {
    let pred = {};

    this.data.slice(0, this.config.trainGroup).map((item) => {
      return item[this.config.predictClass];
    }).forEach((x) => {
      pred[x] = (pred[x] || 0) + 1;
    });

    return Object.keys(pred);
  }

  get model() {
    return this._model;
  }

  initModel() {
    this.classes = this.getClasses();
    const model = tf.sequential();


    model.add(tf.layers.dense(
      {
        inputShape: this.config.trainingProperties.length,
        activation: 'sigmoid',
        units: 10
      }
    ));

    model.add(tf.layers.dense(
      {
        inputShape: 10,
        units: this.classes.length,
        activation: 'sigmoid'
      }
    ));

    model.summary();

    model.compile({
      loss: 'categoricalCrossentropy',
      optimizer: tf.train.adam()
    });

    return model;
  }

  async trainData() {
    for (let i = 0; i < 5; i++) {
      if (i === 0) {
        this.trainSubject.next('......Loss History.......');
      }
      this.initModel();
      const res = await this.model.fit(this.trainingData, this.outputData, {epochs: 5});
      this.trainSubject.next(`Iteration ${i}: ${res.history.loss[0]}`);
    }

    this.runTestData();
  }

  runTestData() {
    const predict = this.model.predict(this.testData).arraySync();

    const tested = this.data.slice(this.config.trainGroup).map((item, index) => {
      console.log(predict[index]);
      const classIndex = predict[index].indexOf(Math.max(...predict[index]));
      item['result'] = this.classes[classIndex];
      console.log(item);
      return item;
    });

    this.testSubject.next(tested);
  }
}

export interface NeuralNetworkConfig {
  trainingProperties: string[];
  predictClass: string;
  trainGroup: number;
  testGroup: number;
}
