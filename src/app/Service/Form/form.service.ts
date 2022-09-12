import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formGroup = this.fb.group({
    Fullname: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    Email: ['', [Validators.email, Validators.required]],
    ConfirmPassword: ['', [Validators.required]],
    CurrentPassword: ['', [Validators.required]],
    Language: ['English', [Validators.required]],
    date_format: ['dd/mm/yyyy', [Validators.required]],
  }, {validator: this.passwordMatchValidator('Password', 'ConfirmPassword')});

  chartform = this.fbchart.group({

    inputDataDate: ['', Validators.required],
    nbOfMonthsPassed: ['', Validators.required],
    donePercentage: ['', Validators.required],
    rapidSetting: [''],
    mu: ['3.22', Validators.required],
    sig: ['0.33', Validators.required],
    datefin:['datefincalculer'],
    sigAdjustor: [''],
    selectjourmois: [''],


  });

  chartTypeForm = this.fb.group({
    chartType: ['enPourcent']
  })
  /*profileform = this.Profileform.group({

    Language: ['english', [Validators.required]],
    date_format: ['', [Validators.required]]

  });*/

  constructor(private fb: FormBuilder,
              private fbchart: FormBuilder,
              private Profileform: FormBuilder) {
  }

  get id() {
    return this.formGroup.get('id');
  }

  get Fullname() {
    return this.formGroup.get('Fullname');
  }

  get Password() {
    return this.formGroup.get('Password');
  }

  get ConfirmPassword() {
    return this.formGroup.get('ConfirmPassword');
  }

  get date_format() {
    return this.formGroup.get('date_format');
  }

  get CurrentPassword() {
    return this.formGroup.get('CurrentPassword');
  }

  get Email() {
    return this.formGroup.get('Email');
  }

  get Language() {
    return this.formGroup.get('Language');
  }

  get inputDataDate() {
    return this.chartform.get('inputDataDate');
  }

  get nbOfMonthsPassed() {
    return this.chartform.get('nbOfMonthsPassed');
  }

  get donePercentage() {
    return this.chartform.get('donePercentage');
  }

  get mu() {
    return this.chartform.get('mu');
  }

  get sig() {
    return this.chartform.get('sig');
  }
  get chartType() {
    return this.chartTypeForm.get('chartType');
  }

  get sigAdjustor() {
    return this.chartform.get('sigAdjustor');
  }

  get rapidSetting() {
    return this.chartform.get('rapidSetting');
  }

  get selectjourmois() {
    return this.chartform.get('selectjourmois');
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

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
}
