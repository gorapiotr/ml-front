import {Component, OnInit} from '@angular/core';
import {NeuralNetwork} from './utils/neural-network';

@Component({
  selector: 'app-neural-network',
  templateUrl: './neural-network.component.html',
  styleUrls: ['./neural-network.component.scss']
})
export class NeuralNetworkComponent implements OnInit {

  data: any;
  trainingData: any;
  testData: any;

  constructor() {
  }

  ngOnInit() {
  }

  loadFile(event: any) {
    this.data = event;

    //neural network
    const neuralNetwork = new NeuralNetwork();
    [this.trainingData, this.testData] = [neuralNetwork.createTrainingData(this.data), neuralNetwork.createTestData(this.data)];
    const model = neuralNetwork.createModel();
    neuralNetwork.trainData(model, neuralNetwork.createOutputData(this.data), this.trainingData, this.testData);

    //display data properties
  }

  setUpProperties(event: any) {
    console.log(event);
  }
}
