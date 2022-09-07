import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {ForgetpasswordComponent} from "./Pages/forgetpassword/forgetpassword.component";
import {SignupComponent} from "./Pages/signup/signup.component";
import {SignupSSOComponent} from "./Pages/signup-sso/signup-sso.component";
import {VerifyforgetpasswordComponent} from "./Pages/verifyforgetpassword/verifyforgetpassword.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";
import {GraphComponent} from "./Pages/charts/graph/graph.component";
import {SubscriptionComponent} from "./Pages/dashboard/MySettings/subscription/subscription.component";
import {SettingsComponent} from "./Pages/dashboard/MySettings/settings/settings.component";
import {ResetpasswordComponent} from "./Pages/resetpassword/resetpassword.component";


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path:"forget",component:ForgetpasswordComponent},
  {path:"signup",component:SignupComponent},
  {path:"sso",component:SignupSSOComponent},
  {path:"verify",component:VerifyforgetpasswordComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"graph",component:GraphComponent},
  {path:"subscription",component:SubscriptionComponent},
  {path:"settings",component:SettingsComponent},
  {path:"reset",component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
