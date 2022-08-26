import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-sso',
  templateUrl: './signup-sso.component.html',
  styleUrls: ['./signup-sso.component.css']
})
export class SignupSSOComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  towithoutSSO() {
    this.router.navigateByUrl("signup")
  }
}
