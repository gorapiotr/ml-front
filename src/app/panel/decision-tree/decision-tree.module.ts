import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecisionTreeComponent} from './decision-tree.component';
import {LayoutModule} from '../../layout/layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DecisionTreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class DecisionTreeModule {
}