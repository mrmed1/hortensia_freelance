import { Component, OnInit } from '@angular/core';
import {FormService} from "../../../Service/Form/form.service";
import * as $ from 'jquery'
@Component({
  selector: 'app-sigmoidinputsection',
  templateUrl: './sigmoidinputsection.component.html',
  styleUrls: ['./sigmoidinputsection.component.css']
})
export class SigmoidinputsectionComponent implements OnInit {
  constructor(public formService: FormService) { }

  ngOnInit(): void {
    this.rangeSlideTengente();
    this.rangeSlideoffset();
  }

  onSubmit() {
    console.log(this.formService.nbOfMonthsPassed.value)
    let tabledata = {
      "numbermonth": this.formService.nbOfMonthsPassed.value,
      "tangente": $('#TanValue').text(),
      "offset": $('#offsetValue').text()
    }
  }

    // console.log($('#rangeValue').text())

  showVal(e) {
    document.getElementById("mu").innerHTML=e.target.value;
    console.log(e.target.value)
  }



  updateRangeInput(elem) {
    let value = $(elem).val();
    $('value').text(value);
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

