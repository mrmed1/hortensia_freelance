import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {ForgetpasswordComponent} from "./Pages/forgetpassword/forgetpassword.component";
import {SignupComponent} from "./Pages/signup/signup.component";
import {SignupSSOComponent} from "./Pages/signup-sso/signup-sso.component";
import {VerifyforgetpasswordComponent} from "./Pages/verifyforgetpassword/verifyforgetpassword.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";
import {GraphComponent} from "./Pages/graph/graph.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path:"forget",component:ForgetpasswordComponent},
  {path:"signup",component:SignupComponent},
  {path:"sso",component:SignupSSOComponent},
  {path:"verify",component:VerifyforgetpasswordComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"graph",component:GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
