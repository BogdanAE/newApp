import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state = false;
  buttonText = "Login";

  constructor(private loginService: LoginService) {
  
   }

  ngOnInit() {
  }

  changeState() {
    this.state = !this.state;
    if(this.state)
      this.buttonText = "SignUp";
    else
      this.buttonText = "Login";
  }
}
