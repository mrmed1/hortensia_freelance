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
import { GraphComponent } from './Pages/charts/graph/graph.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LogoComponent } from './Utils/logo/logo.component';

import {ChartsModule} from "ng2-charts";
import { RafinputsectionComponent } from './Pages/dashboard/rafinputsection/rafinputsection.component';
import { SigmoidinputsectionComponent } from './Pages/dashboard/sigmoidinputsection/sigmoidinputsection.component';
import { ChecksubscriptionComponent } from './Pages/dashboard/checksubscription/checksubscription.component';
import { SettingsComponent } from './Pages/dashboard/MySettings/settings/settings.component';
import { SubscriptionComponent } from './Pages/dashboard/MySettings/subscription/subscription.component';
import { SidebarComponent } from './Pages/dashboard/MySettings/sidebar/sidebar.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';


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
    LogoComponent,

    RafinputsectionComponent,
    SigmoidinputsectionComponent,
    ChecksubscriptionComponent,
    SettingsComponent,
    SubscriptionComponent,
    SidebarComponent,
    ResetpasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatSnackBarModule,
    ChartsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
