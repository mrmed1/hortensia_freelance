import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formGroup = this.fb.group({
    id: [null],
    Fullname: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    Email: ['', [Validators.email, Validators.required]],

  });

  chartform = this.fbchart.group({

    inputDataDate: ['', Validators.required],
    nbOfMonthsPassed: ['', Validators.required],
    donePercentage: ['', Validators.required],
    rapidSetting: ['', Validators.required],
    mu: ['', Validators.required],
    sig: ['', Validators.required],
    sigAdjustor: ['', Validators.required],
    selectjourmois: ['', Validators.required],

  });

  constructor(private fb: FormBuilder,
              private fbchart: FormBuilder) {
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

  get Email() {
    return this.formGroup.get('Email');
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
}
