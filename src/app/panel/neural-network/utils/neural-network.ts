import {BehaviorSubject, config, Observable, Subject} from 'rxjs';

const tf = require('@tensorflow/tfjs');

export class NeuralNetwork {

  config: NeuralNetworkConfig;
  data: any;
  private _model: any;

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
    return tf.tensor2d(this.data.slice(0, this.config.trainGroup).map(item => [
      item.species === 'setosa' ? 1 : 0,
      item.species === 'virginica' ? 1 : 0,
      item.species === 'versicolor' ? 1 : 0

    ]), [this.config.trainGroup, 3]);
  }

  get model() {
    return this._model;
  }

  initModel() {
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
        units: 3,
        activation: 'softmax'
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
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        this.trainSubject.next('......Loss History.......');
      }
      const res = await this.model.fit(this.trainingData, this.outputData, {epochs: 3});
      this.trainSubject.next(`Iteration ${i}: ${res.history.loss[0]}`);
    }

    this.runTestData();
  }

  runTestData() {
    const predictString = this.model.predict(this.testData).toString();

    const predict = JSON.parse(predictString.replace('Tensor', '').substring(5));
    this.trainSubject.next(predictString);
    this.testSubject.next(predict);
  }
}

export interface NeuralNetworkConfig {
  trainingProperties: string[];
  predictClass: string;
  trainGroup: number;
  testGroup: number;
}