import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NeuralNetworkConfig} from '../neural-network/utils/neural-network';

declare var dt: any;

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DecisionTreeComponent implements OnInit {

  data: any;
  config: NeuralNetworkConfig;
  decisionTree: any;
  testResults: any;

  ngOnInit() {
  }

  treeToHtml(tree) {
    // only leafs containing category
    if (tree.category) {
      return ['<ul>',
        '<li>',
        '<a href="#">',
        '<b>', tree.category, '</b>',
        '</a>',
        '</li>',
        '</ul>'
      ].join('');
    }

    return ['<ul>',
      '<li>',
      '<a href="#">',
      '<b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b>',
      '</a>',
      '<ul>',
      '<li>',
      '<a href="#">yes</a>',
      this.treeToHtml(tree.match),
      '</li>',
      '<li>',
      '<a href="#">no</a>',
      this.treeToHtml(tree.notMatch),
      '</li>',
      '</ul>',
      '</li>',
      '</ul>'
    ].join('');

  }

  setUpProperties(event: any) {
    this.config = event;
    this.train();
  }

  loadFile(event: any) {
    this.data = event;
  }

  train() {

    const config = {
      trainingSet: this.data.slice(0, this.config.trainGroup),
      categoryAttr: this.config.predictClass,
      ignoredAttributes: []
    };

    this.decisionTree = new dt.DecisionTree(config);

    document.getElementById('displayTree').innerHTML = this.treeToHtml(this.decisionTree.root);
    this.prediction();
  }

  prediction() {
    this.testResults =  this.data.slice(this.config.trainGroup, this.data.length).map( (item) => {
      item['result'] = this.decisionTree.predict(item);
      return item;
    });
  }
}
