import { Component, OnInit } from '@angular/core';
import {FormService} from "../../../Service/Form/form.service";

import * as $ from 'jquery'
@Component({
  selector: 'app-rafinputsection',
  templateUrl: './rafinputsection.component.html',
  styleUrls: ['./rafinputsection.component.css']
})
export class RafinputsectionComponent implements OnInit {
  offsetValue = 0.33;
  tangenteValue= 5.46;
  constructor(public formService: FormService) { }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  changeoffset(e) {
    this.offsetValue = e.target.value;
  }

  changeTangente(e) {
    this.tangenteValue = e.target.value;
  }
}
