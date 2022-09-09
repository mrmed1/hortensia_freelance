import { Component, OnInit } from '@angular/core';
import {WebRequestService} from "../../../Service/Webrequest/web-request.service";

@Component({
  selector: 'app-checksubscription',
  templateUrl: './checksubscription.component.html',
  styleUrls: ['./checksubscription.component.css']
})
export class ChecksubscriptionComponent implements OnInit {
  hidden: boolean;

  constructor(private webrequest : WebRequestService) { }

  ngOnInit(): void {
    this.webrequest.get("users").subscribe(
      data => console.log(data),
      error => console.error(error)
    )
    this.hidden = false
  }

  sethidden() {
    this.hidden = true
  }
}
