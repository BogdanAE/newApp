import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUser(object){
    // console.log(this.http.get('http://localhost:3000/login'))
    return this.http.post('http://localhost:3000/login', object);
  }
}
