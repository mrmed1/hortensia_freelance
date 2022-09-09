import {Component, OnInit, Output} from '@angular/core';
import {FormService} from "../../../Service/Form/form.service";
import * as $ from 'jquery'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sigmoidinputsection',
  templateUrl: './sigmoidinputsection.component.html',
  styleUrls: ['./sigmoidinputsection.component.css']
})
export class SigmoidinputsectionComponent implements OnInit {

  @Output() sendDataEvent = new EventEmitter<any>();
  offsetValue = 0.33;
  tangenteValue= 3.22;


  constructor(public formService: FormService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let tabledata = {
      "numbermonth": this.formService.nbOfMonthsPassed.value,
      "tangente": this.tangenteValue,
      "offset": this.offsetValue
    }

    this.sendDataEvent.emit(tabledata);
  }
  changeoffset(e) {
    this.offsetValue = e.target.value;
  }

  changeTangente(e) {
    this.tangenteValue = e.target.value;
  }
}

