import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'Calculate Incremental Median';
  newNumbers: String = '';

  addNumbers(newNumbers: string) {
    if (newNumbers) {
      this.newNumbers = newNumbers;
    }
  }
}
