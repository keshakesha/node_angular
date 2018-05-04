import { UserService } from './../../user.service';
import { DialogService } from '../../dialog.service';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { SnackbarService } from '../../snackbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user_list: any;
  users_count = 0;
  dialogRef: any;
  show_errors = false;
  error_list: any;
  error_type: any;
  filter_txt = '';

  constructor(private http: HttpClient, private service: UserService, private dialogservice: DialogService, public dialog: MatDialog, private snackbarservice: SnackbarService, private router: Router) { }

  ngOnInit() {
    // this.getUsers(0);
    this.getPage(1);
  }

  getPage(page: number) {
    // console.log('change to page');
    // console.log($event);
    // this.service.getTotalUsers().subscribe(res => {
    //   this.users_count = res['resp'];
    // });
    if(this.filter_txt == '')
    this.filter_txt = 0;    

    this.service.getUsers(page, this.filter_txt).subscribe(res => {
      this.user_list = res['results'];
    });
  }

  getFilterData(event : any) {

    console.log(this.filter_txt);


    // this.service.getTotalUsers().subscribe(res => {
    //   this.users_count = res['resp'];
    // });
    // this.service.getUsers(page).subscribe(res => {
    //   this.user_list = res['results'];
    // });

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete_user() {
    console.log("Id: ");
    return false;
    // this.service.deleteUser(id).subscribe(data => {
    //   if (data['message'] == 'success') {
    //     this.snackbarservice.display_success_message("User deleted successfully...");
    //     this.router.navigate(['/']);
    //   } else {
    //     this.show_errors = true;
    //     this.snackbarservice.display_error_message("User not deleted...");
    //     // this.router.navigate(['/create']);
    //   }
    // }, err => {
    //   this.show_errors = true;
    //   this.snackbarservice.display_error_message("User not deleted...");
    //   console.log("error occured...");
    //   console.log(err.error.message);
    //   console.log(typeof err.error.message);
    //   this.error_type = typeof err.error.message;
    //   this.error_list = err.error.message;
    // }

    // );
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './../../dialog-content/dialog-content-example-dialog.html',
  // templateUrl: './index.component.html',
})
export class DialogContentExampleDialog { }
