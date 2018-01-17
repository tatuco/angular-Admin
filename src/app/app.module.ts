import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import { StatusComponent } from './components/status/status.component';
import { LoginRedirect } from './services/login-redirect.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service';
import { LogoutComponent } from './components/logout/logout.component';
import {AppRoutes} from './app.routing';
import { BodyComponent } from './components/body/body.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    LogoutComponent,
    BodyComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    LoginRedirect,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
