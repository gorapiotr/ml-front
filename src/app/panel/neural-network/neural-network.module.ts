import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NeuralNetworkComponent} from './neural-network.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [
    NeuralNetworkComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class NeuralNetworkModule {
}
