import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Pages/login/login.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { VerifyforgetpasswordComponent } from './Pages/verifyforgetpassword/verifyforgetpassword.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SignupSSOComponent } from './Pages/signup-sso/signup-sso.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { GraphComponent } from './Pages/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    VerifyforgetpasswordComponent,
    SignupComponent,
    SignupSSOComponent,
    DashboardComponent,
    GraphComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
