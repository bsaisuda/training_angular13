import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'default';

  doSth(newName: string) {
    console.log(newName);
    this.name = newName;
  }

}
