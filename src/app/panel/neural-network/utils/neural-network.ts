const tf = require('@tensorflow/tfjs');

export class NeuralNetwork {

  createTrainingData(data: any) {
    return tf.tensor2d(this.getTrainingData(data), [130, 4]);
  }

  getTrainingData(data: any) {
    return data.slice(0, 130).map(item => [
        item.sepalLength, item.sepalWidth, item.petalLength, item.petalWidth
      ]
    );
  }

  createTestData(data: any) {
    return tf.tensor2d(data.slice(130, data.length - 1).map(item => [
        item.sepalLength, item.sepalWidth, item.petalLength, item.petalWidth
      ]
    ), [19, 4]);
  }

  createOutputData(data) {
    return tf.tensor2d(data.slice(0, 130).map(item => [
      item.species === 'setosa' ? 1 : 0,
      item.species === 'virginica' ? 1 : 0,
      item.species === 'versicolor' ? 1 : 0

    ]), [130, 3]);
  }

  createModel() {
    const model = tf.sequential();


    model.add(tf.layers.dense(
      {
        inputShape: 4,
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

  async trainData(model: any, outputData: any, trainingData: any, testingData: any) {
    console.log('......Loss History.......');
    for (let i = 0; i < 5; i++) {
      const res = await model.fit(trainingData, outputData, {epochs: 5});
      console.log(`Iteration ${i}: ${res.history.loss[0]}`);
    }

    let predict = model.predict(testingData).toString();

    predict = JSON.parse(predict.replace('Tensor', '').substring(5));

    console.log(predict);
  }
}
