import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../Service/Form/form.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {FormControl, FormGroup} from "@angular/forms";
import {NotificationService} from "../../Service/Notification/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string
  mdp: string

  constructor(private router: Router,
              public formService: FormService,
              private webRequest: WebRequestService,
              private tokenStorage: TokenstorageService,
              private notificationservice:NotificationService) {
  }

  ngOnInit(): void {
  }


  submit() {

    const user = {email: this.formService.Email.value, password: this.formService.Password.value}
    console.log(user)
    this.webRequest.post("auth/login", user).subscribe(
      data => {
        if (data.status == 200)
        {
          localStorage.setItem("id_user", data.body["_id"]["$oid"])
          localStorage.setItem("auth-token",data.body["current_subscription"]["token"])
          this.router.navigateByUrl("dashboard")
        }

      },
      error => {
        this.notificationservice.warn(error.error.message)
        // console.log(error.status)
      }
    )
  }

}
