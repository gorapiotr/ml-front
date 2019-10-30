import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data: any;
  loading = true;
  page = 1;
  pageSize = 50;
  collectionSize: number;

  constructor() {
  }

  ngOnInit() {
    this.collectionSize = this.data.length;
    this.loading = false;
  }

  getData(): any {
    return this.data
      .map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
