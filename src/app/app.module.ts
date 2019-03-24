import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardModule} from './panel/dashboard/dashboard.module';
import {LayoutModule} from './layout/layout.module';
import {NeuralNetworkModule} from './panel/neural-network/neural-network.module';
import {DecisionTreeModule} from './panel/decision-tree/decision-tree.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    DashboardModule,
    NeuralNetworkModule,
    DecisionTreeModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
