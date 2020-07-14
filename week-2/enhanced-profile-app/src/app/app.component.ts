import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  title: string = 'enhanced-profile-app';
  assignment: string ='Exercise 2.3 - Data binding';
}
