import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelLayoutComponent} from './layout/panel-layout/panel-layout.component';
import {DashboardComponent} from './panel/dashboard/dashboard.component';
import {NeuralNetworkComponent} from './panel/neural-network/neural-network.component';
import {DecisionTreeComponent} from './panel/decision-tree/decision-tree.component';
import {DataChartsComponent} from './shared/data-charts/data-charts.component';
import {NaiveBayesComponent} from './panel/naive-bayes/naive-bayes.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: '', component: PanelLayoutComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'neural-network', component: NeuralNetworkComponent},
      {path: 'decision-tree', component: DecisionTreeComponent},
      {path: 'naive-bayes', component: NaiveBayesComponent},
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
