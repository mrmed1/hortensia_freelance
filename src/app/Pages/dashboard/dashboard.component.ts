import {Component, OnInit, Renderer2} from '@angular/core';
import {FormService} from "../../Service/Form/form.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  inputProj: string = 'raf'

  tableparent = []

  constructor(private renderer: Renderer2,
              public formService: FormService) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }

  receiveMessage($event) {
    console.log($event)
    this.tableparent = $event;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formService.nbOfMonthsPassed.value)
    console.log(this.formService.donePercentage.value)
    console.log(this.formService.inputDataDate.value)

  }


}
