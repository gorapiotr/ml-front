import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class DashboardModule {
}
