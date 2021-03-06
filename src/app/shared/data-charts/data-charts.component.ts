import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent implements OnInit{

  @Input() data: any[];
  @Input() class;
  properties = [];
  loading = true;

  ngOnInit(): void {
    this.properties = Object.keys(this.data[0]);
    this.loading = false;
  }

}
