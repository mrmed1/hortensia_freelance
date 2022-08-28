import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../Service/Form/form.service";
import {WebRequestService} from "../../Service/Webrequest/web-request.service";
import {TokenstorageService} from "../../Service/Security/tokenstorage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail :string
  mdp : string
  constructor(private router:Router,
              public formService:FormService,
              private webRequest:WebRequestService,
              private tokenStorage:TokenstorageService) { }

  ngOnInit(): void {
  }

  toForget() {
    this.router.navigateByUrl("forget")
  }

  submit() {
    const user = {email : this.mail,password:this.mdp}
    this.webRequest.post("auth/login",user).subscribe(
      data => {
        if (data.status == 200)
          this.router.navigateByUrl("dashboard")
       // console.log(data.status)
      },
      error => {
        console.error(error)
       // console.log(error.status) hounii bech ne5dem il else
      }
    )
  }
}
