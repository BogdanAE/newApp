import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  email: string;
  password: string;
  state: boolean = false;
  accepted: boolean = false;
  disableButton = true;
  textButton:string = "Signup"

  loginEmail(email: string):void {
    this.email = (<HTMLInputElement>event.target).value;
  }

  loginPass(password: string):void {
    this.password = (<HTMLInputElement>event.target).value;
  }

  showData():void {
    this.loginEmail;
    this.loginPass;
    console.log(this.password + ' ' + this.email);
  }

  checkAccept(event):void {
    this.accepted = !this.accepted;
    this.disableButton = !this.disableButton;
  }

  changeState():boolean {
    this.state = !this.state;
    if (this.state)
      this.disableButton = false;
    else
      this.disableButton = true;
    if (this.state)
      this.textButton = "Login";
    else
      this.textButton = "Signup";
    return this.state
  }

  
}
