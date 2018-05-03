import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  result: any;
  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    const uri = 'http://localhost:3000/index';
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  addUser(data) {    
    const uri = 'http://localhost:3000/user_signup';
    return this.http.post(uri, data);
  }
}