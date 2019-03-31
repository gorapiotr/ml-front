import {Component, OnInit} from '@angular/core';
import {NeuralNetwork, NeuralNetworkConfig} from './utils/neural-network';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-neural-network',
  templateUrl: './neural-network.component.html',
  styleUrls: ['./neural-network.component.scss']
})
export class NeuralNetworkComponent implements OnInit {

  consoleInfo: string[] = [];
  private eventsSubject: BehaviorSubject<string> = new BehaviorSubject<string>();
  data: any;
  config: NeuralNetworkConfig;

  constructor() {
  }

  ngOnInit() {
  }

  loadFile(event: any) {
    this.data = event;
    this.eventsSubject.next('Data loaded');
  }

  setUpProperties(event: any) {
    this.config = event;
    this.train();
  }

  train() {
    //neural network
    const neuralNetwork = new NeuralNetwork(this.config, this.data);
    neuralNetwork.trainData();

    neuralNetwork.getTrainSubject().subscribe((data) => {
      this.eventsSubject.next(data);
    });
  }
}
