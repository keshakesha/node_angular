import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) { }

  display_success_message(message) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

  display_error_message(message) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}