import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { VerifyforgetpasswordComponent } from './verifyforgetpassword/verifyforgetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { SignupSSOComponent } from './signup-sso/signup-sso.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    VerifyforgetpasswordComponent,
    SignupComponent,
    SignupSSOComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
