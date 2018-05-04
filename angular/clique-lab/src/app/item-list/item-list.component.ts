import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  // templateUrl: './item-list.component.html',
  template: `
  <ul>
  <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> 
    {{item.name}}
  </li>
</ul>

<pagination-controls (pageChange)="p = $event"></pagination-controls>
  `,
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  p: number = 1;
  collection: any[] = [
    {
      'id' : 1,
      'name' : 'product 1'
    },
    {
      'id' : 2,
      'name' : 'product 2'
    },
    {
      'id' : 3,
      'name' : 'product 3'
    },
    {
      'id' : 4,
      'name' : 'product 4'
    },
    {
      'id' : 5,
      'name' : 'product 5'
    },
    {
      'id' : 6,
      'name' : 'product 6'
    },
    {
      'id' : 7,
      'name' : 'product 7'
    },
    {
      'id' : 8,
      'name' : 'product 8'
    },
    {
      'id' : 9,
      'name' : 'product 9'
    },
    {
      'id' : 10,
      'name' : 'product 10'
    },
    {
      'id' : 11,
      'name' : 'product 11'
    },
    {
      'id' : 12,
      'name' : 'product 12'
    },
    {
      'id' : 13,
      'name' : 'product 13'
    },
    {
      'id' : 14,
      'name' : 'product 14'
    },
    {
      'id' : 15,
      'name' : 'product 15'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
