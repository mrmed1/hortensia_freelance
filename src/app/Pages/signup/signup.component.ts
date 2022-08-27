import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../Service/form.service";
import {User} from "../../Models/user";
import {WebRequestService} from "../../Service/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  constructor(private router : Router,
              public formService:FormService,
              private webRequest:WebRequestService,
              private tokenStorage:TokenstorageService) { }

  ngOnInit(): void {
  }

  toSSO() {
    this.router.navigateByUrl("sso")
  }

  onSubmit() {
  this.user.full_name = this.formService.Fullname.value;
  this.user.email = this.formService.Email.value;
  this.user.password = this.formService.Password.value;
  this.webRequest.post("auth/register",this.user).subscribe(
    data => {
      console.log(data);
      this.tokenStorage.saveOtpToken(data.body["otp_token"])
      this.router.navigateByUrl("verify")

    },
    error => console.error(error)
  )

  }
}
