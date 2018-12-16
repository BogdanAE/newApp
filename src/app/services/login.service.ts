import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  email;
  password;

  loginEmail(email: string){
    this.email = (<HTMLInputElement>event.target).value;
  }

  loginPass(password: string){
    this.password = (<HTMLInputElement>event.target).value;
  }

  showData(){
    this.loginEmail;
    this.loginPass;
    console.log(this.password +' '+  this.email);

  }
}
