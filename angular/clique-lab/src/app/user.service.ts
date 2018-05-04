import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {

  result: any;
  constructor(private http: HttpClient, private router: Router) { }

  getUsers(page: number, serach: any) {
    const uri = 'http://localhost:3000/index/' + page + '/' + serach;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }

  getTotalUsers() {
    const uri = 'http://localhost:3000/user_count/';
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

  deleteUser(id) {
    const uri = 'http://localhost:3000/delete' + id;

    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }
}