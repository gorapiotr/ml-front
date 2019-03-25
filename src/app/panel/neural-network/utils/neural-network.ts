const tf = require('@tensorflow/tfjs');

export class NeuralNetwork {

  config: NeuralNetworkConfig;
  data: any;
  private _model: any;

  constructor(config: NeuralNetworkConfig, data: any) {
    this.config = config;
    this.data = data;
    this._model = this.initModel();
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

  getTestData() {

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
    console.log('......Loss History.......');
    for (let i = 0; i < 30; i++) {
      const res = await this.model.fit(this.trainingData, this.outputData, {epochs: 30});
      console.log(`Iteration ${i}: ${res.history.loss[0]}`);
    }

    let predict = this.model.predict(this.testData).toString();

    console.log(predict);

    predict = JSON.parse(predict.replace('Tensor', '').substring(5));
  }
}

export interface NeuralNetworkConfig {
  trainingProperties: string[];
  predictClass: string;
  trainGroup: number;
  testGroup: number;
}