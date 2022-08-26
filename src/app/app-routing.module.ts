import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgetpasswordComponent} from "./forgetpassword/forgetpassword.component";
import {SignupComponent} from "./signup/signup.component";
import {SignupSSOComponent} from "./signup-sso/signup-sso.component";
import {VerifyforgetpasswordComponent} from "./verifyforgetpassword/verifyforgetpassword.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path:"forget",component:ForgetpasswordComponent},
  {path:"signup",component:SignupComponent},
  {path:"sso",component:SignupSSOComponent},
  {path:"verify",component:VerifyforgetpasswordComponent},
  {path:"dashboard",component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
