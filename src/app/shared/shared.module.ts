import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFileComponent} from './forms/input-file/input-file.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InputFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputFileComponent
  ]
})
export class SharedModule { }
