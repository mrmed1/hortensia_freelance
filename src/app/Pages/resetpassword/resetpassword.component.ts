import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {Router} from "@angular/router";
import {FormService} from "../../Service/Form/form.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private webRequest: WebRequestService,
              private tokenStorage: TokenstorageService,
              private router: Router,
              public formService:FormService) {
  }


  ngOnInit(): void {
  }

  submit() {
    if (this.formService.ConfirmPassword.valid) {
    const body = {"validation_token":this.tokenStorage.getOTPToken(),"new_password":this.formService.Password.value}
      this.webRequest.post("auth/reset-password",body).subscribe(
        data => this.router.navigateByUrl("dashboard"),
        error => console.log(error)
      )
    }
  }
}



