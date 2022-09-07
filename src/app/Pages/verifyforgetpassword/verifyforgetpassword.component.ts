import {Component, OnInit} from '@angular/core';
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

  constructor(private router: Router,
              public formService: FormService,
              private webRequest: WebRequestService,
              private tokenStorage: TokenstorageService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {

  }


  submit() {
    const verify = {"validation_token": this.tokenStorage.getOTPToken()}
    if (this.tokenStorage.tokenExpired(this.tokenStorage.getOTPToken())) {
      this.notificationService.warn("veuillez renvoyer le code")
      this.router.navigateByUrl("/forget")
    } else {
      if (localStorage.getItem("type_token") == 'reset-password') {
        this.webRequest.post("auth/validate-otp", {
          "otp": this.code,
          "otp_token": this.tokenStorage.getOTPToken()
        }).subscribe(data => {
            if (data.status == 200)
              console.log(data.body["validation_token"])
              localStorage.setItem("validation_token",data.body["validation_token"])
              this.router.navigateByUrl("/reset");
          },
          error => console.log(error)
        )
      } else if (localStorage.getItem("type_token") == 'mail-verification') {

        this.webRequest.post("auth/mail-verify", verify).subscribe(
          data => {
            {
              this.notificationService.success("Vérification de votre compte est effectué avec succès")
              this.router.navigateByUrl("")
            }
          },
          error => console.error(error)
        )
      }
    }

  }
}
