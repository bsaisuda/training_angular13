import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  datas = [
      {id: 1, name: "somkiat"},
      {id: 2, name: "pui"},
    ];

  doSth(newName: string) {
    console.log(newName);
    this.name = newName;
  }

}
