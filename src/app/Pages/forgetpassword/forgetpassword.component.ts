import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../Service/Form/form.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  mail : string
  constructor(private router:Router,
              public formService:FormService,
              private webRequest:WebRequestService,
              private tokenStorage:TokenstorageService) { }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigateByUrl("")
  }

  submit() {
    const body = {email : this.mail , type:"reset-password"}
    localStorage.setItem("type_token","reset-password")
    this.webRequest.post("auth/send-otp",body).subscribe(
      data => {
        this.tokenStorage.saveOtpToken(data.body["otp_token"])
        this.router.navigateByUrl("/verify")
      },
      error => console.error(error)
    )
  }
}
