import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NeuralNetworkComponent} from './neural-network.component';
import {LayoutModule} from '../../layout/layout.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    NeuralNetworkComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
  ]
})
export class NeuralNetworkModule {
}
