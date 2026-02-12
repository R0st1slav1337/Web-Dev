import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{favoriteFramework}}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  username = 'Rosmert228';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
