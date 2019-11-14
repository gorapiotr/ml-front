import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule
  ]
})
export class DemoModule { }
