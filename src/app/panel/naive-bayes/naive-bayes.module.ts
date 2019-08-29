import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';
import {NaiveBayesComponent} from './naive-bayes.component';

@NgModule({
  declarations: [
    NaiveBayesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class NaiveBayesModule { }
