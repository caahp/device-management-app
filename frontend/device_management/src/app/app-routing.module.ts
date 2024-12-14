import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';  
import { GithubProjectComponent } from './github-project/github-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'devices', component: DeviceManagementComponent },
  { path: 'categories', component: CategoryManagementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'github', component: GithubProjectComponent },
  { path: '', redirectTo: '/devices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
