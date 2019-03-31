import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputFileComponent} from './forms/input-file/input-file.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataChartsComponent} from './data-charts/data-charts.component';
import {ChartsModule} from 'ng2-charts';
import {ClassChartComponent} from './data-charts/class-chart/class-chart.component';
import {PropertiesChartComponent} from './data-charts/properties-chart/properties-chart.component';
import {DataTableComponent} from './data-table/data-table.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { OutputConsoleComponent } from './output-console/output-console.component';

@NgModule({
  declarations: [
    InputFileComponent,
    DataChartsComponent,
    ClassChartComponent,
    PropertiesChartComponent,
    DataTableComponent,
    OutputConsoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbPaginationModule
  ],
  exports: [
    InputFileComponent,
    DataChartsComponent,
    ClassChartComponent,
    PropertiesChartComponent,

    DataTableComponent,
    OutputConsoleComponent
  ]
})
export class SharedModule {
}
