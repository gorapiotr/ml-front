import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFileComponent} from './forms/input-file/input-file.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataChartsComponent } from './data-charts/data-charts.component';
import {ChartsModule} from 'ng2-charts';
import { ClassChartComponent } from './data-charts/class-chart/class-chart.component';
import { PropertiesChartComponent } from './data-charts/properties-chart/properties-chart.component';

@NgModule({
  declarations: [
    InputFileComponent,
    //DataCharts
    DataChartsComponent,
    ClassChartComponent,
    PropertiesChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports: [
    InputFileComponent,
    //DataCharts
    DataChartsComponent,
    ClassChartComponent,
    PropertiesChartComponent
  ]
})
export class SharedModule { }
