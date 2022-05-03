import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';

import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { AuthComponent } from '../auth/auth.component';


const routes: Routes = [
    {
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'blocksfound', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'processednames', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'voters', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'API', loadChildren: '../API/API.module#APIModule' },
        { path: '', component: DashboardCrmComponent },
        { path: '**', redirectTo: '/dashboard' },
    ]
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
