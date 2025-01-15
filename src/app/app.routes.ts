import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
];

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'analytics', component: AnalyticsComponent },
//   { path: 'user-management', component: UserManagementComponent },
//   { path: 'reports', component: ReportsComponent },
//   { path: 'settings', component: SettingsComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
