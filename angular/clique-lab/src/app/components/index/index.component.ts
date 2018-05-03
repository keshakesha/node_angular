import { UserService } from './../../user.service';
import { DialogService } from '../../dialog.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user_list: any;
  dialogRef: any;

  constructor(private http: HttpClient, private service: UserService, private dialogservice: DialogService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(res => {
      this.user_list = res.users;
    });
  }

  delete_user() {
    this.dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '150px'
    });

    // this.dialogservice.openDialog();
  }

  this.dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
});

}
