import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {  FormGroup, FormControl,  Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private route: Router ,private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.state = 'login'
    this.cdr.detectChanges();
  }

  state:string = 'login';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repass: new FormControl('', Validators.required),
    checker: new FormControl('', Validators.required)
  });

  ngOnInit() {

  }
  onSubmit() {
    // console.log(this.loginForm.value)
    // this.route.navigate(['/home']);
    let acces;
    this.loginService.getUser(this.loginForm.value).subscribe((data) => {
      console.log(data);
      if(data)
        this.route.navigate(['home']);
    });
  }

}
