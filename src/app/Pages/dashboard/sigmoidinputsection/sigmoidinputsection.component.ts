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
  constructor(public formService: FormService) { }

  @Output() sendDataEvent = new EventEmitter<any>();
  ngOnInit(): void {
    this.rangeSlideTengente();
    this.rangeSlideoffset();
  }

  onSubmit() {

    let tabledata = {
      "numbermonth": this.formService.nbOfMonthsPassed.value,
      "tangente": $('#TanValue').text(),
      "offset": $('#offsetValue').text()
    }

    this.sendDataEvent.emit(tabledata);
  }


  rangeSlideTengente() {

    $('#tengente').on('change input', function() {
      $('#TanValue').text($('#tengente').val());

    })

  }

  rangeSlideoffset() {
    $('#offset').on('change input', function() {
      $('#offsetValue').text($('#offset').val());

    })
  }
}

