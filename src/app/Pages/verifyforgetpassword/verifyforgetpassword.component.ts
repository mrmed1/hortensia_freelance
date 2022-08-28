import { Component, OnInit } from '@angular/core';
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {Router} from "@angular/router";
import {FormService} from "../../Service/Form/form.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {NotificationService} from "../../Service/Notification/notification.service";

@Component({
  selector: 'app-verifyforgetpassword',
  templateUrl: './verifyforgetpassword.component.html',
  styleUrls: ['./verifyforgetpassword.component.css']
})
export class VerifyforgetpasswordComponent implements OnInit {
  code: string
  constructor(private router : Router,
              public formService:FormService,
              private webRequest:WebRequestService,
              private tokenStorage:TokenstorageService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    /*if (this.tokenExpired("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MTU2NTQwNywianRpIjoiMjA3YjA4YzUtMTlhMi00YTFlLTliMDItNjhkY2ZmN2M1M2M4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzMDk3OWRmMTk5YWM4ZDM5YWRmYWY0ZSIsIm5iZiI6MTY2MTU2NTQwNywiZXhwIjoxNjYxNTY1NTI3LCJvdHAiOiIkMmIkMTIkQXRnRmRmLnZsREZycWkwMmJtWlB0dTlSc0cyNUVuaWNUcjBqRWJSYUVIVTJFMnRMSVVuOU8ifQ.sdfgKI26p0WyxYS6GtzLmsVFMKm6ZUZKVbsQmoRYu08")) {
      // token expired
      console.log("expired")
    } else {
      console.log("no expired")
    }*/
  }


  submit() {
    const verify = {  "otp_token": this.tokenStorage.getOTPToken(),"otp": this.code}
    this.webRequest.post("auth/mail-verify",verify).subscribe(
      data => {
        if(data.status == 200)
          this.notificationService.success("Vérification de votre compte est effectué avec succès")
          this.router.navigateByUrl("")
      },
      error => console.error(error)
    )
  }
}
