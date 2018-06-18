import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'table', loadChildren: './table/table.module#TableModule' },
	{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
	{ path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
