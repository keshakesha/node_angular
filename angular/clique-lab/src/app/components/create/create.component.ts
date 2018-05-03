import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { SnackbarService } from '../../snackbar.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add User';
  angForm: FormGroup;
  show_errors = false;
  error_list: any;
  error_type : any;

  public userdata;

  constructor(private userservice: UserService, private snackbarservice: SnackbarService, private fb: FormBuilder, private router: Router) {
    this.createForm();
    this.userdata = {};
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: [
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]
      ],
      last_name: [
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]
      ],
      dob: ['', Validators.required],
      email: [
        '',
        [Validators.required,
        Validators.email]
      ],
      phone_number: [
        '',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)]
      ]
    });
  }
  addUser(name, price) {

    this.userservice.addUser(this.userdata).subscribe(data => {
      if (data['message'] == 'success') {
        this.snackbarservice.display_success_message("User added successfully...");
        this.router.navigate(['/']);
      } else {
        console.log("else part");
        this.show_errors = true;
        this.snackbarservice.display_error_message("User not added...");
        // this.router.navigate(['/create']);
      }
    },
      err => {
        this.show_errors = true;
        this.snackbarservice.display_error_message("User not added...");
        console.log("error occured...");
        console.log(err.error.message);
        console.log(typeof err.error.message);        
        this.error_type = typeof err.error.message;
        this.error_list = err.error.message;

      }
    );

  }

  ngOnInit() {
  }

}
