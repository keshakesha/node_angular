import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  angForm: FormGroup;
  public formdata;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
    this.formdata = {};
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  addCoin(name, price) {
    this.coinservice.addCoin(this.formdata).subscribe(data => {
      if (data['coin'] == 'success')
        this.router.navigate(['/']);
      else
        this.router.navigate(['/create']);
    },
      err => {

      }
    )
      ;
    // this.coinservice.getCoins().subscribe(res => {});
  }
  ngOnInit() {
  }
}