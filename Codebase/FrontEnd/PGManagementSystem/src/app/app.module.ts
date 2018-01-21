import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatTableModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
// Import owncomponents here
import { AppComponent } from './app.component';
import { LoginComponent } from './user/components/login/login.component';
import { appRoutes } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPGService } from './inMemory.web.api';
import { AuthenticationService } from './share/service/authentication.service';
import { LoginService } from './user/service/login.service';
import { DashboardComponent } from './dashboardmodule/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountToModule } from 'angularx-count-to';
import { DashboardService } from './dashboardmodule/services/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryPGService),
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    CountToModule,
  ],
  providers: [
    AuthenticationService,
    LoginService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
