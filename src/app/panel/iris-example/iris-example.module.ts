import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IrisExampleComponent} from './iris-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [   IrisExampleComponent],
    imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LayoutModule,
  SharedModule,
  ]
})
export class IrisExampleModule { }
