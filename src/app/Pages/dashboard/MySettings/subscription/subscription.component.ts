import {Component, OnInit, Renderer2} from '@angular/core';
import {FormService} from "../../../../Service/Form/form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private renderer: Renderer2,
             ) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }
  ngOnInit(): void {

  }

}
