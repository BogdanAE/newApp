import { Component, OnInit, Output, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private route: Router ) {

  }

  @Input() rePassVar;

  ngOnInit() {

  }
  onSubmit() {
    // console.log(this.rePassVar);
    this.route.navigate(['/home']);
  }

}
