import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryPGService),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AuthenticationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
