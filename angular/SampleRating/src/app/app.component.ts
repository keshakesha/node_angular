import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Rating';
  starList: boolean[] = [true, true, true, true, true];       // create a list which contains status of 5 stars
  rating: number;
  selectedHero = true;

  recordList: any[] = [
    { 'Id': 1, 'Framework': 'Angular JS', 'count': 0, 'myList': [true, true, true, true, true] },
    { 'Id': 2, 'Framework': 'Angular 2', 'count': 1, 'myList': [true, true, true, true, true] },
    { 'Id': 3, 'Framework': 'Angular 4', 'count': 2, 'myList': [true, true, true, true, true] },
    { 'Id': 4, 'Framework': 'Angular 5', 'count': 3, 'myList': [true, true, true, true, true] },
    { 'Id': 5, 'Framework': 'Angular 6', 'count': 4, 'myList': [true, true, true, true, true] },

  ];

  //Create a function which receives the value counting of stars click, 
  //and according to that value we do change the value of that star in list.
  setStar(data: any) {
    this.rating = data + 1;
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      }
      else {
        this.starList[i] = true;
      }
    }
  }

  setStarTable(record: any, data: any) {
    this.rating = data + 1;
    var tableList = this.recordList.find(function (obj: any) { return obj.Id === record.Id });
    console.log(tableList);
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        tableList.myList[i] = false;
      }
      else {
        tableList.myList[i] = true;
      }
    }
  }

  setStartable_load(record: any, data: any) {
    console.log("hello");
    this.rating = data + 1;
    var tableList = this.recordList.find(function (obj: any) { return obj.Id === record.Id });
    console.log(tableList);
    for (var i = 0; i <= 4; i++) {
      if (i <= data) {
        tableList.myList[i] = false;
      }
      else {
        tableList.myList[i] = true;
      }
    }
  }

}
