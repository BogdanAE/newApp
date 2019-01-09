import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {  FormGroup, FormControl,  Validators, PatternValidator} from '@angular/forms';



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
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', Validators.required)
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
    this.loginService.getUser(this.loginForm.value).subscribe((data) => {
      console.log(data);
      if(data){
        this.route.navigate(['home']);
      }
    });
  }

  ngOnDestroy(): void {
    
  }

}
