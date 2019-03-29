import {Component, OnInit} from '@angular/core';
import {NeuralNetwork, NeuralNetworkConfig} from './utils/neural-network';

@Component({
  selector: 'app-neural-network',
  templateUrl: './neural-network.component.html',
  styleUrls: ['./neural-network.component.scss']
})
export class NeuralNetworkComponent implements OnInit {

  data: any;
  config: NeuralNetworkConfig;

  constructor() {
  }

  ngOnInit() {
  }

  loadFile(event: any) {
    this.data = event;
    //display data properties
  }

  setUpProperties(event: any) {
    this.config = event;
    this.train();
  }

  train() {
    //neural network
    const neuralNetwork = new NeuralNetwork(this.config, this.data);
    neuralNetwork.trainData();
  }
}
