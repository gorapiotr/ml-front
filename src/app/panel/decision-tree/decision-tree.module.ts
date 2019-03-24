import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecisionTreeComponent} from './decision-tree.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [
    DecisionTreeComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class DecisionTreeModule {
}