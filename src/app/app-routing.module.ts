import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelLayoutComponent} from './layout/panel-layout/panel-layout.component';
import {DashboardComponent} from './panel/dashboard/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: '', component: PanelLayoutComponent, children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'neural-network', component: DashboardComponent},
            {path: 'decision-tree', component: DashboardComponent}
        ]
    },
    // {path:'**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
