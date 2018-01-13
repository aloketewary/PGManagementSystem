import { LoginComponent } from "./user/components/login/login.component";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboardmodule/components/dashboard/dashboard.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];