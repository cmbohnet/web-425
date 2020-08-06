/**
 * Title: app.component.ts
 * Author: Chris Bohnet
 * Date: 5 August 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }
}
