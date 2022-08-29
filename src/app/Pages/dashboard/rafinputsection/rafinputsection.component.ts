import { Component, OnInit } from '@angular/core';
import {FormService} from "../../../Service/Form/form.service";

import * as $ from 'jquery'
@Component({
  selector: 'app-rafinputsection',
  templateUrl: './rafinputsection.component.html',
  styleUrls: ['./rafinputsection.component.css']
})
export class RafinputsectionComponent implements OnInit {

  constructor(public formService: FormService) { }

  ngOnInit(): void {
    this.rangeSlideTengente();
    this.rangeSlideoffset();
  }

  onSubmit() {

   // console.log($('#rangeValue').text())
  }
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
