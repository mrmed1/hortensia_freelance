import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private webRequest: WebRequestService,
              private tokenStorage: TokenstorageService,
              private router: Router) {
  }

  formGroup = this.fb.group({
    Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    ConfirmPassword: ['', [Validators.required]],
  }, {validator: this.passwordMatchValidator('Password', 'ConfirmPassword')});


  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: any) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  get Password() {
    return this.formGroup.get('Password');
  }

  get ConfirmPassword() {
    return this.formGroup.get('ConfirmPassword');
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.formGroup.valid) {
    const body = {"validation_token":this.tokenStorage.getOTPToken(),"new_password":this.Password.value}
      this.webRequest.post("auth/reset-password",body).subscribe(
        data => this.router.navigateByUrl("dashboard"),
        error => console.log(error)
      )
    }
  }
}



