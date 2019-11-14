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
import {NaiveBayesModule} from './panel/naive-bayes/naive-bayes.module';
import {IrisExampleModule} from './panel/iris-example/iris-example.module';
import {DiabetesExampleModule} from './panel/diabetes-example/diabetes-example.module';
import {DemoModule} from './panel/demo/demo.module';

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

    DemoModule,
    IrisExampleModule,
    DiabetesExampleModule,
    DashboardModule,
    NeuralNetworkModule,
    DecisionTreeModule,
    NaiveBayesModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
