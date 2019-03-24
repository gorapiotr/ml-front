import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelLayoutComponent} from './panel-layout/panel-layout.component';
import {RouterModule} from '@angular/router';
import { PanelHeaderComponent } from './panel-header/panel-header.component';

@NgModule({
  declarations: [
    PanelLayoutComponent,
    PanelHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PanelHeaderComponent
  ]
})
export class LayoutModule {
}
