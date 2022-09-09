import {Component, OnInit, Renderer2} from '@angular/core';
import {FormService} from "../../../../Service/Form/form.service";
import {Router} from "@angular/router";
import {WebRequestService} from "../../../../Service/Webrequest/web-request.service";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  tableSubscription = []
  constructor(private renderer: Renderer2,
             private  webRequest : WebRequestService) {
    this.renderer.setStyle(document.body, 'background',
      'none');
  }
  ngOnInit(): void {
    this.webRequest.get("subscriptions").subscribe(
      data => {
        this.tableSubscription.push(data)
        console.log(data[0]["description"])
      },
      error => console.error(error)
    )
  }

}
