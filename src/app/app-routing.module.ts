import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelLayoutComponent} from './layout/panel-layout/panel-layout.component';
import {DashboardComponent} from './panel/dashboard/dashboard.component';
import {NeuralNetworkComponent} from './panel/neural-network/neural-network.component';
import {DecisionTreeComponent} from './panel/decision-tree/decision-tree.component';
import {NaiveBayesComponent} from './panel/naive-bayes/naive-bayes.component';
import {IrisExampleComponent} from './panel/iris-example/iris-example.component';
import {DiabetesExampleComponent} from './panel/diabetes-example/diabetes-example.component';
import {DemoComponent} from './panel/demo/demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '', component: PanelLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'neural-network', component: NeuralNetworkComponent},
      {path: 'decision-tree', component: DecisionTreeComponent},
      {path: 'naive-bayes', component: NaiveBayesComponent},
      {path: 'example-iris', component: IrisExampleComponent},
      {path: 'example-diabetes', component: DiabetesExampleComponent},
      {path: 'demo', component: DemoComponent},

    ]
  },
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
