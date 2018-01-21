import { LoginComponent } from "./user/components/login/login.component";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboardmodule/components/dashboard/dashboard.component";
import { MembersComponent } from "./dashboardmodule/components/members/members.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'  },
      { path: 'home', component: DashboardComponent },
      { path: 'members', component: MembersComponent },
    ]
  },
];