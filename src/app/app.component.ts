import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  show = true;

  array = [1, 2, 3];

  modifyArray() {
    this.array.push(5);
  }
}
