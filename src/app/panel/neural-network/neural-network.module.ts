import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NeuralNetworkComponent} from './neural-network.component';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';
import { NeuralNetworkFormComponent } from './neural-network-form/neural-network-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NeuralNetworkComponent,
    NeuralNetworkFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
  ]
})
export class NeuralNetworkModule {
}
