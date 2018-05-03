import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pizza-party',
  templateUrl: './pizza-party.component.html',
  styleUrls: ['./pizza-party.component.css']
})
export class PizzaPartyComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1000,
    });
  }

}
