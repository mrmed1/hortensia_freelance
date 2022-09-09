import {Component, OnInit, Renderer2} from '@angular/core';
import {FormService} from "../../../../Service/Form/form.service";
import {WebRequestService} from "../../../../Service/Webrequest/web-request.service";
import {NotificationService} from "../../../../Service/Notification/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private renderer: Renderer2,
              public formService: FormService,
              private webRequest : WebRequestService,
              private notificationService: NotificationService,
              private router: Router
  ) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }

  ngOnInit(): void {
  }

  submit() {

    const body = {
      "full_name": this.formService.Fullname.value,
      "date_format": this.formService.date_format.value,
      "language": this.formService.Language.value,
      "current_password": this.formService.CurrentPassword.value,
      "new_password": this.formService.Password.value
    }
    this.webRequest.put("users",body).subscribe(
      data => {
        console.log(data)
        this.notificationService.success("Modification du compte est effectué avec succès")
        this.router.navigateByUrl("dashboard")

      },
      error => console.error(error)
    )
  }
}
