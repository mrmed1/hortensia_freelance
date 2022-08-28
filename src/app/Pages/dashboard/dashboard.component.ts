import {Component, OnInit, Renderer2} from '@angular/core';
import {FormService} from "../../Service/Form/form.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  project = new FormControl();

  constructor(private renderer: Renderer2,
              public formService: FormService) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formService.nbOfMonthsPassed.value)
    console.log(this.formService.donePercentage.value)
    console.log(this.formService.inputDataDate.value)

  }

  onChange(e) {
    const sigmoid = document.getElementById("sigmoid");
    const raf = document.getElementById("raf");
    if(e.value == 1)
    {
      raf.style.visibility = 'visible';
      sigmoid.style.visibility = 'none';
    }

    sigmoid.style.visibility = 'visible';
    raf.style.visibility = 'none';

  }
}
